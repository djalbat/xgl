"use strict";

import TexturedTriangle from "./texturedTriangle";

const Side = (properties) =>

  <TexturedTriangle scale={[ 1, 1/Math.sqrt(2), 1 ]} position={[ -0.5, 0, 0.5 ]} rotations={[ -45, 0, 0 ]} />

;

export default Side;
