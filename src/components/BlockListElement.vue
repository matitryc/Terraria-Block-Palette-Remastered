<template>
  <div
    v-if="block"
    ref="blockRef"
    class="block relative"
    @mouseover="isTooltipActive = true"
    @mousemove="getBlockCursorPosition"
    @mouseout="isTooltipActive = false"
  >
    <div
      class="block-box relative bg-transparent"
    >
      <img
        :src="`https://firebasestorage.googleapis.com/v0/b/terraria-block-palette.appspot.com/o/blocks%2F${block.name}.png?alt=media&.png`"
        alt=""
        class="block-image"
      >
      <img
        v-if="block.paint"
        :src="`https://firebasestorage.googleapis.com/v0/b/terraria-block-palette.appspot.com/o/blocks%2F${block.paint}Paint.png?alt=media&.png`"
        alt=""
        class="block-paint absolute -bottom-2 -right-2"
      >
    </div>
    <BlockListElementTooltip
      :is-active="isTooltipActive"
      :cursor-position="blockCursorPosition"
      :block="block"
      class="block-tooltip"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BlockListElementTooltip from '@/components/BlockListElementTooltip.vue'
defineProps({
  block: {
    type: Object,
    default: null
  }
})
const blockRef = ref(null)
const blockCursorPosition = ref(null)
const getBlockCursorPosition = (e) => {
  const blockSize = blockRef.value.getBoundingClientRect()
  const x = e.clientX - blockSize.left
  const y = e.clientY - blockSize.top
  blockCursorPosition.value = {x, y}
}
const isTooltipActive = ref(false)
</script>

<style lang="scss">
.active-comment {
  opacity: 1;
}
.block {
  width: max-content;
  &-box {
    width: max-content;
  }
  &-image {
    min-height: 25px;
  }
  &-paint {
    min-width: 21px;
    max-width: 21px;
    z-index: 5;
  }
  &:focus &-tooltip {
      outline: none;
      opacity: 1;
    }
  &:hover &-tooltip {
    opacity: 1;
  }
}
</style>