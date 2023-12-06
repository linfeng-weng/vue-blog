// 自定义节流函数
export default function throttle(fn, delay) {
  let timer = null
  let startTime = Date.now()

  return function (...args) {
    const curTime = Date.now()
    const remaining = delay - (curTime - startTime)
    clearTimeout(timer)

    if (remaining <= 0) {
      fn.apply(this, args)
      startTime = Date.now()
    } else {
      timer = setTimeout(fn, remaining)
    }
  }
}
