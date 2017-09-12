'use strict';

const defaultDepth = 1.0;

function clearDepth(depth = defaultDepth) { this.context.clearDepth(depth); }

function clearDepthBuffer() { this.context.clear(this.context.DEPTH_BUFFER_BIT); }

function enableDepthTesting() { this.context.enable(this.context.DEPTH_TEST); }

function enableDepthFunction() { this.context.depthFunc(this.context.LEQUAL); }

const depthMixin = {
  clearDepth: clearDepth,
  clearDepthBuffer: clearDepthBuffer,
  enableDepthTesting: enableDepthTesting,
  enableDepthFunction: enableDepthFunction
};

module.exports = depthMixin;
