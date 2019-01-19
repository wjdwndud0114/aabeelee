import React from 'react'
import styled from 'styled-components'

import about_bg from '../media/about_bg.png'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;

  .topbox {
    height: 14vh;
    width: 100%;
    box-shadow: 0 5px 10px #ccc;
    background-image: url(${about_bg});
    opacity: .5;
  }
  .small-topbox {
    height: 58px;
    width: 100%;
  }
`

export default class about extends React.Component {
 componentDidMount() {
 } 

  render () {
    return (
      <StyledAbout>
        <div className={ this.props.isMobile ? "small-topbox" : "topbox" } />
      </StyledAbout>
    )
  }
}