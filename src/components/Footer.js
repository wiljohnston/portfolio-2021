import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="grid pt-32 pb-16 b2">
    <Link className="grid-start-2 grid-end-10 flex justify-end mb-3" to="/blog">
      blog
    </Link>

    <Link className="grid-start-2 grid-end-10 flex justify-end mb-3" to="/">
      portfolio
    </Link>

    <a
      href="https://www.linkedin.com/in/wil-j-88b232120/"
      target="_blank"
      rel="noreferrer"
      className="grid-start-2 grid-end-10 flex justify-end mb-3"
    >
      linkedin
    </a>

    <p className="grid-start-2 grid-end-10 flex justify-end">
      william.cd.johnston at gmail
    </p>
  </footer>
);

export default Footer;
