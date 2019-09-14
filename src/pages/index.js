import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          id
          title
          description
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          url
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          id
          title
          slug
          url
          description
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
  }
`;

export default ({ data }) => {
  const sanityNodes = data.allSanityProject.edges;
  const projectNodes = data.allProjectsJson.edges;

  const jsonProjects = projectNodes.map(({ node: project }) => ({
    id: project.id,
    title: project.title,
    image: project.image.childImageSharp.fluid,
    url: project.url,
    slug: project.slug,
    description: project.description
  }));

  const sanityProjects = sanityNodes.map(({ node: project }) => ({
    id: project.id,
    title: project.title,
    image: project.image.asset.fluid,
    url: project.url,
    slug: project.slug.current,
    description: project.description
  }));

  const projects = [...jsonProjects, ...sanityProjects];

  return (
    <Layout>
      {projects.map(project => (
        <ProjectPreview key={project.id} {...project} />
      ))}
    </Layout>
  );
};
