<template>
  <div class="bg-gray-300 min-h-screen py-16 px-4">
    <div class="mx-auto container max-w-lg space-y-4">
      <div
        v-for="quote in quotes.data"
        :key="quote.quote"
        class=""
      >
        <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">

          {{ quote.quote }}
        </div>

      </div>
    </div>

    <div class="flex justify-center mt-4">
      <button class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" @click="prev">Prev</button>
      <button class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
async function fetchQuotes(params) {
  return await $fetch('/api/quotes', { params })
}

export default {
  async asyncData() {
    const quotes = await fetchQuotes({
      page: 1
    })

    return {
      quotes,
      page: 1
    }
  },
  methods: {
    async prev() {
      if (this.page === 1) {
        return
      }

      this.quotes = await fetchQuotes({
        page: (--this.page)
      })
    },
    async next() {
      this.quotes = await fetchQuotes({
        page: (++this.page)
      })
    }
  }
}
</script>