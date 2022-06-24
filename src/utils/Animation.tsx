import { useEffect, useRef, useState } from 'react'

const useFadeInUp = (duration: number, delay: number, position: number) => {
  const element = useRef<HTMLElement>(null)
  useEffect(() => {
    if (element.current) {
      const { current } = element
      current.style.transition = `all ${duration}s ease-out ${delay}s`
      current.style.opacity = `1`
      current.style.transform = `translateY(0)`
    }
  }, [delay, duration, position])

  return {
    ref: element,
    style: { opacity: 0, transform: `translateY(${position}px)` },
  }
}

function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}

const useCounter = (target: number): number => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const animateDuration = 2000
    const frameDuration = 2000 / 120
    const totalFrame = Math.floor(animateDuration / frameDuration)
    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = easeOutCirc(frame / totalFrame)
      const currentCount = Math.floor(target * progress)

      console.log(currentCount)

      if (target >= currentCount) {
        setCount(currentCount)
      }

      if (frame === totalFrame) {
        clearInterval(counter)
      }
    }, frameDuration)
  }, [target])
  return count
}

export { useFadeInUp, useCounter }
