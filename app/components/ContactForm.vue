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

  function onSubmit(event: FormSubmitEvent<Schema>) {
    $fetch("https://formsubmit.co/ajax/nmurdaugh42@gmail.com", {
      parseResponse: JSON.parse,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "Contact Form",
        message: `Name: ${state.name}\nEmail: ${state.email}\nPhone: ${state.phone}\nMessage: ${state.message}`,
      }),
    })
      .then((response: any) => {
        if (response.success === "true") {
          console.log("success");
        }
        console.log(response.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const loading = ref(false);
</script>
