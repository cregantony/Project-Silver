import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import OneDayHero from '../components/onedayhero'
import cover from '../images/Helix+Staircase+Cover+Photo.jpg'
import OneDayFit from '../components/onedayfitsection'
import OneDayAddon from '../components/onedayaddon'
import OneDayFaq from '../components/onedayfaq'

const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 2em;
  h2 {
    margin-top: 0;
  }
`

const StyledProcessContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const OneDayWebsitePage = () => (
  <>
    <OneDayHero />
    <StyledInfoContainer>
      <div>
        <h2>What it is?</h2>
        <p>
          My one day website process is designed for those who are interested in working with but are not quite ready
          for a full on digital marketing campaign. My One day websites are designed to be the perfect springboard in
          which to launch and support your business. Focused on the fundamentals and the basics. I strip away all
          unneccescary aspects of web development and only build what you need. We Are able to move so fast because alot
          of the prepartion work is done ahead of time.
        </p>
      </div>
      <img src={cover} alt="website collection" />
    </StyledInfoContainer>
    <h2>How does it work </h2>
    <StyledProcessContainer>
      <p>Item #1</p>
      <p>Item #2</p>
      <p>Item #3</p>
      <p>Item #4</p>
    </StyledProcessContainer>
    <OneDayFit />
    <OneDayAddon />
    <OneDayFaq />
  </>
)

export default OneDayWebsitePage
