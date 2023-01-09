<template>
  <div class="pb-20">
    <!-- back -->
    <div class="px-5 md:px-16">
      <div class="py-12">
        <router-link to="/">
          <button class="px-6 py-1 border rounded shadow-md hover:bg-slate-100">
            -- Back
          </button>
        </router-link>
      </div>

      <!-- country -->
      <div v-if="country" class="flex">
        <img :src="country.flags.svg" class="w-1/2" />
        <div class="py-5 px-10 w-full">
          <h1 class="font-bold text-2xl">{{ country.name.common }}</h1>
          <div class="flex justify-between mt-5">
            <div class="text-xs space-y-2 w-1/2">
              <p><span class="font-bold">Native Name:</span> </p>
              <p>
                <span class="font-bold">Population:</span>
                {{ country.population.toLocaleString("en-US") }}
              </p>
              <p><span class="font-bold">Region:</span> {{ country.region }}</p>
              <p>
                <span class="font-bold">Sub Region:</span>
                {{ country.subregion }}
              </p>
              <p>
                <span class="font-bold">Capital: </span>
                {{ country.capital[0] }}
              </p>
            </div>
            <div class="text-xs space-y-2 w-1/2">
              <p>
                <span class="font-bold">Top Level Domain:</span>
                {{ country.tld[0] }}
              </p>
              <p>
                <span class="font-bold">Currencies: </span>
                <span
                  v-for="currency in Object.values(country.currencies)"
                  :key="currency"
                >
                  {{ currency.name }},
                </span>
              </p>
              <p>
                <span class="font-bold">Languages: </span>
                <span
                  v-for="language in Object.values(country.languages)"
                  :key="language"
                >
                  {{ language }},
                </span>
              </p>
            </div>
          </div>

          <!-- border countries -->
          <div class="mt-10">
            <span class="text-sm w-48">Border Countries:</span>
            <div class="pl-4 space-x-2 inline">
              <button class="px-3 text-xs py-0.5 border rounded">France</button>
              <button class="px-3 text-xs py-0.5 border rounded">France</button>
              <button class="px-3 text-xs py-0.5 border rounded">France</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      country: null,
      name: this.$route.params.country,
    };
  },
  mounted() {
    axios
      .get(`https://restcountries.com/v3.1/name/${this.name}`)
      .then((res) => {
        this.country = res.data[0];
        console.log(this.country);
      });
  },
};
</script>
