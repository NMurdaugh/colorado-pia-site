<template>
  <form
    @submit.prevent="handleSubmit"
    class="max-w-2xl min-w-[500px] mx-auto space-y-6"
  >
    <UFormGroup
      label="Full Name"
      name="name"
    >
      <UInput
        v-model="form.name"
        placeholder="Your name"
        icon="i-material-symbols:person-outline"
        :ui
        required
      />
    </UFormGroup>

    <UFormGroup
      label="Email"
      name="email"
    >
      <UInput
        v-model="form.email"
        type="email"
        placeholder="your.email@example.com"
        icon="i-ic:outline-email"
        :ui
        required
      />
    </UFormGroup>

    <UFormGroup
      label="Preferred Phone"
      name="phone"
    >
      <UInput
        v-model="form.phone"
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
        v-model="form.message"
        placeholder="How can we help you?"
        :ui
        :rows="4"
        autoresize
        required
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

    <UNotification
      v-if="notification.show"
      :type="notification.type"
      :id="1"
      :timeout="5000"
      :description="notification.message"
      class="mt-4"
    />
  </form>
</template>

<script setup lang="ts">
  const ui = { input: "dark:bg-gray-800" };

  const form = ref({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const loading = ref(false);
  const notification = ref({
    show: false,
    type: "success",
    message: "",
  });

  const handleSubmit = async () => {
    loading.value = true;

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      notification.value = {
        show: true,
        type: "success",
        message: "Thank you for your message! We will get back to you soon.",
      };

      // Reset form
      form.value = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    } catch (error) {
      notification.value = {
        show: true,
        type: "error",
        message: "There was an error sending your message. Please try again.",
      };
    } finally {
      loading.value = false;

      // Hide notification after 5 seconds
      setTimeout(() => {
        notification.value.show = false;
      }, 5000);
    }
  };
</script>
