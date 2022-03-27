/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React from "react";
import { graphql } from "gatsby";
import ArticleGrid from "~components/ArticleGrid";
import Footer from "~components/Footer";
import Layout from "~components/Layout";
import SEO from "~components/SEO";

const BlogPage = ({ data, location }) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter } = markdownRemark;

  const articles = [];

  allMarkdownRemark.edges.forEach(({ node }) => {
    // processing...

    articles.push(node);
  });

  return (
    <>
      <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      />

      <Layout className="collections-page w-full relative animation-appear">
        {/* <DummyImage /> */}

        <ArticleGrid
          heading="Here's where I write down what I've learned"
          articles={articles}
        />

        {/* <Newsletter /> */}
      </Layout>

      <Footer />
    </>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        seoDescription
        seoKeywords
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article-page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
