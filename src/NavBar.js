import React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
import Menu from 'react-burger-menu/lib/menus/slide'

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

  nav a:before {
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
  nav a:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  .logo {
    display: flex;
    align-items: center;
    color: #222;
    font-weight: bold;
    transition: all 0.5s ease-in-out 0s;
  }
  .logo img {
    height: 40px;
    padding: 0 0.5rem;
  }

  /* buger menu */
  .bm-burger-button {
    position: relative;
    margin-right: 1rem;
    width: 36px;
    height: 30px;
  }
  .bm-burger-bars {
    background: #444;
  }
  .bm-burger-bars-hover {
    background: #545454;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }
  .bm-menu {
    transform: translateY(-13px);
    background: rgba(51,51,51,0.97);
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  .bm-morph-shape {
    fill: rgba(51,51,51,0.97);
  }
  .bm-item-list {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .bm-item-list a {
    color: #bdc3c7;
    text-align: center;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export default class NavBar extends React.Component {
  state = { scrolled: false, bmOpen: false }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resetNav', this.handleResetNav, true);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('resetNav', this.handleResetNav, true);
  }

  handleScroll = (event) => {
    if(this.props.isMobile) {
      this.setState({ scrolled: true })
      return
    }
    if (!this.state.scrolled && event.target.scrollTop >= 20) {
      this.setState({ scrolled: true })
    } else if (this.state.scrolled && (event.target.scrollTop < 20 || !event.isTrusted)) {
      this.setState({ scrolled: false })
    }
  }

  handleResetNav = () => {
    this.setState({ scrolled: this.props.isMobile })
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
        fontSize: '3rem',
        letterSpacing: '4px'
      },
      logoSmall: {
        fontSize: '2rem'
      }
    }
    const { scrolledStyle, unscrolledStyle, logoBig, logoSmall } = styles;

    const navItems = (
      <>
        <Link onClick={() => this.setState({bmOpen: false})} href="/" to="/">HOME</Link>
        <Link onClick={() => this.setState({bmOpen: false})} href="/about" to="/about">ABOUT</Link>
        <Link onClick={() => this.setState({bmOpen: false})} href="/services" to="/services">SERVICES</Link>
        <Link onClick={() => this.setState({bmOpen: false})} href="/contact" to="/contact">CONTACT</Link>
      </>
    )
    return (
      <StyledNavBar style={this.state.scrolled ? scrolledStyle : unscrolledStyle}>
        <div className="logo" style={this.state.scrolled ? logoSmall : logoBig}>
          <img src={logo} alt="logo" />
          AABEE LEE
        </div>
        {this.props.isMobile ? (<Menu noOverlay right onStateChange={state => this.setState({bmOpen: state.isOpen})} isOpen={this.state.bmOpen} width="30vh">{navItems}</Menu>) : (<nav>{navItems}</nav>)}
      </StyledNavBar>
    )
  }
}