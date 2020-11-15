import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import cover from '../images/Helix+Staircase+Cover+Photo.jpg'

const StyledSection = styled.section`
  margin: 4em 0;
  position: relative;
  width: 100vw;
  margin-left: -50vw;
  left: 50%;
  h3 {
    padding-right: 3em;
    text-align: right;
    color: #cccccc;
    margin-bottom: 3em;
  }
`

const StyledCaseContainer = styled.div`
  display: flex;
  img {
    object-fit: cover;
    width: 55%;
  }
  h2 {
    font-family: orpheuspro, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 8vw;
    line-height: 0.8em;
    margin-top: 0;
    margin-bottom: 0.5em;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  h2 span {
    font-style: italic;
  }
  p {
    font-family: orpheuspro, serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: var(--orange);
    font-size: 1.2em;
  }
`

const StyledText = styled.div`
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  a {
    color: var(--orange);
    border-bottom: 1px solid var(--orange);
    font-size: 1.5em;
    margin-top: 0.5em;
  }
`

const CaseStudySection = () => (
  <StyledSection>
    <h3 style={{ textAlign: 'right', color: '#CCCCCC', marginBottom: '3em' }}>case study</h3>
    <StyledCaseContainer>
      <img src={cover} alt="Serett Case Study" />
      <StyledText>
        <h2>
          Serett
          <br /> <span>Metalworks</span>
        </h2>
        <div>
          <p>• 5400x Increase in Search Engine Traffic</p>
          <p>• 82,422 Google Clicks To Date</p>
          <p>• 1400+/mo Average Google Clicks</p>
          <br />
          <br />
          <Link to="/">Learn More</Link>
        </div>
      </StyledText>
    </StyledCaseContainer>
  </StyledSection>
)

export default CaseStudySection
