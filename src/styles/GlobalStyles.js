import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --darkgrey: #4D4D4D;
    --orange: #FF8C00;
    --lightgrey: #cccccc;
  }
  html {

    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  h1,h2,h3,h4 {
    font-family:'Ivymode';
    font-weight: normal;
    color: var(--darkgrey) ;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    line-height: 1.4em;
  }

  nav a {
    font-family:'Ivymode';
    font-weight: normal;
    color: black;
    text-decoration:none;
    font-size: 1.1em;
  }

  a {
    text-decoration:none;
  }

  body {
    font-size: 2rem;
    overflow-x: hidden;
    font-family: orpheuspro, serif;
    line-height:1.5em;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
   
    color: var(--orange);
    border:none;
    background:white;
    border-bottom: 1px solid var(--orange);
    cursor: pointer;
    --cast: 2px;
    transition: all 0.2s;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size:1em;
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--orange) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--orange) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`
export default GlobalStyles
