import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';

// export const query = graphql`
//   {
//     allProjectsJson {
//       edges {
//         node {
//           title
//           description
//           slug
//           image {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          url
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
`;

export default ({ data }) => (
  <Layout>
    {/* {data.allProjectsJson.edges.map(({ node: project }) => ( */}
    {data.allSanityProject.edges.map(({ node: project }) => (
      <ProjectPreview
        // key={`preview-${project.slug}`}
        key={`preview-${project.slug.current}`}
        title={project.title}
        description={project.description}
        // slug={project.slug}
        // imageData={project.image.childImageSharp.fluid}
        slug={project.slug.current}
        imageData={project.image.asset.fluid}
      />
    ))}
  </Layout>
);
