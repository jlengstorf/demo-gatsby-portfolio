import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ title, description, url, imageData, tags }) => (
  <div className="project">
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />
    <p>{description}</p>
    <p>
      <a href={url}>View this project online &rarr;</a>
    </p>
    <h3>Tags:</h3>
    <ul>
      {tags.map(tag => (
        <li key={`tag-${tag}`}>{tag}</li>
      ))}
    </ul>
    <p>
      <Link to="/">&larr; back to all projects</Link>
    </p>
  </div>
);

export default ProjectPreview;
