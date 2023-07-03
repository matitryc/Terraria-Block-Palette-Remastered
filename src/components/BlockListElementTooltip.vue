<template>
  <div
    v-if="isActive"
    ref="tooltip"
    class="tooltip-content text-center flex flex-col"
  >
    <span>
      {{ refactorUsingSplitWithUppercaseLetters(block.name) }}
    </span>
    <span v-if="block.paint">
      {{ `and ${block.paint} Paint` }}
    </span>
    <span v-else>
      without Paint
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
const tooltip = ref(null)
const setTooltipDirection = (el) => {
  const block =  el.closest('.block')
  const blockSize = block.getBoundingClientRect()
  const fromRight = document.body.clientWidth - blockSize.right
  if(blockSize.left >= fromRight){
    el.setAttribute('data-horizontal-direction', 'left')
  } else {
    el.setAttribute('data-horizontal-direction', 'right')
  }
  const modalBody = block.closest('.main-style-inner-container')
  const modalSize = modalBody.getBoundingClientRect()
  const fromTop = blockSize.top - modalSize.top
  if(modalSize.height / 2 > fromTop){
    el.setAttribute('data-vertical-direction', 'down')
  }
  else {
    el.setAttribute('data-vertical-direction', 'up')
  }
}
watch(tooltip, () => {
  if(tooltip.value){
    setTooltipDirection(tooltip.value)
  }
})
watch(props, (newValue) => {
  if(tooltip.value){
    const horizontalDirection = tooltip.value.getAttribute('data-horizontal-direction')
    const verticalDirection = tooltip.value.getAttribute('data-vertical-direction')
    let transform = ''
    if(horizontalDirection === 'right'){
      transform += `Calc(0px + ${newValue.cursorPosition.x}px)`
    }
    else {
      transform += `Calc(-97% + ${Math.floor(newValue.cursorPosition.x)}px)`
    }
    transform += ', '
    if(verticalDirection === 'up'){
      transform += `Calc(-60px + ${Math.floor(newValue.cursorPosition.y)}px)`
    }
    else {
      transform += `Calc(23px + ${Math.floor(newValue.cursorPosition.y)}px)`
    }
    tooltip.value.style.transform = `translate(${transform})`
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
  isolation: isolate;
}
</style>