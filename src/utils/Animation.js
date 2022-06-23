import { useEffect, useState } from 'react'
import { keyframes } from 'styled-components'

function easeOutCubic(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

const useCountUp = (target) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const animationDuration = 2000
    const frameDuration = 2000 / 60
    const totalFrames = Math.round(animationDuration / frameDuration)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = easeOutCubic(frame / totalFrames)
      const currentCount = Math.round(target * progress)

      if (target >= currentCount) {
        setCount(currentCount)
      }

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
  }, [target])

  return count
}

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform:translateY(0)
  }

  `
export { fadeInUp, useCountUp }
