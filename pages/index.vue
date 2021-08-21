<script setup>
import { ref, useAsync } from '@nuxtjs/composition-api';

const page = ref(1);
const quotes = useAsync(() => fetchQuotes({ page: 1 }));

async function fetchQuotes(params) {
  return await $fetch('/api/quotes', { params })
}

async function prev() {
  if (page.value === 1) {
    return
  }

  quotes.value = await fetchQuotes({
    page: (--page.value)
  })
}

async function next() {
  quotes.value = await fetchQuotes({
    page: (++page.value)
  })
}
</script>


<template>
  <div class="bg-gray-300 min-h-screen py-16 px-4">
    <div class="mx-auto container max-w-lg space-y-4">
      <div v-for="quote in quotes.data" :key="quote.quote" class="">
        <div
          class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          {{ quote.quote }}
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-4">
      <button
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        @click="prev"
      >
        Prev
      </button>
      <button
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
</template>