import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject {
        edges {
          node {
            title
            slug {
              current
            }
            description
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allSanityProject.edges;

  return (
    <Layout>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug.current;
        const imageData = project.image.asset.fluid;

        return (
          <ProjectPreview
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        );
      })}
    </Layout>
  );
};

export default Home;
