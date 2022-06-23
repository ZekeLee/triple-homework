import styled from 'styled-components'

import GlobalStyle from './Styles/GlobalStyle'
import Section from './views/Section'
import ContentLogo from './components/ContentLogo'
import Metrics from './components/Metrics'
import Awards from './components/Awards'

const Contents = styled.div`
  margin-left: 223px;
`

const App = () => (
  <>
    <GlobalStyle />
    <Section>
      <ContentLogo />
      <Contents>
        <Metrics />
        <Awards />
      </Contents>
    </Section>
  </>
)

export default App
