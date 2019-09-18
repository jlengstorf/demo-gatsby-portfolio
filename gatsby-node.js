exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error('There was an error loading projects!');
    // TODO actually handle the error.
  }

  const projects = result.data.allProjectsJson.edges;

  projects.forEach(({ node: project }) => {
    actions.createPage({
      path: `/${project.slug}`,
      component: require.resolve('./src/templates/project.js'),
      context: {
        slug: project.slug
      }
    });
  });
};
