'use strict';

const defaultDepth = 1.0;

function clearDepth(depth = defaultDepth) { this.context.clearDepth(depth); }

function clearDepthBuffer() {
  const { DEPTH_BUFFER_BIT } = this.context,
        mask = DEPTH_BUFFER_BIT;

  this.context.clear(mask);
}

function enableDepthTesting() {
  const { DEPTH_TEST } = this.context,
        cap = DEPTH_TEST;

  this.context.enable(cap);
}

function enableDepthFunction() {
  const { LEQUAL } = this.context,
        func = LEQUAL;
  
  this.context.depthFunc(func); 
}

module.exports = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting,
  enableDepthFunction: enableDepthFunction
};
