<template>
  <AppModal
    toggler=".finish-button"
    @close="emit('close')"
  >
    <form
      class="form-modal h-full"
      @submit.prevent="handleSuccess"
    >
      <div class="submit-modal-header flex flex-col gap-3">
        <span class="submit-modal-title">
          Enter your nickname!
        </span>
        <span
          v-if="error"
          class="text-2xl text-red-700"
        >
          Your username should be at least 3 characters long.
        </span>
        <input
          v-model="username"
          type="text"
          class="w-full"
        >
      </div>
      <AppButton
        secondary
        text="Submit"
        class="mt-8"
        @click="submitPalette"
      />
    </form>
  </AppModal>
</template>

<script setup>
import { ref, watch } from 'vue'
import { usePaletteStore } from '@/stores/PaletteStore'
const paletteStore = usePaletteStore()
const emit = defineEmits(['close', 'success'])
const props = defineProps({
  palette: {
    type: Array,
    required: true
  }
})
const username = ref('')
const error = ref(false)
watch(username, () => {
  if(username.value){
    error.value = false
  }
})
const handleSuccess = () => {
  emit('close')
  emit('success')
}
const submitPalette = async (e) => {
  if(!username.value || username.value.length < 3){
    error.value = true
    e.preventDefault()
  }
  else {
    await paletteStore.addToDatabase({
      ...props.palette,
      username: username.value
    })
  }
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