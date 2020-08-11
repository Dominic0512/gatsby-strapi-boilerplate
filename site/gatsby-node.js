/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
      path: `/page/${page.slug}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.id,
      },
    })
  })
}
