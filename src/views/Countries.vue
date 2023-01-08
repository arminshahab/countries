<template>
  <div class="bg-gray-50 pb-10">
    <!-- Header -->
    <Header />

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
              class="h-5 w-5 text-gray-500 dark:text-gray-400"
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
            type="text"
            class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 text-sm text-gray-900 shadow-md"
            placeholder="Search"
          />
        </div>
      </div>

      <!-- select -->
      <select
        class="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-md md:w-1/3"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>

    <!-- cards -->
    <div
      class="grid grid-cols-1 gap-10 px-5 md:px-16 md:grid-cols-2 lg:grid-cols-4"
    >
      <!-- card -->
      <div class="overflow-hidden rounded-md border bg-white shadow-lg">
        <img
          src="https://picsum.photos/200/300"
          class="h-32 w-full object-cover"
        />
        <div class="p-3 py-5 text-sm">
          <h1 class="my-1 text-lg font-bold">Brazil</h1>
          <p><span class="font-bold">Population:</span> 83438734</p>
          <p><span class="font-bold">Region:</span> Asia</p>
          <p><span class="font-bold">Capital:</span> Berlin</p>
        </div>
      </div>
      <!-- card -->
      <div class="overflow-hidden rounded-md border bg-white shadow-lg">
        <img
          src="https://picsum.photos/200/300"
          class="h-32 w-full object-cover"
        />
        <div class="p-3 py-5 text-sm">
          <h1 class="my-1 text-lg font-bold">Brazil</h1>
          <p><span class="font-bold">Population:</span> 83438734</p>
          <p><span class="font-bold">Region:</span> Asia</p>
          <p><span class="font-bold">Capital:</span> Berlin</p>
        </div>
      </div>
      <!-- card -->
      <div class="overflow-hidden rounded-md border bg-white shadow-lg">
        <img
          src="https://picsum.photos/200/300"
          class="h-32 w-full object-cover"
        />
        <div class="p-3 py-5 text-sm">
          <h1 class="my-1 text-lg font-bold">Brazil</h1>
          <p><span class="font-bold">Population:</span> 83438734</p>
          <p><span class="font-bold">Region:</span> Asia</p>
          <p><span class="font-bold">Capital:</span> Berlin</p>
        </div>
      </div>
      <!-- card -->
      <div class="overflow-hidden rounded-md border bg-white shadow-lg">
        <img
          src="https://mainfacts.com/media/images/coats_of_arms/gg.svg"
          class="h-32 w-full object-cover"
        />
        <div class="p-3 py-5 text-sm">
          <h1 class="my-1 text-lg font-bold">Brazil</h1>
          <p><span class="font-bold">Population:</span> 83438734</p>
          <p><span class="font-bold">Region:</span> Asia</p>
          <p><span class="font-bold">Capital:</span> Berlin</p>
        </div>
      </div>
      <!-- card -->
      <div class="overflow-hidden rounded-md border bg-white shadow-lg">
        <img src="https://flagcdn.com/sb.svg" class="w-full object-cover" />
        <div class="p-3 py-5 text-sm">
          <h1 class="my-1 text-lg font-bold">Brazil</h1>
          <p><span class="font-bold">Population:</span> 83438734</p>
          <p><span class="font-bold">Region:</span> Asia</p>
          <p><span class="font-bold">Capital:</span> Berlin</p>
        </div>
      </div>
      <!-- card -->
      <div class="overflow-hidden rounded-md border bg-white shadow-lg">
        <img
          src="https://flagcdn.com/ck.svg"
          class="h-32 w-full object-cover"
        />
        <div class="p-3 py-5 text-sm">
          <h1 class="my-1 text-lg font-bold">Brazil</h1>
          <p><span class="font-bold">Population:</span> 83438734</p>
          <p><span class="font-bold">Region:</span> Asia</p>
          <p><span class="font-bold">Capital:</span> Berlin</p>
        </div>
      </div>
    </div>
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
