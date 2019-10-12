import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
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
`;

const ProjectTemplate = ({ data }) => {
  const projectNode = data.projectsJson;

  const project = {
    id: projectNode.id,
    title: projectNode.title,
    image: projectNode.image.childImageSharp.fluid,
    url: projectNode.url,
    slug: projectNode.slug,
    description: projectNode.description
  };

  return (
    <Layout>
      <Project {...project} />
    </Layout>
  );
};

export default ProjectTemplate;
