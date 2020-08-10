/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //   const homeData = await graphql(
  //     `
  //       {
  //         allStrapiHome {
  //           edges {
  //             node {
  //               locales {
  //                 title
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  //   )

  //   if (homeData.errors) {
  //     throw homeData.errors
  //   }

  //   console.log(homeData)

  // Create blog articles pages.
  //   const articles = result.data.articles.edges
  //   articles.forEach((article, index) => {
  //     createPage({
  //       path: `/article/${article.node.strapiId}`,
  //       component: require.resolve("./src/templates/article.js"),
  //       context: {
  //         id: article.node.strapiId,
  //       },
  //     })
  //   })
}
