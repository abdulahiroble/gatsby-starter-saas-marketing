import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      {/* <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Automation</li>
          <li>Rewards</li>
        </ul>
      </FooterColumn> */}
      {/* <FooterColumn>
        <span>Resources</span>
        <ul>
          <li>Compare</li>
          <li>Blog</li>
        </ul>
      </FooterColumn> */}
      <FooterColumn>
        <span>Info</span>
        <ul>
          <li>
            <Link to="/omos" style={{ textDecoration: "none", color: "#000" }}>
              Om os
            </Link>
          </li>
          <li>
            <Link
              to="/cookies"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Cookies
            </Link>
          </li>
        </ul>
      </FooterColumn>
      {/* <FooterColumn>
        <span>Social</span>
        <ul>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </FooterColumn> */}
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>værdiafbolig.dk</Logo>
    </BrandContainer>

    <br />

    <p style={{ textAlign: "center" }}>
      Denne hjemmeside er affiliate finansieret. Hver gang en besøgende klikker
      på et af vores links og udfylder en formular for at vide hvor meget deres
      bolig er værd modtager vi en kommision. Kommisionen går til vedligholdese
      og videreudvikling af hjemmesiden.
    </p>
    <CookieConsent
      location="bottom"
      buttonText="Accept Cookies"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      Vi bruger cookies til, at få vores hjemmeside til at virke ordentligt,
      personalisere indhold og reklamer, tilbyde funktioner i forhold til
      sociale medier og analysere vores traffik. Vi deler også information
      vedrørende din brug af vores hjemmeside med analytiske samarbejdspartnere
      <Link to="/cookies" style={{ textDecoration: "none", color: "yellow" }}>
        {" "}
        Læs mere om cookies
      </Link>
    </CookieConsent>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
