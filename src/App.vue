<template>
  <div class="bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen">
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
