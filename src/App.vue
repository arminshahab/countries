<template>
  <div class="bg-gray-50 dark:bg-[#202C37] min-h-screen">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
