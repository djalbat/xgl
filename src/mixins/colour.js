"use strict";

function clearColour(colour) {
  const [ r, g, b, a = 1 ] =  colour;

  this.context.clearColor(r, g, b, a);
}

function clearColourBuffer() {
  const { COLOR_BUFFER_BIT } = this.context,
        mask = COLOR_BUFFER_BIT;

  this.context.clear(mask);
}

const colourMixins = {
  clearColour,
  clearColourBuffer
};

export default colourMixins;
