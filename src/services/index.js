import CookieConsent from "react-cookie-banner"

React.renderComponent(
  <CookieConsent
    location="bottom"
    buttonText="Accept Cookies"
    cookieName="myAwesomeCookieName2"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    expires={150}
  >
    Vi bruger cookies til, at få vores hjemmeside til at virke ordentligt,
    personalisere indhold og reklamer, tilbyde funktioner i forhold til sociale
    medier og analysere vores traffik. Vi deler også information vedrørende din
    brug af vores hjemmeside med analytiske samarbejdspartnere
    <Link to="/cookies" style={{ textDecoration: "none", color: "yellow" }}>
      {" "}
      Læs mere om cookies
    </Link>
  </CookieConsent>,
  document.body
)
