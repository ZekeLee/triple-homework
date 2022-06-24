import { useEffect, useRef } from 'react'

const useFadeInUp = (duration = 0, delay = 0, position = 0) => {
  const element = useRef()
  useEffect(() => {
    if (typeof duration !== 'number' || typeof delay !== 'number') {
      return
    }
    if (element.current) {
      const { current } = element
      current.style.transition = `all ${duration}s ease-out ${delay}s`
      current.style.opacity = 1
      current.style.transform = `translateY(0)`
    }
  }, [delay, duration])

  return {
    ref: element,
    style: { opacity: 0, transform: `translateY(${position}px)` },
  }
}

export { useFadeInUp }
