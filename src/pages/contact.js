import React from 'react'
import styled from 'styled-components'

import contact_bg from '../media/contact_bg.png'

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .topbox {
    height: 14vh;
    width: 100%;
    box-shadow: 0 5px 10px #ccc;
    background-image: url(${contact_bg});
    opacity: 0.2;
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
    justify-content: center;
  }
  .content.small {
    flex-direction: column;
  }
  .bio {
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .bio.small {
    width: auto;
    padding: 1.5rem;
  }
  .bio h1 {
    margin-top: 0;
  }

  .mapouter{
    text-align: right;
    width: 100%;
    margin-top: 2rem;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    min-height: 300px;
    min-width: 300px;
    position: relative;
  }
  .gmap_canvas iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

export default class contact extends React.Component {
 componentDidMount() {
 } 

  render () {
    return (
      <StyledContact>
        <div className={ this.props.isMobile ? "small-topbox" : "topbox" } />
        <div className={ this.props.isMobile ? "content small" : "content"}>
          <div className={ this.props.isMobile ? "bio small" : "bio"}>
            <h1>Contact Me</h1>
            <h2>Aabee Lee</h2>
            <p>213.604.3033</p>
            <p>testemail@gmail.com</p>
            <p>Hours: Mon-Sat 10:00AM - 7:00PM</p>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=129%20S%20Western%20Ave%2C%20Los%20Angeles%2C%20CA%2090004&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
                <a href="https://www.pureblack.de/internetagentur/" />
              </div>
            </div>
          </div>
        </div>
      </StyledContact>
    )
  }
}
