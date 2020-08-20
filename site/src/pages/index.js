import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from 'styled-components'
import { color } from 'styled-system'

const DemoStyledSystemCompo = styled.div`
  ${color}
`;

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        strapi {
          home {
            id
            services {
              items {
                id
                title
                desc
                link
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <pre>{JSON.stringify(data)}</pre>
      <DemoStyledSystemCompo color="navy">Demo Text Color</DemoStyledSystemCompo>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
