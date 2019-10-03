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
            <p>한국 에서 팝스해어라인과 뷰티오즈 샵 경영 일본 야마노, 토닝가위 ,비달사순 컷 부분 마스터 , 미용의 여러 대회와 또 심사위원으로도 참가했음 미용 강사로 20년 째  칼리지 미용대학교 강의와 개인 강사로 학생을 가르치고 있습니다. 앞으로 많은 미용제자를 양육하는데 소망을 가지고 있습니다,</p>
            <p>오랜 경험의 바탕으로 고객이 뭘 원하는지 잘 알고 있으며  고객의 손상된 모발을 회복 하는데 중점을 두고 헤어스타일을 내는데 열성을 다합니다</p>
            <p>고객 분들이 와서 머리를 맡겨 보시면 100% 만족 하실검이다</p>
          </div>
        </div>
      </StyledAbout>
    )
  }
}