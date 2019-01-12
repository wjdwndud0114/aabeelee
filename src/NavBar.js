import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

import logo from './media/logo.PNG'

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
  }

  .logo {
    display: flex;
    align-items: center;
    color: #222;
    font-size: 2rem;
    font-weight: bold;
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
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = (event) => {
    if (!this.state.scrolled && event.target.scrollTop >= 350) {
      this.setState({ scrolled: true });
      console.log("scrolled!")
    } else if (this.state.scrolled && event.target.scrollTop < 350) {
      this.setState({ scrolled: false });
      console.log("unscrolled!")
    }
  }

  render () {
    const styles = {
      scrolledStyle: {
        background: 'rgba(255, 255, 255, 1)',
        borderBottom: '2px solid rgba(0, 0, 0, 0.05)',
        padding: '0.5rem'
      },
      unscrolledStyle: {
        background: 'rgba(255, 255, 255, 0)',
        borderBottom: '2px solid rgba(0, 0, 0, 0)',
        padding: '1.5rem'
      }
    }
    const { scrolledStyle, unscrolledStyle } = styles;
    return (
      <StyledNavBar style={this.state.scrolled ? scrolledStyle : unscrolledStyle}>
        <div className="logo">
          <img src={logo} alt="Logo" />
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