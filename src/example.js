"use strict";

import "./xgl";

import cubeExample from "./example/cube";
import tilingExample from "./example/tiling";
import simpleExample from "./example/simple";
import maskingExample from "./example/masking";
import pyramidExample from "./example/pyramid";

const example = window.location.search.substring(1);  ///

switch (example) {
  case "cube":
    cubeExample();
    break;

  case "tiling":
    tilingExample();
    break;

  case "simple":
    simpleExample();
    break;

  case "masking":
    maskingExample();
    break;

  case "pyramid":
    pyramidExample();
    break;
}
