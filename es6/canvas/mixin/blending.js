'use strict';

function enableBlending() {
  const { SRC_ALPHA, ONE, BLEND } = this.context;

  this.context.enable(BLEND);

  this.context.blendFunc(SRC_ALPHA, ONE);
}

module.exports = {
  enableBlending: enableBlending
};
