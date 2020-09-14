// exports.onCreateNode = ({ node }) => {
//     if (node.internal.type === `MarkdownRemark`) {
//         console.log(`Node created of type "${node.internal.type}"`)
//     }
// }

// Create Pages Dynamically
const path = require(`path`)
exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions
    const ProjectTemplate = path.resolve(`src/templates/project.js`)
    const result = await graphql(`
        query GetProjectsSlug {
            Projects: allContentfulProject {
                nodes {
                    slug
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.Projects.nodes.forEach((project) => {
        const path = `/projects/${project.slug}`
        createPage({
            path: path,
            component: ProjectTemplate,
            // In your blog post template's graphql query, you can use pagePath
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              slug: project.slug,
            },
        })
    })
}