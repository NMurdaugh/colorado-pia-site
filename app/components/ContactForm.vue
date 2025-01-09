<template>
  <UForm
    :schema
    :state
    @submit.prevent="onSubmit"
    class="max-w-2xl min-w-[500px] mx-auto space-y-6"
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
        type="email"
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
  import type { FormSubmitEvent } from "#ui/types";
  import * as yup from "yup";
  import "yup-phone-lite";

  const ui = { input: "dark:bg-gray-800" };

  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().phone("US").required(),
    message: yup.string().required(),
  });

  type Schema = yup.InferType<typeof schema>;

  const state = reactive({
    name: undefined,
    email: undefined,
    phone: undefined,
    message: undefined,
  });

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    console.log(event);
  }

  const loading = ref(false);
</script>
