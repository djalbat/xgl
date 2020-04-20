"use strict";

const defaultDepth = 1.0;

function clearDepth(depth = defaultDepth) { 
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

module.exports = {
  clearDepth,
  clearDepthBuffer,
  enableDepthTesting
};
