"use strict";

function clearColour(colour) {
  const r = ((colour & 0xff0000) >> 16) / 256,
        g = ((colour & 0x00ff00) >> 8) / 256,
        b = ((colour & 0x0000ff) >> 0) / 256,
        a = 1;  ///

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
