import styled from 'styled-components'

import { fadeInUp, useCountUp } from '../utils/Animation'

const Item = styled.li`
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 36px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  &:last-child {
    margin-bottom: 0;
  }
  animation: ${fadeInUp} 0.7s 0.1s ease-out;
`

const Metrics = () => {
  const userCount = useCountUp(350)
  const reviewCount = useCountUp(21)
  const scheduleCount = useCountUp(650)

  return (
    <ul>
      <Item>
        <strong>{userCount}만 명</strong>의 여행자
      </Item>
      <Item>
        <strong>{reviewCount}만 개</strong>의 여행 리뷰
      </Item>
      <Item>
        <strong>{scheduleCount}만 개</strong>의 여행 일정
      </Item>
    </ul>
  )
}

export default Metrics
