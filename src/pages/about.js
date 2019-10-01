import React from 'react'
import styled from 'styled-components'

import about_bg from '../media/about_bg.png'
import person from '../media/person.jpg'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

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
  .content {
    display: flex;
    width: 100%;
    height: Calc(100vh - 14vh);
    overflow: auto;
  }
  .content.small {
    height: Calc(100vh - 58px);
    flex-direction: column;
    display: block;
  }
  .img-wrapper {
    width: 50%;
    padding: 5rem 2rem 5rem 5rem;
  }
  .img-wrapper.small {
    width: 100%;
    height: 50vh;
    padding: 0;
  }
  .img-wrapper .img {
    background-image: url(${person});
    background-position: top;
    background-size: cover;
    height: 100%;
  }
  .bio {
    width: 50%;
    padding: 5rem 5rem 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bio.small {
    width: auto;
    padding: 1.5rem;
  }
  .bio h1 {
    margin-top: 0;
  }
`

export default class about extends React.Component {
 componentDidMount() {
 } 

  render () {
    return (
      <StyledAbout>
        <div className={ this.props.isMobile ? "small-topbox" : "topbox" } />
        <div className={ this.props.isMobile ? "content small" : "content"}>
          <div className={ this.props.isMobile ? "img-wrapper small" : "img-wrapper"}>
            <div className="img" />
          </div>
          <div className={ this.props.isMobile ? "bio small" : "bio"}>
            <h1>Aabee Lee</h1>
            <p>글씨난 한국에서 팝스 헤어라인 과 뷰티오즈를 경영했음  각종미용대회와  각종</p>
          </div>
        </div>
      </StyledAbout>
    )
  }
}