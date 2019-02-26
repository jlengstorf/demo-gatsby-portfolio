exports.createPages = async ({ actions, graphql, reporter }) => {
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

  if (result.error) {
    reporter.panic('There was a problem loading your projects!');
    return;
  }

  const projects = result.data.allProjectsJson.edges;

  projects.forEach(({ node: project }) => {
    const slug = project.slug;

    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { slug }
    });
  });
};
