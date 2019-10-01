import React from 'react'
import styled from 'styled-components'

import Service from '../Service'
import services_bg from '../media/services_bg.png'

const StyledServices = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .topbox {
    height: 14vh;
    width: 100%;
    box-shadow: 0 5px 10px #ccc;
    background-image: url(${services_bg});
    opacity: 0.4;
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
    height: Calc(100vh - 58px);
  }
  .bio {
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .bio.small {
    width: auto;
    padding: 1.5rem;
  }
  .bio h1 {
    margin-top: 0;
  }
  .bio h2 {
    text-align: center;
  }
  
  .bio.small .sblock {
    display: block;
  }
  .sblock {
    display: flex;
    flex-wrap: wrap;
  }
  .service-container {
    padding: 0.5rem 3rem 3rem 3rem;
  }
`

export default class services extends React.Component {
 componentDidMount() {
 } 

  render () {
    return (
      <StyledServices>
        <div className={ this.props.isMobile ? "small-topbox" : "topbox" } />
        <div className={ this.props.isMobile ? "content small" : "content"}>
          <div className={ this.props.isMobile ? "bio small" : "bio"}>
            <h1>Services</h1>
            <div className="sblock">
              <div className="service-container">
                <h2>Hair Cut</h2>
                <Service name="Male" price="20" />
                <Service name="Female" price="30" />
              </div>
              <div className="service-container">
                <h2>Styling</h2>
                <Service name="Blow Dry" price="40" />
                <Service name="Shampoo" price="40" />
                <Service name="Up Style" price="50" />
              </div>
            </div>
            <div className="sblock">
              <div className="service-container">
                <h2>Color</h2>
                <Service name="Retouch" price="60+" />
                <Service name="Color" price="100+" />
                <Service name="Ombre/Balayage" price="250+" />
                <Service name="Bleach (Per Session)" price="80+" />
              </div>
              <div className="service-container">
                <h2>Perm</h2>
                <Service name="Basic Perm" price="60" />
                <Service name="Digital Perm" price="130" />
                <Service name="Setting Perm" price="120" />
                <Service name="Keratin Magic Perm" price="150" />
                <Service name="Magic Straight Perm" price="150" />
              </div>
            </div>
          </div>
        </div>
      </StyledServices>
    )
  }
}

