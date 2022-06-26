import { useEffect, useRef, useState } from 'react'

// useFadeInUp
// duration: 애니메이션 시간, delay: 지연 시간, position: 애니메이션 Y축 값
const useFadeInUp = (duration: number, delay: number, position: number) => {
  const element = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (element.current) {
      const { current } = element
      current.style.transition = `all ${duration}s ease-out ${delay}s`
      current.style.opacity = '1'
      current.style.transform = `translateY(0)`
    }
  }, [delay, duration, position])

  return {
    ref: element,
    style: { opacity: '0', transform: `translateY(${position}px)` },
  }
}

// useCounter
// easing function
function easeOutQuint(x: number): number {
  return 1 - Math.pow(1 - x, 5)
}

// target: 최종 숫자 값, duration: 애니메이션 시간(ms)
const useCounter = (target: number, duration: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const frameDuration = 1000 / 60 // 초당 프레임 수: 1초에 60프레임
    const totalFrame = Math.round(duration / frameDuration) // 총 프레임 수: 총 애니메이션 시간 / 초당 프레임 수
    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuint(frame / totalFrame) // 진행도, 시작과 끝을 0에서 1까지로 나눈 후 이징 함수를 적용해서 속도 조절
      const currentValue = Math.round(target * progress) // 0~1 사이의 진행도와 최종 값을 곱해서 현재 진행 비율에 맞는 값을 저장
      setCount(currentValue)

      if (frame === totalFrame) {
        clearInterval(counter)
      }
    }, frameDuration)
  }, [target, duration])

  return count
}

export { useFadeInUp, useCounter }
