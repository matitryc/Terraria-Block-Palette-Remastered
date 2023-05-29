export default () => {
  const html = document.querySelector('html')
  const mobileNav = document.querySelector('nav .mobile')
  const desktopNav = document.querySelector('nav .desktop')
  if (document.body.clientWidth < 992) {
    html.style.scrollPaddingTop = mobileNav.offsetHeight + 'px'
  } else {
    html.style.scrollPaddingTop = desktopNav.offsetHeight + 'px'
  }
}
 