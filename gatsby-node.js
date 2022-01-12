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
      allProjectsJson {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.allProjectsJson.nodes.forEach(project => {
    createPage({
      path: "/projects/" + project.slug,
      component: path.resolve("./src/templates_f/ProjectTemplate.js"),
      context: { slug: project.slug },
    })
  })
}
