"use strict";

import { DEFAULT_DEPTH } from "../defaults";

function clearDepth(depth = DEFAULT_DEPTH) {
  this.context.clearDepth(depth); 
}

function clearDepthBuffer() {
  const { DEPTH_BUFFER_BIT } = this.context,
        mask = DEPTH_BUFFER_BIT;

  this.context.clear(mask);
}

function enableDepthTesting() {
  const { DEPTH_TEST, LEQUAL } = this.context,
        capacity = DEPTH_TEST,
        depthComparisonFunction = LEQUAL;

  this.context.enable(capacity);

  this.context.depthFunc(depthComparisonFunction);
}

const depthMixins = {
  clearDepth,
  clearDepthBuffer,
  enableDepthTesting
};

export default depthMixins;
