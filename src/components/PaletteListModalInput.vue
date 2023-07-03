<template>
  <div
    class="flex justify-start items-center gap-2"
  >
    <input
      :id="value"
      :type="type"
      :name="name"
      :value="value"
      @input="handleInput"
    >
    <label
      :for="value"
    >
      {{ value }}
    </label>
  </div>
</template>

<script setup>
import { usePalettesModalOptions } from '@/composables/usePalettesModalOptions.js'
defineProps({
  value: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
const { addTag, removeTag, addObtainability, removeObtainability } = usePalettesModalOptions()
const handleInput = (e) => {
  const isChecked = e.target.checked
  if(isChecked) {
    if(e.target.name == 'tag'){
      addTag(e.target.value)
    } else {
      addObtainability(e.target.value)
    }
  } else {
    if(e.target.name == 'tag'){
      removeTag(e.target.value)
    } else {
      removeObtainability(e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
input[type="radio"],
input[type="checkbox"] {
  appearance: none;
  position: relative;
  background-color: $white-darker;
  border: 2px solid $black-main;
  min-width: .5em;
  min-height: .5em;
  margin-left: .4em;
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }
  &::before {
    background: $black-main;
    transform: scale(0);
    transition: transform .1s;
    z-index: 10;
  }
  &::after {
    background-color: $purple-main;
    opacity: 0;
    transition: opacity .1s;
  }
  &:hover::after {
    opacity: 1;
  }
  &:checked::before {
    transform: scale(1);
  }
}
label {
  font-size: .65em;
  line-height: 1em;;
}
@media (min-width: 576px) {
  label {
    font-size: .55em;
  }
}
</style>