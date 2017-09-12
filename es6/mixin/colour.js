'use strict';

const defaultR = 0.0,
      defaultG = 0.0,
      defaultB = 0.0,
      defaultA = 1.0;

function clearColour(r = defaultR, g = defaultG, b = defaultB, a = defaultA) { this.context.clearColor(r, g, b, a); }

function clearColourBuffer() {
  const mask = this.COLOR_BUFFER_BIT_MASK;

  this.context.clear(mask);
}

const colourMixin = {
  clearColour: clearColour,
  clearColourBuffer: clearColourBuffer
};

module.exports = colourMixin;
