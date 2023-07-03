const clickOutsideDirective = {
  mounted(el, binding){
    el.__clickOutsideHandler__ = e => {
      const elTogglers = [...document.querySelectorAll(binding.value.toggler)]
      const isInAnyToggler = (target) => {
        const isIn = elTogglers.find(toggler => toggler.contains(target))
        if(isIn){
          return true
        }
        return false
      }
      if(!(el === e.target || el.contains(e.target) || elTogglers.includes(e.target) || isInAnyToggler(e.target) || e.target.classList.contains('search-result'))) {
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


