'use strict';

const defaultDepth = 1.0;

function clearDepth(depth = defaultDepth) { this.context.clearDepth(depth); }

function clearDepthBuffer() {
  const mask = this.DEPTH_BUFFER_BIT_MASK;

  this.context.clear(mask);
}

function enableDepthTesting() {
  const cap = this.DEPTH_TEST_CAP;

  this.context.enable(cap);
}

function enableDepthFunction() {
  const func = this.LEQUAL_FUNCTION;
  
  this.context.depthFunc(func); 
}

const depthMixin = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting,
  enableDepthFunction: enableDepthFunction
};

module.exports = depthMixin;
