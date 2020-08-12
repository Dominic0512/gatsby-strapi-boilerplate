import React from "react"
import { graphql } from "gatsby"

const Post = ({
  data: {
    strapi: { post },
  },
}) => (
  <React.Fragment>
    <h1>{post.id}</h1>
    <pre>{JSON.stringify(post.locales)}</pre>
  </React.Fragment>
)

export const postQuery = graphql`
  query PostQuery($id: ID!) {
    strapi {
      post(id: $id) {
        id
        locales(where: { locale: { label: "zh" } }) {
          title
          content
        }
      }
    }
  }
`

export default Post
