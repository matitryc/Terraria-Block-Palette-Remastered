<template>
  <section
    id="palettes"
    ref="section"
    class="palettes section"
  >
    <div class="wrapper">
      <h2 class="section-title">
        Palettes
      </h2>
      <div class="main-style-outer-container w-full">
        <div class="main-style-inner-container w-full">
          <div class="palettes-header flex flex-col sm:flex-row gap-2">
            <AppSearch
              placeholder="Search tags"
              class="w-full"
              :results="tagResults"
              @value-change="value => tagSearchValue = value"
              @search-success="value => paletteStore.fetchOnConditions({
                where: [`tags.${value}`, '==', true]
              })"
            />
            <div class="palettes-option-box flex gap-2 justify-between items-center opacity-75">
              <span class="sm:hidden">More options</span>
              <button
                aria-label="Open filtering options for palettes"
                class="filter-button relative z-10"
                @click="isPaletteModalActive = true"
              >
                <img
                  src="@/assets/filter.svg"
                  alt=""
                  class="icon default h-14 p-1 md:p-0 z-0"
                >
                <img
                  src="@/assets/filter.svg"
                  alt=""
                  class="icon focus absolute w-full h-full top-0 p-1 md:p-0"
                >
              </button>
            </div>
          </div>
          <PaletteList
            v-if="palettes"
            :palettes="palettes"
          />
          <p
            v-if="palettes.length === 0"
            class="text-black text-3xl"
          >
            Oops, no palettes found. Try again later or reset filter options.
          </p>
        </div>
        <PaletteListModal
          v-if="isPaletteModalActive"
          @close="isPaletteModalActive = false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import PaletteList from '@/components/PaletteList.vue'
import PaletteListModal from '@/components/PaletteListModal.vue'
import { useTagStore } from '@/stores/TagStore.js'
import { usePaletteStore } from '@/stores/PaletteStore.js'
const tagStore = useTagStore()
const paletteStore = usePaletteStore()
defineProps({
  palettes: {
    type: Array,
    required: true
  }
})
const section = ref(null)
const isPaletteModalActive = ref(false)
const tagSearchValue = ref('')
const tagResults = ref([])
watch(tagSearchValue, async () => {
  if(tagSearchValue.value == '') {
    tagResults.value = []
  } else {
    tagResults.value = tagStore.getTagsContainingPhrase(tagSearchValue.value.toLowerCase())
  }
})
onMounted(() => {
  tagStore.fetchAll()
})
</script>

<style lang="scss" scoped>

</style>