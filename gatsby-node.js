const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    console.log(node.frontmatter.slug)
    createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates_f/ProjectTemplate.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
