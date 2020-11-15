import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-left: -50vw;
  left: 50%;
  padding: 2rem 4rem;
  background: var(--orange);
`

const StyledWrapper = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  h2 {
    color: white;
    font-size: 2em;
  }
`

const LeadMagnet = () => (
  <StyledContainer>
    <StyledWrapper>
      <h2>
        Checklist: <br />
        Squarespace SEO Launch List <br />
        Download Now
      </h2>
    </StyledWrapper>
  </StyledContainer>
)

export default LeadMagnet
