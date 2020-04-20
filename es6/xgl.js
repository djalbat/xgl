"use strict";

import React from "./react";

Object.defineProperty(window, "React", {
  get: function() {
    return React;
  }
});
