import React from 'react'
import { Root, Routes } from 'react-static'
import { Transition, animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

import NavBar from './NavBar'

import './fonts/fonts.min.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Proxima Nova', Georgia, sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
`

const StyledDiv = styled.div`
`

function App() {
  return (
    <Root>
      <GlobalStyle />
      <NavBar />
      <StyledDiv className="content">
        <Routes>
          {({ routePath, getComponentForPath }) => {
            return (
              <Transition
                native
                items={routePath}
                from={{ position: 'absolute', transform: 'translateY(100px)', opacity: 0 }}
                enter={{ transform: 'translateY(0px)', opacity: 1 }}
                leave={{ transform: 'translateY(100px)', opacity: 0 }}
              >
                {item => props => {
                  const Comp = getComponentForPath(item)
                  return (
                    <animated.div style={props}>
                      <Comp />
                    </animated.div>
                  )
                }}
              </Transition>
            )
          }}
        </Routes>
      </StyledDiv>
    </Root>
  )
}

export default App
