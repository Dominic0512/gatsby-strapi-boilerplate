const createPageNode = helpers => {
  return new Promise(async (resolve, reject) => {
    try {
      const { graphql, createPage } = helpers
      const {
        data: {
          strapi: { pages },
        },
      } = await graphql(`
        {
          strapi {
            pages {
              id
              slug
              locales(where: { locale: { label: "zh" } }) {
                title
                content
              }
            }
          }
        }
      `)

      //-- Create all pages.
      pages.forEach(page => {
        createPage({
          path: `/pages/${page.slug}`,
          component: require.resolve("../templates/page.js"),
          context: {
            id: page.id,
          },
        })
      })

      resolve(helpers)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = createPageNode
