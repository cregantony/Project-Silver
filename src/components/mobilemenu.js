import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup'
import burger from '../images/hamburger.svg'
import 'reactjs-popup/dist/index.css'

const StyledPopup = styled(Popup)`
  @media (max-width: 900px) {
    button {
      display: none;
    }
  }
  &-content {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const StyledExit = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  font-size: 5em;
  top: 0px;
  right: 10px;
`

const StyledUL = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  justify-content: space-evenly;
`
const StyledLi = styled.li`
  position: relative;
  margin-left: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  a {
    font-size: 2em;
    line-height: 1.3em;
    font-weight: 600;
    color: var(--orange);
    font-style: italic;
  }
  a span {
    font-size: 1em;
    color: var(--darkgrey);
  }
`

const MobileMenu = () => (
  <StyledPopup
    trigger={
      <button type="button" className="button">
        <img src={burger} alt="mobile menu" width="22px" />
      </button>
    }
    modal
    nested
  >
    {close => (
      <div className="modal">
        {/* DAMN CLOSE BUTTON */}
        <StyledExit type="button" className="close" onClick={close}>
          &times;
        </StyledExit>
        {/* DAMN CLOSE BUTTON */}
        <div className="content">
          <StyledUL>
            <StyledLi>
              <Link
                onClick={() => {
                  close()
                }}
                to="/"
              >
                Home
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                onClick={() => {
                  close()
                }}
                to="/case-studies/"
              >
                Case Studies
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                onClick={() => {
                  close()
                }}
                to="/process/"
              >
                Process
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                onClick={() => {
                  close()
                }}
                to="/process/"
              >
                <span>1 Day Websites</span>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                onClick={() => {
                  close()
                }}
                to="/process/"
              >
                <span>90 Day Campaigns</span>
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                onClick={() => {
                  close()
                }}
                to="/essays/"
              >
                Essays
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                onClick={() => {
                  close()
                }}
                to="/about/"
              >
                About
              </Link>
            </StyledLi>
            <StyledLi>
              <Link
                onClick={() => {
                  close()
                }}
                to="/contact"
              >
                Contact
              </Link>
            </StyledLi>
          </StyledUL>
        </div>
      </div>
    )}
  </StyledPopup>
)

export default MobileMenu
