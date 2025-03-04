<template>
  <UForm
    v-if="data"
    :schema="schema"
    :state="state"
    @submit.prevent="onSubmit"
    class="max-w-2xl lg:min-w-[500px] mx-auto space-y-6"
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

    <div class="flex justify-end">
      <UButton
        type="submit"
        color="primary"
        :id="1"
        :loading="loading"
        :disabled="loading"
      >
        {{ loading ? "Sending..." : "Send Message" }}
      </UButton>
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
    botcheck: undefined, // Add honeypot field to prevent spam
  });

  const form = ref<Form<ContactFormSchema>>();

  const loading = ref(false);

  interface Web3FormsResponse {
    success: boolean;
    message?: string;
    data: object;
  }

  async function onSubmit(event: FormSubmitEvent<ContactFormSchema>) {
    try {
      loading.value = true;

      // Prepare data for submission
      const formData = { ...state };

      formData.subject = `New Lead: ${formData.name}`; // Add name to subject

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
        // You might want to show a success message to the user here
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You might want to show an error message to the user here
    } finally {
      loading.value = false;
    }
  }
</script>
