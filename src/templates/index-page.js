/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, { useState, useContext } from "react";
import { graphql } from "gatsby";
import { DocumentContext } from "~context/DocumentContext"
import Card from "~components/Card";
import Layout from "~components/Layout";
import SEO from "~components/SEO";
import Header from "~components/Header";

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const [modalContent, setModalContent] = useState(null);
  const { device } = useContext(DocumentContext)

  return (
    <>
      <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      />

      <Layout className="index-page w-full relative bg-off-white">
        {/* Modal */}
        {modalContent && (
          <div
            className={`animation-appear w-screen h-screen sticky top-0 right-0 bottom-0 left-0 z-10 overflow-hidden bg-cool-grey`}
          >
            <div className="w-full h-full pt-3 pb-12 grid">
              <div className="grid-end-12 relative flex flex-col">
                <header className="w-full relative flex justify-end">
                  <button
                    type="button"
                    style={{ marginRight: device === "mobile" ? "0px" : "-32px" }}
                    onClick={() => setModalContent(null)}
                    className="hover-scale pt-2 pl-2 pb-2 f3"
                  >
                    x
                  </button>
                </header>

                {modalContent}
              </div>
            </div>
          </div>
        )}

        <Header />

        <ul className="pt-24 w-full grid">
          {frontmatter.cards.map((details, detailsIndex) => (
            <Card
              className={`grid-end-7 xs:grid-end-12 grid-start-${
                detailsIndex % 2 === 0 ? 2 : 5
              } xs:grid-start-1 mb-32`}
              {...details}
              setModalContent={setModalContent}
            />
          ))}
        </ul>

        <footer className="grid pt-32 pb-16 b2">
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
          demoLink
        }
        seoDescription
        seoKeywords
      }
    }
  }
`;
