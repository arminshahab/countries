<template>
  <div class="pb-10">
    <!-- search and select -->
    <div
      class="items-baseline justify-between space-y-3 py-8 px-5 md:px-16 md:flex"
    >
      <!-- Search -->
      <div class="md:w-1/3">
        <div class="relative w-full">
          <div
            class="pointer-events-none absolute inset-y-0 flex items-center pl-3"
          >
            <svg
              aria-hidden="true"
              class="h-5 dark:fill-light-mode-bg w-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            v-model="search"
            @input="fetchCountries()"
            type="text"
            class="block w-full rounded-lg border-gray-300 p-2.5 pl-10 text-sm text-gray-900 shadow-md dark:bg-dark-mode-element border-0 dark:text-white"
            placeholder="Search"
          />
        </div>
      </div>

      <!-- select -->
      <select
        class="block rounded-lg border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-md md:w-1/3 dark:bg-dark-mode-element dark:text-white border-0"
        v-model="region"
        @change="fetchCountriesWithRegion()"
      >
        <option value="">Filter by region</option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>

    <!-- countries -->
    <Countries :countries="countries" />
  </div>
</template>

<script>
import axios from "axios";
import Countries from "@/components/Countries.vue";

export default {
  name: "Home",
  components: { Countries },

  data() {
    return {
      countries: null,
      search: "",
      region: "",
    };
  },

  methods: {
    fetchCountries() {
      this.region = "";
      axios
        .get(
          `https://restcountries.com/v3.1/${this.search ? "name" : "all"}/${
            this.search
          }`
        )
        .then((res) => {
          this.countries = res.data;
        });
    },

    fetchCountriesWithRegion() {
      this.search = "";
      if (this.region == "all") {
        this.fetchCountries();
        return;
      }
      axios
        .get(`https://restcountries.com/v3.1/region/${this.region}`)
        .then((res) => {
          this.countries = res.data;
        });
    },
  },

  mounted() {
    this.fetchCountries();
  },
};
</script>
