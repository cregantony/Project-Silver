import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledSection = styled.section`
  margin-top: 6em;
  h3 {
    text-align: center;
    color: var(--darkgrey);
    margin-bottom: 3em;
    font-style: italic;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const StyledCards = styled.div`
  padding: 0 2em 2em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: orpheuspro, serif;
    color: var(--orange);
    font-size: 1.8em;
    text-align: center;
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

const Pricing = () => (
  <StyledSection>
    <h3>The Right Plan. For The Right Business. At the Right Time.</h3>
    <StyledContainer>
      <StyledCards>
        <h2>
          One Day Squarespace Websites <br /> $999
        </h2>
        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign.
        </p>
        <p>
          My One day websites are designed to be the perfect springboard in which to launch and support your business.
          Focused on the fundamentals and the basics. I strip away all unneccescary aspects of web development and only
          build what you need.
        </p>
        <p>We Are able to move so fast because alot of the prepartion work is donw ahead of time.</p>
        <Link>
          <button type="button">Learn More</button>
        </Link>
      </StyledCards>
      <StyledCards style={{ borderLeft: 'solid 2px var(--orange)' }}>
        <h2>
          90 Day Marketing Campaigns
          <br /> $15K
        </h2>

        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign.
        </p>
        <p>
          My One day websites are designed to be the perfect springboard in which to launch and support your business.
          Focused on the fundamentals and the basics. I strip away all unneccescary aspects of web development and only
          build what you need.
        </p>
        <p>We Are able to move so fast because alot of the prepartion work is donw ahead of time.</p>
        <Link>
          <button type="button">Learn More</button>
        </Link>
      </StyledCards>
    </StyledContainer>
  </StyledSection>
)

export default Pricing
