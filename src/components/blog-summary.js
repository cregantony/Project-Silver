import React from 'react'
import styled from 'styled-components'
import thumbnail from '../images/thumbnail.svg'

const StyledSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 6em;
  grid-gap: 2em;
  h2 {
    margin-top: 0;
  }
  p {
    font-size: 1.2em;
    line-height: 1.4em;
  }
`

const BlogSummary = () => (
  <StyledSection>
    <div>
      <h2>What Is A Good Conversion Rate?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </p>
      <button type="button">Read More</button>
    </div>
    <div>
      <img src={thumbnail} alt="blog" />
    </div>
  </StyledSection>
)

export default BlogSummary
