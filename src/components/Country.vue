<template>
  <router-link :to="`countries/${country.name.common}`">
    <div
      class="overflow-hidden rounded-md dark:bg-dark-mode-element shadow-xl dark:text-white border-0"
    >
      <img :src="country.flags.svg" class="md:h-32 h-56 w-full object-cover" />
      <div class="p-3 py-5 text-xs space-y-1">
        <h1 class="my-1 text-lg font-bold">{{ country.name.common }}</h1>
        <p>
          <span class="font-semibold">Population:</span>
          {{ country.population.toLocaleString("en-US") }}
        </p>
        <p><span class="font-semibold">Region:</span> {{ country.region }}</p>
        <p v-if="country.capital">
          <span class="font-semibold" v-if="country.capital">Capital: </span>
          {{ country.capital[0] }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Country",
  props: ["country"],
};
</script>
