<template>
  <div
    v-if="isActive"
    ref="tooltip"
    class="tooltip-content text-center flex flex-col"
  >
    <span>
      {{ `${blockNameRefactored}` }}
    </span>
    <span v-if="block.paint">
      {{ `and ${block.paint} Paint` }}
    </span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { refactorUsingSplitWithUppercaseLetters } from '@/helpers'
const props = defineProps({
  block: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  cursorPosition: {
    type: Object,
    default: null
  }
})
const blockNameRefactored = refactorUsingSplitWithUppercaseLetters(props.block.name)
const tooltip = ref(null)
const setTooltipDirection = (el) => {
  const block =  el.closest('.block')
  const blockSize = block.getBoundingClientRect()
  const fromRight = document.body.clientWidth - blockSize.right
  if(blockSize.left >= fromRight){
    return el.setAttribute('data-direction', 'left')
  } else {
    return el.setAttribute('data-direction', 'right')
  }
}
watch(tooltip, () => {
  if(tooltip.value){
    setTooltipDirection(tooltip.value)
  }
})
watch(props, (newValue) => {
  if(tooltip.value){
    const direction = tooltip.value.getAttribute('data-direction')
    if(direction == 'right'){
      tooltip.value.style.transform = `translate(Calc(0px + ${newValue.cursorPosition.x}px), Calc(-60px + ${newValue.cursorPosition.y}px))`
    }
    else if(direction == 'left'){
      tooltip.value.style.transform = `translate(Calc(-97% + ${Math.floor(newValue.cursorPosition.x)}px), Calc(-60px + ${Math.floor(newValue.cursorPosition.y)}px))`
    }
  }
})
</script>

<style lang="scss" scoped>
.block-tooltip {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: max-content;
  max-width: 44vw;
  padding: .35em .5em .25em;
  background-color: $white-main;
  border: 3px solid $black-main;
  border-radius: 12px;
  color: $black-main;
  font-size: 1.4rem;
  line-height: 1em;
  opacity: 1;
  transition: opacity .2s;
  z-index: 15;
  pointer-events: none;
}
</style>