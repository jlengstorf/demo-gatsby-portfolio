import React from 'react';
import { Link } from 'gatsby';

import './layout.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <header className="header">
      <Link to="/">My Portfolio</Link>
    </header>
    <main className="content">{children}</main>
  </React.Fragment>
);

export default Layout;
