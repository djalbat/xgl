"use strict";

import "../xgl";

import cubeExample from "./cube";
import simpleExample from "./simple";
import maskingExample from "./masking";
import pyramidExample from "./pyramid";
import tilingExample from "./tiling";

const example = window.location.search.substring(1);  ///

switch (example) {
  case "simple":
    simpleExample();
    break;

  case "cube":
    cubeExample();
    break;

  case "masking":
    maskingExample();
    break;

  case "pyramid":
    pyramidExample();
    break;

  case "tiling":
    tilingExample();
    break;
}