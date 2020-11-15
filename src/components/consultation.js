import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-left: -50vw;
  left: 50%;
  padding: 2rem 4rem;
  background: var(--orange);
  margin-top: 6em;
`

const StyledWrapper = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  h2 {
    color: white;
    font-size: 2em;
    text-align: center;
  }
`

const Consultation = () => (
  <StyledContainer>
    <StyledWrapper>
      <h2>Schedule a Free 15 min Consultation Now ____________________ </h2>
    </StyledWrapper>
  </StyledContainer>
)

export default Consultation
