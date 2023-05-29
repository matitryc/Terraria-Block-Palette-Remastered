<template>
  <a
    v-if="link.isSamePage"
    :href="`#${link.href}`"
  >
    {{ link.text }}
  </a>
  <router-link
    v-else
    :to="{ name: link.componentName }"
  >
    {{ link.text }}
  </router-link>
</template>

<script setup>
defineProps({
  link: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>

</style>