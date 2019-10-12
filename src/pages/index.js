import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';

export const query = graphql`
  query {
    allProjectsJson {
      nodes {
        id
        title
        slug
        description
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const projectNodes = data.allProjectsJson.nodes;

  const projects = projectNodes.map(project => ({
    id: project.id,
    title: project.title,
    image: project.image.childImageSharp.fluid,
    url: project.url,
    slug: project.slug,
    description: project.description
  }));

  return (
    <Layout>
      {projects.map(project => (
        <ProjectPreview key={project.id} {...project} />
      ))}
    </Layout>
  );
};
