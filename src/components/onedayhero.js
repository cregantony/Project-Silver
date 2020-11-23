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

  h2 {
    margin-top: 5rem;
  }
  h2 a {
    color: var(--orange);
    border-bottom: 1px solid var(--orange);
  }
`

const Styledh1 = styled.h1`
  font-size: 2.4em;
  text-align: center;
  span {
    font-size: 0.6em;
  }
`

const Masthead = () => (
  <StyledMasthead>
    <Styledh1>
      One Day Websites
      <br />
      <span>The Absolute Best Thing You Can Do For Your Business</span>
    </Styledh1>
    <h2>
      <Link to="/">Pick A Day</Link>
    </h2>
  </StyledMasthead>
)

export default Masthead
