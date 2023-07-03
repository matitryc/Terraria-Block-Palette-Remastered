<template>
  <AppModal
    toggler=".modal-toggler"
    @close="emit('close')"
  >
    <form
      class="modal-form h-full"
      @submit.prevent="emit('close')"
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
      <div class="flex gap-6 items-center justify-start w-full">
        <AppButton
          secondary
          :text="`${!editedBlock.name ? 'Add' : 'Edit'}`"
          @click="handleSubmit"
        />
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
        <span
          v-if="error"
          class="text-2xl text-red-800"
        >
          Block must be provided
        </span>
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
const props = defineProps({
  editedBlock: {
    type: Object,
    default: () => {
      return {
        name: '',
        paint: ''
      }
    }
  }
})
const emit = defineEmits(['close', 'addBlock', 'editBlock'])
const selectedPaint = ref(props.editedBlock.paint)
const selectedBlock = ref(props.editedBlock.name)
const error = ref(false)
watch(selectedBlock, () => {
  if(selectedBlock.value){
    error.value = false
  }
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
const handleSubmit = () => {
  if(selectedBlock.value){
    error.value = false
    if(!props.editedBlock.name){ 
      console.log(selectedBlock.value)
      emit('addBlock', {
        name: refactorStringToCapitalCase(selectedBlock.value),
        paint: refactorStringToCapitalCase(selectedPaint.value)
      })
    }
    else {
      emit('editBlock', {
        id: props.editedBlock.id,
        name: refactorStringToCapitalCase(selectedBlock.value),
        paint: refactorStringToCapitalCase(selectedPaint.value)
      })
    }
  }
  else {
    error.value = true
  }
}
onMounted(async () => {
  paintStore.fetchAll()
})
</script>

<style lang="scss" scoped>
</style>