// utils.js
// immediate 是否开始立即执行
export function debounce(func, delay = 300, immediate = false) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate && !timer) {
      func.apply(this, arguments)
    }
    timer = setTimeout(() => {
      func.apply(this, arguments)
    }, delay)
  }
}

// utils.js
export function throttle(func, delay = 300) {
  let prev = 0
  return function () {
    let now = Date.now()
    if (now - prev >= delay) {
      func.apply(this, arguments)
      prev = Date.now()
    }
  }
}
