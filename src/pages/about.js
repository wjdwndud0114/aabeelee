import React from 'react'
import styled from 'styled-components'

import about_bg from '../media/about_bg.jpg'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;

  .main-parallax-container {
    perspective: 1px;
    perspective-origin: center;
    transform-style: preserve-3d;
    height: 100vh;
    overflow-x: hidden;
  }
  .content-container {
    z-index: 1;
    position: relative;
    background-color: #fff;
  }
  .main-content {
  }
  .main-img {
    position: relative;
    transform: translate3D(-8px, 0px, -1px) scale(4);
    z-index: -1;
    background-image: url(${about_bg});
    background-position: top;
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 33.33vh;
    margin-top: 7rem;
  }
  .main-img h1 {
    display: flex;
    color: #fff;    
  }
`

export default class about extends React.Component {
 componentDidMount() {
 } 

  render () {
    return (
      <StyledAbout>
        <div className="main-parallax-container">
          <div className="main-img">
            <h1>About Me</h1>
          </div>
          <div className="content-container">
            <div className="main-content">
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
              <p>ʻO Lorem Ipsum kahi haʻahaʻa wale nō o ka paʻi a me keʻano o nāʻoihana. ʻO Lorem Ipsum ka 'ōlelo papahana maʻamau o kaʻoihana o ka makahiki 1500, i ka wā i lawe ai kekahi mea paʻi kiʻiʻole i keʻano o ka type a scrambled iā ia e hana i kahi puke kiko'ī. ʻAʻole i ola wale i kaʻelima mau kenekulia, akā,ʻo ka leleʻana hoʻi i nāʻano o ka lolouila, e hoʻololiʻoleʻia ana. Ua hoʻolahaʻia i nā makahiki 1960 me ka hoʻokuʻuʻana i nā pepa Letraset i loko o nā moʻolelo Lorem Ipsum, a me nā mea hou aku me ka polokalamu hoʻopuka pākī e like me Aldus PageMaker me nā papa o Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </StyledAbout>
    )
  }
}