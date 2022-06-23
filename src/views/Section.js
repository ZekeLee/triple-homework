import styled from 'styled-components'

import ContentLogo from '../components/ContentLogo'
import Metrics from '../components/Metrics'
import Awards from '../components/Awards'

const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 150px;
  width: 1200px;
`
const Contents = styled.div`
  margin-left: 223px;
`

const Section = () => (
  <Container>
    <ContentLogo />
    <Contents>
      <Metrics />
      <Awards />
    </Contents>
  </Container>
)

export default Section
