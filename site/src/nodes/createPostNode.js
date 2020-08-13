const createPostNode = helpers => {
  return new Promise(async (resolve, reject) => {
    try {
      const { graphql, createPage } = helpers
      const {
        data: {
          strapi: { posts },
        },
      } = await graphql(`
        {
          strapi {
            posts {
              id
              thumbnail {
                id
                url
              }
              created_at
              updated_at
              locales(where: { locale: { label: "zh" } }) {
                title
                content
              }
            }
          }
        }
      `)

      //-- Create all pages.
      posts.forEach(post => {
        console.log(
          createPage({
            path: `/posts/${post.id}`,
            component: require.resolve("../templates/post.js"),
            context: {
              id: post.id,
            },
          })
        )
      })

      resolve(helpers)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = createPostNode
