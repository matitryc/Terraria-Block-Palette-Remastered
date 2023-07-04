<template>
  <div
    class="palette-list md:grid md:grid-cols-2 md:auto-rows lg:grid-cols-3 xl:grid-cols-4 md:gap-7"
  >
    <div
      v-for="palette in palettes"
      :key="palette.id"
      class="palette h-max"
    >
      <div class="palette-info mb-4">
        <h3 class="palette-title">
          {{ palette.title }}
        </h3>
        <p class="palette-obtainability flex flex-col justify-center text-center mb-2">
          Obtainability: 
          <span
            :data-obtainability="palette.obtainability"
            :class="
              { 
                obtainable: palette.obtainability == 'Super easy',
                easily_obtainable: palette.obtainability == 'Easy',
                semi_obtainable: palette.obtainability == 'Medium',
                hardly_obtainable: palette.obtainability == 'Hard'
              }"
          >
            {{ palette.obtainability }}
          </span>
        </p>
        <p
          v-if="palette.username"
          class="text-center text-lg text-gray-800 mb-4"
        >
          submitted by: <span class="text-green-700">{{ palette.username }}</span>
        </p>
        <div class="palette-tags flex flex-wrap justify-center text-center gap-2">
          <em
            v-for="(index, tag) in palette.tags"
            :key="tag"
            class="tag text-xl"
          >
            {{ `${tag}` }} 
          </em>
        </div>
      </div>
      <div class="palette-blocks relative flex items-center flex-wrap gap-5">
        <BlockListElement
          v-for="(block, index) in palette.blocks"
          :key="index"
          :block="block"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import BlockListElement from '@/components/BlockListElement.vue'
import { usePaletteStore } from '@/stores/PaletteStore.js'
const paletteStore = usePaletteStore()
defineProps({
  palettes: {
    type: Array,
    required: true
  }
})
onMounted(() => {
  paletteStore.fetchAll()
})
</script>

<style lang="scss" scoped>
.palette {
  margin-bottom: 1.5rem;
}
.palette-list .palette:last-child {
  margin-bottom: 0;
}
.palette {
  padding: 1rem 1rem 1.4rem 1rem;
  color: $black-main;
  border: 3px solid $black-main;
  border-radius: 16px;
  font-size: 1.7rem;
  &-title{
    margin-bottom: .3em;
    font-size: 1.05em;
    line-height: 1em;
    text-align: center;
  }
  &-obtainability{
    font-size: 0.9em;
    line-height: 1em;
  }
  &-tags {
    font-size: .7em;
    color: $black-light;
    em {
      font-style: normal;
    }
  }
  .tag {
    padding: .125em .8em;
    width: max-content;
    background-color: $white-darker;
    border-radius: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
}
span[data-obtainability="Super easy"] {
  color: $green-main;
}
span[data-obtainability="Easy"] {
  color: $green-light;
}
span[data-obtainability="Medium"] {
  color: $green-light;
}
span[data-obtainability="Hard"] {
  color: $red-main;
}
@media(min-width: 768px) {
  .palette {
    margin-bottom: 0;
    font-size: 1.9rem;
  }
}
@media(min-width: 768px){
  .palette {
    &:nth-child(odd){
      grid-column: 1 / 2
    }
    &:nth-child(even) {
      grid-column: 2 / 3
    }
  }
}
@media(min-width: 992px) {
  .palette {
    font-size: 2rem;
    &:nth-child(3n+1){
      grid-column: 1 / 2
    }
    &:nth-child(3n+2) {
      grid-column: 2 / 3
    }
    &:nth-child(3n+3) {
      grid-column: 2 / 3
    }
  }
}
@media(min-width: 1200px) {
  .palette {
    font-size: 2rem;
    &:nth-child(4n+1){
      grid-column: 1 / 2
    }
    &:nth-child(4n+2) {
      grid-column: 2 / 3
    }
    &:nth-child(4n+3) {
      grid-column: 3 / 4
    }
    &:nth-child(4n+4){
      grid-column: 4 / 5
    }
  }
}
</style>