import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import { Link } from "gatsby"

const BlogButton = styled(Link)`
  text-decoration: none;
  color: #000;
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { test: { eq: true } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1
        style={{
          paddingLeft: "10px",
        }}
      >
        Blog
      </h1>
      <h3>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <ul style={{ listStyle: "none" }}>
              <BlogButton to={`/blog/${edge.node.fields.slug}`}>
                <li>{edge.node.frontmatter.title}</li>
              </BlogButton>
              <p>{edge.node.frontmatter.date}</p>
            </ul>
          )
        })}
      </h3>
    </Layout>
  )
}

export default BlogPage
