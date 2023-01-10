<template>
  <div class="pb-20">
    <!-- back -->
    <div class="px-5 md:px-16">
      <div class="py-12">
        <router-link to="/">
          <button
            class="flex items-center space-x-1 px-5 py-0.5 border rounded shadow-m dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="dark:fill-white w-4"
              viewBox="0 0 448 512"
            >
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
            <span>Back</span>
          </button>
        </router-link>
      </div>

      <!-- country -->
      <div v-if="country" class="lg:flex">
        <img :src="country.flags.svg" class="lg:w-1/2" />
        <div class="py-5 lg:px-10 w-full dark:text-white">
          <h1 class="font-bold text-2xl">{{ country.name.official }}</h1>
          <div class="md:flex justify-between mt-5">
            <div class="text-xs space-y-2 md:w-1/2">
              <p>
                <span class="font-semibold">Native Name: </span
                >{{ country.name.common }}
              </p>
              <p>
                <span class="font-semibold">Population:</span>
                {{ country.population.toLocaleString("en-US") }}
              </p>
              <p>
                <span class="font-semibold">Region:</span> {{ country.region }}
              </p>
              <p>
                <span class="font-semibold">Sub Region:</span>
                {{ country.subregion }}
              </p>
              <p>
                <span class="font-semibold">Capital: </span>
                {{ country.capital[0] }}
              </p>
            </div>
            <div class="text-xs space-y-2 md:w-1/2 mt-6 md:mt-0">
              <p>
                <span class="font-semibold">Top Level Domain:</span>
                {{ country.tld[0] }}
              </p>
              <p>
                <span class="font-semibold">Currencies: </span>
                <span
                  v-for="currency in Object.values(country.currencies)"
                  :key="currency"
                >
                  {{ currency.name }},
                </span>
              </p>
              <p>
                <span class="font-semibold">Languages: </span>
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
            <span class="text-sm w-48 font-semibold">Border Countries:</span>
            <div
              class="pl-4 space-x-2 inline"
              v-for="border in country.borders"
              :key="border"
            >
              <button class="px-3 text-xs py-0.5 border rounded">
                {{ border }}
              </button>
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
