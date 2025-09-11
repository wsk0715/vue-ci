<template>
  <div
    @click="onClick"
    class="cursor-pointer bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
    <div class="image-placeholder aspect-video w-full">
      <span><img
          :src="store.image"
          alt="store image"
          class="w-full h-full object-cover"
        />
      </img>{{ store.image }}</span>
    </div>
    <div class="p-4">
      <h3 class="mb-2 text-gray-800">{{ store.name }}</h3>
      <div class="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <i data-lucide="star" class="w-4 h-4 text-gray-600"></i>
        <span>{{ store.rating }}</span>
      </div>
      <p class="text-sm text-gray-600">{{ store.description }}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "StoreCard",
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const onClick = () => {
      router.push(`/customer/stores/${props.store.id}`);
    };

    return {
      onClick,
    };
  },
};
</script>
