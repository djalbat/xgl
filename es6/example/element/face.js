"use strict";

import ColouredSquare from "./colouredSquare";

const Face = (properties) => {
  const { colour } = properties;

  return (

    <ColouredSquare colour={colour} position={[ -0.5, -0.5, +0.5 ]} />

  );
};

module.exports = Face;
