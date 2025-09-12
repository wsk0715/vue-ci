<template>
  <CustomerContainer>
    <div class="max-w-6xl mx-auto p-4 pb-20">Hello Store Id: {{ storeId }}</div>
  </CustomerContainer>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import CustomerContainer from "@/components/customer/CustomerContainer.vue";

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
