import styled from 'styled-components'

import { useFadeInUp, useCounter } from '../utils/Animation'

const Item = styled.div`
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 36px;
  color: rgb(58, 58, 58);
  letter-spacing: -1px;
  &:last-child {
    margin-bottom: 0;
  }
`

const Metrics = () => {
  const el = useFadeInUp(0.7, 0.1, 10)
  const userCount = useCounter(350, 2000)
  const reviewCount = useCounter(21, 2000)
  const productCount = useCounter(650, 2000)
  return (
    <div {...el}>
      <Item>
        <strong>{userCount}만 명</strong>의 여행자
      </Item>
      <Item>
        <strong>{reviewCount}만 개</strong>의 여행 리뷰
      </Item>
      <Item>
        <strong>{productCount}만 개</strong>의 여행 일정
      </Item>
    </div>
  )
}

export default Metrics
