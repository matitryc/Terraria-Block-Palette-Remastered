<template>
  <AppModal
    toggler=".add-block"
    @close="emit('close')"
  >
    <form
      class="modal-form h-full"
      @submit.prevent
    >
      <AppSearch
        placeholder="Search for a block"
      />
      <AppSearch
        placeholder="Search for paint"
        :results="paintResults"
        @value-change="value => handlePaintSearch(value)"
      />
      <AppButton
        secondary
        text="Add"
        @click.prevent="emit('close')"
      />
    </form>
  </AppModal>
</template>

<script setup>
import { ref } from 'vue'
import { usePaintStore } from '@/stores/PaintStore.js'
const paintStore = usePaintStore()
const emit = defineEmits(['close'])
const paintResults = ref([])
const handlePaintSearch = (searchValue) => {
  paintResults.value = paintStore.getPaintContainingPhrase(searchValue.toLowerCase())
}
</script>

<style lang="scss" scoped>
</style>