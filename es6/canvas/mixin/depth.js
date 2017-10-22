'use strict';

const defaultDepth = 1.0;

function clearDepth(depth = defaultDepth) { 
  this.context.clearDepth(depth); 
}

function clearDepthBuffer() {
  const { DEPTH_BUFFER_BIT } = this.context;

  this.context.clear(DEPTH_BUFFER_BIT);
}

function enableDepthTesting() {
  const { DEPTH_TEST, LEQUAL } = this.context;

  this.context.enable(DEPTH_TEST);

  this.context.depthFunc(LEQUAL);
}

module.exports = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting
};
