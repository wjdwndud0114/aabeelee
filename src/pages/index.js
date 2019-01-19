import React from 'react'
import styled from 'styled-components'

import main_bg from '../media/main_bg.jpg'
import img1 from '../media/img1.jpg'
import img2 from '../media/img2.jpg'
import img3 from '../media/img3.jpg'
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
    text-align: center;
    padding: 8rem 5rem;
    font-size: 3rem;
    letter-spacing: 1.8px;
  }
  .testimonial.small {
    padding: 5rem;
    font-size: 2.2rem;
  }
  .images {
    width: 100%;
    content: "";
    display: table;
  }
  .images.small {
    display: flex;
    flex-direction: column;
  }
  .images div {
    width: 33.33333333%;
    height: 60vh;
    display: inline-block;
    vertical-align: top;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .images.small div {
    width: 100%;
    height: 50vh;
  }
  .interior {
    background-image: url(${interior});
    background-position: center;
    background-size: cover;
    display: flex;
    height: 60vh;
  }
  .interior-message {
    background-color: #fff;
    color: #000;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 5rem;
    font-size: 1.4rem;
    letter-spacing: 1.3px;
    text-align: center;
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
      },
      img1s: {
        backgroundImage: "url("+img1+")"
      },
      img2s: {
        backgroundImage: "url("+img2+")"
      },
      img3s: {
        backgroundImage: "url("+img3+")"
      }
    }
    const { bgBig, bgSmall, img1s, img2s, img3s } = styles;
    return (
      <StyledIndex>
        <div className="main-parallax-container">
          <div className="main-img" style={this.props.isMobile ? bgSmall : bgBig} />
          <div className="content-container">
            <div className="main-content">
              <div className={this.props.isMobile ? "small testimonial" : "testimonial"}>
                <span>"I never realized my hair's true potential."</span>
              </div>
              <div className={this.props.isMobile ? "images small" : "images"}>
                <div style={img1s} alt="ex1" />
                <div style={img2s} alt="ex2" />
                <div style={img3s} alt="ex3" />
              </div>
            </div>
            <div className="interior-message">
              Come in for a special experience and rediscover your hair.
            </div>
            <div className="interior" />
          </div>
        </div>
      </StyledIndex>
    )
  }
}