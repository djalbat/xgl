'use strict';

function enableBlending() {
  const { BLEND, SRC_ALPHA, ONE } = this.context,
        capacity = BLEND,
        sourceFactor = SRC_ALPHA,
        destinationFactor = ONE;

  this.context.enable(capacity);

  this.context.blendFunc(sourceFactor, destinationFactor);
}

module.exports = {
  enableBlending
};
