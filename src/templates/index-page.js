/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React from "react";
import { graphql } from "gatsby";
import Card from "~components/Card";
import Layout from "~components/Layout";
import SEO from "~components/SEO";
import Header from "~components/Header";

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      />

      <Layout className="index-page w-full relative pb-16 bg-off-white">
        <Header />

        <ul className="pt-24 w-full grid">
          {frontmatter.cards.map((details, detailsIndex) => (
            <Card
              className={`grid-end-7 xs:grid-end-12 grid-start-${
                detailsIndex % 2 === 0 ? 2 : 5
              } xs:grid-start-1 mb-32`}
              {...details}
            />
          ))}
        </ul>

        <footer className="grid pt-32 b2">
          <a
            href="https://www.linkedin.com/in/wil-j-88b232120/"
            target="_blank"
            rel="noreferrer"
            className="grid-start-2 grid-end-10 flex justify-end mb-2"
          >
            linkedin
          </a>

          <p className="grid-start-2 grid-end-10 flex justify-end">
            william.cd.johnston at gmail
          </p>
        </footer>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        cards {
          img {
            childImageSharp {
              fluid(maxWidth: 1280, quality: 75) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          boldCaption
          italicCaption
          didList {
            item
          }
          learnedList {
            item
          }
          bigTitle
        }
        seoDescription
        seoKeywords
      }
    }
  }
`;
