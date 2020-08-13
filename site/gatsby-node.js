const R = require("ramda")
const nodes = require("./src/nodes")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const createHelpers = { graphql, createPage }
  const pipeR = R.pipeWith(R.andThen)
  await pipeR(nodes)(createHelpers)
}
