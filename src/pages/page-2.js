import * as React from "react"
import { Link } from "gatsby"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <div className="company-section">
      <h3>Worked at</h3>
      {data.allSpacesSubsocial.edges.map(({ node }) => (
        <div key={node.id}>
          <div>{node.content.name}</div>
          <div>{node.content.email}</div>
          <div>{node.content.summary}</div>
        </div>
      ))}
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export const query = graphql`
  query {
    allSpacesSubsocial {
      edges {
        node {
          id
          content {
            name
            tags
            about
            email
            image
            links
            summary
            isShowMore
          }
        }
      }
    }
  }
`

export default SecondPage

