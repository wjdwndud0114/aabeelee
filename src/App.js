import React from 'react'
import { Root, Routes } from 'react-static'
import { Transition, animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

import NavBar from './NavBar'

import './fonts/fonts.min.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Proxima Nova', Arial, sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }
`

const StyledDiv = styled.div`
  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`

export default class App extends React.Component {
  state = { isMobile: false }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, true);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize, true);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 830 })
  }

  render () {
    return (
      <Root>
        <GlobalStyle />
        <NavBar isMobile={this.state.isMobile} />
        <StyledDiv className="content">
          <Routes>
            {({ routePath, getComponentForPath }) => {
              return (
                <Transition
                  native
                  items={routePath}
                  onStart={() => { window.dispatchEvent(new CustomEvent("resetNav")) }}
                  from={{ transform: 'translateY(100px)', opacity: 0 }}
                  enter={{ transform: 'translateY(0px)', opacity: 1 }}
                  leave={{ transform: 'translateY(100px)', opacity: 0 }}
                >
                  {item => props => {
                    const Comp = getComponentForPath(item)
                    return (
                      <animated.div className="page" style={props}>
                        <Comp isMobile={this.state.isMobile} />
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
}
