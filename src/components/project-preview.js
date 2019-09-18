import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ title, description, slug, image }) => (
  <div className="project-preview">
    <Link to={`/${slug}`}>
      <Image fluid={image} alt={title} />
    </Link>
    <h2>
      <Link to={`/${slug}`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`/${slug}`}>View this project &rarr;</Link>
    </p>
  </div>
);

export default ProjectPreview;
