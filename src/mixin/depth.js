"use strict";

import { DEFAULT_DEPTH } from "../defaults";

export function clearDepth(depth = DEFAULT_DEPTH) {
  this.context.clearDepth(depth); 
}

export function clearDepthBuffer() {
  const { DEPTH_BUFFER_BIT } = this.context,
        mask = DEPTH_BUFFER_BIT;

  this.context.clear(mask);
}

export function enableDepthTesting() {
  const { DEPTH_TEST, LEQUAL } = this.context,
        capacity = DEPTH_TEST,
        depthComparisonFunction = LEQUAL;

  this.context.enable(capacity);

  this.context.depthFunc(depthComparisonFunction);
}
