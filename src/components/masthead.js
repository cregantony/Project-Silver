import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledMasthead = styled.section`
  width: 100vw;
  height: calc(100vh - 110px);
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -50vw;
  left: 50%;
  h1 {
    font-size: 2.4em;
    text-align: center;
  }
  h2 {
    margin-top: 5rem;
  }
  h2 a {
    color: var(--orange);
    border-bottom: 1px solid var(--orange);
  }
`

const Masthead = () => (
  <StyledMasthead>
    <h1>
      Just because It’s a marketing website
      <br />
      doesn’t mean it has to look like one.
    </h1>
    <h2>
      <Link to="/">Get Started</Link>
    </h2>
  </StyledMasthead>
)

export default Masthead
