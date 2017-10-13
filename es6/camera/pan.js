'use strict';

class Pan {
  constructor(offset) {
    this.offset = offset;
  }

  getOffset() {
    return this.offset;
  }

  static fromInitialOffset(initialOffset) {
    const offset = initialOffset,
          pan = new Pan(offset);
    
    return pan;
  }
}

module.exports = Pan;
