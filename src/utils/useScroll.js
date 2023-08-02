import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

// 自定义节流函数
function throttle(fn, delay) {
    let timer = null
    let startTime = Date.now()

    return function(...args) {
        const curTime = Date.now()
        const remaining = delay - (curTime - startTime)
        clearTimeout(timer)

        if(remaining <= 0) {
            fn.apply(this, args)
            startTime = Date.now()
        }else { 
            timer = setTimeout(fn, remaining)
        }  
    }
}


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
        // console.log(clientHeight.value,scrollTop.value,scrollHeight.value)
        if(clientHeight.value + scrollTop.value + 15 >= scrollHeight.value ) {
            isReachBottom.value = true
        }

    }, 200)

    onMounted(() => {
        // console.log('onMounted')
        if (elRef) el = elRef.value
        el.addEventListener("scroll", scrollListenerHandler)
      })
      
      onUnmounted(() => {
        // console.log('onUnmounted')
        el.removeEventListener("scroll", scrollListenerHandler)
      })

      onActivated(() => {
        // console.log('onActivated')
        if (elRef) el = elRef.value
        el.addEventListener("scroll", scrollListenerHandler)
      })

      onDeactivated(() => {
        // console.log('onDeactivated')
        el.removeEventListener("scroll", scrollListenerHandler)
      })
    
      return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}

