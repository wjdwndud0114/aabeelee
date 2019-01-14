import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

import logo from './media/logo.png'

const StyledNavBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: padding 1s, background 1s, bottom-border 1s;

  nav a {
    margin: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    color: #555;
    letter-spacing: 1.81px;
    line-height: 1rem;
    position: relative;
  }

  nav > a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -3px;
    left: 0;
    background-color: #444;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  nav > a:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  .logo {
    display: flex;
    align-items: center;
    color: #222;
    font-weight: bold;
    transition: font-size 1s;
  }
  .logo img {
    height: 40px;
    padding: 0 1.5rem 0 0;
  }
`

export default class NavBar extends React.Component {
  state = { scrolled: false }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resetNav', this.handleResetNav, true);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('resetNav', this.handleResetNav, true);
  }

  handleScroll = (event) => {
    if (!this.state.scrolled && event.target.scrollTop >= 200) {
      this.setState({ scrolled: true });
    } else if (this.state.scrolled && (event.target.scrollTop < 200 || !event.isTrusted)) {
      this.setState({ scrolled: false });
    }
  }

  handleResetNav = (event) => {
    this.setState({ scrolled: false });
  }

  render () {
    const styles = {
      scrolledStyle: {
        background: 'rgba(255, 255, 255, 0.95)',
        borderBottom: '2px solid rgba(0, 0, 0, 0.05)',
        padding: '0.5rem'
      },
      unscrolledStyle: {
        background: 'rgba(255, 255, 255, 0)',
        borderBottom: '2px solid rgba(0, 0, 0, 0)',
        padding: '1.5rem'
      },
      logoBig: {
        fontSize: '3rem'
      },
      logoSmall: {
        fontSize: '2rem'
      }
    }
    const { scrolledStyle, unscrolledStyle, logoBig, logoSmall } = styles;
    return (
      <StyledNavBar style={this.state.scrolled ? scrolledStyle : unscrolledStyle}>
        <div className="logo" style={this.state.scrolled ? logoSmall : logoBig}>
          <img src={logo} alt="logo" />
          A A B E E  L E E
        </div>
        <nav>
          <Link href="/" to="/">HOME</Link>
          <Link href="/about" to="/about">ABOUT</Link>
          <Link href="/services" to="/services">SERVICES</Link>
          <Link href="/contact" to="/contact">CONTACT</Link>
        </nav>
      </StyledNavBar>
    )
  }
}