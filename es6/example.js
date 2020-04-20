"use strict";

import cubeExample from "./example/cube";
import simpleExample from "./example/simple";
import maskingExample from "./example/masking";
import pyramidExample from "./example/pyramid";
import tilingExample from "./example/tiling";

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