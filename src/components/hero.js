import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"

import styled from "styled-components"

const HeroWrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: 1910px;
  height: 100vh;
`

const PhotoHero = styled(Img)`
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: 1910px;
  filter: grayscale(70%);
  opacity: 0.8;
  position: relative;
`

const HeroWrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17%;
  width: 100%;
  height: auto;
  position: absolute;
`
const HeroWrapperHeaderTitle = styled.div`
  display: inline-block;
  text-align: center;
  width: auto;
  font-size: 72px;
  line-height: 120px;
  color: #fff;
`
const HeroWrapperHeaderSubtitle = styled.div`
  display: inline-block;
  text-align: center;
  margin: 50px auto 30px auto;
  width: auto;
  border-bottom: 3px solid red;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
`
const ButtonWrapper = styled.button`
  display: block;
  margin: 30px auto 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 50px;
  height: 50px;
  padding: 5px 5px;
  border: none;
  color: white;
  background: none;
  :after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #c23b37;
    color: white;
    z-index: -1;
    transition: top 0.6s ease-in-out;
  }
  :hover:after {
    left: 0;
    bottom: auto;
    top: 90%;
  }
  :focus {
    border: 3px dotted #c23b37 !important;
  }
`

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeroWrapper>
        <PhotoHero
          fluid={data.placeholderImage.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="logo front"
        />
        <HeroWrapperHeader>
          <HeroWrapperHeaderTitle>ug gmina</HeroWrapperHeaderTitle>
          <HeroWrapperHeaderSubtitle>
            live together, work together
          </HeroWrapperHeaderSubtitle>
          <ButtonWrapper>
            <FaAngleDown
              style={{ fontSize: 20, color: "white", zIndex: 9999 }}
            />
          </ButtonWrapper>
        </HeroWrapperHeader>
      </HeroWrapper>
    )}
  />
)

export default Hero
