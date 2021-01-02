import React from "react"
import styled from "styled-components"

const WrapperBreakeSection = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  height: 90px;
  width: 100%;
  color: #fff;
  place-items: center;
    &:first-child {
    background: rgb(215, 58, 30);
    color: rgb(215, 58, 30);
  }
  &:nth-of-type(3) {
    background-color: rgb(0, 119, 179);
    color: rgb(0, 119, 179);
  }
  &:nth-of-type(5) {
    background: rgb(69, 100, 255);
    color: rgb(69, 100, 255);
  }
  &:nth-of-type(7) {
    background: rgb(73, 133, 0);
    color: rgb(73, 133, 0);
  }
  &:nth-of-type(9) {
    background: rgb(236, 0, 0);
    color: rgb(236, 0, 0);
  }
  &:nth-of-type(11) {
    background: rgb(114, 0, 255);
    color: rgb(114, 0, 255);
  }
`
const WrapperLeftSide = styled.div`
  display: inherit;
  width: 100%;
  justify-items: right;
  padding-right: 50px;
  color: #fff;
`
const WrapperRightSide = styled.div`
  width: 100%;
`

const BreakeSection = ({ children }) => (
  <WrapperBreakeSection>
    <WrapperLeftSide>Left</WrapperLeftSide>
    <WrapperRightSide>{children}</WrapperRightSide>
  </WrapperBreakeSection>
)

export default BreakeSection
