import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Om os" />
    <h1>Cookies</h1>
    <p>
      Hjemmesiden anvender "cookies". Cookies er en tekstfil, der gemmes på din
      computer, mobiltelefon, tablet eller tilsvarende med det formål at
      genkende den, huske indstillinger, udfører statistik og målrette annoncer.
      Cookies kan ikke indeholde skadelig kode som f.eks virus. Du kan slette
      eller blokerer cookies. Se hvordan her:{" "}
      <a href="http://minecookies.org/cookiehandtering">
        http://minecookies.org/cookiehandtering
      </a>
    </p>

    <h3>Nødvendige cookies</h3>

    <p>
      Nogle cookies kræves for at hjemmesiden kan fungere. Hjemmesiden fungerer
      ikke korrekt uden disse cookies, og de er som standard aktiveret.
    </p>

    <h3>Google Analytics</h3>

    <p>
      Disse cookies giver os mulighed for at tælle besøgende og trafikkilder, så
      vi kan måle og forbedre ydeevnen af vores hjemmeside. De hjælper os med at
      finde ud af, hvilke sider der er mest og mindst populære samt hvordan de
      besøgende bevæger sig på siden.
    </p>
    <a href="http://tools.google.com/dlpage/gaoptout">
      Klik her for at fravælge cookies fra Google Analytics.
    </a>
  </Layout>
)

export default NotFoundPage
