<template>
  <li
    class="block w-full h-full text-center text-3xl sm:text-4xl"
  >
    <AppLink
      :link="link"
      class="block py-4"
      @click="emit('close')"
    />
  </li>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['close'])
</script>

<style lang="scss" scoped>
</style>