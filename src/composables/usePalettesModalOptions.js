import { ref } from 'vue'
const checkedTags = ref([])
const checkedObtainabilities = ref([])
const addTag = (tag) => {
  checkedTags.value.push(tag)
}
const removeTag = (tag) => {
  const index = checkedTags.value.findIndex(el => el == tag)
  if(index !== -1){
    checkedTags.value.splice(index, 1)
  }
}
const addObtainability = (obtainability) => {
  checkedObtainabilities.value.push(obtainability)
}
const removeObtainability = (obtainability) => {
  const index = checkedTags.value.findIndex(el => el == obtainability)
  if(index !== -1){
    checkedTags.value.splice(index, 1)
  }
}
const clearOptions = () => {
  checkedTags.value = []
  checkedObtainabilities.value = []
}
export const usePalettesModalOptions = () => {
  return {
    checkedTags,
    checkedObtainabilities,
    addTag,
    addObtainability,
    removeTag,
    removeObtainability,
    clearOptions
  }
}