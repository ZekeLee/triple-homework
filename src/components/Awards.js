import styled from 'styled-components'

import { fadeInUp } from '../utils/Animation'

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  animation: ${fadeInUp} 0.7s 0.2s ease-out;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  padding-left: 62px;
  height: 54px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: rgba(58, 58, 58, 0.8);
  &:first-child {
    background: url(${process.env.PUBLIC_URL}/images/play-store2x.png) no-repeat
      0 center / contain;
  }
  &:last-child {
    margin-left: 39px;
    background: url(${process.env.PUBLIC_URL}/images/badge-apple4x.png)
      no-repeat 0 center / contain;
  }
`

const Awards = () => (
  <Container>
    <Item>
      2018 구글 플레이스토어
      <br />
      올해의 앱 최우수상 수상
    </Item>
    <Item>
      2018 애플 앱스토어
      <br />
      오늘의 여행앱 선정
    </Item>
  </Container>
)

export default Awards
