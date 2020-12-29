import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"

import styled from "styled-components"
import GlobalStyle from "../assets/styles/globalStyles"

import "../assets/styles/footer.css"
import "../assets/styles/navigation.css"

const NavMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1910px;
  list-style: none;
  text-decoration: none;
`

const MenuButton = styled(Link)`
  display: flex;
  padding: 0 10px;
  height: 100%;
  margin-right: 10px;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 27px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: #000;
  border: 5px dotted transparent;
  position: relative;
  overflow: hidden;
  z-index: 1;
   :after  {
    transition: 0.3s;
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 8px;
    color: black !important;
    z-index: -1;
    border: 5px dotted transparent;
    :active  {
      bottom: 40px;
    }
  }
  :first-child:after {
    background: rgb(215, 58, 30);
  }
  :nth-child(2):after {
    background: rgb(0, 119, 179);
  }
  :nth-child(3):after {
    background: rgb(69, 100, 255);
  }
  :nth-child(4):after {
    background: rgb(73, 133, 0);
  }
  :nth-child(5):after {
    background: rgb(236, 0, 0);
  }
  :nth-child(6):after {
    background: rgb(114, 0, 255);
  }
  :nth-child(7):after {
    background: rgb(128, 64, 0);
  }
  :hover  {
    color: #fff;
    position: relative;
  }
    :hover:after  {
    width: 100%;
    height: 100%;
  }
    :focus  {
    border: 3px dotted #c23b37 !important;
  }
`

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title, description },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div data-is-root-path={isHomePage}>
      <GlobalStyle />
      <div id="NaviWrapper">
        <div id="NaviWrapperCard">
          <div id="LogotypWrapper">
            <div id="LogotypPhoto">Photo</div>
            <div id="LogotypBrandNameWrapper">
              <div id="LogotypBrandFirstName">{title}</div>
              {isHomePage ? (
                <h1 id="LogotypBrandSecondName">
                  <Link to="/">{parse(title)}</Link>
                </h1>
              ) : (
                <Link to="/" id="LogotypBrandSecondName">
                  {description}
                </Link>
              )}
            </div>
          </div>
          <NavMenuWrapper>
            <MenuButton to="/">Aktualności</MenuButton>
            <MenuButton to="/">Gmina</MenuButton>
            <MenuButton to="/">Historia</MenuButton>
            <MenuButton to="/">Środowisko</MenuButton>
            <MenuButton to="/">Turystyka</MenuButton>
            <MenuButton to="/">Kultura</MenuButton>
            <MenuButton to="/">Kontakt</MenuButton>
          </NavMenuWrapper>
        </div>
      </div>
      <Hero />
      <main>{children}</main>

      <div id="Footer">
        <div id="FooterWrapperHeader">Informacje kontaktowe</div>
        <div id="FooterWrapper">
          <div id="FooterWrapperCard">
            <div id="FooterAddressWprapper">
              <div>
                <p>Urząd Gminy</p>
                <ul id="AddressList">
                  <li>ulica</li>
                  <li>kod pocztowy</li>
                  <li>miejscwośći</li>
                </ul>
                <ul id="AddressListSecondLine">
                  <li>Telefon 1</li>
                  <li>Telefon 2</li>
                </ul>
                <p></p>
              </div>
            </div>
            <div id="FooterMapWprapper">
              <div>Mapa</div>
            </div>
          </div>
          <div id="FooterMenuWprapper">
            <ul id="FooterNavMenuWrapper">
              <li id="FooterMenuButton">
                <Link to="/">Aktualności</Link>
              </li>
              <li id="FooterMenuButton">
                <Link to="/">Gmina</Link>
              </li>
              <li id="FooterMenuButton">
                <Link to="/">Historia</Link>
              </li>
              <li id="FooterMenuButton">
                <Link to="/">Środowisko</Link>
              </li>
              <li id="FooterMenuButton">
                <Link to="/">Turystyka</Link>
              </li>
              <li id="FooterMenuButton">
                <Link to="/">Kultura</Link>
              </li>
              <li id="FooterMenuButton">
                <Link to="/">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="FooterCopyright">
          <div>Polityka prywatności</div>
          <div>Deklaracja dostępności</div>
          <div> © {new Date().getFullYear()}</div>
          <div>NETTOM</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
