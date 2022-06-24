import styled from 'styled-components'

import { useFadeInUp } from '../utils/Animation'

const Container = styled.div`
  width: 400px;
  height: 338px;
  text-align: center;
  background: url(${process.env.PUBLIC_URL}/images/triple2x.png) no-repeat
    center / contain;
`

const Text = styled.span`
  display: inline-block;
  padding-top: 280px;
  font-family: sans-serif;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
`

const ContentLogo = () => {
  const el = useFadeInUp(0.7, 0, 15)
  return (
    <Container {...el}>
      <Text>2019년 2월 기준</Text>
    </Container>
  )
}

export default ContentLogo
