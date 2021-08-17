"use strict";

import { DEFAULT_R, DEFAULT_G, DEFAULT_B, DEFAULT_A } from "../defaults";

function clearColour(r = DEFAULT_R, g = DEFAULT_G, b = DEFAULT_B, a = DEFAULT_A) { this.context.clearColor(r, g, b, a); }

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
