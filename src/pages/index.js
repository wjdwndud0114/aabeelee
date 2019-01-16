import React from 'react'
import styled from 'styled-components'

import main_bg from '../media/main_bg.jpg'
import img1 from '../media/img1.jpg'
import interior from '../media/interior.jpg'

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;

  .main-parallax-container {
    perspective: 1px;
    perspective-origin: center;
    transform-style: preserve-3d;
    height: 100vh;
    overflow-x: hidden;
  }
  .main-img {
    position: relative;
    transform: translate3D(-8px, 0, -1px) scale(2);
    z-index: -1;
    background-image: url(${main_bg});
    background-position: top;
    background-size: cover;
    display: flex;
  }
  .content-container {
    z-index: 1;
    position: relative;
    background-color: #fff;
  }
  .main-content {
    display: flex;
    flex-direction: column;
  }
  .testimonial {
    background-color: #000;
    color: #fff;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 8rem 5rem;
    font-size: 3rem;
    letter-spacing: 1.8px;
  }
  .images {
    display: flex;
    width: 100%;
  }
  .images.small {

  }
  .images.big {

  }
  .images img {
    flex: 1 1 auto;
    height: 350px;
  }
  .interior {
    color: #000;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 3rem;
    letter-spacing: 1.3px;
  }
`

export default class index extends React.Component {
  render () {
    const styles = {
      bgBig: {
        height: '100vh'
      },
      bgSmall: {
        height: '33.33vh',
        marginTop: '7rem',
        transform: 'translate3D(-8px, 0, -1px) scale(4)'
      }
    }
    const { bgBig, bgSmall } = styles;
    return (
      <StyledIndex>
        <div className="main-parallax-container">
          <div className="main-img" style={this.props.isMobile ? bgSmall : bgBig} />
          <div className="content-container">
            <div className="main-content">
              <div className="testimonial">
                <span>"Lorem Ipsum walla isnsr is esinihft airisto!"</span>
              </div>
              <div className="images">
                <img src={img1} alt="image 1" />
                <img src={img1} alt="image 1" />
                <img src={img1} alt="image 1" />
              </div>
            </div>
            <div className="last">
              <span>Come in for a special experience and rediscover your hair.</span>
            </div>
            <div className="interior">
              <img src={interior} alt="interior" />
            </div>
          </div>
        </div>
      </StyledIndex>
    )
  }
}