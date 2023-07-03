<template>
  <AppModal
    :toggler="'.filter-button'"
    @close="emit('close')"
  >
    <form
      class="modal-form"
      @submit.prevent="handleFilterOptionsChange"
    >
      <AppButton
        secondary
        text="Save"
        type="submit"
      />
      <div class="flex flex-col sm:flex-row gap-6 w-full">
        <div class="modal-option obtainability">
          <h3 class="text-2xl sm:text-3xl">
            Obtainability
          </h3>
          <PaletteListModalInput
            v-for="obtainability in obtainabilities"
            :key="obtainability"
            :value="obtainability"
            type="radio"
            name="obtainability"
          />
        </div>
        <div
          v-if="tags"
          class="modal-option tags"
        >
          <h3 class="text-2xl sm:text-3xl">
            Tags
          </h3>
          <PaletteListModalInput
            v-for="tag in tags"
            :key="tag.id"
            :value="tag.name"
            type="checkbox"
            name="tag"
          />
        </div>
      </div>
    </form>
  </AppModal>
</template>

<script setup>
import PaletteListModalInput from '@/components/PaletteListModalInput.vue'
import { usePalettesModalOptions } from '@/composables/usePalettesModalOptions'
import { useTagStore } from '@/stores/TagStore.js'
import { usePaletteStore } from '@/stores/PaletteStore.js'
const { tags } = useTagStore()
const paletteStore = usePaletteStore()
const { checkedTags, checkedObtainabilities, clearOptions } = usePalettesModalOptions() 
const emit = defineEmits(['close'])
const obtainabilities = ['Super easy', 'Easy', 'Medium', 'Hard']
const handleFilterOptionsChange = async () => {
  paletteStore.clearPalettes()
  const andConditions = []
  checkedTags.value.forEach(tag => {
    andConditions.push([`tags.${tag}`, '==', true])
  })
  checkedObtainabilities.value.forEach(obtainability => {
    andConditions.push(['obtainability', '==', obtainability])
  })
  await paletteStore.fetchOnConditions({
    andConditions
  })
  clearOptions()
  emit('close')
}
</script>

<style lang="scss" scoped>

</style>