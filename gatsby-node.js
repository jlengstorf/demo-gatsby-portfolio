exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    console.error('There was an error loading projects!');
    // TODO actually handle errors
  }

  result.data.allProjectsJson.nodes.forEach(project => {
    actions.createPage({
      path: `/${project.slug}`,
      component: require.resolve('./src/templates/project-template.js'),
      context: {
        slug: project.slug
      }
    });
  });
};
