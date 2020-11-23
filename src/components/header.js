import { Link } from 'gatsby'
import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import 'reactjs-popup/dist/index.css'
import MobileMenu from './mobilemenu'

const StyledLogo = styled.img`
  width: 92px;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(110rem + 2 * 3rem);
  width: 100%;
  button {
    display: none;
    border-bottom: none;
  }
  @media (max-width: 900px) {
    button {
      display: inline-block;
    }
    nav {
      display: none;
    }
  } ;
`

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  justify-content: space-evenly;
`

const StyledHeader = styled.header`
  left: 0;
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: center;
  // position: fixed;
  background: white;
`

const StyledLi = styled.li`
  position: relative;
  margin-left: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const Header = () => (
  <Headroom
    style={{
      background: 'rgb(57, 111, 176)',
      boxShadow: '10px 1px 1px rgba(0,0,0,0.05)',
    }}
  >
    <StyledHeader>
      <StyledContainer>
        <Link to="/">
          <StyledLogo src={logo} alt="Creg Antony logo" />
        </Link>
        <StyledNav>
          <StyledUL>
            <StyledLi>
              <Link to="/">Home</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/case-studies/">Case Studies</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/process/">Process</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/essays/">Essays</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/about/">About</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/contact">Contact</Link>
            </StyledLi>
          </StyledUL>
        </StyledNav>
        <MobileMenu />
      </StyledContainer>
    </StyledHeader>
  </Headroom>
)

export default Header
