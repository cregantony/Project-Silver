import React from 'react'
import styled from 'styled-components'
import placeholder from '../images/placeholder.svg'

const StyledSection = styled.section`
  margin-top: 6em;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledCards = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  grid-column-gap: 2em;

  h2 {
    font-family: orpheuspro, serif;
    color: var(--orange);
    font-size: 1.8em;
    text-align: left;
  }
  h4 {
    font-size: 2em;
    color: var(--orange);
    font-family: orpheuspro, serif;
    margin: 0;
  }
  button {
    font-family: orpheuspro, serif;
    color: var(--orange);
    font-size: 1.5em;
    margin-top: 1em;
  }
`

const Addon = () => (
  <StyledSection>
    <h2>Addons:</h2>
    <StyledContainer>
      <StyledCards>
        <img src={placeholder} alt="#" />
        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign.
        </p>
        <img src={placeholder} alt="#" />
        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign.
        </p>
        <img src={placeholder} alt="#" />
        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign.
        </p>
        <img src={placeholder} alt="#" />
        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign.
        </p>
        <img src={placeholder} alt="#" />
        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign.
        </p>
        <img src={placeholder} alt="#" />
        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign.
        </p>
      </StyledCards>
    </StyledContainer>
  </StyledSection>
)

export default Addon
