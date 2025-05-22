<template>
  <UForm
    v-if="data"
    :schema="schema"
    :state="state"
    @submit.prevent="onSubmit"
    class="max-w-2xl sm:min-w-[500px] mx-auto space-y-6"
  >
    <UFormGroup
      :label="data.form.name.label"
      name="name"
    >
      <UInput
        v-model="state.name"
        :placeholder="data.form.name.placeholder"
        :icon="data.form.name.icon"
        :ui="ui"
      />
    </UFormGroup>

    <UFormGroup
      :label="data.form.email.label"
      name="email"
    >
      <UInput
        v-model="state.email"
        :placeholder="data.form.email.placeholder"
        :icon="data.form.email.icon"
        :ui="ui"
      />
    </UFormGroup>

    <UFormGroup
      :label="data.form.phone.label"
      name="phone"
    >
      <UInput
        v-model="state.phone"
        type="tel"
        :placeholder="data.form.phone.placeholder"
        :icon="data.form.phone.icon"
        :ui="ui"
      />
    </UFormGroup>

    <UFormGroup
      :label="data.form.message.label"
      name="message"
    >
      <UTextarea
        v-model="state.message"
        :placeholder="data.form.message.placeholder"
        :ui="ui"
        :rows="4"
        autoresize
      />
    </UFormGroup>

    <UCheckbox
      v-model="state.botcheck"
      label="I am not a robot"
      name="botcheck"
      class="hidden"
    />

    <div class="flex lg:flex-row flex-col justify-between place-items-end">
      <div
        class="cf-turnstile"
        :data-sitekey="turnstileSiteKey"
        data-theme="dark"
        data-callback="onTurnstileCallback"
        name="turnstile"
      ></div>
      <div class="flex items-end">
        <UButton
          class="h-auto mb-2"
          type="submit"
          color="primary"
          :id="1"
          :loading="loading"
          :disabled="loading"
        >
          {{ loading ? "Sending..." : "Send Message" }}
        </UButton>
      </div>
    </div>
  </UForm>
</template>

<script setup lang="ts">
  import type { Form, FormSubmitEvent } from "#ui/types";
  import {
    getContactFormSchema,
    type ContactFormSchema,
  } from "~/schemas/contactForm";

  const { data } = await useAsyncData("contact-form", () =>
    queryContent("/forms/contactform").findOne()
  );

  const runtimeConfig = useRuntimeConfig();

  const turnstileSiteKey = runtimeConfig.public.TURNSTILE_SITEKEY;

  const ui = { input: "dark:bg-gray-800" };

  const errors = {
    name: data.value?.form.name.error,
    email: data.value?.form.email.error,
    phone: data.value?.form.phone.error,
    message: data.value?.form.message.error,
  };

  const schema = getContactFormSchema(errors); // used in template

  const state = reactive({
    access_key: runtimeConfig.public.WEB3FORMS_ACCESS_KEY_NICK, // Using the key directly as provided
    subject: "New Lead",
    name: undefined,
    email: undefined,
    phone: undefined,
    message: undefined,
    botcheck: false, // Add honeypot field to prevent spam
    turnstile: undefined as undefined | string, // Cloudflare Turnstile token
  });

  const form = ref<Form<ContactFormSchema>>();

  const loading = ref(false);

  const toast = useToast();

  interface Web3FormsResponse {
    success: boolean;
    message?: string;
    data: object;
  }

  // Define the Turnstile callback function globally
  onMounted(() => {
    window.onTurnstileCallback = (token: string) => {
      state.turnstile = token;
    };
  });

  async function onSubmit(event: FormSubmitEvent<ContactFormSchema>) {
    try {
      loading.value = true;

      // Check if turnstile token exists
      if (!state.turnstile) {
        toast.add({
          title: "Verification Required",
          description: "Please complete the Cloudflare Turnstile verification",
          color: "orange",
        });
        loading.value = false;
        return;
      }

      // Verify the Turnstile token with our server API
      const verifyResult = await $fetch("/api/verify-turnstile", {
        method: "POST",
        body: {
          token: state.turnstile,
        },
      });

      if (!verifyResult.success) {
        toast.add({
          title: "Verification Failed",
          description:
            "Cloudflare Turnstile verification failed. Please try again.",
          color: "red",
        });

        // Reset Turnstile widget
        if (window.turnstile) {
          window.turnstile.reset();
        }

        loading.value = false;
        return;
      }

      // Prepare data for submission, adding all data but turnstile token
      const { turnstile, ...formData } = state;
      formData.subject = `New Lead: ${formData.name}`;

      const response = await $fetch<Web3FormsResponse>(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: formData,
        }
      );

      console.log(response);
      if (response.success) {
        // Reset form
        state.name = undefined;
        state.email = undefined;
        state.phone = undefined;
        state.message = undefined;
        state.turnstile = undefined;

        // Reset Turnstile widget
        if (window.turnstile) {
          window.turnstile.reset();
        }
        // You might want to show a success message to the user here
        toast.add({
          title: data.value?.form.success.title,
          description: data.value?.form.success.message,
          color: "primary",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You might want to show an error message to the user here
      toast.add({
        title: data.value?.form.error.title,
        description: data.value?.form.error.message,
        color: "brightred",
      });
    } finally {
      loading.value = false;
    }
  }
</script>
