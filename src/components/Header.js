/* eslint-disable react/prop-types */

import React, { useState } from "react";

import Scrambler from "./Scrambler";
import { useInterval } from "~utils/hooks";

const Header = () => {
  const [scramblingIndex, setscramblingIndex] = useState(0);

  const scramblings = [
    "code",
    "eat corns chips with hommus",
    "karaoke",
    "live in a van",
    "design",
    "crunch numbers",
    "love juliet",
    "write song parodies",
  ];

  useInterval(() => {
    setscramblingIndex((scramblingIndex + 1) % scramblings.length);
  }, 5000);

  return (
    <header
      className={`header w-full h-screen py-8 grid flex-col justify-around`}
    >
      <h1 className="grid-end-11 sm:grid-end-12 grid-start-2 sm:grid-start-1 animation-appear animation-delay-1 f1">
        W.
        <br />
        Johnston
      </h1>

      <p className="grid-end-10 sm:grid-end-11 grid-start-3 sm:grid-start-2 animation-appear animation-delay-2 f3">
        Things I do:
        <Scrambler className="ml-8" text={scramblings[scramblingIndex]} />
      </p>

      <p className="grid-end-10 sm:grid-end-11 grid-start-3 sm:grid-start-2 animation-appear animation-delay-3 f3">
        Things I've done:
        <span className="absolute ml-8" style={{ top: 6 }}>
          ↯
        </span>
      </p>
    </header>
  );
};

export default Header;
