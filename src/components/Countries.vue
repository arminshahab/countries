<template>
  <div
    v-if="countries"
    class="grid grid-cols-1 gap-10 px-5 md:px-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <!-- country -->
    <div v-for="country in countries" :key="country.population">
      <Country :country="country" />
    </div>
  </div>
</template>

<script>
import Country from "@/components/Country.vue";

export default {
  name: "Countries",
  components: { Country },
  props: ["countries"],
};
</script>
