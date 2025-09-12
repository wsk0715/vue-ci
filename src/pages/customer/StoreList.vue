<template>
  <div class="bg-gray-100">
    <main class="max-w-6xl mx-auto p-4">
      <section>
        <h2 class="mb-4 text-gray-800 text-2xl font-bold">음식점 목록</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StoreCard v-for="store in stores" :key="store.id" :store="store" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import StoreCard from "@/components/customer/StoreCard.vue";

export default {
  name: "Stores",
  components: {
    StoreCard,
  },
  setup() {
    const stores = ref([]);

    onMounted(async () => {
      stores.value = [
        {
          id: 1,
          name: "Store 1",
          image: "https://placehold.co/300x200",
          description: "Description 1",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Store 2",
          image: "https://placehold.co/300x200",
          description: "Description 2",
          rating: 4.5,
        },
      ];
    });

    return {
      stores,
    };
  },
};
</script>
