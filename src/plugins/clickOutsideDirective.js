const clickOutsideDirective = {
  mounted(el, binding){
    el.__clickOutsideHandler__ = e => {
      const elToggler = document.querySelector(binding.value.toggler)
      if(!(el === e.target || el.contains(e.target) || e.target == elToggler || elToggler.contains(e.target))) {
        binding.value.perform(e)
      }
    }
    document.body.addEventListener('click', el.__clickOutsideHandler__)
  },
  unmounted(el){
    document.body.removeEventListener('click', el.__clickOutsideHandler__)  
  }
}
export default (app) => {
  app.directive('click-outside', clickOutsideDirective)
}


