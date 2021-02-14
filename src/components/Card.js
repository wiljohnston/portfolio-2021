/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Img from "gatsby-image";

const Card = ({
  className,
  img,
  boldCaption,
  italicCaption,
  didList,
  learnedList,
  bigTitle,
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className={`${className} flex-col`}>
      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="w-full relative flex flex-col p-4 mb-4 cursor-pointer border-black"
      >
        <header
          className={`transition-appear w-full flex justify-end f2 mb-6 ${
            hovering ? "appeared" : "to-appear"
          }`}
        >
          {bigTitle}
        </header>

        {[
          ["did", didList],
          ["learned", learnedList],
        ].map(([verb, list]) => (
          <div
            className={`transition-appear b1 mb-8 ${
              hovering ? "appeared" : "to-appear"
            }`}
            style={{ marginLeft: "30%" }}
          >
            <h4 className="mb-2">What I {verb}</h4>
            <ul style={{ listStyle: "disc" }}>
              {list.map(({ item }) => (
                <li className="ml-10">{`${item}`}</li>
              ))}
            </ul>
          </div>
        ))}

        <footer className="w-full flex justify-start">
          <Img fluid={img.childImageSharp.fluid} className="mt-6 w-24 h-24" />
        </footer>
      </div>

      <p className="b1 italic mb-2">{italicCaption}</p>
      <p className="b1 font-bold">{boldCaption}</p>
    </div>
  );
};

export default Card;
