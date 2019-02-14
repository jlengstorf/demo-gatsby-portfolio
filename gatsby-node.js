exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.error) {
    reporter.panic('There was a problem loading your projects!');
    return;
  }

  const projects = result.data.allSanityProject.edges.map(({ node }) => node);

  projects.forEach(project => {
    actions.createPage({
      path: `/${project.slug.current}/`,
      component: require.resolve('./src/templates/project.js'),
      context: {
        slug: project.slug.current
      }
    });
  });
};
