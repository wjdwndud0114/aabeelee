import React from 'react'
import styled from 'styled-components'

const ServiceStyle = styled.div`
  width: 12rem;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
`

export default class Service extends React.Component {
  componentDidMount () {
  }

  render () {
    return (
      <ServiceStyle>
        <div>{this.props.name}</div>
        <div>{this.props.price}</div>
      </ServiceStyle>
    )
  }
}

