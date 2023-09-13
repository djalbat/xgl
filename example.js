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
        multiply2: function() {
          return multiply2;
        },
        multiply3: function() {
          return multiply3;
        },
        multiply4: function() {
          return multiply4;
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
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
      }
      function dot3(vectorA, vectorB) {
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2];
      }
      function dot4(vectorA, vectorB) {
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2] + vectorA[3] * vectorB[3];
      }
      function cross3(vectorA, vectorB) {
        var ax = vectorA[0], ay = vectorA[1], az = vectorA[2], bx = vectorB[0], by = vectorB[1], bz = vectorB[2];
        return [
          ay * bz - az * by,
          az * bx - ax * bz,
          ax * by - ay * bx
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
        var x = vector[0], y = vector[1], z = vector[2], length = Math.sqrt(x * x + y * y + z * z);
        return [
          x / length,
          y / length,
          z / length
        ];
      }
      function normalise4(vector) {
        var x = vector[0], y = vector[1], z = vector[2], w = vector[3], length = Math.sqrt(x * x + y * y + z * z + w * w);
        return [
          x / length,
          y / length,
          z / length,
          w / length
        ];
      }
      function reflect2(vector) {
        return [
          -vector[0],
          -vector[1]
        ];
      }
      function reflect3(vector) {
        return [
          -vector[0],
          -vector[1],
          -vector[2]
        ];
      }
      function reflect4(vector) {
        return [
          -vector[0],
          -vector[1],
          -vector[2],
          -vector[3]
        ];
      }
      function truncate4(vector) {
        return [
          vector[0],
          vector[1],
          vector[2]
        ];
      }
      function scale2(vector, scalar) {
        return [
          vector[0] * scalar,
          vector[1] * scalar
        ];
      }
      function scale3(vector, scalar) {
        return [
          vector[0] * scalar,
          vector[1] * scalar,
          vector[2] * scalar
        ];
      }
      function scale4(vector, scalar) {
        return [
          vector[0] * scalar,
          vector[1] * scalar,
          vector[2] * scalar,
          vector[3] * scalar
        ];
      }
      function add2(vectorA, vectorB) {
        return [
          vectorA[0] + vectorB[0],
          vectorA[1] + vectorB[1]
        ];
      }
      function add3(vectorA, vectorB) {
        return [
          vectorA[0] + vectorB[0],
          vectorA[1] + vectorB[1],
          vectorA[2] + vectorB[2]
        ];
      }
      function add4(vectorA, vectorB) {
        return [
          vectorA[0] + vectorB[0],
          vectorA[1] + vectorB[1],
          vectorA[2] + vectorB[2],
          vectorA[3] + vectorB[3]
        ];
      }
      function subtract2(vectorA, vectorB) {
        return [
          vectorA[0] - vectorB[0],
          vectorA[1] - vectorB[1]
        ];
      }
      function subtract3(vectorA, vectorB) {
        return [
          vectorA[0] - vectorB[0],
          vectorA[1] - vectorB[1],
          vectorA[2] - vectorB[2]
        ];
      }
      function subtract4(vectorA, vectorB) {
        return [
          vectorA[0] - vectorB[0],
          vectorA[1] - vectorB[1],
          vectorA[2] - vectorB[2],
          vectorA[3] - vectorB[3]
        ];
      }
      function multiply2(vectorA, vectorB) {
        return [
          vectorA[0] * vectorB[0],
          vectorA[1] * vectorB[1]
        ];
      }
      function multiply3(vectorA, vectorB) {
        return [
          vectorA[0] * vectorB[0],
          vectorA[1] * vectorB[1],
          vectorA[2] * vectorB[2]
        ];
      }
      function multiply4(vectorA, vectorB) {
        return [
          vectorA[0] * vectorB[0],
          vectorA[1] * vectorB[1],
          vectorA[2] * vectorB[2],
          vectorA[3] * vectorB[3]
        ];
      }
      function transform2(vector, matrix) {
        var x = vector[0], y = vector[1];
        return [
          matrix[0] * x + matrix[2] * y,
          matrix[1] * x + matrix[3] * y
        ];
      }
      function transform3(vector, matrix) {
        var x = vector[0], y = vector[1], z = vector[2];
        return [
          matrix[0] * x + matrix[3] * y + matrix[6] * z,
          matrix[1] * x + matrix[4] * y + matrix[7] * z,
          matrix[2] * x + matrix[5] * y + matrix[8] * z
        ];
      }
      function transform4(vector, matrix) {
        var x = vector[0], y = vector[1], z = vector[2], w = vector[3];
        return [
          matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w,
          matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w,
          matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w,
          matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w
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
        multiply2,
        multiply3,
        multiply4,
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
      var _quaternion = require_quaternion();
      var _vector = require_vector();
      function cloneTextureCoordinateTuples(textureCoordinateTuples) {
        textureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          textureCoordinateTuple = textureCoordinateTuple.slice();
          return textureCoordinateTuple;
        });
        return textureCoordinateTuples;
      }
      function calculateMappedTextureCoordinateTuples(textureCoordinateTuples, extent) {
        var left = extent.left, bottom = extent.bottom, width = extent.width, height = extent.height, mappedTextureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          var mappedTextureCoordinateTuple = (0, _vector.add2)((0, _vector.multiply2)(textureCoordinateTuple, [
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21hdGhzL3ZlY3Rvci5qcyIsICJzcmMvZGVmYXVsdHMuanMiLCAic3JjL21peGlucy9kZXB0aC5qcyIsICJzcmMvZXJyb3JzLmpzIiwgInNyYy9taXhpbnMvc2hhZGVyLmpzIiwgInNyYy9taXhpbnMvYnVmZmVyLmpzIiwgInNyYy9taXhpbnMvY29sb3VyLmpzIiwgInNyYy9taXhpbnMvbWF0cml4LmpzIiwgInNyYy9jb25zdGFudHMuanMiLCAic3JjL21peGlucy90ZXh0dXJlLmpzIiwgInNyYy9taXhpbnMvcHJvZ3JhbS5qcyIsICJzcmMvbWl4aW5zL2JsZW5kaW5nLmpzIiwgInNyYy9taXhpbnMvbG9jYXRpb24uanMiLCAic3JjL2NhbnZhcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9sZXZlbHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9oZWFkZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2tleUNvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2VuY29kaW5ncy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c0NvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNNZXNzYWdlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hamF4LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy92ZXJzaW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgInNyYy9lbGVtZW50LmpzIiwgInNyYy9wcmltaXRpdmUvZWRnZS5qcyIsICJzcmMvdXRpbGl0aWVzL21pZFBvaW50LmpzIiwgInNyYy9wcmltaXRpdmUvZWRnZS9tYXNraW5nLmpzIiwgInNyYy91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCAic3JjL3V0aWxpdGllcy9hbmdsZS5qcyIsICJzcmMvdXRpbGl0aWVzL3F1YXRlcm5pb24uanMiLCAic3JjL3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2ludGVyc2VjdGlvbi5qcyIsICJzcmMvcHJpbWl0aXZlL3ZlcnRpY2FsTGluZS5qcyIsICJzcmMvdXRpbGl0aWVzL3ZlcnRpY2VzLmpzIiwgInNyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwgInNyYy9tYXRocy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy90cmFuc2Zvcm0uanMiLCAic3JjL2VsZW1lbnQvbWFzay5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgInNyYy9yZWFjdC5qcyIsICJzcmMvcmVuZGVyZXIuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyIsICJzcmMvcmVuZGVyZXIvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsICJzcmMvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcC5qcyIsICJzcmMvZWxlbWVudC9wYXJ0LmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS5qcyIsICJzcmMvZXZlbnRUeXBlcy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvdXNlcklucHV0LmpzIiwgInNyYy9lbGVtZW50L3NjZW5lLmpzIiwgInNyYy91dGlsaXRpZXMvb2Zmc2V0cy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9wYW4uanMiLCAic3JjL21pc2NlbGxhbmVvdXMvdGlsdC5qcyIsICJzcmMvdXRpbGl0aWVzL2xvY2FsU3RvcmFnZS5qcyIsICJzcmMvZWxlbWVudC9jYW1lcmEvZ2FtaW5nLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhL2Rlc2lnbi5qcyIsICJzcmMvdXRpbGl0aWVzL3ByZWxvYWQuanMiLCAic3JjL3ByaW1pdGl2ZS9ub3JtYWwuanMiLCAic3JjL3ByaW1pdGl2ZS92ZXJ0ZXguanMiLCAic3JjL3V0aWxpdGllcy9mYWNldC5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0LmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkLmpzIiwgInNyYy91dGlsaXRpZXMvdGV4dHVyZS5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL3hnbC5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2N1YmUuanMiLCAic3JjL2V4YW1wbGUvY3ViZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZS5qcyIsICJzcmMvZXhhbXBsZS90aWxpbmcuanMiLCAic3JjL2V4YW1wbGUvc2ltcGxlLmpzIiwgInNyYy9leGFtcGxlL21hc2tpbmcuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3B5cmFtaWQuanMiLCAic3JjL2V4YW1wbGUvcHlyYW1pZC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvMygpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm80KCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgyKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHkgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgzKHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHogXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCBbIHgsIHksIHosIHcgXSA9IHZlY3RvcjtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QyKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Myh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZG90NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSArIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdICsgdmVjdG9yQVszXSAqIHZlY3RvckJbM10pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zczModmVjdG9yQSwgdmVjdG9yQikge1xuICBjb25zdCBheCA9IHZlY3RvckFbMF0sIGF5ID0gdmVjdG9yQVsxXSwgYXogPSB2ZWN0b3JBWzJdLFxuICAgICAgICBieCA9IHZlY3RvckJbMF0sIGJ5ID0gdmVjdG9yQlsxXSwgYnogPSB2ZWN0b3JCWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYXkgKiBieiAtIGF6ICogYnksXG4gICAgYXogKiBieCAtIGF4ICogYnosXG4gICAgYXggKiBieSAtIGF5ICogYngsXG5cbiAgXSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTIodmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSBdID0gdmVjdG9yLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTModmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopO1xuXG4gIHJldHVybiAoW1xuXG4gICAgeCAvIGxlbmd0aCxcbiAgICB5IC8gbGVuZ3RoLFxuICAgIHogLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2U0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcblxuICByZXR1cm4gKFtcblxuICAgIHggLyBsZW5ndGgsXG4gICAgeSAvIGxlbmd0aCxcbiAgICB6IC8gbGVuZ3RoLFxuICAgIHcgLyBsZW5ndGgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAtdmVjdG9yWzBdLFxuICAgIC12ZWN0b3JbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAtdmVjdG9yWzBdLFxuICAgIC12ZWN0b3JbMV0sXG4gICAgLXZlY3RvclsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3Q0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIC12ZWN0b3JbMF0sXG4gICAgLXZlY3RvclsxXSxcbiAgICAtdmVjdG9yWzJdLFxuICAgIC12ZWN0b3JbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdLFxuICAgIHZlY3RvclsxXSxcbiAgICB2ZWN0b3JbMl1cblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMih2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuICAgIHZlY3RvclszXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdICsgdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdIC0gdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTIodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtMyh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFszXSAqIHkgKyBtYXRyaXhbNl0gKiB6LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzddICogeixcbiAgICBtYXRyaXhbMl0gKiB4ICsgbWF0cml4WzVdICogeSArIG1hdHJpeFs4XSAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM107XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCArIG1hdHJpeFsgNF0gKiB5ICsgbWF0cml4WyA4XSAqIHogKyBtYXRyaXhbMTJdICogdyxcbiAgICBtYXRyaXhbIDFdICogeCArIG1hdHJpeFsgNV0gKiB5ICsgbWF0cml4WyA5XSAqIHogKyBtYXRyaXhbMTNdICogdyxcbiAgICBtYXRyaXhbIDJdICogeCArIG1hdHJpeFsgNl0gKiB5ICsgbWF0cml4WzEwXSAqIHogKyBtYXRyaXhbMTRdICogdyxcbiAgICBtYXRyaXhbIDNdICogeCArIG1hdHJpeFsgN10gKiB5ICsgbWF0cml4WzExXSAqIHogKyBtYXRyaXhbMTVdICogdyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB6ZXJvMixcbiAgemVybzMsXG4gIHplcm80LFxuICBsZW5ndGgyLFxuICBsZW5ndGgzLFxuICBsZW5ndGg0LFxuICBkb3QyLFxuICBkb3QzLFxuICBkb3Q0LFxuICBjcm9zczMsXG4gIG5vcm1hbGlzZTIsXG4gIG5vcm1hbGlzZTMsXG4gIG5vcm1hbGlzZTQsXG4gIHJlZmxlY3QyLFxuICByZWZsZWN0MyxcbiAgcmVmbGVjdDQsXG4gIHRydW5jYXRlNCxcbiAgc2NhbGUyLFxuICBzY2FsZTMsXG4gIHNjYWxlNCxcbiAgYWRkMixcbiAgYWRkMyxcbiAgYWRkNCxcbiAgc3VidHJhY3QyLFxuICBzdWJ0cmFjdDMsXG4gIHN1YnRyYWN0NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgdHJhbnNmb3JtMixcbiAgdHJhbnNmb3JtMyxcbiAgdHJhbnNmb3JtNFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgemVybzIsIHplcm8zIH0gZnJvbSBcIi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1IgPSAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRyA9IDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9CID0gMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0EgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVQVEggPSAxLjA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9aX0ZBUiA9IDEwMDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9aX05FQVIgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEVSU0lTVCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRklFTERfT0ZfVklFVyA9IDQ1O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgPSB6ZXJvMigpO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9PRkZTRVRTID0gemVybzMoKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiA9IDAuMDAwMDAwMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UgPSA1O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiA9IFsgMCwgMCwgNSBdO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFkgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgPSAxO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0RFUFRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBERUZBVUxUX0RFUFRIKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gREVQVEhfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBERVBUSF9URVNULFxuICAgICAgICBkZXB0aENvbXBhcmlzb25GdW5jdGlvbiA9IExFUVVBTDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uKTtcbn1cblxuY29uc3QgZGVwdGhNaXhpbnMgPSB7XG4gIGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVwdGhNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTSEFERVJfRVJST1IgPSBcIlVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5cIjtcbmV4cG9ydCBjb25zdCBXRUJfR0xfQ09OVEVYVF9FUlJPUiA9IFwiVW5hYmxlIHRvIGdldCB0aGUgV2ViR0wgY29udGV4dC5cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hBREVSX0VSUk9SIH0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihTSEFERVJfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiBmcmFnbWVudFNoYWRlcjtcbn1cblxuY29uc3Qgc2hhZGVyTWl4aW5zID0ge1xuICBjcmVhdGVTaGFkZXIsXG4gIGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoYWRlck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICB1aW50MTZBcnJheSA9IG5ldyBVaW50MTZBcnJheShkYXRhKSxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgdWludDE2QXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gZWxlbWVudEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kQnVmZmVyKGJ1ZmZlciwgYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIEZMT0FUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdHlwZSA9IEZMT0FULFxuICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMDtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVMb2NhdGlvbik7XG59XG5cbmNvbnN0IGJ1ZmZlck1peGlucyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVmZmVyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX1IsIERFRkFVTFRfRywgREVGQVVMVF9CLCBERUZBVUxUX0EgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IERFRkFVTFRfUiwgZyA9IERFRkFVTFRfRywgYiA9IERFRkFVTFRfQiwgYSA9IERFRkFVTFRfQSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuY29uc3QgY29sb3VyTWl4aW5zID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG91ck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxuY29uc3QgbWF0cml4TWl4aW5zID0ge1xuICBhcHBseU1hdHJpeFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0cml4TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgV0VCR0wgPSBcIndlYmdsXCI7XG5leHBvcnQgY29uc3QgV0lEVEggPSBcIndpZHRoXCI7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gXCJoZWlnaHRcIjtcbmV4cG9ydCBjb25zdCBDQU5WQVMgPSBcImNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgQU5PTllNT1VTID0gXCJhbm9ueW1vdXNcIjtcbmV4cG9ydCBjb25zdCBHQU1JTkdfQ0FNRVJBID0gXCJnYW1pbmdfY2FtZXJhXCI7XG5leHBvcnQgY29uc3QgREVTSUdOX0NBTUVSQSA9IFwiZGVzaWduX2NhbWVyYVwiO1xuZXhwb3J0IGNvbnN0IFZFUlRJQ0VTX0xFTkdUSCA9IDM7XG5leHBvcnQgY29uc3QgTUlOSU1VTV9ESVNUQU5DRSA9IDE7XG5leHBvcnQgY29uc3QgSU5WRVJUX01VTFRJUExJRVIgPSAtMTtcbmV4cG9ydCBjb25zdCBBTkdMRVNfTVVMVElQTElFUiA9IDAuMDE7XG5leHBvcnQgY29uc3QgTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiA9IDAuMjU7XG5leHBvcnQgY29uc3QgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgPSBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyA9IFwiRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG5leHBvcnQgY29uc3QgTU9aX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyA9IFwiTU9aX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IFdFQktJVF9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIldFQktJVF9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSID0gMC4wMjU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyxcbiAgICAgICAgIE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMsXG4gICAgICAgICBXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KSB7XG5cdGNvbnN0IHsgUkdCQSwgTElORUFSLCBVTlNJR05FRF9CWVRFLCBURVhUVVJFMCwgVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFRFWFRVUkVfV1JBUF9ULCBVTlBBQ0tfRkxJUF9ZX1dFQkdMLCBDTEFNUF9UT19FREdFLCBORUFSRVNULCBSRVBFQVQsIFRFWFRVUkVfTUlOX0ZJTFRFUiB9ID0gdGhpcy5jb250ZXh0LFxuXHRcdFx0XHR0YXJnZXQgPSBURVhUVVJFMCArIGluZGV4LFxuXHRcdFx0XHRsZXZlbCA9IDAsXG5cdFx0XHRcdGludGVybmFsRm9ybWF0ID0gUkdCQSxcblx0XHRcdFx0Zm9ybWF0ID0gUkdCQSxcblx0XHRcdFx0dHlwZSA9IFVOU0lHTkVEX0JZVEUsXG5cdFx0XHRcdHRleHR1cmUgPSB0aGlzLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xuXG4gIHRoaXMuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRhcmdldCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gIHRoaXMuY29udGV4dC5waXhlbFN0b3JlaShVTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcblxuICB0aGlzLmNvbnRleHQudGV4SW1hZ2UyRChURVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1hZ2UpO1xuXG4gIGlmIChyZXBlYXQpIHtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgUkVQRUFUKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgUkVQRUFUKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgQ0xBTVBfVE9fRURHRSk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIENMQU1QX1RPX0VER0UpO1xuICB9XG5cblx0dGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9NSU5fRklMVEVSLCBMSU5FQVIpO1xuXG5cdHJldHVybiB0ZXh0dXJlO1xufVxuXG5mdW5jdGlvbiBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpIHtcbiAgY29uc3QgZXh0ZW5zaW9uID0gKFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oTU9aX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKFdFQktJVF9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpXG4gICk7XG5cbiAgaWYgKGV4dGVuc2lvbikge1xuICAgIGNvbnN0IHsgVEVYVFVSRV8yRCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHsgTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCB9ID0gZXh0ZW5zaW9uLFxuICAgICAgICAgIG1heGltdW0gPSB0aGlzLmNvbnRleHQuZ2V0UGFyYW1ldGVyKE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCk7XG5cbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyZihURVhUVVJFXzJELCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgbWF4aW11bSk7XG4gIH1cbn1cblxuY29uc3QgdGV4dHVyZU1peGlucyA9IHtcbiAgY3JlYXRlVGV4dHVyZSxcbiAgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRleHR1cmVNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5jb25zdCBwcm9ncmFtTWl4aW5zID0ge1xuICBjcmVhdGVQcm9ncmFtLFxuICB1c2VQcm9ncmFtXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9ncmFtTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBlbmFibGVCbGVuZGluZygpIHtcbiAgY29uc3QgeyBCTEVORCwgU1JDX0FMUEhBLCBPTkUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBCTEVORCxcbiAgICAgICAgc291cmNlRmFjdG9yID0gU1JDX0FMUEhBLFxuICAgICAgICBkZXN0aW5hdGlvbkZhY3RvciA9IE9ORTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuYmxlbmRGdW5jKHNvdXJjZUZhY3RvciwgZGVzdGluYXRpb25GYWN0b3IpO1xufVxuXG5jb25zdCBibGVuZGluZ01peGlucyA9IHtcbiAgZW5hYmxlQmxlbmRpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJsZW5kaW5nTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHtcbiAgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7XG59XG5cbmNvbnN0IGxvY2F0aW9uTWl4aW5zID0ge1xuICBnZXRVbmlmb3JtTG9jYXRpb24sXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uLFxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2F0aW9uTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZGVwdGhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RlcHRoXCI7XG5pbXBvcnQgc2hhZGVyTWl4aW5zIGZyb20gXCIuL21peGlucy9zaGFkZXJcIjtcbmltcG9ydCBidWZmZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2J1ZmZlclwiO1xuaW1wb3J0IGNvbG91ck1peGlucyBmcm9tIFwiLi9taXhpbnMvY29sb3VyXCI7XG5pbXBvcnQgbWF0cml4TWl4aW5zIGZyb20gXCIuL21peGlucy9tYXRyaXhcIjtcbmltcG9ydCB0ZXh0dXJlTWl4aW5zIGZyb20gXCIuL21peGlucy90ZXh0dXJlXCI7XG5pbXBvcnQgcHJvZ3JhbU1peGlucyBmcm9tIFwiLi9taXhpbnMvcHJvZ3JhbVwiO1xuaW1wb3J0IGJsZW5kaW5nTWl4aW5zIGZyb20gXCIuL21peGlucy9ibGVuZGluZ1wiO1xuaW1wb3J0IGxvY2F0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9sb2NhdGlvblwiO1xuXG5pbXBvcnQgeyBXRUJfR0xfQ09OVEVYVF9FUlJPUiB9IGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0IHsgV0VCR0wsIFdJRFRILCBIRUlHSFQsIENBTlZBUywgU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gQ0FOVkFTKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoV0lEVEgsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShIRUlHSFQsIGhlaWdodCk7IH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbG9jYXRpb25NaXhpbnMpO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSBTVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChXRUJHTCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFdFQl9HTF9DT05URVhUX0VSUk9SKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVFJBQ0VfTEVWRUwgPSBcInRyYWNlXCI7XG5leHBvcnQgY29uc3QgREVCVUdfTEVWRUwgPSBcImRlYnVnXCI7XG5leHBvcnQgY29uc3QgSU5GT19MRVZFTCA9IFwiaW5mb1wiO1xuZXhwb3J0IGNvbnN0IFdBUk5JTkdfTEVWRUwgPSBcIndhcm5pbmdcIjtcbmV4cG9ydCBjb25zdCBFUlJPUl9MRVZFTCA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBGQVRBTF9MRVZFTCA9IFwiZmF0YWxcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUUkFDRV9MRVZFTCxcbiAgREVCVUdfTEVWRUwsXG4gIElORk9fTEVWRUwsXG4gIFdBUk5JTkdfTEVWRUwsXG4gIEVSUk9SX0xFVkVMLFxuICBGQVRBTF9MRVZFTFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG5leHBvcnQgY29uc3QgUEFUQ0hfTUVUSE9EID0gXCJQQVRDSFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9NRVRIT0QgPSBcIkRFTEVURVwiO1xuZXhwb3J0IGNvbnN0IE9QVElPTlNfTUVUSE9EID0gXCJPUFRJT05TXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgR0VUX01FVEhPRCxcbiAgUE9TVF9NRVRIT0QsXG4gIFBBVENIX01FVEhPRCxcbiAgREVMRVRFX01FVEhPRCxcbiAgT1BUSU9OU19NRVRIT0Rcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBQUkFHTUFfSEVBREVSID0gXCJwcmFnbWFcIjtcbmV4cG9ydCBjb25zdCBBQ0NFUFRfSEVBREVSID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBMT0NBVElPTl9IRUFERVIgPSBcImxvY2F0aW9uXCI7XG5leHBvcnQgY29uc3QgVVNFUl9BR0VOVF9IRUFERVIgPSBcInVzZXItYWdlbnRcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEVfSEVBREVSID0gXCJjb250ZW50LXR5cGVcIjtcbmV4cG9ydCBjb25zdCBBVVRIT1JJWkFUSU9OX0hFQURFUiA9IFwiYXV0aG9yaXphdGlvblwiO1xuZXhwb3J0IGNvbnN0IENBQ0hFX0NPTlRST0xfSEVBREVSID0gXCJjYWNoZS1jb250cm9sXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9MRU5HVEhfSEVBREVSID0gXCJjb250ZW50LWxlbmd0aFwiO1xuZXhwb3J0IGNvbnN0IFRSQU5TRkVSX0VOQ09ESU5HX0hFQURFUiA9IFwidHJhbnNmZXItZW5jb2RpbmdcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUiA9IFwiY29udGVudC1kaXNwb3NpdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX09SSUdJTl9IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpblwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX01FVEhPRFNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1tZXRob2RzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LWhlYWRlcnNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9SRVFVRVNUX01FVEhPRF9IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLXJlcXVlc3QtbWV0aG9kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJBR01BX0hFQURFUixcbiAgQUNDRVBUX0hFQURFUixcbiAgTE9DQVRJT05fSEVBREVSLFxuICBVU0VSX0FHRU5UX0hFQURFUixcbiAgQ09OVEVOVF9UWVBFX0hFQURFUixcbiAgQVVUSE9SSVpBVElPTl9IRUFERVIsXG4gIENBQ0hFX0NPTlRST0xfSEVBREVSLFxuICBDT05URU5UX0xFTkdUSF9IRUFERVIsXG4gIFRSQU5TRkVSX0VOQ09ESU5HX0hFQURFUixcbiAgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX09SSUdJTl9IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX01FVEhPRFNfSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19IRUFERVJTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSXG59OyIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRBQl9LRVlfQ09ERSA9IDk7XG5leHBvcnQgY29uc3QgU0hJRlRfS0VZX0NPREUgPSAxNjtcbmV4cG9ydCBjb25zdCBFTlRFUl9LRVlfQ09ERSA9IDEzO1xuZXhwb3J0IGNvbnN0IEVTQ0FQRV9LRVlfQ09ERSA9IDI3O1xuZXhwb3J0IGNvbnN0IERFTEVURV9LRVlfQ09ERSA9IDQ2O1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9LRVlfQ09ERSA9IDg7XG5leHBvcnQgY29uc3QgQVJST1dfVVBfS0VZX0NPREUgPSAzODtcbmV4cG9ydCBjb25zdCBBUlJPV19ET1dOX0tFWV9DT0RFID0gNDA7XG5leHBvcnQgY29uc3QgQVJST1dfTEVGVF9LRVlfQ09ERSA9IDM3O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1JJR0hUX0tFWV9DT0RFID0gMzk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEFCX0tFWV9DT0RFLFxuICBTSElGVF9LRVlfQ09ERSxcbiAgRU5URVJfS0VZX0NPREUsXG4gIEVTQ0FQRV9LRVlfQ09ERSxcbiAgREVMRVRFX0tFWV9DT0RFLFxuICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gIEFSUk9XX1VQX0tFWV9DT0RFLFxuICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICBBUlJPV19SSUdIVF9LRVlfQ09ERVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjhfRU5DT0RJTkcgPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBVVEZfOF9FTkNPRElORyA9IFwidXRmLThcIjtcbmV4cG9ydCBjb25zdCBCQVNFNjRfRU5DT0RJTkcgPSBcImJhc2U2NFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVURjhfRU5DT0RJTkcsXG4gIFVURl84X0VOQ09ESU5HLFxuICBCQVNFNjRfRU5DT0RJTkdcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVUF9DSEFSQUNURVIgPSBcIlx1MDAxYltBXCI7XG5leHBvcnQgY29uc3QgRVRYX0NIQVJBQ1RFUiA9IFwiXFx1MDAwM1wiO1xuZXhwb3J0IGNvbnN0IEJBUl9DSEFSQUNURVIgPSBcInxcIjtcbmV4cG9ydCBjb25zdCBEQVNIX0NIQVJBQ1RFUiA9IFwiLVwiO1xuZXhwb3J0IGNvbnN0IERPV05fQ0hBUkFDVEVSID0gXCJcdTAwMWJbQlwiO1xuZXhwb3J0IGNvbnN0IExFRlRfQ0hBUkFDVEVSID0gXCJcdTAwMWJbRFwiO1xuZXhwb3J0IGNvbnN0IFJJR0hUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0NcIjtcbmV4cG9ydCBjb25zdCBTUEFDRV9DSEFSQUNURVIgPSBcIiBcIjtcbmV4cG9ydCBjb25zdCBDT01NQV9DSEFSQUNURVIgPSBcIixcIjtcbmV4cG9ydCBjb25zdCBDT0xPTl9DSEFSQUNURVIgPSBcIjpcIjtcbmV4cG9ydCBjb25zdCBQRVJJT0RfQ0hBUkFDVEVSID0gXCIuXCI7XG5leHBvcnQgY29uc3QgQ1RSTF9DX0NIQVJBQ1RFUiA9IFwiXkNcIjtcbmV4cG9ydCBjb25zdCBXSUxEQ0FSRF9DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBCQUNLVElDS19ERUxJTUlURVIgPSBcImBcIjtcbmV4cG9ydCBjb25zdCBORVdfTElORV9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EX0NIQVJBQ1RFUiA9IFwiJlwiO1xuZXhwb3J0IGNvbnN0IExFU1NfVEhBTl9DSEFSQUNURVIgPSBcIiZsdDtcIjtcbmV4cG9ydCBjb25zdCBHUkVBVEVSX1RIQU5fQ0hBUkFDVEVSID0gXCImZ3Q7XCI7XG5leHBvcnQgY29uc3QgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIgPSBcIi9cIjtcbmV4cG9ydCBjb25zdCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSID0gXCJcXHJcIjtcbmV4cG9ydCBjb25zdCBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiIVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVQX0NIQVJBQ1RFUixcbiAgRVRYX0NIQVJBQ1RFUixcbiAgQkFSX0NIQVJBQ1RFUixcbiAgREFTSF9DSEFSQUNURVIsXG4gIERPV05fQ0hBUkFDVEVSLFxuICBMRUZUX0NIQVJBQ1RFUixcbiAgUklHSFRfQ0hBUkFDVEVSLFxuICBTUEFDRV9DSEFSQUNURVIsXG4gIENPTU1BX0NIQVJBQ1RFUixcbiAgQ09MT05fQ0hBUkFDVEVSLFxuICBQRVJJT0RfQ0hBUkFDVEVSLFxuICBDVFJMX0NfQ0hBUkFDVEVSLFxuICBXSUxEQ0FSRF9DSEFSQUNURVIsXG4gIEJBQ0tUSUNLX0RFTElNSVRFUixcbiAgTkVXX0xJTkVfQ0hBUkFDVEVSLFxuICBBTVBFUlNBTkRfQ0hBUkFDVEVSLFxuICBCQUNLU1BBQ0VfQ0hBUkFDVEVSLFxuICBMRVNTX1RIQU5fQ0hBUkFDVEVSLFxuICBHUkVBVEVSX1RIQU5fQ0hBUkFDVEVSLFxuICBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUixcbiAgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUixcbiAgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVJcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX0NPREUgPSAwO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfQ09ERSA9IDIwMDtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX0NPREUgPSAzMDI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX0NPREUgPSAyMDE7XG5leHBvcnQgY29uc3QgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSA9IDMwMztcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19DT0RFID0gNDAzO1xuZXhwb3J0IGNvbnN0IE5PVF9GT1VORF80MDRfU1RBVFVTX0NPREUgPSA0MDQ7XG5leHBvcnQgY29uc3QgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUgPSAyMDQ7XG5leHBvcnQgY29uc3QgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19DT0RFID0gNTAyO1xuZXhwb3J0IGNvbnN0IEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfQ09ERSA9IDQwMDtcbmV4cG9ydCBjb25zdCBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFID0gNDAxO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX0NPREUgPSA0MDg7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19DT0RFID0gNDI5O1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFID0gNTAzO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREUgPSA1MDA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19DT0RFLFxuICBPS18yMDBfU1RBVFVTX0NPREUsXG4gIEZPVU5EXzMwMl9TVEFUVVNfQ09ERSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX0NPREUsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX0NPREUsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfQ09ERSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19DT0RFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfQ09ERSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DT05URU5UX1RZUEUgPSBcInRleHQvaHRtbFwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L3BsYWluXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9PQ1RFVF9TVFJFQU1fQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfUExBSU5fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBURVhUX0hUTUxfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVST18wX1NUQVRVU19NRVNTQUdFID0gXCJcIjtcbmV4cG9ydCBjb25zdCBPS18yMDBfU1RBVFVTX01FU1NBR0UgPSBcIk9LXCI7XG5leHBvcnQgY29uc3QgRk9VTkRfMzAyX1NUQVRVU19NRVNTQUdFID0gXCJGb3VuZFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURURfMjAxX1NUQVRVU19NRVNTQUdFID0gXCJDcmVhdGVkXCI7XG5leHBvcnQgY29uc3QgU0VFX09USEVSXzMwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VlIG90aGVyXCI7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfTUVTU0FHRSA9IFwiRm9yYmlkZGVuXCI7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm90IGZvdW5kXCI7XG5leHBvcnQgY29uc3QgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX01FU1NBR0UgPSBcIk5vIGNvbnRlbnRcIjtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCBnYXRld2F5XCI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19NRVNTQUdFID0gXCJCYWQgcmVxdWVzdFwiO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UgPSBcIlVuYXV0aG9yaXplZFwiO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UgPSBcIlJlcXVlc3QgdGltZW91dFwiO1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSA9IFwiVG9vIG1hbnkgcmVxdWVzdHNcIjtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VydmljZSB1bmF2YWlsYWJsZVwiO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX01FU1NBR0UgPSBcIkludGVybmFsIHNlcnZlciBlcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFpFUk9fMF9TVEFUVVNfTUVTU0FHRSxcbiAgT0tfMjAwX1NUQVRVU19NRVNTQUdFLFxuICBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UsXG4gIENSRUFURURfMjAxX1NUQVRVU19NRVNTQUdFLFxuICBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFLFxuICBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFLFxuICBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFLFxuICBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19NRVNTQUdFLFxuICBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UsXG4gIFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UsXG4gIFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UsXG4gIFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX01FU1NBR0UsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX01FU1NBR0Vcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBNYXRoLm1heCgxLCBhcnJheS5sZW5ndGggLSAxKSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBpbmRleDEgPSAwLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleDEgPCBsZW5ndGgpIHtcbiAgICBjb25zdCBlbGVtZW50MSA9IGFycmF5W2luZGV4MV07XG5cbiAgICBmb3IgKGxldCBpbmRleDIgPSBsZW5ndGggLSAxOyBpbmRleDIgPiBpbmRleDE7IGluZGV4Mi0tKSB7XG4gICAgICBjb25zdCBlbGVtZW50MiA9IGFycmF5W2luZGV4Ml0sXG4gICAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50MiwgZWxlbWVudDEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgyLCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4MSsrO1xuXG4gICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKGFycmF5MSwgYXJyYXkyLCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheSA9IFtcbiAgICAuLi5hcnJheTEsXG4gICAgLi4uYXJyYXkyXG4gIF07XG5cbiAgY29tcHJlc3MoYXJyYXksIGNhbGxiYWNrKTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCBjYWxsYmFjaykge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCBjYWxsYmFjaykge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGZpcnN0TGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBjb21wcmVzcyxcbiAgY29tYmluZSxcbiAgYXVnbWVudCxcbiAgc2VwYXJhdGUsXG4gIGZvcndhcmRzRmluZCxcbiAgYmFja3dhcmRzRmluZCxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVSTyA9IFwiMFwiO1xuZXhwb3J0IGNvbnN0IERBVEEgPSBcImRhdGFcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE5VTUJFUiA9IFwibnVtYmVyXCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFQgPSBcImRlZmF1bHRcIjtcbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVCA9IFwiRU5WSVJPTk1FTlRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFBBQ0tBR0VfSlNPTiA9IFwicGFja2FnZS5qc29uXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbZXhpc3RpbmdOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgPT09IG51bGwpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgQUNDRVBUX0hFQURFUiwgQ09OVEVOVF9UWVBFX0hFQURFUiB9IGZyb20gXCIuLi9oZWFkZXJzXCI7XG5pbXBvcnQgeyB1bmRlcndyaXRlLCB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGNvbnRlbnQ7XG4gICAgY29udGVudCA9IGhlYWRlcnM7XG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50VHlwZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFR5cGUpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZSB9ID0geG1sSHR0cFJlcXVlc3QsXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1cztcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soY29udGVudCwgc3RhdHVzQ29kZSk7XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVF9IRUFERVIsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRV9IRUFERVIsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChjb250ZW50KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFRfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEVfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudFRZcGU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZShqc29uLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pIHtcbiAgbGV0IHsgdmVyc2lvbiB9ID0ganNvbjtcblxuICB3aGlsZSAodmVyc2lvbiAhPT0gbGF0ZXN0VmVyc2lvbikge1xuICAgIGNvbnN0IG1pZ3JhdGVGdW5jdGlvbiA9IG1pZ3JhdGlvbk1hcFt2ZXJzaW9uXTtcblxuICAgIGpzb24gPSBtaWdyYXRlRnVuY3Rpb24oanNvbik7XG5cbiAgICAoeyB2ZXJzaW9uIH0gPSBqc29uKTtcbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZ3JhdGVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2Uob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZXJhdGlvbnMuZm9yRWFjaCgob3BlcmF0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkob3BlcmF0aW9uLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXZlbHMgfSBmcm9tIFwiLi9sZXZlbHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWV0aG9kcyB9IGZyb20gXCIuL21ldGhvZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGVhZGVycyB9IGZyb20gXCIuL2hlYWRlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMga2V5Q29kZXMgfSBmcm9tIFwiLi9rZXlDb2Rlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbmNvZGluZ3MgfSBmcm9tIFwiLi9lbmNvZGluZ3NcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hhcmFjdGVycyB9IGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhdHVzQ29kZXMgfSBmcm9tIFwiLi9zdGF0dXNDb2Rlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb250ZW50VHlwZXMgfSBmcm9tIFwiLi9jb250ZW50VHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3RhdHVzTWVzc2FnZXMgfSBmcm9tIFwiLi9zdGF0dXNNZXNzYWdlc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFqYXhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYWpheFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBodHRwVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2h0dHBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvblV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIHB1c2gsIG1lcmdlLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXksIGVsZW1lbnQpIHtcbiAgYXJyYXkucHVzaChlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWFyYW50ZWUoZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgICBlbGVtZW50LnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdWJ0cmFjdDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4OyAgLy8vXG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzOyAgLy8vXG4gICAgICBDbGFzcyA9IEVkZ2U7IC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb24gPSB2ZXJ0aWNlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb24sIHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2NhbGVkVmVydGV4UG9zaXRpb24gPSBzY2FsZTModmVydGV4UG9zaXRpb24sIDEvMyk7XG5cbiAgICBtaWRQb2ludFBvc2l0aW9uID0gYWRkMyhtaWRQb2ludFBvc2l0aW9uLCBzY2FsZWRWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbiAgfSwgWyAwLCAwLCAwIF0pO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKSB7XG4gIG1pZFBvaW50UG9zaXRpb24gPSBbIC4uLm1pZFBvaW50UG9zaXRpb24uc2xpY2UoMCwgMiksIDAgXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIHx8IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuXG5pbXBvcnQgeyB0aGlyZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0VkZ2UgZXh0ZW5kcyBFZGdlIHtcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBtaWRQb2ludFBvc2l0aW9uID0gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnRQb3NpdGlvbiwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24pLCAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbiksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQgPSAhbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkgeyByZXR1cm4gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoTWFza2luZ0VkZ2UsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FuZ2xlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSB7XG4gIGNvbnN0IGV4dGVudCA9IG5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE5vcm1hbCA9IGV4dGVudCwgIC8vL1xuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UzKGF4aXNPZlJvdGF0aW9uKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyA9IHVuaXRBeGlzT2ZSb3RhdGlvbiwgIC8vL1xuICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gdGhpcmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlUG9zaXRpb24ocG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbWFnaW5hcnlRdWF0ZXJuaW9uID0gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbiksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uID0gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBvc2l0aW9uID0gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKChub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgLy8vXG5cbiAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zLnB1c2gobm9uTnVsbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhQb3NpdGlvbiwgc3RhcnRWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIG9mZnNldCA9IHNjYWxlMyhleHRlbnQsIGludGVyc2VjdGlvbiksXG4gICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gYWRkMyhzdGFydFZlcnRleFBvc2l0aW9uLCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCByb3RhdGVkVmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJvdGF0ZWRWZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gcm90YXRlZFZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdGF0ZWRWZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCkgeyAgLy8vXG4gIGNvbnN0IGluZGV4ZXMgPSBpbmRleFR1cGxlLCAvLy9cbiAgICAgICAgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGUgPSBjb29yZGluYXRlVHVwbGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFza2luZ0VkZ2UgZnJvbSBcIi4vZWRnZS9tYXNraW5nXCI7XG5pbXBvcnQgVmVydGljYWxMaW5lIGZyb20gXCIuL3ZlcnRpY2FsTGluZVwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IHB1c2gsIHNlcGFyYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdGYWNldCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMubWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzO1xuICAgIHRoaXMudmVydGljYWxMaW5lcyA9IHZlcnRpY2FsTGluZXM7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TWFza2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tpbmdFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2FsTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxMaW5lcztcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKTsgIC8vL1xuXG4gICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHNlcGFyYXRlKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cywgKHNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgY29uc3Qgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0LmlzTWFza2VkKG1hc2tpbmdGYWNldCk7XG5cbiAgICAgIHJldHVybiBzbWFsbGVyRmFjZXRNYXNrZWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgdW5tYXNrZWRGYWNldHMucHVzaCh1bm1hc2tlZEZhY2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLmZvckVhY2goKHVubWFza2VkU21hbGxlckZhY2V0KSA9PiB7XG4gICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9KTtcblxuICAgICAgcHVzaCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgICAgIGZhY2V0XG4gICAgICAgIF0sXG4gICAgICAgIHNtYWxsZXJGYWNldHMgPSBmYWNldHM7IC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2goKHZlcnRpY2FsTGluZSkgPT4ge1xuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZS5zcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGNvbnN0IGZhY2V0Tm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgZmFjZXRWZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgbm9ybWFsID0gZmFjZXROb3JtYWwsIC8vL1xuICAgICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgLy8vXG4gICAgICAgICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhmYWNldFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdFZGdlcyA9IGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgdmVydGljYWxMaW5lcyA9IG1hc2tpbmdFZGdlcy5tYXAoKG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBWZXJ0aWNhbExpbmUuZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gbmV3IE1hc2tpbmdGYWNldChtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9ybWFsaXNlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLFxuICAgIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCxcbiAgICAwLCAxLCAwLFxuICAgIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCwgMCxcbiAgICAwLCAxLCAwLCAwLFxuICAgIDAsIDAsIDEsIDAsXG4gICAgMCwgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MihtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IFsgYTAsIGExLCBhMiwgYTMgXSA9IG1hdHJpeEEsXG4gICAgICAgIFsgYjAsIGIxLCBiMiwgYjMgXSA9IG1hdHJpeEI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqIGIwICsgYTIgKiBiMSxcbiAgICBhMSAqIGIwICsgYTMgKiBiMSxcblxuICAgIGEwICogYjIgKyBhMiAqIGIzLFxuICAgIGExICogYjIgKyBhMyAqIGIzLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgWyBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4IF0gPSBtYXRyaXhBLFxuICAgICAgICBbIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjggXSA9IG1hdHJpeEI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqIGIwICsgYTMgKiBiMSArIGE2ICogYjIsXG4gICAgYTEgKiBiMCArIGE0ICogYjEgKyBhNyAqIGIyLFxuICAgIGEyICogYjAgKyBhNSAqIGIxICsgYTggKiBiMixcblxuICAgIGEwICogYjMgKyBhMyAqIGI0ICsgYTYgKiBiNSxcbiAgICBhMSAqIGIzICsgYTQgKiBiNCArIGE3ICogYjUsXG4gICAgYTIgKiBiMyArIGE1ICogYjQgKyBhOCAqIGI1LFxuXG4gICAgYTAgKiBiNiArIGEzICogYjcgKyBhNiAqIGI4LFxuICAgIGExICogYjYgKyBhNCAqIGI3ICsgYTcgKiBiOCxcbiAgICBhMiAqIGI2ICsgYTUgKiBiNyArIGE4ICogYjgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTQobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCAgWyBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSBdID0gbWF0cml4QSxcbiAgICAgICAgIFsgYjAsIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCwgYjksIGIxMCwgYjExLCBiMTIsIGIxMywgYjE0LCBiMTUgXSA9IG1hdHJpeEI7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqICBiMCArICBhNCAqICBiMSArICBhOCAqICBiMiArIGExMiAqICBiMyxcbiAgICBhMSAqICBiMCArICBhNSAqICBiMSArICBhOSAqICBiMiArIGExMyAqICBiMyxcbiAgICBhMiAqICBiMCArICBhNiAqICBiMSArIGExMCAqICBiMiArIGExNCAqICBiMyxcbiAgICBhMyAqICBiMCArICBhNyAqICBiMSArIGExMSAqICBiMiArIGExNSAqICBiMyxcblxuICAgIGEwICogIGI0ICsgIGE0ICogIGI1ICsgIGE4ICogIGI2ICsgYTEyICogIGI3LFxuICAgIGExICogIGI0ICsgIGE1ICogIGI1ICsgIGE5ICogIGI2ICsgYTEzICogIGI3LFxuICAgIGEyICogIGI0ICsgIGE2ICogIGI1ICsgYTEwICogIGI2ICsgYTE0ICogIGI3LFxuICAgIGEzICogIGI0ICsgIGE3ICogIGI1ICsgYTExICogIGI2ICsgYTE1ICogIGI3LFxuXG4gICAgYTAgKiAgYjggKyAgYTQgKiAgYjkgKyAgYTggKiBiMTAgKyBhMTIgKiBiMTEsXG4gICAgYTEgKiAgYjggKyAgYTUgKiAgYjkgKyAgYTkgKiBiMTAgKyBhMTMgKiBiMTEsXG4gICAgYTIgKiAgYjggKyAgYTYgKiAgYjkgKyBhMTAgKiBiMTAgKyBhMTQgKiBiMTEsXG4gICAgYTMgKiAgYjggKyAgYTcgKiAgYjkgKyBhMTEgKiBiMTAgKyBhMTUgKiBiMTEsXG5cbiAgICBhMCAqIGIxMiArICBhNCAqIGIxMyArICBhOCAqIGIxNCArIGExMiAqIGIxNSxcbiAgICBhMSAqIGIxMiArICBhNSAqIGIxMyArICBhOSAqIGIxNCArIGExMyAqIGIxNSxcbiAgICBhMiAqIGIxMiArICBhNiAqIGIxMyArIGExMCAqIGIxNCArIGExNCAqIGIxNSxcbiAgICBhMyAqIGIxMiArICBhNyAqIGIxMyArIGExMSAqIGIxNCArIGExNSAqIGIxNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50MihtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMyBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoIG0wICogbTMgLSBtMiAqIG0xICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDMobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4LFxuXG4gICAgICAgIGIwMSA9ICBtOCAqIG00IC0gbTUgKiBtNyxcbiAgICAgICAgYjExID0gLW04ICogbTMgKyBtNSAqIG02LFxuICAgICAgICBiMjEgPSAgbTcgKiBtMyAtIG00ICogbTY7XG5cbiAgcmV0dXJuICggbTAgKiBiMDEgKyBtMSAqIGIxMSArIG0yICogYjIxICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudDQobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeCxcblxuICAgICAgICBiMDAgPSBtMCAqIG01IC0gbTEgKiBtNCxcbiAgICAgICAgYjAxID0gbTAgKiBtNiAtIG0yICogbTQsXG4gICAgICAgIGIwMiA9IG0wICogbTcgLSBtMyAqIG00LFxuICAgICAgICBiMDMgPSBtMSAqIG02IC0gbTIgKiBtNSxcbiAgICAgICAgYjA0ID0gbTEgKiBtNyAtIG0zICogbTUsXG4gICAgICAgIGIwNSA9IG0yICogbTcgLSBtMyAqIG02LFxuICAgICAgICBiMDYgPSBtOCAqIG0xMyAtIG05ICogbTEyLFxuICAgICAgICBiMDcgPSBtOCAqIG0xNCAtIG0xMCAqIG0xMixcbiAgICAgICAgYjA4ID0gbTggKiBtMTUgLSBtMTEgKiBtMTIsXG4gICAgICAgIGIwOSA9IG05ICogbTE0IC0gbTEwICogbTEzLFxuICAgICAgICBiMTAgPSBtOSAqIG0xNSAtIG0xMSAqIG0xMyxcbiAgICAgICAgYjExID0gbTEwICogbTE1IC0gbTExICogbTE0O1xuXG4gIHJldHVybiAoIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNiApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlMihtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMyBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAsIG0yLFxuICAgIG0xLCBtMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTMobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAsIG0zLCBtNixcbiAgICBtMSwgbTQsIG03LFxuICAgIG0yLCBtNSwgbTgsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2U0KG1hdHJpeCkge1xuICBjb25zdCBbIG0wLCBtMSwgbTIsIG0zLCBtNCwgbTUsIG02LCBtNywgbTgsIG05LCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0xNCwgbTE1IF0gPSBtYXRyaXg7XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtMCwgbTQsIG04LCBtMTIsXG4gICAgbTEsIG01LCBtOSwgbTEzLFxuICAgIG0yLCBtNiwgbTEwLCBtMTQsXG4gICAgbTMsIG03LCBtMTEsIG0xNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDIobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMgXSA9IG1hdHJpeCxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IGRldGVybWluYW50MihtYXRyaXgpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgK20zIC8gZGV0ZXJtaW5hbnQsIC1tMSAvIGRldGVybWluYW50LFxuICAgIC1tMiAvIGRldGVybWluYW50LCArbTAgLyBkZXRlcm1pbmFudCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDMobWF0cml4KSB7XG4gIGNvbnN0IFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCBdID0gbWF0cml4LFxuXG4gICAgICAgIGRldGVybWluYW50ID0gZGV0ZXJtaW5hbnQzKG1hdHJpeCksXG5cbiAgICAgICAgYjAxID0gIG04ICogbTQgLSBtNSAqIG03LFxuICAgICAgICBiMTEgPSAtbTggKiBtMyArIG01ICogbTYsXG4gICAgICAgIGIyMSA9ICBtNyAqIG0zIC0gbTQgKiBtNjtcblxuICByZXR1cm4gKFtcblxuICAgIGIwMSAvIGRldGVybWluYW50LCAoLW04ICogbTEgKyBtMiAqIG03KSAvIGRldGVybWluYW50LCAoIG01ICogbTEgLSBtMiAqIG00KSAvIGRldGVybWluYW50LFxuICAgIGIxMSAvIGRldGVybWluYW50LCAoIG04ICogbTAgLSBtMiAqIG02KSAvIGRldGVybWluYW50LCAoLW01ICogbTAgKyBtMiAqIG0zKSAvIGRldGVybWluYW50LFxuICAgIGIyMSAvIGRldGVybWluYW50LCAoLW03ICogbTAgKyBtMSAqIG02KSAvIGRldGVybWluYW50LCAoIG00ICogbTAgLSBtMSAqIG0zKSAvIGRldGVybWluYW50LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4LFxuXG4gICAgICAgIGRldGVybWluYW50ID0gZGV0ZXJtaW5hbnQ0KG1hdHJpeCksXG5cbiAgICAgICAgYjAwID0gbTAgKiBtNSAtIG0xICogbTQsXG4gICAgICAgIGIwMSA9IG0wICogbTYgLSBtMiAqIG00LFxuICAgICAgICBiMDIgPSBtMCAqIG03IC0gbTMgKiBtNCxcbiAgICAgICAgYjAzID0gbTEgKiBtNiAtIG0yICogbTUsXG4gICAgICAgIGIwNCA9IG0xICogbTcgLSBtMyAqIG01LFxuICAgICAgICBiMDUgPSBtMiAqIG03IC0gbTMgKiBtNixcbiAgICAgICAgYjA2ID0gbTggKiBtMTMgLSBtOSAqIG0xMixcbiAgICAgICAgYjA3ID0gbTggKiBtMTQgLSBtMTAgKiBtMTIsXG4gICAgICAgIGIwOCA9IG04ICogbTE1IC0gbTExICogbTEyLFxuICAgICAgICBiMDkgPSBtOSAqIG0xNCAtIG0xMCAqIG0xMyxcbiAgICAgICAgYjEwID0gbTkgKiBtMTUgLSBtMTEgKiBtMTMsXG4gICAgICAgIGIxMSA9IG0xMCAqIG0xNSAtIG0xMSAqIG0xNDtcblxuICByZXR1cm4gKFtcblxuICAgIChtNSAqIGIxMSAtIG02ICogYjEwICsgbTcgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMiAqIGIxMCAtIG0xICogYjExIC0gbTMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMTMgKiBiMDUgLSBtMTQgKiBiMDQgKyBtMTUgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsIChtMTAgKiBiMDQgLSBtOSAqIGIwNSAtIG0xMSAqIGIwMykgLyBkZXRlcm1pbmFudCxcbiAgICAobTYgKiBiMDggLSBtNCAqIGIxMSAtIG03ICogYjA3KSAvIGRldGVybWluYW50LCAobTAgKiBiMTEgLSBtMiAqIGIwOCArIG0zICogYjA3KSAvIGRldGVybWluYW50LCAobTE0ICogYjAyIC0gbTEyICogYjA1IC0gbTE1ICogYjAxKSAvIGRldGVybWluYW50LCAobTggKiBiMDUgLSBtMTAgKiBiMDIgKyBtMTEgKiBiMDEpIC8gZGV0ZXJtaW5hbnQsXG4gICAgKG00ICogYjEwIC0gbTUgKiBiMDggKyBtNyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0xICogYjA4IC0gbTAgKiBiMTAgLSBtMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0xMiAqIGIwNCAtIG0xMyAqIGIwMiArIG0xNSAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG05ICogYjAyIC0gbTggKiBiMDQgLSBtMTEgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgKG01ICogYjA3IC0gbTQgKiBiMDkgLSBtNiAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0wICogYjA5IC0gbTEgKiBiMDcgKyBtMiAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0xMyAqIGIwMSAtIG0xMiAqIGIwMyAtIG0xNCAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG04ICogYjAzIC0gbTkgKiBiMDEgKyBtMTAgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSB2ZWN0b3IsXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4O1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiB4LCBtMSAqIHgsIG0yICogeCwgbTMgKiB4LFxuICAgIG00ICogeSwgbTUgKiB5LCBtNiAqIHksIG03ICogeSxcbiAgICBtOCAqIHosIG05ICogeiwgbTEwICogeiwgbTExICogeixcbiAgICBtMTIgKiAxLCBtMTMgKiAxLCBtMTQgKiAxLCBtMTUgKiAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlNChtYXRyaXgsIGFuZ2xlLCB2ZWN0b3IpIHtcbiAgY29uc3QgWyB4LCB5LCB6IF0gPSBub3JtYWxpc2UzKHZlY3RvciksXG5cbiAgICAgICAgWyBtMCwgbTEsIG0yLCBtMywgbTQsIG01LCBtNiwgbTcsIG04LCBtOSwgbTEwLCBtMTEsIG0xMiwgbTEzLCBtMTQsIG0xNSBdID0gbWF0cml4LFxuXG4gICAgICAgIHMgPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgIGMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICBiMDAgPSB4ICogeCAqIHQgKyBjLFxuICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgYjAyID0geiAqIHggKiB0IC0geSAqIHMsXG4gICAgICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzLFxuICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcyxcbiAgICAgICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHMsXG4gICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICBiMjIgPSB6ICogeiAqIHQgKyBjO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbTAgKiBiMDAgKyBtNCAqIGIwMSArIG04ICogYjAyLCBtMSAqIGIwMCArIG01ICogYjAxICsgbTkgKiBiMDIsIG0yICogYjAwICsgbTYgKiBiMDEgKyBtMTAgKiBiMDIsIG0zICogYjAwICsgbTcgKiBiMDEgKyBtMTEgKiBiMDIsXG4gICAgbTAgKiBiMTAgKyBtNCAqIGIxMSArIG04ICogYjEyLCBtMSAqIGIxMCArIG01ICogYjExICsgbTkgKiBiMTIsIG0yICogYjEwICsgbTYgKiBiMTEgKyBtMTAgKiBiMTIsIG0zICogYjEwICsgbTcgKiBiMTEgKyBtMTEgKiBiMTIsXG4gICAgbTAgKiBiMjAgKyBtNCAqIGIyMSArIG04ICogYjIyLCBtMSAqIGIyMCArIG01ICogYjIxICsgbTkgKiBiMjIsIG0yICogYjIwICsgbTYgKiBiMjEgKyBtMTAgKiBiMjIsIG0zICogYjIwICsgbTcgKiBiMjEgKyBtMTEgKiBiMjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IFsgeCwgeSwgeiBdID0gdmVjdG9yLFxuXG4gICAgICAgIFsgbTAsIG0xLCBtMiwgbTMsIG00LCBtNSwgbTYsIG03LCBtOCwgbTksIG0xMCwgbTExLCBtMTIsIG0xMywgbTE0LCBtMTUgXSA9IG1hdHJpeDtcblxuICByZXR1cm4gKFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtNCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG01LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG02LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG03LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtOCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG05LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTExLFxuICAgIG0wICogeCArIG00ICogeSArIG04ICogeiArIG0xMiwgbTEgKiB4ICsgbTUgKiB5ICsgbTkgKiB6ICsgbTEzLCBtMiAqIHggKyBtNiAqIHkgKyBtMTAgKiB6ICsgbTE0LCBtMyAqIHggKyBtNyAqIHkgKyBtMTEgKiB6ICsgbTE1LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpIHtcbiAgY29uc3QgZiA9IDEgLyBNYXRoLnRhbihmaWVsZE9mVmlldyAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcblxuICByZXR1cm4gKFtcblxuICAgIGYgLyBhc3BlY3RSYXRpbywgMCwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICBmLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICh6RmFyICsgek5lYXIpICogbmYsICAgIC0xLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKDIgKiB6RmFyICogek5lYXIpICogbmYsIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaWRlbnRpdHkyLFxuICBpZGVudGl0eTMsXG4gIGlkZW50aXR5NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgZGV0ZXJtaW5hbnQyLFxuICBkZXRlcm1pbmFudDMsXG4gIGRldGVybWluYW50NCxcbiAgdHJhbnNwb3NlMixcbiAgdHJhbnNwb3NlMyxcbiAgdHJhbnNwb3NlNCxcbiAgaW52ZXJ0MixcbiAgaW52ZXJ0MyxcbiAgaW52ZXJ0NCxcbiAgc2NhbGU0LFxuICByb3RhdGU0LFxuICB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpZGVudGl0eTQsIHNjYWxlNCwgaW52ZXJ0NCwgcm90YXRlNCwgdHJhbnNsYXRlNCwgdHJhbnNwb3NlNCwgcGVyc3BlY3RpdmU0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpIHtcbiAgbGV0IHNjYWxlTWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgc2NhbGVNYXRyaXggPSBzY2FsZTQoc2NhbGVNYXRyaXgsIHNjYWxlKTtcblxuICByZXR1cm4gc2NhbGVNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cykge1xuICBsZXQgb2Zmc2V0c01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBvZmZzZXRzTWF0cml4ID0gdHJhbnNsYXRlNChvZmZzZXRzTWF0cml4LCBvZmZzZXRzKTtcblxuICByZXR1cm4gb2Zmc2V0c01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSkge1xuICBsZXQgcG9zaXRpb25NYXRyaXggPSBpZGVudGl0eTQoKTsgLy8vXG5cbiAgY29uc3QgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB6ID0gLWRpc3RhbmNlO1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgWyB4LCB5LCB6IF0pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBwb3NpdGlvbk1hdHJpeCA9IHRyYW5zbGF0ZTQocG9zaXRpb25NYXRyaXgsIHBvc2l0aW9uKTtcblxuICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyID0gZmFsc2UpIHtcbiAgbGV0IHJvdGF0aW9uc01hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCBmaXJzdEFuZ2xlID0gZmlyc3QoYW5nbGVzKSxcbiAgICAgICAgc2Vjb25kQW5nbGUgPSBzZWNvbmQoYW5nbGVzKSxcbiAgICAgICAgdGhpcmRBbmdsZSA9IHRoaXJkKGFuZ2xlcyksXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsICAvLy8vXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLCAvLy9cbiAgICAgICAgekFuZ2xlID0gdGhpcmRBbmdsZSwgIC8vL1xuICAgICAgICB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgICB5QXhpcyA9IFsgMCwgMSwgMCBdLFxuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdO1xuXG4gIGlmIChyZXZlcnNlT3JkZXIpIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgfSBlbHNlIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgfVxuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucykge1xuICBjb25zdCBzY2FsYXIgPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiwgLy8vXG4gICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhyb3RhdGlvbnMsIHNjYWxhciksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSB7XG4gIGxldCBub3JtYWxzTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbnNNYXRyaXgpOyAvLy9cblxuICBub3JtYWxzTWF0cml4ID0gdHJhbnNwb3NlNChub3JtYWxzTWF0cml4KTtcblxuICByZXR1cm4gbm9ybWFsc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSB7XG4gIGNvbnN0IHpGYXIgPSBjYW1lcmEuZ2V0WkZhcigpLFxuICAgICAgICB6TmVhciA9IGNhbWVyYS5nZXRaTmVhcigpLFxuICAgICAgICB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGZpZWxkT2ZWaWV3ID0gY2FtZXJhLmdldEZpZWxkT2ZWaWV3KCksXG4gICAgICAgIGFzcGVjdFJhdGlvID0gKCB3aWR0aCAvIGhlaWdodCApLFxuICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gIHJldHVybiBwcm9qZWN0aW9uTWF0cml4O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtdWx0aXBseTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IE1hc2tpbmdGYWNldCBmcm9tIFwiLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHtjb21wb3NlVHJhbnNmb3JtfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlZmVyZW5jZSwgdHJhbnNmb3JtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTsgIC8vL1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHt9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgc2NhbGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgcmVmZXJlbmNlLCB0cmFuc2Zvcm0pO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2xhc3MpIHtcbiAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50LCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCBNYXNrIGZyb20gXCIuL21hc2tcIjtcblxuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWFza1JlZmVyZW5jZSA9IG1hc2tSZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrcyA9IG1hc2tzO1xuICB9XG5cbiAgZ2V0TWFza1JlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrcztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGlmICh0aGlzLm1hc2tSZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hc2sgPSBtYXNrcy5maW5kKChtYXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IG1hc2suZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gdGhpcy5tYXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgICBpZiAobWFzayAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbWFza3MgPSBbIC4uLm1hc2tzLCAuLi50aGlzLm1hc2tzIF07IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG5cbiAgICB0aGlzLmFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIHNjYWxlID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBtYXNrUmVmZXJlbmNlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBmdW5jdGlvbkVsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZ1bmN0aW9uQ2FudmFzRWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb25FbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZsYXR0ZW4sIGd1YXJhbnRlZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgLy8vXG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGZ1bmMocHJvcGVydGllcykpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gRnVuY3Rpb25DYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5yZW5kZXJlckRhdGEgPSByZW5kZXJlckRhdGE7XG4gICAgdGhpcy5yZW5kZXJlckJ1ZmZlcnMgPSByZW5kZXJlckJ1ZmZlcnM7XG4gICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gdW5pZm9ybUxvY2F0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGE7XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyQnVmZmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckJ1ZmZlcnM7XG4gIH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRGYWNldHMoZmFjZXRzKSB7XG4gICAgYWRkKHRoaXMuZmFjZXRzLCBmYWNldHMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4sIG1lcmdlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEgPSB2ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0RhdGEgPSB2ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhlc0RhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhlc0RhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsc0RhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbHMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlczsgIC8vL1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSBbXSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiByZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNEYXRhID0gdmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3Vyc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsc01hdHJpeE5hbWUgPSBcInVOb3JtYWxzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleE5vcm1hbFwiO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsc01hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDEuMCwgMS4wLCAxLjApKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxzTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvcikgKyAxLjApIC8gMi4wO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxpZ2h0aW5nU291cmNlOyIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IG9mZnNldHNNYXRyaXhOYW1lID0gXCJ1T2Zmc2V0c01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9uTWF0cml4TmFtZSA9IFwidVBvc2l0aW9uTWF0cml4XCI7XG5leHBvcnQgY29uc3Qgcm90YXRpb25zTWF0cml4TmFtZSA9IFwidVJvdGF0aW9uc01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHByb2plY3Rpb25NYXRyaXhOYW1lID0gXCJ1UGVyc3BlY3RpdmVNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhQb3NpdGlvblwiO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0c01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSAqICR7b2Zmc2V0c01hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvblNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Q29sb3VyXCJcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gdmVydGV4Tm9ybWFsc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub3JtYWxzTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvbGlnaHRpbmdcIjtcblxuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeE5hbWUsIHJvdGF0aW9uc01hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBub3JtYWxzTWF0cml4TmFtZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbnNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwcm9qZWN0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBDbGFzcyhvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB1bmlmb3JtTG9jYXRpb25zOyAgICAgICBcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7IHJldHVybiBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91clVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcyk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvY29sb3VyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXJcIjtcbmltcG9ydCBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiO1xuaW1wb3J0IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsaWdodGluZ1NvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgcG9zaXRpb25Tb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gXCJhVGV4dHVyZUNvb3JkaW5hdGVcIjtcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZXJOYW1lID0gXCJ1U2FtcGxlclwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyQnVmZmVycywgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuaW1wb3J0IHsgc2FtcGxlck5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuaW1wb3J0IFRleHR1cmVSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZVwiO1xuaW1wb3J0IGZyYWdtZW50U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlXCI7XG5pbXBvcnQgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybVwiO1xuaW1wb3J0IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IENsYXNzKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNhbnZhcy5lbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU1hcEpTT04pIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG5cdH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy5pbWFnZU1hcEpTT04pLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7IC8vL1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIGNvdW50ID0gcmVuZGVyZXJEYXRhLmdldENvdW50KCksXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTihpbWFnZU1hcCwgaW1hZ2VNYXBKU09OLCBjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlTWFwLCAvLy9cbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG5cbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG5cbiAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZU1hcFRleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU1hcEpTT04pO1xuXG4gICAgcmV0dXJuIGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNrIGZyb20gXCIuL21hc2tcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spO1xuXG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICB9KTtcblxuICAgIGlmIChjb2xvdXJSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0dXJlUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfWl9GQVIsIERFRkFVTFRfWl9ORUFSLCBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnpGYXIgPSB6RmFyO1xuICAgIHRoaXMuek5lYXIgPSB6TmVhcjtcbiAgICB0aGlzLmZpZWxkT2ZWaWV3ID0gZmllbGRPZlZpZXc7XG4gIH1cblxuICBnZXRaRmFyKCkge1xuICAgIHJldHVybiB0aGlzLnpGYXI7XG4gIH1cblxuICBnZXRaTmVhcigpIHtcbiAgICByZXR1cm4gdGhpcy56TmVhcjtcbiAgfVxuXG4gIGdldEZpZWxkT2ZWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgeyBmaWVsZE9mVmlldyA9IERFRkFVTFRfRklFTERfT0ZfVklFVyB9ID0gcHJvcGVydGllcztcblxuICAgIGZpZWxkT2ZWaWV3ICo9IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSOyAvLy9cblxuICAgIGNvbnN0IHsgekZhciA9IERFRkFVTFRfWl9GQVIsIHpOZWFyID0gREVGQVVMVF9aX05FQVIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2FtZXJhID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgV0hFRUxfRVZFTlRfVFlQRSA9IFwid2hlZWxcIjtcbmV4cG9ydCBjb25zdCBLRVlVUF9FVkVOVF9UWVBFID0gXCJrZXl1cFwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV05fRVZFTlRfVFlQRSA9IFwia2V5ZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFVVBfRVZFTlRfVFlQRSA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFRE9XTl9FVkVOVF9UWVBFID0gXCJtb3VzZWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRU1PVkVfRVZFTlRfVFlQRSA9IFwibW91c2Vtb3ZlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBLRVlVUF9FVkVOVF9UWVBFLCBLRVlET1dOX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5jb25zdCB7IEVTQ0FQRV9LRVlfQ09ERSwgU0hJRlRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVycywgc2hpZnRLZXlEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIHRoaXMuc2hpZnRLZXlEb3duID0gc2hpZnRLZXlEb3duO1xuICB9XG5cbiAgZ2V0SGFuZGxlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnM7XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWVVQX0VWRU5UX1RZUEUsIHRoaXMua2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwgdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZSwgIC8vL1xuICAgICAgICAgIGtleUV2ZW50cyA9IG5ldyBLZXlFdmVudHMoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bik7XG5cbiAgICByZXR1cm4ga2V5RXZlbnRzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFdIRUVMX0VWRU5UX1RZUEUsIE1PVVNFVVBfRVZFTlRfVFlQRSwgTU9VU0VET1dOX0VWRU5UX1RZUEUsIE1PVVNFTU9WRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgd2hlZWxFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBXSEVFTF9FVkVOVF9UWVBFIF0sXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIobW91c2VXaGVlbERlbHRhKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBtb3VzZUV2ZW50TGlzdGVuZXIgPSAoZXZlbnQsIGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2ZW50KTtcblxuICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIobW91c2VDb29yZGluYXRlcywgdGhpcy5tb3VzZURvd24pO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRVVQX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRURPV05fRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFTU9WRV9FVkVOVF9UWVBFKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFdIRUVMX0VWRU5UX1RZUEUsIHRoaXMud2hlZWxFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlVXBFdmVudExpc3RlbmVyKTtcbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VET1dOX0VWRU5UX1RZUEUsIHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzTWFwID0ge30sXG4gICAgICAgICAgbW91c2VEb3duID0gZmFsc2UsICAvLy9cblx0XHRcdFx0XHRtb3VzZUV2ZW50cyA9IG5ldyBNb3VzZUV2ZW50cyhoYW5kbGVyc01hcCwgbW91c2VEb3duKTtcblxuICAgIHJldHVybiBtb3VzZUV2ZW50cztcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZVdoZWVsRGVsdGFGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB3aGVlbERlbHRhIH0gPSBldmVudCxcbiAgICAgICAgbW91c2VXaGVlbERlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHdoZWVsRGVsdGEpKTsgLy8vXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgeyB0b3AsIGxlZnQgfSA9IGJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcbiAgICAgICAgICB0b3AgLSBjbGllbnRZXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBLZXlFdmVudHMgZnJvbSBcIi4va2V5RXZlbnRzXCI7XG5pbXBvcnQgTW91c2VFdmVudHMgZnJvbSBcIi4vbW91c2VFdmVudHNcIjtcblxuaW1wb3J0IHsgemVybzIsIHN1YnRyYWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcklucHV0IHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlczsgIC8vL1xuXG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICAgIHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbERlbHRhLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCk7XG5cbiAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlcklucHV0SGFuZGxlcjsgLy8vXG5cbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH1cblxuICBhZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcikgeyB0aGlzLmtleUV2ZW50cy5hZGRFc2NhcGVLZXlEb3duSGFuZGxlcihlc2NhcGVLZXlEb3duSGFuZGxlcik7IH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgIGNvbnN0IG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsSGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMua2V5RXZlbnRzLmluaXRpYWxpc2UoKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKG1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBrZXlFdmVudHMgPSBLZXlFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdXNlcklucHV0ID0gbmV3IFVzZXJJbnB1dChoYW5kbGVycywga2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgbW91c2VDb29yZGluYXRlcywgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB1c2VySW5wdXQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMsIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGVzY2FwZUtleURvd25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2FtZXJhLnJlc2V0KCk7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMudXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIHVzZXJJbnB1dEhhbmRsZXIgPSAocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikgPT4ge1xuICAgIGNvbnN0IHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgdGhpcy5jYW52YXMsIHJlbmRlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IFVzZXJJbnB1dC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih0aGlzLnVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyO1xuXG4gICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICBwYXJ0LnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCB0aGlzLmNhbnZhcyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBQYXJ0KSxcbiAgICAgICAgICBjYW1lcmEgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2FtZXJhKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuaW1wb3J0IHsgcmVmbGVjdDMsIHRydW5jYXRlNCwgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zKGFuZ2xlcywgZGlyZWN0aW9ucykge1xuICBhbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpOyAgLy8vXG5cbiAgY29uc3QgcmV2ZXJzZU9yZGVyID0gdHJ1ZSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlcik7XG5cbiAgbGV0IHJlbGF0aXZlT2Zmc2V0cyA9IHRyYW5zZm9ybTQoZGlyZWN0aW9ucywgcm90YXRpb25zTWF0cml4KTtcblxuICByZWxhdGl2ZU9mZnNldHMgPSB0cnVuY2F0ZTQocmVsYXRpdmVPZmZzZXRzKTtcblxuICByZXR1cm4gcmVsYXRpdmVPZmZzZXRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29mZnNldHNcIjtcbmltcG9ydCB7IE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsIFJFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gICAgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIGdldERlbHRhTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKSB7XG4gICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyOyAvLy9cblxuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7IC8vL1xuXG4gICAgY29uc3Qgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMSkpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zLCAxKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSkge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgKiBtb3VzZVdoZWVsU2Vuc2l0aXZpdHksXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IFJFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgKiBtb3VzZVNlbnNpdGl2aXR5LFxuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7XG5cbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMywgc2NhbGUyLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmNsb2Nrd2lzZSA9IGNsb2Nrd2lzZTtcbiAgfVxuXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cblxuICBpc0Nsb2Nrd2lzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja3dpc2U7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0aGlzLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgICAgIDAsICttdWx0aXBsaWVyLCAwLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgICAgIDAsICAgICAgICAgICAwLCAwXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlbGF0aXZlQW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLnJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMCBdLCBtYXRyaXgpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSxcbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEpTT04oa2V5KSB7XG4gIGxldCBqc29uID0gbnVsbDtcblxuICBjb25zdCB2YWx1ZSA9IGdldChrZXkpO1xuXG4gIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SlNPTihrZXksIGpzb24pIHtcbiAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICBzZXQoa2V5LCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU09OKGtleSkge1xuICByZW1vdmUoa2V5KTtcbn1cblxuZnVuY3Rpb24gZ2V0KGtheSkge1xuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtheSkgfHwgbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldChrYXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtheSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyLCBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCBzZXRKU09OLCByZW1vdmVKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IEdBTUlOR19DQU1FUkEsIElOVkVSVF9NVUxUSVBMSUVSLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04sXG4gICAgICAgICBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24gfHwgbW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICBjb25zdCBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCk7XG5cbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIGFuZ2xlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKTtcblxuICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHNcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSxcbiAgICAgICAgICBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsUG9zaXRpb24gPSBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IGluaXRpYWxPZmZzZXRzID0gc2NhbGUzKGluaXRpYWxQb3NpdGlvbiwgSU5WRVJUX01VTFRJUExJRVIpO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBvZmZzZXRzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsT2Zmc2V0cyA9IG9mZnNldHM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHNNb3VzZVNlbnNpdGl2aXR5QW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxPZmZzZXRzLCBtb3VzZVNlbnNpdGl2aXR5LCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb2Nrd2lzZSA9IHRydWUsXG4gICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNSU5JTVVNX0RJU1RBTkNFLCBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcikge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICB0aGlzLm1pbmltdW1EaXN0YW5jZSA9IG1pbmltdW1EaXN0YW5jZTtcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBnZXRNaW5pbXVtRGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluaW11bURpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgLSBtb3VzZVdoZWVsRGVsdGE7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlzdGFuY2UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgbWluaW11bURpc3RhbmNlID0gTUlOSU1VTV9ESVNUQU5DRSxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiAqIG1vdXNlV2hlZWxTZW5zaXRpdml0eSxcbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcik7XG5cbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuaW1wb3J0IFpvb20gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvem9vbVwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IHNjYWxlMiB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgREVTSUdOX0NBTUVSQSwgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX1BFUlNJU1QsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfQU5HTEVTLFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX09GRlNFVFMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UsXG4gICAgICAgICBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9TRU5TSVRJVklUWSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCB6b29tLCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy56b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHMsXG4gICAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICBzZXRKU09OKGtleSwganNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgem9vbSA9IHpvb21Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVNlbnNpdGl2aXR5ID0gREVGQVVMVF9NT1VTRV9TRU5TSVRJVklUWSxcbiAgICAgICAgICBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxPZmZzZXRzID0gREVGQVVMVF9JTklUSUFMX09GRlNFVFMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKTtcblxuICByZXR1cm4gdGlsdDtcbn1cblxuZnVuY3Rpb24gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxEaXN0YW5jZSA9IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxEaXN0YW5jZSA9IGRpc3RhbmNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbFNlbnNpdGl2aXR5KGluaXRpYWxEaXN0YW5jZSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gem9vbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhob3N0LCBpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgY2FsbGJhY2spIHtcbiAgY29uc3QgaW1hZ2VzID0gW10sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgIH07XG5cbiAgZm9yRWFjaChpbWFnZU5hbWVzLCAoaW1hZ2VOYW1lLCBuZXh0LCBkb25lLCBjb250ZXh0KSA9PiB7XG4gICAgY29uc3Qgc3JjID0gYCR7aG9zdH0ke2ltYWdlRGlyZWN0b3J5VVJJfS8ke2ltYWdlTmFtZX1gLFxuICAgICAgICAgIGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7XG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZSwge1xuICAgICAgc3JjLFxuICAgICAgb25sb2FkLFxuICAgICAgY3Jvc3NPcmlnaW5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcywgaW1hZ2VOYW1lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCBjYWxsYmFjaykge1xuICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VNYXBVUkl9YCxcbiAgICAgICAgaW1hZ2VNYXAgPSBuZXcgSW1hZ2UoKSxcdC8vL1xuICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUzsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2VNYXAsIHtcbiAgICBzcmMsXG4gICAgb25sb2FkLFxuICAgIGNyb3NzT3JpZ2luXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9ubG9hZChldmVudCkge1xuICAgIGNhbGxiYWNrKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJlbG9hZEltYWdlcyxcbiAgcHJlbG9hZEltYWdlTWFwXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vcm1hbGlzZTMsIHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihleHRlbnQpIHtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldEV4dGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBleHRlbnQgPSBjbG9uZUV4dGVudCh0aGlzLmV4dGVudCksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNlY29uZFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgdGhpcmRQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZmlyc3RFeHRlbnQgPSBzdWJ0cmFjdDMoc2Vjb25kUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBleHRlbnQgPSBub3JtYWxpc2UzKGNyb3NzMyhmaXJzdEV4dGVudCwgc2Vjb25kRXh0ZW50KSksXG4gICAgICAgICAgbm9ybWFsID0gbmV3IE5vcm1hbChleHRlbnQpO1xuXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUV4dGVudChleHRlbnQpIHsgcmV0dXJuIGV4dGVudC5zbGljZSgpOyB9XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbih0aGlzLnBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRyYW5zZm9ybSh0aGlzLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjb29yZGluYXRlVHVwbGUuc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3VidHJhY3QzLCBjcm9zczMsIGxlbmd0aDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVkZ2VzKGVkZ2VzKSB7XG4gIGVkZ2VzID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgZWRnZSA9IGVkZ2UuY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lTm9ybWFsKG5vcm1hbCkge1xuICBub3JtYWwgPSBub3JtYWwuY2xvbmUoKTtcbiAgXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gIHZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICB2ZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpIHtcbiAgY29uc3QgZWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHB1c2gsIHBlcm11dGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiwgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyxcbiAgICAgICAgIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ufSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKTtcblxuICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3Qgbm9ybWFsRXh0ZW50ID0gdGhpcy5ub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsRXh0ZW50LCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXggPSBpbmRleCAqIDMsXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMCxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMSxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaXNNYXNrZWQobWFza2luZ0ZhY2V0KSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VzID0gbWFza2luZ0ZhY2V0LmdldE1hc2tpbmdFZGdlcygpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb24gPSBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIHZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgdmVydGV4LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5yZ2JhLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgdGhpcy5yZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgdGhpcy5yZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBDb2xvdXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBzdXBlci5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gQ29sb3VyZWRGYWNldC5mcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYWRkKGZhY2V0cywgZmFjZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFjZXRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgaW52ZXJ0MiwgaW52ZXJ0MyB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5pbXBvcnQgeyBhZGQyLCBtdWx0aXBseTIsIHRyYW5zZm9ybTIsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB7XG4gICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRleHR1cmVDb29yZGluYXRlVHVwbGUuc2xpY2UoKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGU7XG4gIH0pO1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpIHtcbiAgY29uc3QgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGV4dGVudCxcbiAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSk7XG5cbiAgICAgICAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbiAgICAgICAgfSk7IC8vL1xuXG4gIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIGNvbnN0IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247IC8vL1xuXG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBhcmVudFZlcnRpY2VzID0gcm90YXRlVmVydGljZXMocGFyZW50VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGljZXMgPSByb3RhdGVkVmVydGljZXM7ICAvLy9cblxuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4ID0gZmlyc3QocGFyZW50VmVydGljZXMpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXggPSBzZWNvbmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleCA9IHRoaXJkKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gZmlyc3QodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gc2Vjb25kKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb24gPSBmaXJzdFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uID0gdGhpcmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSMXkgPSBmaXJzdFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFIyeCA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBSM3ggPSB0aGlyZFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIzeSA9IHRoaXJkVmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDN4ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAxeSA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMnkgPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAzeSA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMXUgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMXYgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDJ2ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAzdSA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCA9IGludmVydDMoWyAxLCAxLCAxLCBQMXUsIFAydSwgUDN1LCBQMXYsIFAydiwgUDN2IF0pLFxuICAgICAgICBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF4LCBQMngsIFAzeCBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeSwgUDJ5LCBQM3kgXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgT3ggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgT3kgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCA9IGludmVydDIoWyBVeCwgVXksIFZ4LCBWeSBdKSxcbiAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIxeCAtIE94LCBSMXkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMnggLSBPeCwgUjJ5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IFtcbiAgICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHBlcm11dGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGV4dHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBUZXh0dXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5pbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICBpZiAoZmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFjZXRzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2sgfSBmcm9tIFwiLi9lbGVtZW50L21hc2tcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFydCB9IGZyb20gXCIuL2VsZW1lbnQvcGFydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY2VuZSB9IGZyb20gXCIuL2VsZW1lbnQvc2NlbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtaW5nQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZ2FtaW5nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2Rlc2lnblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wcmVsb2FkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVjdG9yTWF0aHMgfSBmcm9tIFwiLi9tYXRocy92ZWN0b3JcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF0cml4TWF0aHMgfSBmcm9tIFwiLi9tYXRocy9tYXRyaXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy8vXG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIFJlYWN0XG59KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30gPlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDdWJlIGNvbG91cj17WyAwLCAxLCAwIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhIHBlcnNpc3QgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdWJlRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwicGxhc3Rlci5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAyLCAwIF0sIFsgMiwgMiBdIF0sXG4gICAgICAgIFsgWyAyLCAyIF0sIFsgMCwgMiBdLCBbIDAsIDAgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFF1YWRyYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBNYXNrLCBEZXNpZ25DYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuaW1wb3J0IFRleHR1cmVkUXVhZHJhbmdsZSBmcm9tIFwiLi9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZVwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZXMgfSA9IHByZWxvYWRVdGlsaXRpZXMsXG4gICAgICB7IGhvc3QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJIH0gPSB3aW5kb3c7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZXMoaG9zdCwgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIChpbWFnZXMsIGltYWdlTmFtZXMpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9ID5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJtYXNrXCI+XG4gICAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAuMTI1IF19IC8+XG4gICAgICAgICAgPC9NYXNrPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJmbG9vcmJvYXJkcy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aWxpbmdFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaW1wbGVFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgbWFza2luZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIj5cbiAgICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwiaGFsZi1zaXplZC1jdWJlXCI+XG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrUmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCIvPlxuICAgICAgICA8L01hc2s+XG4gICAgICAgIDxDdWJlIG1hc2tSZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIiAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFza2luZ0V4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAgIDAsIDAsIDAgXSxcbiAgICAgICAgWyAgIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLjUsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAyIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJzdHJpcGVzLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAwLjUsIDEgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFRyaWFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRUcmlhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkVHJpYW5nbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVkVHJpYW5nbGUgZnJvbSBcIi4vdGV4dHVyZWRUcmlhbmdsZVwiO1xuXG5jb25zdCBTaWRlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPFRleHR1cmVkVHJpYW5nbGUgc2NhbGU9e1sgMSwgMS9NYXRoLnNxcnQoMiksIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgMCwgMC41IF19IHJvdGF0aW9ucz17WyAtNDUsIDAsIDAgXX0gLz5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2lkZSBmcm9tIFwiLi9zaWRlXCI7XG5cbmNvbnN0IFB5cmFtaWQgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxTaWRlIC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgIDkwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMTgwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMjcwLCAwIF19IC8+LFxuXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBQeXJhbWlkO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQYXJ0LCBTY2VuZSwgQ2FudmFzLCBHYW1pbmdDYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgUHlyYW1pZCBmcm9tIFwiLi9lbGVtZW50L3B5cmFtaWRcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IHByZWxvYWRVdGlsaXRpZXMsXG4gICAgICB7IGhvc3QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04gfSA9IHdpbmRvdztcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcChob3N0LCBpbWFnZU1hcFVSSSwgaW1hZ2VNYXBKU09OLCAoaW1hZ2VNYXAsIGltYWdlTWFwSlNPTikgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhIG1vdXNlU2Vuc2l0aXZpdHk9ezEwfSAvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4veGdsXCI7XG5cbmltcG9ydCBjdWJlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL2N1YmVcIjtcbmltcG9ydCB0aWxpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvdGlsaW5nXCI7XG5pbXBvcnQgc2ltcGxlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZVwiO1xuaW1wb3J0IG1hc2tpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvbWFza2luZ1wiO1xuaW1wb3J0IHB5cmFtaWRFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvcHlyYW1pZFwiO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJjdWJlXCI6XG4gICAgY3ViZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJ0aWxpbmdcIjpcbiAgICB0aWxpbmdFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwic2ltcGxlXCI6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcIm1hc2tpbmdcIjpcbiAgICBtYXNraW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInB5cmFtaWRcIjpcbiAgICBweXJhbWlkRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7UUFFZ0IsT0FBSyxXQUFBO2lCQUFMOztRQVNBLE9BQUssV0FBQTtpQkFBTDs7UUFVQSxPQUFLLFdBQUE7aUJBQUw7O1FBV0EsU0FBTyxXQUFBO2lCQUFQOztRQU1BLFNBQU8sV0FBQTtpQkFBUDs7UUFNQSxTQUFPLFdBQUE7aUJBQVA7O1FBTUEsTUFBSSxXQUFBO2lCQUFKOztRQUVBLE1BQUksV0FBQTtpQkFBSjs7UUFFQSxNQUFJLFdBQUE7aUJBQUo7O1FBRUEsUUFBTSxXQUFBO2lCQUFOOztRQWFBLFlBQVUsV0FBQTtpQkFBVjs7UUFZQSxZQUFVLFdBQUE7aUJBQVY7O1FBZUEsWUFBVSxX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QUE7OztpQkFBQTs7Ozs7Ozs7O0FBTkEsVUFBTSxPQUFPLFNBQUMsWUFBQTtlQUVaLHNCQUFBLGNBQUMsa0JBQUEsU0FBZ0I7VUFBQyxPQUFPO1lBQUU7WUFBRyxJQUFFLEtBQUssS0FBSztZQUFJOztVQUFLLFVBQVU7WUFBRTtZQUFNO1lBQUc7O1VBQU8sV0FBVztZQUFFO1lBQUs7WUFBRzs7OztVQUl0RyxXQUFlOzs7OztBQ1ZmOzs7Ozs7cUNBYUEsV0FBQTs7O2lCQUFBOzs7Ozs7Ozs7QUFUQSxVQUFNLFVBQVUsU0FBQyxZQUFBO2VBQWU7VUFFOUIsc0JBQUEsY0FBQyxNQUFBLFNBQUk7VUFDTCxzQkFBQSxjQUFDLE1BQUEsU0FBSTtZQUFDLFdBQVc7Y0FBRTtjQUFJO2NBQUk7OztVQUMzQixzQkFBQSxjQUFDLE1BQUEsU0FBSTtZQUFDLFdBQVc7Y0FBRTtjQUFHO2NBQUs7OztVQUMzQixzQkFBQSxjQUFDLE1BQUEsU0FBSTtZQUFDLFdBQVc7Y0FBRTtjQUFHO2NBQUs7Ozs7O1VBSTdCLFdBQWU7Ozs7O0FDYmY7Ozs7OztxQ0EwQkEsV0FBQTs7O2lCQUFBOzs7Ozs7Ozs7O0FBcEJBLFVBQVEsa0JBQW9CLE9BQUEsaUJBQXBCO0FBQVIsVUFDUSxPQUFvQyxPQUFwQztBQURSLFVBQ2MsY0FBOEIsT0FBOUI7QUFEZCxVQUMyQixlQUFpQixPQUFqQjtBQUUzQixVQUFNLGlCQUFpQixXQUFBO0FBQ3JCLHdCQUFnQixNQUFNLGFBQWEsY0FBYyxTQUFDLFVBQVUsZUFBQTtBQUMxRCxjQUFNLFNBQVMsSUFBSSxPQUFBO0FBRW5CLGlCQUVFLHNCQUFBLGNBQUMsT0FBQSxPQUFLO1lBQUM7YUFDTCxzQkFBQSxjQUFDLE9BQUEsTUFBSTtZQUFDO1lBQW9CLGNBQWM7YUFDdEMsc0JBQUEsY0FBQyxTQUFBLFNBQU8sUUFFVixzQkFBQSxjQUFDLE9BQUEsY0FBWTtZQUFDLGtCQUFrQjs7OztVQU94QyxXQUFlOzs7OztBQzFCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxVQUFNLFVBQVUsT0FBTyxTQUFTLE9BQU8sVUFBVTtBQUVqRCxjQUFRO2FBQ0Q7QUFDSCxVQUFBLElBQUEsTUFBQTtBQUVBO2FBRUc7QUFDSCxVQUFBLElBQUEsUUFBQTtBQUVBO2FBRUc7QUFDSCxVQUFBLElBQUEsUUFBQTtBQUVBO2FBRUc7QUFDSCxVQUFBLElBQUEsU0FBQTtBQUVBO2FBRUc7QUFDSCxVQUFBLElBQUEsU0FBQTtBQUVBOzs7OyIsCiAgIm5hbWVzIjogW10KfQo=
