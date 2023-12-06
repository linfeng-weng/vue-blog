import throttle from '@/utils/throttle.js'

export default function useScroll(elRef) {
  let el = window

  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    clientHeight.value = el === window ? document.documentElement.clientHeight : el.clientHeight
    scrollTop.value = el === window ? document.documentElement.scrollTop || document.body.scrollTop : el.scrollTop
    scrollHeight.value = el === window ? document.documentElement.scrollHeight : el.scrollHeight
    // console.log(clientHeight.value, scrollTop.value, scrollHeight.value)
    if (
      Number(clientHeight.value.toFixed(0)) + Number(scrollTop.value.toFixed(0)) + 15 >=
      Number(scrollHeight.value.toFixed(0))
    ) {
      isReachBottom.value = true
    }
  }, 200)

  onMounted(() => {
    // console.log('onMounted')
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    // console.log('onUnmounted')
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  onActivated(() => {
    // console.log('onActivated')
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollListenerHandler)
  })

  onDeactivated(() => {
    // console.log('onDeactivated')
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
