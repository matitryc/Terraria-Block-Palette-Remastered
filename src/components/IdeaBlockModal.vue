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
        :results="blockResults"
        @value-change="value => blockSearch = value"
        @search-success="value => selectedBlock = value"
      />
      <AppSearch
        placeholder="Search for paint"
        :results="paintResults"
        @value-change="value => paintSearch = value"
        @search-success="value => selectedPaint = value"
      />
      <div class="flex gap-6 items-center">
        <div class="block-preview">
          <div
            v-if="!selectedBlock"
            class="border-dashed border-2 border-neutral-900 w-14 h-14"
          />
          <BlockListElement
            v-else
            :block="{
              name: selectedBlock,
              paint: selectedPaint
            }"
          />
        </div>
        <AppButton
          secondary
          text="Add"
          @click.prevent="emit('close')"
        />
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import BlockListElement from '@/components/BlockListElement.vue'
import { refactorStringToCapitalCase } from '@/helpers'
import { usePaintStore } from '@/stores/PaintStore.js'
import { useBlockStore } from '@/stores/BlockStore.js'
const paintStore = usePaintStore()
const blockStore = useBlockStore()
const emit = defineEmits(['close'])
const selectedPaint = ref('')
watch(selectedPaint, () => {
  selectedPaint.value = refactorStringToCapitalCase(selectedPaint.value)
})
const selectedBlock = ref('')
watch(selectedBlock, () => {
  selectedBlock.value = refactorStringToCapitalCase(selectedBlock.value)
})
const blockSearch = ref('')
watch(blockSearch, async () => {
  const searchValueRefactored = refactorStringToCapitalCase(blockSearch.value)
  const minWordLength = 3
  if(searchValueRefactored.length >= minWordLength){
    await blockStore.fetchOnConditions({
      andConditions:  [
        //contains the beggining or end of the string
        ['name', '>=', searchValueRefactored],
        ['name', '<=', searchValueRefactored + '\uf8ff']
      ]
    })
  }
})
const blockResults = computed(() => {
  return blockStore.getOnesContainingPhrase(blockSearch.value.toLowerCase())
})
const paintSearch = ref('')
const paintResults = computed(() => {
  return paintStore.getOnesContainingPhrase(paintSearch.value.toLowerCase())
})
onMounted(async () => {
  paintStore.fetchAll()
})
</script>

<style lang="scss" scoped>
</style>