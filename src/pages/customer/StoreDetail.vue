<template>
  <div class="min-h-screen bg-gray-100">
    <main class="max-w-6xl mx-auto p-4 pb-20">Hello Store Id: {{ storeId }}</main>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "StoreDetail",
  setup() {
    const route = useRoute();
    const storeId = ref(route.params.id);

    return {
      storeId,
    };
  },
};
</script>
