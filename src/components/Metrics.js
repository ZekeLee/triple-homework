import styled from 'styled-components'

import { useFadeInUp } from '../utils/Animation'

const Item = styled.li`
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

  return (
    <ul {...el}>
      <Item>
        <strong>{}만 명</strong>의 여행자
      </Item>
      <Item>
        <strong>{}만 개</strong>의 여행 리뷰
      </Item>
      <Item>
        <strong>{}만 개</strong>의 여행 일정
      </Item>
    </ul>
  )
}

export default Metrics
