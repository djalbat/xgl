"use strict";

const defaultDepth = 1.0;

export function clearDepth(depth = defaultDepth) {
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
