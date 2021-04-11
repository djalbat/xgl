"use strict";

const defaultR = 0.0,
      defaultG = 0.0,
      defaultB = 0.0,
      defaultA = 1.0;

export function clearColour(r = defaultR, g = defaultG, b = defaultB, a = defaultA) { this.context.clearColor(r, g, b, a); }

export function clearColourBuffer() {
  const { COLOR_BUFFER_BIT } = this.context,
        mask = COLOR_BUFFER_BIT;

  this.context.clear(mask);
}
