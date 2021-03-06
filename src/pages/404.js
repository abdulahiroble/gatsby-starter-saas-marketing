import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>SIDE IKKE FUNDET</h1>
    <p>Du har søgt efter en side som ikke findes.</p>
  </Layout>
)

export default NotFoundPage
