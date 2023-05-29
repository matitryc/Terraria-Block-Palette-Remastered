<template>
  <AppModal
    toggler=".finish-button"
    @close="handleClose"
  >
    <form
      class="form-modal h-full"
      @submit.prevent
    >
      <div class="submit-modal-header flex flex-col gap-3">
        <span class="submit-modal-title">
          Enter your nickname!
        </span>
        <span class="submit-modal-info mb-2">
          (only appropriate are approved)
        </span>
        <input
          v-model="username"
          type="text"
          class="w-full"
        >
      </div>
      <AppButton
        secondary
        type="submit"
        text="Submit"
        class="mt-8"
        @click.prevent="handleClose"
      />
    </form>
  </AppModal>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['close'])
const username = ref('')
const handleClose = () => {
  username.value = ''
  emit('close')
}
</script>

<style lang="scss" scoped>
.submit-modal {
  &-header {
    text-align: center;
    font-size: 1.7rem;
  }
  &-title {
    font-size: 1em;
    line-height: 1em;
  }
  &-info {
    font-size: .8em;
    line-height: 1em;
  }
}
input {
  border-color: $black-main;
  border: 3px solid $black-main;
  border-radius: 100vw;
  padding-inline: .6em;
  font-size: .9em;
}
@media (min-width: 768px) {
  .submit-modal {
    &-header {
      font-size: 2rem;
    }
    &-title {
      font-size: .95em;
    }
  }
}
</style>