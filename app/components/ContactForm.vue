<template>
  <UForm
    :schema
    :state
    @submit.prevent="onSubmit"
    class="max-w-2xl lg:min-w-[500px] mx-auto space-y-6"
  >
    <UFormGroup
      label="Full Name"
      name="name"
    >
      <UInput
        v-model="state.name"
        placeholder="Your name"
        icon="i-material-symbols:person-outline"
        :ui
      />
    </UFormGroup>

    <UFormGroup
      label="Email"
      name="email"
    >
      <UInput
        v-model="state.email"
        placeholder="your.email@example.com"
        icon="i-ic:outline-email"
        :ui
      />
    </UFormGroup>

    <UFormGroup
      label="Preferred Phone"
      name="phone"
    >
      <UInput
        v-model="state.phone"
        type="tel"
        placeholder="(555) 555-5555"
        icon="i-ic:outline-phone"
        :ui
      />
    </UFormGroup>

    <UFormGroup
      label="Give a brief description of your issue and desired outcome"
      name="message"
    >
      <UTextarea
        v-model="state.message"
        placeholder="How can we help you?"
        :ui
        :rows="4"
        autoresize
      />
    </UFormGroup>

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
  import { object, string, type InferType } from "yup";
  import "yup-phone-lite";

  const ui = { input: "dark:bg-gray-800" };

  const schema = object({
    name: string().required(),
    email: string().email().required(),
    phone: string().phone("US").required(),
    message: string().required(),
  });

  type Schema = InferType<typeof schema>;

  const state = reactive({
    name: undefined,
    email: undefined,
    phone: undefined,
    message: undefined,
  });

  const form = ref<Form<Schema>>();

  const loading = ref(false);

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
      loading.value = true;
      const response = await $fetch("/api/contact", {
        method: "POST",
        body: {
          name: state.name,
          email: state.email,
          phone: state.phone,
          message: state.message,
        },
      });

      if (response.body.success) {
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
