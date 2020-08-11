import React from "react"
import { graphql } from "gatsby"

const Page = ({
  data: {
    strapi: { page },
  },
}) => (
  <React.Fragment>
    <h1>{page.slug}</h1>
    <pre>{JSON.stringify(page.locales)}</pre>
  </React.Fragment>
)

export const pageQuery = graphql`
  query PageQuery($id: ID!) {
    strapi {
      page(id: $id) {
        id
        slug
        locales(where: { locale: { label: "zh" } }) {
          title
          content
        }
      }
    }
  }
`

export default Page
