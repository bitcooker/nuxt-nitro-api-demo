<template>
  <div class="bg-gray-300 py-16 px-4">
    <div class="mx-auto container max-w-lg space-y-4">
      <div
        v-for="quote in quotes"
        :key="quote.quote"
        class=""
      >
        <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">

          {{ quote.quote }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const quotes = await $fetch('/api/quotes')

    return {
      quotes
    }
  }
}
</script>