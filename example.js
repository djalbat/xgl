(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };

  // lib/maths/vector.js
  var require_vector = __commonJS({
    "lib/maths/vector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        zero2: function() {
          return zero2;
        },
        zero3: function() {
          return zero3;
        },
        zero4: function() {
          return zero4;
        },
        length2: function() {
          return length2;
        },
        length3: function() {
          return length3;
        },
        length4: function() {
          return length4;
        },
        dot2: function() {
          return dot2;
        },
        dot3: function() {
          return dot3;
        },
        dot4: function() {
          return dot4;
        },
        cross3: function() {
          return cross3;
        },
        normalise2: function() {
          return normalise2;
        },
        normalise3: function() {
          return normalise3;
        },
        normalise4: function() {
          return normalise4;
        },
        reflect2: function() {
          return reflect2;
        },
        reflect3: function() {
          return reflect3;
        },
        reflect4: function() {
          return reflect4;
        },
        truncate4: function() {
          return truncate4;
        },
        scale2: function() {
          return scale2;
        },
        scale3: function() {
          return scale3;
        },
        scale4: function() {
          return scale4;
        },
        add2: function() {
          return add2;
        },
        add3: function() {
          return add3;
        },
        add4: function() {
          return add4;
        },
        subtract2: function() {
          return subtract2;
        },
        subtract3: function() {
          return subtract3;
        },
        subtract4: function() {
          return subtract4;
        },
        transform2: function() {
          return transform2;
        },
        transform3: function() {
          return transform3;
        },
        transform4: function() {
          return transform4;
        },
        default: function() {
          return _default;
        }
      });
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_with_holes(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterable_to_array_limit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _non_iterable_rest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _sliced_to_array(arr, i) {
        return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function zero2() {
        return [
          0,
          0
        ];
      }
      function zero3() {
        return [
          0,
          0,
          0
        ];
      }
      function zero4() {
        return [
          0,
          0,
          0,
          0
        ];
      }
      function length2(vector) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
        return Math.sqrt(x * x + y * y);
      }
      function length3(vector) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return Math.sqrt(x * x + y * y + z * z);
      }
      function length4(vector) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
        return Math.sqrt(x * x + y * y + z * z + w * w);
      }
      function dot2(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
        return a0 * b0 + a1 * b1;
      }
      function dot3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
        return a0 * b0 + a1 * b1 + a2 * b2;
      }
      function dot4(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
        return a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
      }
      function cross3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
        return [
          a1 * b2 - a2 * b1,
          a2 * b0 - a0 * b2,
          a0 * b1 - a1 * b0
        ];
      }
      function normalise2(vector) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1], length = Math.sqrt(x * x + y * y);
        return [
          x / length,
          y / length
        ];
      }
      function normalise3(vector) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2], length = Math.sqrt(x * x + y * y + z * z);
        return [
          x / length,
          y / length,
          z / length
        ];
      }
      function normalise4(vector) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3], length = Math.sqrt(x * x + y * y + z * z + w * w);
        return [
          x / length,
          y / length,
          z / length,
          w / length
        ];
      }
      function reflect2(vector) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
        return [
          -x,
          -y
        ];
      }
      function reflect3(vector) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return [
          -x,
          -y,
          -z
        ];
      }
      function reflect4(vector) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
        return [
          -x,
          -y,
          -z,
          -w
        ];
      }
      function truncate4(vector) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return [
          x,
          y,
          z
        ];
      }
      function scale2(vector, scalar) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1];
        return [
          x * scalar,
          y * scalar
        ];
      }
      function scale3(vector, scalar) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2];
        return [
          x * scalar,
          y * scalar,
          z * scalar
        ];
      }
      function scale4(vector, scalar) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3];
        return [
          x * scalar,
          y * scalar,
          z * scalar,
          w * scalar
        ];
      }
      function add2(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
        return [
          a0 + b0,
          a1 + b1
        ];
      }
      function add3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
        return [
          a0 + b0,
          a1 + b1,
          a2 + b2
        ];
      }
      function add4(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
        return [
          a0 + b0,
          a1 + b1,
          a2 + b2,
          a3 + b3
        ];
      }
      function subtract2(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 2), a0 = _vectorA[0], a1 = _vectorA[1], _vectorB = _sliced_to_array(vectorB, 2), b0 = _vectorB[0], b1 = _vectorB[1];
        return [
          a0 - b0,
          a1 - b1
        ];
      }
      function subtract3(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 3), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], _vectorB = _sliced_to_array(vectorB, 3), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2];
        return [
          a0 - b0,
          a1 - b1,
          a2 - b2
        ];
      }
      function subtract4(vectorA, vectorB) {
        var _vectorA = _sliced_to_array(vectorA, 4), a0 = _vectorA[0], a1 = _vectorA[1], a2 = _vectorA[2], a3 = _vectorA[3], _vectorB = _sliced_to_array(vectorB, 4), b0 = _vectorB[0], b1 = _vectorB[1], b2 = _vectorB[2], b3 = _vectorB[3];
        return [
          a0 - b0,
          a1 - b1,
          a2 - b2,
          a3 - b3
        ];
      }
      function transform2(vector, matrix) {
        var _vector = _sliced_to_array(vector, 2), x = _vector[0], y = _vector[1], _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
        return [
          m0 * x + m2 * y,
          m1 * x + m3 * y
        ];
      }
      function transform3(vector, matrix) {
        var _vector = _sliced_to_array(vector, 3), x = _vector[0], y = _vector[1], z = _vector[2], _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8];
        return [
          m0 * x + m3 * y + m6 * z,
          m1 * x + m4 * y + m7 * z,
          m2 * x + m5 * y + m8 * z
        ];
      }
      function transform4(vector, matrix) {
        var _vector = _sliced_to_array(vector, 4), x = _vector[0], y = _vector[1], z = _vector[2], w = _vector[3], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
        return [
          m0 * x + m4 * y + m8 * z + m12 * w,
          m1 * x + m5 * y + m9 * z + m13 * w,
          m2 * x + m6 * y + m10 * z + m14 * w,
          m3 * x + m7 * y + m11 * z + m15 * w
        ];
      }
      var _default = {
        zero2,
        zero3,
        zero4,
        length2,
        length3,
        length4,
        dot2,
        dot3,
        dot4,
        cross3,
        normalise2,
        normalise3,
        normalise4,
        reflect2,
        reflect3,
        reflect4,
        truncate4,
        scale2,
        scale3,
        scale4,
        add2,
        add3,
        add4,
        subtract2,
        subtract3,
        subtract4,
        transform2,
        transform3,
        transform4
      };
    }
  });

  // lib/defaults.js
  var require_defaults = __commonJS({
    "lib/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        DEFAULT_R: function() {
          return DEFAULT_R;
        },
        DEFAULT_G: function() {
          return DEFAULT_G;
        },
        DEFAULT_B: function() {
          return DEFAULT_B;
        },
        DEFAULT_A: function() {
          return DEFAULT_A;
        },
        DEFAULT_DEPTH: function() {
          return DEFAULT_DEPTH;
        },
        DEFAULT_Z_FAR: function() {
          return DEFAULT_Z_FAR;
        },
        DEFAULT_Z_NEAR: function() {
          return DEFAULT_Z_NEAR;
        },
        DEFAULT_PERSIST: function() {
          return DEFAULT_PERSIST;
        },
        DEFAULT_FIELD_OF_VIEW: function() {
          return DEFAULT_FIELD_OF_VIEW;
        },
        DEFAULT_INITIAL_ANGLES: function() {
          return DEFAULT_INITIAL_ANGLES;
        },
        DEFAULT_INITIAL_OFFSETS: function() {
          return DEFAULT_INITIAL_OFFSETS;
        },
        DEFAULT_MARGIN_OF_ERROR: function() {
          return DEFAULT_MARGIN_OF_ERROR;
        },
        DEFAULT_INITIAL_DISTANCE: function() {
          return DEFAULT_INITIAL_DISTANCE;
        },
        DEFAULT_INITIAL_POSITION: function() {
          return DEFAULT_INITIAL_POSITION;
        },
        DEFAULT_MOUSE_SENSITIVITY: function() {
          return DEFAULT_MOUSE_SENSITIVITY;
        },
        DEFAULT_MOUSE_WHEEL_SENSITIVITY: function() {
          return DEFAULT_MOUSE_WHEEL_SENSITIVITY;
        }
      });
      var _vector = require_vector();
      var DEFAULT_R = 0;
      var DEFAULT_G = 0;
      var DEFAULT_B = 0;
      var DEFAULT_A = 1;
      var DEFAULT_DEPTH = 1;
      var DEFAULT_Z_FAR = 1e3;
      var DEFAULT_Z_NEAR = 1;
      var DEFAULT_PERSIST = false;
      var DEFAULT_FIELD_OF_VIEW = 45;
      var DEFAULT_INITIAL_ANGLES = (0, _vector.zero2)();
      var DEFAULT_INITIAL_OFFSETS = (0, _vector.zero3)();
      var DEFAULT_MARGIN_OF_ERROR = 1e-7;
      var DEFAULT_INITIAL_DISTANCE = 5;
      var DEFAULT_INITIAL_POSITION = [
        0,
        0,
        5
      ];
      var DEFAULT_MOUSE_SENSITIVITY = 1;
      var DEFAULT_MOUSE_WHEEL_SENSITIVITY = 1;
    }
  });

  // lib/mixins/depth.js
  var require_depth = __commonJS({
    "lib/mixins/depth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _defaults = require_defaults();
      function clearDepth() {
        var depth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_DEPTH;
        this.context.clearDepth(depth);
      }
      function clearDepthBuffer() {
        var DEPTH_BUFFER_BIT = this.context.DEPTH_BUFFER_BIT, mask = DEPTH_BUFFER_BIT;
        this.context.clear(mask);
      }
      function enableDepthTesting() {
        var _this_context = this.context, DEPTH_TEST = _this_context.DEPTH_TEST, LEQUAL = _this_context.LEQUAL, capacity = DEPTH_TEST, depthComparisonFunction = LEQUAL;
        this.context.enable(capacity);
        this.context.depthFunc(depthComparisonFunction);
      }
      var depthMixins = {
        clearDepth,
        clearDepthBuffer,
        enableDepthTesting
      };
      var _default = depthMixins;
    }
  });

  // lib/errors.js
  var require_errors = __commonJS({
    "lib/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        SHADER_ERROR: function() {
          return SHADER_ERROR;
        },
        WEB_GL_CONTEXT_ERROR: function() {
          return WEB_GL_CONTEXT_ERROR;
        }
      });
      var SHADER_ERROR = "Unable to create the shader.";
      var WEB_GL_CONTEXT_ERROR = "Unable to get the WebGL context.";
    }
  });

  // lib/mixins/shader.js
  var require_shader = __commonJS({
    "lib/mixins/shader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _errors = require_errors();
      function createShader(type, shaderSource) {
        var COMPILE_STATUS = this.context.COMPILE_STATUS, pname = COMPILE_STATUS, shader = this.context.createShader(type);
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);
        var compileStatus = this.context.getShaderParameter(shader, pname);
        if (!compileStatus) {
          throw new Error(_errors.SHADER_ERROR);
        }
        return shader;
      }
      function createVertexShader(vertexShaderSource, canvas) {
        var VERTEX_SHADER = this.context.VERTEX_SHADER, type = VERTEX_SHADER, vertexShader = this.createShader(type, vertexShaderSource);
        return vertexShader;
      }
      function createFragmentShader(fragmentShaderSource, canvas) {
        var FRAGMENT_SHADER = this.context.FRAGMENT_SHADER, type = FRAGMENT_SHADER, fragmentShader = this.createShader(type, fragmentShaderSource);
        return fragmentShader;
      }
      var shaderMixins = {
        createShader,
        createVertexShader,
        createFragmentShader
      };
      var _default = shaderMixins;
    }
  });

  // lib/mixins/buffer.js
  var require_buffer = __commonJS({
    "lib/mixins/buffer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function createElementBuffer(data) {
        var _this_context = this.context, ELEMENT_ARRAY_BUFFER = _this_context.ELEMENT_ARRAY_BUFFER, STATIC_DRAW = _this_context.STATIC_DRAW, target = ELEMENT_ARRAY_BUFFER, usage = STATIC_DRAW, uint16Array = new Uint16Array(data), elementBuffer = this.context.createBuffer();
        this.context.bindBuffer(target, elementBuffer);
        this.context.bufferData(target, uint16Array, usage);
        return elementBuffer;
      }
      function bindElementBuffer(elementBuffer) {
        var ELEMENT_ARRAY_BUFFER = this.context.ELEMENT_ARRAY_BUFFER, target = ELEMENT_ARRAY_BUFFER;
        this.context.bindBuffer(target, elementBuffer);
      }
      function createBuffer(data) {
        var _this_context = this.context, ARRAY_BUFFER = _this_context.ARRAY_BUFFER, STATIC_DRAW = _this_context.STATIC_DRAW, target = ARRAY_BUFFER, usage = STATIC_DRAW, buffer = this.context.createBuffer(), float32Array = new Float32Array(data);
        this.context.bindBuffer(target, buffer);
        this.context.bufferData(target, float32Array, usage);
        return buffer;
      }
      function bindBuffer(buffer, attributeLocation, components) {
        var _this_context = this.context, ARRAY_BUFFER = _this_context.ARRAY_BUFFER, FLOAT = _this_context.FLOAT, target = ARRAY_BUFFER, type = FLOAT, normalize = false, stride = 0, offset = 0;
        this.context.bindBuffer(target, buffer);
        this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);
        this.context.enableVertexAttribArray(attributeLocation);
      }
      var bufferMixins = {
        createElementBuffer,
        bindElementBuffer,
        createBuffer,
        bindBuffer
      };
      var _default = bufferMixins;
    }
  });

  // lib/mixins/colour.js
  var require_colour = __commonJS({
    "lib/mixins/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _defaults = require_defaults();
      function clearColour() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_R, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_G, b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_B, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _defaults.DEFAULT_A;
        this.context.clearColor(r, g, b, a);
      }
      function clearColourBuffer() {
        var COLOR_BUFFER_BIT = this.context.COLOR_BUFFER_BIT, mask = COLOR_BUFFER_BIT;
        this.context.clear(mask);
      }
      var colourMixins = {
        clearColour,
        clearColourBuffer
      };
      var _default = colourMixins;
    }
  });

  // lib/mixins/matrix.js
  var require_matrix = __commonJS({
    "lib/mixins/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function applyMatrix(uniformLocation, matrix) {
        var transpose = false;
        this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
      }
      var matrixMixins = {
        applyMatrix
      };
      var _default = matrixMixins;
    }
  });

  // lib/constants.js
  var require_constants = __commonJS({
    "lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        WEBGL: function() {
          return WEBGL;
        },
        WIDTH: function() {
          return WIDTH;
        },
        HEIGHT: function() {
          return HEIGHT;
        },
        CANVAS: function() {
          return CANVAS;
        },
        STRING: function() {
          return STRING;
        },
        FUNCTION: function() {
          return FUNCTION;
        },
        ANONYMOUS: function() {
          return ANONYMOUS;
        },
        GAMING_CAMERA: function() {
          return GAMING_CAMERA;
        },
        DESIGN_CAMERA: function() {
          return DESIGN_CAMERA;
        },
        VERTICES_LENGTH: function() {
          return VERTICES_LENGTH;
        },
        MINIMUM_DISTANCE: function() {
          return MINIMUM_DISTANCE;
        },
        INVERT_MULTIPLIER: function() {
          return INVERT_MULTIPLIER;
        },
        ANGLES_MULTIPLIER: function() {
          return ANGLES_MULTIPLIER;
        },
        MOUSE_WHEEL_DELTA_MULTIPLIER: function() {
          return MOUSE_WHEEL_DELTA_MULTIPLIER;
        },
        DEGREES_TO_RADIANS_MULTIPLIER: function() {
          return DEGREES_TO_RADIANS_MULTIPLIER;
        },
        EXT_TEXTURE_FILTER_ANISOTROPIC: function() {
          return EXT_TEXTURE_FILTER_ANISOTROPIC;
        },
        MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC: function() {
          return MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC;
        },
        WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC: function() {
          return WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC;
        },
        RELATIVE_MOUSE_COORDINATES_MULTIPLIER: function() {
          return RELATIVE_MOUSE_COORDINATES_MULTIPLIER;
        }
      });
      var WEBGL = "webgl";
      var WIDTH = "width";
      var HEIGHT = "height";
      var CANVAS = "canvas";
      var STRING = "string";
      var FUNCTION = "function";
      var ANONYMOUS = "anonymous";
      var GAMING_CAMERA = "gaming_camera";
      var DESIGN_CAMERA = "design_camera";
      var VERTICES_LENGTH = 3;
      var MINIMUM_DISTANCE = 1;
      var INVERT_MULTIPLIER = -1;
      var ANGLES_MULTIPLIER = 0.01;
      var MOUSE_WHEEL_DELTA_MULTIPLIER = 0.25;
      var DEGREES_TO_RADIANS_MULTIPLIER = Math.PI / 180;
      var EXT_TEXTURE_FILTER_ANISOTROPIC = "EXT_texture_filter_anisotropic";
      var MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = "MOZ_EXT_texture_filter_anisotropic";
      var WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = "WEBKIT_EXT_texture_filter_anisotropic";
      var RELATIVE_MOUSE_COORDINATES_MULTIPLIER = 0.025;
    }
  });

  // lib/mixins/texture.js
  var require_texture = __commonJS({
    "lib/mixins/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _constants = require_constants();
      function createTexture(image, index, repeat) {
        var _this_context = this.context, RGBA = _this_context.RGBA, LINEAR = _this_context.LINEAR, UNSIGNED_BYTE = _this_context.UNSIGNED_BYTE, TEXTURE0 = _this_context.TEXTURE0, TEXTURE_2D = _this_context.TEXTURE_2D, TEXTURE_WRAP_S = _this_context.TEXTURE_WRAP_S, TEXTURE_WRAP_T = _this_context.TEXTURE_WRAP_T, UNPACK_FLIP_Y_WEBGL = _this_context.UNPACK_FLIP_Y_WEBGL, CLAMP_TO_EDGE = _this_context.CLAMP_TO_EDGE, NEAREST = _this_context.NEAREST, REPEAT = _this_context.REPEAT, TEXTURE_MIN_FILTER = _this_context.TEXTURE_MIN_FILTER, target = TEXTURE0 + index, level = 0, internalFormat = RGBA, format = RGBA, type = UNSIGNED_BYTE, texture = this.context.createTexture();
        this.context.activeTexture(target);
        this.context.bindTexture(TEXTURE_2D, texture);
        this.context.pixelStorei(UNPACK_FLIP_Y_WEBGL, true);
        this.context.texImage2D(TEXTURE_2D, level, internalFormat, format, type, image);
        if (repeat) {
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, REPEAT);
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, REPEAT);
        } else {
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
        }
        this.context.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR);
        return texture;
      }
      function enableAnisotropicFiltering() {
        var extension = this.context.getExtension(_constants.EXT_TEXTURE_FILTER_ANISOTROPIC) || this.context.getExtension(_constants.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC) || this.context.getExtension(_constants.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC);
        if (extension) {
          var TEXTURE_2D = this.context.TEXTURE_2D, MAX_TEXTURE_MAX_ANISOTROPY_EXT = extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY_EXT = extension.TEXTURE_MAX_ANISOTROPY_EXT, maximum = this.context.getParameter(MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          this.context.texParameterf(TEXTURE_2D, TEXTURE_MAX_ANISOTROPY_EXT, maximum);
        }
      }
      var textureMixins = {
        createTexture,
        enableAnisotropicFiltering
      };
      var _default = textureMixins;
    }
  });

  // lib/mixins/program.js
  var require_program = __commonJS({
    "lib/mixins/program.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function createProgram(vertexShader, fragmentShader) {
        var program = this.context.createProgram();
        this.context.attachShader(program, vertexShader);
        this.context.attachShader(program, fragmentShader);
        this.context.linkProgram(program);
        return program;
      }
      function useProgram(program) {
        this.context.useProgram(program);
      }
      var programMixins = {
        createProgram,
        useProgram
      };
      var _default = programMixins;
    }
  });

  // lib/mixins/blending.js
  var require_blending = __commonJS({
    "lib/mixins/blending.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function enableBlending() {
        var _this_context = this.context, BLEND = _this_context.BLEND, SRC_ALPHA = _this_context.SRC_ALPHA, ONE = _this_context.ONE, capacity = BLEND, sourceFactor = SRC_ALPHA, destinationFactor = ONE;
        this.context.enable(capacity);
        this.context.blendFunc(sourceFactor, destinationFactor);
      }
      var blendingMixins = {
        enableBlending
      };
      var _default = blendingMixins;
    }
  });

  // lib/mixins/location.js
  var require_location = __commonJS({
    "lib/mixins/location.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      function getUniformLocation(program, name) {
        return this.context.getUniformLocation(program, name);
      }
      function getAttributeLocation(program, name) {
        return this.context.getAttribLocation(program, name);
      }
      function setUniformLocationIntegerValue(uniformLocation, integerValue) {
        this.context.uniform1i(uniformLocation, integerValue);
      }
      var locationMixins = {
        getUniformLocation,
        getAttributeLocation,
        setUniformLocationIntegerValue
      };
      var _default = locationMixins;
    }
  });

  // lib/canvas.js
  var require_canvas = __commonJS({
    "lib/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Canvas;
        }
      });
      var _depth = /* @__PURE__ */ _interop_require_default(require_depth());
      var _shader = /* @__PURE__ */ _interop_require_default(require_shader());
      var _buffer = /* @__PURE__ */ _interop_require_default(require_buffer());
      var _colour = /* @__PURE__ */ _interop_require_default(require_colour());
      var _matrix = /* @__PURE__ */ _interop_require_default(require_matrix());
      var _texture = /* @__PURE__ */ _interop_require_default(require_texture());
      var _program = /* @__PURE__ */ _interop_require_default(require_program());
      var _blending = /* @__PURE__ */ _interop_require_default(require_blending());
      var _location = /* @__PURE__ */ _interop_require_default(require_location());
      var _errors = require_errors();
      var _constants = require_constants();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      var Canvas = /* @__PURE__ */ function() {
        function Canvas2() {
          var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.CANVAS;
          _class_call_check(this, Canvas2);
          var domElement = domElementFromSelector(selector), context = contextFromDOMElement(domElement);
          this.domElement = domElement;
          this.context = context;
          this.enableDepthTesting();
        }
        _create_class(Canvas2, [
          {
            key: "getDOMElement",
            value: function getDOMElement() {
              return this.domElement;
            }
          },
          {
            key: "getContext",
            value: function getContext() {
              return this.context;
            }
          },
          {
            key: "getWidth",
            value: function getWidth() {
              return this.domElement.width;
            }
          },
          {
            key: "getHeight",
            value: function getHeight() {
              return this.domElement.height;
            }
          },
          {
            key: "getClientWidth",
            value: function getClientWidth() {
              return this.domElement.clientWidth;
            }
          },
          {
            key: "getClientHeight",
            value: function getClientHeight() {
              return this.domElement.clientHeight;
            }
          },
          {
            key: "setWidth",
            value: function setWidth(width) {
              this.domElement.setAttribute(_constants.WIDTH, width);
            }
          },
          {
            key: "setHeight",
            value: function setHeight(height) {
              this.domElement.setAttribute(_constants.HEIGHT, height);
            }
          },
          {
            key: "resize",
            value: function resize(width, height) {
              var x = 0, y = 0;
              this.setWidth(width);
              this.setHeight(height);
              this.context.viewport(x, y, width, height);
            }
          },
          {
            key: "clear",
            value: function clear() {
              this.clearDepth();
              this.clearColour();
              this.clearDepthBuffer();
              this.clearColourBuffer();
            }
          },
          {
            key: "render",
            value: function render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              var offsetsMatrixUniformLocation = renderer.getOffsetsMatrixUniformLocation(), normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(), positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(), rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(), projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();
              this.applyMatrix(offsetsMatrixUniformLocation, offsetsMatrix);
              this.applyMatrix(normalsMatrixUniformLocation, normalsMatrix);
              this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
              this.applyMatrix(rotationsMatrixUniformLocation, rotationsMatrix);
              this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
            }
          },
          {
            key: "drawElements",
            value: function drawElements(start, finish) {
              var _this_context = this.context, TRIANGLES = _this_context.TRIANGLES, UNSIGNED_SHORT = _this_context.UNSIGNED_SHORT, mode = TRIANGLES, type = UNSIGNED_SHORT, count = finish - start, offset = start * 2;
              this.context.drawElements(mode, count, type, offset);
            }
          }
        ]);
        return Canvas2;
      }();
      Object.assign(Canvas.prototype, _depth.default);
      Object.assign(Canvas.prototype, _shader.default);
      Object.assign(Canvas.prototype, _buffer.default);
      Object.assign(Canvas.prototype, _colour.default);
      Object.assign(Canvas.prototype, _matrix.default);
      Object.assign(Canvas.prototype, _texture.default);
      Object.assign(Canvas.prototype, _program.default);
      Object.assign(Canvas.prototype, _blending.default);
      Object.assign(Canvas.prototype, _location.default);
      function domElementFromSelector(selector) {
        var domElement = (typeof selector === "undefined" ? "undefined" : _type_of(selector)) === _constants.STRING ? document.querySelectorAll(selector)[0] : selector;
        return domElement;
      }
      function contextFromDOMElement(domElement) {
        var context = domElement.getContext(_constants.WEBGL);
        if (!context) {
          throw new Error(_errors.WEB_GL_CONTEXT_ERROR);
        }
        return context;
      }
    }
  });

  // node_modules/necessary/lib/levels.js
  var require_levels = __commonJS({
    "node_modules/necessary/lib/levels.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        TRACE_LEVEL: function() {
          return TRACE_LEVEL;
        },
        DEBUG_LEVEL: function() {
          return DEBUG_LEVEL;
        },
        INFO_LEVEL: function() {
          return INFO_LEVEL;
        },
        WARNING_LEVEL: function() {
          return WARNING_LEVEL;
        },
        ERROR_LEVEL: function() {
          return ERROR_LEVEL;
        },
        FATAL_LEVEL: function() {
          return FATAL_LEVEL;
        },
        default: function() {
          return _default;
        }
      });
      var TRACE_LEVEL = "trace";
      var DEBUG_LEVEL = "debug";
      var INFO_LEVEL = "info";
      var WARNING_LEVEL = "warning";
      var ERROR_LEVEL = "error";
      var FATAL_LEVEL = "fatal";
      var _default = {
        TRACE_LEVEL,
        DEBUG_LEVEL,
        INFO_LEVEL,
        WARNING_LEVEL,
        ERROR_LEVEL,
        FATAL_LEVEL
      };
    }
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS({
    "node_modules/necessary/lib/methods.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        GET_METHOD: function() {
          return GET_METHOD;
        },
        POST_METHOD: function() {
          return POST_METHOD;
        },
        PATCH_METHOD: function() {
          return PATCH_METHOD;
        },
        DELETE_METHOD: function() {
          return DELETE_METHOD;
        },
        OPTIONS_METHOD: function() {
          return OPTIONS_METHOD;
        },
        default: function() {
          return _default;
        }
      });
      var GET_METHOD = "GET";
      var POST_METHOD = "POST";
      var PATCH_METHOD = "PATCH";
      var DELETE_METHOD = "DELETE";
      var OPTIONS_METHOD = "OPTIONS";
      var _default = {
        GET_METHOD,
        POST_METHOD,
        PATCH_METHOD,
        DELETE_METHOD,
        OPTIONS_METHOD
      };
    }
  });

  // node_modules/necessary/lib/headers.js
  var require_headers = __commonJS({
    "node_modules/necessary/lib/headers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        PRAGMA_HEADER: function() {
          return PRAGMA_HEADER;
        },
        ACCEPT_HEADER: function() {
          return ACCEPT_HEADER;
        },
        LOCATION_HEADER: function() {
          return LOCATION_HEADER;
        },
        USER_AGENT_HEADER: function() {
          return USER_AGENT_HEADER;
        },
        CONTENT_TYPE_HEADER: function() {
          return CONTENT_TYPE_HEADER;
        },
        AUTHORIZATION_HEADER: function() {
          return AUTHORIZATION_HEADER;
        },
        CACHE_CONTROL_HEADER: function() {
          return CACHE_CONTROL_HEADER;
        },
        CONTENT_LENGTH_HEADER: function() {
          return CONTENT_LENGTH_HEADER;
        },
        TRANSFER_ENCODING_HEADER: function() {
          return TRANSFER_ENCODING_HEADER;
        },
        CONTENT_DISPOSITION_HEADER: function() {
          return CONTENT_DISPOSITION_HEADER;
        },
        ACCESS_CONTROL_ALLOW_ORIGIN_HEADER: function() {
          return ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
        },
        ACCESS_CONTROL_ALLOW_METHODS_HEADER: function() {
          return ACCESS_CONTROL_ALLOW_METHODS_HEADER;
        },
        ACCESS_CONTROL_ALLOW_HEADERS_HEADER: function() {
          return ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
        },
        ACCESS_CONTROL_REQUEST_METHOD_HEADER: function() {
          return ACCESS_CONTROL_REQUEST_METHOD_HEADER;
        },
        default: function() {
          return _default;
        }
      });
      var PRAGMA_HEADER = "pragma";
      var ACCEPT_HEADER = "accept";
      var LOCATION_HEADER = "location";
      var USER_AGENT_HEADER = "user-agent";
      var CONTENT_TYPE_HEADER = "content-type";
      var AUTHORIZATION_HEADER = "authorization";
      var CACHE_CONTROL_HEADER = "cache-control";
      var CONTENT_LENGTH_HEADER = "content-length";
      var TRANSFER_ENCODING_HEADER = "transfer-encoding";
      var CONTENT_DISPOSITION_HEADER = "content-disposition";
      var ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = "access-control-allow-origin";
      var ACCESS_CONTROL_ALLOW_METHODS_HEADER = "access-control-allow-methods";
      var ACCESS_CONTROL_ALLOW_HEADERS_HEADER = "access-control-allow-headers";
      var ACCESS_CONTROL_REQUEST_METHOD_HEADER = "access-control-request-method";
      var _default = {
        PRAGMA_HEADER,
        ACCEPT_HEADER,
        LOCATION_HEADER,
        USER_AGENT_HEADER,
        CONTENT_TYPE_HEADER,
        AUTHORIZATION_HEADER,
        CACHE_CONTROL_HEADER,
        CONTENT_LENGTH_HEADER,
        TRANSFER_ENCODING_HEADER,
        CONTENT_DISPOSITION_HEADER,
        ACCESS_CONTROL_ALLOW_ORIGIN_HEADER,
        ACCESS_CONTROL_ALLOW_METHODS_HEADER,
        ACCESS_CONTROL_ALLOW_HEADERS_HEADER,
        ACCESS_CONTROL_REQUEST_METHOD_HEADER
      };
    }
  });

  // node_modules/necessary/lib/keyCodes.js
  var require_keyCodes = __commonJS({
    "node_modules/necessary/lib/keyCodes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        TAB_KEY_CODE: function() {
          return TAB_KEY_CODE;
        },
        SHIFT_KEY_CODE: function() {
          return SHIFT_KEY_CODE;
        },
        ENTER_KEY_CODE: function() {
          return ENTER_KEY_CODE;
        },
        ESCAPE_KEY_CODE: function() {
          return ESCAPE_KEY_CODE;
        },
        DELETE_KEY_CODE: function() {
          return DELETE_KEY_CODE;
        },
        BACKSPACE_KEY_CODE: function() {
          return BACKSPACE_KEY_CODE;
        },
        ARROW_UP_KEY_CODE: function() {
          return ARROW_UP_KEY_CODE;
        },
        ARROW_DOWN_KEY_CODE: function() {
          return ARROW_DOWN_KEY_CODE;
        },
        ARROW_LEFT_KEY_CODE: function() {
          return ARROW_LEFT_KEY_CODE;
        },
        ARROW_RIGHT_KEY_CODE: function() {
          return ARROW_RIGHT_KEY_CODE;
        },
        default: function() {
          return _default;
        }
      });
      var TAB_KEY_CODE = 9;
      var SHIFT_KEY_CODE = 16;
      var ENTER_KEY_CODE = 13;
      var ESCAPE_KEY_CODE = 27;
      var DELETE_KEY_CODE = 46;
      var BACKSPACE_KEY_CODE = 8;
      var ARROW_UP_KEY_CODE = 38;
      var ARROW_DOWN_KEY_CODE = 40;
      var ARROW_LEFT_KEY_CODE = 37;
      var ARROW_RIGHT_KEY_CODE = 39;
      var _default = {
        TAB_KEY_CODE,
        SHIFT_KEY_CODE,
        ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        DELETE_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE
      };
    }
  });

  // node_modules/necessary/lib/encodings.js
  var require_encodings = __commonJS({
    "node_modules/necessary/lib/encodings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        UTF8_ENCODING: function() {
          return UTF8_ENCODING;
        },
        UTF_8_ENCODING: function() {
          return UTF_8_ENCODING;
        },
        BASE64_ENCODING: function() {
          return BASE64_ENCODING;
        },
        default: function() {
          return _default;
        }
      });
      var UTF8_ENCODING = "utf8";
      var UTF_8_ENCODING = "utf-8";
      var BASE64_ENCODING = "base64";
      var _default = {
        UTF8_ENCODING,
        UTF_8_ENCODING,
        BASE64_ENCODING
      };
    }
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS({
    "node_modules/necessary/lib/characters.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        UP_CHARACTER: function() {
          return UP_CHARACTER;
        },
        ETX_CHARACTER: function() {
          return ETX_CHARACTER;
        },
        BAR_CHARACTER: function() {
          return BAR_CHARACTER;
        },
        DASH_CHARACTER: function() {
          return DASH_CHARACTER;
        },
        DOWN_CHARACTER: function() {
          return DOWN_CHARACTER;
        },
        LEFT_CHARACTER: function() {
          return LEFT_CHARACTER;
        },
        RIGHT_CHARACTER: function() {
          return RIGHT_CHARACTER;
        },
        SPACE_CHARACTER: function() {
          return SPACE_CHARACTER;
        },
        COMMA_CHARACTER: function() {
          return COMMA_CHARACTER;
        },
        COLON_CHARACTER: function() {
          return COLON_CHARACTER;
        },
        PERIOD_CHARACTER: function() {
          return PERIOD_CHARACTER;
        },
        CTRL_C_CHARACTER: function() {
          return CTRL_C_CHARACTER;
        },
        WILDCARD_CHARACTER: function() {
          return WILDCARD_CHARACTER;
        },
        BACKTICK_DELIMITER: function() {
          return BACKTICK_DELIMITER;
        },
        NEW_LINE_CHARACTER: function() {
          return NEW_LINE_CHARACTER;
        },
        BACKSPACE_CHARACTER: function() {
          return BACKSPACE_CHARACTER;
        },
        AMPERSAND_CHARACTER: function() {
          return AMPERSAND_CHARACTER;
        },
        LESS_THAN_CHARACTER: function() {
          return LESS_THAN_CHARACTER;
        },
        GREATER_THAN_CHARACTER: function() {
          return GREATER_THAN_CHARACTER;
        },
        FORWARD_SLASH_CHARACTER: function() {
          return FORWARD_SLASH_CHARACTER;
        },
        CARRIAGE_RETURN_CHARACTER: function() {
          return CARRIAGE_RETURN_CHARACTER;
        },
        EXCLAMATION_MARK_CHARACTER: function() {
          return EXCLAMATION_MARK_CHARACTER;
        },
        default: function() {
          return _default;
        }
      });
      var UP_CHARACTER = "[A";
      var ETX_CHARACTER = "";
      var BAR_CHARACTER = "|";
      var DASH_CHARACTER = "-";
      var DOWN_CHARACTER = "[B";
      var LEFT_CHARACTER = "[D";
      var RIGHT_CHARACTER = "[C";
      var SPACE_CHARACTER = " ";
      var COMMA_CHARACTER = ",";
      var COLON_CHARACTER = ":";
      var PERIOD_CHARACTER = ".";
      var CTRL_C_CHARACTER = "^C";
      var WILDCARD_CHARACTER = "*";
      var BACKTICK_DELIMITER = "`";
      var NEW_LINE_CHARACTER = "\n";
      var BACKSPACE_CHARACTER = String.fromCharCode(127);
      var AMPERSAND_CHARACTER = "&";
      var LESS_THAN_CHARACTER = "&lt;";
      var GREATER_THAN_CHARACTER = "&gt;";
      var FORWARD_SLASH_CHARACTER = "/";
      var CARRIAGE_RETURN_CHARACTER = "\r";
      var EXCLAMATION_MARK_CHARACTER = "!";
      var _default = {
        UP_CHARACTER,
        ETX_CHARACTER,
        BAR_CHARACTER,
        DASH_CHARACTER,
        DOWN_CHARACTER,
        LEFT_CHARACTER,
        RIGHT_CHARACTER,
        SPACE_CHARACTER,
        COMMA_CHARACTER,
        COLON_CHARACTER,
        PERIOD_CHARACTER,
        CTRL_C_CHARACTER,
        WILDCARD_CHARACTER,
        BACKTICK_DELIMITER,
        NEW_LINE_CHARACTER,
        AMPERSAND_CHARACTER,
        BACKSPACE_CHARACTER,
        LESS_THAN_CHARACTER,
        GREATER_THAN_CHARACTER,
        FORWARD_SLASH_CHARACTER,
        CARRIAGE_RETURN_CHARACTER,
        EXCLAMATION_MARK_CHARACTER
      };
    }
  });

  // node_modules/necessary/lib/statusCodes.js
  var require_statusCodes = __commonJS({
    "node_modules/necessary/lib/statusCodes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ZERO_0_STATUS_CODE: function() {
          return ZERO_0_STATUS_CODE;
        },
        OK_200_STATUS_CODE: function() {
          return OK_200_STATUS_CODE;
        },
        FOUND_302_STATUS_CODE: function() {
          return FOUND_302_STATUS_CODE;
        },
        CREATED_201_STATUS_CODE: function() {
          return CREATED_201_STATUS_CODE;
        },
        SEE_OTHER_303_STATUS_CODE: function() {
          return SEE_OTHER_303_STATUS_CODE;
        },
        FORBIDDEN_403_STATUS_CODE: function() {
          return FORBIDDEN_403_STATUS_CODE;
        },
        NOT_FOUND_404_STATUS_CODE: function() {
          return NOT_FOUND_404_STATUS_CODE;
        },
        NO_CONTENT_204_STATUS_CODE: function() {
          return NO_CONTENT_204_STATUS_CODE;
        },
        BAD_GATEWAY_502_STATUS_CODE: function() {
          return BAD_GATEWAY_502_STATUS_CODE;
        },
        BAD_REQUEST_400_STATUS_CODE: function() {
          return BAD_REQUEST_400_STATUS_CODE;
        },
        UNAUTHORIZED_401_STATUS_CODE: function() {
          return UNAUTHORIZED_401_STATUS_CODE;
        },
        REQUEST_TIMEOUT_408_STATUS_CODE: function() {
          return REQUEST_TIMEOUT_408_STATUS_CODE;
        },
        TOO_MANY_REQUESTS_429_STATUS_CODE: function() {
          return TOO_MANY_REQUESTS_429_STATUS_CODE;
        },
        SERVICE_UNAVAILABLE_503_STATUS_CODE: function() {
          return SERVICE_UNAVAILABLE_503_STATUS_CODE;
        },
        INTERNAL_SERVER_ERROR_500_STATUS_CODE: function() {
          return INTERNAL_SERVER_ERROR_500_STATUS_CODE;
        },
        default: function() {
          return _default;
        }
      });
      var ZERO_0_STATUS_CODE = 0;
      var OK_200_STATUS_CODE = 200;
      var FOUND_302_STATUS_CODE = 302;
      var CREATED_201_STATUS_CODE = 201;
      var SEE_OTHER_303_STATUS_CODE = 303;
      var FORBIDDEN_403_STATUS_CODE = 403;
      var NOT_FOUND_404_STATUS_CODE = 404;
      var NO_CONTENT_204_STATUS_CODE = 204;
      var BAD_GATEWAY_502_STATUS_CODE = 502;
      var BAD_REQUEST_400_STATUS_CODE = 400;
      var UNAUTHORIZED_401_STATUS_CODE = 401;
      var REQUEST_TIMEOUT_408_STATUS_CODE = 408;
      var TOO_MANY_REQUESTS_429_STATUS_CODE = 429;
      var SERVICE_UNAVAILABLE_503_STATUS_CODE = 503;
      var INTERNAL_SERVER_ERROR_500_STATUS_CODE = 500;
      var _default = {
        ZERO_0_STATUS_CODE,
        OK_200_STATUS_CODE,
        FOUND_302_STATUS_CODE,
        CREATED_201_STATUS_CODE,
        SEE_OTHER_303_STATUS_CODE,
        FORBIDDEN_403_STATUS_CODE,
        NOT_FOUND_404_STATUS_CODE,
        NO_CONTENT_204_STATUS_CODE,
        BAD_GATEWAY_502_STATUS_CODE,
        BAD_REQUEST_400_STATUS_CODE,
        UNAUTHORIZED_401_STATUS_CODE,
        REQUEST_TIMEOUT_408_STATUS_CODE,
        TOO_MANY_REQUESTS_429_STATUS_CODE,
        SERVICE_UNAVAILABLE_503_STATUS_CODE,
        INTERNAL_SERVER_ERROR_500_STATUS_CODE
      };
    }
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS({
    "node_modules/necessary/lib/contentTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        TEXT_HTML_CONTENT_TYPE: function() {
          return TEXT_HTML_CONTENT_TYPE;
        },
        TEXT_PLAIN_CONTENT_TYPE: function() {
          return TEXT_PLAIN_CONTENT_TYPE;
        },
        APPLICATION_JSON_CONTENT_TYPE: function() {
          return APPLICATION_JSON_CONTENT_TYPE;
        },
        APPLICATION_OCTET_STREAM_CONTENT_TYPE: function() {
          return APPLICATION_OCTET_STREAM_CONTENT_TYPE;
        },
        APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE: function() {
          return APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
        },
        TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE: function() {
          return TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
        },
        TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE: function() {
          return TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
        },
        APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE: function() {
          return APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
        },
        APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE: function() {
          return APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
        },
        default: function() {
          return _default;
        }
      });
      var TEXT_HTML_CONTENT_TYPE = "text/html";
      var TEXT_PLAIN_CONTENT_TYPE = "text/plain";
      var APPLICATION_JSON_CONTENT_TYPE = "application/json";
      var APPLICATION_OCTET_STREAM_CONTENT_TYPE = "application/octet-stream";
      var APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = "application/x-www-form-urlencoded";
      var TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = "text/html; charset=utf-8";
      var TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = "text/plain; charset=utf-8";
      var APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = "application/json; charset=utf-8";
      var APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = "application/x-www-form-urlencoded; charset=utf-8";
      var _default = {
        TEXT_HTML_CONTENT_TYPE,
        TEXT_PLAIN_CONTENT_TYPE,
        APPLICATION_JSON_CONTENT_TYPE,
        APPLICATION_OCTET_STREAM_CONTENT_TYPE,
        APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE,
        TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE,
        TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE,
        APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE,
        APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE
      };
    }
  });

  // node_modules/necessary/lib/statusMessages.js
  var require_statusMessages = __commonJS({
    "node_modules/necessary/lib/statusMessages.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ZERO_0_STATUS_MESSAGE: function() {
          return ZERO_0_STATUS_MESSAGE;
        },
        OK_200_STATUS_MESSAGE: function() {
          return OK_200_STATUS_MESSAGE;
        },
        FOUND_302_STATUS_MESSAGE: function() {
          return FOUND_302_STATUS_MESSAGE;
        },
        CREATED_201_STATUS_MESSAGE: function() {
          return CREATED_201_STATUS_MESSAGE;
        },
        SEE_OTHER_303_STATUS_MESSAGE: function() {
          return SEE_OTHER_303_STATUS_MESSAGE;
        },
        FORBIDDEN_403_STATUS_MESSAGE: function() {
          return FORBIDDEN_403_STATUS_MESSAGE;
        },
        NOT_FOUND_404_STATUS_MESSAGE: function() {
          return NOT_FOUND_404_STATUS_MESSAGE;
        },
        NO_CONTENT_204_STATUS_MESSAGE: function() {
          return NO_CONTENT_204_STATUS_MESSAGE;
        },
        BAD_GATEWAY_502_STATUS_MESSAGE: function() {
          return BAD_GATEWAY_502_STATUS_MESSAGE;
        },
        BAD_REQUEST_400_STATUS_MESSAGE: function() {
          return BAD_REQUEST_400_STATUS_MESSAGE;
        },
        UNAUTHORIZED_401_STATUS_MESSAGE: function() {
          return UNAUTHORIZED_401_STATUS_MESSAGE;
        },
        REQUEST_TIMEOUT_408_STATUS_MESSAGE: function() {
          return REQUEST_TIMEOUT_408_STATUS_MESSAGE;
        },
        TOO_MANY_REQUESTS_429_STATUS_MESSAGE: function() {
          return TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
        },
        SERVICE_UNAVAILABLE_503_STATUS_MESSAGE: function() {
          return SERVICE_UNAVAILABLE_503_STATUS_MESSAGE;
        },
        INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE: function() {
          return INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
        },
        default: function() {
          return _default;
        }
      });
      var ZERO_0_STATUS_MESSAGE = "";
      var OK_200_STATUS_MESSAGE = "OK";
      var FOUND_302_STATUS_MESSAGE = "Found";
      var CREATED_201_STATUS_MESSAGE = "Created";
      var SEE_OTHER_303_STATUS_MESSAGE = "See other";
      var FORBIDDEN_403_STATUS_MESSAGE = "Forbidden";
      var NOT_FOUND_404_STATUS_MESSAGE = "Not found";
      var NO_CONTENT_204_STATUS_MESSAGE = "No content";
      var BAD_GATEWAY_502_STATUS_MESSAGE = "Bad gateway";
      var BAD_REQUEST_400_STATUS_MESSAGE = "Bad request";
      var UNAUTHORIZED_401_STATUS_MESSAGE = "Unauthorized";
      var REQUEST_TIMEOUT_408_STATUS_MESSAGE = "Request timeout";
      var TOO_MANY_REQUESTS_429_STATUS_MESSAGE = "Too many requests";
      var SERVICE_UNAVAILABLE_503_STATUS_MESSAGE = "Service unavailable";
      var INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = "Internal server error";
      var _default = {
        ZERO_0_STATUS_MESSAGE,
        OK_200_STATUS_MESSAGE,
        FOUND_302_STATUS_MESSAGE,
        CREATED_201_STATUS_MESSAGE,
        SEE_OTHER_303_STATUS_MESSAGE,
        FORBIDDEN_403_STATUS_MESSAGE,
        NOT_FOUND_404_STATUS_MESSAGE,
        NO_CONTENT_204_STATUS_MESSAGE,
        BAD_GATEWAY_502_STATUS_MESSAGE,
        BAD_REQUEST_400_STATUS_MESSAGE,
        UNAUTHORIZED_401_STATUS_MESSAGE,
        REQUEST_TIMEOUT_408_STATUS_MESSAGE,
        TOO_MANY_REQUESTS_429_STATUS_MESSAGE,
        SERVICE_UNAVAILABLE_503_STATUS_MESSAGE,
        INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE
      };
    }
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS({
    "node_modules/necessary/lib/utilities/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        first: function() {
          return first;
        },
        second: function() {
          return second;
        },
        third: function() {
          return third;
        },
        fourth: function() {
          return fourth;
        },
        fifth: function() {
          return fifth;
        },
        fifthLast: function() {
          return fifthLast;
        },
        fourthLast: function() {
          return fourthLast;
        },
        thirdLast: function() {
          return thirdLast;
        },
        secondLast: function() {
          return secondLast;
        },
        firstLast: function() {
          return firstLast;
        },
        last: function() {
          return last;
        },
        head: function() {
          return head;
        },
        tail: function() {
          return tail;
        },
        back: function() {
          return back;
        },
        front: function() {
          return front;
        },
        push: function() {
          return push;
        },
        unshift: function() {
          return unshift;
        },
        concat: function() {
          return concat;
        },
        clear: function() {
          return clear;
        },
        copy: function() {
          return copy;
        },
        merge: function() {
          return merge;
        },
        splice: function() {
          return splice;
        },
        replace: function() {
          return replace;
        },
        filter: function() {
          return filter;
        },
        find: function() {
          return find;
        },
        prune: function() {
          return prune;
        },
        patch: function() {
          return patch;
        },
        compress: function() {
          return compress;
        },
        combine: function() {
          return combine;
        },
        augment: function() {
          return augment;
        },
        separate: function() {
          return separate;
        },
        forwardsFind: function() {
          return forwardsFind;
        },
        backwardsFind: function() {
          return backwardsFind;
        },
        forwardsSome: function() {
          return forwardsSome;
        },
        backwardsSome: function() {
          return backwardsSome;
        },
        forwardsEvery: function() {
          return forwardsEvery;
        },
        backwardsEvery: function() {
          return backwardsEvery;
        },
        forwardsReduce: function() {
          return forwardsReduce;
        },
        backwardsReduce: function() {
          return backwardsReduce;
        },
        forwardsForEach: function() {
          return forwardsForEach;
        },
        backwardsForEach: function() {
          return backwardsForEach;
        },
        default: function() {
          return _default;
        }
      });
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function first(array) {
        return array[0];
      }
      function second(array) {
        return array[1];
      }
      function third(array) {
        return array[2];
      }
      function fourth(array) {
        return array[3];
      }
      function fifth(array) {
        return array[4];
      }
      function fifthLast(array) {
        return array[array.length - 5];
      }
      function fourthLast(array) {
        return array[array.length - 4];
      }
      function thirdLast(array) {
        return array[array.length - 3];
      }
      function secondLast(array) {
        return array[array.length - 2];
      }
      function firstLast(array) {
        return array[array.length - 1];
      }
      function last(array) {
        return array[array.length - 1];
      }
      function head(array) {
        return array.slice(0, 1);
      }
      function tail(array) {
        return array.slice(1);
      }
      function back(array) {
        return array.slice(array.length - 1);
      }
      function front(array) {
        return array.slice(0, Math.max(1, array.length - 1));
      }
      function push(array1, array2) {
        Array.prototype.push.apply(array1, array2);
      }
      function unshift(array1, array2) {
        Array.prototype.unshift.apply(array1, array2);
      }
      function concat(array1, elementOrArray2) {
        var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
          elementOrArray2
        ];
        push(array1, array2);
      }
      function clear(array) {
        var start = 0;
        return array.splice(start);
      }
      function copy(array1, array2) {
        var start = 0, deleteCount = array2.length;
        splice(array1, start, deleteCount, array2);
      }
      function merge(array1, array2) {
        Array.prototype.push.apply(array1, array2);
      }
      function splice(array1, start) {
        var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, array2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
        var args = [
          start,
          deleteCount
        ].concat(_to_consumable_array(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
        return deletedItemsArray;
      }
      function replace(array, element, callback) {
        var start;
        var found = array.some(function(element2, index) {
          var passed = callback(element2, index);
          if (passed) {
            start = index;
            return true;
          }
        });
        if (found) {
          var deleteCount = 1;
          array.splice(start, deleteCount, element);
        }
        return found;
      }
      function filter(array, callback) {
        var filteredElements = [];
        backwardsForEach(array, function(element, index) {
          var passed = callback(element, index);
          if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            filteredElements.unshift(firstDeletedElement);
          }
        });
        return filteredElements;
      }
      function find(array, callback) {
        var elements = [];
        forwardsForEach(array, function(element, index) {
          var passed = callback(element, index);
          if (passed) {
            elements.push(element);
          }
        });
        return elements;
      }
      function prune(array, callback) {
        var prunedElement = void 0;
        array.some(function(element, index) {
          var passed = callback(element, index);
          if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            prunedElement = firstDeletedElement;
            return true;
          }
        });
        return prunedElement;
      }
      function patch(array, element, callback) {
        var found = array.some(function(element2, index) {
          var passed = callback(element2, index);
          if (passed) {
            return true;
          }
        });
        if (found) {
          array.push(element);
        }
        return found;
      }
      function compress(array, callback) {
        var index1 = 0, length = array.length;
        while (index1 < length) {
          var element1 = array[index1];
          for (var index2 = length - 1; index2 > index1; index2--) {
            var element2 = array[index2], passed = callback(element2, element1);
            if (passed) {
              var start = index2, deleteCount = 1;
              array.splice(start, deleteCount);
            }
          }
          index1++;
          length = array.length;
        }
      }
      function combine(array1, array2, callback) {
        var array = _to_consumable_array(array1).concat(_to_consumable_array(array2));
        compress(array, callback);
        return array;
      }
      function augment(array1, array2, callback) {
        array2.forEach(function(element, index) {
          var passed = callback(element, index);
          if (passed) {
            array1.push(element);
          }
        });
      }
      function separate(array, array1, array2, callback) {
        array.forEach(function(element, index) {
          var passed = callback(element, index);
          passed ? array1.push(element) : array2.push(element);
        });
      }
      function forwardsFind(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], passed = callback(element, index);
          if (passed) {
            return element;
          }
        }
        return false;
      }
      function backwardsFind(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], passed = callback(element, index);
          if (passed) {
            return element;
          }
        }
        return false;
      }
      function forwardsSome(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], passed = callback(element, index);
          if (passed) {
            return true;
          }
        }
        return false;
      }
      function backwardsSome(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], passed = callback(element, index);
          if (passed) {
            return true;
          }
        }
        return false;
      }
      function forwardsEvery(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], passed = callback(element, index);
          if (!passed) {
            return false;
          }
        }
        return true;
      }
      function backwardsEvery(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], passed = callback(element, index);
          if (!passed) {
            return false;
          }
        }
        return true;
      }
      function forwardsReduce(array, callback, initialValue) {
        var value = initialValue;
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index];
          value = callback(value, element, index);
        }
        return value;
      }
      function backwardsReduce(array, callback, initialValue) {
        var value = initialValue;
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index];
          value = callback(value, element, index);
        }
        return value;
      }
      function forwardsForEach(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index];
          callback(element, index);
        }
      }
      function backwardsForEach(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index];
          callback(element, index);
        }
      }
      var _default = {
        first,
        second,
        third,
        fourth,
        fifth,
        fifthLast,
        fourthLast,
        thirdLast,
        secondLast,
        firstLast,
        last,
        head,
        tail,
        back,
        front,
        push,
        unshift,
        concat,
        clear,
        copy,
        merge,
        splice,
        replace,
        filter,
        find,
        prune,
        patch,
        compress,
        combine,
        augment,
        separate,
        forwardsFind,
        backwardsFind,
        forwardsSome,
        backwardsSome,
        forwardsEvery,
        backwardsEvery,
        forwardsReduce,
        backwardsReduce,
        forwardsForEach,
        backwardsForEach
      };
    }
  });

  // node_modules/necessary/lib/constants.js
  var require_constants2 = __commonJS({
    "node_modules/necessary/lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        ZERO: function() {
          return ZERO;
        },
        DATA: function() {
          return DATA;
        },
        ERROR: function() {
          return ERROR;
        },
        STRING: function() {
          return STRING;
        },
        NUMBER: function() {
          return NUMBER;
        },
        BOOLEAN: function() {
          return BOOLEAN;
        },
        DEFAULT: function() {
          return DEFAULT;
        },
        ENVIRONMENT: function() {
          return ENVIRONMENT;
        },
        EMPTY_STRING: function() {
          return EMPTY_STRING;
        },
        PACKAGE_JSON: function() {
          return PACKAGE_JSON;
        }
      });
      var ZERO = "0";
      var DATA = "data";
      var ERROR = "error";
      var STRING = "string";
      var NUMBER = "number";
      var BOOLEAN = "boolean";
      var DEFAULT = "default";
      var ENVIRONMENT = "ENVIRONMENT";
      var EMPTY_STRING = "";
      var PACKAGE_JSON = "package.json";
    }
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS({
    "node_modules/necessary/lib/utilities/http.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        overwrite: function() {
          return overwrite;
        },
        underwrite: function() {
          return underwrite;
        },
        portFromHost: function() {
          return portFromHost;
        },
        secureFromHost: function() {
          return secureFromHost;
        },
        hostnameFromHost: function() {
          return hostnameFromHost;
        },
        queryStringFromQuery: function() {
          return queryStringFromQuery;
        },
        urlFromHostURIAndQuery: function() {
          return urlFromHostURIAndQuery;
        },
        default: function() {
          return _default;
        }
      });
      var _array = require_array();
      var _constants = require_constants2();
      var _characters = require_characters();
      function overwrite(headers, name, value) {
        var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName2) {
          var existingLowerCaseName = existingName2.toLowerCase();
          if (existingLowerCaseName === lowerCaseName) {
            return true;
          }
        }) || null;
        if (existingName !== null) {
          headers[existingName] = value;
        }
      }
      function underwrite(headers, name, value) {
        var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName2) {
          var existingLowerCaseName = existingName2.toLowerCase();
          if (existingLowerCaseName === lowerCaseName) {
            return true;
          }
        }) || null;
        if (existingName === null) {
          headers[name] = value;
        }
      }
      function portFromHost(host) {
        var port;
        var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array.second)(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
        if (index === -1) {
          var secure = secureFromHost(host);
          port = secure ? 443 : 80;
        } else {
          var start = index + 1, portString = secondMatch.substring(start);
          port = Number(portString);
        }
        return port;
      }
      function secureFromHost(host) {
        var secure = /^https:\/\//.test(host);
        return secure;
      }
      function hostnameFromHost(host) {
        var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array.second)(matches), hostname = secondMatch;
        return hostname;
      }
      function queryStringFromQuery(query) {
        var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString2, name, index) {
          var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
          queryString2 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
          return queryString2;
        }, _constants.EMPTY_STRING);
        return queryString;
      }
      function urlFromHostURIAndQuery(host, uri, query) {
        var queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
        return url;
      }
      var _default = {
        overwrite,
        underwrite,
        portFromHost,
        secureFromHost,
        hostnameFromHost,
        queryStringFromQuery,
        urlFromHostURIAndQuery
      };
    }
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS({
    "node_modules/necessary/lib/utilities/ajax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        get: function() {
          return get;
        },
        post: function() {
          return post;
        },
        request: function() {
          return request;
        },
        default: function() {
          return _default;
        }
      });
      var _methods = require_methods();
      var _contentTypes = require_contentTypes();
      var _headers = require_headers();
      var _http = require_http();
      function get(host, uri, query, headers, callback) {
        if (callback === void 0) {
          callback = headers;
          headers = {};
        }
        var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
        underwriteAcceptHeader(headers, accept);
        request(host, uri, query, method, headers, content, callback);
      }
      function post(host, uri, query, headers, content, callback) {
        if (callback === void 0) {
          callback = content;
          content = headers;
          headers = {};
        }
        var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
        underwriteAcceptHeader(headers, accept);
        underwriteContentTypeHeader(headers, contentType);
        request(host, uri, query, method, headers, content, callback);
      }
      function request(host, uri, query, method, headers, content, callback) {
        var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
        if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
          var json = content, jsonString = JSON.stringify(json);
          content = jsonString;
        }
        xmlHttpRequest.onreadystatechange = function() {
          var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, response = xmlHttpRequest.response, statusCode = status;
          if (readyState == 4) {
            var _$content = response;
            if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
              try {
                var jsonString2 = _$content, json2 = JSON.parse(jsonString2);
                _$content = json2;
              } catch (error) {
                _$content = null;
              }
            }
            callback(_$content, statusCode);
          }
        };
        xmlHttpRequest.open(method, url);
        if (accept !== null) {
          xmlHttpRequest.setRequestHeader(_headers.ACCEPT_HEADER, accept);
        }
        if (contentType !== null) {
          xmlHttpRequest.setRequestHeader(_headers.CONTENT_TYPE_HEADER, contentType);
        }
        content !== null ? xmlHttpRequest.send(content) : xmlHttpRequest.send();
      }
      var _default = {
        get,
        post,
        request
      };
      function underwriteAcceptHeader(headers, accept) {
        var name = _headers.ACCEPT_HEADER, value = accept;
        (0, _http.underwrite)(headers, name, value);
      }
      function underwriteContentTypeHeader(headers, contentTYpe) {
        var name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe;
        (0, _http.underwrite)(headers, name, value);
      }
    }
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS({
    "node_modules/necessary/lib/utilities/path.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        isPathName: function() {
          return isPathName;
        },
        isPathTopmostName: function() {
          return isPathTopmostName;
        },
        isPathRelativePath: function() {
          return isPathRelativePath;
        },
        isPathAbsolutePath: function() {
          return isPathAbsolutePath;
        },
        isTopmostNameInAbsolutePath: function() {
          return isTopmostNameInAbsolutePath;
        },
        combinePaths: function() {
          return combinePaths;
        },
        concatenatePaths: function() {
          return concatenatePaths;
        },
        bottommostNameFromPath: function() {
          return bottommostNameFromPath;
        },
        topmostDirectoryPathFromPath: function() {
          return topmostDirectoryPathFromPath;
        },
        topmostDirectoryNameFromPath: function() {
          return topmostDirectoryNameFromPath;
        },
        pathWithoutBottommostNameFromPath: function() {
          return pathWithoutBottommostNameFromPath;
        },
        pathWithoutTopmostDirectoryNameFromPath: function() {
          return pathWithoutTopmostDirectoryNameFromPath;
        },
        default: function() {
          return _default;
        }
      });
      var _constants = require_constants2();
      var _array = require_array();
      function isPathName(path) {
        path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
        var pathName = /\//.test(path) === false;
        return pathName;
      }
      function isPathTopmostName(path) {
        var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
        return pathTopmostName;
      }
      function isPathRelativePath(path) {
        var pathRelativePath = !/^\//.test(path);
        return pathRelativePath;
      }
      function isPathAbsolutePath(path) {
        var pathAbsolutePath = /^\//.test(path);
        return pathAbsolutePath;
      }
      function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
        var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
        return topmostNameInAbsolutePath;
      }
      function combinePaths(path, relativePath) {
        var combinedPath = null;
        var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
        var lastPathName, firstRelativePathName = (0, _array.first)(relativePathNames);
        if (firstRelativePathName === ".") {
          relativePathNames.shift();
        }
        firstRelativePathName = (0, _array.first)(relativePathNames);
        lastPathName = (0, _array.last)(pathNames);
        while (firstRelativePathName === ".." && lastPathName !== void 0) {
          relativePathNames.shift();
          pathNames.pop();
          firstRelativePathName = (0, _array.first)(relativePathNames);
          lastPathName = (0, _array.last)(pathNames);
        }
        if (lastPathName !== void 0) {
          var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
          combinedPath = combinedPathNames.join("/");
        }
        return combinedPath;
      }
      function concatenatePaths(path, relativePath) {
        path = path.replace(/\/$/, _constants.EMPTY_STRING);
        var concatenatedPath = "".concat(path, "/").concat(relativePath);
        return concatenatedPath;
      }
      function bottommostNameFromPath(path) {
        var bottommostName = null;
        var matches = path.match(/^.*\/([^\/]+\/?)$/);
        if (matches !== null) {
          var secondMatch = (0, _array.second)(matches);
          bottommostName = secondMatch;
        }
        return bottommostName;
      }
      function topmostDirectoryPathFromPath(path) {
        var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array.second)(matches), topmostDirectoryPath = secondMatch;
        return topmostDirectoryPath;
      }
      function topmostDirectoryNameFromPath(path) {
        var topmostDirectoryName = null;
        var matches = path.match(/^([^\/]+)\/.+$/);
        if (matches !== null) {
          var secondMatch = (0, _array.second)(matches);
          topmostDirectoryName = secondMatch;
        }
        return topmostDirectoryName;
      }
      function pathWithoutBottommostNameFromPath(path) {
        var pathWithoutBottommostName = null;
        var matches = path.match(/^(.*)\/[^\/]+\/?$/);
        if (matches !== null) {
          var secondMatch = (0, _array.second)(matches);
          pathWithoutBottommostName = secondMatch;
        }
        return pathWithoutBottommostName;
      }
      function pathWithoutTopmostDirectoryNameFromPath(path) {
        var pathWithoutTopmostDirectoryName = null;
        var matches = path.match(/^[^\/]+\/(.+)$/);
        if (matches !== null) {
          var secondMatch = (0, _array.second)(matches);
          pathWithoutTopmostDirectoryName = secondMatch;
        }
        return pathWithoutTopmostDirectoryName;
      }
      var _default = {
        isPathName,
        isPathTopmostName,
        isPathRelativePath,
        isPathAbsolutePath,
        isTopmostNameInAbsolutePath,
        combinePaths,
        concatenatePaths,
        bottommostNameFromPath,
        topmostDirectoryPathFromPath,
        topmostDirectoryNameFromPath,
        pathWithoutBottommostNameFromPath,
        pathWithoutTopmostDirectoryNameFromPath
      };
    }
  });

  // node_modules/necessary/lib/utilities/version.js
  var require_version = __commonJS({
    "node_modules/necessary/lib/utilities/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        migrate: function() {
          return migrate;
        },
        default: function() {
          return _default;
        }
      });
      function migrate(json, migrationMap, latestVersion) {
        var version = json.version;
        while (version !== latestVersion) {
          var migrateFunction = migrationMap[version];
          json = migrateFunction(json);
          version = json.version;
        }
        return json;
      }
      var _default = {
        migrate
      };
    }
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS({
    "node_modules/necessary/lib/utilities/asynchronous.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        whilst: function() {
          return whilst;
        },
        forEach: function() {
          return forEach;
        },
        sequence: function() {
          return sequence;
        },
        eventually: function() {
          return eventually;
        },
        repeatedly: function() {
          return repeatedly;
        },
        forwardsForEach: function() {
          return forwardsForEach;
        },
        backwardsForEach: function() {
          return backwardsForEach;
        },
        default: function() {
          return _default;
        }
      });
      function whilst(operation, done, context) {
        var count = -1;
        function next() {
          count++;
          var index = count, terminate = operation(next, done, context, index);
          if (terminate) {
            done();
          }
        }
        next();
      }
      function forEach(array, operation, done, context) {
        var length = array.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      function sequence(operations, done, context) {
        var length = operations.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, operation = operations[index];
            operation(next, done, context, index);
          }
        }
        next();
      }
      function eventually(operations, done, context) {
        var next = function next2() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          }
        };
        var length = operations.length;
        var count = 0;
        operations.forEach(function(operation, index) {
          operation(next, done, context, index);
        });
      }
      function repeatedly(operation, length, done, context) {
        var next = function next2() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          }
        };
        var count = 0;
        for (var index = 0; index < length; index++) {
          operation(next, done, context, index);
        }
      }
      function forwardsForEach(array, operation, done, context) {
        var length = array.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      function backwardsForEach(array, operation, done, context) {
        var length = array.length;
        var count = length;
        function next() {
          count--;
          var terminate = count === -1;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      var _default = {
        whilst,
        forEach,
        sequence,
        eventually,
        repeatedly,
        forwardsForEach,
        backwardsForEach
      };
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/necessary/lib/browser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        levels: function() {
          return _levels.default;
        },
        methods: function() {
          return _methods.default;
        },
        headers: function() {
          return _headers.default;
        },
        keyCodes: function() {
          return _keyCodes.default;
        },
        encodings: function() {
          return _encodings.default;
        },
        characters: function() {
          return _characters.default;
        },
        statusCodes: function() {
          return _statusCodes.default;
        },
        contentTypes: function() {
          return _contentTypes.default;
        },
        statusMessages: function() {
          return _statusMessages.default;
        },
        ajaxUtilities: function() {
          return _ajax.default;
        },
        pathUtilities: function() {
          return _path.default;
        },
        httpUtilities: function() {
          return _http.default;
        },
        arrayUtilities: function() {
          return _array.default;
        },
        versionUtilities: function() {
          return _version.default;
        },
        asynchronousUtilities: function() {
          return _asynchronous.default;
        }
      });
      var _levels = /* @__PURE__ */ _interop_require_default(require_levels());
      var _methods = /* @__PURE__ */ _interop_require_default(require_methods());
      var _headers = /* @__PURE__ */ _interop_require_default(require_headers());
      var _keyCodes = /* @__PURE__ */ _interop_require_default(require_keyCodes());
      var _encodings = /* @__PURE__ */ _interop_require_default(require_encodings());
      var _characters = /* @__PURE__ */ _interop_require_default(require_characters());
      var _statusCodes = /* @__PURE__ */ _interop_require_default(require_statusCodes());
      var _contentTypes = /* @__PURE__ */ _interop_require_default(require_contentTypes());
      var _statusMessages = /* @__PURE__ */ _interop_require_default(require_statusMessages());
      var _ajax = /* @__PURE__ */ _interop_require_default(require_ajax());
      var _path = /* @__PURE__ */ _interop_require_default(require_path());
      var _http = /* @__PURE__ */ _interop_require_default(require_http());
      var _array = /* @__PURE__ */ _interop_require_default(require_array());
      var _version = /* @__PURE__ */ _interop_require_default(require_version());
      var _asynchronous = /* @__PURE__ */ _interop_require_default(require_asynchronous());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }
  });

  // lib/utilities/array.js
  var require_array2 = __commonJS({
    "lib/utilities/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        first: function() {
          return first;
        },
        second: function() {
          return second;
        },
        third: function() {
          return third;
        },
        fourth: function() {
          return fourth;
        },
        push: function() {
          return push;
        },
        merge: function() {
          return merge;
        },
        separate: function() {
          return separate;
        },
        add: function() {
          return add;
        },
        permute: function() {
          return permute;
        },
        flatten: function() {
          return flatten;
        },
        guarantee: function() {
          return guarantee;
        }
      });
      var _necessary = require_browser();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      var first = _necessary.arrayUtilities.first;
      var second = _necessary.arrayUtilities.second;
      var third = _necessary.arrayUtilities.third;
      var fourth = _necessary.arrayUtilities.fourth;
      var push = _necessary.arrayUtilities.push;
      var merge = _necessary.arrayUtilities.merge;
      var separate = _necessary.arrayUtilities.separate;
      function add(array, element) {
        array.push(element);
      }
      function permute(array, places) {
        var length = array.length, cut = length - places, leadingElements = array.slice(0, cut), trailingElements = array.slice(cut);
        array = _to_consumable_array(trailingElements).concat(_to_consumable_array(leadingElements));
        return array;
      }
      function flatten(arrays) {
        return arrays.reduce(function(elements, array) {
          return elements.concat(array);
        }, []);
      }
      function guarantee(arrayOrElement) {
        arrayOrElement = arrayOrElement || [];
        return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
          arrayOrElement
        ];
      }
    }
  });

  // lib/element.js
  var require_element = __commonJS({
    "lib/element.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Element;
        }
      });
      var _constants = require_constants();
      var _array = require_array2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var Element = /* @__PURE__ */ function() {
        function Element2() {
          _class_call_check(this, Element2);
        }
        _create_class(Element2, [
          {
            key: "getProperties",
            value: function getProperties() {
              return this.properties;
            }
          },
          {
            key: "getChildElements",
            value: function getChildElements() {
              return this.childElements;
            }
          },
          {
            key: "setProperties",
            value: function setProperties(properties) {
              this.properties = properties;
            }
          },
          {
            key: "setChildElements",
            value: function setChildElements(childElements) {
              this.childElements = childElements;
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var element = _construct(Class, _to_consumable_array(remainingArguments)), childElements = _type_of(element.childElements) === _constants.FUNCTION ? (0, _array.guarantee)(element.childElements(properties)) : properties.childElements || [];
              element.setProperties(properties);
              element.setChildElements(childElements);
              return element;
            }
          }
        ]);
        return Element2;
      }();
    }
  });

  // lib/primitive/edge.js
  var require_edge = __commonJS({
    "lib/primitive/edge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Edge;
        }
      });
      var _vector = require_vector();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Edge = /* @__PURE__ */ function() {
        function Edge2(position, extent) {
          _class_call_check(this, Edge2);
          this.position = position;
          this.extent = extent;
        }
        _create_class(Edge2, [
          {
            key: "getPosition",
            value: function getPosition() {
              return this.position;
            }
          },
          {
            key: "getExtent",
            value: function getExtent() {
              return this.extent;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var position = this.position.slice(), extent = this.extent.slice(), edge = new Edge2(position, extent);
              return edge;
            }
          }
        ], [
          {
            key: "fromStartVertexAndEndVertex",
            value: function fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
              if (endVertex === void 0) {
                endVertex = startVertex;
                startVertex = Class;
                Class = Edge2;
              }
              var startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = (0, _vector.subtract3)(endPosition, startPosition), edge = new Class(position, extent);
              return edge;
            }
          }
        ]);
        return Edge2;
      }();
    }
  });

  // lib/utilities/midPoint.js
  var require_midPoint = __commonJS({
    "lib/utilities/midPoint.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateMidPointPosition: function() {
          return calculateMidPointPosition;
        },
        projectMidPointPositionOntoXYPlane: function() {
          return projectMidPointPositionOntoXYPlane;
        },
        isMidPointPositionToOneSideOfMaskingEdges: function() {
          return isMidPointPositionToOneSideOfMaskingEdges;
        }
      });
      var _vector = require_vector();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function calculateMidPointPosition(vertices) {
        var midPointPosition = vertices.reduce(function(midPointPosition2, vertex) {
          var vertexPosition = vertex.getPosition(), scaledVertexPosition = (0, _vector.scale3)(vertexPosition, 1 / 3);
          midPointPosition2 = (0, _vector.add3)(midPointPosition2, scaledVertexPosition);
          return midPointPosition2;
        }, [
          0,
          0,
          0
        ]);
        return midPointPosition;
      }
      function projectMidPointPositionOntoXYPlane(midPointPosition) {
        midPointPosition = _to_consumable_array(midPointPosition.slice(0, 2)).concat([
          0
        ]);
        return midPointPosition;
      }
      function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges;
        return midPointPositionToOneSideOfMaskingEdges;
      }
      function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheLeftOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheLeftOfMaskingEdges2, maskingEdge) {
          if (midPointPositionToTheLeftOfMaskingEdges2) {
            var midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);
            midPointPositionToTheLeftOfMaskingEdges2 = midPointPositionToTheLeftOfMaskingEdge;
          }
          return midPointPositionToTheLeftOfMaskingEdges2;
        }, true);
        return midPointPositionToTheLeftOfMaskingEdges;
      }
      function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheRightOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheRightOfMaskingEdges2, maskingEdge) {
          if (midPointPositionToTheRightOfMaskingEdges2) {
            var midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);
            midPointPositionToTheRightOfMaskingEdges2 = midPointPositionToTheRightOfMaskingEdge;
          }
          return midPointPositionToTheRightOfMaskingEdges2;
        }, true);
        return midPointPositionToTheRightOfMaskingEdges;
      }
    }
  });

  // lib/primitive/edge/masking.js
  var require_masking = __commonJS({
    "lib/primitive/edge/masking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return MaskingEdge;
        }
      });
      var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
      var _array = require_array2();
      var _vector = require_vector();
      var _midPoint = require_midPoint();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var MaskingEdge = /* @__PURE__ */ function(Edge) {
        _inherits(MaskingEdge2, Edge);
        var _super = _create_super(MaskingEdge2);
        function MaskingEdge2() {
          _class_call_check(this, MaskingEdge2);
          return _super.apply(this, arguments);
        }
        _create_class(MaskingEdge2, [
          {
            key: "isMidPointPositionToTheLeft",
            value: function isMidPointPositionToTheLeft(midPointPosition) {
              midPointPosition = (0, _midPoint.projectMidPointPositionOntoXYPlane)(midPointPosition);
              var extent = this.getExtent(), position = this.getPosition(), midPointRelativePosition = (0, _vector.subtract3)(midPointPosition, position), crossProductComponents = (0, _vector.cross3)(extent, midPointRelativePosition), thirdCrossProductComponent = (0, _array.third)(crossProductComponents), midPointPositionToTheLeft = thirdCrossProductComponent > 0;
              return midPointPositionToTheLeft;
            }
          },
          {
            key: "isMidPointPositionToTheRight",
            value: function isMidPointPositionToTheRight(midPointPosition) {
              var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition), midPointPositionToTheRight = !midPointPositionToTheLeft;
              return midPointPositionToTheRight;
            }
          }
        ], [
          {
            key: "fromStartVertexAndEndVertex",
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
              return _edge.default.fromStartVertexAndEndVertex(MaskingEdge2, startVertex, endVertex);
            }
          }
        ]);
        return MaskingEdge2;
      }(_edge.default);
    }
  });

  // lib/utilities/approximate.js
  var require_approximate = __commonJS({
    "lib/utilities/approximate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        isApproximatelyEqualToOne: function() {
          return isApproximatelyEqualToOne;
        },
        isApproximatelyEqualToZero: function() {
          return isApproximatelyEqualToZero;
        }
      });
      var _defaults = require_defaults();
      function isApproximatelyEqualToOne(value) {
        var marginOfError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        return isApproximatelyEqualTo(value, 1, marginOfError);
      }
      function isApproximatelyEqualToZero(value) {
        var marginOfError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        return isApproximatelyEqualTo(value, 0, marginOfError);
      }
      function isApproximatelyEqualTo(valueA, valueB) {
        var marginOfError = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        var difference = valueA - valueB, absoluteDifference = Math.abs(difference), approximatelyEqual = absoluteDifference < marginOfError;
        return approximatelyEqual;
      }
    }
  });

  // lib/utilities/angle.js
  var require_angle = __commonJS({
    "lib/utilities/angle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateHalfAngleSine: function() {
          return calculateHalfAngleSine;
        },
        calculateHalfAngleCosine: function() {
          return calculateHalfAngleCosine;
        }
      });
      function calculateHalfAngleSine(angleCosine) {
        return Math.sqrt((1 - angleCosine) / 2);
      }
      function calculateHalfAngleCosine(angleCosine) {
        return Math.sqrt((1 + angleCosine) / 2);
      }
    }
  });

  // lib/utilities/quaternion.js
  var require_quaternion = __commonJS({
    "lib/utilities/quaternion.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        rotateImaginaryQuaternion: function() {
          return rotateImaginaryQuaternion;
        },
        calculateInverseRotationQuaternion: function() {
          return calculateInverseRotationQuaternion;
        },
        calculateForwardsRotationQuaternion: function() {
          return calculateForwardsRotationQuaternion;
        },
        calculateBackwardsRotationQuaternion: function() {
          return calculateBackwardsRotationQuaternion;
        },
        calculateArbitraryRotationQuaternion: function() {
          return calculateArbitraryRotationQuaternion;
        },
        calculateRotationAboutZAxisQuaternion: function() {
          return calculateRotationAboutZAxisQuaternion;
        }
      });
      var _vector = require_vector();
      var _approximate = require_approximate();
      var _array = require_array2();
      var _angle = require_angle();
      function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
        return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);
      }
      function calculateInverseRotationQuaternion(rotationQuaternion) {
        var rotationQuaternionComponents = rotationQuaternion, firstRotationQuaternionComponent = (0, _array.first)(rotationQuaternionComponents), secondRotationQuaternionComponent = (0, _array.second)(rotationQuaternionComponents), thirdRotationQuaternionComponent = (0, _array.third)(rotationQuaternionComponents), fourthRotationQuaternionComponent = (0, _array.fourth)(rotationQuaternionComponents), inverseRotationQuaternion = [
          firstRotationQuaternionComponent,
          -secondRotationQuaternionComponent,
          -thirdRotationQuaternionComponent,
          -fourthRotationQuaternionComponent
        ];
        return inverseRotationQuaternion;
      }
      function calculateForwardsRotationQuaternion(rotationQuaternion) {
        var forwardsRotationQuaternion = rotationQuaternion;
        return forwardsRotationQuaternion;
      }
      function calculateBackwardsRotationQuaternion(rotationQuaternion) {
        var inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = inverseRotationQuaternion;
        return backwardsRotationQuaternion;
      }
      function calculateArbitraryRotationQuaternion(normal) {
        var extent = normal.getExtent(), unitNormal = extent, zAxis = [
          0,
          0,
          1
        ], dotProductOfUnitNormalAndZAxis = (0, _vector.dot3)(unitNormal, zAxis), crossProductOfUnitNormalAndZAxis = (0, _vector.cross3)(unitNormal, zAxis), angleOfRotationCosine = dotProductOfUnitNormalAndZAxis, angleOfRotationCosineAbsoluteValue = Math.abs(angleOfRotationCosine), angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne = (0, _approximate.isApproximatelyEqualToOne)(angleOfRotationCosineAbsoluteValue), axisOfRotation = angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne ? [
          1,
          0,
          0
        ] : crossProductOfUnitNormalAndZAxis, unitAxisOfRotation = (0, _vector.normalise3)(axisOfRotation), halfAngleOfRotationCosine = (0, _angle.calculateHalfAngleCosine)(angleOfRotationCosine), halfAngleOfRotationSine = (0, _angle.calculateHalfAngleSine)(angleOfRotationCosine), unitAxisOfRotationComponents = unitAxisOfRotation, firstAxisOfRotationComponent = (0, _array.first)(unitAxisOfRotationComponents), secondAxisOfRotationComponent = (0, _array.second)(unitAxisOfRotationComponents), thirdAxisOfRotationComponent = (0, _array.third)(unitAxisOfRotationComponents), arbitraryRotationQuaternion = [
          halfAngleOfRotationCosine,
          firstAxisOfRotationComponent * halfAngleOfRotationSine,
          secondAxisOfRotationComponent * halfAngleOfRotationSine,
          thirdAxisOfRotationComponent * halfAngleOfRotationSine
        ];
        return arbitraryRotationQuaternion;
      }
      function calculateRotationAboutZAxisQuaternion(maskingEdge) {
        var maskingEdgeExtent = maskingEdge.getExtent(), unitMaskingEdgeExtent = (0, _vector.normalise3)(maskingEdgeExtent), unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent, firstUnitMaskingEdgeExtentComponent = (0, _array.first)(unitMaskingEdgeExtentComponents), secondUnitMaskingEdgeExtentComponent = (0, _array.second)(unitMaskingEdgeExtentComponents), angleOfRotationSine = firstUnitMaskingEdgeExtentComponent, angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent, halfAngleOfRotationCosine = (0, _angle.calculateHalfAngleCosine)(angleOfRotationCosine), halfAngleOfRotationSine = angleOfRotationSine > 0 ? +(0, _angle.calculateHalfAngleSine)(angleOfRotationCosine) : -(0, _angle.calculateHalfAngleSine)(angleOfRotationCosine), rotationAboutZAxisQuaternion = [
          halfAngleOfRotationCosine,
          0,
          0,
          halfAngleOfRotationSine
        ];
        return rotationAboutZAxisQuaternion;
      }
      function hamiltonProduct(quaternionA, quaternionB) {
        var a1 = quaternionA[0], b1 = quaternionA[1], c1 = quaternionA[2], d1 = quaternionA[3], a2 = quaternionB[0], b2 = quaternionB[1], c2 = quaternionB[2], d2 = quaternionB[3], a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2, b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2, c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2, d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2, quaternion = [
          a,
          b,
          c,
          d
        ];
        return quaternion;
      }
    }
  });

  // lib/utilities/rotation.js
  var require_rotation = __commonJS({
    "lib/utilities/rotation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "rotatePosition", {
        enumerable: true,
        get: function() {
          return rotatePosition;
        }
      });
      var _quaternion = require_quaternion();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function rotatePosition(position, rotationQuaternion) {
        var imaginaryQuaternion = imaginaryQuaternionFromPosition(position), inverseRotationQuaternion = (0, _quaternion.calculateInverseRotationQuaternion)(rotationQuaternion), rotatedImaginaryQuaternion = (0, _quaternion.rotateImaginaryQuaternion)(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
        position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);
        return position;
      }
      function imaginaryQuaternionFromPosition(position) {
        return [
          0
        ].concat(_to_consumable_array(position));
      }
      function positionFromImaginaryQuaternion(imaginaryQuaternion) {
        return imaginaryQuaternion.slice(1);
      }
    }
  });

  // lib/utilities/intersection.js
  var require_intersection = __commonJS({
    "lib/utilities/intersection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        calculateIntersection: function() {
          return calculateIntersection;
        },
        calculateNonNullIntersections: function() {
          return calculateNonNullIntersections;
        },
        calculateNullIntersectionIndex: function() {
          return calculateNullIntersectionIndex;
        },
        calculateNonNullIntersectionIndex: function() {
          return calculateNonNullIntersectionIndex;
        },
        calculateIntermediateVertexPosition: function() {
          return calculateIntermediateVertexPosition;
        }
      });
      var _array = require_array2();
      var _vector = require_vector();
      var _approximate = require_approximate();
      function calculateIntersection(edge, firstPositionComponent) {
        var intersection = null;
        var edgeNonParallel = isEdgeNonParallel(edge);
        if (edgeNonParallel) {
          var edgeIntersection = calculateEdgeIntersection(edge, firstPositionComponent), edgeIntersectionNonTrivial = edgeIntersection > 0 && edgeIntersection < 1;
          if (edgeIntersectionNonTrivial) {
            intersection = edgeIntersection;
          }
        }
        return intersection;
      }
      function calculateNonNullIntersections(intersections) {
        var nonNullIntersections = intersections.reduce(function(nonNullIntersections2, intersection) {
          if (intersection !== null) {
            var nonNullIntersection = intersection;
            nonNullIntersections2.push(nonNullIntersection);
          }
          return nonNullIntersections2;
        }, []);
        return nonNullIntersections;
      }
      function calculateNullIntersectionIndex(intersections) {
        var nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex2, intersection, index) {
          if (nullIntersectionIndex2 === null) {
            if (intersection === null) {
              nullIntersectionIndex2 = index;
            }
          }
          return nullIntersectionIndex2;
        }, null);
        return nullIntersectionIndex;
      }
      function calculateNonNullIntersectionIndex(intersections) {
        var nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex2, intersection, index) {
          if (nullIntersectionIndex2 === null) {
            if (intersection !== null) {
              nullIntersectionIndex2 = index;
            }
          }
          return nullIntersectionIndex2;
        }, null);
        return nullIntersectionIndex;
      }
      function calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection) {
        var extent = (0, _vector.subtract3)(endVertexPosition, startVertexPosition), offset = (0, _vector.scale3)(extent, intersection), intermediateVertexPosition = (0, _vector.add3)(startVertexPosition, offset);
        return intermediateVertexPosition;
      }
      function isEdgeNonParallel(edge) {
        var edgeExtent = edge.getExtent(), edgeExtentComponents = edgeExtent, firstEdgeExtentComponent = (0, _array.first)(edgeExtentComponents), secondEdgeExtentComponent = (0, _array.second)(edgeExtentComponents), edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent, edgeAngleTangentApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(edgeAngleTangent), edgeParallel = edgeAngleTangentApproximatelyEqualToZero, edgeNonParallel = !edgeParallel;
        return edgeNonParallel;
      }
      function calculateEdgeIntersection(edge, firstPositionComponent) {
        var edgeExtent = edge.getExtent(), edgePosition = edge.getPosition(), edgeExtentComponents = edgeExtent, edgePositionComponents = edgePosition, firstEdgeExtentComponent = (0, _array.first)(edgeExtentComponents), firstEdgePositionComponent = (0, _array.first)(edgePositionComponents), edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
        return edgeIntersection;
      }
    }
  });

  // lib/primitive/verticalLine.js
  var require_verticalLine = __commonJS({
    "lib/primitive/verticalLine.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return VerticalLine;
        }
      });
      var _array = require_array2();
      var _rotation = require_rotation();
      var _intersection = require_intersection();
      var _quaternion = require_quaternion();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var VerticalLine = /* @__PURE__ */ function() {
        function VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
          _class_call_check(this, VerticalLine2);
          this.firstPositionComponent = firstPositionComponent;
          this.forwardsRotationQuaternion = forwardsRotationQuaternion;
          this.backwardsRotationQuaternion = backwardsRotationQuaternion;
        }
        _create_class(VerticalLine2, [
          {
            key: "getFirstPositionComponent",
            value: function getFirstPositionComponent() {
              return this.firstPositionComponent;
            }
          },
          {
            key: "getForwardsRotationQuaternion",
            value: function getForwardsRotationQuaternion() {
              return this.forwardsRotationQuaternion;
            }
          },
          {
            key: "getBackwardsRotationQuaternion",
            value: function getBackwardsRotationQuaternion() {
              return this.backwardsRotationQuaternion;
            }
          },
          {
            key: "splitFacet",
            value: function splitFacet(facet, smallerFacets, marginOfError) {
              var _this = this;
              var edges = facet.getEdges(), intersections = edges.map(function(edge) {
                var intersection = (0, _intersection.calculateIntersection)(edge, _this.firstPositionComponent);
                return intersection;
              });
              facet.splitWithIntersections(intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitFacets",
            value: function splitFacets(facets, marginOfError) {
              var _this = this;
              var smallerFacets = [];
              facets.forEach(function(facet) {
                facet.rotate(_this.forwardsRotationQuaternion);
                _this.splitFacet(facet, smallerFacets, marginOfError);
              });
              smallerFacets.forEach(function(smallerFacet) {
                smallerFacet.rotate(_this.backwardsRotationQuaternion);
              });
              return smallerFacets;
            }
          }
        ], [
          {
            key: "fromMaskingEdge",
            value: function fromMaskingEdge(maskingEdge) {
              var maskingEdgePosition = maskingEdge.getPosition(), rotationAboutZAxisQuaternion = (0, _quaternion.calculateRotationAboutZAxisQuaternion)(maskingEdge), rotationQuaternion = rotationAboutZAxisQuaternion, forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion), position = (0, _rotation.rotatePosition)(maskingEdgePosition, rotationQuaternion), positionComponents = position, firstPositionComponent = (0, _array.first)(positionComponents), verticalLine = new VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
              return verticalLine;
            }
          }
        ]);
        return VerticalLine2;
      }();
    }
  });

  // lib/utilities/vertices.js
  var require_vertices = __commonJS({
    "lib/utilities/vertices.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        rotateVertices: function() {
          return rotateVertices;
        },
        verticesFromCoordinateTuplesAndIndexTuple: function() {
          return verticesFromCoordinateTuplesAndIndexTuple;
        }
      });
      function rotateVertices(vertices, rotationQuaternion) {
        var rotatedVertices = vertices.map(function(vertex) {
          var rotatedVertex = vertex.clone();
          rotatedVertex.rotate(rotationQuaternion);
          return rotatedVertex;
        });
        return rotatedVertices;
      }
      function verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex) {
        var indexes = indexTuple, vertices = indexes.map(function(index) {
          var coordinateTuple = coordinateTuples[index], vertex = Vertex.fromCoordinateTuple(coordinateTuple);
          return vertex;
        });
        return vertices;
      }
    }
  });

  // lib/primitive/maskingFacet.js
  var require_maskingFacet = __commonJS({
    "lib/primitive/maskingFacet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return MaskingFacet;
        }
      });
      var _masking = /* @__PURE__ */ _interop_require_default(require_masking());
      var _verticalLine = /* @__PURE__ */ _interop_require_default(require_verticalLine());
      var _vertices = require_vertices();
      var _array = require_array2();
      var _constants = require_constants();
      var _quaternion = require_quaternion();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var MaskingFacet = /* @__PURE__ */ function() {
        function MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
          _class_call_check(this, MaskingFacet2);
          this.maskingEdges = maskingEdges;
          this.verticalLines = verticalLines;
          this.forwardsRotationQuaternion = forwardsRotationQuaternion;
          this.backwardsRotationQuaternion = backwardsRotationQuaternion;
        }
        _create_class(MaskingFacet2, [
          {
            key: "getMaskingEdges",
            value: function getMaskingEdges() {
              return this.maskingEdges;
            }
          },
          {
            key: "getVerticalLines",
            value: function getVerticalLines() {
              return this.verticalLines;
            }
          },
          {
            key: "getForwardsRotationQuaternion",
            value: function getForwardsRotationQuaternion() {
              return this.forwardsRotationQuaternion;
            }
          },
          {
            key: "getBackwardsRotationQuaternion",
            value: function getBackwardsRotationQuaternion() {
              return this.backwardsRotationQuaternion;
            }
          },
          {
            key: "maskFacet",
            value: function maskFacet(facet, unmaskedFacets, marginOfError) {
              var _this = this;
              var unmaskedFacet = facet.clone();
              facet.rotate(this.forwardsRotationQuaternion);
              var maskingFacet = this, smallerFacets = this.splitFacet(facet, marginOfError), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
              (0, _array.separate)(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
                var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
                return smallerFacetMasked;
              });
              var maskedSmallerFacetsLength = maskedSmallerFacets.length;
              if (maskedSmallerFacetsLength === 0) {
                unmaskedFacets.push(unmaskedFacet);
              } else {
                unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
                  unmaskedSmallerFacet.rotate(_this.backwardsRotationQuaternion);
                });
                (0, _array.push)(unmaskedFacets, unmaskedSmallerFacets);
              }
            }
          },
          {
            key: "splitFacet",
            value: function splitFacet(facet, marginOfError) {
              var facets = [
                facet
              ], smallerFacets = facets;
              this.verticalLines.forEach(function(verticalLine) {
                smallerFacets = verticalLine.splitFacets(facets, marginOfError);
                facets = smallerFacets;
              });
              return smallerFacets;
            }
          }
        ], [
          {
            key: "fromFacet",
            value: function fromFacet(facet) {
              var facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = (0, _vertices.rotateVertices)(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map(function(maskingEdge) {
                var verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
                return verticalLine;
              }), forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion), maskingFacet = new MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
              return maskingFacet;
            }
          }
        ]);
        return MaskingFacet2;
      }();
      function calculateMaskingEdges(vertices) {
        var maskingEdges = vertices.map(function(vertex, index) {
          var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], maskingEdge = _masking.default.fromStartVertexAndEndVertex(startVertex, endVertex);
          return maskingEdge;
        });
        return maskingEdges;
      }
    }
  });

  // lib/maths/matrix.js
  var require_matrix2 = __commonJS({
    "lib/maths/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        identity2: function() {
          return identity2;
        },
        identity3: function() {
          return identity3;
        },
        identity4: function() {
          return identity4;
        },
        multiply2: function() {
          return multiply2;
        },
        multiply3: function() {
          return multiply3;
        },
        multiply4: function() {
          return multiply4;
        },
        determinant2: function() {
          return determinant2;
        },
        determinant3: function() {
          return determinant3;
        },
        determinant4: function() {
          return determinant4;
        },
        transpose2: function() {
          return transpose2;
        },
        transpose3: function() {
          return transpose3;
        },
        transpose4: function() {
          return transpose4;
        },
        invert2: function() {
          return invert2;
        },
        invert3: function() {
          return invert3;
        },
        invert4: function() {
          return invert4;
        },
        scale4: function() {
          return scale4;
        },
        rotate4: function() {
          return rotate4;
        },
        translate4: function() {
          return translate4;
        },
        perspective4: function() {
          return perspective4;
        },
        default: function() {
          return _default;
        }
      });
      var _vector = require_vector();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_with_holes(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterable_to_array_limit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _non_iterable_rest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _sliced_to_array(arr, i) {
        return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function identity2() {
        return [
          1,
          0,
          0,
          1
        ];
      }
      function identity3() {
        return [
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1
        ];
      }
      function identity4() {
        return [
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        ];
      }
      function multiply2(matrixA, matrixB) {
        var _matrixA = _sliced_to_array(matrixA, 4), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], _matrixB = _sliced_to_array(matrixB, 4), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3];
        return [
          a0 * b0 + a2 * b1,
          a1 * b0 + a3 * b1,
          a0 * b2 + a2 * b3,
          a1 * b2 + a3 * b3
        ];
      }
      function multiply3(matrixA, matrixB) {
        var _matrixA = _sliced_to_array(matrixA, 9), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], a4 = _matrixA[4], a5 = _matrixA[5], a6 = _matrixA[6], a7 = _matrixA[7], a8 = _matrixA[8], _matrixB = _sliced_to_array(matrixB, 9), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3], b4 = _matrixB[4], b5 = _matrixB[5], b6 = _matrixB[6], b7 = _matrixB[7], b8 = _matrixB[8];
        return [
          a0 * b0 + a3 * b1 + a6 * b2,
          a1 * b0 + a4 * b1 + a7 * b2,
          a2 * b0 + a5 * b1 + a8 * b2,
          a0 * b3 + a3 * b4 + a6 * b5,
          a1 * b3 + a4 * b4 + a7 * b5,
          a2 * b3 + a5 * b4 + a8 * b5,
          a0 * b6 + a3 * b7 + a6 * b8,
          a1 * b6 + a4 * b7 + a7 * b8,
          a2 * b6 + a5 * b7 + a8 * b8
        ];
      }
      function multiply4(matrixA, matrixB) {
        var _matrixA = _sliced_to_array(matrixA, 16), a0 = _matrixA[0], a1 = _matrixA[1], a2 = _matrixA[2], a3 = _matrixA[3], a4 = _matrixA[4], a5 = _matrixA[5], a6 = _matrixA[6], a7 = _matrixA[7], a8 = _matrixA[8], a9 = _matrixA[9], a10 = _matrixA[10], a11 = _matrixA[11], a12 = _matrixA[12], a13 = _matrixA[13], a14 = _matrixA[14], a15 = _matrixA[15], _matrixB = _sliced_to_array(matrixB, 16), b0 = _matrixB[0], b1 = _matrixB[1], b2 = _matrixB[2], b3 = _matrixB[3], b4 = _matrixB[4], b5 = _matrixB[5], b6 = _matrixB[6], b7 = _matrixB[7], b8 = _matrixB[8], b9 = _matrixB[9], b10 = _matrixB[10], b11 = _matrixB[11], b12 = _matrixB[12], b13 = _matrixB[13], b14 = _matrixB[14], b15 = _matrixB[15];
        return [
          a0 * b0 + a4 * b1 + a8 * b2 + a12 * b3,
          a1 * b0 + a5 * b1 + a9 * b2 + a13 * b3,
          a2 * b0 + a6 * b1 + a10 * b2 + a14 * b3,
          a3 * b0 + a7 * b1 + a11 * b2 + a15 * b3,
          a0 * b4 + a4 * b5 + a8 * b6 + a12 * b7,
          a1 * b4 + a5 * b5 + a9 * b6 + a13 * b7,
          a2 * b4 + a6 * b5 + a10 * b6 + a14 * b7,
          a3 * b4 + a7 * b5 + a11 * b6 + a15 * b7,
          a0 * b8 + a4 * b9 + a8 * b10 + a12 * b11,
          a1 * b8 + a5 * b9 + a9 * b10 + a13 * b11,
          a2 * b8 + a6 * b9 + a10 * b10 + a14 * b11,
          a3 * b8 + a7 * b9 + a11 * b10 + a15 * b11,
          a0 * b12 + a4 * b13 + a8 * b14 + a12 * b15,
          a1 * b12 + a5 * b13 + a9 * b14 + a13 * b15,
          a2 * b12 + a6 * b13 + a10 * b14 + a14 * b15,
          a3 * b12 + a7 * b13 + a11 * b14 + a15 * b15
        ];
      }
      function determinant2(matrix) {
        var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
        return m0 * m3 - m2 * m1;
      }
      function determinant3(matrix) {
        var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], b01 = m8 * m4 - m5 * m7, b11 = -m8 * m3 + m5 * m6, b21 = m7 * m3 - m4 * m6;
        return m0 * b01 + m1 * b11 + m2 * b21;
      }
      function determinant4(matrix) {
        var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], b00 = m0 * m5 - m1 * m4, b01 = m0 * m6 - m2 * m4, b02 = m0 * m7 - m3 * m4, b03 = m1 * m6 - m2 * m5, b04 = m1 * m7 - m3 * m5, b05 = m2 * m7 - m3 * m6, b06 = m8 * m13 - m9 * m12, b07 = m8 * m14 - m10 * m12, b08 = m8 * m15 - m11 * m12, b09 = m9 * m14 - m10 * m13, b10 = m9 * m15 - m11 * m13, b11 = m10 * m15 - m11 * m14;
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
      }
      function transpose2(matrix) {
        var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3];
        return [
          m0,
          m2,
          m1,
          m3
        ];
      }
      function transpose3(matrix) {
        var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8];
        return [
          m0,
          m3,
          m6,
          m1,
          m4,
          m7,
          m2,
          m5,
          m8
        ];
      }
      function transpose4(matrix) {
        var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
        return [
          m0,
          m4,
          m8,
          m12,
          m1,
          m5,
          m9,
          m13,
          m2,
          m6,
          m10,
          m14,
          m3,
          m7,
          m11,
          m15
        ];
      }
      function invert2(matrix) {
        var _matrix = _sliced_to_array(matrix, 4), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], determinant = determinant2(matrix);
        return [
          +m3 / determinant,
          -m1 / determinant,
          -m2 / determinant,
          +m0 / determinant
        ];
      }
      function invert3(matrix) {
        var _matrix = _sliced_to_array(matrix, 9), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], determinant = determinant3(matrix), b01 = m8 * m4 - m5 * m7, b11 = -m8 * m3 + m5 * m6, b21 = m7 * m3 - m4 * m6;
        return [
          b01 / determinant,
          (-m8 * m1 + m2 * m7) / determinant,
          (m5 * m1 - m2 * m4) / determinant,
          b11 / determinant,
          (m8 * m0 - m2 * m6) / determinant,
          (-m5 * m0 + m2 * m3) / determinant,
          b21 / determinant,
          (-m7 * m0 + m1 * m6) / determinant,
          (m4 * m0 - m1 * m3) / determinant
        ];
      }
      function invert4(matrix) {
        var _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], determinant = determinant4(matrix), b00 = m0 * m5 - m1 * m4, b01 = m0 * m6 - m2 * m4, b02 = m0 * m7 - m3 * m4, b03 = m1 * m6 - m2 * m5, b04 = m1 * m7 - m3 * m5, b05 = m2 * m7 - m3 * m6, b06 = m8 * m13 - m9 * m12, b07 = m8 * m14 - m10 * m12, b08 = m8 * m15 - m11 * m12, b09 = m9 * m14 - m10 * m13, b10 = m9 * m15 - m11 * m13, b11 = m10 * m15 - m11 * m14;
        return [
          (m5 * b11 - m6 * b10 + m7 * b09) / determinant,
          (m2 * b10 - m1 * b11 - m3 * b09) / determinant,
          (m13 * b05 - m14 * b04 + m15 * b03) / determinant,
          (m10 * b04 - m9 * b05 - m11 * b03) / determinant,
          (m6 * b08 - m4 * b11 - m7 * b07) / determinant,
          (m0 * b11 - m2 * b08 + m3 * b07) / determinant,
          (m14 * b02 - m12 * b05 - m15 * b01) / determinant,
          (m8 * b05 - m10 * b02 + m11 * b01) / determinant,
          (m4 * b10 - m5 * b08 + m7 * b06) / determinant,
          (m1 * b08 - m0 * b10 - m3 * b06) / determinant,
          (m12 * b04 - m13 * b02 + m15 * b00) / determinant,
          (m9 * b02 - m8 * b04 - m11 * b00) / determinant,
          (m5 * b07 - m4 * b09 - m6 * b06) / determinant,
          (m0 * b09 - m1 * b07 + m2 * b06) / determinant,
          (m13 * b01 - m12 * b03 - m14 * b00) / determinant,
          (m8 * b03 - m9 * b01 + m10 * b00) / determinant
        ];
      }
      function scale4(matrix, vector) {
        var _vector2 = _sliced_to_array(vector, 3), x = _vector2[0], y = _vector2[1], z = _vector2[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
        return [
          m0 * x,
          m1 * x,
          m2 * x,
          m3 * x,
          m4 * y,
          m5 * y,
          m6 * y,
          m7 * y,
          m8 * z,
          m9 * z,
          m10 * z,
          m11 * z,
          m12 * 1,
          m13 * 1,
          m14 * 1,
          m15 * 1
        ];
      }
      function rotate4(matrix, angle, vector) {
        var _normalise3 = _sliced_to_array((0, _vector.normalise3)(vector), 3), x = _normalise3[0], y = _normalise3[1], z = _normalise3[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15], s = Math.sin(angle), c = Math.cos(angle), t = 1 - c, b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
        return [
          m0 * b00 + m4 * b01 + m8 * b02,
          m1 * b00 + m5 * b01 + m9 * b02,
          m2 * b00 + m6 * b01 + m10 * b02,
          m3 * b00 + m7 * b01 + m11 * b02,
          m0 * b10 + m4 * b11 + m8 * b12,
          m1 * b10 + m5 * b11 + m9 * b12,
          m2 * b10 + m6 * b11 + m10 * b12,
          m3 * b10 + m7 * b11 + m11 * b12,
          m0 * b20 + m4 * b21 + m8 * b22,
          m1 * b20 + m5 * b21 + m9 * b22,
          m2 * b20 + m6 * b21 + m10 * b22,
          m3 * b20 + m7 * b21 + m11 * b22,
          m12,
          m13,
          m14,
          m15
        ];
      }
      function translate4(matrix, vector) {
        var _vector2 = _sliced_to_array(vector, 3), x = _vector2[0], y = _vector2[1], z = _vector2[2], _matrix = _sliced_to_array(matrix, 16), m0 = _matrix[0], m1 = _matrix[1], m2 = _matrix[2], m3 = _matrix[3], m4 = _matrix[4], m5 = _matrix[5], m6 = _matrix[6], m7 = _matrix[7], m8 = _matrix[8], m9 = _matrix[9], m10 = _matrix[10], m11 = _matrix[11], m12 = _matrix[12], m13 = _matrix[13], m14 = _matrix[14], m15 = _matrix[15];
        return [
          m0,
          m1,
          m2,
          m3,
          m4,
          m5,
          m6,
          m7,
          m8,
          m9,
          m10,
          m11,
          m0 * x + m4 * y + m8 * z + m12,
          m1 * x + m5 * y + m9 * z + m13,
          m2 * x + m6 * y + m10 * z + m14,
          m3 * x + m7 * y + m11 * z + m15
        ];
      }
      function perspective4(fieldOfView, aspectRatio, zNear, zFar) {
        var f = 1 / Math.tan(fieldOfView / 2), nf = 1 / (zNear - zFar);
        return [
          f / aspectRatio,
          0,
          0,
          0,
          0,
          f,
          0,
          0,
          0,
          0,
          (zFar + zNear) * nf,
          -1,
          0,
          0,
          2 * zFar * zNear * nf,
          0
        ];
      }
      var _default = {
        identity2,
        identity3,
        identity4,
        multiply2,
        multiply3,
        multiply4,
        determinant2,
        determinant3,
        determinant4,
        transpose2,
        transpose3,
        transpose4,
        invert2,
        invert3,
        invert4,
        scale4,
        rotate4,
        translate4,
        perspective4
      };
    }
  });

  // lib/utilities/matrix.js
  var require_matrix3 = __commonJS({
    "lib/utilities/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        scaleMatrixFromScale: function() {
          return scaleMatrixFromScale;
        },
        offsetsMatrixFromOffsets: function() {
          return offsetsMatrixFromOffsets;
        },
        positionMatrixFromNothing: function() {
          return positionMatrixFromNothing;
        },
        positionMatrixFromDistance: function() {
          return positionMatrixFromDistance;
        },
        positionMatrixFromPosition: function() {
          return positionMatrixFromPosition;
        },
        rotationsMatrixFromAngles: function() {
          return rotationsMatrixFromAngles;
        },
        rotationsMatrixFromRotations: function() {
          return rotationsMatrixFromRotations;
        },
        normalsMatrixFromRotationsMatrix: function() {
          return normalsMatrixFromRotationsMatrix;
        },
        projectionMatrixFromCameraAndCanvas: function() {
          return projectionMatrixFromCameraAndCanvas;
        }
      });
      var _vector = require_vector();
      var _array = require_array2();
      var _constants = require_constants();
      var _matrix = require_matrix2();
      function scaleMatrixFromScale(scale) {
        var scaleMatrix = (0, _matrix.identity4)();
        scaleMatrix = (0, _matrix.scale4)(scaleMatrix, scale);
        return scaleMatrix;
      }
      function offsetsMatrixFromOffsets(offsets) {
        var offsetsMatrix = (0, _matrix.identity4)();
        offsetsMatrix = (0, _matrix.translate4)(offsetsMatrix, offsets);
        return offsetsMatrix;
      }
      function positionMatrixFromNothing() {
        var positionMatrix = (0, _matrix.identity4)();
        return positionMatrix;
      }
      function positionMatrixFromDistance(distance) {
        var positionMatrix = (0, _matrix.identity4)();
        var x = 0, y = 0, z = -distance;
        positionMatrix = (0, _matrix.translate4)(positionMatrix, [
          x,
          y,
          z
        ]);
        return positionMatrix;
      }
      function positionMatrixFromPosition(position) {
        var positionMatrix = (0, _matrix.identity4)();
        positionMatrix = (0, _matrix.translate4)(positionMatrix, position);
        return positionMatrix;
      }
      function rotationsMatrixFromAngles(angles) {
        var reverseOrder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var rotationsMatrix = (0, _matrix.identity4)();
        var firstAngle = (0, _array.first)(angles), secondAngle = (0, _array.second)(angles), thirdAngle = (0, _array.third)(angles), xAngle = firstAngle, yAngle = secondAngle, zAngle = thirdAngle, xAxis = [
          1,
          0,
          0
        ], yAxis = [
          0,
          1,
          0
        ], zAxis = [
          0,
          0,
          1
        ];
        if (reverseOrder) {
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, zAngle, zAxis);
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, yAngle, yAxis);
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, xAngle, xAxis);
        } else {
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, xAngle, xAxis);
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, yAngle, yAxis);
          rotationsMatrix = (0, _matrix.rotate4)(rotationsMatrix, zAngle, zAxis);
        }
        return rotationsMatrix;
      }
      function rotationsMatrixFromRotations(rotations) {
        var scalar = _constants.DEGREES_TO_RADIANS_MULTIPLIER, angles = (0, _vector.scale3)(rotations, scalar), rotationsMatrix = rotationsMatrixFromAngles(angles);
        return rotationsMatrix;
      }
      function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
        var normalsMatrix = (0, _matrix.invert4)(rotationsMatrix);
        normalsMatrix = (0, _matrix.transpose4)(normalsMatrix);
        return normalsMatrix;
      }
      function projectionMatrixFromCameraAndCanvas(camera, canvas) {
        var zFar = camera.getZFar(), zNear = camera.getZNear(), width = canvas.getWidth(), height = canvas.getHeight(), fieldOfView = camera.getFieldOfView(), aspectRatio = width / height, projectionMatrix = (0, _matrix.perspective4)(fieldOfView, aspectRatio, zNear, zFar);
        return projectionMatrix;
      }
    }
  });

  // lib/utilities/transform.js
  var require_transform = __commonJS({
    "lib/utilities/transform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "composeTransform", {
        enumerable: true,
        get: function() {
          return composeTransform;
        }
      });
      var _matrix = require_matrix2();
      var _vector = require_vector();
      var _matrix1 = require_matrix3();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function composeTransform(scale, position, rotations) {
        var matrix = null;
        if (scale !== null) {
          var scaleMatrix = (0, _matrix1.scaleMatrixFromScale)(scale);
          matrix = matrix === null ? scaleMatrix : (0, _matrix.multiply4)(scaleMatrix, matrix);
        }
        if (rotations !== null) {
          var rotationsMatrix = (0, _matrix1.rotationsMatrixFromRotations)(rotations);
          matrix = matrix === null ? rotationsMatrix : (0, _matrix.multiply4)(rotationsMatrix, matrix);
        }
        if (position !== null) {
          var positionMatrix = (0, _matrix1.positionMatrixFromPosition)(position);
          matrix = matrix === null ? positionMatrix : (0, _matrix.multiply4)(positionMatrix, matrix);
        }
        var transform = matrix === null ? function(vector) {
          return vector;
        } : function(vector) {
          return (0, _vector.transform4)(_to_consumable_array(vector).concat([
            1
          ]), matrix).slice(0, 3);
        };
        return transform;
      }
    }
  });

  // lib/element/mask.js
  var require_mask = __commonJS({
    "lib/element/mask.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Mask;
        }
      });
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _maskingFacet = /* @__PURE__ */ _interop_require_default(require_maskingFacet());
      var _array = require_array2();
      var _transform = require_transform();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var Mask = /* @__PURE__ */ function(Element) {
        _inherits(Mask2, Element);
        var _super = _create_super(Mask2);
        function Mask2(reference, transform) {
          _class_call_check(this, Mask2);
          var _this;
          _this = _super.call(this);
          _this.reference = reference;
          _this.transform = transform;
          return _this;
        }
        _create_class(Mask2, [
          {
            key: "getReference",
            value: function getReference() {
              return this.reference;
            }
          },
          {
            key: "getTransform",
            value: function getTransform() {
              return this.transform;
            }
          },
          {
            key: "retrieveMaskingFacets",
            value: function retrieveMaskingFacets() {
              var childElements = this.getChildElements(), facets = retrieveFacets(childElements), maskingFacets = facets.map(function(facet) {
                var maskingFacet = _maskingFacet.default.fromFacet(facet);
                return maskingFacet;
              });
              return maskingFacets;
            }
          },
          {
            key: "maskElement",
            value: function maskElement1(element, marginOfError) {
              var maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
              maskElement(element, maskingFacets, marginOfError);
              childElements.forEach(function(childElement) {
                maskElement(childElement, maskingFacets, marginOfError);
              });
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.applyTransform(transform);
              });
            }
          },
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.createFacets(marginOfError);
              });
            }
          },
          {
            key: "maskFacets",
            value: function maskFacets(masks, marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.maskFacets(masks, marginOfError);
              });
              this.applyTransform(this.transform);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var reference = properties.reference, _properties_scale = properties.scale, scale = _properties_scale === void 0 ? null : _properties_scale, _properties_position = properties.position, position = _properties_position === void 0 ? null : _properties_position, _properties_rotations = properties.rotations, rotations = _properties_rotations === void 0 ? null : _properties_rotations, transform = (0, _transform.composeTransform)(scale, position, rotations), mask = _element.default.fromProperties(Mask2, properties, reference, transform);
              return mask;
            }
          }
        ]);
        return Mask2;
      }(_wrap_native_super(_element.default));
      function retrieveFacets(childElements) {
        var facets = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        childElements.forEach(function(childElement) {
          var element = childElement, elementFacets = element.getFacets(), _$childElements = element.getChildElements();
          (0, _array.push)(facets, elementFacets);
          retrieveFacets(_$childElements, facets);
        });
        return facets;
      }
      function maskElement(element, maskingFacets, marginOfError) {
        var facets = element.getFacets();
        maskingFacets.forEach(function(maskingFacet) {
          var unmaskedFacets = [];
          facets.forEach(function(facet) {
            maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
          });
          facets = unmaskedFacets;
        });
        element.setFacets(facets);
        var childElements = element.getChildElements();
        childElements.forEach(function(childElement) {
          var _$element = childElement;
          maskElement(_$element, maskingFacets, marginOfError);
        });
      }
    }
  });

  // lib/utilities/element.js
  var require_element2 = __commonJS({
    "lib/utilities/element.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        elementsFromChildElements: function() {
          return elementsFromChildElements;
        },
        elementFromChildElements: function() {
          return elementFromChildElements;
        }
      });
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function elementsFromChildElements(childElements, Class) {
        var elements = childElements.reduce(function(elements2, childElement) {
          if (_instanceof(childElement, Class)) {
            var element = childElement;
            elements2.push(element);
          }
          return elements2;
        }, []);
        return elements;
      }
      function elementFromChildElements(childElements, Class) {
        var element = childElements.reduce(function(element2, childElement) {
          if (element2 === null) {
            if (_instanceof(childElement, Class)) {
              element2 = childElement;
            }
          }
          return element2;
        }, null);
        return element;
      }
    }
  });

  // lib/element/canvas.js
  var require_canvas2 = __commonJS({
    "lib/element/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return CanvasElement;
        }
      });
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _mask = /* @__PURE__ */ _interop_require_default(require_mask());
      var _transform = require_transform();
      var _element1 = require_element2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var CanvasElement = /* @__PURE__ */ function(Element) {
        _inherits(CanvasElement2, Element);
        var _super = _create_super(CanvasElement2);
        function CanvasElement2(maskReference, transform, facets, masks) {
          _class_call_check(this, CanvasElement2);
          var _this;
          _this = _super.call(this);
          _this.maskReference = maskReference;
          _this.transform = transform;
          _this.facets = facets;
          _this.masks = masks;
          return _this;
        }
        _create_class(CanvasElement2, [
          {
            key: "getMaskReference",
            value: function getMaskReference() {
              return this.maskReference;
            }
          },
          {
            key: "getTransform",
            value: function getTransform() {
              return this.transform;
            }
          },
          {
            key: "getFacets",
            value: function getFacets() {
              return this.facets;
            }
          },
          {
            key: "getMasks",
            value: function getMasks() {
              return this.masks;
            }
          },
          {
            key: "setFacets",
            value: function setFacets(facets) {
              this.facets = facets;
            }
          },
          {
            key: "applyMask",
            value: function applyMask(masks, marginOfError) {
              var _this = this;
              if (this.maskReference !== null) {
                var mask = masks.find(function(mask2) {
                  var reference = mask2.getReference();
                  if (reference === _this.maskReference) {
                    return true;
                  }
                }) || null;
                if (mask !== null) {
                  var element = this;
                  mask.maskElement(element, marginOfError);
                }
              }
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              var childElements = this.getChildElements();
              this.facets.forEach(function(facet) {
                facet.applyTransform(transform);
              });
              childElements.forEach(function(childElement) {
                childElement.applyTransform(transform);
              });
            }
          },
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.createFacets(marginOfError);
              });
            }
          },
          {
            key: "maskFacets",
            value: function maskFacets(masks, marginOfError) {
              masks = _to_consumable_array(masks).concat(_to_consumable_array(this.masks));
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.maskFacets(masks, marginOfError);
              });
              this.applyTransform(this.transform);
              this.applyMask(masks, marginOfError);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                childElement.addFacets(colourRenderer, textureRenderer);
              });
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var _Element;
              var childElements = properties.childElements, _properties_scale = properties.scale, scale = _properties_scale === void 0 ? null : _properties_scale, _properties_position = properties.position, position = _properties_position === void 0 ? null : _properties_position, _properties_rotations = properties.rotations, rotations = _properties_rotations === void 0 ? null : _properties_rotations, _properties_maskReference = properties.maskReference, maskReference = _properties_maskReference === void 0 ? null : _properties_maskReference, transform = (0, _transform.composeTransform)(scale, position, rotations), facets = [], masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default), canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
                Class,
                properties,
                maskReference,
                transform,
                facets,
                masks
              ].concat(_to_consumable_array(remainingArguments)));
              return canvasElement;
            }
          }
        ]);
        return CanvasElement2;
      }(_wrap_native_super(_element.default));
    }
  });

  // lib/element/canvas/function.js
  var require_function = __commonJS({
    "lib/element/canvas/function.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return FunctionCanvasElement;
        }
      });
      var _canvas = /* @__PURE__ */ _interop_require_default(require_canvas2());
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var FunctionCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(FunctionCanvasElement2, CanvasElement);
        var _super = _create_super(FunctionCanvasElement2);
        function FunctionCanvasElement2() {
          _class_call_check(this, FunctionCanvasElement2);
          return _super.apply(this, arguments);
        }
        _create_class(FunctionCanvasElement2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var functionElement = _canvas.default.fromProperties(FunctionCanvasElement2, properties);
              return functionElement;
            }
          }
        ]);
        return FunctionCanvasElement2;
      }(_canvas.default);
    }
  });

  // lib/utilities/elements.js
  var require_elements = __commonJS({
    "lib/utilities/elements.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "removeFalseyElements", {
        enumerable: true,
        get: function() {
          return removeFalseyElements;
        }
      });
      function removeFalseyElements(elements) {
        elements = elements.reduce(function(elements2, element) {
          if (element) {
            elements2.push(element);
          }
          return elements2;
        }, []);
        return elements;
      }
    }
  });

  // lib/react.js
  var require_react = __commonJS({
    "lib/react.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _function = /* @__PURE__ */ _interop_require_default(require_function());
      var _constants = require_constants();
      var _array = require_array2();
      var _elements = require_elements();
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function createElement(firstArgument, properties) {
        for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childElements[_key - 2] = arguments[_key];
        }
        properties = properties || {};
        childElements = sanitiseChildElements(childElements);
        var element;
        if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          Object.assign(properties, {
            childElements
          });
          element = Class.fromProperties(properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
          var func = firstArgument, childElements1 = (0, _array.guarantee)(func(properties));
          Object.assign(properties, {
            childElements: childElements1
          });
          element = _function.default.fromProperties(properties);
        }
        return element;
      }
      var React2 = {
        createElement
      };
      var _default = React2;
      function isSubclassOf(argument, Class) {
        var subclassOf = _instanceof(argument.prototype, Class);
        return subclassOf;
      }
      function sanitiseChildElements(childElements) {
        childElements = (0, _array.flatten)(childElements);
        childElements = (0, _elements.removeFalseyElements)(childElements);
        return childElements;
      }
    }
  });

  // lib/renderer.js
  var require_renderer = __commonJS({
    "lib/renderer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        default: function() {
          return Renderer;
        },
        createProgram: function() {
          return createProgram;
        }
      });
      var _array = require_array2();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var add = _array.push;
      var Renderer = /* @__PURE__ */ function() {
        function Renderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
          _class_call_check(this, Renderer2);
          this.facets = facets;
          this.program = program;
          this.rendererData = rendererData;
          this.rendererBuffers = rendererBuffers;
          this.uniformLocations = uniformLocations;
          this.attributeLocations = attributeLocations;
        }
        _create_class(Renderer2, [
          {
            key: "getFacets",
            value: function getFacets() {
              return this.facets;
            }
          },
          {
            key: "getProgram",
            value: function getProgram() {
              return this.program;
            }
          },
          {
            key: "getRendererData",
            value: function getRendererData() {
              return this.rendererData;
            }
          },
          {
            key: "getRendererBuffers",
            value: function getRendererBuffers() {
              return this.rendererBuffers;
            }
          },
          {
            key: "getUniformLocations",
            value: function getUniformLocations() {
              return this.uniformLocations;
            }
          },
          {
            key: "getAttributeLocations",
            value: function getAttributeLocations() {
              return this.attributeLocations;
            }
          },
          {
            key: "getCount",
            value: function getCount() {
              return this.rendererData.getCount();
            }
          },
          {
            key: "getOffsetsMatrixUniformLocation",
            value: function getOffsetsMatrixUniformLocation() {
              return this.uniformLocations.getOffsetsMatrixUniformLocation();
            }
          },
          {
            key: "getNormalsMatrixUniformLocation",
            value: function getNormalsMatrixUniformLocation() {
              return this.uniformLocations.getNormalsMatrixUniformLocation();
            }
          },
          {
            key: "getPositionMatrixUniformLocation",
            value: function getPositionMatrixUniformLocation() {
              return this.uniformLocations.getPositionMatrixUniformLocation();
            }
          },
          {
            key: "getRotationsMatrixUniformLocation",
            value: function getRotationsMatrixUniformLocation() {
              return this.uniformLocations.getRotationsMatrixUniformLocation();
            }
          },
          {
            key: "getProjectionMatrixUniformLocation",
            value: function getProjectionMatrixUniformLocation() {
              return this.uniformLocations.getProjectionMatrixUniformLocation();
            }
          },
          {
            key: "getVertexPositionAttributeLocation",
            value: function getVertexPositionAttributeLocation() {
              return this.attributeLocations.getVertexPositionAttributeLocation();
            }
          },
          {
            key: "getVertexNormalAttributeLocation",
            value: function getVertexNormalAttributeLocation() {
              return this.attributeLocations.getVertexNormalAttributeLocation();
            }
          },
          {
            key: "addFacets",
            value: function addFacets(facets) {
              add(this.facets, facets);
            }
          }
        ]);
        return Renderer2;
      }();
      function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
        var vertexShader = canvas.createVertexShader(vertexShaderSource), fragmentShader = canvas.createFragmentShader(fragmentShaderSource), program = canvas.createProgram(vertexShader, fragmentShader);
        return program;
      }
    }
  });

  // lib/renderer/data.js
  var require_data = __commonJS({
    "lib/renderer/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return RendererData;
        }
      });
      var _array = require_array2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var add = _array.merge;
      var RendererData = /* @__PURE__ */ function() {
        function RendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
          _class_call_check(this, RendererData2);
          this.vertexPositionsData = vertexPositionsData;
          this.vertexNormalsData = vertexNormalsData;
          this.vertexIndexesData = vertexIndexesData;
        }
        _create_class(RendererData2, [
          {
            key: "getCount",
            value: function getCount() {
              var vertexIndexesDataLength = this.vertexIndexesData.length, count = vertexIndexesDataLength;
              return count;
            }
          },
          {
            key: "getVertexPositionsData",
            value: function getVertexPositionsData() {
              return this.vertexPositionsData;
            }
          },
          {
            key: "getVertexNormalsData",
            value: function getVertexNormalsData() {
              return this.vertexNormalsData;
            }
          },
          {
            key: "getVertexIndexesData",
            value: function getVertexIndexesData() {
              return this.vertexIndexesData;
            }
          },
          {
            key: "addVertexPositions",
            value: function addVertexPositions(vertexPositions) {
              var vertexPositionsData = (0, _array.flatten)(vertexPositions);
              add(this.vertexPositionsData, vertexPositionsData);
            }
          },
          {
            key: "addVertexNormals",
            value: function addVertexNormals(vertexNormals) {
              var vertexNormalsData = (0, _array.flatten)(vertexNormals);
              add(this.vertexNormalsData, vertexNormalsData);
            }
          },
          {
            key: "addVertexIndexes",
            value: function addVertexIndexes(vertexIndexes) {
              var vertexIndexesData = vertexIndexes;
              add(this.vertexIndexesData, vertexIndexesData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                remainingArguments[_key - 1] = arguments[_key];
              }
              var vertexPositionsData = [], vertexNormalsData = [], vertexIndexesData = [], rendererData = _construct(Class, [
                vertexPositionsData,
                vertexNormalsData,
                vertexIndexesData
              ].concat(_to_consumable_array(remainingArguments)));
              return rendererData;
            }
          }
        ]);
        return RendererData2;
      }();
    }
  });

  // lib/renderer/data/colour.js
  var require_colour2 = __commonJS({
    "lib/renderer/data/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourRendererData;
        }
      });
      var _data = /* @__PURE__ */ _interop_require_default(require_data());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var add = _array.merge;
      var ColourRendererData = /* @__PURE__ */ function(RendererData) {
        _inherits(ColourRendererData2, RendererData);
        var _super = _create_super(ColourRendererData2);
        function ColourRendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
          _class_call_check(this, ColourRendererData2);
          var _this;
          _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
          _this.vertexColoursData = vertexColoursData;
          return _this;
        }
        _create_class(ColourRendererData2, [
          {
            key: "getVertexColoursData",
            value: function getVertexColoursData() {
              return this.vertexColoursData;
            }
          },
          {
            key: "addVertexColours",
            value: function addVertexColours(vertexColours) {
              var vertexColoursData = (0, _array.flatten)(vertexColours);
              add(this.vertexColoursData, vertexColoursData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexColoursData = [], colourRendererData = _data.default.fromNothing(ColourRendererData2, vertexColoursData);
              return colourRendererData;
            }
          }
        ]);
        return ColourRendererData2;
      }(_data.default);
    }
  });

  // lib/renderer/source/lighting.js
  var require_lighting = __commonJS({
    "lib/renderer/source/lighting.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        normalsMatrixName: function() {
          return normalsMatrixName;
        },
        vertexNormalAttributeName: function() {
          return vertexNormalAttributeName;
        },
        default: function() {
          return _default;
        }
      });
      var normalsMatrixName = "uNormalsMatrix";
      var vertexNormalAttributeName = "aVertexNormal";
      var lightingSource = new String("\n  \n        uniform mat4 ".concat(normalsMatrixName, ";\n\n        attribute vec3 ").concat(vertexNormalAttributeName, ";\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ").concat(normalsMatrixName, " * vec4(").concat(vertexNormalAttributeName, ", 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      "));
      var _default = lightingSource;
    }
  });

  // lib/renderer/source/position.js
  var require_position = __commonJS({
    "lib/renderer/source/position.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        offsetsMatrixName: function() {
          return offsetsMatrixName;
        },
        positionMatrixName: function() {
          return positionMatrixName;
        },
        rotationsMatrixName: function() {
          return rotationsMatrixName;
        },
        projectionMatrixName: function() {
          return projectionMatrixName;
        },
        vertexPositionAttributeName: function() {
          return vertexPositionAttributeName;
        },
        default: function() {
          return _default;
        }
      });
      var offsetsMatrixName = "uOffsetsMatrix";
      var positionMatrixName = "uPositionMatrix";
      var rotationsMatrixName = "uRotationsMatrix";
      var projectionMatrixName = "uPerspectiveMatrix";
      var vertexPositionAttributeName = "aVertexPosition";
      var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
      var _default = positionSource;
    }
  });

  // lib/renderer/source/colour/vertexShader.js
  var require_vertexShader = __commonJS({
    "lib/renderer/source/colour/vertexShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        vertexColourAttributeName: function() {
          return vertexColourAttributeName;
        },
        default: function() {
          return _default;
        }
      });
      var _lighting = /* @__PURE__ */ _interop_require_default(require_lighting());
      var _position = /* @__PURE__ */ _interop_require_default(require_position());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var vertexColourAttributeName = "aVertexColour";
      var vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
      var _default = vertexShaderSource;
    }
  });

  // lib/renderer/source/colour/fragmentShader.js
  var require_fragmentShader = __commonJS({
    "lib/renderer/source/colour/fragmentShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var fragmentShaderSource = new String("\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ");
      var _default = fragmentShaderSource;
    }
  });

  // lib/renderer/buffers.js
  var require_buffers = __commonJS({
    "lib/renderer/buffers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return RendererBuffers;
        }
      });
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var vertexNormalComponents = 3;
      var vertexPositionComponents = 3;
      var RendererBuffers = /* @__PURE__ */ function() {
        function RendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
          _class_call_check(this, RendererBuffers2);
          this.vertexPositionsBuffer = vertexPositionsBuffer;
          this.vertexNormalsBuffer = vertexNormalsBuffer;
          this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
        }
        _create_class(RendererBuffers2, [
          {
            key: "createVertexPositionsBuffer",
            value: function createVertexPositionsBuffer(vertexPositionsData, canvas) {
              this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
            }
          },
          {
            key: "createVertexNormalsBuffer",
            value: function createVertexNormalsBuffer(vertexNormalsData, canvas) {
              this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
            }
          },
          {
            key: "createVertexIndexesElementBuffer",
            value: function createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
              this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
            }
          },
          {
            key: "bindVertexNormalsBuffer",
            value: function bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
            }
          },
          {
            key: "bindVertexPositionsBuffer",
            value: function bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
            }
          },
          {
            key: "bindVertexIndexesElementBuffer",
            value: function bindVertexIndexesElementBuffer(canvas) {
              canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
              this.createVertexPositionsBuffer(vertexPositionsData, canvas);
              this.createVertexNormalsBuffer(vertexNormalsData, canvas);
              this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
              this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
              this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
              this.bindVertexIndexesElementBuffer(canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                remainingArguments[_key - 1] = arguments[_key];
              }
              var vertexPositionsBuffer = null, vertexNormalsBuffer = null, vertexIndexesElementBuffer = null, rendererBuffers = _construct(Class, [
                vertexPositionsBuffer,
                vertexNormalsBuffer,
                vertexIndexesElementBuffer
              ].concat(_to_consumable_array(remainingArguments)));
              return rendererBuffers;
            }
          }
        ]);
        return RendererBuffers2;
      }();
    }
  });

  // lib/renderer/buffers/colour.js
  var require_colour3 = __commonJS({
    "lib/renderer/buffers/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourRendererBuffers;
        }
      });
      var _buffers = /* @__PURE__ */ _interop_require_default(require_buffers());
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var vertexColourComponents = 4;
      var ColourRendererBuffers = /* @__PURE__ */ function(RendererBuffers) {
        _inherits(ColourRendererBuffers2, RendererBuffers);
        var _super = _create_super(ColourRendererBuffers2);
        function ColourRendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
          _class_call_check(this, ColourRendererBuffers2);
          var _this;
          _this = _super.call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
          _this.vertexColoursBuffer = vertexColoursBuffer;
          return _this;
        }
        _create_class(ColourRendererBuffers2, [
          {
            key: "createVertexColoursBuffer",
            value: function createVertexColoursBuffer(vertexColoursData, canvas) {
              this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
            }
          },
          {
            key: "bindVertexColoursBuffer",
            value: function bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
              _get(_get_prototype_of(ColourRendererBuffers2.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
              this.createVertexColoursBuffer(vertexColoursData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
              _get(_get_prototype_of(ColourRendererBuffers2.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
              this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexColoursBuffer = null, colourRendererBuffers = _buffers.default.fromNothing(ColourRendererBuffers2, vertexColoursBuffer);
              return colourRendererBuffers;
            }
          }
        ]);
        return ColourRendererBuffers2;
      }(_buffers.default);
    }
  });

  // lib/renderer/locations/uniform.js
  var require_uniform = __commonJS({
    "lib/renderer/locations/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return UniformLocations;
        }
      });
      var _lighting = require_lighting();
      var _position = require_position();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var UniformLocations = /* @__PURE__ */ function() {
        function UniformLocations2(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
          _class_call_check(this, UniformLocations2);
          this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
          this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
          this.positionMatrixUniformLocation = positionMatrixUniformLocation;
          this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
          this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
        }
        _create_class(UniformLocations2, [
          {
            key: "getOffsetsMatrixUniformLocation",
            value: function getOffsetsMatrixUniformLocation() {
              return this.offsetsMatrixUniformLocation;
            }
          },
          {
            key: "getNormalsMatrixUniformLocation",
            value: function getNormalsMatrixUniformLocation() {
              return this.normalsMatrixUniformLocation;
            }
          },
          {
            key: "getPositionMatrixUniformLocation",
            value: function getPositionMatrixUniformLocation() {
              return this.positionMatrixUniformLocation;
            }
          },
          {
            key: "getRotationsMatrixUniformLocation",
            value: function getRotationsMatrixUniformLocation() {
              return this.rotationsMatrixUniformLocation;
            }
          },
          {
            key: "getProjectionMatrixUniformLocation",
            value: function getProjectionMatrixUniformLocation() {
              return this.projectionMatrixUniformLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(Class, program, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                remainingArguments[_key - 3] = arguments[_key];
              }
              var offsetsMatrixUniformLocation = canvas.getUniformLocation(program, _position.offsetsMatrixName), normalsMatrixUniformLocation = canvas.getUniformLocation(program, _lighting.normalsMatrixName), positionMatrixUniformLocation = canvas.getUniformLocation(program, _position.positionMatrixName), rotationsMatrixUniformLocation = canvas.getUniformLocation(program, _position.rotationsMatrixName), projectionMatrixUniformLocation = canvas.getUniformLocation(program, _position.projectionMatrixName), uniformLocations = _construct(Class, [
                offsetsMatrixUniformLocation,
                normalsMatrixUniformLocation,
                positionMatrixUniformLocation,
                rotationsMatrixUniformLocation,
                projectionMatrixUniformLocation
              ].concat(_to_consumable_array(remainingArguments)));
              return uniformLocations;
            }
          }
        ]);
        return UniformLocations2;
      }();
    }
  });

  // lib/renderer/locations/colour/uniform.js
  var require_uniform2 = __commonJS({
    "lib/renderer/locations/colour/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourUniformLocations;
        }
      });
      var _uniform = /* @__PURE__ */ _interop_require_default(require_uniform());
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var ColourUniformLocations = /* @__PURE__ */ function(UniformLocations) {
        _inherits(ColourUniformLocations2, UniformLocations);
        var _super = _create_super(ColourUniformLocations2);
        function ColourUniformLocations2() {
          _class_call_check(this, ColourUniformLocations2);
          return _super.apply(this, arguments);
        }
        _create_class(ColourUniformLocations2, null, [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              return _uniform.default.fromProgram(ColourUniformLocations2, program, canvas);
            }
          }
        ]);
        return ColourUniformLocations2;
      }(_uniform.default);
    }
  });

  // lib/renderer/locations/attribute.js
  var require_attribute = __commonJS({
    "lib/renderer/locations/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return AttributeLocations;
        }
      });
      var _lighting = require_lighting();
      var _position = require_position();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var AttributeLocations = /* @__PURE__ */ function() {
        function AttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
          _class_call_check(this, AttributeLocations2);
          this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
          this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
        }
        _create_class(AttributeLocations2, [
          {
            key: "getVertexPositionAttributeLocation",
            value: function getVertexPositionAttributeLocation() {
              return this.vertexPositionAttributeLocation;
            }
          },
          {
            key: "getVertexNormalAttributeLocation",
            value: function getVertexNormalAttributeLocation() {
              return this.vertexNormalAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(Class, program, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                remainingArguments[_key - 3] = arguments[_key];
              }
              var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, _position.vertexPositionAttributeName), vertexNormalAttributeLocation = canvas.getAttributeLocation(program, _lighting.vertexNormalAttributeName), attributeLocations = _construct(Class, [
                vertexPositionAttributeLocation,
                vertexNormalAttributeLocation
              ].concat(_to_consumable_array(remainingArguments)));
              return attributeLocations;
            }
          }
        ]);
        return AttributeLocations2;
      }();
    }
  });

  // lib/renderer/locations/colour/attribute.js
  var require_attribute2 = __commonJS({
    "lib/renderer/locations/colour/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourAttributeLocations;
        }
      });
      var _attribute = /* @__PURE__ */ _interop_require_default(require_attribute());
      var _vertexShader = require_vertexShader();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var ColourAttributeLocations = /* @__PURE__ */ function(AttributeLocations) {
        _inherits(ColourAttributeLocations2, AttributeLocations);
        var _super = _create_super(ColourAttributeLocations2);
        function ColourAttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
          _class_call_check(this, ColourAttributeLocations2);
          var _this;
          _this = _super.call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation);
          _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
          return _this;
        }
        _create_class(ColourAttributeLocations2, [
          {
            key: "getVertexColourAttributeLocation",
            value: function getVertexColourAttributeLocation() {
              return this.vertexColourAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var vertexColourAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.vertexColourAttributeName), colourAttributeLocations = _attribute.default.fromProgram(ColourAttributeLocations2, program, canvas, vertexColourAttributeLocation);
              return colourAttributeLocations;
            }
          }
        ]);
        return ColourAttributeLocations2;
      }(_attribute.default);
    }
  });

  // lib/renderer/colour.js
  var require_colour4 = __commonJS({
    "lib/renderer/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColourRenderer;
        }
      });
      var _renderer = /* @__PURE__ */ _interop_require_wildcard(require_renderer());
      var _colour = /* @__PURE__ */ _interop_require_default(require_colour2());
      var _vertexShader = /* @__PURE__ */ _interop_require_default(require_vertexShader());
      var _fragmentShader = /* @__PURE__ */ _interop_require_default(require_fragmentShader());
      var _colour1 = /* @__PURE__ */ _interop_require_default(require_colour3());
      var _uniform = /* @__PURE__ */ _interop_require_default(require_uniform2());
      var _attribute = /* @__PURE__ */ _interop_require_default(require_attribute2());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var add = _array.push;
      var ColourRenderer = /* @__PURE__ */ function(Renderer) {
        _inherits(ColourRenderer2, Renderer);
        var _super = _create_super(ColourRenderer2);
        function ColourRenderer2() {
          _class_call_check(this, ColourRenderer2);
          return _super.apply(this, arguments);
        }
        _create_class(ColourRenderer2, [
          {
            key: "getVertexColourAttributeLocation",
            value: function getVertexColourAttributeLocation() {
              var attributeLocations = this.getAttributeLocations(), vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();
              return vertexColourAttributeLocation;
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexColours = [];
              facets.forEach(function(facet, index) {
                var colouredFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), colouredFacetVertexColours = colouredFacet.getVertexColours();
                add(vertexIndexes, facetVertexIndexes);
                add(vertexNormals, facetVertexNormals);
                add(vertexPositions, facetVertexPositions);
                add(vertexColours, colouredFacetVertexColours);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexColours(vertexColours);
              rendererData.addVertexPositions(vertexPositions);
              var rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexColoursData = rendererData.getVertexColoursData();
              rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var count = this.getCount(), start = 0, finish = count;
              canvas.drawElements(start, finish);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(canvas) {
              var facets = [], program = (0, _renderer.createProgram)(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
              return colourRenderer;
            }
          }
        ]);
        return ColourRenderer2;
      }(_renderer.default);
    }
  });

  // lib/renderer/source/texture/vertexShader.js
  var require_vertexShader2 = __commonJS({
    "lib/renderer/source/texture/vertexShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        textureCoordinateAttributeName: function() {
          return textureCoordinateAttributeName;
        },
        default: function() {
          return _default;
        }
      });
      var _lighting = /* @__PURE__ */ _interop_require_default(require_lighting());
      var _position = /* @__PURE__ */ _interop_require_default(require_position());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var textureCoordinateAttributeName = "aTextureCoordinate";
      var vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
      var _default = vertexShaderSource;
    }
  });

  // lib/renderer/data/texture.js
  var require_texture2 = __commonJS({
    "lib/renderer/data/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureRendererData;
        }
      });
      var _data = /* @__PURE__ */ _interop_require_default(require_data());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var add = _array.merge;
      var TextureRendererData = /* @__PURE__ */ function(RendererData) {
        _inherits(TextureRendererData2, RendererData);
        var _super = _create_super(TextureRendererData2);
        function TextureRendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
          _class_call_check(this, TextureRendererData2);
          var _this;
          _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
          _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
          return _this;
        }
        _create_class(TextureRendererData2, [
          {
            key: "getVertexTextureCoordinatesData",
            value: function getVertexTextureCoordinatesData() {
              return this.vertexTextureCoordinatesData;
            }
          },
          {
            key: "addVertexTextureCoordinateTuples",
            value: function addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
              var vertexTextureCoordinatesData = (0, _array.flatten)(vertexTextureCoordinateTuples);
              add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexTextureCoordinatesData = [], textureRendererData = _data.default.fromNothing(TextureRendererData2, vertexTextureCoordinatesData);
              return textureRendererData;
            }
          }
        ]);
        return TextureRendererData2;
      }(_data.default);
    }
  });

  // lib/renderer/source/texture/fragmentShader.js
  var require_fragmentShader2 = __commonJS({
    "lib/renderer/source/texture/fragmentShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        samplerName: function() {
          return samplerName;
        },
        default: function() {
          return _default;
        }
      });
      var samplerName = "uSampler";
      var fragmentShaderSource = new String("\n        \n        uniform sampler2D ".concat(samplerName, ";\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(").concat(samplerName, ", vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      "));
      var _default = fragmentShaderSource;
    }
  });

  // lib/renderer/buffers/texture.js
  var require_texture3 = __commonJS({
    "lib/renderer/buffers/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureRendererBuffers;
        }
      });
      var _buffers = /* @__PURE__ */ _interop_require_default(require_buffers());
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var textureCoordinateComponents = 2;
      var TextureRendererBuffers = /* @__PURE__ */ function(RendererBuffers) {
        _inherits(TextureRendererBuffers2, RendererBuffers);
        var _super = _create_super(TextureRendererBuffers2);
        function TextureRendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
          _class_call_check(this, TextureRendererBuffers2);
          var _this;
          _this = _super.call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
          _this.textureCoordinatesBuffer = textureCoordinatesBuffer;
          return _this;
        }
        _create_class(TextureRendererBuffers2, [
          {
            key: "createTextureCoordinatesBuffer",
            value: function createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
              this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
            }
          },
          {
            key: "bindTextureCoordinatesBuffer",
            value: function bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
              canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
              _get(_get_prototype_of(TextureRendererBuffers2.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
              this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
              _get(_get_prototype_of(TextureRendererBuffers2.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
              this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var textureCoordinatesBuffer = null, textureRendererBuffers = _buffers.default.fromNothing(TextureRendererBuffers2, textureCoordinatesBuffer);
              return textureRendererBuffers;
            }
          }
        ]);
        return TextureRendererBuffers2;
      }(_buffers.default);
    }
  });

  // lib/renderer/locations/texture/uniform.js
  var require_uniform3 = __commonJS({
    "lib/renderer/locations/texture/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureUniformLocations;
        }
      });
      var _uniform = /* @__PURE__ */ _interop_require_default(require_uniform());
      var _fragmentShader = require_fragmentShader2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var TextureUniformLocations = /* @__PURE__ */ function(UniformLocations) {
        _inherits(TextureUniformLocations2, UniformLocations);
        var _super = _create_super(TextureUniformLocations2);
        function TextureUniformLocations2(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
          _class_call_check(this, TextureUniformLocations2);
          var _this;
          _this = _super.call(this, offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation);
          _this.samplerUniformLocation = samplerUniformLocation;
          return _this;
        }
        _create_class(TextureUniformLocations2, [
          {
            key: "getSamplerUniformLocation",
            value: function getSamplerUniformLocation() {
              return this.samplerUniformLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var samplerUniformLocation = canvas.getUniformLocation(program, _fragmentShader.samplerName), textureUniformLocations = _uniform.default.fromProgram(TextureUniformLocations2, program, canvas, samplerUniformLocation);
              return textureUniformLocations;
            }
          }
        ]);
        return TextureUniformLocations2;
      }(_uniform.default);
    }
  });

  // lib/renderer/locations/texture/attribute.js
  var require_attribute3 = __commonJS({
    "lib/renderer/locations/texture/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureAttributeLocations;
        }
      });
      var _attribute = /* @__PURE__ */ _interop_require_default(require_attribute());
      var _vertexShader = require_vertexShader2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var TextureAttributeLocations = /* @__PURE__ */ function(AttributeLocations) {
        _inherits(TextureAttributeLocations2, AttributeLocations);
        var _super = _create_super(TextureAttributeLocations2);
        function TextureAttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
          _class_call_check(this, TextureAttributeLocations2);
          var _this;
          _this = _super.call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation);
          _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
          return _this;
        }
        _create_class(TextureAttributeLocations2, [
          {
            key: "getTextureCoordinateAttributeLocation",
            value: function getTextureCoordinateAttributeLocation() {
              return this.textureCoordinateAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.textureCoordinateAttributeName), textureAttributeLocations = _attribute.default.fromProgram(TextureAttributeLocations2, program, canvas, textureCoordinateAttributeLocation);
              return textureAttributeLocations;
            }
          }
        ]);
        return TextureAttributeLocations2;
      }(_attribute.default);
    }
  });

  // lib/renderer/texture.js
  var require_texture4 = __commonJS({
    "lib/renderer/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TextureRenderer;
        }
      });
      var _renderer = /* @__PURE__ */ _interop_require_wildcard(require_renderer());
      var _vertexShader = /* @__PURE__ */ _interop_require_default(require_vertexShader2());
      var _texture = /* @__PURE__ */ _interop_require_default(require_texture2());
      var _fragmentShader = /* @__PURE__ */ _interop_require_default(require_fragmentShader2());
      var _texture1 = /* @__PURE__ */ _interop_require_default(require_texture3());
      var _uniform = /* @__PURE__ */ _interop_require_default(require_uniform3());
      var _attribute = /* @__PURE__ */ _interop_require_default(require_attribute3());
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interop_require_wildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var TextureRenderer = /* @__PURE__ */ function(Renderer) {
        _inherits(TextureRenderer2, Renderer);
        var _super = _create_super(TextureRenderer2);
        function TextureRenderer2() {
          _class_call_check(this, TextureRenderer2);
          return _super.apply(this, arguments);
        }
        _create_class(TextureRenderer2, [
          {
            key: "getTextureCoordinateAttributeLocation",
            value: function getTextureCoordinateAttributeLocation() {
              var attributeLocations = this.getAttributeLocations(), textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();
              return textureCoordinateAttributeLocation;
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var rendererData = this.getRendererData(), rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();
              rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
          },
          {
            key: "useTexture",
            value: function useTexture(index, canvas) {
              var uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index;
              canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var facets = [], program = (0, _renderer.createProgram)(_vertexShader.default, _fragmentShader.default, canvas), textureRendererData = _texture.default.fromNothing(), textureRendererBuffers = _texture1.default.fromNothing(), textureUniformLocations = _uniform.default.fromProgram(program, canvas), textureAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = textureRendererData, rendererBuffers = textureRendererBuffers, uniformLocations = textureUniformLocations, attributeLocations = textureAttributeLocations, textureRenderer = _construct(Class, [
                facets,
                program,
                rendererData,
                rendererBuffers,
                uniformLocations,
                attributeLocations
              ].concat(_to_consumable_array(remainingArguments)));
              canvas.enableAnisotropicFiltering();
              return textureRenderer;
            }
          }
        ]);
        return TextureRenderer2;
      }(_renderer.default);
    }
  });

  // lib/renderer/texture/images.js
  var require_images = __commonJS({
    "lib/renderer/texture/images.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ImagesTextureRenderer;
        }
      });
      var _texture = /* @__PURE__ */ _interop_require_default(require_texture4());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var add = _array.push;
      var ImagesTextureRenderer = /* @__PURE__ */ function(TextureRenderer) {
        _inherits(ImagesTextureRenderer2, TextureRenderer);
        var _super = _create_super(ImagesTextureRenderer2);
        function ImagesTextureRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
          _class_call_check(this, ImagesTextureRenderer2);
          var _this;
          _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
          _this.imageNames = imageNames;
          _this.facetsMap = facetsMap;
          _this.offsets = offsets;
          return _this;
        }
        _create_class(ImagesTextureRenderer2, [
          {
            key: "addFacets",
            value: function addFacets(facets) {
              var texturedFacets = facets, texturedFacetsLength = texturedFacets.length;
              if (texturedFacetsLength > 0) {
                var firstTexturedFacet = (0, _array.first)(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), _$facets = this.facetsMap[imageName];
                add(_$facets, texturedFacets);
              }
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var _this = this;
              var vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              var index = 0;
              this.imageNames.forEach(function(imageName) {
                var facets = _this.facetsMap[imageName];
                facets.forEach(function(facet) {
                  var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(), texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples;
                  add(vertexIndexes, facetVertexIndexes);
                  add(vertexNormals, facetVertexNormals);
                  add(vertexPositions, facetVertexPositions);
                  add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
                  index++;
                });
                var offset = index * 3;
                _this.offsets.push(offset);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexPositions(vertexPositions);
              rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
              _get(_get_prototype_of(ImagesTextureRenderer2.prototype), "createBuffers", this).call(this, canvas);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var _this = this;
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var start, finish = 0;
              this.offsets.forEach(function(offset, index) {
                start = finish;
                finish = offset;
                _this.useTexture(index, canvas);
                canvas.drawElements(start, finish);
              });
            }
          }
        ], [
          {
            key: "fromImagesImageNamesAndImageTiling",
            value: function fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
              var offsets = [], facetsMap = {};
              images.forEach(function(image, index) {
                var facets = [], repeat = imageTiling, imageName = imageNames[index];
                facetsMap[imageName] = facets;
                canvas.createTexture(image, index, repeat);
              });
              var imagesTextureRenderer = _texture.default.fromNothing(ImagesTextureRenderer2, canvas, imageNames, facetsMap, offsets);
              return imagesTextureRenderer;
            }
          }
        ]);
        return ImagesTextureRenderer2;
      }(_texture.default);
    }
  });

  // lib/renderer/texture/imageMap.js
  var require_imageMap = __commonJS({
    "lib/renderer/texture/imageMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ImageMapTextureRenderer;
        }
      });
      var _texture = /* @__PURE__ */ _interop_require_default(require_texture4());
      var _array = require_array2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var add = _array.push;
      var ImageMapTextureRenderer = /* @__PURE__ */ function(TextureRenderer) {
        _inherits(ImageMapTextureRenderer2, TextureRenderer);
        var _super = _create_super(ImageMapTextureRenderer2);
        function ImageMapTextureRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
          _class_call_check(this, ImageMapTextureRenderer2);
          var _this;
          _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
          _this.imageMapJSON = imageMapJSON;
          return _this;
        }
        _create_class(ImageMapTextureRenderer2, [
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var _this = this;
              var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              facets.forEach(function(facet, index) {
                var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(_this.imageMapJSON), texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples;
                add(vertexIndexes, facetVertexIndexes);
                add(vertexNormals, facetVertexNormals);
                add(vertexPositions, facetVertexPositions);
                add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexPositions(vertexPositions);
              rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
              _get(_get_prototype_of(ImageMapTextureRenderer2.prototype), "createBuffers", this).call(this, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
          },
          {
            key: "useTexture",
            value: function useTexture(index, canvas) {
              var uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index;
              canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var rendererData = this.getRendererData(), count = rendererData.getCount(), index = 0, start = 0, finish = count;
              this.useTexture(index, canvas);
              canvas.drawElements(start, finish);
            }
          }
        ], [
          {
            key: "fromImageMapAndImageMapJSON",
            value: function fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
              var image = imageMap, index = 0, repeat = false;
              canvas.createTexture(image, index, repeat);
              var imageMapTextureRenderer = _texture.default.fromNothing(ImageMapTextureRenderer2, canvas, imageMapJSON);
              return imageMapTextureRenderer;
            }
          }
        ]);
        return ImageMapTextureRenderer2;
      }(_texture.default);
    }
  });

  // lib/element/part.js
  var require_part = __commonJS({
    "lib/element/part.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Part;
        }
      });
      var _mask = /* @__PURE__ */ _interop_require_default(require_mask());
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _colour = /* @__PURE__ */ _interop_require_default(require_colour4());
      var _images = /* @__PURE__ */ _interop_require_default(require_images());
      var _imageMap = /* @__PURE__ */ _interop_require_default(require_imageMap());
      var _element1 = require_element2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var Part = /* @__PURE__ */ function(Element) {
        _inherits(Part2, Element);
        var _super = _create_super(Part2);
        function Part2(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
          _class_call_check(this, Part2);
          var _this;
          _this = _super.call(this);
          _this.images = images;
          _this.imageMap = imageMap;
          _this.imageNames = imageNames;
          _this.imageTiling = imageTiling;
          _this.imageMapJSON = imageMapJSON;
          _this.colourRenderer = colourRenderer;
          _this.textureRenderer = textureRenderer;
          return _this;
        }
        _create_class(Part2, [
          {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
              var colourRenderer = _colour.default.fromNothing(canvas), childElements = this.getChildElements(), masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default);
              var textureRenderer = null;
              if (this.images !== null) {
                var imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
                textureRenderer = imagesTextureRenderer;
              }
              if (this.imageMap !== null) {
                var imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
                textureRenderer = imageMapTextureRenderer;
              }
              childElements.forEach(function(childElement) {
                childElement.createFacets(marginOfError);
              });
              childElements.forEach(function(childElement) {
                childElement.maskFacets(masks, marginOfError);
              });
              childElements.forEach(function(childElement) {
                childElement.addFacets(colourRenderer, textureRenderer);
              });
              if (colourRenderer !== null) {
                colourRenderer.createBuffers(canvas);
              }
              if (textureRenderer !== null) {
                textureRenderer.createBuffers(canvas);
              }
              this.colourRenderer = colourRenderer;
              this.textureRenderer = textureRenderer;
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
              this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_images = properties.images, images = _properties_images === void 0 ? null : _properties_images, _properties_imageMap = properties.imageMap, imageMap = _properties_imageMap === void 0 ? null : _properties_imageMap, _properties_imageNames = properties.imageNames, imageNames = _properties_imageNames === void 0 ? null : _properties_imageNames, _properties_imageTiling = properties.imageTiling, imageTiling = _properties_imageTiling === void 0 ? false : _properties_imageTiling, _properties_imageMapJSON = properties.imageMapJSON, imageMapJSON = _properties_imageMapJSON === void 0 ? null : _properties_imageMapJSON, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part2, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);
              return part;
            }
          }
        ]);
        return Part2;
      }(_wrap_native_super(_element.default));
    }
  });

  // lib/element/camera.js
  var require_camera = __commonJS({
    "lib/element/camera.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Camera;
        }
      });
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _constants = require_constants();
      var _defaults = require_defaults();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var Camera = /* @__PURE__ */ function(Element) {
        _inherits(Camera2, Element);
        var _super = _create_super(Camera2);
        function Camera2(zFar, zNear, fieldOfView) {
          _class_call_check(this, Camera2);
          var _this;
          _this = _super.call(this);
          _this.zFar = zFar;
          _this.zNear = zNear;
          _this.fieldOfView = fieldOfView;
          return _this;
        }
        _create_class(Camera2, [
          {
            key: "getZFar",
            value: function getZFar() {
              return this.zFar;
            }
          },
          {
            key: "getZNear",
            value: function getZNear() {
              return this.zNear;
            }
          },
          {
            key: "getFieldOfView",
            value: function getFieldOfView() {
              return this.fieldOfView;
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var _Element;
              var _properties_fieldOfView = properties.fieldOfView, fieldOfView = _properties_fieldOfView === void 0 ? _defaults.DEFAULT_FIELD_OF_VIEW : _properties_fieldOfView;
              fieldOfView *= _constants.DEGREES_TO_RADIANS_MULTIPLIER;
              var _properties_zFar = properties.zFar, zFar = _properties_zFar === void 0 ? _defaults.DEFAULT_Z_FAR : _properties_zFar, _properties_zNear = properties.zNear, zNear = _properties_zNear === void 0 ? _defaults.DEFAULT_Z_NEAR : _properties_zNear, camera = (_Element = _element.default).fromProperties.apply(_Element, [
                Class,
                properties,
                zFar,
                zNear,
                fieldOfView
              ].concat(_to_consumable_array(remainingArguments)));
              return camera;
            }
          }
        ]);
        return Camera2;
      }(_wrap_native_super(_element.default));
    }
  });

  // lib/eventTypes.js
  var require_eventTypes = __commonJS({
    "lib/eventTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        WHEEL_EVENT_TYPE: function() {
          return WHEEL_EVENT_TYPE;
        },
        KEYUP_EVENT_TYPE: function() {
          return KEYUP_EVENT_TYPE;
        },
        KEYDOWN_EVENT_TYPE: function() {
          return KEYDOWN_EVENT_TYPE;
        },
        MOUSEUP_EVENT_TYPE: function() {
          return MOUSEUP_EVENT_TYPE;
        },
        MOUSEDOWN_EVENT_TYPE: function() {
          return MOUSEDOWN_EVENT_TYPE;
        },
        MOUSEMOVE_EVENT_TYPE: function() {
          return MOUSEMOVE_EVENT_TYPE;
        }
      });
      var WHEEL_EVENT_TYPE = "wheel";
      var KEYUP_EVENT_TYPE = "keyup";
      var KEYDOWN_EVENT_TYPE = "keydown";
      var MOUSEUP_EVENT_TYPE = "mouseup";
      var MOUSEDOWN_EVENT_TYPE = "mousedown";
      var MOUSEMOVE_EVENT_TYPE = "mousemove";
    }
  });

  // lib/miscellaneous/keyEvents.js
  var require_keyEvents = __commonJS({
    "lib/miscellaneous/keyEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return KeyEvents;
        }
      });
      var _necessary = require_browser();
      var _eventTypes = require_eventTypes();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _define_property(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE;
      var SHIFT_KEY_CODE = _necessary.keyCodes.SHIFT_KEY_CODE;
      var KeyEvents = /* @__PURE__ */ function() {
        function KeyEvents2(handlers, shiftKeyDown) {
          var _this = this;
          _class_call_check(this, KeyEvents2);
          _define_property(this, "keyUpEventListener", function(event) {
            var keyCode = event.keyCode;
            if (keyCode === SHIFT_KEY_CODE) {
              _this.shiftKeyDown = false;
              _this.handlers.forEach(function(handler) {
                handler(_this.shiftKeyDown);
              });
            }
          });
          _define_property(this, "keyDownEventListener", function(event) {
            var keyCode = event.keyCode;
            if (keyCode === SHIFT_KEY_CODE) {
              _this.shiftKeyDown = true;
              _this.handlers.forEach(function(handler) {
                handler(_this.shiftKeyDown);
              });
            }
          });
          this.handlers = handlers;
          this.shiftKeyDown = shiftKeyDown;
        }
        _create_class(KeyEvents2, [
          {
            key: "getHandlers",
            value: function getHandlers() {
              return this.handlers;
            }
          },
          {
            key: "isShiftKeyDown",
            value: function isShiftKeyDown() {
              return this.shiftKeyDown;
            }
          },
          {
            key: "addShiftKeyHandler",
            value: function addShiftKeyHandler(shiftKeyHandler) {
              var handler = shiftKeyHandler;
              this.handlers.push(handler);
            }
          },
          {
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
              var documentDOMElement = document.documentElement;
              documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, function(event) {
                var keyCode = event.keyCode;
                if (keyCode === ESCAPE_KEY_CODE) {
                  escapeKeyDownHandler();
                }
              });
            }
          },
          {
            key: "initialise",
            value: function initialise() {
              var documentDOMElement = document.documentElement;
              documentDOMElement.addEventListener(_eventTypes.KEYUP_EVENT_TYPE, this.keyUpEventListener);
              documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, this.keyDownEventListener);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlers = [], shiftKeyDown = false, keyEvents = new KeyEvents2(handlers, shiftKeyDown);
              return keyEvents;
            }
          }
        ]);
        return KeyEvents2;
      }();
    }
  });

  // lib/miscellaneous/mouseEvents.js
  var require_mouseEvents = __commonJS({
    "lib/miscellaneous/mouseEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return MouseEvents;
        }
      });
      var _eventTypes = require_eventTypes();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _define_property(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var MouseEvents = /* @__PURE__ */ function() {
        function MouseEvents2(handlersMap, mouseDown) {
          var _this = this;
          _class_call_check(this, MouseEvents2);
          _define_property(this, "wheelEventListener", function(event) {
            var handlers = _this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
            handlers.forEach(function(handler) {
              handler(mouseWheelDelta);
            });
            event.preventDefault();
          });
          _define_property(this, "mouseEventListener", function(event, eventType) {
            var handlers = _this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
            handlers.forEach(function(handler) {
              handler(mouseCoordinates, _this.mouseDown);
            });
            event.preventDefault();
          });
          _define_property(this, "mouseUpEventListener", function(event) {
            _this.mouseDown = false;
            _this.mouseEventListener(event, _eventTypes.MOUSEUP_EVENT_TYPE);
          });
          _define_property(this, "mouseDownEventListener", function(event) {
            _this.mouseDown = true;
            _this.mouseEventListener(event, _eventTypes.MOUSEDOWN_EVENT_TYPE);
          });
          _define_property(this, "mouseMoveEventListener", function(event) {
            _this.mouseEventListener(event, _eventTypes.MOUSEMOVE_EVENT_TYPE);
          });
          this.handlersMap = handlersMap;
          this.mouseDown = mouseDown;
        }
        _create_class(MouseEvents2, [
          {
            key: "addMouseUpHandler",
            value: function addMouseUpHandler(mouseUpHandler) {
              var mouseUpHandlers = this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE];
              mouseUpHandlers.push(mouseUpHandler);
            }
          },
          {
            key: "addMouseDownHandler",
            value: function addMouseDownHandler(mouseDownHandler) {
              var mouseDownHandlers = this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE];
              mouseDownHandlers.push(mouseDownHandler);
            }
          },
          {
            key: "addMouseMoveHandler",
            value: function addMouseMoveHandler(mouseMoveHandler) {
              var mouseMoveHandlers = this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE];
              mouseMoveHandlers.push(mouseMoveHandler);
            }
          },
          {
            key: "addMouseWheelHandler",
            value: function addMouseWheelHandler(mouseWheelHandler) {
              var mouseWheelHandlers = this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE];
              mouseWheelHandlers.push(mouseWheelHandler);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas) {
              var canvasDOMElement = canvas.getDOMElement();
              this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE] = [];
              canvasDOMElement.addEventListener(_eventTypes.WHEEL_EVENT_TYPE, this.wheelEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEUP_EVENT_TYPE, this.mouseUpEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEDOWN_EVENT_TYPE, this.mouseDownEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEMOVE_EVENT_TYPE, this.mouseMoveEventListener);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlersMap = {}, mouseDown = false, mouseEvents = new MouseEvents2(handlersMap, mouseDown);
              return mouseEvents;
            }
          }
        ]);
        return MouseEvents2;
      }();
      function mouseWheelDeltaFromEvent(event) {
        var wheelDelta = event.wheelDelta, mouseWheelDelta = Math.max(-1, Math.min(1, wheelDelta));
        return mouseWheelDelta;
      }
      function mouseCoordinatesFromEvent(event) {
        var target = event.target, clientX = event.clientX, clientY = event.clientY, canvasDOMElement = target, boundingClientRect = canvasDOMElement.getBoundingClientRect(), top = boundingClientRect.top, left = boundingClientRect.left, mouseCoordinates = [
          clientX - left,
          top - clientY
        ];
        return mouseCoordinates;
      }
    }
  });

  // lib/miscellaneous/userInput.js
  var require_userInput = __commonJS({
    "lib/miscellaneous/userInput.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return UserInput;
        }
      });
      var _keyEvents = /* @__PURE__ */ _interop_require_default(require_keyEvents());
      var _mouseEvents = /* @__PURE__ */ _interop_require_default(require_mouseEvents());
      var _vector = require_vector();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var UserInput = /* @__PURE__ */ function() {
        function UserInput2(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
          _class_call_check(this, UserInput2);
          this.handlers = handlers;
          this.keyEvents = keyEvents;
          this.mouseEvents = mouseEvents;
          this.mouseCoordinates = mouseCoordinates;
          this.previousMouseCoordinates = previousMouseCoordinates;
        }
        _create_class(UserInput2, [
          {
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
              this.previousMouseCoordinates = this.mouseCoordinates;
              this.mouseCoordinates = mouseCoordinates;
              if (this.previousMouseCoordinates === null) {
                return;
              }
              if (mouseDown) {
                var mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.subtract2)(this.mouseCoordinates, this.previousMouseCoordinates);
                this.handlers.forEach(function(handler) {
                  handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                });
              }
            }
          },
          {
            key: "mouseWheelHandler",
            value: function mouseWheelHandler(mouseWheelDelta, canvas) {
              var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector.zero2)();
              this.handlers.forEach(function(handler) {
                handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
              });
            }
          },
          {
            key: "addUserInputHandler",
            value: function addUserInputHandler(userInputHandler) {
              var handler = userInputHandler;
              this.handlers.push(handler);
            }
          },
          {
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
              this.keyEvents.addEscapeKeyDownHandler(escapeKeyDownHandler);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas) {
              var mouseMoveHandler = this.mouseMoveHandler.bind(this), mouseWheelHandler = this.mouseWheelHandler.bind(this);
              this.keyEvents.initialise();
              this.mouseEvents.initialise(canvas);
              this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);
              this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlers = [], keyEvents = _keyEvents.default.fromNothing(), mouseEvents = _mouseEvents.default.fromNothing(), mouseCoordinates = null, previousMouseCoordinates = null, userInput = new UserInput2(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);
              return userInput;
            }
          }
        ]);
        return UserInput2;
      }();
    }
  });

  // lib/element/scene.js
  var require_scene = __commonJS({
    "lib/element/scene.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Scene;
        }
      });
      var _part = /* @__PURE__ */ _interop_require_default(require_part());
      var _camera = /* @__PURE__ */ _interop_require_default(require_camera());
      var _element = /* @__PURE__ */ _interop_require_default(require_element());
      var _userInput = /* @__PURE__ */ _interop_require_default(require_userInput());
      var _vector = require_vector();
      var _defaults = require_defaults();
      var _element1 = require_element2();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _construct(Parent, args, Class) {
        if (_is_native_reflect_construct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function construct(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _set_prototype_of(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _define_property(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _is_native_function(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _wrap_native_super(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrap_native_super = function wrapNativeSuper(Class2) {
          if (Class2 === null || !_is_native_function(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _get_prototype_of(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _set_prototype_of(Wrapper, Class2);
        };
        return _wrap_native_super(Class);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var Scene = /* @__PURE__ */ function(Element) {
        _inherits(Scene2, Element);
        var _super = _create_super(Scene2);
        function Scene2(parts, camera, canvas) {
          _class_call_check(this, Scene2);
          var _this;
          _this = _super.call(this);
          _define_property(_assert_this_initialized(_this), "escapeKeyDownHandler", function() {
            _this.camera.reset();
            _this.windowResizeHandler();
          });
          _define_property(_assert_this_initialized(_this), "windowResizeHandler", function() {
            var clientWidth = _this.canvas.getClientWidth(), clientHeight = _this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
            _this.canvas.resize(width, height);
            var relativeMouseCoordinates = (0, _vector.zero2)(), mouseWheelDelta = 0, shiftKeyDown = false;
            _this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
          });
          _define_property(_assert_this_initialized(_this), "userInputHandler", function(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
            var render = _this.render.bind(_assert_this_initialized(_this));
            _this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, _this.canvas, render);
          });
          _this.parts = parts;
          _this.camera = camera;
          _this.canvas = canvas;
          return _this;
        }
        _create_class(Scene2, [
          {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
              var userInput = _userInput.default.fromNothing();
              this.parts.forEach(function(part) {
                part.initialise(canvas, marginOfError);
              });
              userInput.initialise(canvas);
              userInput.addUserInputHandler(this.userInputHandler);
              userInput.addEscapeKeyDownHandler(this.escapeKeyDownHandler);
              window.onresize = this.windowResizeHandler;
              this.windowResizeHandler();
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              var _this = this;
              this.canvas.clear();
              this.parts.forEach(function(part) {
                part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, _this.canvas);
              });
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var canvas = properties.canvas, childElements = properties.childElements, parts = (0, _element1.elementsFromChildElements)(childElements, _part.default), camera = (0, _element1.elementFromChildElements)(childElements, _camera.default), scene = _element.default.fromProperties(Scene2, properties, parts, camera, canvas), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
              scene.initialise(canvas, marginOfError);
              return scene;
            }
          }
        ]);
        return Scene2;
      }(_wrap_native_super(_element.default));
    }
  });

  // lib/utilities/offsets.js
  var require_offsets = __commonJS({
    "lib/utilities/offsets.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "relativeOffsetsFromAnglesAndDirections", {
        enumerable: true,
        get: function() {
          return relativeOffsetsFromAnglesAndDirections;
        }
      });
      var _matrix = require_matrix3();
      var _vector = require_vector();
      function relativeOffsetsFromAnglesAndDirections(angles, directions) {
        angles = (0, _vector.reflect3)(angles);
        var reverseOrder = true, rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles, reverseOrder);
        var relativeOffsets = (0, _vector.transform4)(directions, rotationsMatrix);
        relativeOffsets = (0, _vector.truncate4)(relativeOffsets);
        return relativeOffsets;
      }
    }
  });

  // lib/miscellaneous/pan.js
  var require_pan = __commonJS({
    "lib/miscellaneous/pan.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Pan;
        }
      });
      var _vector = require_vector();
      var _offsets = require_offsets();
      var _constants = require_constants();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      var Pan = /* @__PURE__ */ function() {
        function Pan2(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
          _class_call_check(this, Pan2);
          this.offsets = offsets;
          this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
          this.relativeMouseCoordinatesMultiplier = relativeMouseCoordinatesMultiplier;
        }
        _create_class(Pan2, [
          {
            key: "getOffsets",
            value: function getOffsets() {
              return this.offsets;
            }
          },
          {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
              return this.mouseWheelDeltaMultiplier;
            }
          },
          {
            key: "getRelativeMouseCoordinatesMultiplier",
            value: function getRelativeMouseCoordinatesMultiplier() {
              return this.relativeMouseCoordinatesMultiplier;
            }
          },
          {
            key: "updateOffsets",
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles) {
              mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier;
              relativeMouseCoordinates = (0, _vector.scale2)(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier);
              var scaledReflectedRelativeMouseCoordinates = (0, _vector.reflect2)((0, _vector.scale2)(relativeMouseCoordinates, 1)), directions = _to_consumable_array(scaledReflectedRelativeMouseCoordinates).concat([
                mouseWheelDelta,
                0
              ]), relativeOffsets = (0, _offsets.relativeOffsetsFromAnglesAndDirections)(angles, directions, 1);
              this.offsets = (0, _vector.add3)(this.offsets, relativeOffsets);
            }
          }
        ], [
          {
            key: "fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity",
            value: function fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity) {
              var offsets = initialOffsets, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, relativeMouseCoordinatesMultiplier = _constants.RELATIVE_MOUSE_COORDINATES_MULTIPLIER * mouseSensitivity, pan = new Pan2(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
              return pan;
            }
          }
        ]);
        return Pan2;
      }();
    }
  });

  // lib/miscellaneous/tilt.js
  var require_tilt = __commonJS({
    "lib/miscellaneous/tilt.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Tilt;
        }
      });
      var _constants = require_constants();
      var _vector = require_vector();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      var Tilt = /* @__PURE__ */ function() {
        function Tilt2(angles, clockwise) {
          _class_call_check(this, Tilt2);
          this.angles = angles;
          this.clockwise = clockwise;
        }
        _create_class(Tilt2, [
          {
            key: "getAngles",
            value: function getAngles() {
              return this.angles;
            }
          },
          {
            key: "isClockwise",
            value: function isClockwise() {
              return this.clockwise;
            }
          },
          {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
              relativeMouseCoordinates = (0, _vector.scale2)(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER);
              var multiplier = this.clockwise ? 1 : -1, matrix = [
                0,
                +multiplier,
                0,
                -multiplier,
                0,
                0,
                0,
                0,
                0
              ], relativeAngles = (0, _vector.transform3)(_to_consumable_array(relativeMouseCoordinates).concat([
                0
              ]), matrix);
              this.angles = (0, _vector.add3)(this.angles, relativeAngles);
            }
          }
        ], [
          {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
              var angles = _to_consumable_array(initialAngles).concat([
                0
              ]), clockwise = false, tilt = new Tilt2(angles, clockwise);
              return tilt;
            }
          },
          {
            key: "fromInitialAnglesAndClockwise",
            value: function fromInitialAnglesAndClockwise(initialAngles, clockwise) {
              var angles = _to_consumable_array(initialAngles).concat([
                0
              ]), tilt = new Tilt2(angles, clockwise);
              return tilt;
            }
          }
        ]);
        return Tilt2;
      }();
    }
  });

  // lib/utilities/localStorage.js
  var require_localStorage = __commonJS({
    "lib/utilities/localStorage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        getJSON: function() {
          return getJSON;
        },
        setJSON: function() {
          return setJSON;
        },
        removeJSON: function() {
          return removeJSON;
        }
      });
      function getJSON(key) {
        var json = null;
        var value = get(key);
        if (value !== null) {
          json = JSON.parse(value);
        }
        return json;
      }
      function setJSON(key, json) {
        var value = JSON.stringify(json);
        set(key, value);
      }
      function removeJSON(key) {
        remove(key);
      }
      function get(kay) {
        var value = localStorage.getItem(kay) || null;
        return value;
      }
      function set(kay, value) {
        localStorage.setItem(kay, value);
      }
      function remove(key) {
        localStorage.removeItem(key);
      }
    }
  });

  // lib/element/camera/gaming.js
  var require_gaming = __commonJS({
    "lib/element/camera/gaming.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return GamingCamera;
        }
      });
      var _pan = /* @__PURE__ */ _interop_require_default(require_pan());
      var _tilt = /* @__PURE__ */ _interop_require_default(require_tilt());
      var _camera = /* @__PURE__ */ _interop_require_default(require_camera());
      var _vector = require_vector();
      var _localStorage = require_localStorage();
      var _constants = require_constants();
      var _defaults = require_defaults();
      var _matrix = require_matrix3();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var GamingCamera = /* @__PURE__ */ function(Camera) {
        _inherits(GamingCamera2, Camera);
        var _super = _create_super(GamingCamera2);
        function GamingCamera2(zFar, zNear, fieldOfView, pan, tilt, persist) {
          _class_call_check(this, GamingCamera2);
          var _this;
          _this = _super.call(this, zFar, zNear, fieldOfView);
          _this.pan = pan;
          _this.tilt = tilt;
          _this.persist = persist;
          return _this;
        }
        _create_class(GamingCamera2, [
          {
            key: "getPan",
            value: function getPan() {
              return this.pan;
            }
          },
          {
            key: "getTilt",
            value: function getTilt() {
              return this.tilt;
            }
          },
          {
            key: "doesPersist",
            value: function doesPersist() {
              return this.persist;
            }
          },
          {
            key: "reset",
            value: function reset() {
              var key = _constants.GAMING_CAMERA;
              (0, _localStorage.removeJSON)(key);
              this.pan = panFromProperties(this.properties);
              this.tilt = tiltFromProperties(this.properties);
            }
          },
          {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
              var mouseWheelMoved = mouseWheelDelta !== 0;
              if (false) {
              } else if (shiftKeyDown || mouseWheelMoved) {
                var angles = this.tilt.getAngles();
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
              } else {
                this.tilt.updateAngles(relativeMouseCoordinates);
              }
              var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets();
              if (persist) {
                var key = _constants.GAMING_CAMERA, angles2 = this.tilt.getAngles(), json = {
                  angles: angles2,
                  offsets
                };
                (0, _localStorage.setJSON)(key, json);
              }
              var offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets), positionMatrix = (0, _matrix.positionMatrixFromNothing)(), rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles1), projectionMatrix = (0, _matrix.projectionMatrixFromCameraAndCanvas)(camera, canvas), normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
              render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), gamingCamera = _camera.default.fromProperties(GamingCamera2, properties, pan, tilt, persist);
              return gamingCamera;
            }
          }
        ]);
        return GamingCamera2;
      }(_camera.default);
      function panFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _properties_mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _properties_mouseSensitivity, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
        var _properties_initialPosition = properties.initialPosition, initialPosition = _properties_initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _properties_initialPosition;
        var initialOffsets = (0, _vector.scale3)(initialPosition, _constants.INVERT_MULTIPLIER);
        if (persist) {
          var key = _constants.GAMING_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets;
          }
        }
        var pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
        return pan;
      }
      function tiltFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist;
        var _properties_initialAngles = properties.initialAngles, initialAngles = _properties_initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _properties_initialAngles;
        initialAngles = (0, _vector.scale2)(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
        if (persist) {
          var key = _constants.GAMING_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var angles = json.angles;
            initialAngles = angles;
          }
        }
        var clockwise = true, tilt = _tilt.default.fromInitialAnglesAndClockwise(initialAngles, clockwise);
        return tilt;
      }
    }
  });

  // lib/miscellaneous/zoom.js
  var require_zoom = __commonJS({
    "lib/miscellaneous/zoom.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Zoom;
        }
      });
      var _constants = require_constants();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Zoom = /* @__PURE__ */ function() {
        function Zoom2(distance, minimumDistance, mouseWheelDeltaMultiplier) {
          _class_call_check(this, Zoom2);
          this.distance = distance;
          this.minimumDistance = minimumDistance;
          this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
        }
        _create_class(Zoom2, [
          {
            key: "getDistance",
            value: function getDistance() {
              return this.distance;
            }
          },
          {
            key: "getMinimumDistance",
            value: function getMinimumDistance() {
              return this.minimumDistance;
            }
          },
          {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
              return this.mouseWheelDeltaMultiplier;
            }
          },
          {
            key: "updateDistance",
            value: function updateDistance(mouseWheelDelta) {
              mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier;
              this.distance = this.distance - mouseWheelDelta;
              this.distance = Math.max(this.minimumDistance, this.distance);
            }
          }
        ], [
          {
            key: "fromInitialDistanceAndMouseWheelSensitivity",
            value: function fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity) {
              var distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, zoom = new Zoom2(distance, minimumDistance, mouseWheelDeltaMultiplier);
              return zoom;
            }
          }
        ]);
        return Zoom2;
      }();
    }
  });

  // lib/element/camera/design.js
  var require_design = __commonJS({
    "lib/element/camera/design.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return DesignCamera;
        }
      });
      var _pan = /* @__PURE__ */ _interop_require_default(require_pan());
      var _tilt = /* @__PURE__ */ _interop_require_default(require_tilt());
      var _zoom = /* @__PURE__ */ _interop_require_default(require_zoom());
      var _camera = /* @__PURE__ */ _interop_require_default(require_camera());
      var _vector = require_vector();
      var _localStorage = require_localStorage();
      var _constants = require_constants();
      var _defaults = require_defaults();
      var _matrix = require_matrix3();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var DesignCamera = /* @__PURE__ */ function(Camera) {
        _inherits(DesignCamera2, Camera);
        var _super = _create_super(DesignCamera2);
        function DesignCamera2(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
          _class_call_check(this, DesignCamera2);
          var _this;
          _this = _super.call(this, zFar, zNear, fieldOfView);
          _this.pan = pan;
          _this.tilt = tilt;
          _this.zoom = zoom;
          _this.persist = persist;
          return _this;
        }
        _create_class(DesignCamera2, [
          {
            key: "getPan",
            value: function getPan() {
              return this.pan;
            }
          },
          {
            key: "getTilt",
            value: function getTilt() {
              return this.tilt;
            }
          },
          {
            key: "getZoom",
            value: function getZoom() {
              return this.zoom;
            }
          },
          {
            key: "doesPersist",
            value: function doesPersist() {
              return this.persist;
            }
          },
          {
            key: "reset",
            value: function reset() {
              var key = _constants.DESIGN_CAMERA;
              (0, _localStorage.removeJSON)(key);
              this.pan = panFromProperties(this.properties);
              this.tilt = tiltFromProperties(this.properties);
              this.zoom = zoomFromProperties(this.properties);
            }
          },
          {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
              var mouseWheelMoved = mouseWheelDelta !== 0;
              if (false) {
              } else if (shiftKeyDown) {
                var angles = this.tilt.getAngles();
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
              } else if (mouseWheelMoved) {
                this.zoom.updateDistance(mouseWheelDelta);
              } else {
                this.tilt.updateAngles(relativeMouseCoordinates);
              }
              var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance();
              if (persist) {
                var key = _constants.DESIGN_CAMERA, json = {
                  angles: angles1,
                  offsets,
                  distance
                };
                (0, _localStorage.setJSON)(key, json);
              }
              var offsetsMatrix = (0, _matrix.offsetsMatrixFromOffsets)(offsets), positionMatrix = (0, _matrix.positionMatrixFromDistance)(distance), rotationsMatrix = (0, _matrix.rotationsMatrixFromAngles)(angles1), projectionMatrix = (0, _matrix.projectionMatrixFromCameraAndCanvas)(camera, canvas), normalsMatrix = (0, _matrix.normalsMatrixFromRotationsMatrix)(rotationsMatrix);
              render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), zoom = zoomFromProperties(properties), designCamera = _camera.default.fromProperties(DesignCamera2, properties, pan, tilt, zoom, persist);
              return designCamera;
            }
          }
        ]);
        return DesignCamera2;
      }(_camera.default);
      function panFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _properties_mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _properties_mouseSensitivity, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
        var _properties_initialOffsets = properties.initialOffsets, initialOffsets = _properties_initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _properties_initialOffsets;
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets;
          }
        }
        var pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
        return pan;
      }
      function tiltFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist;
        var _properties_initialAngles = properties.initialAngles, initialAngles = _properties_initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _properties_initialAngles;
        initialAngles = (0, _vector.scale2)(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var angles = json.angles;
            initialAngles = angles;
          }
        }
        var tilt = _tilt.default.fromInitialAngles(initialAngles);
        return tilt;
      }
      function zoomFromProperties(properties) {
        var _properties_persist = properties.persist, persist = _properties_persist === void 0 ? _defaults.DEFAULT_PERSIST : _properties_persist, _properties_mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _properties_mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _properties_mouseWheelSensitivity;
        var _properties_initialDistance = properties.initialDistance, initialDistance = _properties_initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _properties_initialDistance;
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage.getJSON)(key);
          if (json !== null) {
            var distance = json.distance;
            initialDistance = distance;
          }
        }
        var zoom = _zoom.default.fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity);
        return zoom;
      }
    }
  });

  // lib/utilities/preload.js
  var require_preload = __commonJS({
    "lib/utilities/preload.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        preloadImages: function() {
          return preloadImages;
        },
        preloadImageMap: function() {
          return preloadImageMap;
        },
        default: function() {
          return _default;
        }
      });
      var _necessary = require_browser();
      var _constants = require_constants();
      var forEach = _necessary.asynchronousUtilities.forEach;
      function preloadImages(host, imageNames, imageDirectoryURI, callback) {
        var done = function done2() {
          var images2 = context.images;
          callback(images2, imageNames);
        };
        var images = [], context = {
          images
        };
        forEach(imageNames, function(imageName, next, done2, context2) {
          var onload = function onload2() {
            images.push(image);
            next();
          };
          var src = "".concat(host).concat(imageDirectoryURI, "/").concat(imageName), image = new Image(), crossOrigin = _constants.ANONYMOUS;
          Object.assign(image, {
            src,
            onload,
            crossOrigin
          });
        }, done, context);
      }
      function preloadImageMap(host, imageMapURI, imageMapJSON, callback) {
        var onload = function onload2(event) {
          callback(imageMap, imageMapJSON);
        };
        var src = "".concat(host).concat(imageMapURI), imageMap = new Image(), crossOrigin = _constants.ANONYMOUS;
        Object.assign(imageMap, {
          src,
          onload,
          crossOrigin
        });
      }
      var _default = {
        preloadImages,
        preloadImageMap
      };
    }
  });

  // lib/primitive/normal.js
  var require_normal = __commonJS({
    "lib/primitive/normal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Normal;
        }
      });
      var _array = require_array2();
      var _vector = require_vector();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Normal = /* @__PURE__ */ function() {
        function Normal2(extent) {
          _class_call_check(this, Normal2);
          this.extent = extent;
        }
        _create_class(Normal2, [
          {
            key: "getExtent",
            value: function getExtent() {
              return this.extent;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var extent = cloneExtent(this.extent), normal = new Normal2(extent);
              return normal;
            }
          }
        ], [
          {
            key: "fromVertices",
            value: function fromVertices(vertices) {
              var firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = (0, _vector.subtract3)(secondPosition, firstPosition), secondExtent = (0, _vector.subtract3)(thirdPosition, firstPosition), extent = (0, _vector.normalise3)((0, _vector.cross3)(firstExtent, secondExtent)), normal = new Normal2(extent);
              return normal;
            }
          }
        ]);
        return Normal2;
      }();
      function cloneExtent(extent) {
        return extent.slice();
      }
    }
  });

  // lib/primitive/vertex.js
  var require_vertex = __commonJS({
    "lib/primitive/vertex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Vertex;
        }
      });
      var _rotation = require_rotation();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Vertex = /* @__PURE__ */ function() {
        function Vertex2(position) {
          _class_call_check(this, Vertex2);
          this.position = position;
        }
        _create_class(Vertex2, [
          {
            key: "getPosition",
            value: function getPosition() {
              return this.position;
            }
          },
          {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
              this.position = (0, _rotation.rotatePosition)(this.position, rotationQuaternion);
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              this.position = transform(this.position);
            }
          },
          {
            key: "clone",
            value: function clone() {
              var position = this.position.slice(), vertex = new Vertex2(position);
              return vertex;
            }
          }
        ], [
          {
            key: "fromPosition",
            value: function fromPosition(position) {
              var vertex = new Vertex2(position);
              return vertex;
            }
          },
          {
            key: "fromCoordinateTuple",
            value: function fromCoordinateTuple(coordinateTuple) {
              var position = coordinateTuple.slice(), vertex = new Vertex2(position);
              return vertex;
            }
          }
        ]);
        return Vertex2;
      }();
    }
  });

  // lib/utilities/facet.js
  var require_facet = __commonJS({
    "lib/utilities/facet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        cloneEdges: function() {
          return cloneEdges;
        },
        cloneNormal: function() {
          return cloneNormal;
        },
        cloneVertices: function() {
          return cloneVertices;
        },
        calculateEdges: function() {
          return calculateEdges;
        },
        calculateNormal: function() {
          return calculateNormal;
        },
        calculateArea: function() {
          return calculateArea;
        }
      });
      var _constants = require_constants();
      var _array = require_array2();
      var _vector = require_vector();
      function cloneEdges(edges) {
        edges = edges.map(function(edge) {
          edge = edge.clone();
          return edge;
        });
        return edges;
      }
      function cloneNormal(normal) {
        normal = normal.clone();
        return normal;
      }
      function cloneVertices(vertices) {
        vertices = vertices.map(function(vertex) {
          vertex = vertex.clone();
          return vertex;
        });
        return vertices;
      }
      function calculateEdges(vertices, Edge) {
        var edges = vertices.map(function(vertex, index) {
          var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], edge = Edge.fromStartVertexAndEndVertex(startVertex, endVertex);
          return edge;
        });
        return edges;
      }
      function calculateNormal(vertices, Normal) {
        var normal = Normal.fromVertices(vertices);
        return normal;
      }
      function calculateArea(vertices) {
        var firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstExtent = (0, _vector.subtract3)(secondVertexPosition, firstVertexPosition), secondExtent = (0, _vector.subtract3)(thirdVertexPosition, firstVertexPosition), area = (0, _vector.length3)((0, _vector.cross3)(firstExtent, secondExtent)) / 2;
        return area;
      }
    }
  });

  // lib/primitive/facet.js
  var require_facet2 = __commonJS({
    "lib/primitive/facet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return Facet;
        }
      });
      var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
      var _normal = /* @__PURE__ */ _interop_require_default(require_normal());
      var _vertex = /* @__PURE__ */ _interop_require_default(require_vertex());
      var _array = require_array2();
      var _constants = require_constants();
      var _facet = require_facet();
      var _midPoint = require_midPoint();
      var _intersection = require_intersection();
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Facet = /* @__PURE__ */ function() {
        function Facet2(vertices, normal, edges) {
          _class_call_check(this, Facet2);
          this.vertices = vertices;
          this.normal = normal;
          this.edges = edges;
        }
        _create_class(Facet2, [
          {
            key: "getVertices",
            value: function getVertices() {
              return this.vertices;
            }
          },
          {
            key: "getNormal",
            value: function getNormal() {
              return this.normal;
            }
          },
          {
            key: "getEdges",
            value: function getEdges() {
              return this.edges;
            }
          },
          {
            key: "getVertexPositions",
            value: function getVertexPositions() {
              var vertexPositions = this.vertices.map(function(vertex) {
                var vertexPosition = vertex.getPosition();
                return vertexPosition;
              });
              return vertexPositions;
            }
          },
          {
            key: "getVertexNormals",
            value: function getVertexNormals() {
              var normalExtent = this.normal.getExtent(), vertexNormal = normalExtent, vertexNormals = [
                vertexNormal,
                vertexNormal,
                vertexNormal
              ];
              return vertexNormals;
            }
          },
          {
            key: "getVertexIndexes",
            value: function getVertexIndexes(index) {
              var vertexIndex = index * 3, vertexIndexes = [
                vertexIndex + 0,
                vertexIndex + 1,
                vertexIndex + 2
              ];
              return vertexIndexes;
            }
          },
          {
            key: "isMasked",
            value: function isMasked(maskingFacet) {
              var maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = (0, _midPoint.calculateMidPointPosition)(this.vertices), midPointPositionToOneSideOfMaskingEdges = (0, _midPoint.isMidPointPositionToOneSideOfMaskingEdges)(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges;
              return masked;
            }
          },
          {
            key: "permute",
            value: function permute(places) {
              this.vertices = (0, _array.permute)(this.vertices, places);
              this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
              this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
          },
          {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
              this.vertices.forEach(function(vertex) {
                vertex.rotate(rotationQuaternion);
              });
              this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
              this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              this.vertices.forEach(function(vertex) {
                vertex.applyTransform(transform);
              });
              this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
              this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
          },
          {
            key: "splitWithIntersections",
            value: function splitWithIntersections(intersections, smallerFacets, marginOfError) {
              var nonNullIntersections = (0, _intersection.calculateNonNullIntersections)(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
              switch (nonNullIntersectionsLength) {
                case 2:
                  this.splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError);
                  break;
                case 1:
                  this.splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError);
                  break;
                case 0:
                  this.splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError);
                  break;
              }
            }
          },
          {
            key: "splitWithTwoNonNullIntersections",
            value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError) {
              var nullIntersectionIndex = (0, _intersection.calculateNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
              intersections = (0, _array.permute)(intersections, places);
              intersections = intersections.slice(1);
              this.permute(places);
              var startVertexPositionIndexes = [
                1,
                2
              ], endVertexPositionIndexes = [
                2,
                0
              ], indexTuples = [
                [
                  0,
                  1,
                  3
                ],
                [
                  3,
                  4,
                  0
                ],
                [
                  3,
                  2,
                  4
                ]
              ];
              this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitWithOneNonNullIntersection",
            value: function splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError) {
              var nonNullIntersectionIndex = (0, _intersection.calculateNonNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
              intersections = (0, _array.permute)(intersections, places);
              intersections = intersections.slice(0, 1);
              this.permute(places);
              var startVertexPositionIndexes = [
                0
              ], endVertexPositionIndexes = [
                1
              ], indexTuples = [
                [
                  0,
                  3,
                  2
                ],
                [
                  3,
                  1,
                  2
                ]
              ];
              this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitWithNoNonNullIntersections",
            value: function splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError) {
              var smallerFacet = this.fromVerticesAndMarginOfError(this.vertices, marginOfError);
              smallerFacets.push(smallerFacet);
            }
          },
          {
            key: "splitWithIndexTuplesAndIntersections",
            value: function splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError) {
              var _this = this;
              var vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map(function(intersection, index) {
                var startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = (0, _intersection.calculateIntermediateVertexPosition)(startVertexPosition, endVertexPosition, intersection);
                return intermediateVertexPosition;
              });
              (0, _array.push)(vertexPositions, intermediateVertexPositions);
              indexTuples.forEach(function(indexTuple) {
                var positions = vertexPositions, indexes = indexTuple, facet = _this, smallerFacet = smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError);
                if (smallerFacet !== null) {
                  smallerFacets.push(smallerFacet);
                }
              });
            }
          }
        ]);
        return Facet2;
      }();
      function smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError) {
        var vertices = indexes.map(function(index) {
          var position = positions[index];
          position = position.slice();
          var vertex = _vertex.default.fromPosition(position);
          return vertex;
        }), smallerFacet = facet.fromVerticesAndMarginOfError(vertices, marginOfError);
        return smallerFacet;
      }
    }
  });

  // lib/primitive/facet/coloured.js
  var require_coloured = __commonJS({
    "lib/primitive/facet/coloured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColouredFacet;
        }
      });
      var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
      var _facet = /* @__PURE__ */ _interop_require_default(require_facet2());
      var _normal = /* @__PURE__ */ _interop_require_default(require_normal());
      var _vertex = /* @__PURE__ */ _interop_require_default(require_vertex());
      var _approximate = require_approximate();
      var _vertices = require_vertices();
      var _facet1 = require_facet();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var ColouredFacet = /* @__PURE__ */ function(Facet) {
        _inherits(ColouredFacet2, Facet);
        var _super = _create_super(ColouredFacet2);
        function ColouredFacet2(vertices, normal, edges, rgba) {
          _class_call_check(this, ColouredFacet2);
          var _this;
          _this = _super.call(this, vertices, normal, edges);
          _this.rgba = rgba;
          return _this;
        }
        _create_class(ColouredFacet2, [
          {
            key: "getVertexColours",
            value: function getVertexColours() {
              var vertexColour = this.rgba, vertexColours = [
                vertexColour,
                vertexColour,
                vertexColour
              ];
              return vertexColours;
            }
          },
          {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
              var colouredFacet = null;
              var area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
                colouredFacet = new ColouredFacet2(vertices, normal, edges, this.rgba);
              }
              return colouredFacet;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
              vertices = (0, _facet1.cloneVertices)(vertices);
              normal = (0, _facet1.cloneNormal)(normal);
              edges = (0, _facet1.cloneEdges)(edges);
              var colouredFacet = new ColouredFacet2(vertices, normal, edges, this.rgba);
              return colouredFacet;
            }
          }
        ], [
          {
            key: "fromCoordinateTuplesIndexTupleColourAndMarginOfError",
            value: function fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, colour, marginOfError) {
              var colouredFacet = null;
              var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), rgba = _to_consumable_array(colour).concat([
                  1
                ]);
                colouredFacet = new ColouredFacet2(vertices, normal, edges, rgba);
              }
              return colouredFacet;
            }
          }
        ]);
        return ColouredFacet2;
      }(_facet.default);
    }
  });

  // lib/element/canvas/coloured.js
  var require_coloured2 = __commonJS({
    "lib/element/canvas/coloured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColouredCanvasElement;
        }
      });
      var _canvas = /* @__PURE__ */ _interop_require_default(require_canvas2());
      var _coloured = /* @__PURE__ */ _interop_require_default(require_coloured());
      var _array = require_array2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var ColouredCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(ColouredCanvasElement2, CanvasElement);
        var _super = _create_super(ColouredCanvasElement2);
        function ColouredCanvasElement2(maskReference, transform, facets, masks, coordinates, indexes, colour) {
          _class_call_check(this, ColouredCanvasElement2);
          var _this;
          _this = _super.call(this, maskReference, transform, facets, masks);
          _this.coordinates = coordinates;
          _this.indexes = indexes;
          _this.colour = colour;
          return _this;
        }
        _create_class(ColouredCanvasElement2, [
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var _this = this;
              _get(_get_prototype_of(ColouredCanvasElement2.prototype), "createFacets", this).call(this, marginOfError);
              var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets2, indexTuple) {
                var coordinateTuples = _this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, _this.colour, marginOfError), facet = colouredFacet;
                if (facet !== null) {
                  (0, _array.add)(facets2, facet);
                }
                return facets2;
              }, []);
              this.setFacets(facets);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var facets = this.getFacets();
              colourRenderer.addFacets(facets);
              _get(_get_prototype_of(ColouredCanvasElement2.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, colour) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
                remainingArguments[_key - 5] = arguments[_key];
              }
              var _CanvasElement;
              return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                Class,
                properties,
                coordinates,
                indexes,
                colour
              ].concat(_to_consumable_array(remainingArguments)));
            }
          }
        ]);
        return ColouredCanvasElement2;
      }(_canvas.default);
    }
  });

  // lib/utilities/texture.js
  var require_texture5 = __commonJS({
    "lib/utilities/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        cloneTextureCoordinateTuples: function() {
          return cloneTextureCoordinateTuples;
        },
        calculateMappedTextureCoordinateTuples: function() {
          return calculateMappedTextureCoordinateTuples;
        },
        calculateAdjustedTextureCoordinateTuples: function() {
          return calculateAdjustedTextureCoordinateTuples;
        }
      });
      var _vertices = require_vertices();
      var _matrix = require_matrix2();
      var _array = require_array2();
      var _vector = require_vector();
      var _quaternion = require_quaternion();
      function cloneTextureCoordinateTuples(textureCoordinateTuples) {
        textureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          textureCoordinateTuple = textureCoordinateTuple.slice();
          return textureCoordinateTuple;
        });
        return textureCoordinateTuples;
      }
      function calculateMappedTextureCoordinateTuples(textureCoordinateTuples, extent) {
        var left = extent.left, bottom = extent.bottom, width = extent.width, height = extent.height, mappedTextureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          var mappedTextureCoordinateTuple = (0, _vector.add2)((0, _vector.dot2)(textureCoordinateTuple, [
            width,
            height
          ]), [
            left,
            bottom
          ]);
          return mappedTextureCoordinateTuple;
        });
        return mappedTextureCoordinateTuples;
      }
      function calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, textureCoordinateTuples) {
        var arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal), rotationQuaternion = arbitraryRotationQuaternion;
        var rotatedVertices = (0, _vertices.rotateVertices)(vertices, rotationQuaternion);
        parentVertices = (0, _vertices.rotateVertices)(parentVertices, rotationQuaternion);
        vertices = rotatedVertices;
        var firstVertex = (0, _array.first)(vertices), secondVertex = (0, _array.second)(vertices), thirdVertex = (0, _array.third)(vertices), firstParentVertex = (0, _array.first)(parentVertices), secondParentVertex = (0, _array.second)(parentVertices), thirdParentVertex = (0, _array.third)(parentVertices), firstTextureCoordinateTuple = (0, _array.first)(textureCoordinateTuples), secondTextureCoordinateTuple = (0, _array.second)(textureCoordinateTuples), thirdTextureCoordinateTuple = (0, _array.third)(textureCoordinateTuples), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstParentVertexPosition = firstParentVertex.getPosition(), secondParentVertexPosition = secondParentVertex.getPosition(), thirdParentVertexPosition = thirdParentVertex.getPosition(), R1x = firstVertexPosition[0], R1y = firstVertexPosition[1], R2x = secondVertexPosition[0], R2y = secondVertexPosition[1], R3x = thirdVertexPosition[0], R3y = thirdVertexPosition[1], P1x = firstParentVertexPosition[0], P2x = secondParentVertexPosition[0], P3x = thirdParentVertexPosition[0], P1y = firstParentVertexPosition[1], P2y = secondParentVertexPosition[1], P3y = thirdParentVertexPosition[1], P1u = firstTextureCoordinateTuple[0], P1v = firstTextureCoordinateTuple[1], P2u = secondTextureCoordinateTuple[0], P2v = secondTextureCoordinateTuple[1], P3u = thirdTextureCoordinateTuple[0], P3v = thirdTextureCoordinateTuple[1], textureCoordinatesMatrix = (0, _matrix.invert3)([
          1,
          1,
          1,
          P1u,
          P2u,
          P3u,
          P1v,
          P2v,
          P3v
        ]), firstTransformedParentVerticesComponent = (0, _vector.transform3)([
          P1x,
          P2x,
          P3x
        ], textureCoordinatesMatrix), secondTransformedParentVerticesComponent = (0, _vector.transform3)([
          P1y,
          P2y,
          P3y
        ], textureCoordinatesMatrix), Ox = firstTransformedParentVerticesComponent[0], Ux = firstTransformedParentVerticesComponent[1], Vx = firstTransformedParentVerticesComponent[2], Oy = secondTransformedParentVerticesComponent[0], Uy = secondTransformedParentVerticesComponent[1], Vy = secondTransformedParentVerticesComponent[2], transformedParentVerticesMatrix = (0, _matrix.invert2)([
          Ux,
          Uy,
          Vx,
          Vy
        ]), firstAdjustedTextureCoordinate = (0, _vector.transform2)([
          R1x - Ox,
          R1y - Oy
        ], transformedParentVerticesMatrix), secondAdjustedTextureCoordinate = (0, _vector.transform2)([
          R2x - Ox,
          R2y - Oy
        ], transformedParentVerticesMatrix), thirdAdjustedTextureCoordinate = (0, _vector.transform2)([
          R3x - Ox,
          R3y - Oy
        ], transformedParentVerticesMatrix), adjustedTextureCoordinateTuple = [
          firstAdjustedTextureCoordinate,
          secondAdjustedTextureCoordinate,
          thirdAdjustedTextureCoordinate
        ];
        return adjustedTextureCoordinateTuple;
      }
    }
  });

  // lib/primitive/facet/textured.js
  var require_textured = __commonJS({
    "lib/primitive/facet/textured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TexturedFacet;
        }
      });
      var _edge = /* @__PURE__ */ _interop_require_default(require_edge());
      var _facet = /* @__PURE__ */ _interop_require_default(require_facet2());
      var _normal = /* @__PURE__ */ _interop_require_default(require_normal());
      var _vertex = /* @__PURE__ */ _interop_require_default(require_vertex());
      var _array = require_array2();
      var _approximate = require_approximate();
      var _vertices = require_vertices();
      var _facet1 = require_facet();
      var _texture = require_texture5();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var TexturedFacet = /* @__PURE__ */ function(Facet) {
        _inherits(TexturedFacet2, Facet);
        var _super = _create_super(TexturedFacet2);
        function TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples) {
          _class_call_check(this, TexturedFacet2);
          var _this;
          _this = _super.call(this, vertices, normal, edges);
          _this.imageName = imageName;
          _this.textureCoordinateTuples = textureCoordinateTuples;
          return _this;
        }
        _create_class(TexturedFacet2, [
          {
            key: "getImageName",
            value: function getImageName() {
              return this.imageName;
            }
          },
          {
            key: "getTextureCoordinateTuples",
            value: function getTextureCoordinateTuples() {
              return this.textureCoordinateTuples;
            }
          },
          {
            key: "getMappedTextureCoordinateTuples",
            value: function getMappedTextureCoordinateTuples(imageMapJSON) {
              var json = imageMapJSON[this.imageName], extent = json, mappedTextureCoordinateTuples = (0, _texture.calculateMappedTextureCoordinateTuples)(this.textureCoordinateTuples, extent);
              return mappedTextureCoordinateTuples;
            }
          },
          {
            key: "permute",
            value: function permute(places) {
              _get(_get_prototype_of(TexturedFacet2.prototype), "permute", this).call(this, places);
              this.textureCoordinateTuples = (0, _array.permute)(this.textureCoordinateTuples, places);
            }
          },
          {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
              var texturedFacet = null;
              var area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), parentVertices = this.vertices, adjustedTextureCoordinateTuple = (0, _texture.calculateAdjustedTextureCoordinateTuples)(vertices, normal, parentVertices, this.textureCoordinateTuples), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), imageName = this.imageName, textureCoordinateTuples = adjustedTextureCoordinateTuple;
                texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              }
              return texturedFacet;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
              vertices = (0, _facet1.cloneVertices)(vertices);
              normal = (0, _facet1.cloneNormal)(normal);
              edges = (0, _facet1.cloneEdges)(edges);
              var imageName = this.imageName, textureCoordinateTuples = (0, _texture.cloneTextureCoordinateTuples)(this.textureCoordinateTuples), texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              return texturedFacet;
            }
          }
        ], [
          {
            key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError",
            value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, marginOfError) {
              var texturedFacet = null;
              var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
                texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              }
              return texturedFacet;
            }
          }
        ]);
        return TexturedFacet2;
      }(_facet.default);
    }
  });

  // lib/element/canvas/textured.js
  var require_textured2 = __commonJS({
    "lib/element/canvas/textured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TexturedCanvasElement;
        }
      });
      var _canvas = /* @__PURE__ */ _interop_require_default(require_canvas2());
      var _textured = /* @__PURE__ */ _interop_require_default(require_textured());
      var _array = require_array2();
      function _array_like_to_array(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _array_without_holes(arr) {
        if (Array.isArray(arr))
          return _array_like_to_array(arr);
      }
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function get(target2, property2, receiver2) {
            var base = _super_prop_base(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2 || target2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterable_to_array(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _non_iterable_spread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _super_prop_base(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _get_prototype_of(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _to_consumable_array(arr) {
        return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _array_like_to_array(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _array_like_to_array(o, minLen);
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var TexturedCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(TexturedCanvasElement2, CanvasElement);
        var _super = _create_super(TexturedCanvasElement2);
        function TexturedCanvasElement2(maskReference, transform, facets, masks, coordinates, indexes, imageName, textureCoordinates) {
          _class_call_check(this, TexturedCanvasElement2);
          var _this;
          _this = _super.call(this, maskReference, transform, facets, masks);
          _this.coordinates = coordinates;
          _this.indexes = indexes;
          _this.imageName = imageName;
          _this.textureCoordinates = textureCoordinates;
          return _this;
        }
        _create_class(TexturedCanvasElement2, [
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var _this = this;
              _get(_get_prototype_of(TexturedCanvasElement2.prototype), "createFacets", this).call(this, marginOfError);
              var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets2, indexTuple, index) {
                var vertexTextureCoordinateTuples = _this.textureCoordinates[index], coordinateTuples = _this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this.imageName, marginOfError), facet = texturedFacet;
                if (facet !== null) {
                  (0, _array.add)(facets2, facet);
                }
                return facets2;
              }, []);
              this.setFacets(facets);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var facets = this.getFacets();
              textureRenderer.addFacets(facets);
              _get(_get_prototype_of(TexturedCanvasElement2.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
                remainingArguments[_key - 6] = arguments[_key];
              }
              var _CanvasElement;
              return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                Class,
                properties,
                coordinates,
                indexes,
                imageName,
                textureCoordinates
              ].concat(_to_consumable_array(remainingArguments)));
            }
          }
        ]);
        return TexturedCanvasElement2;
      }(_canvas.default);
    }
  });

  // lib/index.js
  var require_lib = __commonJS({
    "lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      function _export(target, all) {
        for (var name in all)
          Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
          });
      }
      _export(exports, {
        Canvas: function() {
          return _canvas.default;
        },
        React: function() {
          return _react.default;
        },
        Mask: function() {
          return _mask.default;
        },
        Part: function() {
          return _part.default;
        },
        Scene: function() {
          return _scene.default;
        },
        Camera: function() {
          return _camera.default;
        },
        GamingCamera: function() {
          return _gaming.default;
        },
        DesignCamera: function() {
          return _design.default;
        },
        CanvasElement: function() {
          return _canvas1.default;
        },
        preloadUtilities: function() {
          return _preload.default;
        },
        ColouredCanvasElement: function() {
          return _coloured.default;
        },
        TexturedCanvasElement: function() {
          return _textured.default;
        },
        vectorMaths: function() {
          return _vector.default;
        },
        matrixMaths: function() {
          return _matrix.default;
        }
      });
      var _canvas = /* @__PURE__ */ _interop_require_default(require_canvas());
      var _react = /* @__PURE__ */ _interop_require_default(require_react());
      var _mask = /* @__PURE__ */ _interop_require_default(require_mask());
      var _part = /* @__PURE__ */ _interop_require_default(require_part());
      var _scene = /* @__PURE__ */ _interop_require_default(require_scene());
      var _camera = /* @__PURE__ */ _interop_require_default(require_camera());
      var _gaming = /* @__PURE__ */ _interop_require_default(require_gaming());
      var _design = /* @__PURE__ */ _interop_require_default(require_design());
      var _canvas1 = /* @__PURE__ */ _interop_require_default(require_canvas2());
      var _preload = /* @__PURE__ */ _interop_require_default(require_preload());
      var _coloured = /* @__PURE__ */ _interop_require_default(require_coloured2());
      var _textured = /* @__PURE__ */ _interop_require_default(require_textured2());
      var _vector = /* @__PURE__ */ _interop_require_default(require_vector());
      var _matrix = /* @__PURE__ */ _interop_require_default(require_matrix2());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }
  });

  // lib/xgl.js
  var require_xgl = __commonJS({
    "lib/xgl.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _index = require_lib();
      Object.assign(window, {
        React: _index.React
      });
    }
  });

  // lib/example/element/colouredSquare.js
  var require_colouredSquare = __commonJS({
    "lib/example/element/colouredSquare.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return ColouredSquare;
        }
      });
      var _index = require_lib();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          3
        ],
        [
          3,
          2,
          0
        ]
      ];
      var defaultColour = [
        1,
        0,
        0
      ];
      var ColouredSquare = /* @__PURE__ */ function(ColouredCanvasElement) {
        _inherits(ColouredSquare2, ColouredCanvasElement);
        var _super = _create_super(ColouredSquare2);
        function ColouredSquare2() {
          _class_call_check(this, ColouredSquare2);
          return _super.apply(this, arguments);
        }
        _create_class(ColouredSquare2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_colour = properties.colour, colour = _properties_colour === void 0 ? defaultColour : _properties_colour, colouredSquare = _index.ColouredCanvasElement.fromProperties(ColouredSquare2, properties, coordinates, indexes, colour);
              return colouredSquare;
            }
          }
        ]);
        return ColouredSquare2;
      }(_index.ColouredCanvasElement);
    }
  });

  // lib/example/element/face.js
  var require_face = __commonJS({
    "lib/example/element/face.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _colouredSquare = /* @__PURE__ */ _interop_require_default(require_colouredSquare());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Face = function(properties) {
        var colour = properties.colour;
        return /* @__PURE__ */ React.createElement(_colouredSquare.default, {
          colour,
          position: [
            -0.5,
            -0.5,
            0.5
          ]
        });
      };
      var _default = Face;
    }
  });

  // lib/example/element/cube.js
  var require_cube = __commonJS({
    "lib/example/element/cube.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _face = /* @__PURE__ */ _interop_require_default(require_face());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var defaultColour = [
        1,
        1,
        0
      ];
      var Cube = function(properties) {
        var _properties_colour = properties.colour, colour = _properties_colour === void 0 ? defaultColour : _properties_colour;
        return [
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              90,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              90,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              180,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              -90,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              -90,
              0
            ]
          })
        ];
      };
      var _default = Cube;
    }
  });

  // lib/example/cube.js
  var require_cube2 = __commonJS({
    "lib/example/cube.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _cube = /* @__PURE__ */ _interop_require_default(require_cube());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var cubeExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_cube.default, {
          colour: [
            0,
            1,
            0
          ]
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, {
          persist: true
        }));
      };
      var _default = cubeExample;
    }
  });

  // lib/example/element/texturedQuadrangle.js
  var require_texturedQuadrangle = __commonJS({
    "lib/example/element/texturedQuadrangle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TexturedQuadrangle;
        }
      });
      var _index = require_lib();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          3
        ],
        [
          3,
          2,
          0
        ]
      ];
      var defaultImageName = "plaster.jpg";
      var defaultTextureCoordinates = [
        [
          [
            0,
            0
          ],
          [
            2,
            0
          ],
          [
            2,
            2
          ]
        ],
        [
          [
            2,
            2
          ],
          [
            0,
            2
          ],
          [
            0,
            0
          ]
        ]
      ];
      var TexturedQuadrangle = /* @__PURE__ */ function(TexturedCanvasElement) {
        _inherits(TexturedQuadrangle2, TexturedCanvasElement);
        var _super = _create_super(TexturedQuadrangle2);
        function TexturedQuadrangle2() {
          _class_call_check(this, TexturedQuadrangle2);
          return _super.apply(this, arguments);
        }
        _create_class(TexturedQuadrangle2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_imageName = properties.imageName, imageName = _properties_imageName === void 0 ? defaultImageName : _properties_imageName, _properties_textureCoordinates = properties.textureCoordinates, textureCoordinates = _properties_textureCoordinates === void 0 ? defaultTextureCoordinates : _properties_textureCoordinates, texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle2, properties, coordinates, indexes, imageName, textureCoordinates);
              return texturedQuadrangle;
            }
          }
        ]);
        return TexturedQuadrangle2;
      }(_index.TexturedCanvasElement);
    }
  });

  // lib/example/tiling.js
  var require_tiling = __commonJS({
    "lib/example/tiling.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _colouredSquare = /* @__PURE__ */ _interop_require_default(require_colouredSquare());
      var _texturedQuadrangle = /* @__PURE__ */ _interop_require_default(require_texturedQuadrangle());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var preloadImages = _index.preloadUtilities.preloadImages;
      var host = window.host;
      var imageNames = window.imageNames;
      var imageDirectoryURI = window.imageDirectoryURI;
      var tilingExample = function() {
        preloadImages(host, imageNames, imageDirectoryURI, function(images, imageNames2) {
          var canvas = new _index.Canvas();
          return /* @__PURE__ */ React.createElement(_index.Scene, {
            canvas
          }, /* @__PURE__ */ React.createElement(_index.Part, {
            images,
            imageNames: imageNames2,
            imageTiling: true
          }, /* @__PURE__ */ React.createElement(_index.Mask, {
            reference: "mask"
          }, /* @__PURE__ */ React.createElement(_colouredSquare.default, {
            scale: [
              0.25,
              0.25,
              1
            ],
            position: [
              0.125,
              0.125,
              0.125
            ]
          })), /* @__PURE__ */ React.createElement(_texturedQuadrangle.default, {
            position: [
              0,
              0,
              0
            ],
            imageName: "floorboards.jpg",
            maskReference: "mask"
          }), /* @__PURE__ */ React.createElement(_texturedQuadrangle.default, {
            position: [
              -0.5,
              -0.5,
              -0.5
            ],
            imageName: "paving.jpg",
            maskReference: "mask"
          })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
        });
      };
      var _default = tilingExample;
    }
  });

  // lib/example/simple.js
  var require_simple = __commonJS({
    "lib/example/simple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _colouredSquare = /* @__PURE__ */ _interop_require_default(require_colouredSquare());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var simpleExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_colouredSquare.default, {
          colour: [
            0,
            0,
            1
          ]
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      };
      var _default = simpleExample;
    }
  });

  // lib/example/masking.js
  var require_masking2 = __commonJS({
    "lib/example/masking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _cube = /* @__PURE__ */ _interop_require_default(require_cube());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var maskingExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_index.Mask, {
          reference: "quarter-sized-cube"
        }, /* @__PURE__ */ React.createElement(_cube.default, {
          scale: [
            1 / 4,
            1 / 4,
            1 / 4
          ]
        })), /* @__PURE__ */ React.createElement(_index.Mask, {
          reference: "half-sized-cube"
        }, /* @__PURE__ */ React.createElement(_cube.default, {
          scale: [
            1 / 2,
            1 / 2,
            1 / 2
          ],
          maskReference: "quarter-sized-cube"
        })), /* @__PURE__ */ React.createElement(_cube.default, {
          maskReference: "half-sized-cube"
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      };
      var _default = maskingExample;
    }
  });

  // lib/example/element/texturedTriangle.js
  var require_texturedTriangle = __commonJS({
    "lib/example/element/texturedTriangle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return TexturedTriangle;
        }
      });
      var _index = require_lib();
      function _assert_this_initialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get_prototype_of(o) {
        _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _get_prototype_of(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _set_prototype_of(subClass, superClass);
      }
      function _possible_constructor_return(self, call) {
        if (call && (_type_of(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assert_this_initialized(self);
      }
      function _set_prototype_of(o, p) {
        _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _set_prototype_of(o, p);
      }
      function _type_of(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var Super = _get_prototype_of(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possible_constructor_return(this, result);
        };
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0.5,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          2
        ]
      ];
      var defaultImageName = "stripes.jpg";
      var defaultTextureCoordinates = [
        [
          [
            0,
            0
          ],
          [
            1,
            0
          ],
          [
            0.5,
            1
          ]
        ]
      ];
      var TexturedTriangle = /* @__PURE__ */ function(TexturedCanvasElement) {
        _inherits(TexturedTriangle2, TexturedCanvasElement);
        var _super = _create_super(TexturedTriangle2);
        function TexturedTriangle2() {
          _class_call_check(this, TexturedTriangle2);
          return _super.apply(this, arguments);
        }
        _create_class(TexturedTriangle2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _properties_imageName = properties.imageName, imageName = _properties_imageName === void 0 ? defaultImageName : _properties_imageName, _properties_textureCoordinates = properties.textureCoordinates, textureCoordinates = _properties_textureCoordinates === void 0 ? defaultTextureCoordinates : _properties_textureCoordinates, texturedTriangle = _index.TexturedCanvasElement.fromProperties(TexturedTriangle2, properties, coordinates, indexes, imageName, textureCoordinates);
              return texturedTriangle;
            }
          }
        ]);
        return TexturedTriangle2;
      }(_index.TexturedCanvasElement);
    }
  });

  // lib/example/element/side.js
  var require_side = __commonJS({
    "lib/example/element/side.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _texturedTriangle = /* @__PURE__ */ _interop_require_default(require_texturedTriangle());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Side = function(properties) {
        return /* @__PURE__ */ React.createElement(_texturedTriangle.default, {
          scale: [
            1,
            1 / Math.sqrt(2),
            1
          ],
          position: [
            -0.5,
            0,
            0.5
          ],
          rotations: [
            -45,
            0,
            0
          ]
        });
      };
      var _default = Side;
    }
  });

  // lib/example/element/pyramid.js
  var require_pyramid = __commonJS({
    "lib/example/element/pyramid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _side = /* @__PURE__ */ _interop_require_default(require_side());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Pyramid = function(properties) {
        return [
          /* @__PURE__ */ React.createElement(_side.default, null),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              90,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              180,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              270,
              0
            ]
          })
        ];
      };
      var _default = Pyramid;
    }
  });

  // lib/example/pyramid.js
  var require_pyramid2 = __commonJS({
    "lib/example/pyramid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
          return _default;
        }
      });
      var _index = require_lib();
      var _pyramid = /* @__PURE__ */ _interop_require_default(require_pyramid());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var preloadImageMap = _index.preloadUtilities.preloadImageMap;
      var host = window.host;
      var imageMapURI = window.imageMapURI;
      var imageMapJSON = window.imageMapJSON;
      var pyramidExample = function() {
        preloadImageMap(host, imageMapURI, imageMapJSON, function(imageMap, imageMapJSON2) {
          var canvas = new _index.Canvas();
          return /* @__PURE__ */ React.createElement(_index.Scene, {
            canvas
          }, /* @__PURE__ */ React.createElement(_index.Part, {
            imageMap,
            imageMapJSON: imageMapJSON2
          }, /* @__PURE__ */ React.createElement(_pyramid.default, null)), /* @__PURE__ */ React.createElement(_index.GamingCamera, {
            mouseSensitivity: 10
          }));
        });
      };
      var _default = pyramidExample;
    }
  });

  // lib/example.js
  var require_example = __commonJS({
    "lib/example.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      require_xgl();
      var _cube = /* @__PURE__ */ _interop_require_default(require_cube2());
      var _tiling = /* @__PURE__ */ _interop_require_default(require_tiling());
      var _simple = /* @__PURE__ */ _interop_require_default(require_simple());
      var _masking = /* @__PURE__ */ _interop_require_default(require_masking2());
      var _pyramid = /* @__PURE__ */ _interop_require_default(require_pyramid2());
      function _interop_require_default(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var example = window.location.search.substring(1);
      switch (example) {
        case "cube":
          (0, _cube.default)();
          break;
        case "tiling":
          (0, _tiling.default)();
          break;
        case "simple":
          (0, _simple.default)();
          break;
        case "masking":
          (0, _masking.default)();
          break;
        case "pyramid":
          (0, _pyramid.default)();
          break;
      }
    }
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21hdGhzL3ZlY3Rvci5qcyIsICJzcmMvZGVmYXVsdHMuanMiLCAic3JjL21peGlucy9kZXB0aC5qcyIsICJzcmMvZXJyb3JzLmpzIiwgInNyYy9taXhpbnMvc2hhZGVyLmpzIiwgInNyYy9taXhpbnMvYnVmZmVyLmpzIiwgInNyYy9taXhpbnMvY29sb3VyLmpzIiwgInNyYy9taXhpbnMvbWF0cml4LmpzIiwgInNyYy9jb25zdGFudHMuanMiLCAic3JjL21peGlucy90ZXh0dXJlLmpzIiwgInNyYy9taXhpbnMvcHJvZ3JhbS5qcyIsICJzcmMvbWl4aW5zL2JsZW5kaW5nLmpzIiwgInNyYy9taXhpbnMvbG9jYXRpb24uanMiLCAic3JjL2NhbnZhcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9sZXZlbHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9oZWFkZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2tleUNvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2VuY29kaW5ncy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c0NvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNNZXNzYWdlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hamF4LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy92ZXJzaW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgInNyYy9lbGVtZW50LmpzIiwgInNyYy9wcmltaXRpdmUvZWRnZS5qcyIsICJzcmMvdXRpbGl0aWVzL21pZFBvaW50LmpzIiwgInNyYy9wcmltaXRpdmUvZWRnZS9tYXNraW5nLmpzIiwgInNyYy91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCAic3JjL3V0aWxpdGllcy9hbmdsZS5qcyIsICJzcmMvdXRpbGl0aWVzL3F1YXRlcm5pb24uanMiLCAic3JjL3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2ludGVyc2VjdGlvbi5qcyIsICJzcmMvcHJpbWl0aXZlL3ZlcnRpY2FsTGluZS5qcyIsICJzcmMvdXRpbGl0aWVzL3ZlcnRpY2VzLmpzIiwgInNyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwgInNyYy9tYXRocy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy90cmFuc2Zvcm0uanMiLCAic3JjL2VsZW1lbnQvbWFzay5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgInNyYy9yZWFjdC5qcyIsICJzcmMvcmVuZGVyZXIuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyIsICJzcmMvcmVuZGVyZXIvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsICJzcmMvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcC5qcyIsICJzcmMvZWxlbWVudC9wYXJ0LmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS5qcyIsICJzcmMvZXZlbnRUeXBlcy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvdXNlcklucHV0LmpzIiwgInNyYy9lbGVtZW50L3NjZW5lLmpzIiwgInNyYy91dGlsaXRpZXMvb2Zmc2V0cy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9wYW4uanMiLCAic3JjL21pc2NlbGxhbmVvdXMvdGlsdC5qcyIsICJzcmMvdXRpbGl0aWVzL2xvY2FsU3RvcmFnZS5qcyIsICJzcmMvZWxlbWVudC9jYW1lcmEvZ2FtaW5nLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhL2Rlc2lnbi5qcyIsICJzcmMvdXRpbGl0aWVzL3ByZWxvYWQuanMiLCAic3JjL3ByaW1pdGl2ZS9ub3JtYWwuanMiLCAic3JjL3ByaW1pdGl2ZS92ZXJ0ZXguanMiLCAic3JjL3V0aWxpdGllcy9mYWNldC5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0LmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkLmpzIiwgInNyYy91dGlsaXRpZXMvdGV4dHVyZS5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL3hnbC5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2N1YmUuanMiLCAic3JjL2V4YW1wbGUvY3ViZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZS5qcyIsICJzcmMvZXhhbXBsZS90aWxpbmcuanMiLCAic3JjL2V4YW1wbGUvc2ltcGxlLmpzIiwgInNyYy9leGFtcGxlL21hc2tpbmcuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3B5cmFtaWQuanMiLCAic3JjL2V4YW1wbGUvcHlyYW1pZC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzIF0gPSB2ZWN0b3JBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoYTAgKiBiMCArIGExICogYjEgKyBhMiAqIGIyICsgYTMgKiBiMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGExICogYjIgLSBhMiAqIGIxLFxuICAgIGEyICogYjAgLSBhMCAqIGIyLFxuICAgIGEwICogYjEgLSBhMSAqIGIwLFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4IC8gbGVuZ3RoLFxuICAgIHkgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6LCB3IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeiArIHcgKiB3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICAteCxcbiAgICAteSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3QzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIC14LFxuICAgIC15LFxuICAgIC16LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgLXgsXG4gICAgLXksXG4gICAgLXosXG4gICAgLXcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCxcbiAgICB5LFxuICAgIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3I7XG5cbiAgcmV0dXJuIChbXG5cbiAgICB4ICogc2NhbGFyLFxuICAgIHkgKiBzY2FsYXIsXG4gICAgeiAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gKFtcblxuICAgIHggKiBzY2FsYXIsXG4gICAgeSAqIHNjYWxhcixcbiAgICB6ICogc2NhbGFyLFxuICAgIHcgKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyIF0gPSB2ZWN0b3JCO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKyBiMCxcbiAgICBhMSArIGIxLFxuICAgIGEyICsgYjIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICsgYjAsXG4gICAgYTEgKyBiMSxcbiAgICBhMiArIGIyLFxuICAgIGEzICsgYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEgXSA9IHZlY3RvckI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAtIGIwLFxuICAgIGExIC0gYjEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIgXSA9IHZlY3RvckEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gdmVjdG9yQSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gdmVjdG9yQjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwIC0gYjAsXG4gICAgYTEgLSBiMSxcbiAgICBhMiAtIGIyLFxuICAgIGEzIC0gYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wICogeCArIG0yICogeSxcbiAgICBtMSAqIHggKyBtMyAqIHksXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0zKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTMgKiB5ICsgbTYgKiB6LFxuICAgIG0xICogeCArIG00ICogeSArIG03ICogeixcbiAgICBtMiAqIHggKyBtNSAqIHkgKyBtOCAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IFsgeCwgeSwgeiwgdyBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyICogdyxcbiAgICBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMgKiB3LFxuICAgIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQgKiB3LFxuICAgIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUgKiB3LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHplcm8yLFxuICB6ZXJvMyxcbiAgemVybzQsXG4gIGxlbmd0aDIsXG4gIGxlbmd0aDMsXG4gIGxlbmd0aDQsXG4gIGRvdDIsXG4gIGRvdDMsXG4gIGRvdDQsXG4gIGNyb3NzMyxcbiAgbm9ybWFsaXNlMixcbiAgbm9ybWFsaXNlMyxcbiAgbm9ybWFsaXNlNCxcbiAgcmVmbGVjdDIsXG4gIHJlZmxlY3QzLFxuICByZWZsZWN0NCxcbiAgdHJ1bmNhdGU0LFxuICBzY2FsZTIsXG4gIHNjYWxlMyxcbiAgc2NhbGU0LFxuICBhZGQyLFxuICBhZGQzLFxuICBhZGQ0LFxuICBzdWJ0cmFjdDIsXG4gIHN1YnRyYWN0MyxcbiAgc3VidHJhY3Q0LFxuICB0cmFuc2Zvcm0yLFxuICB0cmFuc2Zvcm0zLFxuICB0cmFuc2Zvcm00XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgemVybzMgfSBmcm9tIFwiLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUiA9IDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9HID0gMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0IgPSAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQSA9IDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9ERVBUSCA9IDEuMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1pfRkFSID0gMTAwMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1pfTkVBUiA9IDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTSVNUID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVGQVVMVF9GSUVMRF9PRl9WSUVXID0gNDU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX0FOR0xFUyA9IHplcm8yKCk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX09GRlNFVFMgPSB6ZXJvMygpO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SID0gMC4wMDAwMDAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSA9IDU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OID0gWyAwLCAwLCA1IF07XG5leHBvcnQgY29uc3QgREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSA9IDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSA9IDE7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfREVQVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IERFRkFVTFRfREVQVEgpIHtcbiAgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IERFUFRIX1RFU1QsXG4gICAgICAgIGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uID0gTEVRVUFMO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZGVwdGhDb21wYXJpc29uRnVuY3Rpb24pO1xufVxuXG5jb25zdCBkZXB0aE1peGlucyA9IHtcbiAgY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXB0aE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNIQURFUl9FUlJPUiA9IFwiVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLlwiO1xuZXhwb3J0IGNvbnN0IFdFQl9HTF9DT05URVhUX0VSUk9SID0gXCJVbmFibGUgdG8gZ2V0IHRoZSBXZWJHTCBjb250ZXh0LlwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSEFERVJfRVJST1IgfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFNIQURFUl9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50U2hhZGVyO1xufVxuXG5jb25zdCBzaGFkZXJNaXhpbnMgPSB7XG4gIGNyZWF0ZVNoYWRlcixcbiAgY3JlYXRlVmVydGV4U2hhZGVyLFxuICBjcmVhdGVGcmFnbWVudFNoYWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hhZGVyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIGZsb2F0MzJBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cblxuY29uc3QgYnVmZmVyTWl4aW5zID0ge1xuICBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcixcbiAgY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWZmZXJNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfUiwgREVGQVVMVF9HLCBERUZBVUxUX0IsIERFRkFVTFRfQSB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihyID0gREVGQVVMVF9SLCBnID0gREVGQVVMVF9HLCBiID0gREVGQVVMVF9CLCBhID0gREVGQVVMVF9BKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5jb25zdCBjb2xvdXJNaXhpbnMgPSB7XG4gIGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3VyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5jb25zdCBtYXRyaXhNaXhpbnMgPSB7XG4gIGFwcGx5TWF0cml4XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXRyaXhNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBXRUJHTCA9IFwid2ViZ2xcIjtcbmV4cG9ydCBjb25zdCBXSURUSCA9IFwid2lkdGhcIjtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSBcImhlaWdodFwiO1xuZXhwb3J0IGNvbnN0IENBTlZBUyA9IFwiY2FudmFzXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBBTk9OWU1PVVMgPSBcImFub255bW91c1wiO1xuZXhwb3J0IGNvbnN0IEdBTUlOR19DQU1FUkEgPSBcImdhbWluZ19jYW1lcmFcIjtcbmV4cG9ydCBjb25zdCBERVNJR05fQ0FNRVJBID0gXCJkZXNpZ25fY2FtZXJhXCI7XG5leHBvcnQgY29uc3QgVkVSVElDRVNfTEVOR1RIID0gMztcbmV4cG9ydCBjb25zdCBNSU5JTVVNX0RJU1RBTkNFID0gMTtcbmV4cG9ydCBjb25zdCBJTlZFUlRfTVVMVElQTElFUiA9IC0xO1xuZXhwb3J0IGNvbnN0IEFOR0xFU19NVUxUSVBMSUVSID0gMC4wMTtcbmV4cG9ydCBjb25zdCBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSID0gMC4yNTtcbmV4cG9ydCBjb25zdCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiA9IE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3QgRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG5leHBvcnQgY29uc3QgV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyA9IFwiV0VCS0lUX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IFJFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgPSAwLjAyNTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDLFxuICAgICAgICAgTU9aX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyxcbiAgICAgICAgIFdFQktJVF9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpIHtcblx0Y29uc3QgeyBSR0JBLCBMSU5FQVIsIFVOU0lHTkVEX0JZVEUsIFRFWFRVUkUwLCBURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgVEVYVFVSRV9XUkFQX1QsIFVOUEFDS19GTElQX1lfV0VCR0wsIENMQU1QX1RPX0VER0UsIE5FQVJFU1QsIFJFUEVBVCwgVEVYVFVSRV9NSU5fRklMVEVSIH0gPSB0aGlzLmNvbnRleHQsXG5cdFx0XHRcdHRhcmdldCA9IFRFWFRVUkUwICsgaW5kZXgsXG5cdFx0XHRcdGxldmVsID0gMCxcblx0XHRcdFx0aW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHRmb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHR0eXBlID0gVU5TSUdORURfQllURSxcblx0XHRcdFx0dGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgaWYgKHJlcGVhdCkge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBSRVBFQVQpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBSRVBFQVQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUik7XG5cblx0cmV0dXJuIHRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCkge1xuICBjb25zdCBleHRlbnNpb24gPSAoXG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQylcbiAgKTtcblxuICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgeyBURVhUVVJFXzJEIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgeyBNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUIH0gPSBleHRlbnNpb24sXG4gICAgICAgICAgbWF4aW11bSA9IHRoaXMuY29udGV4dC5nZXRQYXJhbWV0ZXIoTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcblxuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJmKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBtYXhpbXVtKTtcbiAgfVxufVxuXG5jb25zdCB0ZXh0dXJlTWl4aW5zID0ge1xuICBjcmVhdGVUZXh0dXJlLFxuICBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGV4dHVyZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5mdW5jdGlvbiB1c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XG59XG5cbmNvbnN0IHByb2dyYW1NaXhpbnMgPSB7XG4gIGNyZWF0ZVByb2dyYW0sXG4gIHVzZVByb2dyYW1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2dyYW1NaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGVuYWJsZUJsZW5kaW5nKCkge1xuICBjb25zdCB7IEJMRU5ELCBTUkNfQUxQSEEsIE9ORSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IEJMRU5ELFxuICAgICAgICBzb3VyY2VGYWN0b3IgPSBTUkNfQUxQSEEsXG4gICAgICAgIGRlc3RpbmF0aW9uRmFjdG9yID0gT05FO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5ibGVuZEZ1bmMoc291cmNlRmFjdG9yLCBkZXN0aW5hdGlvbkZhY3Rvcik7XG59XG5cbmNvbnN0IGJsZW5kaW5nTWl4aW5zID0ge1xuICBlbmFibGVCbGVuZGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYmxlbmRpbmdNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkge1xuICB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTtcbn1cblxuY29uc3QgbG9jYXRpb25NaXhpbnMgPSB7XG4gIGdldFVuaWZvcm1Mb2NhdGlvbixcbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24sXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25NaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBXRUJHTCwgV0lEVEgsIEhFSUdIVCwgQ0FOVkFTLCBTVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBDQU5WQVMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShXSURUSCwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKEhFSUdIVCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGlucyk7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFNUUklORykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFdFQkdMKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoV0VCX0dMX0NPTlRFWFRfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUUkFDRV9MRVZFTCA9IFwidHJhY2VcIjtcbmV4cG9ydCBjb25zdCBERUJVR19MRVZFTCA9IFwiZGVidWdcIjtcbmV4cG9ydCBjb25zdCBJTkZPX0xFVkVMID0gXCJpbmZvXCI7XG5leHBvcnQgY29uc3QgV0FSTklOR19MRVZFTCA9IFwid2FybmluZ1wiO1xuZXhwb3J0IGNvbnN0IEVSUk9SX0xFVkVMID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IEZBVEFMX0xFVkVMID0gXCJmYXRhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRSQUNFX0xFVkVMLFxuICBERUJVR19MRVZFTCxcbiAgSU5GT19MRVZFTCxcbiAgV0FSTklOR19MRVZFTCxcbiAgRVJST1JfTEVWRUwsXG4gIEZBVEFMX0xFVkVMXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX01FVEhPRCA9IFwiR0VUXCI7XG5leHBvcnQgY29uc3QgUE9TVF9NRVRIT0QgPSBcIlBPU1RcIjtcbmV4cG9ydCBjb25zdCBQQVRDSF9NRVRIT0QgPSBcIlBBVENIXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX01FVEhPRCA9IFwiREVMRVRFXCI7XG5leHBvcnQgY29uc3QgT1BUSU9OU19NRVRIT0QgPSBcIk9QVElPTlNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBHRVRfTUVUSE9ELFxuICBQT1NUX01FVEhPRCxcbiAgUEFUQ0hfTUVUSE9ELFxuICBERUxFVEVfTUVUSE9ELFxuICBPUFRJT05TX01FVEhPRFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFBSQUdNQV9IRUFERVIgPSBcInByYWdtYVwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVF9IRUFERVIgPSBcImFjY2VwdFwiO1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0hFQURFUiA9IFwibG9jYXRpb25cIjtcbmV4cG9ydCBjb25zdCBVU0VSX0FHRU5UX0hFQURFUiA9IFwidXNlci1hZ2VudFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9IRUFERVIgPSBcImNvbnRlbnQtdHlwZVwiO1xuZXhwb3J0IGNvbnN0IEFVVEhPUklaQVRJT05fSEVBREVSID0gXCJhdXRob3JpemF0aW9uXCI7XG5leHBvcnQgY29uc3QgQ0FDSEVfQ09OVFJPTF9IRUFERVIgPSBcImNhY2hlLWNvbnRyb2xcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0xFTkdUSF9IRUFERVIgPSBcImNvbnRlbnQtbGVuZ3RoXCI7XG5leHBvcnQgY29uc3QgVFJBTlNGRVJfRU5DT0RJTkdfSEVBREVSID0gXCJ0cmFuc2Zlci1lbmNvZGluZ1wiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gXCJjb250ZW50LWRpc3Bvc2l0aW9uXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfT1JJR0lOX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfTUVUSE9EU19IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LW1ldGhvZHNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19IRUFERVJTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctaGVhZGVyc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1tZXRob2RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBQUkFHTUFfSEVBREVSLFxuICBBQ0NFUFRfSEVBREVSLFxuICBMT0NBVElPTl9IRUFERVIsXG4gIFVTRVJfQUdFTlRfSEVBREVSLFxuICBDT05URU5UX1RZUEVfSEVBREVSLFxuICBBVVRIT1JJWkFUSU9OX0hFQURFUixcbiAgQ0FDSEVfQ09OVFJPTF9IRUFERVIsXG4gIENPTlRFTlRfTEVOR1RIX0hFQURFUixcbiAgVFJBTlNGRVJfRU5DT0RJTkdfSEVBREVSLFxuICBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfT1JJR0lOX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfTUVUSE9EU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9SRVFVRVNUX01FVEhPRF9IRUFERVJcbn07IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEFCX0tFWV9DT0RFID0gOTtcbmV4cG9ydCBjb25zdCBTSElGVF9LRVlfQ09ERSA9IDE2O1xuZXhwb3J0IGNvbnN0IEVOVEVSX0tFWV9DT0RFID0gMTM7XG5leHBvcnQgY29uc3QgRVNDQVBFX0tFWV9DT0RFID0gMjc7XG5leHBvcnQgY29uc3QgREVMRVRFX0tFWV9DT0RFID0gNDY7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0tFWV9DT0RFID0gODtcbmV4cG9ydCBjb25zdCBBUlJPV19VUF9LRVlfQ09ERSA9IDM4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX0RPV05fS0VZX0NPREUgPSA0MDtcbmV4cG9ydCBjb25zdCBBUlJPV19MRUZUX0tFWV9DT0RFID0gMzc7XG5leHBvcnQgY29uc3QgQVJST1dfUklHSFRfS0VZX0NPREUgPSAzOTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUQUJfS0VZX0NPREUsXG4gIFNISUZUX0tFWV9DT0RFLFxuICBFTlRFUl9LRVlfQ09ERSxcbiAgRVNDQVBFX0tFWV9DT0RFLFxuICBERUxFVEVfS0VZX0NPREUsXG4gIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgQVJST1dfVVBfS0VZX0NPREUsXG4gIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gIEFSUk9XX1JJR0hUX0tFWV9DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVRGOF9FTkNPRElORyA9IFwidXRmOFwiO1xuZXhwb3J0IGNvbnN0IFVURl84X0VOQ09ESU5HID0gXCJ1dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEJBU0U2NF9FTkNPRElORyA9IFwiYmFzZTY0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVRGOF9FTkNPRElORyxcbiAgVVRGXzhfRU5DT0RJTkcsXG4gIEJBU0U2NF9FTkNPRElOR1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVQX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0FcIjtcbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQkFSX0NIQVJBQ1RFUiA9IFwifFwiO1xuZXhwb3J0IGNvbnN0IERBU0hfQ0hBUkFDVEVSID0gXCItXCI7XG5leHBvcnQgY29uc3QgRE9XTl9DSEFSQUNURVIgPSBcIlx1MDAxYltCXCI7XG5leHBvcnQgY29uc3QgTEVGVF9DSEFSQUNURVIgPSBcIlx1MDAxYltEXCI7XG5leHBvcnQgY29uc3QgUklHSFRfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQ1wiO1xuZXhwb3J0IGNvbnN0IFNQQUNFX0NIQVJBQ1RFUiA9IFwiIFwiO1xuZXhwb3J0IGNvbnN0IENPTU1BX0NIQVJBQ1RFUiA9IFwiLFwiO1xuZXhwb3J0IGNvbnN0IENPTE9OX0NIQVJBQ1RFUiA9IFwiOlwiO1xuZXhwb3J0IGNvbnN0IFBFUklPRF9DSEFSQUNURVIgPSBcIi5cIjtcbmV4cG9ydCBjb25zdCBDVFJMX0NfQ0hBUkFDVEVSID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEX0NIQVJBQ1RFUiA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tUSUNLX0RFTElNSVRFUiA9IFwiYFwiO1xuZXhwb3J0IGNvbnN0IE5FV19MSU5FX0NIQVJBQ1RFUiA9IFwiXFxuXCI7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkRfQ0hBUkFDVEVSID0gXCImXCI7XG5leHBvcnQgY29uc3QgTEVTU19USEFOX0NIQVJBQ1RFUiA9IFwiJmx0O1wiO1xuZXhwb3J0IGNvbnN0IEdSRUFURVJfVEhBTl9DSEFSQUNURVIgPSBcIiZndDtcIjtcbmV4cG9ydCBjb25zdCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiA9IFwiL1wiO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuZXhwb3J0IGNvbnN0IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSID0gXCIhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVBfQ0hBUkFDVEVSLFxuICBFVFhfQ0hBUkFDVEVSLFxuICBCQVJfQ0hBUkFDVEVSLFxuICBEQVNIX0NIQVJBQ1RFUixcbiAgRE9XTl9DSEFSQUNURVIsXG4gIExFRlRfQ0hBUkFDVEVSLFxuICBSSUdIVF9DSEFSQUNURVIsXG4gIFNQQUNFX0NIQVJBQ1RFUixcbiAgQ09NTUFfQ0hBUkFDVEVSLFxuICBDT0xPTl9DSEFSQUNURVIsXG4gIFBFUklPRF9DSEFSQUNURVIsXG4gIENUUkxfQ19DSEFSQUNURVIsXG4gIFdJTERDQVJEX0NIQVJBQ1RFUixcbiAgQkFDS1RJQ0tfREVMSU1JVEVSLFxuICBORVdfTElORV9DSEFSQUNURVIsXG4gIEFNUEVSU0FORF9DSEFSQUNURVIsXG4gIEJBQ0tTUEFDRV9DSEFSQUNURVIsXG4gIExFU1NfVEhBTl9DSEFSQUNURVIsXG4gIEdSRUFURVJfVEhBTl9DSEFSQUNURVIsXG4gIEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSLFxuICBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSLFxuICBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfQ09ERSA9IDA7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19DT0RFID0gMjAwO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfQ09ERSA9IDMwMjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSA9IDIwMTtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFID0gMzAzO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUgPSA0MDM7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSA9IDQwNDtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSA9IDIwNDtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUgPSA1MDI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFID0gNDAwO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUgPSA0MDE7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSA9IDQwODtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUgPSA1MDM7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX0NPREUsXG4gIE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgRk9VTkRfMzAyX1NUQVRVU19DT0RFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW5cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRFWFRfSFRNTF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fT0NURVRfU1RSRUFNX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX01FU1NBR0UgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfTUVTU0FHRSA9IFwiT0tcIjtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UgPSBcIkZvdW5kXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UgPSBcIkNyZWF0ZWRcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3JpemVkXCI7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSA9IFwiUmVxdWVzdCB0aW1lb3V0XCI7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFID0gXCJUb28gbWFueSByZXF1ZXN0c1wiO1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19NRVNTQUdFID0gXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRSA9IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19NRVNTQUdFLFxuICBPS18yMDBfU1RBVFVTX01FU1NBR0UsXG4gIEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX01FU1NBR0UsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX01FU1NBR0UsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19NRVNTQUdFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfTUVTU0FHRSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTt9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIE1hdGgubWF4KDEsIGFycmF5Lmxlbmd0aCAtIDEpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuICBcbiAgcHVzaChhcnJheTEsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4MSA9IDAsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4MSA8IGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnQxID0gYXJyYXlbaW5kZXgxXTtcblxuICAgIGZvciAobGV0IGluZGV4MiA9IGxlbmd0aCAtIDE7IGluZGV4MiA+IGluZGV4MTsgaW5kZXgyLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQyID0gYXJyYXlbaW5kZXgyXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQyLCBlbGVtZW50MSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleDIsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgxKys7XG5cbiAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXkxLCBhcnJheTIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5MSxcbiAgICAuLi5hcnJheTJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIGNhbGxiYWNrKSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIGNhbGxiYWNrKSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgZmlyc3RMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPID0gXCIwXCI7XG5leHBvcnQgY29uc3QgREFUQSA9IFwiZGF0YVwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgTlVNQkVSID0gXCJudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVCA9IFwiZGVmYXVsdFwiO1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UID0gXCJFTlZJUk9OTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgUEFDS0FHRV9KU09OID0gXCJwYWNrYWdlLmpzb25cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ09MT05fQ0hBUkFDVEVSLCBBTVBFUlNBTkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4uL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBleGlzdGluZ05hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksICAvLy9cbiAgICAgICAgZXhpc3RpbmdOYW1lID0gZXhpc3RpbmdOYW1lcy5maW5kKChleGlzdGluZ05hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPSBleGlzdGluZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZXhpc3RpbmdOYW1lICE9PSBudWxsKSB7XG4gICAgaGVhZGVyc1tleGlzdGluZ05hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSA9PT0gbnVsbCkge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9ydEZyb21Ib3N0KGhvc3QpIHtcbiAgbGV0IHBvcnQ7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteXFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBpbmRleCA9IHNlY29uZE1hdGNoLmluZGV4T2YoQ09MT05fQ0hBUkFDVEVSKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY29uc3Qgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCk7XG5cbiAgICBwb3J0ID0gc2VjdXJlID8gNDQzIDogODA7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHBvcnRTdHJpbmcgPSBzZWNvbmRNYXRjaC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gICAgcG9ydCA9IE51bWJlcihwb3J0U3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwb3J0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJlRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBzZWN1cmUgPSAvXmh0dHBzOlxcL1xcLy8udGVzdChob3N0KTtcblxuICByZXR1cm4gc2VjdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9zdG5hbWVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXjpcXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGhvc3RuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBob3N0bmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocXVlcnkpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbmFtZXNMZW5ndGggLSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IG5hbWVzLnJlZHVjZSgocXVlcnlTdHJpbmcsIG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3ZlcndyaXRlLFxuICB1bmRlcndyaXRlLFxuICBwb3J0RnJvbUhvc3QsXG4gIHNlY3VyZUZyb21Ib3N0LFxuICBob3N0bmFtZUZyb21Ib3N0LFxuICBxdWVyeVN0cmluZ0Zyb21RdWVyeSxcbiAgdXJsRnJvbUhvc3RVUklBbmRRdWVyeVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QgfSBmcm9tIFwiLi4vbWV0aG9kc1wiO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5pbXBvcnQgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gZnJvbSBcIi4uL2hlYWRlcnNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnQgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gY29udGVudDtcbiAgICBjb250ZW50ID0gaGVhZGVycztcbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VHlwZSk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICBjb25zdCBqc29uID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlIH0gPSB4bWxIdHRwUmVxdWVzdCxcbiAgICAgICAgICBzdGF0dXNDb2RlID0gc3RhdHVzO1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZTtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgY29udGVudCA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhjb250ZW50LCBzdGF0dXNDb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBUX0hFQURFUiwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFX0hFQURFUiwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGNvbnRlbnQpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVF9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBhY2NlcHQ7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFRZcGUpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRV9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgY29uc3QgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlKGpzb24sIG1pZ3JhdGlvbk1hcCwgbGF0ZXN0VmVyc2lvbikge1xuICBsZXQgeyB2ZXJzaW9uIH0gPSBqc29uO1xuXG4gIHdoaWxlICh2ZXJzaW9uICE9PSBsYXRlc3RWZXJzaW9uKSB7XG4gICAgY29uc3QgbWlncmF0ZUZ1bmN0aW9uID0gbWlncmF0aW9uTWFwW3ZlcnNpb25dO1xuXG4gICAganNvbiA9IG1pZ3JhdGVGdW5jdGlvbihqc29uKTtcblxuICAgICh7IHZlcnNpb24gfSA9IGpzb24pO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWlncmF0ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3Qob3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgb3BlcmF0aW9uID0gb3BlcmF0aW9uc1tpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShvcGVyYXRpb25zLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gb3BlcmF0aW9ucy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlcmF0aW9ucy5mb3JFYWNoKChvcGVyYXRpb24sIGluZGV4KSA9PiB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShvcGVyYXRpb24sIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB3aGlsc3QsXHJcbiAgZm9yRWFjaCxcclxuICBzZXF1ZW5jZSxcclxuICBldmVudHVhbGx5LFxyXG4gIHJlcGVhdGVkbHksXHJcbiAgZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxldmVscyB9IGZyb20gXCIuL2xldmVsc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXRob2RzIH0gZnJvbSBcIi4vbWV0aG9kc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoZWFkZXJzIH0gZnJvbSBcIi4vaGVhZGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlDb2RlcyB9IGZyb20gXCIuL2tleUNvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVuY29kaW5ncyB9IGZyb20gXCIuL2VuY29kaW5nc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFyYWN0ZXJzIH0gZnJvbSBcIi4vY2hhcmFjdGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNDb2RlcyB9IGZyb20gXCIuL3N0YXR1c0NvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnRUeXBlcyB9IGZyb20gXCIuL2NvbnRlbnRUeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNNZXNzYWdlcyB9IGZyb20gXCIuL3N0YXR1c01lc3NhZ2VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3ZlcnNpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuZXhwb3J0IGNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgcHVzaCwgbWVyZ2UsIHNlcGFyYXRlIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChhcnJheSwgZWxlbWVudCkge1xuICBhcnJheS5wdXNoKGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVybXV0ZShhcnJheSwgcGxhY2VzKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgY3V0ID0gbGVuZ3RoIC0gcGxhY2VzLFxuICAgICAgICBsZWFkaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZSgwLCBjdXQpLFxuICAgICAgICB0cmFpbGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoY3V0KTtcblxuICBhcnJheSA9IFsgLi4udHJhaWxpbmdFbGVtZW50cywgLi4ubGVhZGluZ0VsZW1lbnRzIF07XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4gZWxlbWVudHMuY29uY2F0KGFycmF5KSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgWyBhcnJheU9yRWxlbWVudCBdO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1YXJhbnRlZShlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cyB8fCBbXTtcblxuICAgIGVsZW1lbnQuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1YnRyYWN0MyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBleHRlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSxcbiAgICAgICAgICBleHRlbnQgPSB0aGlzLmV4dGVudC5zbGljZSgpLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgRWRnZShwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChDbGFzcywgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGlmIChlbmRWZXJ0ZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgZW5kVmVydGV4ID0gc3RhcnRWZXJ0ZXg7ICAvLy9cbiAgICAgIHN0YXJ0VmVydGV4ID0gQ2xhc3M7ICAvLy9cbiAgICAgIENsYXNzID0gRWRnZTsgLy8vXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBzdGFydFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gZW5kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgZWRnZSA9IG5ldyBDbGFzcyhwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odmVydGljZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvbiA9IHZlcnRpY2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvbiwgdmVydGV4KSA9PiB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzY2FsZWRWZXJ0ZXhQb3NpdGlvbiA9IHNjYWxlMyh2ZXJ0ZXhQb3NpdGlvbiwgMS8zKTtcblxuICAgIG1pZFBvaW50UG9zaXRpb24gPSBhZGQzKG1pZFBvaW50UG9zaXRpb24sIHNjYWxlZFZlcnRleFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xuICB9LCBbIDAsIDAsIDAgXSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pIHtcbiAgbWlkUG9pbnRQb3NpdGlvbiA9IFsgLi4ubWlkUG9pbnRQb3NpdGlvbi5zbGljZSgwLCAyKSwgMCBdOyAgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgfHwgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlczsgLy8vXG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcztcbn1cblxuZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcywgbWFza2luZ0VkZ2UpID0+IHtcbiAgICBpZiAobWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKTtcblxuICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbiAgfSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5cbmltcG9ydCB7IHRoaXJkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNraW5nRWRnZSBleHRlbmRzIEVkZ2Uge1xuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIG1pZFBvaW50UG9zaXRpb24gPSBwcm9qZWN0TWlkUG9pbnRQb3NpdGlvbk9udG9YWVBsYW5lKG1pZFBvaW50UG9zaXRpb24pOyAgLy8vXG5cbiAgICBjb25zdCBleHRlbnQgPSB0aGlzLmdldEV4dGVudCgpLFxuICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiA9IHN1YnRyYWN0MyhtaWRQb2ludFBvc2l0aW9uLCBwb3NpdGlvbiksXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzMyhleHRlbnQsIG1pZFBvaW50UmVsYXRpdmVQb3NpdGlvbiksIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUodmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMSwgbWFyZ2luT2ZFcnJvcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDAsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWVBLCB2YWx1ZUIsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikge1xuICBjb25zdCBkaWZmZXJlbmNlID0gdmFsdWVBIC0gdmFsdWVCLFxuICAgICAgICBhYnNvbHV0ZURpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlKSxcbiAgICAgICAgYXBwcm94aW1hdGVseUVxdWFsID0gKGFic29sdXRlRGlmZmVyZW5jZSA8IG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBhcHByb3hpbWF0ZWx5RXF1YWw7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkb3QzLCBjcm9zczMsIG5vcm1hbGlzZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZSwgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYW5nbGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKSB7IHJldHVybiBoYW1pbHRvblByb2R1Y3QoaGFtaWx0b25Qcm9kdWN0KHJvdGF0aW9uUXVhdGVybmlvbiwgaW1hZ2luYXJ5UXVhdGVybmlvbiksIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gcm90YXRpb25RdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHNlY29uZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSB0aGlyZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1zZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1mb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpIHtcbiAgY29uc3QgZXh0ZW50ID0gbm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0Tm9ybWFsID0gZXh0ZW50LCAgLy8vXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF0sXG4gICAgICAgIGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGRvdDModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGNyb3NzMyh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcywgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyhhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUpLFxuICAgICAgICBheGlzT2ZSb3RhdGlvbiA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMCwgMCBdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbiA9IG5vcm1hbGlzZTMoYXhpc09mUm90YXRpb24pLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzID0gdW5pdEF4aXNPZlJvdGF0aW9uLCAgLy8vXG4gICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgPSBmaXJzdCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgPSB0aGlyZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VFeHRlbnQgPSBtYXNraW5nRWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50ID0gbm9ybWFsaXNlMyhtYXNraW5nRWRnZUV4dGVudCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMgPSB1bml0TWFza2luZ0VkZ2VFeHRlbnQsICAvLy9cbiAgICAgICAgZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAoYW5nbGVPZlJvdGF0aW9uU2luZSA+IDAgKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1jYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gaGFtaWx0b25Qcm9kdWN0KHF1YXRlcm5pb25BLCBxdWF0ZXJuaW9uQikge1xuICBjb25zdCBhMSA9IHF1YXRlcm5pb25BWzBdLFxuICAgICAgICBiMSA9IHF1YXRlcm5pb25BWzFdLFxuICAgICAgICBjMSA9IHF1YXRlcm5pb25BWzJdLFxuICAgICAgICBkMSA9IHF1YXRlcm5pb25BWzNdLFxuICAgICAgICBhMiA9IHF1YXRlcm5pb25CWzBdLFxuICAgICAgICBiMiA9IHF1YXRlcm5pb25CWzFdLFxuICAgICAgICBjMiA9IHF1YXRlcm5pb25CWzJdLFxuICAgICAgICBkMiA9IHF1YXRlcm5pb25CWzNdLFxuICAgICAgICBhID0gYTEgKiBhMiAtIGIxICogYjIgLSBjMSAqIGMyIC0gZDEgKiBkMixcbiAgICAgICAgYiA9IGExICogYjIgKyBiMSAqIGEyICsgYzEgKiBkMiAtIGQxICogYzIsXG4gICAgICAgIGMgPSBhMSAqIGMyIC0gYjEgKiBkMiArIGMxICogYTIgKyBkMSAqIGIyLFxuICAgICAgICBkID0gYTEgKiBkMiArIGIxICogYzIgLSBjMSAqIGIyICsgZDEgKiBhMixcbiAgICAgICAgcXVhdGVybmlvbiA9IFsgYSwgYiwgYywgZCBdO1xuXG4gIHJldHVybiBxdWF0ZXJuaW9uO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFswLCAuLi5wb3NpdGlvbl07IH0gIC8vL1xuXG5mdW5jdGlvbiBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24pIHsgcmV0dXJuIGltYWdpbmFyeVF1YXRlcm5pb24uc2xpY2UoMSk7IH0gIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWRkMywgc3VidHJhY3QzLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGxldCBpbnRlcnNlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICBjb25zdCBlZGdlSW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoZWRnZUludGVyc2VjdGlvbiA+IDAgKSAmJiAoZWRnZUludGVyc2VjdGlvbiA8IDEpKTtcblxuICAgIGlmIChlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobnVsbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgaWYgKG51bGxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGludGVyc2VjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleFBvc2l0aW9uLCBzdGFydFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgb2Zmc2V0ID0gc2NhbGUzKGV4dGVudCwgaW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBhZGQzKHN0YXJ0VmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50ID0gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50IC8gc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGVkZ2VBbmdsZVRhbmdlbnQpLFxuICAgICAgICBlZGdlUGFyYWxsZWwgPSBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvLCAvLy9cbiAgICAgICAgZWRnZU5vblBhcmFsbGVsID0gIWVkZ2VQYXJhbGxlbDtcblxuICByZXR1cm4gZWRnZU5vblBhcmFsbGVsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFZGdlSW50ZXJzZWN0aW9uKGVkZ2UsIGZpcnN0UG9zaXRpb25Db21wb25lbnQpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VQb3NpdGlvbiA9IGVkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZWRnZVBvc2l0aW9uQ29tcG9uZW50cyA9IGVkZ2VQb3NpdGlvbiwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZmlyc3RFZGdlUG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChlZGdlUG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgZWRnZUludGVyc2VjdGlvbiA9IChmaXJzdFBvc2l0aW9uQ29tcG9uZW50IC0gZmlyc3RFZGdlUG9zaXRpb25Db21wb25lbnQpIC8gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50O1xuXG4gIHJldHVybiBlZGdlSW50ZXJzZWN0aW9uO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VQb3NpdGlvbiA9IG1hc2tpbmdFZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sICAvLy9cbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbihtYXNraW5nRWRnZVBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmUgPSBuZXcgVmVydGljYWxMaW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHJvdGF0ZWRWZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcm90YXRlZFZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiByb3RhdGVkVmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gcm90YXRlZFZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSB7ICAvLy9cbiAgY29uc3QgaW5kZXhlcyA9IGluZGV4VHVwbGUsIC8vL1xuICAgICAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZSA9IGNvb3JkaW5hdGVUdXBsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNraW5nRWRnZSBmcm9tIFwiLi9lZGdlL21hc2tpbmdcIjtcbmltcG9ydCBWZXJ0aWNhbExpbmUgZnJvbSBcIi4vdmVydGljYWxMaW5lXCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgcHVzaCwgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdXNoKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lLnNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBub3JtYWwgPSBmYWNldE5vcm1hbCwgLy8vXG4gICAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKGZhY2V0VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0VkZ2VzID0gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzID0gbWFza2luZ0VkZ2VzLm1hcCgobWFza2luZ0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IFZlcnRpY2FsTGluZS5mcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcykge1xuICBjb25zdCBtYXNraW5nRWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgIG1hc2tpbmdFZGdlID0gTWFza2luZ0VkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1hc2tpbmdFZGdlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFza2luZ0VkZ2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkyKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsXG4gICAgMCwgMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLCAwLFxuICAgIDAsIDEsIDAsXG4gICAgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5NCgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLCAwLCAwLFxuICAgIDAsIDEsIDAsIDAsXG4gICAgMCwgMCwgMSwgMCxcbiAgICAwLCAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkyKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMyBdID0gbWF0cml4QSxcbiAgICAgICAgWyBiMCwgYjEsIGIyLCBiMyBdID0gbWF0cml4QjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMiAqIGIxLFxuICAgIGExICogYjAgKyBhMyAqIGIxLFxuXG4gICAgYTAgKiBiMiArIGEyICogYjMsXG4gICAgYTEgKiBiMiArIGEzICogYjMsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTMobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBbIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTggXSA9IG1hdHJpeEEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCBdID0gbWF0cml4QjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NChtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0ICBbIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1IF0gPSBtYXRyaXhBLFxuICAgICAgICAgWyBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4LCBiOSwgYjEwLCBiMTEsIGIxMiwgYjEzLCBiMTQsIGIxNSBdID0gbWF0cml4QjtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogIGIwICsgIGE0ICogIGIxICsgIGE4ICogIGIyICsgYTEyICogIGIzLFxuICAgIGExICogIGIwICsgIGE1ICogIGIxICsgIGE5ICogIGIyICsgYTEzICogIGIzLFxuICAgIGEyICogIGIwICsgIGE2ICogIGIxICsgYTEwICogIGIyICsgYTE0ICogIGIzLFxuICAgIGEzICogIGIwICsgIGE3ICogIGIxICsgYTExICogIGIyICsgYTE1ICogIGIzLFxuXG4gICAgYTAgKiAgYjQgKyAgYTQgKiAgYjUgKyAgYTggKiAgYjYgKyBhMTIgKiAgYjcsXG4gICAgYTEgKiAgYjQgKyAgYTUgKiAgYjUgKyAgYTkgKiAgYjYgKyBhMTMgKiAgYjcsXG4gICAgYTIgKiAgYjQgKyAgYTYgKiAgYjUgKyBhMTAgKiAgYjYgKyBhMTQgKiAgYjcsXG4gICAgYTMgKiAgYjQgKyAgYTcgKiAgYjUgKyBhMTEgKiAgYjYgKyBhMTUgKiAgYjcsXG5cbiAgICBhMCAqICBiOCArICBhNCAqICBiOSArICBhOCAqIGIxMCArIGExMiAqIGIxMSxcbiAgICBhMSAqICBiOCArICBhNSAqICBiOSArICBhOSAqIGIxMCArIGExMyAqIGIxMSxcbiAgICBhMiAqICBiOCArICBhNiAqICBiOSArIGExMCAqIGIxMCArIGExNCAqIGIxMSxcbiAgICBhMyAqICBiOCArICBhNyAqICBiOSArIGExMSAqIGIxMCArIGExNSAqIGIxMSxcblxuICAgIGEwICogYjEyICsgIGE0ICogYjEzICsgIGE4ICogYjE0ICsgYTEyICogYjE1LFxuICAgIGExICogYjEyICsgIGE1ICogYjEzICsgIGE5ICogYjE0ICsgYTEzICogYjE1LFxuICAgIGEyICogYjEyICsgIGE2ICogYjEzICsgYTEwICogYjE0ICsgYTE0ICogYjE1LFxuICAgIGEzICogYjEyICsgIGE3ICogYjEzICsgYTExICogYjE0ICsgYTE1ICogYjE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGV0ZXJtaW5hbnQyKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuICggbTAgKiBtMyAtIG0yICogbTEgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50MyhtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgYjAxID0gIG04ICogbTQgLSBtNSAqIG03LFxuICAgICAgICBiMTEgPSAtbTggKiBtMyArIG01ICogbTYsXG4gICAgICAgIGIyMSA9ICBtNyAqIG0zIC0gbTQgKiBtNjtcblxuICByZXR1cm4gKCBtMCAqIGIwMSArIG0xICogYjExICsgbTIgKiBiMjEgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50NChtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4LFxuXG4gICAgICAgIGIwMCA9IG0wICogbTUgLSBtMSAqIG00LFxuICAgICAgICBiMDEgPSBtMCAqIG02IC0gbTIgKiBtNCxcbiAgICAgICAgYjAyID0gbTAgKiBtNyAtIG0zICogbTQsXG4gICAgICAgIGIwMyA9IG0xICogbTYgLSBtMiAqIG01LFxuICAgICAgICBiMDQgPSBtMSAqIG03IC0gbTMgKiBtNSxcbiAgICAgICAgYjA1ID0gbTIgKiBtNyAtIG0zICogbTYsXG4gICAgICAgIGIwNiA9IG04ICogbTEzIC0gbTkgKiBtMTIsXG4gICAgICAgIGIwNyA9IG04ICogbTE0IC0gbTEwICogbTEyLFxuICAgICAgICBiMDggPSBtOCAqIG0xNSAtIG0xMSAqIG0xMixcbiAgICAgICAgYjA5ID0gbTkgKiBtMTQgLSBtMTAgKiBtMTMsXG4gICAgICAgIGIxMCA9IG05ICogbTE1IC0gbTExICogbTEzLFxuICAgICAgICBiMTEgPSBtMTAgKiBtMTUgLSBtMTEgKiBtMTQ7XG5cbiAgcmV0dXJuICggYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2ICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UyKG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zIF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCwgbTIsXG4gICAgbTEsIG0zLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlMyhtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCwgbTMsIG02LFxuICAgIG0xLCBtNCwgbTcsXG4gICAgbTIsIG01LCBtOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTQobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgIG0wLCBtNCwgbTgsIG0xMixcbiAgICBtMSwgbTUsIG05LCBtMTMsXG4gICAgbTIsIG02LCBtMTAsIG0xNCxcbiAgICBtMywgbTcsIG0xMSwgbTE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MihtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMyBdID0gbWF0cml4LFxuXG4gICAgICAgIGRldGVybWluYW50ID0gZGV0ZXJtaW5hbnQyKG1hdHJpeCk7XG5cbiAgcmV0dXJuIChbXG5cbiAgICArbTMgLyBkZXRlcm1pbmFudCwgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgLW0yIC8gZGV0ZXJtaW5hbnQsICttMCAvIGRldGVybWluYW50LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBkZXRlcm1pbmFudDMobWF0cml4KSxcblxuICAgICAgICBiMDEgPSAgbTggKiBtNCAtIG01ICogbTcsXG4gICAgICAgIGIxMSA9IC1tOCAqIG0zICsgbTUgKiBtNixcbiAgICAgICAgYjIxID0gIG03ICogbTMgLSBtNCAqIG02O1xuXG4gIHJldHVybiAoW1xuXG4gICAgYjAxIC8gZGV0ZXJtaW5hbnQsICgtbTggKiBtMSArIG0yICogbTcpIC8gZGV0ZXJtaW5hbnQsICggbTUgKiBtMSAtIG0yICogbTQpIC8gZGV0ZXJtaW5hbnQsXG4gICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTggKiBtMCAtIG0yICogbTYpIC8gZGV0ZXJtaW5hbnQsICgtbTUgKiBtMCArIG0yICogbTMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgYjIxIC8gZGV0ZXJtaW5hbnQsICgtbTcgKiBtMCArIG0xICogbTYpIC8gZGV0ZXJtaW5hbnQsICggbTQgKiBtMCAtIG0xICogbTMpIC8gZGV0ZXJtaW5hbnQsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQ0KG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBkZXRlcm1pbmFudDQobWF0cml4KSxcblxuICAgICAgICBiMDAgPSBtMCAqIG01IC0gbTEgKiBtNCxcbiAgICAgICAgYjAxID0gbTAgKiBtNiAtIG0yICogbTQsXG4gICAgICAgIGIwMiA9IG0wICogbTcgLSBtMyAqIG00LFxuICAgICAgICBiMDMgPSBtMSAqIG02IC0gbTIgKiBtNSxcbiAgICAgICAgYjA0ID0gbTEgKiBtNyAtIG0zICogbTUsXG4gICAgICAgIGIwNSA9IG0yICogbTcgLSBtMyAqIG02LFxuICAgICAgICBiMDYgPSBtOCAqIG0xMyAtIG05ICogbTEyLFxuICAgICAgICBiMDcgPSBtOCAqIG0xNCAtIG0xMCAqIG0xMixcbiAgICAgICAgYjA4ID0gbTggKiBtMTUgLSBtMTEgKiBtMTIsXG4gICAgICAgIGIwOSA9IG05ICogbTE0IC0gbTEwICogbTEzLFxuICAgICAgICBiMTAgPSBtOSAqIG0xNSAtIG0xMSAqIG0xMyxcbiAgICAgICAgYjExID0gbTEwICogbTE1IC0gbTExICogbTE0O1xuXG4gIHJldHVybiAoW1xuXG4gICAgKG01ICogYjExIC0gbTYgKiBiMTAgKyBtNyAqIGIwOSkgLyBkZXRlcm1pbmFudCwgKG0yICogYjEwIC0gbTEgKiBiMTEgLSBtMyAqIGIwOSkgLyBkZXRlcm1pbmFudCwgKG0xMyAqIGIwNSAtIG0xNCAqIGIwNCArIG0xNSAqIGIwMykgLyBkZXRlcm1pbmFudCwgKG0xMCAqIGIwNCAtIG05ICogYjA1IC0gbTExICogYjAzKSAvIGRldGVybWluYW50LFxuICAgIChtNiAqIGIwOCAtIG00ICogYjExIC0gbTcgKiBiMDcpIC8gZGV0ZXJtaW5hbnQsIChtMCAqIGIxMSAtIG0yICogYjA4ICsgbTMgKiBiMDcpIC8gZGV0ZXJtaW5hbnQsIChtMTQgKiBiMDIgLSBtMTIgKiBiMDUgLSBtMTUgKiBiMDEpIC8gZGV0ZXJtaW5hbnQsIChtOCAqIGIwNSAtIG0xMCAqIGIwMiArIG0xMSAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAobTQgKiBiMTAgLSBtNSAqIGIwOCArIG03ICogYjA2KSAvIGRldGVybWluYW50LCAobTEgKiBiMDggLSBtMCAqIGIxMCAtIG0zICogYjA2KSAvIGRldGVybWluYW50LCAobTEyICogYjA0IC0gbTEzICogYjAyICsgbTE1ICogYjAwKSAvIGRldGVybWluYW50LCAobTkgKiBiMDIgLSBtOCAqIGIwNCAtIG0xMSAqIGIwMCkgLyBkZXRlcm1pbmFudCxcbiAgICAobTUgKiBiMDcgLSBtNCAqIGIwOSAtIG02ICogYjA2KSAvIGRldGVybWluYW50LCAobTAgKiBiMDkgLSBtMSAqIGIwNyArIG0yICogYjA2KSAvIGRldGVybWluYW50LCAobTEzICogYjAxIC0gbTEyICogYjAzIC0gbTE0ICogYjAwKSAvIGRldGVybWluYW50LCAobTggKiBiMDMgLSBtOSAqIGIwMSArIG0xMCAqIGIwMCkgLyBkZXRlcm1pbmFudCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcixcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIHgsIG0xICogeCwgbTIgKiB4LCBtMyAqIHgsXG4gICAgbTQgKiB5LCBtNSAqIHksIG02ICogeSwgbTcgKiB5LFxuICAgIG04ICogeiwgbTkgKiB6LCBtMTAgKiB6LCBtMTEgKiB6LFxuICAgIG0xMiAqIDEsIG0xMyAqIDEsIG0xNCAqIDEsIG0xNSAqIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGU0KG1hdHJpeCwgYW5nbGUsIHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IG5vcm1hbGlzZTModmVjdG9yKSxcblxuICAgICAgICBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXgsXG5cbiAgICAgICAgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgYyA9IE1hdGguY29zKGFuZ2xlKSxcbiAgICAgICAgdCA9IDEgLSBjLFxuXG4gICAgICAgIGIwMCA9IHggKiB4ICogdCArIGMsXG4gICAgICAgIGIwMSA9IHkgKiB4ICogdCArIHogKiBzLFxuICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgYjEwID0geCAqIHkgKiB0IC0geiAqIHMsXG4gICAgICAgIGIxMSA9IHkgKiB5ICogdCArIGMsXG4gICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICBiMjAgPSB4ICogeiAqIHQgKyB5ICogcyxcbiAgICAgICAgYjIxID0geSAqIHogKiB0IC0geCAqIHMsXG4gICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCAqIGIwMCArIG00ICogYjAxICsgbTggKiBiMDIsIG0xICogYjAwICsgbTUgKiBiMDEgKyBtOSAqIGIwMiwgbTIgKiBiMDAgKyBtNiAqIGIwMSArIG0xMCAqIGIwMiwgbTMgKiBiMDAgKyBtNyAqIGIwMSArIG0xMSAqIGIwMixcbiAgICBtMCAqIGIxMCArIG00ICogYjExICsgbTggKiBiMTIsIG0xICogYjEwICsgbTUgKiBiMTEgKyBtOSAqIGIxMiwgbTIgKiBiMTAgKyBtNiAqIGIxMSArIG0xMCAqIGIxMiwgbTMgKiBiMTAgKyBtNyAqIGIxMSArIG0xMSAqIGIxMixcbiAgICBtMCAqIGIyMCArIG00ICogYjIxICsgbTggKiBiMjIsIG0xICogYjIwICsgbTUgKiBiMjEgKyBtOSAqIGIyMiwgbTIgKiBiMjAgKyBtNiAqIGIyMSArIG0xMCAqIGIyMiwgbTMgKiBiMjAgKyBtNyAqIGIyMSArIG0xMSAqIGIyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xNCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG00LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTYsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG04LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTksICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTEsXG4gICAgbTAgKiB4ICsgbTQgKiB5ICsgbTggKiB6ICsgbTEyLCBtMSAqIHggKyBtNSAqIHkgKyBtOSAqIHogKyBtMTMsIG0yICogeCArIG02ICogeSArIG0xMCAqIHogKyBtMTQsIG0zICogeCArIG03ICogeSArIG0xMSAqIHogKyBtMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcikge1xuICBjb25zdCBmID0gMSAvIE1hdGgudGFuKGZpZWxkT2ZWaWV3IC8gMiksXG4gICAgICAgIG5mID0gMSAvICh6TmVhciAtIHpGYXIpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgZiAvIGFzcGVjdFJhdGlvLCAwLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIGYsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKHpGYXIgKyB6TmVhcikgKiBuZiwgICAgLTEsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoMiAqIHpGYXIgKiB6TmVhcikgKiBuZiwgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpZGVudGl0eTIsXG4gIGlkZW50aXR5MyxcbiAgaWRlbnRpdHk0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICBkZXRlcm1pbmFudDIsXG4gIGRldGVybWluYW50MyxcbiAgZGV0ZXJtaW5hbnQ0LFxuICB0cmFuc3Bvc2UyLFxuICB0cmFuc3Bvc2UzLFxuICB0cmFuc3Bvc2U0LFxuICBpbnZlcnQyLFxuICBpbnZlcnQzLFxuICBpbnZlcnQ0LFxuICBzY2FsZTQsXG4gIHJvdGF0ZTQsXG4gIHRyYW5zbGF0ZTQsXG4gIHBlcnNwZWN0aXZlNFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlkZW50aXR5NCwgc2NhbGU0LCBpbnZlcnQ0LCByb3RhdGU0LCB0cmFuc2xhdGU0LCB0cmFuc3Bvc2U0LCBwZXJzcGVjdGl2ZTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIgPSBmYWxzZSkge1xuICBsZXQgcm90YXRpb25zTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gdGhpcmQoYW5nbGVzKSxcbiAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZSwgIC8vLy9cbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGUsIC8vL1xuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlLCAgLy8vXG4gICAgICAgIHhBeGlzID0gWyAxLCAwLCAwIF0sXG4gICAgICAgIHlBeGlzID0gWyAwLCAxLCAwIF0sXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF07XG5cbiAgaWYgKHJldmVyc2VPcmRlcikge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICB9IGVsc2Uge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICB9XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxhciA9IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSLCAvLy9cbiAgICAgICAgYW5nbGVzID0gc2NhbGUzKHJvdGF0aW9ucywgc2NhbGFyKSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpO1xuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpIHtcbiAgbGV0IG5vcm1hbHNNYXRyaXggPSBpbnZlcnQ0KHJvdGF0aW9uc01hdHJpeCk7IC8vL1xuXG4gIG5vcm1hbHNNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbHNNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpIHtcbiAgY29uc3QgekZhciA9IGNhbWVyYS5nZXRaRmFyKCksXG4gICAgICAgIHpOZWFyID0gY2FtZXJhLmdldFpOZWFyKCksXG4gICAgICAgIHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgZmllbGRPZlZpZXcgPSBjYW1lcmEuZ2V0RmllbGRPZlZpZXcoKSxcbiAgICAgICAgYXNwZWN0UmF0aW8gPSAoIHdpZHRoIC8gaGVpZ2h0ICksXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG11bHRpcGx5NCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucykge1xuICBsZXQgbWF0cml4ID0gbnVsbDtcblxuICBpZiAoc2NhbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzY2FsZU1hdHJpeCA9IHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHNjYWxlTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHNjYWxlTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChyb3RhdGlvbnNNYXRyaXgsIG1hdHJpeCk7XG5cbiAgfVxuXG4gIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgIG11bHRpcGx5NChwb3NpdGlvbk1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB2ZWN0b3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdHJhbnNmb3JtNChbIC4uLnZlY3RvciwgMSBdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQge2NvbXBvc2VUcmFuc2Zvcm19IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHJldHJpZXZlTWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgbWFza0VsZW1lbnQoY2hpbGRFbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge31cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBzY2FsZSA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCByZWZlcmVuY2UsIHRyYW5zZm9ybSk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnQsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuXG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXNrUmVmZXJlbmNlID0gbWFza1JlZmVyZW5jZTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gIH1cblxuICBnZXRNYXNrUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2tzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tzO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgaWYgKHRoaXMubWFza1JlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWFzayA9IG1hc2tzLmZpbmQoKG1hc2spID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWFzay5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlID09PSB0aGlzLm1hc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICAgIGlmIChtYXNrICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBtYXNrcyA9IFsgLi4ubWFza3MsIC4uLnRoaXMubWFza3MgXTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7ICAvLy9cblxuICAgIHRoaXMuYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgc2NhbGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwsIG1hc2tSZWZlcmVuY2UgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgbWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGZ1bmN0aW9uRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25DYW52YXNFbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBmdW5jdGlvbkVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiwgbWVyZ2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBub3JtYWxzTWF0cml4TmFtZSA9IFwidU5vcm1hbHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRpbmdTb3VyY2U7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcG9zaXRpb25NYXRyaXhOYW1lID0gXCJ1UG9zaXRpb25NYXRyaXhcIjtcbmV4cG9ydCBjb25zdCByb3RhdGlvbnNNYXRyaXhOYW1lID0gXCJ1Um90YXRpb25zTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleFBvc2l0aW9uXCI7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRzTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uc01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uc01hdHJpeE5hbWV9ICogJHtvZmZzZXRzTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhDb2xvdXJcIlxuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuXG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4TmFtZSwgcm90YXRpb25zTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0c01hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5pbXBvcnQgeyBzYW1wbGVyTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmVcIjtcbmltcG9ydCBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCI7XG5pbXBvcnQgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvY29sb3VyXCI7XG5pbXBvcnQgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlc1wiO1xuaW1wb3J0IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwXCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayk7XG5cbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmltYWdlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbG91clJlbmRlcmVyICE9PSBudWxsKSB7XG4gICAgICBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgaWYgKHRleHR1cmVSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcyk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9aX0ZBUiwgREVGQVVMVF9aX05FQVIsIERFRkFVTFRfRklFTERfT0ZfVklFVyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuekZhciA9IHpGYXI7XG4gICAgdGhpcy56TmVhciA9IHpOZWFyO1xuICAgIHRoaXMuZmllbGRPZlZpZXcgPSBmaWVsZE9mVmlldztcbiAgfVxuXG4gIGdldFpGYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuekZhcjtcbiAgfVxuXG4gIGdldFpOZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnpOZWFyO1xuICB9XG5cbiAgZ2V0RmllbGRPZlZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRPZlZpZXc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB7IGZpZWxkT2ZWaWV3ID0gREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgZmllbGRPZlZpZXcgKj0gREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVI7IC8vL1xuXG4gICAgY29uc3QgeyB6RmFyID0gREVGQVVMVF9aX0ZBUiwgek5lYXIgPSBERUZBVUxUX1pfTkVBUiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBXSEVFTF9FVkVOVF9UWVBFID0gXCJ3aGVlbFwiO1xuZXhwb3J0IGNvbnN0IEtFWVVQX0VWRU5UX1RZUEUgPSBcImtleXVwXCI7XG5leHBvcnQgY29uc3QgS0VZRE9XTl9FVkVOVF9UWVBFID0gXCJrZXlkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VVUF9FVkVOVF9UWVBFID0gXCJtb3VzZXVwXCI7XG5leHBvcnQgY29uc3QgTU9VU0VET1dOX0VWRU5UX1RZUEUgPSBcIm1vdXNlZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFTU9WRV9FVkVOVF9UWVBFID0gXCJtb3VzZW1vdmVcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBnZXRIYW5kbGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVycztcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RE9NRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgIC8vL1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwgdGhpcy5rZXlVcEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25FdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlLCAgLy8vXG4gICAgICAgICAga2V5RXZlbnRzID0gbmV3IEtleUV2ZW50cyhoYW5kbGVycywgc2hpZnRLZXlEb3duKTtcblxuICAgIHJldHVybiBrZXlFdmVudHM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgV0hFRUxfRVZFTlRfVFlQRSwgTU9VU0VVUF9FVkVOVF9UWVBFLCBNT1VTRURPV05fRVZFTlRfVFlQRSwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0gaGFuZGxlcnNNYXA7XG4gICAgdGhpcy5tb3VzZURvd24gPSBtb3VzZURvd247XG4gIH1cblxuICB3aGVlbEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIFdIRUVMX0VWRU5UX1RZUEUgXSxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlcihtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lciA9IChldmVudCwgZXZlbnRUeXBlKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bik7XG4gICAgfSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFVVBfRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFRE9XTl9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUpO1xuICB9XG5cbiAgYWRkTW91c2VVcEhhbmRsZXIobW91c2VVcEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRVVQX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlVXBIYW5kbGVycy5wdXNoKG1vdXNlVXBIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlRG93bkhhbmRsZXIobW91c2VEb3duSGFuZGxlcikge1xuICAgIGNvbnN0IG1vdXNlRG93bkhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VET1dOX0VWRU5UX1RZUEUgXTtcblxuICAgIG1vdXNlRG93bkhhbmRsZXJzLnB1c2gobW91c2VEb3duSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFTU9WRV9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZU1vdmVIYW5kbGVycy5wdXNoKG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBXSEVFTF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBXSEVFTF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRVVQX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoV0hFRUxfRVZFTlRfVFlQRSwgdGhpcy53aGVlbEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRVVQX0VWRU5UX1RZUEUsIHRoaXMubW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRURPV05fRVZFTlRfVFlQRSwgdGhpcy5tb3VzZURvd25FdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnNNYXAgPSB7fSxcbiAgICAgICAgICBtb3VzZURvd24gPSBmYWxzZSwgIC8vL1xuXHRcdFx0XHRcdG1vdXNlRXZlbnRzID0gbmV3IE1vdXNlRXZlbnRzKGhhbmRsZXJzTWFwLCBtb3VzZURvd24pO1xuXG4gICAgcmV0dXJuIG1vdXNlRXZlbnRzO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHdoZWVsRGVsdGEgfSA9IGV2ZW50LFxuICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgd2hlZWxEZWx0YSkpOyAvLy9cblxuICByZXR1cm4gbW91c2VXaGVlbERlbHRhO1xufVxuXG5mdW5jdGlvbiBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0LCBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudCxcbiAgICAgICAgY2FudmFzRE9NRWxlbWVudCA9IHRhcmdldCwgIC8vL1xuICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBjYW52YXNET01FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB7IHRvcCwgbGVmdCB9ID0gYm91bmRpbmdDbGllbnRSZWN0LFxuICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gW1xuICAgICAgICAgIGNsaWVudFggLSBsZWZ0LFxuICAgICAgICAgIHRvcCAtIGNsaWVudFlcbiAgICAgICAgXTtcblxuICByZXR1cm4gbW91c2VDb29yZGluYXRlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEtleUV2ZW50cyBmcm9tIFwiLi9rZXlFdmVudHNcIjtcbmltcG9ydCBNb3VzZUV2ZW50cyBmcm9tIFwiLi9tb3VzZUV2ZW50c1wiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgc3VidHJhY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5wdXQge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMua2V5RXZlbnRzID0ga2V5RXZlbnRzO1xuICAgIHRoaXMubW91c2VFdmVudHMgPSBtb3VzZUV2ZW50cztcbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCBtb3VzZURvd24sIGNhbnZhcykge1xuICAgIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gdGhpcy5tb3VzZUNvb3JkaW5hdGVzOyAgLy8vXG5cbiAgICB0aGlzLm1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzO1xuXG4gICAgaWYgKHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vdXNlRG93bikge1xuICAgICAgY29uc3QgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgICAgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHN1YnRyYWN0Mih0aGlzLm1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsRGVsdGEsIGNhbnZhcykge1xuICAgIGNvbnN0IHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKTtcblxuICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7IHRoaXMua2V5RXZlbnRzLmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTsgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZSgpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlciA9IChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgIHBhcnQuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHRoaXMudXNlcklucHV0SGFuZGxlcik7XG5cbiAgICB1c2VySW5wdXQuYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIodGhpcy5lc2NhcGVLZXlEb3duSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgIHBhcnQucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIHRoaXMuY2FudmFzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFydHMgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFBhcnQpLFxuICAgICAgICAgIGNhbWVyYSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDYW1lcmEpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgcGFydHMsIGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1I7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5pbXBvcnQgeyByZWZsZWN0MywgdHJ1bmNhdGU0LCB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKSB7XG4gIGFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyk7ICAvLy9cblxuICBjb25zdCByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyKTtcblxuICBsZXQgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChkaXJlY3Rpb25zLCByb3RhdGlvbnNNYXRyaXgpO1xuXG4gIHJlbGF0aXZlT2Zmc2V0cyA9IHRydW5jYXRlNChyZWxhdGl2ZU9mZnNldHMpO1xuXG4gIHJldHVybiByZWxhdGl2ZU9mZnNldHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2Zmc2V0c1wiO1xuaW1wb3J0IHsgTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiwgUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcikge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgICB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTsgLy8vXG5cbiAgICBjb25zdCBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAxKSksXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgLi4uc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMsIDEpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiAqIG1vdXNlV2hlZWxTZW5zaXRpdml0eSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiAqIG1vdXNlU2Vuc2l0aXZpdHksXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQU5HTEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihhbmdsZXMsIGNsb2Nrd2lzZSkge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMuY2xvY2t3aXNlID0gY2xvY2t3aXNlO1xuICB9XG5cbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIGlzQ2xvY2t3aXNlKCkge1xuICAgIHJldHVybiB0aGlzLmNsb2Nrd2lzZTtcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBBTkdMRVNfTVVMVElQTElFUik7IC8vL1xuXG4gICAgY29uc3QgbXVsdGlwbGllciA9IHRoaXMuY2xvY2t3aXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICsxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAgICAgMCwgK211bHRpcGxpZXIsIDAsXG4gICAgICAgICAgICAtbXVsdGlwbGllciwgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCwgICAgICAgICAgIDAsIDBcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4ucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwIF0sIG1hdHJpeCk7XG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDModGhpcy5hbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKSB7XG4gICAgY29uc3QgYW5nbGVzID0gWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sXG4gICAgICAgICAgY2xvY2t3aXNlID0gZmFsc2UsXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTihrZXkpIHtcbiAgbGV0IGpzb24gPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlID0gZ2V0KGtleSk7XG5cbiAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAganNvbiA9IEpTT04ucGFyc2UodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRKU09OKGtleSwganNvbikge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gIHNldChrZXksIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUpTT04oa2V5KSB7XG4gIHJlbW92ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBnZXQoa2F5KSB7XG4gIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2F5KSB8fCBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0KGtheSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2F5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICByZXR1cm4gdGlsdDtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UsIE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gbWluaW11bURpc3RhbmNlO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIGdldE1pbmltdW1EaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtRGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAtIG1vdXNlV2hlZWxEZWx0YTtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaXN0YW5jZSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICBtaW5pbXVtRGlzdGFuY2UgPSBNSU5JTVVNX0RJU1RBTkNFLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0cyxcbiAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB6b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpO1xuXG4gIHJldHVybiB0aWx0O1xufVxuXG5mdW5jdGlvbiB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbERpc3RhbmNlID0gREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbERpc3RhbmNlID0gZGlzdGFuY2U7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiB6b29tO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEFOT05ZTU9VUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGhvc3QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCBjYWxsYmFjaykge1xuICBjb25zdCBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWAsXG4gICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUztcblxuICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWQsXG4gICAgICBjcm9zc09yaWdpblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzLCBpbWFnZU5hbWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGhvc3QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04sIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHNyYyA9IGAke2hvc3R9JHtpbWFnZU1hcFVSSX1gLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWQsXG4gICAgY3Jvc3NPcmlnaW5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXAsIGltYWdlTWFwSlNPTik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVsb2FkSW1hZ2VzLFxuICBwcmVsb2FkSW1hZ2VNYXBcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMywgbGVuZ3RoMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICBlZGdlID0gZWRnZS5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVOb3JtYWwobm9ybWFsKSB7XG4gIG5vcm1hbCA9IG5vcm1hbC5jbG9uZSgpO1xuICBcbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVmVydGljZXModmVydGljZXMpIHtcbiAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIHZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSkge1xuICBjb25zdCBlZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCwgLy8vXG4gICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgIGVkZ2UgPSBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCkge1xuICBjb25zdCBub3JtYWwgPSBOb3JtYWwuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcykge1xuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIGFyZWEgPSBsZW5ndGgzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSkgLyAyO1xuXG4gIHJldHVybiBhcmVhO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgcHVzaCwgcGVybXV0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uLCBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zLFxuICAgICAgICAgY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4LFxuICAgICAgICAgY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb259IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgdGhpcy5ub3JtYWwgPSBub3JtYWw7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0RWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRnZXM7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb247XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCBub3JtYWxFeHRlbnQgPSB0aGlzLm5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxFeHRlbnQsICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW1xuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXMoaW5kZXgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleCA9IGluZGV4ICogMyxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW1xuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAwLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAxLFxuICAgICAgICAgICAgdmVydGV4SW5kZXggKyAyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBpc01hc2tlZChtYXNraW5nRmFjZXQpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZXMgPSBtYXNraW5nRmFjZXQuZ2V0TWFza2luZ0VkZ2VzKCksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvbiA9IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24odGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgICBtYXNrZWQgPSBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gbWFza2VkO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcGVybXV0ZSh0aGlzLnZlcnRpY2VzLCBwbGFjZXMpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgdmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBzcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEsIDIgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDIsIDAgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgICAgICBbIDMsIDQsIDAgXSxcbiAgICAgICAgICAgIFsgMywgMiwgNCBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgwLCAxKTsgIC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMCBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDMsIDIgXSxcbiAgICAgICAgICAgIFsgMywgMSwgMiBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXMuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih0aGlzLnZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcikge1xuICBjb25zdCB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgXG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zbGljZSgpOyAvLy9cbiAgICBcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pLFxuICAgICAgICBzbWFsbGVyRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCB0aGlzLnJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCB0aGlzLnJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICByZ2JhID0gWyAuLi5jb2xvdXIsIDEgXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IENvbG91cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZFwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5jb2xvdXIsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhZGQoZmFjZXRzLCBmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBpbnZlcnQyLCBpbnZlcnQzIH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBhZGQyLCBkb3QyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB7XG4gICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRleHR1cmVDb29yZGluYXRlVHVwbGUuc2xpY2UoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGU7XG4gIH0pO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpIHtcbiAgY29uc3QgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGV4dGVudCxcbiAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gYWRkMihkb3QyKHRleHR1cmVDb29yZGluYXRlVHVwbGUsIFsgd2lkdGgsIGhlaWdodCBdICksIFsgbGVmdCwgYm90dG9tIF0pO1xuXG4gICAgICAgICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7XG4gICAgICAgIH0pOyAvLy9cblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICBjb25zdCBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uOyAvLy9cblxuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwYXJlbnRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHBhcmVudFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHZlcnRpY2VzID0gcm90YXRlZFZlcnRpY2VzOyAgLy8vXG5cbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleCA9IGZpcnN0KHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4ID0gc2Vjb25kKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXggPSB0aGlyZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGZpcnN0KHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHNlY29uZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRoaXJkKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uID0gZmlyc3RQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb24gPSBzZWNvbmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIFIxeCA9IGZpcnN0VmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjF5ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBSMnggPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFIyeSA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUjN4ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSM3kgPSB0aGlyZFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFAxeCA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMnggPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAzeCA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMXkgPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDJ5ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQM3kgPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDF1ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDF2ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDJ1ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAydiA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQM3UgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQM3YgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXggPSBpbnZlcnQzKFsgMSwgMSwgMSwgUDF1LCBQMnUsIFAzdSwgUDF2LCBQMnYsIFAzdiBdKSxcbiAgICAgICAgZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeCwgUDJ4LCBQM3ggXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXksIFAyeSwgUDN5IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIE94ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIE95ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXggPSBpbnZlcnQyKFsgVXgsIFV5LCBWeCwgVnkgXSksXG4gICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMXggLSBPeCwgUjF5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjJ4IC0gT3gsIFIyeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjN4IC0gT3gsIFIzeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBbXG4gICAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICBdO1xuXG4gIHJldHVybiBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGltYWdlTWFwSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBpbWFnZU1hcEpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlOyAgLy8vXG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBzdXBlci5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBhZGQoZmFjZXRzLCBmYWNldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXMgfSBmcm9tIFwiLi9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrIH0gZnJvbSBcIi4vZWxlbWVudC9tYXNrXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcnQgfSBmcm9tIFwiLi9lbGVtZW50L3BhcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NlbmUgfSBmcm9tIFwiLi9lbGVtZW50L3NjZW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2dhbWluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9kZXNpZ25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJlbG9hZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlY3Rvck1hdGhzIH0gZnJvbSBcIi4vbWF0aHMvdmVjdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hdHJpeE1hdGhzIH0gZnJvbSBcIi4vbWF0aHMvbWF0cml4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4vaW5kZXhcIjsgLy8vL1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBSZWFjdFxufSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGYWNlIGZyb20gXCIuL2ZhY2VcIjtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9ID5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYSBwZXJzaXN0IC8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInBsYXN0ZXIuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMiwgMCBdLCBbIDIsIDIgXSBdLFxuICAgICAgICBbIFsgMiwgMiBdLCBbIDAsIDIgXSwgWyAwLCAwIF0gXSxcblxuICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRRdWFkcmFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSB9ID0gd2luZG93O1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKGhvc3QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJLCAoaW1hZ2VzLCBpbWFnZU5hbWVzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfSA+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwibWFza1wiPlxuICAgICAgICAgICAgPENvbG91cmVkU3F1YXJlIHNjYWxlPXtbIDAuMjUsIDAuMjUsIDEgXX0gcG9zaXRpb249e1sgMC4xMjUsIDAuMTI1LCAwLjEyNSBdfSAvPlxuICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfSBpbWFnZU5hbWU9XCJwYXZpbmcuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGlsaW5nRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3Qgc2ltcGxlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMCwgMCwgMSBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgTWFzaywgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCI+XG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS80LCAxLzQsIDEvNCBdfSAvPlxuICAgICAgICA8L01hc2s+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiPlxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFza1JlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8Q3ViZSBtYXNrUmVmZXJlbmNlPVwiaGFsZi1zaXplZC1jdWJlXCIgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hc2tpbmdFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgICAwLCAwLCAwIF0sXG4gICAgICAgIFsgICAxLCAwLCAwIF0sXG4gICAgICAgIFsgMC41LCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMiBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwic3RyaXBlcy5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMC41LCAxIF0gXSxcblxuICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRUcmlhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkVHJpYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFRyaWFuZ2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlZFRyaWFuZ2xlIGZyb20gXCIuL3RleHR1cmVkVHJpYW5nbGVcIjtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZGUgZnJvbSBcIi4vc2lkZVwiO1xuXG5jb25zdCBQeXJhbWlkID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8U2lkZSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsICA5MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDE4MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDI3MCwgMCBdfSAvPixcblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHlyYW1pZDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydCwgU2NlbmUsIENhbnZhcywgR2FtaW5nQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFB5cmFtaWQgZnJvbSBcIi4vZWxlbWVudC9weXJhbWlkXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBwcmVsb2FkVXRpbGl0aWVzLFxuICAgICAgeyBob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OIH0gPSB3aW5kb3c7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoaG9zdCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiwgKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYSBtb3VzZVNlbnNpdGl2aXR5PXsxMH0gLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB5cmFtaWRFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3hnbFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgdGlsaW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3RpbGluZ1wiO1xuaW1wb3J0IHNpbXBsZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVcIjtcbmltcG9ydCBtYXNraW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL21hc2tpbmdcIjtcbmltcG9ydCBweXJhbWlkRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3B5cmFtaWRcIjtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiY3ViZVwiOlxuICAgIGN1YmVFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwidGlsaW5nXCI6XG4gICAgdGlsaW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInNpbXBsZVwiOlxuICAgIHNpbXBsZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJweXJhbWlkXCI6XG4gICAgcHlyYW1pZEV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O1FBRWdCLE9BQUssV0FBQTtpQkFBTDs7UUFTQSxPQUFLLFdBQUE7aUJBQUw7O1FBVUEsT0FBSyxXQUFBO2lCQUFMOztRQVdBLFNBQU8sV0FBQTtpQkFBUDs7UUFNQSxTQUFPLFdBQUE7aUJBQVA7O1FBTUEsU0FBTyxXQUFBO2lCQUFQOztRQU1BLE1BQUksV0FBQTtpQkFBSjs7UUFPQSxNQUFJLFdBQUE7aUJBQUo7O1FBT0EsTUFBSSxXQUFBO2lCQUFKOztRQU9BLFFBQU0sV0FBQTtpQkFBTjs7UUFhQSxZQUFVLFdBQUE7aUJBQVY7O1FBYUEsWUFBVSxXQUFBO2lCQUFWOztRQWNBLFlBQVUsV0FBQTtpQkFBVjs7UUFlQSxVQUFRLFdBQUE7aUJBQVI7O1FBV0EsVUFBUSxXQUFBO2lCQUFSOztRQVlBLFVBQVEsV0FBQTtpQkFBUjs7UUFhQSxXQUFTLFdBQUE7aUJBQVQ7O1FBWUEsUUFBTSxXQUFBO2lCQUFOOztRQVdBLFFBQU0sV0FBQTtpQkFBTjs7UUFZQSxRQUFNLFdBQUE7aUJBQU47O1FBYUEsTUFBSSxXQUFBO2lCQUFKOztRQVlBLE1BQUksV0FBQTtpQkFBSjs7UUFhQSxNQUFJLFdBQUE7aUJBQUo7O1FBY0EsV0FBUyxXQUFBO2lCQUFUOztRQVlBLFdBQVMsV0FBQTtpQkFBVDs7UUFhQSxXQUFTLFdBQUE7aUJBQVQ7O1FBY0EsWUFBVSxXQUFBO2lCQUFWOztRQWFBLFlBQVUsV0FBQTtpQkFBVjs7UUFjQSxZQUFVLFdBQUE7aUJBQVY7O1FBZ0JoQixTQThCRSxXQUFBO2lCQTlCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpVTyx1QkFBUztBQUNkLGVBQVE7VUFFTjtVQUNBOzs7QUFLRyx1QkFBUztBQUNkLGVBQVE7VUFFTjtV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
