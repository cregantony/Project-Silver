import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'
import Consultation from './consultation'

const StyledFooter = styled.footer`
  padding: 3em;
`

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  list-style-type: none;
`

const StyledLinks = styled.div`
  list-style-type: none;
  h3 {
    font-size: 2em;
    margin-top: 0;
    font-weight: 600;
    color: var(--orange);
    font-style: italic;
  }
`

const Footer = () => (
  <>
    <Consultation />
    <StyledFooter>
      <StyledContainer>
        <img src={logo} alt="logo" />
        <div>
          <StyledLinks>
            <li>
              <Link to="/home">
                <h3>Explore</h3>
              </Link>
            </li>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Process</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </StyledLinks>
        </div>
        <div>
          <StyledLinks>
            <li>
              <h3>Resources</h3>
            </li>
            <li>
              <p>Squarespace Guide</p>
            </li>
            <li>
              <p>Essays</p>
            </li>
            <li>
              <p>FAQ</p>
            </li>
          </StyledLinks>
        </div>
      </StyledContainer>
      © {new Date().getFullYear()}, Built with Love
    </StyledFooter>
  </>
)

export default Footer
