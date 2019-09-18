import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Project = ({ title, description, image, url }) => (
  <div className="project">
    <Image fluid={image} alt={title} />
    <h1>{title}</h1>
    <p>{description}</p>
    <p>
      <a href={url}>View this project online &rarr;</a>
    </p>
    <p>
      <Link to="/">&larr; Back to all projects</Link>
    </p>
  </div>
);

export default Project;
