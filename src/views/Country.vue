<template>
  <Header />
  <!-- back -->
  <div class="px-5 md:px-16">
    <div class="py-12">
      <button class="px-6 py-1 border rounded shadow-md">-- Back</button>
    </div>

    <!-- country -->
    <div class="flex">
      <img src="https://flagcdn.com/ck.svg" class="w-1/2" />
      <div class="py-5 px-10 w-full">
        <h1 class="font-bold text-2xl">Belgiom</h1>
        <div class="flex justify-between mt-5">
          <div class="text-xs space-y-2">
            <p><span class="font-bold">Native Name:</span> Belcika</p>
            <p><span class="font-bold">Native Name:</span> Belcika</p>
            <p><span class="font-bold">Native Name:</span> Belcika</p>
            <p><span class="font-bold">Native Name:</span> Belcika</p>
            <p><span class="font-bold">Native Name:</span> Belcika</p>
          </div>
          <div class="text-xs space-y-2">
            <p><span class="font-bold">Native Name:</span> lorem30</p>
            <p><span class="font-bold">Native Name:</span> Belcika</p>
            <p><span class="font-bold">Native Name:</span> Belcika</p>
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
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
};
</script>

<style></style>
