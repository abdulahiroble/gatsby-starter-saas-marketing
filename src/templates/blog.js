import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Container = styled.div`
  margin-left: auto;
  max-width: 100%;
  /* margin: 2rem 4rem;
  display: flex; */
`

const Content = styled.div`
  /* padding: 2rem;
  margin-right: 3rem;
  width: 48%;
  text-align: justify;
  background-color: #ffffff; */

  padding-left: 1em;
  margin-right: 1rem;
  width: 93%;
  background-color: #ffffff;

  h3 {
    font-weight: 600;
    font-size: 1.8rem;
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1
        style={{
          fontSize: "2.5rem",
          letterSpacing: "1.2",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {props.data.markdownRemark.frontmatter.title}
      </h1>
      <Container>
        <Content
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></Content>
      </Container>
    </Layout>
  )
}

export default Blog
