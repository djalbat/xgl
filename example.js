(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };

  // lib/constants.js
  var require_constants = __commonJS({
    "lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ANONYMOUS = exports.HEIGHT = exports.VERTICES_LENGTH = exports.EXT_TEXTURE_FILTER_ANISOTROPIC = exports.OFFSET_MULTIPLIER = exports.INVERT_MULTIPLIER = exports.WIDTH = exports.ANGLES_MULTIPLIER = exports.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = exports.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = exports.CANVAS = exports.DEGREES_TO_RADIANS_MULTIPLIER = exports.FUNCTION = exports.MINIMUM_DISTANCE = void 0;
      var WIDTH = "width";
      exports.WIDTH = WIDTH;
      var HEIGHT = "height";
      exports.HEIGHT = HEIGHT;
      var CANVAS = "canvas";
      exports.CANVAS = CANVAS;
      var FUNCTION = "function";
      exports.FUNCTION = FUNCTION;
      var ANONYMOUS = "anonymous";
      exports.ANONYMOUS = ANONYMOUS;
      var VERTICES_LENGTH = 3;
      exports.VERTICES_LENGTH = VERTICES_LENGTH;
      var MINIMUM_DISTANCE = 1;
      exports.MINIMUM_DISTANCE = MINIMUM_DISTANCE;
      var INVERT_MULTIPLIER = -1;
      exports.INVERT_MULTIPLIER = INVERT_MULTIPLIER;
      var ANGLES_MULTIPLIER = 0.01;
      exports.ANGLES_MULTIPLIER = ANGLES_MULTIPLIER;
      var OFFSET_MULTIPLIER = 0.25;
      exports.OFFSET_MULTIPLIER = OFFSET_MULTIPLIER;
      var DEGREES_TO_RADIANS_MULTIPLIER = Math.PI / 180;
      exports.DEGREES_TO_RADIANS_MULTIPLIER = DEGREES_TO_RADIANS_MULTIPLIER;
      var EXT_TEXTURE_FILTER_ANISOTROPIC = "EXT_texture_filter_anisotropic";
      exports.EXT_TEXTURE_FILTER_ANISOTROPIC = EXT_TEXTURE_FILTER_ANISOTROPIC;
      var MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = "MOZ_EXT_texture_filter_anisotropic";
      exports.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC;
      var WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = "WEBKIT_EXT_texture_filter_anisotropic";
      exports.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC;
    }
  });

  // lib/element.js
  var require_element = __commonJS({
    "lib/element.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _constants = require_constants();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var Element1 = /* @__PURE__ */ function() {
        function Element12() {
          _classCallCheck(this, Element12);
        }
        _createClass(Element12, [
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
              var element = _construct(Class, _toConsumableArray(remainingArguments)), childElements = _typeof(element.childElements) === _constants.FUNCTION ? element.childElements(properties) : properties.childElements || [];
              element.setProperties(properties);
              element.setChildElements(childElements);
              return element;
            }
          }
        ]);
        return Element12;
      }();
      exports.default = Element1;
    }
  });

  // lib/maths/vector.js
  var require_vector = __commonJS({
    "lib/maths/vector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.zero2 = zero2;
      exports.zero3 = zero3;
      exports.zero4 = zero4;
      exports.length2 = length2;
      exports.length3 = length3;
      exports.length4 = length4;
      exports.dot2 = dot2;
      exports.dot3 = dot3;
      exports.dot4 = dot4;
      exports.cross3 = cross3;
      exports.normalise2 = normalise2;
      exports.normalise3 = normalise3;
      exports.normalise4 = normalise4;
      exports.reflect2 = reflect2;
      exports.reflect3 = reflect3;
      exports.reflect4 = reflect4;
      exports.truncate4 = truncate4;
      exports.scale2 = scale2;
      exports.scale3 = scale3;
      exports.scale4 = scale4;
      exports.add2 = add2;
      exports.add3 = add3;
      exports.add4 = add4;
      exports.subtract2 = subtract2;
      exports.subtract3 = subtract3;
      exports.subtract4 = subtract4;
      exports.multiply2 = multiply2;
      exports.multiply3 = multiply3;
      exports.multiply4 = multiply4;
      exports.transform2 = transform2;
      exports.transform3 = transform3;
      exports.transform4 = transform4;
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
        var x = vector[0], y = vector[1];
        return Math.sqrt(x * x + y * y);
      }
      function length3(vector) {
        var x = vector[0], y = vector[1], z = vector[2];
        return Math.sqrt(x * x + y * y + z * z);
      }
      function length4(vector) {
        var x = vector[0], y = vector[1], z = vector[2], w = vector[3];
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
        var x = vector[0], y = vector[1], length = Math.sqrt(x * x + y * y);
        if (length > 0) {
          return [
            x / length,
            y / length
          ];
        }
      }
      function normalise3(vector) {
        var x = vector[0], y = vector[1], z = vector[2], length = Math.sqrt(x * x + y * y + z * z);
        if (length > 0) {
          return [
            x / length,
            y / length,
            z / length
          ];
        }
      }
      function normalise4(vector) {
        var x = vector[0], y = vector[1], z = vector[2], w = vector[3], length = Math.sqrt(x * x + y * y + z * z + w * w);
        if (length > 0) {
          return [
            x / length,
            y / length,
            z / length,
            w / length
          ];
        }
      }
      function reflect2(vector) {
        return [
          vector[0] * -1,
          vector[1] * -1
        ];
      }
      function reflect3(vector) {
        return [
          vector[0] * -1,
          vector[1] * -1,
          vector[2] * -1
        ];
      }
      function reflect4(vector) {
        return [
          vector[0] * -1,
          vector[1] * -1,
          vector[2] * -1,
          vector[3] * -1
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
    }
  });

  // lib/maths/matrix.js
  var require_matrix = __commonJS({
    "lib/maths/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.identity2 = identity2;
      exports.identity3 = identity3;
      exports.identity4 = identity4;
      exports.multiply2 = multiply2;
      exports.multiply3 = multiply3;
      exports.multiply4 = multiply4;
      exports.invert2 = invert2;
      exports.invert3 = invert3;
      exports.invert4 = invert4;
      exports.transpose2 = transpose2;
      exports.transpose3 = transpose3;
      exports.transpose4 = transpose4;
      exports.scale4 = scale4;
      exports.rotate4 = rotate4;
      exports.translate4 = translate4;
      exports.perspective4 = perspective4;
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
        var a0 = matrixA[0], a1 = matrixA[1], a2 = matrixA[2], a3 = matrixA[3], b0 = matrixB[0], b1 = matrixB[1], b2 = matrixB[2], b3 = matrixB[3];
        return [
          a0 * b0 + a2 * b1,
          a1 * b0 + a3 * b1,
          a0 * b2 + a2 * b3,
          a1 * b2 + a3 * b3
        ];
      }
      function multiply3(matrixA, matrixB) {
        var a0 = matrixA[0], a1 = matrixA[1], a2 = matrixA[2], a3 = matrixA[3], a4 = matrixA[4], a5 = matrixA[5], a6 = matrixA[6], a7 = matrixA[7], a8 = matrixA[8], b0 = matrixB[0], b1 = matrixB[1], b2 = matrixB[2], b3 = matrixB[3], b4 = matrixB[4], b5 = matrixB[5], b6 = matrixB[6], b7 = matrixB[7], b8 = matrixB[8];
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
        var a0 = matrixA[0], a1 = matrixA[1], a2 = matrixA[2], a3 = matrixA[3], a4 = matrixA[4], a5 = matrixA[5], a6 = matrixA[6], a7 = matrixA[7], a8 = matrixA[8], a9 = matrixA[9], a10 = matrixA[10], a11 = matrixA[11], a12 = matrixA[12], a13 = matrixA[13], a14 = matrixA[14], a15 = matrixA[15], b0 = matrixB[0], b1 = matrixB[1], b2 = matrixB[2], b3 = matrixB[3], b4 = matrixB[4], b5 = matrixB[5], b6 = matrixB[6], b7 = matrixB[7], b8 = matrixB[8], b9 = matrixB[9], b10 = matrixB[10], b11 = matrixB[11], b12 = matrixB[12], b13 = matrixB[13], b14 = matrixB[14], b15 = matrixB[15];
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
      function invert2(matrix) {
        var m0 = matrix[0], m1 = matrix[1], m2 = matrix[2], m3 = matrix[3], determinant = m0 * m3 - m2 * m1;
        if (determinant !== 0) {
          return [
            +m3 / determinant,
            -m1 / determinant,
            -m2 / determinant,
            +m0 / determinant
          ];
        }
      }
      function invert3(matrix) {
        var m00 = matrix[0], m01 = matrix[1], m02 = matrix[2], m10 = matrix[3], m11 = matrix[4], m12 = matrix[5], m20 = matrix[6], m21 = matrix[7], m22 = matrix[8], b01 = m22 * m11 - m12 * m21, b11 = -m22 * m10 + m12 * m20, b21 = m21 * m10 - m11 * m20, determinant = m00 * b01 + m01 * b11 + m02 * b21;
        if (determinant !== 0) {
          return [
            b01 / determinant,
            (-m22 * m01 + m02 * m21) / determinant,
            (m12 * m01 - m02 * m11) / determinant,
            b11 / determinant,
            (m22 * m00 - m02 * m20) / determinant,
            (-m12 * m00 + m02 * m10) / determinant,
            b21 / determinant,
            (-m21 * m00 + m01 * m20) / determinant,
            (m11 * m00 - m01 * m10) / determinant
          ];
        }
      }
      function invert4(matrix) {
        var m00 = matrix[0], m01 = matrix[1], m02 = matrix[2], m03 = matrix[3], m10 = matrix[4], m11 = matrix[5], m12 = matrix[6], m13 = matrix[7], m20 = matrix[8], m21 = matrix[9], m22 = matrix[10], m23 = matrix[11], m30 = matrix[12], m31 = matrix[13], m32 = matrix[14], m33 = matrix[15], b00 = m00 * m11 - m01 * m10, b01 = m00 * m12 - m02 * m10, b02 = m00 * m13 - m03 * m10, b03 = m01 * m12 - m02 * m11, b04 = m01 * m13 - m03 * m11, b05 = m02 * m13 - m03 * m12, b06 = m20 * m31 - m21 * m30, b07 = m20 * m32 - m22 * m30, b08 = m20 * m33 - m23 * m30, b09 = m21 * m32 - m22 * m31, b10 = m21 * m33 - m23 * m31, b11 = m22 * m33 - m23 * m32, determinant = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (determinant !== 0) {
          return [
            (m11 * b11 - m12 * b10 + m13 * b09) / determinant,
            (m02 * b10 - m01 * b11 - m03 * b09) / determinant,
            (m31 * b05 - m32 * b04 + m33 * b03) / determinant,
            (m22 * b04 - m21 * b05 - m23 * b03) / determinant,
            (m12 * b08 - m10 * b11 - m13 * b07) / determinant,
            (m00 * b11 - m02 * b08 + m03 * b07) / determinant,
            (m32 * b02 - m30 * b05 - m33 * b01) / determinant,
            (m20 * b05 - m22 * b02 + m23 * b01) / determinant,
            (m10 * b10 - m11 * b08 + m13 * b06) / determinant,
            (m01 * b08 - m00 * b10 - m03 * b06) / determinant,
            (m30 * b04 - m31 * b02 + m33 * b00) / determinant,
            (m21 * b02 - m20 * b04 - m23 * b00) / determinant,
            (m11 * b07 - m10 * b09 - m12 * b06) / determinant,
            (m00 * b09 - m01 * b07 + m02 * b06) / determinant,
            (m31 * b01 - m30 * b03 - m32 * b00) / determinant,
            (m20 * b03 - m21 * b01 + m22 * b00) / determinant
          ];
        }
      }
      function transpose2(matrix) {
        return [
          matrix[0],
          matrix[2],
          matrix[1],
          matrix[3]
        ];
      }
      function transpose3(matrix) {
        return [
          matrix[0],
          matrix[3],
          matrix[6],
          matrix[1],
          matrix[4],
          matrix[7],
          matrix[2],
          matrix[5],
          matrix[8]
        ];
      }
      function transpose4(matrix) {
        return [
          matrix[0],
          matrix[4],
          matrix[8],
          matrix[12],
          matrix[1],
          matrix[5],
          matrix[9],
          matrix[13],
          matrix[2],
          matrix[6],
          matrix[10],
          matrix[14],
          matrix[3],
          matrix[7],
          matrix[11],
          matrix[15]
        ];
      }
      function scale4(matrix, vector) {
        var x = vector[0], y = vector[1], z = vector[2];
        return [
          matrix[0] * x,
          matrix[1] * x,
          matrix[2] * x,
          matrix[3] * x,
          matrix[4] * y,
          matrix[5] * y,
          matrix[6] * y,
          matrix[7] * y,
          matrix[8] * z,
          matrix[9] * z,
          matrix[10] * z,
          matrix[11] * z,
          matrix[12] * 1,
          matrix[13] * 1,
          matrix[14] * 1,
          matrix[15] * 1
        ];
      }
      function rotate4(matrix, angle, vector) {
        var x = vector[0], y = vector[1], z = vector[2];
        var length = Math.sqrt(x * x + y * y + z * z);
        if (length !== 0) {
          x /= length;
          y /= length;
          z /= length;
          var s = Math.sin(angle), c = Math.cos(angle), t = 1 - c, m00 = matrix[0], m01 = matrix[1], m02 = matrix[2], m03 = matrix[3], m10 = matrix[4], m11 = matrix[5], m12 = matrix[6], m13 = matrix[7], m20 = matrix[8], m21 = matrix[9], m22 = matrix[10], m23 = matrix[11], b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
          return [
            m00 * b00 + m10 * b01 + m20 * b02,
            m01 * b00 + m11 * b01 + m21 * b02,
            m02 * b00 + m12 * b01 + m22 * b02,
            m03 * b00 + m13 * b01 + m23 * b02,
            m00 * b10 + m10 * b11 + m20 * b12,
            m01 * b10 + m11 * b11 + m21 * b12,
            m02 * b10 + m12 * b11 + m22 * b12,
            m03 * b10 + m13 * b11 + m23 * b12,
            m00 * b20 + m10 * b21 + m20 * b22,
            m01 * b20 + m11 * b21 + m21 * b22,
            m02 * b20 + m12 * b21 + m22 * b22,
            m03 * b20 + m13 * b21 + m23 * b22,
            matrix[12],
            matrix[13],
            matrix[14],
            matrix[15]
          ];
        }
      }
      function translate4(matrix, vector) {
        var x = vector[0], y = vector[1], z = vector[2], m00 = matrix[0], m01 = matrix[1], m02 = matrix[2], m03 = matrix[3], m10 = matrix[4], m11 = matrix[5], m12 = matrix[6], m13 = matrix[7], m20 = matrix[8], m21 = matrix[9], m22 = matrix[10], m23 = matrix[11];
        return [
          m00,
          m01,
          m02,
          m03,
          m10,
          m11,
          m12,
          m13,
          m20,
          m21,
          m22,
          m23,
          m00 * x + m10 * y + m20 * z + matrix[12],
          m01 * x + m11 * y + m21 * z + matrix[13],
          m02 * x + m12 * y + m22 * z + matrix[14],
          m03 * x + m13 * y + m23 * z + matrix[15]
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
    }
  });

  // node_modules/necessary/lib/constants.js
  var require_constants2 = __commonJS({
    "node_modules/necessary/lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DEFAULT_LOG_FILE_BASE_NAME = exports.BACKSPACE_CHARACTER = exports.ETX_CHARACTER = exports.CONTENT_TYPE = exports.DEFAULT_RC_BASE_EXTENSION = exports.DATA_EVENT = exports.POST = exports.CARRIAGE_RETURN_CHARACTER = exports.DEFAULT_ENCODING = exports.ERROR = exports.EMPTY_STRING = exports.ACCEPT = exports.AMPERSAND_CHARACTER = exports.COLON_CHARACTER = exports.CTRL_C = exports.DEFAULT_ATTEMPTS = exports.DEFAULT_INITIAL_ANSWER = exports.APPLICATION_JSON = exports.GET = exports.LINE_FEED_CHARACTER = exports.DEFAULT_LOG_DIRECTORY_PATH = exports.UTF8_ENCODING = void 0;
      var GET = "GET";
      exports.GET = GET;
      var POST = "POST";
      exports.POST = POST;
      var ERROR = "error";
      exports.ERROR = ERROR;
      var CTRL_C = "^C";
      exports.CTRL_C = CTRL_C;
      var ACCEPT = "accept";
      exports.ACCEPT = ACCEPT;
      var DATA_EVENT = "data";
      exports.DATA_EVENT = DATA_EVENT;
      var EMPTY_STRING = "";
      exports.EMPTY_STRING = EMPTY_STRING;
      var CONTENT_TYPE = "content-type";
      exports.CONTENT_TYPE = CONTENT_TYPE;
      var UTF8_ENCODING = "utf8";
      exports.UTF8_ENCODING = UTF8_ENCODING;
      var ETX_CHARACTER = "";
      exports.ETX_CHARACTER = ETX_CHARACTER;
      var COLON_CHARACTER = ":";
      exports.COLON_CHARACTER = COLON_CHARACTER;
      var DEFAULT_ATTEMPTS = 3;
      exports.DEFAULT_ATTEMPTS = DEFAULT_ATTEMPTS;
      var APPLICATION_JSON = "application/json";
      exports.APPLICATION_JSON = APPLICATION_JSON;
      var DEFAULT_ENCODING = UTF8_ENCODING;
      exports.DEFAULT_ENCODING = DEFAULT_ENCODING;
      var AMPERSAND_CHARACTER = "&";
      exports.AMPERSAND_CHARACTER = AMPERSAND_CHARACTER;
      var LINE_FEED_CHARACTER = "\n";
      exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
      var BACKSPACE_CHARACTER = String.fromCharCode(127);
      exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
      var DEFAULT_INITIAL_ANSWER = EMPTY_STRING;
      exports.DEFAULT_INITIAL_ANSWER = DEFAULT_INITIAL_ANSWER;
      var CARRIAGE_RETURN_CHARACTER = "\r";
      exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
      var DEFAULT_RC_BASE_EXTENSION = EMPTY_STRING;
      exports.DEFAULT_RC_BASE_EXTENSION = DEFAULT_RC_BASE_EXTENSION;
      var DEFAULT_LOG_DIRECTORY_PATH = null;
      exports.DEFAULT_LOG_DIRECTORY_PATH = DEFAULT_LOG_DIRECTORY_PATH;
      var DEFAULT_LOG_FILE_BASE_NAME = "default";
      exports.DEFAULT_LOG_FILE_BASE_NAME = DEFAULT_LOG_FILE_BASE_NAME;
    }
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS({
    "node_modules/necessary/lib/utilities/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.first = first;
      exports.second = second;
      exports.third = third;
      exports.fourth = fourth;
      exports.fifth = fifth;
      exports.fifthLast = fifthLast;
      exports.fourthLast = fourthLast;
      exports.thirdLast = thirdLast;
      exports.secondLast = secondLast;
      exports.last = last;
      exports.head = head;
      exports.tail = tail;
      exports.push = push;
      exports.unshift = unshift;
      exports.concat = concat;
      exports.clear = clear;
      exports.copy = copy;
      exports.merge = merge;
      exports.splice = splice;
      exports.replace = replace;
      exports.filter = filter;
      exports.find = find;
      exports.prune = prune;
      exports.patch = patch;
      exports.augment = augment;
      exports.separate = separate;
      exports.forwardsSome = forwardsSome;
      exports.backwardsSome = backwardsSome;
      exports.forwardsEvery = forwardsEvery;
      exports.backwardsEvery = backwardsEvery;
      exports.forwardsReduce = forwardsReduce;
      exports.backwardsReduce = backwardsReduce;
      exports.forwardsForEach = forwardsForEach;
      exports.backwardsForEach = backwardsForEach;
      exports.default = void 0;
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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
      function last(array) {
        return array[array.length - 1];
      }
      function head(array) {
        return array.slice(0, 1);
      }
      function tail(array) {
        return array.slice(1);
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
      function splice(array1, start, param, param1) {
        var deleteCount = param === void 0 ? Infinity : param, array2 = param1 === void 0 ? [] : param1;
        var args = [
          start,
          deleteCount
        ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
        return deletedItemsArray;
      }
      function replace(array, element, test) {
        var start;
        var found = array.some(function(element1, index) {
          var passed = test(element1, index);
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
      function filter(array, test) {
        var filteredElements = [];
        backwardsForEach(array, function(element, index) {
          var passed = test(element, index);
          if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            filteredElements.unshift(firstDeletedElement);
          }
        });
        return filteredElements;
      }
      function find(array, test) {
        var elements = [];
        forwardsForEach(array, function(element, index) {
          var passed = test(element, index);
          if (passed) {
            elements.push(element);
          }
        });
        return elements;
      }
      function prune(array, test) {
        var prunedElement = void 0;
        array.some(function(element, index) {
          var passed = test(element, index);
          if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            prunedElement = firstDeletedElement;
            return true;
          }
        });
        return prunedElement;
      }
      function patch(array, element, test) {
        var found = array.some(function(element1, index) {
          var passed = test(element1, index);
          if (passed) {
            return true;
          }
        });
        if (found) {
          array.push(element);
        }
        return found;
      }
      function augment(array1, array2, test) {
        array2.forEach(function(element, index) {
          var passed = test(element, index);
          if (passed) {
            array1.push(element);
          }
        });
      }
      function separate(array, array1, array2, test) {
        array.forEach(function(element, index) {
          var passed = test(element, index);
          passed ? array1.push(element) : array2.push(element);
        });
      }
      function forwardsSome(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], result = callback(element, index);
          if (result) {
            return true;
          }
        }
        return false;
      }
      function backwardsSome(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], result = callback(element, index);
          if (result) {
            return true;
          }
        }
        return false;
      }
      function forwardsEvery(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], result = callback(element, index);
          if (!result) {
            return false;
          }
        }
        return true;
      }
      function backwardsEvery(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], result = callback(element, index);
          if (!result) {
            return false;
          }
        }
        return true;
      }
      function forwardsReduce(array, callback, initialValue) {
        var value = initialValue;
        forwardsForEach(array, function(element, index) {
          value = callback(value, element, index);
        });
        return value;
      }
      function backwardsReduce(array, callback, initialValue) {
        var value = initialValue;
        backwardsForEach(array, function(element, index) {
          value = callback(value, element, index);
        });
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
        last,
        head,
        tail,
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
        augment,
        separate,
        forwardsSome,
        backwardsSome,
        forwardsEvery,
        backwardsEvery,
        forwardsReduce,
        backwardsReduce,
        forwardsForEach,
        backwardsForEach
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS({
    "node_modules/necessary/lib/utilities/path.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isPathName = isPathName;
      exports.isPathTopmostName = isPathTopmostName;
      exports.isPathRelativePath = isPathRelativePath;
      exports.isPathAbsolutePath = isPathAbsolutePath;
      exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
      exports.combinePaths = combinePaths;
      exports.concatenatePaths = concatenatePaths;
      exports.bottommostNameFromPath = bottommostNameFromPath;
      exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
      exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
      exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
      exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
      exports.default = void 0;
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
        var lastPathName, firstRelativePathName = (0, _array).first(relativePathNames);
        if (firstRelativePathName === ".") {
          relativePathNames.shift();
        }
        firstRelativePathName = (0, _array).first(relativePathNames);
        lastPathName = (0, _array).last(pathNames);
        while (firstRelativePathName === ".." && lastPathName !== void 0) {
          relativePathNames.shift();
          pathNames.pop();
          firstRelativePathName = (0, _array).first(relativePathNames);
          lastPathName = (0, _array).last(pathNames);
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
          var secondMatch = (0, _array).second(matches);
          bottommostName = secondMatch;
        }
        return bottommostName;
      }
      function topmostDirectoryPathFromPath(path) {
        var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array).second(matches), topmostDirectoryPath = secondMatch;
        return topmostDirectoryPath;
      }
      function topmostDirectoryNameFromPath(path) {
        var topmostDirectoryName = null;
        var matches = path.match(/^([^\/]+)\/.+$/);
        if (matches !== null) {
          var secondMatch = (0, _array).second(matches);
          topmostDirectoryName = secondMatch;
        }
        return topmostDirectoryName;
      }
      function pathWithoutBottommostNameFromPath(path) {
        var pathWithoutBottommostName = null;
        var matches = path.match(/^(.*)\/[^\/]+\/?$/);
        if (matches !== null) {
          var secondMatch = (0, _array).second(matches);
          pathWithoutBottommostName = secondMatch;
        }
        return pathWithoutBottommostName;
      }
      function pathWithoutTopmostDirectoryNameFromPath(path) {
        var pathWithoutTopmostDirectoryName = null;
        var matches = path.match(/^[^\/]+\/(.+)$/);
        if (matches !== null) {
          var secondMatch = (0, _array).second(matches);
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
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS({
    "node_modules/necessary/lib/utilities/http.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.overwrite = overwrite;
      exports.underwrite = underwrite;
      exports.portFromHost = portFromHost;
      exports.secureFromHost = secureFromHost;
      exports.hostnameFromHost = hostnameFromHost;
      exports.queryStringFromParameters = queryStringFromParameters;
      exports.urlFromHostURIAndParameters = urlFromHostURIAndParameters;
      exports.default = void 0;
      var _array = require_array();
      var _constants = require_constants2();
      function overwrite(headers, name, value) {
        var ownPropertyNames = Object.getOwnPropertyNames(headers), lowerCaseName = name.toLowerCase(), overwritten = ownPropertyNames.some(function(ownPropertyName) {
          var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
          if (lowerCaseOwnPropertyName === lowerCaseName) {
            headers[ownPropertyName] = value;
            return true;
          }
        });
        if (!overwritten) {
          headers[name] = value;
        }
      }
      function underwrite(headers, name, value) {
        var ownPropertyNames = Object.getOwnPropertyNames(headers), lowercaseName = name.toLowerCase(), lowerCaseOwnPropertyNames = ownPropertyNames.map(function(ownPropertyName) {
          var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
          return lowerCaseOwnPropertyName;
        }), lowerCaseOwnPropertyNamesIncludesLowercaseName = lowerCaseOwnPropertyNames.includes(lowercaseName);
        if (!lowerCaseOwnPropertyNamesIncludesLowercaseName) {
          headers[name] = value;
        }
      }
      function portFromHost(host) {
        var port;
        var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_constants.COLON_CHARACTER);
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
        var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array).second(matches), hostname = secondMatch;
        return hostname;
      }
      function queryStringFromParameters(parameters) {
        var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString1, name, index) {
          var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _constants.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
          queryString1 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
          return queryString1;
        }, _constants.EMPTY_STRING);
        return queryString;
      }
      function urlFromHostURIAndParameters(host, uri, parameters) {
        var queryString = queryStringFromParameters(parameters), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
        return url;
      }
      var _default = {
        overwrite,
        underwrite,
        portFromHost,
        secureFromHost,
        hostnameFromHost,
        queryStringFromParameters,
        urlFromHostURIAndParameters
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS({
    "node_modules/necessary/lib/utilities/asynchronous.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.whilst = whilst;
      exports.forEach = forEach;
      exports.sequence = sequence;
      exports.eventually = eventually;
      exports.repeatedly = repeatedly;
      exports.forwardsForEach = forwardsForEach;
      exports.backwardsForEach = backwardsForEach;
      exports.default = void 0;
      function whilst(callback, done, context) {
        var count = -1;
        function next() {
          count++;
          var index = count, terminate = callback(next, done, context, index);
          if (terminate) {
            done();
          }
        }
        next();
      }
      function forEach(array, callback, done, context) {
        var length = array.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            callback(element, next, done, context, index);
          }
        }
        next();
      }
      function sequence(callbacks, done, context) {
        var length = callbacks.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, callback = callbacks[index];
            callback(next, done, context, index);
          }
        }
        next();
      }
      function eventually(callbacks, done, context) {
        var next = function next2() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          }
        };
        var length = callbacks.length;
        var count = 0;
        callbacks.forEach(function(callback, index) {
          callback(next, done, context, index);
        });
      }
      function repeatedly(callback, length, done, context) {
        var next = function next2() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          }
        };
        var count = 0;
        for (var index = 0; index < length; index++) {
          callback(next, done, context, index);
        }
      }
      function forwardsForEach(array, callback, done, context) {
        var length = array.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            callback(element, next, done, context, index);
          }
        }
        next();
      }
      function backwardsForEach(array, callback, done, context) {
        var length = array.length;
        var count = length;
        function next() {
          count--;
          var terminate = count === -1;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            callback(element, next, done, context, index);
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
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS({
    "node_modules/necessary/lib/utilities/ajax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.get = get;
      exports.post = post;
      exports.request = request;
      exports.default = void 0;
      var _http = require_http();
      var _constants = require_constants2();
      function get(host, uri, parameters, headers, callback) {
        if (callback === void 0) {
          callback = headers;
          headers = {};
        }
        var method = _constants.GET, body = null;
        underwriteAccept(headers);
        request(host, uri, parameters, method, body, headers, callback);
      }
      function post(host, uri, parameters, body, headers, callback) {
        if (callback === void 0) {
          callback = headers;
          headers = {};
        }
        var method = _constants.POST;
        underwriteAccept(headers);
        underwriteContentType(headers);
        request(host, uri, parameters, method, body, headers, callback);
      }
      function request(host, uri, parameters, method, body, headers, callback) {
        var url = (0, _http).urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
        if (contentType === _constants.APPLICATION_JSON) {
          var json = body, jsonString = JSON.stringify(json);
          body = jsonString;
        }
        xmlHttpRequest.onreadystatechange = function() {
          var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText;
          if (readyState == 4) {
            var body1 = responseText;
            if (accept === _constants.APPLICATION_JSON) {
              try {
                var jsonString2 = body1, json2 = JSON.parse(jsonString2);
                body1 = json2;
              } catch (error) {
                body1 = null;
              }
              callback(body1, status);
            }
          }
        };
        xmlHttpRequest.open(method, url);
        if (accept !== null) {
          xmlHttpRequest.setRequestHeader(_constants.ACCEPT, accept);
        }
        if (contentType !== null) {
          xmlHttpRequest.setRequestHeader(_constants.CONTENT_TYPE, contentType);
        }
        body !== null ? xmlHttpRequest.send(body) : xmlHttpRequest.send();
      }
      var _default = {
        get,
        post,
        request
      };
      exports.default = _default;
      function underwriteAccept(headers) {
        var name = _constants.ACCEPT, value = _constants.APPLICATION_JSON;
        (0, _http).underwrite(headers, name, value);
      }
      function underwriteContentType(headers) {
        var name = _constants.CONTENT_TYPE, value = _constants.APPLICATION_JSON;
        (0, _http).underwrite(headers, name, value);
      }
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/necessary/lib/browser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _path = _interopRequireDefault2(require_path());
      var _http = _interopRequireDefault2(require_http());
      var _array = _interopRequireDefault2(require_array());
      var _asynchronous = _interopRequireDefault2(require_asynchronous());
      var _ajax = _interopRequireDefault2(require_ajax());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      Object.defineProperty(exports, "pathUtilities", {
        enumerable: true,
        get: function() {
          return _path.default;
        }
      });
      Object.defineProperty(exports, "httpUtilities", {
        enumerable: true,
        get: function() {
          return _http.default;
        }
      });
      Object.defineProperty(exports, "arrayUtilities", {
        enumerable: true,
        get: function() {
          return _array.default;
        }
      });
      Object.defineProperty(exports, "asynchronousUtilities", {
        enumerable: true,
        get: function() {
          return _asynchronous.default;
        }
      });
      Object.defineProperty(exports, "ajaxUtilities", {
        enumerable: true,
        get: function() {
          return _ajax.default;
        }
      });
    }
  });

  // lib/utilities/array.js
  var require_array2 = __commonJS({
    "lib/utilities/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.add = add;
      exports.permute = permute;
      exports.flatten = flatten;
      exports.guarantee = guarantee;
      exports.third = exports.second = exports.push = exports.separate = exports.first = exports.merge = exports.fourth = void 0;
      var _necessary = require_browser();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var first = _necessary.arrayUtilities.first;
      var second = _necessary.arrayUtilities.second;
      var third = _necessary.arrayUtilities.third;
      var fourth = _necessary.arrayUtilities.fourth;
      var push = _necessary.arrayUtilities.push;
      var merge = _necessary.arrayUtilities.merge;
      var separate = _necessary.arrayUtilities.separate;
      exports.first = first;
      exports.second = second;
      exports.third = third;
      exports.fourth = fourth;
      exports.push = push;
      exports.merge = merge;
      exports.separate = separate;
      function add(array, element) {
        array.push(element);
      }
      function permute(array, places) {
        var length = array.length, cut = length - places, leadingElements = array.slice(0, cut), trailingElements = array.slice(cut);
        array = _toConsumableArray(trailingElements).concat(_toConsumableArray(leadingElements));
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

  // lib/utilities/matrix.js
  var require_matrix2 = __commonJS({
    "lib/utilities/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.scaleMatrixFromScale = scaleMatrixFromScale;
      exports.offsetsMatrixFromOffsets = offsetsMatrixFromOffsets;
      exports.positionMatrixFromNothing = positionMatrixFromNothing;
      exports.positionMatrixFromDistance = positionMatrixFromDistance;
      exports.positionMatrixFromPosition = positionMatrixFromPosition;
      exports.rotationsMatrixFromAngles = rotationsMatrixFromAngles;
      exports.rotationsMatrixFromRotations = rotationsMatrixFromRotations;
      exports.normalsMatrixFromRotationsMatrix = normalsMatrixFromRotationsMatrix;
      exports.projectionMatrixFromCameraAndCanvas = projectionMatrixFromCameraAndCanvas;
      var _vector = require_vector();
      var _array = require_array2();
      var _constants = require_constants();
      var _matrix = require_matrix();
      function scaleMatrixFromScale(scale) {
        var scaleMatrix = (0, _matrix).identity4();
        scaleMatrix = (0, _matrix).scale4(scaleMatrix, scale);
        return scaleMatrix;
      }
      function offsetsMatrixFromOffsets(offsets) {
        var offsetsMatrix = (0, _matrix).identity4();
        offsetsMatrix = (0, _matrix).translate4(offsetsMatrix, offsets);
        return offsetsMatrix;
      }
      function positionMatrixFromNothing() {
        var positionMatrix = (0, _matrix).identity4();
        return positionMatrix;
      }
      function positionMatrixFromDistance(distance) {
        var positionMatrix = (0, _matrix).identity4();
        var x = 0, y = 0, z = -distance;
        positionMatrix = (0, _matrix).translate4(positionMatrix, [
          x,
          y,
          z
        ]);
        return positionMatrix;
      }
      function positionMatrixFromPosition(position) {
        var positionMatrix = (0, _matrix).identity4();
        positionMatrix = (0, _matrix).translate4(positionMatrix, position);
        return positionMatrix;
      }
      function rotationsMatrixFromAngles(angles, param) {
        var reverseOrder = param === void 0 ? false : param;
        var rotationsMatrix = (0, _matrix).identity4();
        var firstAngle = (0, _array).first(angles), secondAngle = (0, _array).second(angles), thirdAngle = (0, _array).third(angles), xAngle = firstAngle, yAngle = secondAngle, zAngle = thirdAngle, xAxis = [
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
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, zAngle, zAxis);
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, yAngle, yAxis);
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, xAngle, xAxis);
        } else {
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, xAngle, xAxis);
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, yAngle, yAxis);
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, zAngle, zAxis);
        }
        return rotationsMatrix;
      }
      function rotationsMatrixFromRotations(rotations) {
        var scalar = _constants.DEGREES_TO_RADIANS_MULTIPLIER, angles = (0, _vector).scale3(rotations, scalar), rotationsMatrix = rotationsMatrixFromAngles(angles);
        return rotationsMatrix;
      }
      function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
        var normalsMatrix = (0, _matrix).invert4(rotationsMatrix);
        normalsMatrix = (0, _matrix).transpose4(normalsMatrix);
        return normalsMatrix;
      }
      function projectionMatrixFromCameraAndCanvas(camera, canvas) {
        var zFar = camera.getZFar(), zNear = camera.getZNear(), width = canvas.getWidth(), height = canvas.getHeight(), fieldOfView = camera.getFieldOfView(), aspectRatio = width / height, projectionMatrix = (0, _matrix).perspective4(fieldOfView, aspectRatio, zNear, zFar);
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
      exports.composeTransform = composeTransform;
      var _matrix = require_matrix();
      var _vector = require_vector();
      var _matrix1 = require_matrix2();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      function composeTransform(scale, rotations, position) {
        var matrix = null;
        if (scale !== null) {
          var scaleMatrix = (0, _matrix1).scaleMatrixFromScale(scale);
          matrix = matrix === null ? scaleMatrix : (0, _matrix).multiply4(scaleMatrix, matrix);
        }
        if (rotations !== null) {
          var rotationsMatrix = (0, _matrix1).rotationsMatrixFromRotations(rotations);
          matrix = matrix === null ? rotationsMatrix : (0, _matrix).multiply4(rotationsMatrix, matrix);
        }
        if (position !== null) {
          var positionMatrix = (0, _matrix1).positionMatrixFromPosition(position);
          matrix = matrix === null ? positionMatrix : (0, _matrix).multiply4(positionMatrix, matrix);
        }
        var transform = matrix === null ? function(vector) {
          return vector;
        } : function(vector) {
          return (0, _vector).transform4(_toConsumableArray(vector).concat([
            1
          ]), matrix).slice(0, 3);
        };
        return transform;
      }
    }
  });

  // lib/element/canvas.js
  var require_canvas = __commonJS({
    "lib/element/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _vector = require_vector();
      var _transform = require_transform();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
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
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      var _Element;
      var CanvasElement = /* @__PURE__ */ function(Element1) {
        _inherits(CanvasElement2, Element1);
        function CanvasElement2(maskReference, transform, facets, hidden) {
          _classCallCheck(this, CanvasElement2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasElement2).call(this));
          _this.maskReference = maskReference;
          _this.transform = transform;
          _this.facets = facets;
          _this.hidden = hidden;
          return _this;
        }
        _createClass(CanvasElement2, [
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
            key: "isHidden",
            value: function isHidden() {
              return this.hidden;
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
            value: function applyMask(maskReference, masks, marginOfError) {
              var mask = this.findMask(maskReference, masks);
              if (mask !== null) {
                var element = this;
                mask.maskElement(element, marginOfError);
              }
            }
          },
          {
            key: "findMask",
            value: function findMask(maskReference, masks) {
              var mask = masks.find(function(mask1) {
                var reference = mask1.getReference();
                if (reference === maskReference) {
                  return true;
                }
              }) || null;
              return mask;
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              var childElements = this.getChildElements();
              this.facets.forEach(function(facet) {
                return facet.applyTransform(transform);
              });
              childElements.forEach(function(childElement) {
                return childElement.applyTransform(transform);
              });
            }
          },
          {
            key: "createFacets",
            value: function createFacets(hidden, marginOfError) {
              var childElements = this.getChildElements();
              hidden = hidden || this.hidden;
              childElements.forEach(function(childElement) {
                return childElement.createFacets(hidden, marginOfError);
              });
              return hidden;
            }
          },
          {
            key: "amendFacets",
            value: function amendFacets(masks, marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.amendFacets(masks, marginOfError);
              });
              this.applyTransform(this.transform);
              this.applyMask(this.maskReference, masks, marginOfError);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.addFacets(colourRenderer, textureRenderer);
              });
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              var properties = this.getProperties(), childElements = this.getChildElements(), _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations;
              var _position = properties.position, position = _position === void 0 ? null : _position;
              if (position !== null) {
                position = (0, _vector).scale3(position, magnification);
              }
              this.transform = (0, _transform).composeTransform(scale, rotations, position);
              childElements.forEach(function(childElement) {
                return childElement.magnify(magnification);
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
              var _maskReference = properties.maskReference, maskReference = _maskReference === void 0 ? null : _maskReference, _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, transform = null, facets = [], canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
                Class,
                properties,
                maskReference,
                transform,
                facets,
                hidden
              ].concat(_toConsumableArray(remainingArguments)));
              return canvasElement;
            }
          }
        ]);
        return CanvasElement2;
      }(_wrapNativeSuper(_element.default));
      exports.default = CanvasElement;
    }
  });

  // lib/element/canvas/function.js
  var require_function = __commonJS({
    "lib/element/canvas/function.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _canvas = _interopRequireDefault2(require_canvas());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var FunctionCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(FunctionCanvasElement2, CanvasElement);
        function FunctionCanvasElement2() {
          _classCallCheck(this, FunctionCanvasElement2);
          return _possibleConstructorReturn(this, _getPrototypeOf(FunctionCanvasElement2).apply(this, arguments));
        }
        _createClass(FunctionCanvasElement2, null, [
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
      exports.default = FunctionCanvasElement;
    }
  });

  // lib/react.js
  var require_react = __commonJS({
    "lib/react.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _function = _interopRequireDefault2(require_function());
      var _constants = require_constants();
      var _array = require_array2();
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function createElement(firstArgument, properties) {
        for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childElements[_key - 2] = arguments[_key];
        }
        properties = properties || {};
        childElements = (0, _array).flatten(childElements);
        var element = void 0;
        if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          Object.assign(properties, {
            childElements
          });
          element = Class.fromProperties(properties);
        } else if (_typeof(firstArgument) === _constants.FUNCTION) {
          var func = firstArgument, childElements1 = (0, _array).guarantee(func(properties));
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
      exports.default = _default;
      function isSubclassOf(argument, Class) {
        var typeOf = false;
        if (argument.name === Class.name) {
          typeOf = true;
        } else {
          argument = Object.getPrototypeOf(argument);
          if (argument) {
            typeOf = isSubclassOf(argument, Class);
          }
        }
        return typeOf;
      }
    }
  });

  // lib/defaults.js
  var require_defaults = __commonJS({
    "lib/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DEFAULT_INITIAL_POSITION = exports.DEFAULT_DEPTH = exports.DEFAULT_R = exports.DEFAULT_INITIAL_ANGLES = exports.DEFAULT_G = exports.DEFAULT_INITIAL_DISTANCE = exports.DEFAULT_MARGIN_OF_ERROR = exports.DEFAULT_HIDDEN = exports.DEFAULT_HOST = exports.DEFAULT_Z_NEAR = exports.DEFAULT_INITIAL_OFFSETS = exports.DEFAULT_Z_FAR = exports.DEFAULT_A = exports.DEFAULT_DELTA_MULTIPLIER = exports.DEFAULT_B = exports.DEFAULT_FIELD_OF_VIEW = exports.DEFAULT_MAGNIFICATION = void 0;
      var _vector = require_vector();
      var DEFAULT_R = 0;
      exports.DEFAULT_R = DEFAULT_R;
      var DEFAULT_G = 0;
      exports.DEFAULT_G = DEFAULT_G;
      var DEFAULT_B = 0;
      exports.DEFAULT_B = DEFAULT_B;
      var DEFAULT_A = 1;
      exports.DEFAULT_A = DEFAULT_A;
      var DEFAULT_HOST = "";
      exports.DEFAULT_HOST = DEFAULT_HOST;
      var DEFAULT_DEPTH = 1;
      exports.DEFAULT_DEPTH = DEFAULT_DEPTH;
      var DEFAULT_Z_FAR = 1e3;
      exports.DEFAULT_Z_FAR = DEFAULT_Z_FAR;
      var DEFAULT_Z_NEAR = 1;
      exports.DEFAULT_Z_NEAR = DEFAULT_Z_NEAR;
      var DEFAULT_HIDDEN = false;
      exports.DEFAULT_HIDDEN = DEFAULT_HIDDEN;
      var DEFAULT_FIELD_OF_VIEW = 45;
      exports.DEFAULT_FIELD_OF_VIEW = DEFAULT_FIELD_OF_VIEW;
      var DEFAULT_MAGNIFICATION = 1;
      exports.DEFAULT_MAGNIFICATION = DEFAULT_MAGNIFICATION;
      var DEFAULT_INITIAL_ANGLES = (0, _vector).zero2();
      exports.DEFAULT_INITIAL_ANGLES = DEFAULT_INITIAL_ANGLES;
      var DEFAULT_INITIAL_OFFSETS = (0, _vector).zero3();
      exports.DEFAULT_INITIAL_OFFSETS = DEFAULT_INITIAL_OFFSETS;
      var DEFAULT_MARGIN_OF_ERROR = 1e-7;
      exports.DEFAULT_MARGIN_OF_ERROR = DEFAULT_MARGIN_OF_ERROR;
      var DEFAULT_INITIAL_DISTANCE = 5;
      exports.DEFAULT_INITIAL_DISTANCE = DEFAULT_INITIAL_DISTANCE;
      var DEFAULT_INITIAL_POSITION = [
        0,
        0,
        5
      ];
      exports.DEFAULT_INITIAL_POSITION = DEFAULT_INITIAL_POSITION;
      var DEFAULT_DELTA_MULTIPLIER = 1;
      exports.DEFAULT_DELTA_MULTIPLIER = DEFAULT_DELTA_MULTIPLIER;
    }
  });

  // lib/mixins/depth.js
  var require_depth = __commonJS({
    "lib/mixins/depth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _defaults = require_defaults();
      function clearDepth(param) {
        var depth = param === void 0 ? _defaults.DEFAULT_DEPTH : param;
        this.context.clearDepth(depth);
      }
      function clearDepthBuffer() {
        var _context = this.context, DEPTH_BUFFER_BIT = _context.DEPTH_BUFFER_BIT, mask = DEPTH_BUFFER_BIT;
        this.context.clear(mask);
      }
      function enableDepthTesting() {
        var _context = this.context, DEPTH_TEST = _context.DEPTH_TEST, LEQUAL = _context.LEQUAL, capacity = DEPTH_TEST, depthComparisonFunction = LEQUAL;
        this.context.enable(capacity);
        this.context.depthFunc(depthComparisonFunction);
      }
      var depthMixins = {
        clearDepth,
        clearDepthBuffer,
        enableDepthTesting
      };
      var _default = depthMixins;
      exports.default = _default;
    }
  });

  // lib/errors.js
  var require_errors = __commonJS({
    "lib/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WEB_GL_CONTEXT_ERROR = exports.SHADER_ERROR = void 0;
      var SHADER_ERROR = "Unable to create the shader.";
      exports.SHADER_ERROR = SHADER_ERROR;
      var WEB_GL_CONTEXT_ERROR = "Unable to get the WebGL context.";
      exports.WEB_GL_CONTEXT_ERROR = WEB_GL_CONTEXT_ERROR;
    }
  });

  // lib/mixins/shader.js
  var require_shader = __commonJS({
    "lib/mixins/shader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _errors = require_errors();
      function createShader(type, shaderSource) {
        var _context = this.context, COMPILE_STATUS = _context.COMPILE_STATUS, pname = COMPILE_STATUS, shader = this.context.createShader(type);
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);
        var compileStatus = this.context.getShaderParameter(shader, pname);
        if (!compileStatus) {
          throw new Error(_errors.SHADER_ERROR);
        }
        return shader;
      }
      function createVertexShader(vertexShaderSource, canvas) {
        var _context = this.context, VERTEX_SHADER = _context.VERTEX_SHADER, type = VERTEX_SHADER, vertexShader = this.createShader(type, vertexShaderSource);
        return vertexShader;
      }
      function createFragmentShader(fragmentShaderSource, canvas) {
        var _context = this.context, FRAGMENT_SHADER = _context.FRAGMENT_SHADER, type = FRAGMENT_SHADER, fragmentShader = this.createShader(type, fragmentShaderSource);
        return fragmentShader;
      }
      var shaderMixins = {
        createShader,
        createVertexShader,
        createFragmentShader
      };
      var _default = shaderMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/buffer.js
  var require_buffer = __commonJS({
    "lib/mixins/buffer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function createElementBuffer(data) {
        var _context = this.context, ELEMENT_ARRAY_BUFFER = _context.ELEMENT_ARRAY_BUFFER, STATIC_DRAW = _context.STATIC_DRAW, target = ELEMENT_ARRAY_BUFFER, usage = STATIC_DRAW, uint16Array = new Uint16Array(data), elementBuffer = this.context.createBuffer();
        this.context.bindBuffer(target, elementBuffer);
        this.context.bufferData(target, uint16Array, usage);
        return elementBuffer;
      }
      function bindElementBuffer(elementBuffer) {
        var _context = this.context, ELEMENT_ARRAY_BUFFER = _context.ELEMENT_ARRAY_BUFFER, target = ELEMENT_ARRAY_BUFFER;
        this.context.bindBuffer(target, elementBuffer);
      }
      function createBuffer(data) {
        var _context = this.context, ARRAY_BUFFER = _context.ARRAY_BUFFER, STATIC_DRAW = _context.STATIC_DRAW, target = ARRAY_BUFFER, usage = STATIC_DRAW, buffer = this.context.createBuffer(), float32Array = new Float32Array(data);
        this.context.bindBuffer(target, buffer);
        this.context.bufferData(target, float32Array, usage);
        return buffer;
      }
      function bindBuffer(buffer, attributeLocation, components) {
        var _context = this.context, ARRAY_BUFFER = _context.ARRAY_BUFFER, FLOAT = _context.FLOAT, target = ARRAY_BUFFER, type = FLOAT, normalize = false, stride = 0, offset = 0;
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
      exports.default = _default;
    }
  });

  // lib/mixins/colour.js
  var require_colour = __commonJS({
    "lib/mixins/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _defaults = require_defaults();
      function clearColour(param, param1, param2, param3) {
        var r = param === void 0 ? _defaults.DEFAULT_R : param, g = param1 === void 0 ? _defaults.DEFAULT_G : param1, b = param2 === void 0 ? _defaults.DEFAULT_B : param2, a = param3 === void 0 ? _defaults.DEFAULT_A : param3;
        this.context.clearColor(r, g, b, a);
      }
      function clearColourBuffer() {
        var _context = this.context, COLOR_BUFFER_BIT = _context.COLOR_BUFFER_BIT, mask = COLOR_BUFFER_BIT;
        this.context.clear(mask);
      }
      var colourMixins = {
        clearColour,
        clearColourBuffer
      };
      var _default = colourMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/matrix.js
  var require_matrix3 = __commonJS({
    "lib/mixins/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function applyMatrix(uniformLocation, matrix) {
        var transpose = false;
        this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
      }
      var matrixMixins = {
        applyMatrix
      };
      var _default = matrixMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/texture.js
  var require_texture = __commonJS({
    "lib/mixins/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _constants = require_constants();
      function createTexture(image, index, repeat) {
        var _context = this.context, RGBA = _context.RGBA, LINEAR = _context.LINEAR, UNSIGNED_BYTE = _context.UNSIGNED_BYTE, TEXTURE0 = _context.TEXTURE0, TEXTURE_2D = _context.TEXTURE_2D, TEXTURE_WRAP_S = _context.TEXTURE_WRAP_S, TEXTURE_WRAP_T = _context.TEXTURE_WRAP_T, UNPACK_FLIP_Y_WEBGL = _context.UNPACK_FLIP_Y_WEBGL, CLAMP_TO_EDGE = _context.CLAMP_TO_EDGE, NEAREST = _context.NEAREST, REPEAT = _context.REPEAT, TEXTURE_MIN_FILTER = _context.TEXTURE_MIN_FILTER, target = TEXTURE0 + index, level = 0, internalFormat = RGBA, format = RGBA, type = UNSIGNED_BYTE, texture = this.context.createTexture();
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
          var _context = this.context, TEXTURE_2D = _context.TEXTURE_2D, MAX_TEXTURE_MAX_ANISOTROPY_EXT = extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY_EXT = extension.TEXTURE_MAX_ANISOTROPY_EXT, maximum = this.context.getParameter(MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          this.context.texParameterf(TEXTURE_2D, TEXTURE_MAX_ANISOTROPY_EXT, maximum);
        }
      }
      var textureMixins = {
        createTexture,
        enableAnisotropicFiltering
      };
      var _default = textureMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/program.js
  var require_program = __commonJS({
    "lib/mixins/program.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
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
      exports.default = _default;
    }
  });

  // lib/mixins/blending.js
  var require_blending = __commonJS({
    "lib/mixins/blending.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function enableBlending() {
        var _context = this.context, BLEND = _context.BLEND, SRC_ALPHA = _context.SRC_ALPHA, ONE = _context.ONE, capacity = BLEND, sourceFactor = SRC_ALPHA, destinationFactor = ONE;
        this.context.enable(capacity);
        this.context.blendFunc(sourceFactor, destinationFactor);
      }
      var blendingMixins = {
        enableBlending
      };
      var _default = blendingMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/location.js
  var require_location = __commonJS({
    "lib/mixins/location.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
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
      exports.default = _default;
    }
  });

  // lib/canvas.js
  var require_canvas2 = __commonJS({
    "lib/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _depth = _interopRequireDefault2(require_depth());
      var _shader = _interopRequireDefault2(require_shader());
      var _buffer = _interopRequireDefault2(require_buffer());
      var _colour = _interopRequireDefault2(require_colour());
      var _matrix = _interopRequireDefault2(require_matrix3());
      var _texture = _interopRequireDefault2(require_texture());
      var _program = _interopRequireDefault2(require_program());
      var _blending = _interopRequireDefault2(require_blending());
      var _location = _interopRequireDefault2(require_location());
      var _errors = require_errors();
      var _constants = require_constants();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Canvas = /* @__PURE__ */ function() {
        function Canvas2(param) {
          var selector = param === void 0 ? _constants.CANVAS : param;
          _classCallCheck(this, Canvas2);
          var domElement = domElementFromSelector(selector), context = contextFromDOMElement(domElement);
          this.domElement = domElement;
          this.context = context;
          this.enableDepthTesting();
        }
        _createClass(Canvas2, [
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
              var _context = this.context, TRIANGLES = _context.TRIANGLES, UNSIGNED_SHORT = _context.UNSIGNED_SHORT, mode = TRIANGLES, type = UNSIGNED_SHORT, count = finish - start, offset = start * 2;
              this.context.drawElements(mode, count, type, offset);
            }
          }
        ]);
        return Canvas2;
      }();
      exports.default = Canvas;
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
        var domElement = typeof selector === "string" ? document.querySelectorAll(selector)[0] : selector;
        return domElement;
      }
      function contextFromDOMElement(domElement) {
        var context = domElement.getContext("webgl");
        if (!context) {
          throw new Error(_errors.WEB_GL_CONTEXT_ERROR);
        }
        return context;
      }
    }
  });

  // lib/primitive/edge.js
  var require_edge = __commonJS({
    "lib/primitive/edge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _vector = require_vector();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Edge = /* @__PURE__ */ function() {
        function Edge2(position, extent) {
          _classCallCheck(this, Edge2);
          this.position = position;
          this.extent = extent;
        }
        _createClass(Edge2, [
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
              var startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = (0, _vector).subtract3(endPosition, startPosition), edge = new Class(position, extent);
              return edge;
            }
          }
        ]);
        return Edge2;
      }();
      exports.default = Edge;
    }
  });

  // lib/utilities/midPoint.js
  var require_midPoint = __commonJS({
    "lib/utilities/midPoint.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateMidPointPosition = calculateMidPointPosition;
      exports.projectMidPointPositionOntoXYPlane = projectMidPointPositionOntoXYPlane;
      exports.isMidPointPositionToOneSideOfMaskingEdges = isMidPointPositionToOneSideOfMaskingEdges;
      var _vector = require_vector();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      function calculateMidPointPosition(vertices) {
        var midPointPosition = vertices.reduce(function(midPointPosition1, vertex) {
          var vertexPosition = vertex.getPosition(), scaledVertexPosition = (0, _vector).scale3(vertexPosition, 1 / 3);
          midPointPosition1 = (0, _vector).add3(midPointPosition1, scaledVertexPosition);
          return midPointPosition1;
        }, [
          0,
          0,
          0
        ]);
        return midPointPosition;
      }
      function projectMidPointPositionOntoXYPlane(midPointPosition) {
        midPointPosition = _toConsumableArray(midPointPosition.slice(0, 2)).concat([
          0
        ]);
        return midPointPosition;
      }
      function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges;
        return midPointPositionToOneSideOfMaskingEdges;
      }
      function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheLeftOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheLeftOfMaskingEdges1, maskingEdge) {
          if (midPointPositionToTheLeftOfMaskingEdges1) {
            var midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);
            midPointPositionToTheLeftOfMaskingEdges1 = midPointPositionToTheLeftOfMaskingEdge;
          }
          return midPointPositionToTheLeftOfMaskingEdges1;
        }, true);
        return midPointPositionToTheLeftOfMaskingEdges;
      }
      function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheRightOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheRightOfMaskingEdges1, maskingEdge) {
          if (midPointPositionToTheRightOfMaskingEdges1) {
            var midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);
            midPointPositionToTheRightOfMaskingEdges1 = midPointPositionToTheRightOfMaskingEdge;
          }
          return midPointPositionToTheRightOfMaskingEdges1;
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
      exports.default = void 0;
      var _edge = _interopRequireDefault2(require_edge());
      var _array = require_array2();
      var _vector = require_vector();
      var _midPoint = require_midPoint();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var MaskingEdge = /* @__PURE__ */ function(Edge) {
        _inherits(MaskingEdge2, Edge);
        function MaskingEdge2() {
          _classCallCheck(this, MaskingEdge2);
          return _possibleConstructorReturn(this, _getPrototypeOf(MaskingEdge2).apply(this, arguments));
        }
        _createClass(MaskingEdge2, [
          {
            key: "isMidPointPositionToTheLeft",
            value: function isMidPointPositionToTheLeft(midPointPosition) {
              midPointPosition = (0, _midPoint).projectMidPointPositionOntoXYPlane(midPointPosition);
              var extent = this.getExtent(), position = this.getPosition(), midPointRelativePosition = (0, _vector).subtract3(midPointPosition, position), crossProductComponents = (0, _vector).cross3(extent, midPointRelativePosition), thirdCrossProductComponent = (0, _array).third(crossProductComponents), midPointPositionToTheLeft = thirdCrossProductComponent > 0;
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
      exports.default = MaskingEdge;
    }
  });

  // lib/utilities/approximate.js
  var require_approximate = __commonJS({
    "lib/utilities/approximate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isApproximatelyEqualToOne = isApproximatelyEqualToOne;
      exports.isApproximatelyEqualToZero = isApproximatelyEqualToZero;
      var _defaults = require_defaults();
      function isApproximatelyEqualToOne(value, param) {
        var marginOfError = param === void 0 ? _defaults.DEFAULT_MARGIN_OF_ERROR : param;
        return isApproximatelyEqualTo(value, 1, marginOfError);
      }
      function isApproximatelyEqualToZero(value, param) {
        var marginOfError = param === void 0 ? _defaults.DEFAULT_MARGIN_OF_ERROR : param;
        return isApproximatelyEqualTo(value, 0, marginOfError);
      }
      function isApproximatelyEqualTo(valueA, valueB, param) {
        var marginOfError = param === void 0 ? _defaults.DEFAULT_MARGIN_OF_ERROR : param;
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
      exports.calculateHalfAngleSine = calculateHalfAngleSine;
      exports.calculateHalfAngleCosine = calculateHalfAngleCosine;
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
      exports.rotateImaginaryQuaternion = rotateImaginaryQuaternion;
      exports.calculateInverseRotationQuaternion = calculateInverseRotationQuaternion;
      exports.calculateForwardsRotationQuaternion = calculateForwardsRotationQuaternion;
      exports.calculateBackwardsRotationQuaternion = calculateBackwardsRotationQuaternion;
      exports.calculateArbitraryRotationQuaternion = calculateArbitraryRotationQuaternion;
      exports.calculateRotationAboutZAxisQuaternion = calculateRotationAboutZAxisQuaternion;
      var _vector = require_vector();
      var _approximate = require_approximate();
      var _array = require_array2();
      var _angle = require_angle();
      function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
        return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);
      }
      function calculateInverseRotationQuaternion(rotationQuaternion) {
        var rotationQuaternionComponents = rotationQuaternion, firstRotationQuaternionComponent = (0, _array).first(rotationQuaternionComponents), secondRotationQuaternionComponent = (0, _array).second(rotationQuaternionComponents), thirdRotationQuaternionComponent = (0, _array).third(rotationQuaternionComponents), fourthRotationQuaternionComponent = (0, _array).fourth(rotationQuaternionComponents), inverseRotationQuaternion = [
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
        ], dotProductOfUnitNormalAndZAxis = (0, _vector).dot3(unitNormal, zAxis), crossProductOfUnitNormalAndZAxis = (0, _vector).cross3(unitNormal, zAxis), angleOfRotationCosine = dotProductOfUnitNormalAndZAxis, angleOfRotationCosineAbsoluteValue = Math.abs(angleOfRotationCosine), angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne = (0, _approximate).isApproximatelyEqualToOne(angleOfRotationCosineAbsoluteValue), axisOfRotation = angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne ? [
          1,
          0,
          0
        ] : crossProductOfUnitNormalAndZAxis, unitAxisOfRotation = (0, _vector).normalise3(axisOfRotation), halfAngleOfRotationCosine = (0, _angle).calculateHalfAngleCosine(angleOfRotationCosine), halfAngleOfRotationSine = (0, _angle).calculateHalfAngleSine(angleOfRotationCosine), unitAxisOfRotationComponents = unitAxisOfRotation, firstAxisOfRotationComponent = (0, _array).first(unitAxisOfRotationComponents), secondAxisOfRotationComponent = (0, _array).second(unitAxisOfRotationComponents), thirdAxisOfRotationComponent = (0, _array).third(unitAxisOfRotationComponents), arbitraryRotationQuaternion = [
          halfAngleOfRotationCosine,
          firstAxisOfRotationComponent * halfAngleOfRotationSine,
          secondAxisOfRotationComponent * halfAngleOfRotationSine,
          thirdAxisOfRotationComponent * halfAngleOfRotationSine
        ];
        return arbitraryRotationQuaternion;
      }
      function calculateRotationAboutZAxisQuaternion(maskingEdge) {
        var maskingEdgeExtent = maskingEdge.getExtent(), unitMaskingEdgeExtent = (0, _vector).normalise3(maskingEdgeExtent), unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent, firstUnitMaskingEdgeExtentComponent = (0, _array).first(unitMaskingEdgeExtentComponents), secondUnitMaskingEdgeExtentComponent = (0, _array).second(unitMaskingEdgeExtentComponents), angleOfRotationSine = firstUnitMaskingEdgeExtentComponent, angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent, halfAngleOfRotationCosine = (0, _angle).calculateHalfAngleCosine(angleOfRotationCosine), halfAngleOfRotationSine = angleOfRotationSine > 0 ? +(0, _angle).calculateHalfAngleSine(angleOfRotationCosine) : -(0, _angle).calculateHalfAngleSine(angleOfRotationCosine), rotationAboutZAxisQuaternion = [
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
      exports.rotatePosition = rotatePosition;
      var _quaternion = require_quaternion();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      function rotatePosition(position, rotationQuaternion) {
        var imaginaryQuaternion = imaginaryQuaternionFromPosition(position), inverseRotationQuaternion = (0, _quaternion).calculateInverseRotationQuaternion(rotationQuaternion), rotatedImaginaryQuaternion = (0, _quaternion).rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
        position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);
        return position;
      }
      function imaginaryQuaternionFromPosition(position) {
        return [
          0
        ].concat(_toConsumableArray(position));
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
      exports.calculateIntersection = calculateIntersection;
      exports.calculateNonNullIntersections = calculateNonNullIntersections;
      exports.calculateNullIntersectionIndex = calculateNullIntersectionIndex;
      exports.calculateNonNullIntersectionIndex = calculateNonNullIntersectionIndex;
      exports.calculateIntermediateVertexPosition = calculateIntermediateVertexPosition;
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
        var nonNullIntersections = intersections.reduce(function(nonNullIntersections1, intersection) {
          if (intersection !== null) {
            var nonNullIntersection = intersection;
            nonNullIntersections1.push(nonNullIntersection);
          }
          return nonNullIntersections1;
        }, []);
        return nonNullIntersections;
      }
      function calculateNullIntersectionIndex(intersections) {
        var nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex1, intersection, index) {
          if (nullIntersectionIndex1 === null) {
            if (intersection === null) {
              nullIntersectionIndex1 = index;
            }
          }
          return nullIntersectionIndex1;
        }, null);
        return nullIntersectionIndex;
      }
      function calculateNonNullIntersectionIndex(intersections) {
        var nullIntersectionIndex = intersections.reduce(function(nullIntersectionIndex1, intersection, index) {
          if (nullIntersectionIndex1 === null) {
            if (intersection !== null) {
              nullIntersectionIndex1 = index;
            }
          }
          return nullIntersectionIndex1;
        }, null);
        return nullIntersectionIndex;
      }
      function calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection) {
        var extent = (0, _vector).subtract3(endVertexPosition, startVertexPosition), offset = (0, _vector).scale3(extent, intersection), intermediateVertexPosition = (0, _vector).add3(startVertexPosition, offset);
        return intermediateVertexPosition;
      }
      function isEdgeNonParallel(edge) {
        var edgeExtent = edge.getExtent(), edgeExtentComponents = edgeExtent, firstEdgeExtentComponent = (0, _array).first(edgeExtentComponents), secondEdgeExtentComponent = (0, _array).second(edgeExtentComponents), edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent, edgeAngleTangentApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(edgeAngleTangent), edgeParallel = edgeAngleTangentApproximatelyEqualToZero, edgeNonParallel = !edgeParallel;
        return edgeNonParallel;
      }
      function calculateEdgeIntersection(edge, firstPositionComponent) {
        var edgeExtent = edge.getExtent(), edgePosition = edge.getPosition(), edgeExtentComponents = edgeExtent, edgePositionComponents = edgePosition, firstEdgeExtentComponent = (0, _array).first(edgeExtentComponents), firstEdgePositionComponent = (0, _array).first(edgePositionComponents), edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
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
      exports.default = void 0;
      var _array = require_array2();
      var _rotation = require_rotation();
      var _intersection = require_intersection();
      var _quaternion = require_quaternion();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var VerticalLine = /* @__PURE__ */ function() {
        function VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
          _classCallCheck(this, VerticalLine2);
          this.firstPositionComponent = firstPositionComponent;
          this.forwardsRotationQuaternion = forwardsRotationQuaternion;
          this.backwardsRotationQuaternion = backwardsRotationQuaternion;
        }
        _createClass(VerticalLine2, [
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
              var edges = facet.getEdges(), intersections = edges.map(function(edge) {
                var intersection = (0, _intersection).calculateIntersection(edge, this.firstPositionComponent);
                return intersection;
              }.bind(this));
              facet.splitWithIntersections(intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitFacets",
            value: function splitFacets(facets, marginOfError) {
              var smallerFacets = [];
              facets.forEach(function(facet) {
                facet.rotate(this.forwardsRotationQuaternion);
                this.splitFacet(facet, smallerFacets, marginOfError);
              }.bind(this));
              smallerFacets.forEach(function(smallerFacet) {
                return smallerFacet.rotate(this.backwardsRotationQuaternion);
              }.bind(this));
              return smallerFacets;
            }
          }
        ], [
          {
            key: "fromMaskingEdge",
            value: function fromMaskingEdge(maskingEdge) {
              var maskingEdgePosition = maskingEdge.getPosition(), rotationAboutZAxisQuaternion = (0, _quaternion).calculateRotationAboutZAxisQuaternion(maskingEdge), rotationQuaternion = rotationAboutZAxisQuaternion, forwardsRotationQuaternion = (0, _quaternion).calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion).calculateBackwardsRotationQuaternion(rotationQuaternion), position = (0, _rotation).rotatePosition(maskingEdgePosition, rotationQuaternion), positionComponents = position, firstPositionComponent = (0, _array).first(positionComponents), verticalLine = new VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
              return verticalLine;
            }
          }
        ]);
        return VerticalLine2;
      }();
      exports.default = VerticalLine;
    }
  });

  // lib/utilities/vertices.js
  var require_vertices = __commonJS({
    "lib/utilities/vertices.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.rotateVertices = rotateVertices;
      exports.verticesFromCoordinateTuplesAndIndexTuple = verticesFromCoordinateTuplesAndIndexTuple;
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
      exports.default = void 0;
      var _masking2 = _interopRequireDefault2(require_masking());
      var _verticalLine = _interopRequireDefault2(require_verticalLine());
      var _vertices = require_vertices();
      var _array = require_array2();
      var _constants = require_constants();
      var _quaternion = require_quaternion();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var MaskingFacet = /* @__PURE__ */ function() {
        function MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
          _classCallCheck(this, MaskingFacet2);
          this.maskingEdges = maskingEdges;
          this.verticalLines = verticalLines;
          this.forwardsRotationQuaternion = forwardsRotationQuaternion;
          this.backwardsRotationQuaternion = backwardsRotationQuaternion;
        }
        _createClass(MaskingFacet2, [
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
              var unmaskedFacet = facet.clone();
              facet.rotate(this.forwardsRotationQuaternion);
              var maskingFacet = this, smallerFacets = this.splitFacet(facet, marginOfError), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
              (0, _array).separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
                var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
                return smallerFacetMasked;
              });
              var maskedSmallerFacetsLength = maskedSmallerFacets.length;
              if (maskedSmallerFacetsLength === 0) {
                unmaskedFacets.push(unmaskedFacet);
              } else {
                unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
                  unmaskedSmallerFacet.rotate(this.backwardsRotationQuaternion);
                }.bind(this));
                (0, _array).push(unmaskedFacets, unmaskedSmallerFacets);
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
              var facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = (0, _quaternion).calculateArbitraryRotationQuaternion(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = (0, _vertices).rotateVertices(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map(function(maskingEdge) {
                var verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
                return verticalLine;
              }), forwardsRotationQuaternion = (0, _quaternion).calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion).calculateBackwardsRotationQuaternion(rotationQuaternion), maskingFacet = new MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
              return maskingFacet;
            }
          }
        ]);
        return MaskingFacet2;
      }();
      exports.default = MaskingFacet;
      function calculateMaskingEdges(vertices) {
        var maskingEdges = vertices.map(function(vertex, index) {
          var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], maskingEdge = _masking2.default.fromStartVertexAndEndVertex(startVertex, endVertex);
          return maskingEdge;
        });
        return maskingEdges;
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
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _maskingFacet = _interopRequireDefault2(require_maskingFacet());
      var _array = require_array2();
      var _defaults = require_defaults();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
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
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      var Mask = /* @__PURE__ */ function(Element1) {
        _inherits(Mask2, Element1);
        function Mask2(hidden, reference) {
          _classCallCheck(this, Mask2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Mask2).call(this));
          _this.hidden = hidden;
          _this.reference = reference;
          return _this;
        }
        _createClass(Mask2, [
          {
            key: "getHidden",
            value: function getHidden() {
              return this.hidden;
            }
          },
          {
            key: "getReference",
            value: function getReference() {
              return this.reference;
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
                return maskElement(childElement, maskingFacets, marginOfError);
              });
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.magnify(magnification);
              });
            }
          },
          {
            key: "initialise",
            value: function initialise(masks, marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.createFacets(this.hidden, marginOfError);
              }.bind(this));
              childElements.forEach(function(childElement) {
                return childElement.amendFacets(masks, marginOfError);
              });
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var reference = properties.reference, _hidden = properties.hidden, hidden = _hidden === void 0 ? _defaults.DEFAULT_HIDDEN : _hidden, mask = _element.default.fromProperties(Mask2, properties, hidden, reference);
              return mask;
            }
          }
        ]);
        return Mask2;
      }(_wrapNativeSuper(_element.default));
      exports.default = Mask;
      function retrieveFacets(childElements, param) {
        var facets = param === void 0 ? [] : param;
        childElements.forEach(function(childElement) {
          var element = childElement, elementFacets = element.getFacets(), childElements1 = element.getChildElements();
          (0, _array).push(facets, elementFacets);
          retrieveFacets(childElements1, facets);
        });
        return facets;
      }
      function maskElement(element, maskingFacets, marginOfError) {
        var facets = element.getFacets();
        maskingFacets.forEach(function(maskingFacet) {
          var unmaskedFacets = [];
          facets.forEach(function(facet) {
            return maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
          });
          facets = unmaskedFacets;
        });
        element.setFacets(facets);
        var childElements = element.getChildElements();
        childElements.forEach(function(childElement) {
          var element1 = childElement;
          maskElement(element1, maskingFacets, marginOfError);
        });
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
      exports.createProgram = createProgram;
      exports.default = void 0;
      var _array = require_array2();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var add = _array.push;
      var Renderer = /* @__PURE__ */ function() {
        function Renderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
          _classCallCheck(this, Renderer2);
          this.facets = facets;
          this.program = program;
          this.rendererData = rendererData;
          this.rendererBuffers = rendererBuffers;
          this.uniformLocations = uniformLocations;
          this.attributeLocations = attributeLocations;
        }
        _createClass(Renderer2, [
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
      exports.default = Renderer;
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
      exports.default = void 0;
      var _array = require_array2();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var add = _array.merge;
      var RendererData = /* @__PURE__ */ function() {
        function RendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
          _classCallCheck(this, RendererData2);
          this.vertexPositionsData = vertexPositionsData;
          this.vertexNormalsData = vertexNormalsData;
          this.vertexIndexesData = vertexIndexesData;
        }
        _createClass(RendererData2, [
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
              var vertexPositionsData = (0, _array).flatten(vertexPositions);
              add(this.vertexPositionsData, vertexPositionsData);
            }
          },
          {
            key: "addVertexNormals",
            value: function addVertexNormals(vertexNormals) {
              var vertexNormalsData = (0, _array).flatten(vertexNormals);
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
              ].concat(_toConsumableArray(remainingArguments)));
              return rendererData;
            }
          }
        ]);
        return RendererData2;
      }();
      exports.default = RendererData;
    }
  });

  // lib/renderer/data/colour.js
  var require_colour2 = __commonJS({
    "lib/renderer/data/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _data = _interopRequireDefault2(require_data());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var add = _array.merge;
      var ColourRendererData = /* @__PURE__ */ function(RendererData) {
        _inherits(ColourRendererData2, RendererData);
        function ColourRendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
          _classCallCheck(this, ColourRendererData2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourRendererData2).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData));
          _this.vertexColoursData = vertexColoursData;
          return _this;
        }
        _createClass(ColourRendererData2, [
          {
            key: "getVertexColoursData",
            value: function getVertexColoursData() {
              return this.vertexColoursData;
            }
          },
          {
            key: "addVertexColours",
            value: function addVertexColours(vertexColours) {
              var vertexColoursData = (0, _array).flatten(vertexColours);
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
      exports.default = ColourRendererData;
    }
  });

  // lib/renderer/source/lighting.js
  var require_lighting = __commonJS({
    "lib/renderer/source/lighting.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.normalsMatrixName = exports.vertexNormalAttributeName = void 0;
      var normalsMatrixName = "uNormalsMatrix";
      exports.normalsMatrixName = normalsMatrixName;
      var vertexNormalAttributeName = "aVertexNormal";
      exports.vertexNormalAttributeName = vertexNormalAttributeName;
      var lightingSource = new String("\n  \n        uniform mat4 ".concat(normalsMatrixName, ";\n\n        attribute vec3 ").concat(vertexNormalAttributeName, ";\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ").concat(normalsMatrixName, " * vec4(").concat(vertexNormalAttributeName, ", 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      "));
      var _default = lightingSource;
      exports.default = _default;
    }
  });

  // lib/renderer/source/position.js
  var require_position = __commonJS({
    "lib/renderer/source/position.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.positionMatrixName = exports.default = exports.vertexPositionAttributeName = exports.offsetsMatrixName = exports.rotationsMatrixName = exports.projectionMatrixName = void 0;
      var offsetsMatrixName = "uOffsetsMatrix";
      exports.offsetsMatrixName = offsetsMatrixName;
      var positionMatrixName = "uPositionMatrix";
      exports.positionMatrixName = positionMatrixName;
      var rotationsMatrixName = "uRotationsMatrix";
      exports.rotationsMatrixName = rotationsMatrixName;
      var projectionMatrixName = "uPerspectiveMatrix";
      exports.projectionMatrixName = projectionMatrixName;
      var vertexPositionAttributeName = "aVertexPosition";
      exports.vertexPositionAttributeName = vertexPositionAttributeName;
      var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
      var _default = positionSource;
      exports.default = _default;
    }
  });

  // lib/renderer/source/colour/vertexShader.js
  var require_vertexShader = __commonJS({
    "lib/renderer/source/colour/vertexShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.vertexColourAttributeName = exports.default = void 0;
      var _lighting = _interopRequireDefault2(require_lighting());
      var _position = _interopRequireDefault2(require_position());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var vertexColourAttributeName = "aVertexColour";
      exports.vertexColourAttributeName = vertexColourAttributeName;
      var vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
      var _default = vertexShaderSource;
      exports.default = _default;
    }
  });

  // lib/renderer/source/colour/fragmentShader.js
  var require_fragmentShader = __commonJS({
    "lib/renderer/source/colour/fragmentShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var fragmentShaderSource = new String("\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ");
      var _default = fragmentShaderSource;
      exports.default = _default;
    }
  });

  // lib/renderer/buffers.js
  var require_buffers = __commonJS({
    "lib/renderer/buffers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var vertexNormalComponents = 3;
      var vertexPositionComponents = 3;
      var RendererBuffers = /* @__PURE__ */ function() {
        function RendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
          _classCallCheck(this, RendererBuffers2);
          this.vertexPositionsBuffer = vertexPositionsBuffer;
          this.vertexNormalsBuffer = vertexNormalsBuffer;
          this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
        }
        _createClass(RendererBuffers2, [
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
              ].concat(_toConsumableArray(remainingArguments)));
              return rendererBuffers;
            }
          }
        ]);
        return RendererBuffers2;
      }();
      exports.default = RendererBuffers;
    }
  });

  // lib/renderer/buffers/colour.js
  var require_colour3 = __commonJS({
    "lib/renderer/buffers/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _buffers = _interopRequireDefault2(require_buffers());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
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
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var vertexColourComponents = 4;
      var ColourRendererBuffers = /* @__PURE__ */ function(RendererBuffers) {
        _inherits(ColourRendererBuffers2, RendererBuffers);
        function ColourRendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
          _classCallCheck(this, ColourRendererBuffers2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourRendererBuffers2).call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer));
          _this.vertexColoursBuffer = vertexColoursBuffer;
          return _this;
        }
        _createClass(ColourRendererBuffers2, [
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
              _get(_getPrototypeOf(ColourRendererBuffers2.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
              this.createVertexColoursBuffer(vertexColoursData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
              _get(_getPrototypeOf(ColourRendererBuffers2.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
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
      exports.default = ColourRendererBuffers;
    }
  });

  // lib/renderer/locations/uniform.js
  var require_uniform = __commonJS({
    "lib/renderer/locations/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _lighting = require_lighting();
      var _position = require_position();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var UniformLocations = /* @__PURE__ */ function() {
        function UniformLocations2(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
          _classCallCheck(this, UniformLocations2);
          this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
          this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
          this.positionMatrixUniformLocation = positionMatrixUniformLocation;
          this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
          this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
        }
        _createClass(UniformLocations2, [
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
              ].concat(_toConsumableArray(remainingArguments)));
              return uniformLocations;
            }
          }
        ]);
        return UniformLocations2;
      }();
      exports.default = UniformLocations;
    }
  });

  // lib/renderer/locations/colour/uniform.js
  var require_uniform2 = __commonJS({
    "lib/renderer/locations/colour/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _uniform = _interopRequireDefault2(require_uniform());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var ColourUniformLocations = /* @__PURE__ */ function(UniformLocations) {
        _inherits(ColourUniformLocations2, UniformLocations);
        function ColourUniformLocations2() {
          _classCallCheck(this, ColourUniformLocations2);
          return _possibleConstructorReturn(this, _getPrototypeOf(ColourUniformLocations2).apply(this, arguments));
        }
        _createClass(ColourUniformLocations2, null, [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              return _uniform.default.fromProgram(ColourUniformLocations2, program, canvas);
            }
          }
        ]);
        return ColourUniformLocations2;
      }(_uniform.default);
      exports.default = ColourUniformLocations;
    }
  });

  // lib/renderer/locations/attribute.js
  var require_attribute = __commonJS({
    "lib/renderer/locations/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _lighting = require_lighting();
      var _position = require_position();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var AttributeLocations = /* @__PURE__ */ function() {
        function AttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
          _classCallCheck(this, AttributeLocations2);
          this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
          this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
        }
        _createClass(AttributeLocations2, [
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
              ].concat(_toConsumableArray(remainingArguments)));
              return attributeLocations;
            }
          }
        ]);
        return AttributeLocations2;
      }();
      exports.default = AttributeLocations;
    }
  });

  // lib/renderer/locations/colour/attribute.js
  var require_attribute2 = __commonJS({
    "lib/renderer/locations/colour/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _attribute = _interopRequireDefault2(require_attribute());
      var _vertexShader = require_vertexShader();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var ColourAttributeLocations = /* @__PURE__ */ function(AttributeLocations) {
        _inherits(ColourAttributeLocations2, AttributeLocations);
        function ColourAttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
          _classCallCheck(this, ColourAttributeLocations2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourAttributeLocations2).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));
          _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
          return _this;
        }
        _createClass(ColourAttributeLocations2, [
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
      exports.default = ColourAttributeLocations;
    }
  });

  // lib/renderer/colour.js
  var require_colour4 = __commonJS({
    "lib/renderer/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _renderer = _interopRequireWildcard(require_renderer());
      var _colour = _interopRequireDefault2(require_colour2());
      var _vertexShader = _interopRequireDefault2(require_vertexShader());
      var _fragmentShader = _interopRequireDefault2(require_fragmentShader());
      var _colour1 = _interopRequireDefault2(require_colour3());
      var _uniform = _interopRequireDefault2(require_uniform2());
      var _attribute = _interopRequireDefault2(require_attribute2());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                if (desc.get || desc.set) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var add = _array.push;
      var ColourRenderer = /* @__PURE__ */ function(Renderer) {
        _inherits(ColourRenderer2, Renderer);
        function ColourRenderer2() {
          _classCallCheck(this, ColourRenderer2);
          return _possibleConstructorReturn(this, _getPrototypeOf(ColourRenderer2).apply(this, arguments));
        }
        _createClass(ColourRenderer2, [
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
            value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
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
              var facets = [], program = (0, _renderer).createProgram(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
              return colourRenderer;
            }
          }
        ]);
        return ColourRenderer2;
      }(_renderer.default);
      exports.default = ColourRenderer;
    }
  });

  // lib/renderer/source/texture/vertexShader.js
  var require_vertexShader2 = __commonJS({
    "lib/renderer/source/texture/vertexShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.textureCoordinateAttributeName = void 0;
      var _lighting = _interopRequireDefault2(require_lighting());
      var _position = _interopRequireDefault2(require_position());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var textureCoordinateAttributeName = "aTextureCoordinate";
      exports.textureCoordinateAttributeName = textureCoordinateAttributeName;
      var vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
      var _default = vertexShaderSource;
      exports.default = _default;
    }
  });

  // lib/renderer/data/texture.js
  var require_texture2 = __commonJS({
    "lib/renderer/data/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _data = _interopRequireDefault2(require_data());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var add = _array.merge;
      var TextureRendererData = /* @__PURE__ */ function(RendererData) {
        _inherits(TextureRendererData2, RendererData);
        function TextureRendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
          _classCallCheck(this, TextureRendererData2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureRendererData2).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData));
          _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
          return _this;
        }
        _createClass(TextureRendererData2, [
          {
            key: "getVertexTextureCoordinatesData",
            value: function getVertexTextureCoordinatesData() {
              return this.vertexTextureCoordinatesData;
            }
          },
          {
            key: "addVertexTextureCoordinateTuples",
            value: function addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
              var vertexTextureCoordinatesData = (0, _array).flatten(vertexTextureCoordinateTuples);
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
      exports.default = TextureRendererData;
    }
  });

  // lib/renderer/source/texture/fragmentShader.js
  var require_fragmentShader2 = __commonJS({
    "lib/renderer/source/texture/fragmentShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.samplerName = void 0;
      var samplerName = "uSampler";
      exports.samplerName = samplerName;
      var fragmentShaderSource = new String("\n        \n        uniform sampler2D ".concat(samplerName, ";\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(").concat(samplerName, ", vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      "));
      var _default = fragmentShaderSource;
      exports.default = _default;
    }
  });

  // lib/renderer/buffers/texture.js
  var require_texture3 = __commonJS({
    "lib/renderer/buffers/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _buffers = _interopRequireDefault2(require_buffers());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
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
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var textureCoordinateComponents = 2;
      var TextureRendererBuffers = /* @__PURE__ */ function(RendererBuffers) {
        _inherits(TextureRendererBuffers2, RendererBuffers);
        function TextureRendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
          _classCallCheck(this, TextureRendererBuffers2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureRendererBuffers2).call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer));
          _this.textureCoordinatesBuffer = textureCoordinatesBuffer;
          return _this;
        }
        _createClass(TextureRendererBuffers2, [
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
              _get(_getPrototypeOf(TextureRendererBuffers2.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
              this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
              _get(_getPrototypeOf(TextureRendererBuffers2.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
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
      exports.default = TextureRendererBuffers;
    }
  });

  // lib/renderer/locations/texture/uniform.js
  var require_uniform3 = __commonJS({
    "lib/renderer/locations/texture/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _uniform = _interopRequireDefault2(require_uniform());
      var _fragmentShader = require_fragmentShader2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var TextureUniformLocations = /* @__PURE__ */ function(UniformLocations) {
        _inherits(TextureUniformLocations2, UniformLocations);
        function TextureUniformLocations2(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
          _classCallCheck(this, TextureUniformLocations2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureUniformLocations2).call(this, offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation));
          _this.samplerUniformLocation = samplerUniformLocation;
          return _this;
        }
        _createClass(TextureUniformLocations2, [
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
      exports.default = TextureUniformLocations;
    }
  });

  // lib/renderer/locations/texture/attribute.js
  var require_attribute3 = __commonJS({
    "lib/renderer/locations/texture/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _attribute = _interopRequireDefault2(require_attribute());
      var _vertexShader = require_vertexShader2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var TextureAttributeLocations = /* @__PURE__ */ function(AttributeLocations) {
        _inherits(TextureAttributeLocations2, AttributeLocations);
        function TextureAttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
          _classCallCheck(this, TextureAttributeLocations2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureAttributeLocations2).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));
          _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
          return _this;
        }
        _createClass(TextureAttributeLocations2, [
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
      exports.default = TextureAttributeLocations;
    }
  });

  // lib/renderer/texture.js
  var require_texture4 = __commonJS({
    "lib/renderer/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _renderer = _interopRequireWildcard(require_renderer());
      var _vertexShader = _interopRequireDefault2(require_vertexShader2());
      var _texture = _interopRequireDefault2(require_texture2());
      var _fragmentShader = _interopRequireDefault2(require_fragmentShader2());
      var _texture1 = _interopRequireDefault2(require_texture3());
      var _uniform = _interopRequireDefault2(require_uniform3());
      var _attribute = _interopRequireDefault2(require_attribute3());
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                if (desc.get || desc.set) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var TextureRenderer = /* @__PURE__ */ function(Renderer) {
        _inherits(TextureRenderer2, Renderer);
        function TextureRenderer2() {
          _classCallCheck(this, TextureRenderer2);
          return _possibleConstructorReturn(this, _getPrototypeOf(TextureRenderer2).apply(this, arguments));
        }
        _createClass(TextureRenderer2, [
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
              var facets = [], program = (0, _renderer).createProgram(_vertexShader.default, _fragmentShader.default, canvas), textureRendererData = _texture.default.fromNothing(), textureRendererBuffers = _texture1.default.fromNothing(), textureUniformLocations = _uniform.default.fromProgram(program, canvas), textureAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = textureRendererData, rendererBuffers = textureRendererBuffers, uniformLocations = textureUniformLocations, attributeLocations = textureAttributeLocations, textureRenderer = _construct(Class, [
                facets,
                program,
                rendererData,
                rendererBuffers,
                uniformLocations,
                attributeLocations
              ].concat(_toConsumableArray(remainingArguments)));
              canvas.enableAnisotropicFiltering();
              return textureRenderer;
            }
          }
        ]);
        return TextureRenderer2;
      }(_renderer.default);
      exports.default = TextureRenderer;
    }
  });

  // lib/renderer/texture/images.js
  var require_images = __commonJS({
    "lib/renderer/texture/images.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _texture = _interopRequireDefault2(require_texture4());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
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
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var add = _array.push;
      var ImagesTextureRenderer = /* @__PURE__ */ function(TextureRenderer) {
        _inherits(ImagesTextureRenderer2, TextureRenderer);
        function ImagesTextureRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
          _classCallCheck(this, ImagesTextureRenderer2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(ImagesTextureRenderer2).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));
          _this.imageNames = imageNames;
          _this.facetsMap = facetsMap;
          _this.offsets = offsets;
          return _this;
        }
        _createClass(ImagesTextureRenderer2, [
          {
            key: "addFacets",
            value: function addFacets(facets) {
              var texturedFacets = facets, texturedFacetsLength = texturedFacets.length;
              if (texturedFacetsLength > 0) {
                var firstTexturedFacet = (0, _array).first(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), facets1 = this.facetsMap[imageName];
                add(facets1, texturedFacets);
              }
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              var index = 0;
              this.imageNames.forEach(function(imageName) {
                var facets2 = this.facetsMap[imageName];
                facets2.forEach(function(facet) {
                  var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(), texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples;
                  add(vertexIndexes, facetVertexIndexes);
                  add(vertexNormals, facetVertexNormals);
                  add(vertexPositions, facetVertexPositions);
                  add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
                  index++;
                });
                var offset = index * 3;
                this.offsets.push(offset);
              }.bind(this));
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexPositions(vertexPositions);
              rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
              _get(_getPrototypeOf(ImagesTextureRenderer2.prototype), "createBuffers", this).call(this, canvas);
            }
          },
          {
            key: "render",
            value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var start, finish = 0;
              this.offsets.forEach(function(offset, index) {
                start = finish;
                finish = offset;
                this.useTexture(index, canvas);
                canvas.drawElements(start, finish);
              }.bind(this));
            }
          }
        ], [
          {
            key: "fromImagesImageNamesAndImageTiling",
            value: function fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
              var offsets = [], facetsMap = {};
              images.forEach(function(image, index) {
                var facets2 = [], repeat = imageTiling, imageName = imageNames[index];
                facetsMap[imageName] = facets2;
                canvas.createTexture(image, index, repeat);
              });
              var imagesTextureRenderer = _texture.default.fromNothing(ImagesTextureRenderer2, canvas, imageNames, facetsMap, offsets);
              return imagesTextureRenderer;
            }
          }
        ]);
        return ImagesTextureRenderer2;
      }(_texture.default);
      exports.default = ImagesTextureRenderer;
    }
  });

  // lib/renderer/texture/imageMap.js
  var require_imageMap = __commonJS({
    "lib/renderer/texture/imageMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _texture = _interopRequireDefault2(require_texture4());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
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
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var add = _array.push;
      var ImageMapTextureRenderer = /* @__PURE__ */ function(TextureRenderer) {
        _inherits(ImageMapTextureRenderer2, TextureRenderer);
        function ImageMapTextureRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
          _classCallCheck(this, ImageMapTextureRenderer2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageMapTextureRenderer2).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));
          _this.imageMapJSON = imageMapJSON;
          return _this;
        }
        _createClass(ImageMapTextureRenderer2, [
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              facets.forEach(function(facet, index) {
                var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(this.imageMapJSON), texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples;
                add(vertexIndexes, facetVertexIndexes);
                add(vertexNormals, facetVertexNormals);
                add(vertexPositions, facetVertexPositions);
                add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
              }.bind(this));
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexPositions(vertexPositions);
              rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
              _get(_getPrototypeOf(ImageMapTextureRenderer2.prototype), "createBuffers", this).call(this, canvas);
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
            value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
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
      exports.default = ImageMapTextureRenderer;
    }
  });

  // lib/element/part.js
  var require_part = __commonJS({
    "lib/element/part.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _colour = _interopRequireDefault2(require_colour4());
      var _images = _interopRequireDefault2(require_images());
      var _imageMap = _interopRequireDefault2(require_imageMap());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
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
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      var Part = /* @__PURE__ */ function(Element1) {
        _inherits(Part2, Element1);
        function Part2(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
          _classCallCheck(this, Part2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Part2).call(this));
          _this.images = images;
          _this.imageMap = imageMap;
          _this.imageNames = imageNames;
          _this.imageTiling = imageTiling;
          _this.imageMapJSON = imageMapJSON;
          _this.colourRenderer = colourRenderer;
          _this.textureRenderer = textureRenderer;
          _this.hidden = hidden;
          return _this;
        }
        _createClass(Part2, [
          {
            key: "render",
            value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              this.colourRenderer && this.colourRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              this.textureRenderer && this.textureRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.magnify(magnification);
              });
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas, masks, marginOfError) {
              var textureRenderer = null;
              var colourRenderer = _colour.default.fromNothing(canvas);
              if (this.images !== null) {
                var imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
                textureRenderer = imagesTextureRenderer;
              }
              if (this.imageMap !== null) {
                var imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
                textureRenderer = imageMapTextureRenderer;
              }
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.createFacets(this.hidden, marginOfError);
              }.bind(this));
              childElements.forEach(function(childElement) {
                return childElement.amendFacets(masks, marginOfError);
              });
              childElements.forEach(function(childElement) {
                return childElement.addFacets(colourRenderer, textureRenderer);
              });
              colourRenderer && colourRenderer.createBuffers(canvas);
              textureRenderer && textureRenderer.createBuffers(canvas);
              this.colourRenderer = colourRenderer;
              this.textureRenderer = textureRenderer;
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _images1 = properties.images, images = _images1 === void 0 ? null : _images1, _imageMap1 = properties.imageMap, imageMap = _imageMap1 === void 0 ? null : _imageMap1, _imageNames = properties.imageNames, imageNames = _imageNames === void 0 ? null : _imageNames, _imageTiling = properties.imageTiling, imageTiling = _imageTiling === void 0 ? false : _imageTiling, _imageMapJSON = properties.imageMapJSON, imageMapJSON = _imageMapJSON === void 0 ? null : _imageMapJSON, _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part2, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);
              return part;
            }
          }
        ]);
        return Part2;
      }(_wrapNativeSuper(_element.default));
      exports.default = Part;
    }
  });

  // lib/element/camera.js
  var require_camera = __commonJS({
    "lib/element/camera.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _constants = require_constants();
      var _defaults = require_defaults();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
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
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      var _Element;
      var Camera = /* @__PURE__ */ function(Element1) {
        _inherits(Camera2, Element1);
        function Camera2(zFar, zNear, fieldOfView) {
          _classCallCheck(this, Camera2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera2).call(this));
          _this.zFar = zFar;
          _this.zNear = zNear;
          _this.fieldOfView = fieldOfView;
          return _this;
        }
        _createClass(Camera2, [
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
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              this.zFar = this.zFar * magnification;
              this.zNear = this.zNear * magnification;
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var _fieldOfView = properties.fieldOfView, fieldOfView = _fieldOfView === void 0 ? _defaults.DEFAULT_FIELD_OF_VIEW : _fieldOfView;
              fieldOfView *= _constants.DEGREES_TO_RADIANS_MULTIPLIER;
              var _zFar = properties.zFar, zFar = _zFar === void 0 ? _defaults.DEFAULT_Z_FAR : _zFar, _zNear = properties.zNear, zNear = _zNear === void 0 ? _defaults.DEFAULT_Z_NEAR : _zNear, camera = (_Element = _element.default).fromProperties.apply(_Element, [
                Class,
                properties,
                zFar,
                zNear,
                fieldOfView
              ].concat(_toConsumableArray(remainingArguments)));
              return camera;
            }
          }
        ]);
        return Camera2;
      }(_wrapNativeSuper(_element.default));
      exports.default = Camera;
    }
  });

  // lib/keyCodes.js
  var require_keyCodes = __commonJS({
    "lib/keyCodes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SHIFT_KEY_CODE = void 0;
      var SHIFT_KEY_CODE = 16;
      exports.SHIFT_KEY_CODE = SHIFT_KEY_CODE;
    }
  });

  // lib/eventTypes.js
  var require_eventTypes = __commonJS({
    "lib/eventTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MOUSEMOVE_EVENT_TYPE = exports.KEYDOWN_EVENT_TYPE = exports.MOUSEUP_EVENT_TYPE = exports.MOUSEWHEEL_EVENT_TYPE = exports.MOUSEDOWN_EVENT_TYPE = exports.KEYUP_EVENT_TYPE = void 0;
      var KEYUP_EVENT_TYPE = "keyup";
      exports.KEYUP_EVENT_TYPE = KEYUP_EVENT_TYPE;
      var KEYDOWN_EVENT_TYPE = "keydown";
      exports.KEYDOWN_EVENT_TYPE = KEYDOWN_EVENT_TYPE;
      var MOUSEUP_EVENT_TYPE = "mouseup";
      exports.MOUSEUP_EVENT_TYPE = MOUSEUP_EVENT_TYPE;
      var MOUSEDOWN_EVENT_TYPE = "mousedown";
      exports.MOUSEDOWN_EVENT_TYPE = MOUSEDOWN_EVENT_TYPE;
      var MOUSEMOVE_EVENT_TYPE = "mousemove";
      exports.MOUSEMOVE_EVENT_TYPE = MOUSEMOVE_EVENT_TYPE;
      var MOUSEWHEEL_EVENT_TYPE = "mousewheel";
      exports.MOUSEWHEEL_EVENT_TYPE = MOUSEWHEEL_EVENT_TYPE;
    }
  });

  // lib/miscellaneous/keyEvents.js
  var require_keyEvents = __commonJS({
    "lib/miscellaneous/keyEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _keyCodes = require_keyCodes();
      var _eventTypes = require_eventTypes();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var KeyEvents = /* @__PURE__ */ function() {
        function KeyEvents2(handlers, shiftKeyDown) {
          _classCallCheck(this, KeyEvents2);
          this.handlers = handlers;
          this.shiftKeyDown = shiftKeyDown;
        }
        _createClass(KeyEvents2, [
          {
            key: "isShiftKeyDown",
            value: function isShiftKeyDown() {
              return this.shiftKeyDown;
            }
          },
          {
            key: "keyUpEventListener",
            value: function keyUpEventListener(event) {
              var keyCode = event.keyCode;
              if (keyCode === _keyCodes.SHIFT_KEY_CODE) {
                this.shiftKeyDown = false;
                this.handlers.forEach(function(handler) {
                  return handler(this.shiftKeyDown);
                }.bind(this));
              }
            }
          },
          {
            key: "keyDownEventListener",
            value: function keyDownEventListener(event) {
              var keyCode = event.keyCode;
              if (keyCode === _keyCodes.SHIFT_KEY_CODE) {
                this.shiftKeyDown = true;
                this.handlers.forEach(function(handler) {
                  return handler(this.shiftKeyDown);
                }.bind(this));
              }
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
            key: "initialise",
            value: function initialise(canvas) {
              var documentDOMElement = document.documentElement, keyUpEventListener = this.keyUpEventListener.bind(this), keyDownEventListener = this.keyDownEventListener.bind(this);
              documentDOMElement.addEventListener(_eventTypes.KEYUP_EVENT_TYPE, keyUpEventListener);
              documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownEventListener);
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
      exports.default = KeyEvents;
    }
  });

  // lib/miscellaneous/mouseEvents.js
  var require_mouseEvents = __commonJS({
    "lib/miscellaneous/mouseEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _eventTypes = require_eventTypes();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var MouseEvents = /* @__PURE__ */ function() {
        function MouseEvents2(handlersMap, mouseDown) {
          _classCallCheck(this, MouseEvents2);
          this.handlersMap = handlersMap;
          this.mouseDown = mouseDown;
        }
        _createClass(MouseEvents2, [
          {
            key: "mouseEventListener",
            value: function mouseEventListener(event, eventType) {
              var handlers = this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
              handlers.forEach(function(handler) {
                return handler(mouseCoordinates, this.mouseDown);
              }.bind(this));
              event.preventDefault();
            }
          },
          {
            key: "mouseUpEventListener",
            value: function mouseUpEventListener(event) {
              this.mouseDown = false;
              this.mouseEventListener(event, _eventTypes.MOUSEUP_EVENT_TYPE);
            }
          },
          {
            key: "mouseDownEventListener",
            value: function mouseDownEventListener(event) {
              this.mouseDown = true;
              this.mouseEventListener(event, _eventTypes.MOUSEDOWN_EVENT_TYPE);
            }
          },
          {
            key: "mouseMoveEventListener",
            value: function mouseMoveEventListener(event) {
              this.mouseEventListener(event, _eventTypes.MOUSEMOVE_EVENT_TYPE);
            }
          },
          {
            key: "mouseWheelEventListener",
            value: function mouseWheelEventListener(event) {
              var handlers = this.handlersMap[_eventTypes.MOUSEWHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
              handlers.forEach(function(handler) {
                return handler(mouseWheelDelta);
              });
              event.preventDefault();
            }
          },
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
              var mouseWheelHandlers = this.handlersMap[_eventTypes.MOUSEWHEEL_EVENT_TYPE];
              mouseWheelHandlers.push(mouseWheelHandler);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas) {
              var canvasDOMElement = canvas.getDOMElement(), mouseUpEventListener = this.mouseUpEventListener.bind(this), mouseDownEventListener = this.mouseDownEventListener.bind(this), mouseMoveEventListener = this.mouseMoveEventListener.bind(this), mouseWheelEventListener = this.mouseWheelEventListener.bind(this);
              this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEWHEEL_EVENT_TYPE] = [];
              canvasDOMElement.addEventListener(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEWHEEL_EVENT_TYPE, mouseWheelEventListener);
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
      exports.default = MouseEvents;
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
      exports.default = void 0;
      var _keyEvents = _interopRequireDefault2(require_keyEvents());
      var _mouseEvents = _interopRequireDefault2(require_mouseEvents());
      var _vector = require_vector();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var UserInput = /* @__PURE__ */ function() {
        function UserInput2(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
          _classCallCheck(this, UserInput2);
          this.handlers = handlers;
          this.keyEvents = keyEvents;
          this.mouseEvents = mouseEvents;
          this.mouseCoordinates = mouseCoordinates;
          this.previousMouseCoordinates = previousMouseCoordinates;
        }
        _createClass(UserInput2, [
          {
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
              this.previousMouseCoordinates = this.mouseCoordinates;
              this.mouseCoordinates = mouseCoordinates;
              if (this.previousMouseCoordinates === null) {
                return;
              }
              if (mouseDown) {
                var mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector).subtract2(this.mouseCoordinates, this.previousMouseCoordinates);
                this.handlers.forEach(function(handler) {
                  return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                });
              }
            }
          },
          {
            key: "mouseWheelHandler",
            value: function mouseWheelHandler(mouseWheelDelta, canvas) {
              var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector).zero2();
              this.handlers.forEach(function(handler) {
                return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
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
            key: "initialise",
            value: function initialise(canvas) {
              var mouseMoveHandler = this.mouseMoveHandler.bind(this), mouseWheelHandler = this.mouseWheelHandler.bind(this);
              this.keyEvents.initialise(canvas);
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
      exports.default = UserInput;
    }
  });

  // lib/utilities/element.js
  var require_element2 = __commonJS({
    "lib/utilities/element.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.elementsFromChildElements = elementsFromChildElements;
      exports.elementFromChildElements = elementFromChildElements;
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function elementsFromChildElements(childElements, Class) {
        var elements = childElements.reduce(function(elements1, childElement) {
          if (_instanceof(childElement, Class)) {
            var element = childElement;
            elements1.push(element);
          }
          return elements1;
        }, []);
        return elements;
      }
      function elementFromChildElements(childElements, Class) {
        var element = childElements.reduce(function(element1, childElement) {
          if (element1 === null) {
            if (_instanceof(childElement, Class)) {
              element1 = childElement;
            }
          }
          return element1;
        }, null);
        return element;
      }
    }
  });

  // lib/element/scene.js
  var require_scene = __commonJS({
    "lib/element/scene.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _part = _interopRequireDefault2(require_part());
      var _mask = _interopRequireDefault2(require_mask());
      var _camera = _interopRequireDefault2(require_camera());
      var _element = _interopRequireDefault2(require_element());
      var _userInput = _interopRequireDefault2(require_userInput());
      var _vector = require_vector();
      var _defaults = require_defaults();
      var _element1 = require_element2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
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
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      var Scene = /* @__PURE__ */ function(Element1) {
        _inherits(Scene2, Element1);
        function Scene2(parts, masks, camera, canvas) {
          _classCallCheck(this, Scene2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene2).call(this));
          _this.parts = parts;
          _this.masks = masks;
          _this.camera = camera;
          _this.canvas = canvas;
          return _this;
        }
        _createClass(Scene2, [
          {
            key: "userInputHandler",
            value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
              var render = this.render.bind(this);
              this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, this.canvas, render);
            }
          },
          {
            key: "windowResizeHandler",
            value: function windowResizeHandler() {
              var clientWidth = this.canvas.getClientWidth(), clientHeight = this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
              this.canvas.resize(width, height);
              var relativeMouseCoordinates = (0, _vector).zero2(), mouseWheelDelta = 0, shiftKeyDown = false;
              this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              this.canvas.clear();
              this.parts.forEach(function(part) {
                return part.render(this.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              }.bind(this));
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              this.masks.forEach(function(mask) {
                return mask.magnify(magnification);
              });
              this.parts.forEach(function(part) {
                return part.magnify(magnification);
              });
              this.camera.magnify(magnification);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
              var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this);
              this.masks.forEach(function(mask) {
                return mask.initialise(this.masks, marginOfError);
              }.bind(this));
              this.parts.forEach(function(part) {
                return part.initialise(canvas, this.masks, marginOfError);
              }.bind(this));
              userInput.initialise(canvas);
              userInput.addUserInputHandler(userInputHandler);
              window.onresize = windowResizeHandler;
              this.windowResizeHandler();
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var canvas = properties.canvas, _magnification = properties.magnification, magnification = _magnification === void 0 ? _defaults.DEFAULT_MAGNIFICATION : _magnification, childElements = properties.childElements, masks = (0, _element1).elementsFromChildElements(childElements, _mask.default), parts = (0, _element1).elementsFromChildElements(childElements, _part.default), camera = (0, _element1).elementFromChildElements(childElements, _camera.default), scene = _element.default.fromProperties(Scene2, properties, parts, masks, camera, canvas), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR * magnification * magnification;
              scene.magnify(magnification);
              scene.initialise(canvas, marginOfError);
              return scene;
            }
          }
        ]);
        return Scene2;
      }(_wrapNativeSuper(_element.default));
      exports.default = Scene;
    }
  });

  // lib/utilities/offsets.js
  var require_offsets = __commonJS({
    "lib/utilities/offsets.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.relativeOffsetsFromAnglesDirectionsAndMagnification = relativeOffsetsFromAnglesDirectionsAndMagnification;
      var _matrix = require_matrix2();
      var _vector = require_vector();
      function relativeOffsetsFromAnglesDirectionsAndMagnification(angles, directions, magnification) {
        angles = (0, _vector).reflect3(angles);
        var reverseOrder = true, rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles, reverseOrder);
        var relativeOffsets = (0, _vector).transform4(directions, rotationsMatrix);
        relativeOffsets = (0, _vector).truncate4(relativeOffsets);
        relativeOffsets = (0, _vector).scale3(relativeOffsets, magnification);
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
      exports.default = void 0;
      var _vector = require_vector();
      var _constants = require_constants();
      var _offsets = require_offsets();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var Pan = /* @__PURE__ */ function() {
        function Pan2(offsets, magnification, deltaMultiplier) {
          _classCallCheck(this, Pan2);
          this.offsets = offsets;
          this.magnification = magnification;
          this.deltaMultiplier = deltaMultiplier;
        }
        _createClass(Pan2, [
          {
            key: "getOffsets",
            value: function getOffsets() {
              return this.offsets;
            }
          },
          {
            key: "getMagnification",
            value: function getMagnification() {
              return this.magnification();
            }
          },
          {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
              return this.deltaMultiplier;
            }
          },
          {
            key: "updateOffsets",
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
              var angles = tilt.getAngles(), magnification = this.magnification, scaledMouseWheelDelta = mouseWheelDelta * this.deltaMultiplier, scaledReflectedRelativeMouseCoordinates = (0, _vector).reflect2((0, _vector).scale2(relativeMouseCoordinates, _constants.OFFSET_MULTIPLIER)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
                scaledMouseWheelDelta,
                0
              ]), relativeOffsets = (0, _offsets).relativeOffsetsFromAnglesDirectionsAndMagnification(angles, directions, magnification);
              this.offsets = (0, _vector).add3(this.offsets, relativeOffsets);
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              this.magnification = magnification;
              this.offsets = (0, _vector).scale3(this.offsets, magnification);
            }
          }
        ], [
          {
            key: "fromInitialOffsetsAndDeltaMultiplier",
            value: function fromInitialOffsetsAndDeltaMultiplier(initialOffsets, deltaMultiplier) {
              var offsets = initialOffsets, magnification = null, pan = new Pan2(offsets, magnification, deltaMultiplier);
              return pan;
            }
          },
          {
            key: "fromInitialPositionAndDeltaMultiplier",
            value: function fromInitialPositionAndDeltaMultiplier(initialPosition, deltaMultiplier) {
              var offsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER), magnification = null, pan = new Pan2(offsets, magnification, deltaMultiplier);
              return pan;
            }
          }
        ]);
        return Pan2;
      }();
      exports.default = Pan;
    }
  });

  // lib/miscellaneous/tilt.js
  var require_tilt = __commonJS({
    "lib/miscellaneous/tilt.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _array = require_array2();
      var _vector = require_vector();
      var _constants = require_constants();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var Tilt = /* @__PURE__ */ function() {
        function Tilt2(angles, flipped) {
          _classCallCheck(this, Tilt2);
          this.angles = angles;
          this.flipped = flipped;
        }
        _createClass(Tilt2, [
          {
            key: "getXAngle",
            value: function getXAngle() {
              var firstAngle = (0, _array).first(this.angles), xAngle = firstAngle;
              return xAngle;
            }
          },
          {
            key: "getYAngle",
            value: function getYAngle() {
              var secondAngle = (0, _array).second(this.angles), yAngle = secondAngle;
              return yAngle;
            }
          },
          {
            key: "getZAngle",
            value: function getZAngle() {
              var zAngle = 0;
              return zAngle;
            }
          },
          {
            key: "getAngles",
            value: function getAngles() {
              return this.angles;
            }
          },
          {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
              var scalar = this.flipped ? +_constants.ANGLES_MULTIPLIER : -_constants.ANGLES_MULTIPLIER, matrix = [
                0,
                scalar,
                0,
                -scalar,
                0,
                0,
                0,
                0,
                0
              ], relativeAngles = (0, _vector).transform3(_toConsumableArray(relativeMouseCoordinates).concat([
                0
              ]), matrix);
              this.angles = (0, _vector).add3(this.angles, relativeAngles);
            }
          }
        ], [
          {
            key: "fromInitialAnglesAndFlipped",
            value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
              var scalar = flipped ? +_constants.DEGREES_TO_RADIANS_MULTIPLIER : -_constants.DEGREES_TO_RADIANS_MULTIPLIER, matrix = [
                0,
                scalar,
                0,
                -scalar,
                0,
                0,
                0,
                0,
                0
              ], angles = (0, _vector).transform3(_toConsumableArray(initialAngles).concat([
                0
              ]), matrix), tilt = new Tilt2(angles, flipped);
              return tilt;
            }
          }
        ]);
        return Tilt2;
      }();
      exports.default = Tilt;
    }
  });

  // lib/element/camera/gaming.js
  var require_gaming = __commonJS({
    "lib/element/camera/gaming.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _pan = _interopRequireDefault2(require_pan());
      var _tilt = _interopRequireDefault2(require_tilt());
      var _camera = _interopRequireDefault2(require_camera());
      var _defaults = require_defaults();
      var _matrix = require_matrix2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var GamingCamera = /* @__PURE__ */ function(Camera) {
        _inherits(GamingCamera2, Camera);
        function GamingCamera2(zFar, zNear, fieldOfView, pan, tilt) {
          _classCallCheck(this, GamingCamera2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera2).call(this, zFar, zNear, fieldOfView, pan, tilt));
          _this.pan = pan;
          _this.tilt = tilt;
          return _this;
        }
        _createClass(GamingCamera2, [
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
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
              if (false) {
              } else if (shiftKeyDown) {
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
              } else if (mouseWheelDelta !== 0) {
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
              } else {
                this.tilt.updateAngles(relativeMouseCoordinates);
              }
              var camera = this, angles = this.tilt.getAngles(), offsets = this.pan.getOffsets(), offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromNothing(), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
              render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              this.pan.magnify(magnification);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles, _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _initialPosition, _deltaMultiplier = properties.deltaMultiplier, deltaMultiplier = _deltaMultiplier === void 0 ? _defaults.DEFAULT_DELTA_MULTIPLIER : _deltaMultiplier, flipped = true, pan = _pan.default.fromInitialPositionAndDeltaMultiplier(initialPosition, deltaMultiplier), tilt = _tilt.default.fromInitialAnglesAndFlipped(initialAngles, flipped), gamingCamera = _camera.default.fromProperties(GamingCamera2, properties, pan, tilt);
              return gamingCamera;
            }
          }
        ]);
        return GamingCamera2;
      }(_camera.default);
      exports.default = GamingCamera;
    }
  });

  // lib/miscellaneous/zoom.js
  var require_zoom = __commonJS({
    "lib/miscellaneous/zoom.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _constants = require_constants();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Zoom = /* @__PURE__ */ function() {
        function Zoom2(distance, minimumDistance, deltaMultiplier) {
          _classCallCheck(this, Zoom2);
          this.distance = distance;
          this.minimumDistance = minimumDistance;
          this.deltaMultiplier = deltaMultiplier;
        }
        _createClass(Zoom2, [
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
              return this.deltaMultiplier;
            }
          },
          {
            key: "updateDistance",
            value: function updateDistance(mouseWheelDelta) {
              this.distance = this.distance - mouseWheelDelta * this.deltaMultiplier;
              this.distance = Math.max(this.minimumDistance, this.distance);
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              this.distance = this.distance * magnification;
              this.minimumDistance = this.minimumDistance * magnification;
              this.deltaMultiplier = this.deltaMultiplier * magnification;
            }
          }
        ], [
          {
            key: "fromInitialDistanceAndDeltaMultiplier",
            value: function fromInitialDistanceAndDeltaMultiplier(initialDistance, deltaMultiplier) {
              var distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, zoom = new Zoom2(distance, minimumDistance, deltaMultiplier);
              return zoom;
            }
          }
        ]);
        return Zoom2;
      }();
      exports.default = Zoom;
    }
  });

  // lib/element/camera/design.js
  var require_design = __commonJS({
    "lib/element/camera/design.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _pan = _interopRequireDefault2(require_pan());
      var _tilt = _interopRequireDefault2(require_tilt());
      var _zoom = _interopRequireDefault2(require_zoom());
      var _camera = _interopRequireDefault2(require_camera());
      var _defaults = require_defaults();
      var _matrix = require_matrix2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
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
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var DesignCamera = /* @__PURE__ */ function(Camera) {
        _inherits(DesignCamera2, Camera);
        function DesignCamera2(zFar, zNear, fieldOfView, pan, tilt, zoom) {
          _classCallCheck(this, DesignCamera2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignCamera2).call(this, zFar, zNear, fieldOfView));
          _this.pan = pan;
          _this.tilt = tilt;
          _this.zoom = zoom;
          return _this;
        }
        _createClass(DesignCamera2, [
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
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
              if (false) {
              } else if (shiftKeyDown) {
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, this.tilt);
              } else if (mouseWheelDelta !== 0) {
                this.zoom.updateDistance(mouseWheelDelta);
              } else {
                this.tilt.updateAngles(relativeMouseCoordinates);
              }
              var camera = this, angles = this.tilt.getAngles(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance(), offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromDistance(distance), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
              render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              _get(_getPrototypeOf(DesignCamera2.prototype), "magnify", this).call(this, magnification);
              this.pan.magnify(magnification);
              this.zoom.magnify(magnification);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles, _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _initialOffsets, _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _initialDistance, _deltaMultiplier = properties.deltaMultiplier, deltaMultiplier = _deltaMultiplier === void 0 ? _defaults.DEFAULT_DELTA_MULTIPLIER : _deltaMultiplier, flipped = false, pan = _pan.default.fromInitialOffsetsAndDeltaMultiplier(initialOffsets, deltaMultiplier), tilt = _tilt.default.fromInitialAnglesAndFlipped(initialAngles, flipped), zoom = _zoom.default.fromInitialDistanceAndDeltaMultiplier(initialDistance, deltaMultiplier), designCamera = _camera.default.fromProperties(DesignCamera2, properties, pan, tilt, zoom);
              return designCamera;
            }
          }
        ]);
        return DesignCamera2;
      }(_camera.default);
      exports.default = DesignCamera;
    }
  });

  // lib/utilities/preload.js
  var require_preload = __commonJS({
    "lib/utilities/preload.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.preloadImages = preloadImages;
      exports.preloadImageMap = preloadImageMap;
      exports.default = void 0;
      var _necessary = require_browser();
      var _constants = require_constants();
      var _defaults = require_defaults();
      var forEach = _necessary.asynchronousUtilities.forEach;
      function preloadImages(callback, param) {
        var configuration = param === void 0 ? window.__configuration__ : param;
        var done = function done2() {
          var images2 = context.images;
          callback(images2, imageNames);
        };
        var _host = configuration.host, host = _host === void 0 ? _defaults.DEFAULT_HOST : _host, imageNames = configuration.imageNames, imageDirectoryURI = configuration.imageDirectoryURI, images = [], context = {
          images
        };
        forEach(imageNames, function(imageName, next, done1, context1) {
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
      function preloadImageMap(callback, param) {
        var configuration = param === void 0 ? window.__configuration__ : param;
        var onload = function onload2(event) {
          callback(imageMap, imageMapJSON);
        };
        var _host = configuration.host, host = _host === void 0 ? _defaults.DEFAULT_HOST : _host, imageMapURI = configuration.imageMapURI, imageMapJSON = configuration.imageMapJSON, src = "".concat(host).concat(imageMapURI), imageMap = new Image(), crossOrigin = _constants.ANONYMOUS;
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
      exports.default = _default;
    }
  });

  // lib/primitive/normal.js
  var require_normal = __commonJS({
    "lib/primitive/normal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _array = require_array2();
      var _vector = require_vector();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Normal = /* @__PURE__ */ function() {
        function Normal2(extent) {
          _classCallCheck(this, Normal2);
          this.extent = extent;
        }
        _createClass(Normal2, [
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
              var firstVertex = (0, _array).first(vertices), secondVertex = (0, _array).second(vertices), thirdVertex = (0, _array).third(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = (0, _vector).subtract3(secondPosition, firstPosition), secondExtent = (0, _vector).subtract3(thirdPosition, firstPosition), extent = (0, _vector).normalise3((0, _vector).cross3(firstExtent, secondExtent)), normal = new Normal2(extent);
              return normal;
            }
          }
        ]);
        return Normal2;
      }();
      exports.default = Normal;
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
      exports.default = void 0;
      var _rotation = require_rotation();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Vertex = /* @__PURE__ */ function() {
        function Vertex2(position) {
          _classCallCheck(this, Vertex2);
          this.position = position;
        }
        _createClass(Vertex2, [
          {
            key: "getPosition",
            value: function getPosition() {
              return this.position;
            }
          },
          {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
              this.position = (0, _rotation).rotatePosition(this.position, rotationQuaternion);
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
      exports.default = Vertex;
    }
  });

  // lib/utilities/facet.js
  var require_facet = __commonJS({
    "lib/utilities/facet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cloneEdges = cloneEdges;
      exports.cloneNormal = cloneNormal;
      exports.cloneVertices = cloneVertices;
      exports.calculateEdges = calculateEdges;
      exports.calculateNormal = calculateNormal;
      exports.calculateArea = calculateArea;
      var _constants = require_constants();
      var _array = require_array2();
      var _vector = require_vector();
      function cloneEdges(edges) {
        edges = edges.map(function(edge) {
          return edge.clone();
        });
        return edges;
      }
      function cloneNormal(normal) {
        normal = normal.clone();
        return normal;
      }
      function cloneVertices(vertices) {
        vertices = vertices.map(function(vertex) {
          return vertex.clone();
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
        var firstVertex = (0, _array).first(vertices), secondVertex = (0, _array).second(vertices), thirdVertex = (0, _array).third(vertices), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstExtent = (0, _vector).subtract3(secondVertexPosition, firstVertexPosition), secondExtent = (0, _vector).subtract3(thirdVertexPosition, firstVertexPosition), area = (0, _vector).length3((0, _vector).cross3(firstExtent, secondExtent)) / 2;
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
      exports.default = void 0;
      var _edge = _interopRequireDefault2(require_edge());
      var _normal = _interopRequireDefault2(require_normal());
      var _vertex = _interopRequireDefault2(require_vertex());
      var _array = require_array2();
      var _constants = require_constants();
      var _facet = require_facet();
      var _midPoint = require_midPoint();
      var _intersection = require_intersection();
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Facet = /* @__PURE__ */ function() {
        function Facet2(vertices, normal, edges) {
          _classCallCheck(this, Facet2);
          this.vertices = vertices;
          this.normal = normal;
          this.edges = edges;
        }
        _createClass(Facet2, [
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
                return vertex.getPosition();
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
              var maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = (0, _midPoint).calculateMidPointPosition(this.vertices), midPointPositionToOneSideOfMaskingEdges = (0, _midPoint).isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges;
              return masked;
            }
          },
          {
            key: "permute",
            value: function permute(places) {
              this.vertices = (0, _array).permute(this.vertices, places);
              this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
              this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
          },
          {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
              this.vertices.forEach(function(vertex) {
                return vertex.rotate(rotationQuaternion);
              });
              this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
              this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              this.vertices.forEach(function(vertex) {
                return vertex.applyTransform(transform);
              });
              this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
              this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
          },
          {
            key: "splitWithIntersections",
            value: function splitWithIntersections(intersections, smallerFacets, marginOfError) {
              var nonNullIntersections = (0, _intersection).calculateNonNullIntersections(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
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
              var nullIntersectionIndex = (0, _intersection).calculateNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
              intersections = (0, _array).permute(intersections, places);
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
              var nonNullIntersectionIndex = (0, _intersection).calculateNonNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
              intersections = (0, _array).permute(intersections, places);
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
              var vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map(function(intersection, index) {
                var startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = (0, _intersection).calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection);
                return intermediateVertexPosition;
              });
              (0, _array).push(vertexPositions, intermediateVertexPositions);
              indexTuples.forEach(function(indexTuple) {
                var positions = vertexPositions, indexes = indexTuple, facet = this, smallerFacet = smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError);
                if (smallerFacet !== null) {
                  smallerFacets.push(smallerFacet);
                }
              }.bind(this));
            }
          }
        ]);
        return Facet2;
      }();
      exports.default = Facet;
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
      exports.default = void 0;
      var _edge = _interopRequireDefault2(require_edge());
      var _facet = _interopRequireDefault2(require_facet2());
      var _normal = _interopRequireDefault2(require_normal());
      var _vertex = _interopRequireDefault2(require_vertex());
      var _approximate = require_approximate();
      var _vertices = require_vertices();
      var _facet1 = require_facet();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var ColouredFacet = /* @__PURE__ */ function(Facet) {
        _inherits(ColouredFacet2, Facet);
        function ColouredFacet2(vertices, normal, edges, rgba) {
          _classCallCheck(this, ColouredFacet2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredFacet2).call(this, vertices, normal, edges));
          _this.rgba = rgba;
          return _this;
        }
        _createClass(ColouredFacet2, [
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
              var area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default);
                colouredFacet = new ColouredFacet2(vertices, normal, edges, this.rgba);
              }
              return colouredFacet;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
              vertices = (0, _facet1).cloneVertices(vertices);
              normal = (0, _facet1).cloneNormal(normal);
              edges = (0, _facet1).cloneEdges(edges);
              var colouredFacet = new ColouredFacet2(vertices, normal, edges, this.rgba);
              return colouredFacet;
            }
          }
        ], [
          {
            key: "fromCoordinateTuplesIndexTupleColourAndMarginOfError",
            value: function fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, colour, marginOfError) {
              var colouredFacet = null;
              var vertices = (0, _vertices).verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default), rgba = _toConsumableArray(colour).concat([
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
      exports.default = ColouredFacet;
    }
  });

  // lib/element/canvas/coloured.js
  var require_coloured2 = __commonJS({
    "lib/element/canvas/coloured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _canvas = _interopRequireDefault2(require_canvas());
      var _coloured = _interopRequireDefault2(require_coloured());
      var _array = require_array2();
      var _vector = require_vector();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
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
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var _CanvasElement;
      var ColouredCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(ColouredCanvasElement2, CanvasElement);
        function ColouredCanvasElement2(transform, facets, mask, hidden, coordinates, indexes, colour) {
          _classCallCheck(this, ColouredCanvasElement2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredCanvasElement2).call(this, transform, facets, mask, hidden));
          _this.coordinates = coordinates;
          _this.indexes = indexes;
          _this.colour = colour;
          return _this;
        }
        _createClass(ColouredCanvasElement2, [
          {
            key: "magnify",
            value: function magnify(magnification) {
              var coordinateTuples = this.coordinates;
              coordinateTuples = coordinateTuples.map(function(coordinateTuple) {
                coordinateTuple = (0, _vector).scale3(coordinateTuple, magnification);
                return coordinateTuple;
              });
              this.coordinates = coordinateTuples;
              _get(_getPrototypeOf(ColouredCanvasElement2.prototype), "magnify", this).call(this, magnification);
            }
          },
          {
            key: "createFacets",
            value: function createFacets(hidden, marginOfError) {
              hidden = _get(_getPrototypeOf(ColouredCanvasElement2.prototype), "createFacets", this).call(this, hidden, marginOfError);
              if (!hidden) {
                var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets1, indexTuple) {
                  var coordinateTuples = this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, this.colour, marginOfError), facet = colouredFacet;
                  if (facet !== null) {
                    (0, _array).add(facets1, facet);
                  }
                  return facets1;
                }.bind(this), []);
                this.setFacets(facets);
              }
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var facets = this.getFacets();
              colourRenderer.addFacets(facets);
              _get(_getPrototypeOf(ColouredCanvasElement2.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, colour) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
                remainingArguments[_key - 5] = arguments[_key];
              }
              return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                Class,
                properties,
                coordinates,
                indexes,
                colour
              ].concat(_toConsumableArray(remainingArguments)));
            }
          }
        ]);
        return ColouredCanvasElement2;
      }(_canvas.default);
      exports.default = ColouredCanvasElement;
    }
  });

  // lib/utilities/texture.js
  var require_texture5 = __commonJS({
    "lib/utilities/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cloneTextureCoordinateTuples = cloneTextureCoordinateTuples;
      exports.calculateMappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples;
      exports.calculateAdjustedTextureCoordinateTuples = calculateAdjustedTextureCoordinateTuples;
      var _vertices = require_vertices();
      var _matrix = require_matrix();
      var _array = require_array2();
      var _quaternion = require_quaternion();
      var _vector = require_vector();
      function cloneTextureCoordinateTuples(textureCoordinateTuples) {
        textureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          return textureCoordinateTuple.slice();
        });
        return textureCoordinateTuples;
      }
      function calculateMappedTextureCoordinateTuples(textureCoordinateTuples, extent) {
        var left = extent.left, bottom = extent.bottom, width = extent.width, height = extent.height, mappedTextureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          return (0, _vector).add2((0, _vector).multiply2(textureCoordinateTuple, [
            width,
            height
          ]), [
            left,
            bottom
          ]);
        });
        return mappedTextureCoordinateTuples;
      }
      function calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, textureCoordinateTuples) {
        var arbitraryRotationQuaternion = (0, _quaternion).calculateArbitraryRotationQuaternion(normal), rotationQuaternion = arbitraryRotationQuaternion;
        var rotatedVertices = (0, _vertices).rotateVertices(vertices, rotationQuaternion);
        parentVertices = (0, _vertices).rotateVertices(parentVertices, rotationQuaternion);
        vertices = rotatedVertices;
        var firstVertex = (0, _array).first(vertices), secondVertex = (0, _array).second(vertices), thirdVertex = (0, _array).third(vertices), firstParentVertex = (0, _array).first(parentVertices), secondParentVertex = (0, _array).second(parentVertices), thirdParentVertex = (0, _array).third(parentVertices), firstTextureCoordinateTuple = (0, _array).first(textureCoordinateTuples), secondTextureCoordinateTuple = (0, _array).second(textureCoordinateTuples), thirdTextureCoordinateTuple = (0, _array).third(textureCoordinateTuples), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstParentVertexPosition = firstParentVertex.getPosition(), secondParentVertexPosition = secondParentVertex.getPosition(), thirdParentVertexPosition = thirdParentVertex.getPosition(), R1x = firstVertexPosition[0], R1y = firstVertexPosition[1], R2x = secondVertexPosition[0], R2y = secondVertexPosition[1], R3x = thirdVertexPosition[0], R3y = thirdVertexPosition[1], P1x = firstParentVertexPosition[0], P2x = secondParentVertexPosition[0], P3x = thirdParentVertexPosition[0], P1y = firstParentVertexPosition[1], P2y = secondParentVertexPosition[1], P3y = thirdParentVertexPosition[1], P1u = firstTextureCoordinateTuple[0], P1v = firstTextureCoordinateTuple[1], P2u = secondTextureCoordinateTuple[0], P2v = secondTextureCoordinateTuple[1], P3u = thirdTextureCoordinateTuple[0], P3v = thirdTextureCoordinateTuple[1], textureCoordinatesMatrix = (0, _matrix).invert3([
          1,
          1,
          1,
          P1u,
          P2u,
          P3u,
          P1v,
          P2v,
          P3v
        ]), firstTransformedParentVerticesComponent = (0, _vector).transform3([
          P1x,
          P2x,
          P3x
        ], textureCoordinatesMatrix), secondTransformedParentVerticesComponent = (0, _vector).transform3([
          P1y,
          P2y,
          P3y
        ], textureCoordinatesMatrix), Ox = firstTransformedParentVerticesComponent[0], Ux = firstTransformedParentVerticesComponent[1], Vx = firstTransformedParentVerticesComponent[2], Oy = secondTransformedParentVerticesComponent[0], Uy = secondTransformedParentVerticesComponent[1], Vy = secondTransformedParentVerticesComponent[2], transformedParentVerticesMatrix = (0, _matrix).invert2([
          Ux,
          Uy,
          Vx,
          Vy
        ]), firstAdjustedTextureCoordinate = (0, _vector).transform2([
          R1x - Ox,
          R1y - Oy
        ], transformedParentVerticesMatrix), secondAdjustedTextureCoordinate = (0, _vector).transform2([
          R2x - Ox,
          R2y - Oy
        ], transformedParentVerticesMatrix), thirdAdjustedTextureCoordinate = (0, _vector).transform2([
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
      exports.default = void 0;
      var _edge = _interopRequireDefault2(require_edge());
      var _facet = _interopRequireDefault2(require_facet2());
      var _normal = _interopRequireDefault2(require_normal());
      var _vertex = _interopRequireDefault2(require_vertex());
      var _array = require_array2();
      var _approximate = require_approximate();
      var _vertices = require_vertices();
      var _facet1 = require_facet();
      var _texture = require_texture5();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
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
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var TexturedFacet = /* @__PURE__ */ function(Facet) {
        _inherits(TexturedFacet2, Facet);
        function TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples) {
          _classCallCheck(this, TexturedFacet2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedFacet2).call(this, vertices, normal, edges));
          _this.imageName = imageName;
          _this.textureCoordinateTuples = textureCoordinateTuples;
          return _this;
        }
        _createClass(TexturedFacet2, [
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
              var json = imageMapJSON[this.imageName], extent = json, mappedTextureCoordinateTuples = (0, _texture).calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);
              return mappedTextureCoordinateTuples;
            }
          },
          {
            key: "permute",
            value: function permute(places) {
              _get(_getPrototypeOf(TexturedFacet2.prototype), "permute", this).call(this, places);
              this.textureCoordinateTuples = (0, _array).permute(this.textureCoordinateTuples, places);
            }
          },
          {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
              var texturedFacet = null;
              var area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1).calculateNormal(vertices, _normal.default), parentVertices = this.vertices, adjustedTextureCoordinateTuple = (0, _texture).calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, this.textureCoordinateTuples), edges = (0, _facet1).calculateEdges(vertices, _edge.default), imageName = this.imageName, textureCoordinateTuples = adjustedTextureCoordinateTuple;
                texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              }
              return texturedFacet;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
              vertices = (0, _facet1).cloneVertices(vertices);
              normal = (0, _facet1).cloneNormal(normal);
              edges = (0, _facet1).cloneEdges(edges);
              var imageName = this.imageName, textureCoordinateTuples = (0, _texture).cloneTextureCoordinateTuples(this.textureCoordinateTuples), texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              return texturedFacet;
            }
          }
        ], [
          {
            key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError",
            value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, marginOfError) {
              var texturedFacet = null;
              var vertices = (0, _vertices).verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default);
                texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              }
              return texturedFacet;
            }
          }
        ]);
        return TexturedFacet2;
      }(_facet.default);
      exports.default = TexturedFacet;
    }
  });

  // lib/element/canvas/textured.js
  var require_textured2 = __commonJS({
    "lib/element/canvas/textured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _canvas = _interopRequireDefault2(require_canvas());
      var _textured = _interopRequireDefault2(require_textured());
      var _array = require_array2();
      var _vector = require_vector();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
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
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      var _CanvasElement;
      var TexturedCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(TexturedCanvasElement2, CanvasElement);
        function TexturedCanvasElement2(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
          _classCallCheck(this, TexturedCanvasElement2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedCanvasElement2).call(this, transform, facets, mask, hidden));
          _this.coordinates = coordinates;
          _this.indexes = indexes;
          _this.imageName = imageName;
          _this.textureCoordinates = textureCoordinates;
          return _this;
        }
        _createClass(TexturedCanvasElement2, [
          {
            key: "magnify",
            value: function magnify(magnification) {
              var coordinateTuples = this.coordinates;
              coordinateTuples = coordinateTuples.map(function(coordinateTuple) {
                coordinateTuple = (0, _vector).scale3(coordinateTuple, magnification);
                return coordinateTuple;
              });
              this.coordinates = coordinateTuples;
              _get(_getPrototypeOf(TexturedCanvasElement2.prototype), "magnify", this).call(this, magnification);
            }
          },
          {
            key: "createFacets",
            value: function createFacets(hidden, marginOfError) {
              hidden = _get(_getPrototypeOf(TexturedCanvasElement2.prototype), "createFacets", this).call(this, hidden, marginOfError);
              if (!hidden) {
                var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets1, indexTuple, index) {
                  var vertexTextureCoordinateTuples = this.textureCoordinates[index], coordinateTuples = this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, this.imageName, marginOfError), facet = texturedFacet;
                  if (facet !== null) {
                    (0, _array).add(facets1, facet);
                  }
                  return facets1;
                }.bind(this), []);
                this.setFacets(facets);
              }
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var facets = this.getFacets();
              textureRenderer.addFacets(facets);
              _get(_getPrototypeOf(TexturedCanvasElement2.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
                remainingArguments[_key - 6] = arguments[_key];
              }
              return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                Class,
                properties,
                coordinates,
                indexes,
                imageName,
                textureCoordinates
              ].concat(_toConsumableArray(remainingArguments)));
            }
          }
        ]);
        return TexturedCanvasElement2;
      }(_canvas.default);
      exports.default = TexturedCanvasElement;
    }
  });

  // lib/index.js
  var require_lib = __commonJS({
    "lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _react = _interopRequireDefault2(require_react());
      var _canvas = _interopRequireDefault2(require_canvas2());
      var _mask = _interopRequireDefault2(require_mask());
      var _part = _interopRequireDefault2(require_part());
      var _scene = _interopRequireDefault2(require_scene());
      var _camera = _interopRequireDefault2(require_camera());
      var _gaming = _interopRequireDefault2(require_gaming());
      var _design = _interopRequireDefault2(require_design());
      var _canvas1 = _interopRequireDefault2(require_canvas());
      var _preload = _interopRequireDefault2(require_preload());
      var _coloured = _interopRequireDefault2(require_coloured2());
      var _textured = _interopRequireDefault2(require_textured2());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      Object.defineProperty(exports, "React", {
        enumerable: true,
        get: function() {
          return _react.default;
        }
      });
      Object.defineProperty(exports, "Canvas", {
        enumerable: true,
        get: function() {
          return _canvas.default;
        }
      });
      Object.defineProperty(exports, "Mask", {
        enumerable: true,
        get: function() {
          return _mask.default;
        }
      });
      Object.defineProperty(exports, "Part", {
        enumerable: true,
        get: function() {
          return _part.default;
        }
      });
      Object.defineProperty(exports, "Scene", {
        enumerable: true,
        get: function() {
          return _scene.default;
        }
      });
      Object.defineProperty(exports, "Camera", {
        enumerable: true,
        get: function() {
          return _camera.default;
        }
      });
      Object.defineProperty(exports, "GamingCamera", {
        enumerable: true,
        get: function() {
          return _gaming.default;
        }
      });
      Object.defineProperty(exports, "DesignCamera", {
        enumerable: true,
        get: function() {
          return _design.default;
        }
      });
      Object.defineProperty(exports, "CanvasElement", {
        enumerable: true,
        get: function() {
          return _canvas1.default;
        }
      });
      Object.defineProperty(exports, "preloadUtilities", {
        enumerable: true,
        get: function() {
          return _preload.default;
        }
      });
      Object.defineProperty(exports, "ColouredCanvasElement", {
        enumerable: true,
        get: function() {
          return _coloured.default;
        }
      });
      Object.defineProperty(exports, "TexturedCanvasElement", {
        enumerable: true,
        get: function() {
          return _textured.default;
        }
      });
    }
  });

  // lib/xgl.js
  var require_xgl = __commonJS({
    "lib/xgl.js"() {
      "use strict";
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
      exports.default = void 0;
      var _index = require_lib();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
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
        function ColouredSquare2() {
          _classCallCheck(this, ColouredSquare2);
          return _possibleConstructorReturn(this, _getPrototypeOf(ColouredSquare2).apply(this, arguments));
        }
        _createClass(ColouredSquare2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _colour = properties.colour, colour = _colour === void 0 ? defaultColour : _colour, colouredSquare = _index.ColouredCanvasElement.fromProperties(ColouredSquare2, properties, coordinates, indexes, colour);
              return colouredSquare;
            }
          }
        ]);
        return ColouredSquare2;
      }(_index.ColouredCanvasElement);
      exports.default = ColouredSquare;
    }
  });

  // lib/example/element/face.js
  var require_face = __commonJS({
    "lib/example/element/face.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _colouredSquare = _interopRequireDefault2(require_colouredSquare());
      function _interopRequireDefault2(obj) {
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
      exports.default = _default;
    }
  });

  // lib/example/element/cube.js
  var require_cube = __commonJS({
    "lib/example/element/cube.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _face = _interopRequireDefault2(require_face());
      function _interopRequireDefault2(obj) {
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
        var _colour = properties.colour, colour = _colour === void 0 ? defaultColour : _colour;
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
      exports.default = _default;
    }
  });

  // lib/example/cube.js
  var require_cube2 = __commonJS({
    "lib/example/cube.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _cube2 = _interopRequireDefault2(require_cube());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var cubeExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_cube2.default, {
          colour: [
            0,
            1,
            0
          ]
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      };
      var _default = cubeExample;
      exports.default = _default;
    }
  });

  // lib/example/element/texturedQuadrangle.js
  var require_texturedQuadrangle = __commonJS({
    "lib/example/element/texturedQuadrangle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
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
        function TexturedQuadrangle2() {
          _classCallCheck(this, TexturedQuadrangle2);
          return _possibleConstructorReturn(this, _getPrototypeOf(TexturedQuadrangle2).apply(this, arguments));
        }
        _createClass(TexturedQuadrangle2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _imageName = properties.imageName, imageName = _imageName === void 0 ? defaultImageName : _imageName, _textureCoordinates = properties.textureCoordinates, textureCoordinates = _textureCoordinates === void 0 ? defaultTextureCoordinates : _textureCoordinates, texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle2, properties, coordinates, indexes, imageName, textureCoordinates);
              return texturedQuadrangle;
            }
          }
        ]);
        return TexturedQuadrangle2;
      }(_index.TexturedCanvasElement);
      exports.default = TexturedQuadrangle;
    }
  });

  // lib/example/tiling.js
  var require_tiling = __commonJS({
    "lib/example/tiling.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _colouredSquare = _interopRequireDefault2(require_colouredSquare());
      var _texturedQuadrangle = _interopRequireDefault2(require_texturedQuadrangle());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var preloadImages = _index.preloadUtilities.preloadImages;
      var tilingExample = function() {
        preloadImages(function(images, imageNames) {
          var canvas = new _index.Canvas();
          return /* @__PURE__ */ React.createElement(_index.Scene, {
            canvas
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
              0
            ]
          })), /* @__PURE__ */ React.createElement(_index.Part, {
            images,
            imageNames,
            imageTiling: true
          }, /* @__PURE__ */ React.createElement(_texturedQuadrangle.default, {
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
      exports.default = _default;
    }
  });

  // lib/example/simple.js
  var require_simple = __commonJS({
    "lib/example/simple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _colouredSquare = _interopRequireDefault2(require_colouredSquare());
      function _interopRequireDefault2(obj) {
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
      exports.default = _default;
    }
  });

  // lib/example/masking.js
  var require_masking2 = __commonJS({
    "lib/example/masking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _cube2 = _interopRequireDefault2(require_cube());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var maskingExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Mask, {
          reference: "quarter-sized-cube"
        }, /* @__PURE__ */ React.createElement(_cube2.default, {
          scale: [
            1 / 4,
            1 / 4,
            1 / 4
          ]
        })), /* @__PURE__ */ React.createElement(_index.Mask, {
          reference: "half-sized-cube"
        }, /* @__PURE__ */ React.createElement(_cube2.default, {
          scale: [
            1 / 2,
            1 / 2,
            1 / 2
          ],
          maskReference: "quarter-sized-cube"
        })), /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_cube2.default, {
          maskReference: "half-sized-cube"
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      };
      var _default = maskingExample;
      exports.default = _default;
    }
  });

  // lib/example/element/texturedTriangle.js
  var require_texturedTriangle = __commonJS({
    "lib/example/element/texturedTriangle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
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
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
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
          _setPrototypeOf(subClass, superClass);
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
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
        function TexturedTriangle2() {
          _classCallCheck(this, TexturedTriangle2);
          return _possibleConstructorReturn(this, _getPrototypeOf(TexturedTriangle2).apply(this, arguments));
        }
        _createClass(TexturedTriangle2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _imageName = properties.imageName, imageName = _imageName === void 0 ? defaultImageName : _imageName, _textureCoordinates = properties.textureCoordinates, textureCoordinates = _textureCoordinates === void 0 ? defaultTextureCoordinates : _textureCoordinates, texturedTriangle = _index.TexturedCanvasElement.fromProperties(TexturedTriangle2, properties, coordinates, indexes, imageName, textureCoordinates);
              return texturedTriangle;
            }
          }
        ]);
        return TexturedTriangle2;
      }(_index.TexturedCanvasElement);
      exports.default = TexturedTriangle;
    }
  });

  // lib/example/element/side.js
  var require_side = __commonJS({
    "lib/example/element/side.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _texturedTriangle = _interopRequireDefault2(require_texturedTriangle());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Side = function(properties) {
        return React.createElement(_texturedTriangle.default, {
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
      exports.default = _default;
    }
  });

  // lib/example/element/pyramid.js
  var require_pyramid = __commonJS({
    "lib/example/element/pyramid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _side = _interopRequireDefault2(require_side());
      function _interopRequireDefault2(obj) {
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
      exports.default = _default;
    }
  });

  // lib/example/pyramid.js
  var require_pyramid2 = __commonJS({
    "lib/example/pyramid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _pyramid2 = _interopRequireDefault2(require_pyramid());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var preloadImageMap = _index.preloadUtilities.preloadImageMap;
      var pyramidExample = function() {
        preloadImageMap(function(imageMap, imageMapJSON) {
          var canvas = new _index.Canvas();
          return /* @__PURE__ */ React.createElement(_index.Scene, {
            canvas
          }, /* @__PURE__ */ React.createElement(_index.Part, {
            imageMap,
            imageMapJSON
          }, /* @__PURE__ */ React.createElement(_pyramid2.default, null)), /* @__PURE__ */ React.createElement(_index.GamingCamera, null));
        });
      };
      var _default = pyramidExample;
      exports.default = _default;
    }
  });

  // lib/example.js
  "use strict";
  require_xgl();
  var _cube = _interopRequireDefault(require_cube2());
  var _tiling = _interopRequireDefault(require_tiling());
  var _simple = _interopRequireDefault(require_simple());
  var _masking = _interopRequireDefault(require_masking2());
  var _pyramid = _interopRequireDefault(require_pyramid2());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var example = window.location.search.substring(1);
  switch (example) {
    case "cube":
      (0, _cube).default();
      break;
    case "tiling":
      (0, _tiling).default();
      break;
    case "simple":
      (0, _simple).default();
      break;
    case "masking":
      (0, _masking).default();
      break;
    case "pyramid":
      (0, _pyramid).default();
      break;
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZWxlbWVudC5qcyIsICJzcmMvbWF0aHMvdmVjdG9yLmpzIiwgInNyYy9tYXRocy9tYXRyaXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvcGF0aC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvaHR0cC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXN5bmNocm9ub3VzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hamF4LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2Jyb3dzZXIuanMiLCAic3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJzcmMvdXRpbGl0aWVzL21hdHJpeC5qcyIsICJzcmMvdXRpbGl0aWVzL3RyYW5zZm9ybS5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL2Z1bmN0aW9uLmpzIiwgInNyYy9yZWFjdC5qcyIsICJzcmMvZGVmYXVsdHMuanMiLCAic3JjL21peGlucy9kZXB0aC5qcyIsICJzcmMvZXJyb3JzLmpzIiwgInNyYy9taXhpbnMvc2hhZGVyLmpzIiwgInNyYy9taXhpbnMvYnVmZmVyLmpzIiwgInNyYy9taXhpbnMvY29sb3VyLmpzIiwgInNyYy9taXhpbnMvbWF0cml4LmpzIiwgInNyYy9taXhpbnMvdGV4dHVyZS5qcyIsICJzcmMvbWl4aW5zL3Byb2dyYW0uanMiLCAic3JjL21peGlucy9ibGVuZGluZy5qcyIsICJzcmMvbWl4aW5zL2xvY2F0aW9uLmpzIiwgInNyYy9jYW52YXMuanMiLCAic3JjL3ByaW1pdGl2ZS9lZGdlLmpzIiwgInNyYy91dGlsaXRpZXMvbWlkUG9pbnQuanMiLCAic3JjL3ByaW1pdGl2ZS9lZGdlL21hc2tpbmcuanMiLCAic3JjL3V0aWxpdGllcy9hcHByb3hpbWF0ZS5qcyIsICJzcmMvdXRpbGl0aWVzL2FuZ2xlLmpzIiwgInNyYy91dGlsaXRpZXMvcXVhdGVybmlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL3JvdGF0aW9uLmpzIiwgInNyYy91dGlsaXRpZXMvaW50ZXJzZWN0aW9uLmpzIiwgInNyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwgInNyYy91dGlsaXRpZXMvdmVydGljZXMuanMiLCAic3JjL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQuanMiLCAic3JjL2VsZW1lbnQvbWFzay5qcyIsICJzcmMvcmVuZGVyZXIuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyIsICJzcmMvcmVuZGVyZXIvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsICJzcmMvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcC5qcyIsICJzcmMvZWxlbWVudC9wYXJ0LmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS5qcyIsICJzcmMva2V5Q29kZXMuanMiLCAic3JjL2V2ZW50VHlwZXMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMva2V5RXZlbnRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL21vdXNlRXZlbnRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dC5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnQuanMiLCAic3JjL2VsZW1lbnQvc2NlbmUuanMiLCAic3JjL3V0aWxpdGllcy9vZmZzZXRzLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3Bhbi5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy90aWx0LmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvem9vbS5qcyIsICJzcmMvZWxlbWVudC9jYW1lcmEvZGVzaWduLmpzIiwgInNyYy91dGlsaXRpZXMvcHJlbG9hZC5qcyIsICJzcmMvcHJpbWl0aXZlL25vcm1hbC5qcyIsICJzcmMvcHJpbWl0aXZlL3ZlcnRleC5qcyIsICJzcmMvdXRpbGl0aWVzL2ZhY2V0LmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvY29sb3VyZWQuanMiLCAic3JjL3V0aWxpdGllcy90ZXh0dXJlLmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMveGdsLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9mYWNlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyIsICJzcmMvZXhhbXBsZS9jdWJlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIiwgInNyYy9leGFtcGxlL3RpbGluZy5qcyIsICJzcmMvZXhhbXBsZS9zaW1wbGUuanMiLCAic3JjL2V4YW1wbGUvbWFza2luZy5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkVHJpYW5nbGUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9zaWRlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvcHlyYW1pZC5qcyIsICJzcmMvZXhhbXBsZS9weXJhbWlkLmpzIiwgInNyYy9leGFtcGxlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFdJRFRIID0gXCJ3aWR0aFwiO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IFwiaGVpZ2h0XCI7XG5leHBvcnQgY29uc3QgQ0FOVkFTID0gXCJjYW52YXNcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBBTk9OWU1PVVMgPSBcImFub255bW91c1wiO1xuZXhwb3J0IGNvbnN0IFZFUlRJQ0VTX0xFTkdUSCA9IDM7XG5leHBvcnQgY29uc3QgTUlOSU1VTV9ESVNUQU5DRSA9IDE7XG5leHBvcnQgY29uc3QgSU5WRVJUX01VTFRJUExJRVIgPSAtMTtcbmV4cG9ydCBjb25zdCBBTkdMRVNfTVVMVElQTElFUiA9IDAuMDE7XG5leHBvcnQgY29uc3QgT0ZGU0VUX01VTFRJUExJRVIgPSAwLjI1O1xuZXhwb3J0IGNvbnN0IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIk1PWl9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8yKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8zKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QzKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0gKyB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IGF4ID0gdmVjdG9yQVswXSwgYXkgPSB2ZWN0b3JBWzFdLCBheiA9IHZlY3RvckFbMl0sXG4gICAgICAgIGJ4ID0gdmVjdG9yQlswXSwgYnkgPSB2ZWN0b3JCWzFdLCBieiA9IHZlY3RvckJbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBheSAqIGJ6IC0gYXogKiBieSxcbiAgICBheiAqIGJ4IC0gYXggKiBieixcbiAgICBheCAqIGJ5IC0gYXkgKiBieCxcblxuICBdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM10sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcbiAgICAgIHcgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDIodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogLTEsXG4gICAgdmVjdG9yWzFdICogLTEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiAtMSxcbiAgICB2ZWN0b3JbMV0gKiAtMSxcbiAgICB2ZWN0b3JbMl0gKiAtMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3Q0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIC0xLFxuICAgIHZlY3RvclsxXSAqIC0xLFxuICAgIHZlY3RvclsyXSAqIC0xLFxuICAgIHZlY3RvclszXSAqIC0xLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGU0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSxcbiAgICB2ZWN0b3JbMV0sXG4gICAgdmVjdG9yWzJdXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUzKHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbM10gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSArIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAtIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAqIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzJdICogeSxcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTModmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbM10gKiB5ICsgbWF0cml4WzZdICogeixcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzRdICogeSArIG1hdHJpeFs3XSAqIHosXG4gICAgbWF0cml4WzJdICogeCArIG1hdHJpeFs1XSAqIHkgKyBtYXRyaXhbOF0gKiB6LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHggKyBtYXRyaXhbIDRdICogeSArIG1hdHJpeFsgOF0gKiB6ICsgbWF0cml4WzEyXSAqIHcsXG4gICAgbWF0cml4WyAxXSAqIHggKyBtYXRyaXhbIDVdICogeSArIG1hdHJpeFsgOV0gKiB6ICsgbWF0cml4WzEzXSAqIHcsXG4gICAgbWF0cml4WyAyXSAqIHggKyBtYXRyaXhbIDZdICogeSArIG1hdHJpeFsxMF0gKiB6ICsgbWF0cml4WzE0XSAqIHcsXG4gICAgbWF0cml4WyAzXSAqIHggKyBtYXRyaXhbIDddICogeSArIG1hdHJpeFsxMV0gKiB6ICsgbWF0cml4WzE1XSAqIHcsXG5cbiAgXSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBhMCA9IG1hdHJpeEFbMF0sXG4gICAgICAgIGExID0gbWF0cml4QVsxXSxcbiAgICAgICAgYTIgPSBtYXRyaXhBWzJdLFxuICAgICAgICBhMyA9IG1hdHJpeEFbM10sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcbiAgICAgICAgYTQgPSBtYXRyaXhBWzRdLFxuICAgICAgICBhNSA9IG1hdHJpeEFbNV0sXG4gICAgICAgIGE2ID0gbWF0cml4QVs2XSxcbiAgICAgICAgYTcgPSBtYXRyaXhBWzddLFxuICAgICAgICBhOCA9IG1hdHJpeEFbOF0sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdLFxuICAgICAgICBiNCA9IG1hdHJpeEJbNF0sXG4gICAgICAgIGI1ID0gbWF0cml4Qls1XSxcbiAgICAgICAgYjYgPSBtYXRyaXhCWzZdLFxuICAgICAgICBiNyA9IG1hdHJpeEJbN10sXG4gICAgICAgIGI4ID0gbWF0cml4Qls4XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NChtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0ICBhMCA9IG1hdHJpeEFbIDBdLFxuICAgICAgICAgYTEgPSBtYXRyaXhBWyAxXSxcbiAgICAgICAgIGEyID0gbWF0cml4QVsgMl0sXG4gICAgICAgICBhMyA9IG1hdHJpeEFbIDNdLFxuICAgICAgICAgYTQgPSBtYXRyaXhBWyA0XSxcbiAgICAgICAgIGE1ID0gbWF0cml4QVsgNV0sXG4gICAgICAgICBhNiA9IG1hdHJpeEFbIDZdLFxuICAgICAgICAgYTcgPSBtYXRyaXhBWyA3XSxcbiAgICAgICAgIGE4ID0gbWF0cml4QVsgOF0sXG4gICAgICAgICBhOSA9IG1hdHJpeEFbIDldLFxuICAgICAgICBhMTAgPSBtYXRyaXhBWzEwXSxcbiAgICAgICAgYTExID0gbWF0cml4QVsxMV0sXG4gICAgICAgIGExMiA9IG1hdHJpeEFbMTJdLFxuICAgICAgICBhMTMgPSBtYXRyaXhBWzEzXSxcbiAgICAgICAgYTE0ID0gbWF0cml4QVsxNF0sXG4gICAgICAgIGExNSA9IG1hdHJpeEFbMTVdLFxuXG4gICAgICAgICBiMCA9IG1hdHJpeEJbIDBdLFxuICAgICAgICAgYjEgPSBtYXRyaXhCWyAxXSxcbiAgICAgICAgIGIyID0gbWF0cml4QlsgMl0sXG4gICAgICAgICBiMyA9IG1hdHJpeEJbIDNdLFxuICAgICAgICAgYjQgPSBtYXRyaXhCWyA0XSxcbiAgICAgICAgIGI1ID0gbWF0cml4QlsgNV0sXG4gICAgICAgICBiNiA9IG1hdHJpeEJbIDZdLFxuICAgICAgICAgYjcgPSBtYXRyaXhCWyA3XSxcbiAgICAgICAgIGI4ID0gbWF0cml4QlsgOF0sXG4gICAgICAgICBiOSA9IG1hdHJpeEJbIDldLFxuICAgICAgICBiMTAgPSBtYXRyaXhCWzEwXSxcbiAgICAgICAgYjExID0gbWF0cml4QlsxMV0sXG4gICAgICAgIGIxMiA9IG1hdHJpeEJbMTJdLFxuICAgICAgICBiMTMgPSBtYXRyaXhCWzEzXSxcbiAgICAgICAgYjE0ID0gbWF0cml4QlsxNF0sXG4gICAgICAgIGIxNSA9IG1hdHJpeEJbMTVdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBtMCA9IG1hdHJpeFswXSxcbiAgICAgICAgbTEgPSBtYXRyaXhbMV0sXG4gICAgICAgIG0yID0gbWF0cml4WzJdLFxuICAgICAgICBtMyA9IG1hdHJpeFszXSxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IG0wICogbTMgLSBtMiAqIG0xO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICArbTMgLyBkZXRlcm1pbmFudCwgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WzBdLCBtMDEgPSBtYXRyaXhbMV0sIG0wMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTEwID0gbWF0cml4WzNdLCBtMTEgPSBtYXRyaXhbNF0sIG0xMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgbTIwID0gbWF0cml4WzZdLCBtMjEgPSBtYXRyaXhbN10sIG0yMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSAgbTIyICogbTExIC0gbTEyICogbTIxLFxuICAgICAgICBiMTEgPSAtbTIyICogbTEwICsgbTEyICogbTIwLFxuICAgICAgICBiMjEgPSAgbTIxICogbTEwIC0gbTExICogbTIwLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAwICogYjAxICsgbTAxICogYjExICsgbTAyICogYjIxO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpIC8gZGV0ZXJtaW5hbnQsICggbTEyICogbTAxIC0gbTAyICogbTExKSAvIGRldGVybWluYW50LFxuICAgICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTIyICogbTAwIC0gbTAyICogbTIwKSAvIGRldGVybWluYW50LCAoLW0xMiAqIG0wMCArIG0wMiAqIG0xMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LCAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKCBtMTEgKiBtMDAgLSBtMDEgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WyAwXSwgbTAxID0gbWF0cml4WyAxXSwgbTAyID0gbWF0cml4WyAyXSwgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgbTEwID0gbWF0cml4WyA0XSwgbTExID0gbWF0cml4WyA1XSwgbTEyID0gbWF0cml4WyA2XSwgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgbTIwID0gbWF0cml4WyA4XSwgbTIxID0gbWF0cml4WyA5XSwgbTIyID0gbWF0cml4WzEwXSwgbTIzID0gbWF0cml4WzExXSxcbiAgICAgICAgbTMwID0gbWF0cml4WzEyXSwgbTMxID0gbWF0cml4WzEzXSwgbTMyID0gbWF0cml4WzE0XSwgbTMzID0gbWF0cml4WzE1XSxcblxuICAgICAgICBiMDAgPSBtMDAgKiBtMTEgLSBtMDEgKiBtMTAsXG4gICAgICAgIGIwMSA9IG0wMCAqIG0xMiAtIG0wMiAqIG0xMCxcbiAgICAgICAgYjAyID0gbTAwICogbTEzIC0gbTAzICogbTEwLFxuICAgICAgICBiMDMgPSBtMDEgKiBtMTIgLSBtMDIgKiBtMTEsXG4gICAgICAgIGIwNCA9IG0wMSAqIG0xMyAtIG0wMyAqIG0xMSxcbiAgICAgICAgYjA1ID0gbTAyICogbTEzIC0gbTAzICogbTEyLFxuICAgICAgICBiMDYgPSBtMjAgKiBtMzEgLSBtMjEgKiBtMzAsXG4gICAgICAgIGIwNyA9IG0yMCAqIG0zMiAtIG0yMiAqIG0zMCxcbiAgICAgICAgYjA4ID0gbTIwICogbTMzIC0gbTIzICogbTMwLFxuICAgICAgICBiMDkgPSBtMjEgKiBtMzIgLSBtMjIgKiBtMzEsXG4gICAgICAgIGIxMCA9IG0yMSAqIG0zMyAtIG0yMyAqIG0zMSxcbiAgICAgICAgYjExID0gbTIyICogbTMzIC0gbTIzICogbTMyLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICAobTExICogYjExIC0gbTEyICogYjEwICsgbTEzICogYjA5KSAvIGRldGVybWluYW50LCAobTAyICogYjEwIC0gbTAxICogYjExIC0gbTAzICogYjA5KSAvIGRldGVybWluYW50LCAobTMxICogYjA1IC0gbTMyICogYjA0ICsgbTMzICogYjAzKSAvIGRldGVybWluYW50LCAobTIyICogYjA0IC0gbTIxICogYjA1IC0gbTIzICogYjAzKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMiAqIGIwOCAtIG0xMCAqIGIxMSAtIG0xMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wMCAqIGIxMSAtIG0wMiAqIGIwOCArIG0wMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0zMiAqIGIwMiAtIG0zMCAqIGIwNSAtIG0zMyAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG0yMCAqIGIwNSAtIG0yMiAqIGIwMiArIG0yMyAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTAgKiBiMTAgLSBtMTEgKiBiMDggKyBtMTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDEgKiBiMDggLSBtMDAgKiBiMTAgLSBtMDMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzAgKiBiMDQgLSBtMzEgKiBiMDIgKyBtMzMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjEgKiBiMDIgLSBtMjAgKiBiMDQgLSBtMjMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTExICogYjA3IC0gbTEwICogYjA5IC0gbTEyICogYjA2KSAvIGRldGVybWluYW50LCAobTAwICogYjA5IC0gbTAxICogYjA3ICsgbTAyICogYjA2KSAvIGRldGVybWluYW50LCAobTMxICogYjAxIC0gbTMwICogYjAzIC0gbTMyICogYjAwKSAvIGRldGVybWluYW50LCAobTIwICogYjAzIC0gbTIxICogYjAxICsgbTIyICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbMl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzNdLCBtYXRyaXhbNl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs3XSxcbiAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XSwgbWF0cml4WzhdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdLCBtYXRyaXhbIDRdLCBtYXRyaXhbIDhdLCBtYXRyaXhbMTJdLFxuICAgIG1hdHJpeFsgMV0sIG1hdHJpeFsgNV0sIG1hdHJpeFsgOV0sIG1hdHJpeFsxM10sXG4gICAgbWF0cml4WyAyXSwgbWF0cml4WyA2XSwgbWF0cml4WzEwXSwgbWF0cml4WzE0XSxcbiAgICBtYXRyaXhbIDNdLCBtYXRyaXhbIDddLCBtYXRyaXhbMTFdLCBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCwgbWF0cml4WyAxXSAqIHgsIG1hdHJpeFsgMl0gKiB4LCBtYXRyaXhbIDNdICogeCxcbiAgICBtYXRyaXhbIDRdICogeSwgbWF0cml4WyA1XSAqIHksIG1hdHJpeFsgNl0gKiB5LCBtYXRyaXhbIDddICogeSxcbiAgICBtYXRyaXhbIDhdICogeiwgbWF0cml4WyA5XSAqIHosIG1hdHJpeFsxMF0gKiB6LCBtYXRyaXhbMTFdICogeixcbiAgICBtYXRyaXhbMTJdICogMSwgbWF0cml4WzEzXSAqIDEsIG1hdHJpeFsxNF0gKiAxLCBtYXRyaXhbMTVdICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgICBtMjMgPSBtYXRyaXhbMTFdLFxuXG4gICAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgbTAwICogYjAwICsgbTEwICogYjAxICsgbTIwICogYjAyLCBtMDEgKiBiMDAgKyBtMTEgKiBiMDEgKyBtMjEgKiBiMDIsIG0wMiAqIGIwMCArIG0xMiAqIGIwMSArIG0yMiAqIGIwMiwgbTAzICogYjAwICsgbTEzICogYjAxICsgbTIzICogYjAyLFxuICAgICAgbTAwICogYjEwICsgbTEwICogYjExICsgbTIwICogYjEyLCBtMDEgKiBiMTAgKyBtMTEgKiBiMTEgKyBtMjEgKiBiMTIsIG0wMiAqIGIxMCArIG0xMiAqIGIxMSArIG0yMiAqIGIxMiwgbTAzICogYjEwICsgbTEzICogYjExICsgbTIzICogYjEyLFxuICAgICAgbTAwICogYjIwICsgbTEwICogYjIxICsgbTIwICogYjIyLCBtMDEgKiBiMjAgKyBtMTEgKiBiMjEgKyBtMjEgKiBiMjIsIG0wMiAqIGIyMCArIG0xMiAqIGIyMSArIG0yMiAqIGIyMiwgbTAzICogYjIwICsgbTEzICogYjIxICsgbTIzICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTJdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxM10sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE0XSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcblxuICAgICAgICBtMDAgPSBtYXRyaXhbIDBdLFxuICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICBtMTIgPSBtYXRyaXhbIDZdLFxuICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICBtMjEgPSBtYXRyaXhbIDldLFxuICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICBtMjMgPSBtYXRyaXhbMTFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTExLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjMsXG4gICAgbTAwICogeCArIG0xMCAqIHkgKyBtMjAgKiB6ICsgbWF0cml4WzEyXSwgbTAxICogeCArIG0xMSAqIHkgKyBtMjEgKiB6ICsgbWF0cml4WzEzXSwgbTAyICogeCArIG0xMiAqIHkgKyBtMjIgKiB6ICsgbWF0cml4WzE0XSwgbTAzICogeCArIG0xMyAqIHkgKyBtMjMgKiB6ICsgbWF0cml4WzE1XSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmaWVsZE9mVmlldyAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcblxuICByZXR1cm4gKFtcblxuICAgIGYgLyBhc3BlY3RSYXRpbywgMCwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICBmLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICh6RmFyICsgek5lYXIpICogbmYsICAgIC0xLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKDIgKiB6RmFyICogek5lYXIpICogbmYsIDAsXG5cbiAgXSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVQgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1QgPSBcIlBPU1RcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0MgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBEQVRBX0VWRU5UID0gXCJkYXRhXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEUgPSBcImNvbnRlbnQtdHlwZVwiO1xuZXhwb3J0IGNvbnN0IFVURjhfRU5DT0RJTkcgPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9BVFRFTVBUUyA9IDM7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTiA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRU5DT0RJTkcgPSBVVEY4X0VOQ09ESU5HO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBMSU5FX0ZFRURfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9BTlNXRVIgPSBFTVBUWV9TVFJJTkc7IC8vL1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkNfQkFTRV9FWFRFTlNJT04gPSBFTVBUWV9TVFJJTkc7ICAvLy9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xPR19ESVJFQ1RPUllfUEFUSCA9IG51bGw7XG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0dfRklMRV9CQVNFX05BTUUgPSBcImRlZmF1bHRcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTt9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheTEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheTIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFtlbGVtZW50T3JBcnJheTJdO1xuICBcbiAgcHVzaChhcnJheTEsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGxldCBzdGFydDtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgY29uc3QgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgQ09MT05fQ0hBUkFDVEVSLCBBTVBFUlNBTkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IG93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSxcbiAgICAgICAgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgb3ZlcndyaXR0ZW4gPSBvd25Qcm9wZXJ0eU5hbWVzLnNvbWUoKG93blByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9IG93blByb3BlcnR5TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgaGVhZGVyc1tvd25Qcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKCFvdmVyd3JpdHRlbikge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBvd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksXG4gICAgICAgIGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXMgPSBvd25Qcm9wZXJ0eU5hbWVzLm1hcCgob3duUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID0gb3duUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICByZXR1cm4gbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lc0luY2x1ZGVzTG93ZXJjYXNlTmFtZSA9IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXMuaW5jbHVkZXMobG93ZXJjYXNlTmFtZSk7XG5cbiAgaWYgKCFsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzSW5jbHVkZXNMb3dlcmNhc2VOYW1lKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3J0RnJvbUhvc3QoaG9zdCkge1xuICBsZXQgcG9ydDtcblxuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW15cXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGluZGV4ID0gc2Vjb25kTWF0Y2guaW5kZXhPZihDT0xPTl9DSEFSQUNURVIpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjb25zdCBzZWN1cmUgPSBzZWN1cmVGcm9tSG9zdChob3N0KTtcblxuICAgIHBvcnQgPSBzZWN1cmUgPyA0NDMgOiA4MDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDEsXG4gICAgICAgICAgcG9ydFN0cmluZyA9IHNlY29uZE1hdGNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgICBwb3J0ID0gTnVtYmVyKHBvcnRTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cmVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IHNlY3VyZSA9IC9eaHR0cHM6XFwvXFwvLy50ZXN0KGhvc3QpO1xuXG4gIHJldHVybiBzZWN1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3N0bmFtZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteOlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaG9zdG5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGhvc3RuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3ZlcndyaXRlLFxuICB1bmRlcndyaXRlLFxuICBwb3J0RnJvbUhvc3QsXG4gIHNlY3VyZUZyb21Ib3N0LFxuICBob3N0bmFtZUZyb21Ib3N0LFxuICBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzLFxuICB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnNcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2ssIGluZGV4KSA9PiB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHR0cFwiO1xuaW1wb3J0IHsgR0VULCBQT1NULCBBQ0NFUFQsIENPTlRFTlRfVFlQRSwgQVBQTElDQVRJT05fSlNPTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHBhcmFtZXRlcnMsIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBHRVQsXG4gICAgICAgIGJvZHkgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycyk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycyk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlKGhlYWRlcnMpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT04pIHtcbiAgICBjb25zdCBqc29uID0gYm9keSwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGJvZHkgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlVGV4dCB9ID0geG1sSHR0cFJlcXVlc3Q7XG5cbiAgICBpZiAocmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBsZXQgYm9keSA9IHJlc3BvbnNlVGV4dDtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBib2R5LCAgLy8vXG4gICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgICAgICBib2R5ID0ganNvbjsgIC8vL1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGJvZHkgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soYm9keSwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBULCBhY2NlcHQpO1xuICB9XG5cbiAgaWYgKGNvbnRlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihDT05URU5UX1RZUEUsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChib2R5ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChib2R5KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycykge1xuICBjb25zdCBuYW1lID0gQUNDRVBULCAgLy8vXG4gICAgICAgIHZhbHVlID0gQVBQTElDQVRJT05fSlNPTjsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEUsICAvLy9cbiAgICAgICAgdmFsdWUgPSBBUFBMSUNBVElPTl9KU09OOyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHR0cFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9odHRwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FqYXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIHB1c2gsIG1lcmdlLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXksIGVsZW1lbnQpIHtcbiAgYXJyYXkucHVzaChlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlkZW50aXR5NCwgc2NhbGU0LCBpbnZlcnQ0LCByb3RhdGU0LCB0cmFuc2xhdGU0LCB0cmFuc3Bvc2U0LCBwZXJzcGVjdGl2ZTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIgPSBmYWxzZSkge1xuICBsZXQgcm90YXRpb25zTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gdGhpcmQoYW5nbGVzKSxcbiAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZSwgIC8vLy9cbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGUsIC8vL1xuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlLCAgLy8vXG4gICAgICAgIHhBeGlzID0gWyAxLCAwLCAwIF0sXG4gICAgICAgIHlBeGlzID0gWyAwLCAxLCAwIF0sXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF07XG5cbiAgaWYgKHJldmVyc2VPcmRlcikge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICB9IGVsc2Uge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICB9XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxhciA9IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSLCAvLy9cbiAgICAgICAgYW5nbGVzID0gc2NhbGUzKHJvdGF0aW9ucywgc2NhbGFyKSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpO1xuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpIHtcbiAgbGV0IG5vcm1hbHNNYXRyaXggPSBpbnZlcnQ0KHJvdGF0aW9uc01hdHJpeCk7IC8vL1xuXG4gIG5vcm1hbHNNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbHNNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpIHtcbiAgY29uc3QgekZhciA9IGNhbWVyYS5nZXRaRmFyKCksXG4gICAgICAgIHpOZWFyID0gY2FtZXJhLmdldFpOZWFyKCksXG4gICAgICAgIHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgZmllbGRPZlZpZXcgPSBjYW1lcmEuZ2V0RmllbGRPZlZpZXcoKSxcbiAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKTtcblxuICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbXVsdGlwbHk0IH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtNCB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHNjYWxlTWF0cml4RnJvbVNjYWxlLCBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbiwgcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSB7XG4gIGxldCBtYXRyaXggPSBudWxsO1xuXG4gIGlmIChzY2FsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNjYWxlTWF0cml4ID0gc2NhbGVNYXRyaXhGcm9tU2NhbGUoc2NhbGUpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgc2NhbGVNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQoc2NhbGVNYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBpZiAocm90YXRpb25zICE9PSBudWxsKSB7XG4gICAgY29uc3Qgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbVJvdGF0aW9ucyhyb3RhdGlvbnMpO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgcm90YXRpb25zTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHJvdGF0aW9uc01hdHJpeCwgbWF0cml4KTtcblxuICB9XG5cbiAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgcG9zaXRpb25NYXRyaXggOlxuICAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHBvc2l0aW9uTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmb3JtID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHZlY3RvciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB0cmFuc2Zvcm00KFsgLi4udmVjdG9yLCAxIF0sIG1hdHJpeCkuc2xpY2UoMCwgMyk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hc2tSZWZlcmVuY2UgPSBtYXNrUmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgZ2V0TWFza1JlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5oaWRkZW47XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFza1JlZmVyZW5jZSwgbWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBtYXNrID0gdGhpcy5maW5kTWFzayhtYXNrUmVmZXJlbmNlLCBtYXNrcyk7XG5cbiAgICBpZiAobWFzayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRNYXNrKG1hc2tSZWZlcmVuY2UsIG1hc2tzKSB7XG4gICAgY29uc3QgbWFzayA9IG1hc2tzLmZpbmQoKG1hc2spID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IG1hc2suZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2UgPT09IG1hc2tSZWZlcmVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgaGlkZGVuID0gaGlkZGVuIHx8IHRoaXMuaGlkZGVuOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIGFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmFwcGx5TWFzayh0aGlzLm1hc2tSZWZlcmVuY2UsIG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICB7IHNjYWxlID0gbnVsbCwgcm90YXRpb25zID0gbnVsbCB9ID0gcHJvcGVydGllcztcblxuICAgIGxldCB7IHBvc2l0aW9uID0gbnVsbCB9ID0gcHJvcGVydGllcztcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBzY2FsZTMocG9zaXRpb24sIG1hZ25pZmljYXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcm90YXRpb25zLCBwb3NpdGlvbik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50Lm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG1hc2tSZWZlcmVuY2UgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBudWxsLCAvLy9cbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgbWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBmdW5jdGlvbkVsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZ1bmN0aW9uQ2FudmFzRWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb25FbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZsYXR0ZW4sIGd1YXJhbnRlZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTsgLy8vXG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGZ1bmMocHJvcGVydGllcykpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gRnVuY3Rpb25DYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgemVybzMgfSBmcm9tIFwiLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUiA9IDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9HID0gMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0IgPSAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQSA9IDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9IT1NUID0gXCJcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFUFRIID0gMS4wO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfWl9GQVIgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfWl9ORUFSID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0hJRERFTiA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRklFTERfT0ZfVklFVyA9IDQ1O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFHTklGSUNBVElPTiA9IDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX0FOR0xFUyA9IHplcm8yKCk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX09GRlNFVFMgPSB6ZXJvMygpO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SID0gMC4wMDAwMDAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSA9IDU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OID0gWyAwLCAwLCA1IF07XG5leHBvcnQgY29uc3QgREVGQVVMVF9ERUxUQV9NVUxUSVBMSUVSID0gMTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9ERVBUSCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5mdW5jdGlvbiBjbGVhckRlcHRoKGRlcHRoID0gREVGQVVMVF9ERVBUSCkge1xuICB0aGlzLmNvbnRleHQuY2xlYXJEZXB0aChkZXB0aCk7IFxufVxuXG5mdW5jdGlvbiBjbGVhckRlcHRoQnVmZmVyKCkge1xuICBjb25zdCB7IERFUFRIX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IERFUFRIX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5mdW5jdGlvbiBlbmFibGVEZXB0aFRlc3RpbmcoKSB7XG4gIGNvbnN0IHsgREVQVEhfVEVTVCwgTEVRVUFMIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gREVQVEhfVEVTVCxcbiAgICAgICAgZGVwdGhDb21wYXJpc29uRnVuY3Rpb24gPSBMRVFVQUw7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmRlcHRoRnVuYyhkZXB0aENvbXBhcmlzb25GdW5jdGlvbik7XG59XG5cbmNvbnN0IGRlcHRoTWl4aW5zID0ge1xuICBjbGVhckRlcHRoLFxuICBjbGVhckRlcHRoQnVmZmVyLFxuICBlbmFibGVEZXB0aFRlc3Rpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlcHRoTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgU0hBREVSX0VSUk9SID0gXCJVbmFibGUgdG8gY3JlYXRlIHRoZSBzaGFkZXIuXCI7XG5leHBvcnQgY29uc3QgV0VCX0dMX0NPTlRFWFRfRVJST1IgPSBcIlVuYWJsZSB0byBnZXQgdGhlIFdlYkdMIGNvbnRleHQuXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNIQURFUl9FUlJPUiB9IGZyb20gXCIuLi9lcnJvcnNcIjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKHR5cGUsIHNoYWRlclNvdXJjZSkge1xuICBjb25zdCB7IENPTVBJTEVfU1RBVFVTIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHBuYW1lID0gQ09NUElMRV9TVEFUVVMsXG4gICAgICAgIHNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIodHlwZSk7XG5cbiAgdGhpcy5jb250ZXh0LnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7XG5cbiAgdGhpcy5jb250ZXh0LmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcblxuICBjb25zdCBjb21waWxlU3RhdHVzID0gdGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHBuYW1lKTtcblxuICBpZiAoIWNvbXBpbGVTdGF0dXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoU0hBREVSX0VSUk9SKTtcbiAgfVxuXG4gIHJldHVybiBzaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IFZFUlRFWF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IFZFUlRFWF9TSEFERVIsXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIHZlcnRleFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIHZlcnRleFNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB7IEZSQUdNRU5UX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gRlJBR01FTlRfU0hBREVSLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKHR5cGUsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gZnJhZ21lbnRTaGFkZXI7XG59XG5cbmNvbnN0IHNoYWRlck1peGlucyA9IHtcbiAgY3JlYXRlU2hhZGVyLFxuICBjcmVhdGVWZXJ0ZXhTaGFkZXIsXG4gIGNyZWF0ZUZyYWdtZW50U2hhZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGFkZXJNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgdWludDE2QXJyYXkgPSBuZXcgVWludDE2QXJyYXkoZGF0YSksXG4gICAgICAgIGVsZW1lbnRCdWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIHVpbnQxNkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRFbGVtZW50QnVmZmVyKGVsZW1lbnRCdWZmZXIpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBFTEVNRU5UX0FSUkFZX0JVRkZFUjtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZGF0YSkge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyKCksXG4gICAgICAgIGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YSk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgZmxvYXQzMkFycmF5LCB1c2FnZSk7XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEJ1ZmZlcihidWZmZXIsIGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBGTE9BVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHR5cGUgPSBGTE9BVCxcbiAgICAgICAgbm9ybWFsaXplID0gZmFsc2UsXG4gICAgICAgIHN0cmlkZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDA7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBidWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGF0dHJpYnV0ZUxvY2F0aW9uLCBjb21wb25lbnRzLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlTG9jYXRpb24pO1xufVxuXG5jb25zdCBidWZmZXJNaXhpbnMgPSB7XG4gIGNyZWF0ZUVsZW1lbnRCdWZmZXIsXG4gIGJpbmRFbGVtZW50QnVmZmVyLFxuICBjcmVhdGVCdWZmZXIsXG4gIGJpbmRCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1ZmZlck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9SLCBERUZBVUxUX0csIERFRkFVTFRfQiwgREVGQVVMVF9BIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyKHIgPSBERUZBVUxUX1IsIGcgPSBERUZBVUxUX0csIGIgPSBERUZBVUxUX0IsIGEgPSBERUZBVUxUX0EpIHsgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IociwgZywgYiwgYSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDb2xvdXJCdWZmZXIoKSB7XG4gIGNvbnN0IHsgQ09MT1JfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gQ09MT1JfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmNvbnN0IGNvbG91ck1peGlucyA9IHtcbiAgY2xlYXJDb2xvdXIsXG4gIGNsZWFyQ29sb3VyQnVmZmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvdXJNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGFwcGx5TWF0cml4KHVuaWZvcm1Mb2NhdGlvbiwgbWF0cml4KSB7XG4gIGNvbnN0IHRyYW5zcG9zZSA9IGZhbHNlOyAgLy8vXG5cbiAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodW5pZm9ybUxvY2F0aW9uLCB0cmFuc3Bvc2UsIG1hdHJpeCk7XG59XG5cbmNvbnN0IG1hdHJpeE1peGlucyA9IHtcbiAgYXBwbHlNYXRyaXhcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hdHJpeE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDLFxuICAgICAgICAgTU9aX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyxcbiAgICAgICAgIFdFQktJVF9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpIHtcblx0Y29uc3QgeyBSR0JBLCBMSU5FQVIsIFVOU0lHTkVEX0JZVEUsIFRFWFRVUkUwLCBURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgVEVYVFVSRV9XUkFQX1QsIFVOUEFDS19GTElQX1lfV0VCR0wsIENMQU1QX1RPX0VER0UsIE5FQVJFU1QsIFJFUEVBVCwgVEVYVFVSRV9NSU5fRklMVEVSIH0gPSB0aGlzLmNvbnRleHQsXG5cdFx0XHRcdHRhcmdldCA9IFRFWFRVUkUwICsgaW5kZXgsXG5cdFx0XHRcdGxldmVsID0gMCxcblx0XHRcdFx0aW50ZXJuYWxGb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHRmb3JtYXQgPSBSR0JBLFxuXHRcdFx0XHR0eXBlID0gVU5TSUdORURfQllURSxcblx0XHRcdFx0dGV4dHVyZSA9IHRoaXMuY29udGV4dC5jcmVhdGVUZXh0dXJlKCk7XG5cbiAgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTtcblxuICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUoVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG5cbiAgdGhpcy5jb250ZXh0LnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIHRydWUpO1xuXG4gIHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKFRFWFRVUkVfMkQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZSk7XG5cbiAgaWYgKHJlcGVhdCkge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBSRVBFQVQpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBSRVBFQVQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIsIExJTkVBUik7XG5cblx0cmV0dXJuIHRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCkge1xuICBjb25zdCBleHRlbnNpb24gPSAoXG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQylcbiAgKTtcblxuICBpZiAoZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgeyBURVhUVVJFXzJEIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgeyBNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUIH0gPSBleHRlbnNpb24sXG4gICAgICAgICAgbWF4aW11bSA9IHRoaXMuY29udGV4dC5nZXRQYXJhbWV0ZXIoTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcblxuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJmKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBtYXhpbXVtKTtcbiAgfVxufVxuXG5jb25zdCB0ZXh0dXJlTWl4aW5zID0ge1xuICBjcmVhdGVUZXh0dXJlLFxuICBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGV4dHVyZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSB7XG4gIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHRoaXMuY29udGV4dC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuXG5mdW5jdGlvbiB1c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0ocHJvZ3JhbSk7XG59XG5cbmNvbnN0IHByb2dyYW1NaXhpbnMgPSB7XG4gIGNyZWF0ZVByb2dyYW0sXG4gIHVzZVByb2dyYW1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2dyYW1NaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGVuYWJsZUJsZW5kaW5nKCkge1xuICBjb25zdCB7IEJMRU5ELCBTUkNfQUxQSEEsIE9ORSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IEJMRU5ELFxuICAgICAgICBzb3VyY2VGYWN0b3IgPSBTUkNfQUxQSEEsXG4gICAgICAgIGRlc3RpbmF0aW9uRmFjdG9yID0gT05FO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5ibGVuZEZ1bmMoc291cmNlRmFjdG9yLCBkZXN0aW5hdGlvbkZhY3Rvcik7XG59XG5cbmNvbnN0IGJsZW5kaW5nTWl4aW5zID0ge1xuICBlbmFibGVCbGVuZGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYmxlbmRpbmdNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkge1xuICB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTtcbn1cblxuY29uc3QgbG9jYXRpb25NaXhpbnMgPSB7XG4gIGdldFVuaWZvcm1Mb2NhdGlvbixcbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24sXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25NaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkZXB0aE1peGlucyBmcm9tIFwiLi9taXhpbnMvZGVwdGhcIjtcbmltcG9ydCBzaGFkZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NoYWRlclwiO1xuaW1wb3J0IGJ1ZmZlck1peGlucyBmcm9tIFwiLi9taXhpbnMvYnVmZmVyXCI7XG5pbXBvcnQgY29sb3VyTWl4aW5zIGZyb20gXCIuL21peGlucy9jb2xvdXJcIjtcbmltcG9ydCBtYXRyaXhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdHJpeFwiO1xuaW1wb3J0IHRleHR1cmVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RleHR1cmVcIjtcbmltcG9ydCBwcm9ncmFtTWl4aW5zIGZyb20gXCIuL21peGlucy9wcm9ncmFtXCI7XG5pbXBvcnQgYmxlbmRpbmdNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2JsZW5kaW5nXCI7XG5pbXBvcnQgbG9jYXRpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2xvY2F0aW9uXCI7XG5cbmltcG9ydCB7IFdFQl9HTF9DT05URVhUX0VSUk9SIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBXSURUSCwgSEVJR0hULCBDQU5WQVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBDQU5WQVMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3RvciksXG4gICAgICAgICAgY29udGV4dCA9IGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQud2lkdGg7IH1cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGVpZ2h0OyB9XG5cbiAgZ2V0Q2xpZW50V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7IH1cblxuICBnZXRDbGllbnRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0OyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShXSURUSCwgd2lkdGgpOyB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKEhFSUdIVCwgaGVpZ2h0KTsgfVxuXG4gIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDA7XG5cbiAgICB0aGlzLnNldFdpZHRoKHdpZHRoKTtcblxuICAgIHRoaXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRGVwdGgoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyKCk7XG4gICAgdGhpcy5jbGVhckRlcHRoQnVmZmVyKCk7XG4gICAgdGhpcy5jbGVhckNvbG91ckJ1ZmZlcigpO1xuICB9XG5cbiAgcmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpO1xuXG4gICAgdGhpcy5hcHBseU1hdHJpeChvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBvZmZzZXRzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpIHtcbiAgICBjb25zdCB7IFRSSUFOR0xFUywgVU5TSUdORURfU0hPUlQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBtb2RlID0gVFJJQU5HTEVTLFxuICAgICAgICAgIHR5cGUgPSBVTlNJR05FRF9TSE9SVCxcbiAgICAgICAgICBjb3VudCA9IGZpbmlzaCAtIHN0YXJ0LFxuICAgICAgICAgIG9mZnNldCA9IHN0YXJ0ICogMjsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQuZHJhd0VsZW1lbnRzKG1vZGUsIGNvdW50LCB0eXBlLCBvZmZzZXQpXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBkZXB0aE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHNoYWRlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJ1ZmZlck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGNvbG91ck1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIG1hdHJpeE1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHRleHR1cmVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBwcm9ncmFtTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYmxlbmRpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBsb2NhdGlvbk1peGlucyk7XG5cbmZ1bmN0aW9uIGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgY29uc3QgY29udGV4dCA9IGRvbUVsZW1lbnQuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihXRUJfR0xfQ09OVEVYVF9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VidHJhY3QzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDsgIC8vL1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzczsgIC8vL1xuICAgICAgQ2xhc3MgPSBFZGdlOyAvLy9cbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uID0gdmVydGljZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uLCB2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNjYWxlZFZlcnRleFBvc2l0aW9uID0gc2NhbGUzKHZlcnRleFBvc2l0aW9uLCAxLzMpO1xuXG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IGFkZDMobWlkUG9pbnRQb3NpdGlvbiwgc2NhbGVkVmVydGV4UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG4gIH0sIFsgMCwgMCwgMCBdKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbikge1xuICBtaWRQb2ludFBvc2l0aW9uID0gWyAuLi5taWRQb2ludFBvc2l0aW9uLnNsaWNlKDAsIDIpLCAwIF07ICAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyB8fCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzOyAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgdGhpcmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAxLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8odmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMCwgbWFyZ2luT2ZFcnJvcik7IH1cblxuZnVuY3Rpb24gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZUEsIHZhbHVlQiwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB2YWx1ZUEgLSB2YWx1ZUIsXG4gICAgICAgIGFic29sdXRlRGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2UpLFxuICAgICAgICBhcHByb3hpbWF0ZWx5RXF1YWwgPSAoYWJzb2x1dGVEaWZmZXJlbmNlIDwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIGFwcHJveGltYXRlbHlFcXVhbDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSAtIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVDb3NpbmUpIHsgcmV0dXJuIE1hdGguc3FydCgoMSArIGFuZ2xlQ29zaW5lKSAvIDIpOyB9XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvdDMsIGNyb3NzMywgbm9ybWFsaXNlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lLCBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hbmdsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pIHsgcmV0dXJuIGhhbWlsdG9uUHJvZHVjdChoYW1pbHRvblByb2R1Y3Qocm90YXRpb25RdWF0ZXJuaW9uLCBpbWFnaW5hcnlRdWF0ZXJuaW9uKSwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMgPSByb3RhdGlvblF1YXRlcm5pb24sICAvLy9cbiAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmaXJzdChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gc2Vjb25kKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHRoaXJkKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBmb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBmb3VydGgocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgZmlyc3RSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLWZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudFxuICAgICAgICBdO1xuXG4gIHJldHVybiBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uOyAgLy8vXG5cbiAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCkge1xuICBjb25zdCBleHRlbnQgPSBub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXROb3JtYWwgPSBleHRlbnQsICAvLy9cbiAgICAgICAgekF4aXMgPSBbIDAsIDAsIDEgXSxcbiAgICAgICAgZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gZG90Myh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzID0gY3Jvc3MzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gZG90UHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLCAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSA9IE1hdGguYWJzKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZSksXG4gICAgICAgIGF4aXNPZlJvdGF0aW9uID0gYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyAxLCAwLCAwIF0gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uID0gbm9ybWFsaXNlMyhheGlzT2ZSb3RhdGlvbiksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMgPSB1bml0QXhpc09mUm90YXRpb24sICAvLy9cbiAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IGZpcnN0KHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHNlY29uZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCA9IHRoaXJkKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSkge1xuICBjb25zdCBtYXNraW5nRWRnZUV4dGVudCA9IG1hc2tpbmdFZGdlLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnQgPSBub3JtYWxpc2UzKG1hc2tpbmdFZGdlRXh0ZW50KSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyA9IHVuaXRNYXNraW5nRWRnZUV4dGVudCwgIC8vL1xuICAgICAgICBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvblNpbmUgPSBmaXJzdFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBzZWNvbmRVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IChhbmdsZU9mUm90YXRpb25TaW5lID4gMCApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK2NhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLWNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uO1xufVxuXG5mdW5jdGlvbiBoYW1pbHRvblByb2R1Y3QocXVhdGVybmlvbkEsIHF1YXRlcm5pb25CKSB7XG4gIGNvbnN0IGExID0gcXVhdGVybmlvbkFbMF0sXG4gICAgICAgIGIxID0gcXVhdGVybmlvbkFbMV0sXG4gICAgICAgIGMxID0gcXVhdGVybmlvbkFbMl0sXG4gICAgICAgIGQxID0gcXVhdGVybmlvbkFbM10sXG4gICAgICAgIGEyID0gcXVhdGVybmlvbkJbMF0sXG4gICAgICAgIGIyID0gcXVhdGVybmlvbkJbMV0sXG4gICAgICAgIGMyID0gcXVhdGVybmlvbkJbMl0sXG4gICAgICAgIGQyID0gcXVhdGVybmlvbkJbM10sXG4gICAgICAgIGEgPSBhMSAqIGEyIC0gYjEgKiBiMiAtIGMxICogYzIgLSBkMSAqIGQyLFxuICAgICAgICBiID0gYTEgKiBiMiArIGIxICogYTIgKyBjMSAqIGQyIC0gZDEgKiBjMixcbiAgICAgICAgYyA9IGExICogYzIgLSBiMSAqIGQyICsgYzEgKiBhMiArIGQxICogYjIsXG4gICAgICAgIGQgPSBhMSAqIGQyICsgYjEgKiBjMiAtIGMxICogYjIgKyBkMSAqIGEyLFxuICAgICAgICBxdWF0ZXJuaW9uID0gWyBhLCBiLCBjLCBkIF07XG5cbiAgcmV0dXJuIHF1YXRlcm5pb247XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24ocm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbikgeyByZXR1cm4gWzAsIC4uLnBvc2l0aW9uXTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbikgeyByZXR1cm4gaW1hZ2luYXJ5UXVhdGVybmlvbi5zbGljZSgxKTsgfSAgLy8vXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBhZGQzLCBzdWJ0cmFjdDMsIHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UsIGZpcnN0UG9zaXRpb25Db21wb25lbnQpIHtcbiAgbGV0IGludGVyc2VjdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgZWRnZU5vblBhcmFsbGVsID0gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSk7XG5cbiAgaWYgKGVkZ2VOb25QYXJhbGxlbCkge1xuICAgIGNvbnN0IGVkZ2VJbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVFZGdlSW50ZXJzZWN0aW9uKGVkZ2UsIGZpcnN0UG9zaXRpb25Db21wb25lbnQpLFxuICAgICAgICAgIGVkZ2VJbnRlcnNlY3Rpb25Ob25Ucml2aWFsID0gKChlZGdlSW50ZXJzZWN0aW9uID4gMCApICYmIChlZGdlSW50ZXJzZWN0aW9uIDwgMSkpO1xuXG4gICAgaWYgKGVkZ2VJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICBpbnRlcnNlY3Rpb24gPSBlZGdlSW50ZXJzZWN0aW9uOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGludGVyc2VjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobm9uTnVsbEludGVyc2VjdGlvbnMsIGludGVyc2VjdGlvbikgPT4ge1xuICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb24gPSBpbnRlcnNlY3Rpb247IC8vL1xuXG4gICAgICBub25OdWxsSW50ZXJzZWN0aW9ucy5wdXNoKG5vbk51bGxJbnRlcnNlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBub25OdWxsSW50ZXJzZWN0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobnVsbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgaWYgKG51bGxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbikge1xuICBjb25zdCBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kVmVydGV4UG9zaXRpb24sIHN0YXJ0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBvZmZzZXQgPSBzY2FsZTMoZXh0ZW50LCBpbnRlcnNlY3Rpb24pLFxuICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGFkZDMoc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgb2Zmc2V0KTtcblxuICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnQgPSBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgLyBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50LFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oZWRnZUFuZ2xlVGFuZ2VudCksXG4gICAgICAgIGVkZ2VQYXJhbGxlbCA9IGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8sIC8vL1xuICAgICAgICBlZGdlTm9uUGFyYWxsZWwgPSAhZWRnZVBhcmFsbGVsO1xuXG4gIHJldHVybiBlZGdlTm9uUGFyYWxsZWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZVBvc2l0aW9uID0gZWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBlZGdlUG9zaXRpb25Db21wb25lbnRzID0gZWRnZVBvc2l0aW9uLCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICBlZGdlSW50ZXJzZWN0aW9uID0gKGZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQ7XG5cbiAgcmV0dXJuIGVkZ2VJbnRlcnNlY3Rpb247XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVJbnRlcnNlY3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbExpbmUge1xuICBjb25zdHJ1Y3RvcihmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gIH1cbiAgXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZhY2V0LmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UsIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBmYWNldC5zcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICAgIHRoaXMuc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBzbWFsbGVyRmFjZXRzLmZvckVhY2goKHNtYWxsZXJGYWNldCkgPT4gc21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VQb3NpdGlvbiA9IG1hc2tpbmdFZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sICAvLy9cbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbihtYXNraW5nRWRnZVBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmUgPSBuZXcgVmVydGljYWxMaW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHJvdGF0ZWRWZXJ0ZXggPSB2ZXJ0ZXguY2xvbmUoKTsgIC8vL1xuXG4gICAgcm90YXRlZFZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiByb3RhdGVkVmVydGV4O1xuICB9KTtcblxuICByZXR1cm4gcm90YXRlZFZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSB7ICAvLy9cbiAgY29uc3QgaW5kZXhlcyA9IGluZGV4VHVwbGUsIC8vL1xuICAgICAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZSA9IGNvb3JkaW5hdGVUdXBsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHZlcnRleCA9IFZlcnRleC5mcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSk7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gdmVydGljZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNraW5nRWRnZSBmcm9tIFwiLi9lZGdlL21hc2tpbmdcIjtcbmltcG9ydCBWZXJ0aWNhbExpbmUgZnJvbSBcIi4vdmVydGljYWxMaW5lXCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgcHVzaCwgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdXNoKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lLnNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBub3JtYWwgPSBmYWNldE5vcm1hbCwgLy8vXG4gICAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKGZhY2V0VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0VkZ2VzID0gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzID0gbWFza2luZ0VkZ2VzLm1hcCgobWFza2luZ0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IFZlcnRpY2FsTGluZS5mcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcykge1xuICBjb25zdCBtYXNraW5nRWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgVkVSVElDRVNfTEVOR1RILFxuICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgIG1hc2tpbmdFZGdlID0gTWFza2luZ0VkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICAgICAgcmV0dXJuIG1hc2tpbmdFZGdlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbWFza2luZ0VkZ2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IE1hc2tpbmdGYWNldCBmcm9tIFwiLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgREVGQVVMVF9ISURERU4gfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4sIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldEhpZGRlbigpIHtcbiAgICByZXR1cm4gdGhpcy5oaWRkZW47XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpKTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQubWFnbmlmeShtYWduaWZpY2F0aW9uKSk7XG4gIH1cblxuICBpbml0aWFsaXNlKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4sIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UsIGhpZGRlbiA9IERFRkFVTFRfSElEREVOIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hc2sgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMsIGhpZGRlbiwgcmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBtYXNrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5yZW5kZXJlckRhdGEgPSByZW5kZXJlckRhdGE7XG4gICAgdGhpcy5yZW5kZXJlckJ1ZmZlcnMgPSByZW5kZXJlckJ1ZmZlcnM7XG4gICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gdW5pZm9ybUxvY2F0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGE7XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyQnVmZmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckJ1ZmZlcnM7XG4gIH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRGYWNldHMoZmFjZXRzKSB7XG4gICAgYWRkKHRoaXMuZmFjZXRzLCBmYWNldHMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4sIG1lcmdlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEgPSB2ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0RhdGEgPSB2ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aCA9IHRoaXMudmVydGV4SW5kZXhlc0RhdGEubGVuZ3RoLFxuICAgICAgICAgIGNvdW50ID0gdmVydGV4SW5kZXhlc0RhdGFMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4SW5kZXhlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IGZsYXR0ZW4odmVydGV4UG9zaXRpb25zKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFsc0RhdGEgPSBmbGF0dGVuKHZlcnRleE5vcm1hbHMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhID0gdmVydGV4SW5kZXhlczsgIC8vL1xuXG4gICAgYWRkKHRoaXMudmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSBbXSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiByZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNEYXRhID0gdmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3Vyc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsc01hdHJpeE5hbWUgPSBcInVOb3JtYWxzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleE5vcm1hbFwiO1xuXG5jb25zdCBsaWdodGluZ1NvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7bm9ybWFsc01hdHJpeE5hbWV9O1xuXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMzICR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjMyBkaXJlY3Rpb25hbExpZ2h0Q29sb3VyID0gdmVjMygxLCAxLCAxKSxcbiAgICAgICAgICAgICBkaXJlY3Rpb25hbFZlY3RvciA9IG5vcm1hbGl6ZSh2ZWMzKDEuMCwgMS4wLCAxLjApKTtcbiAgICAgICAgICBcbiAgICAgICAgdmVjMyBjYWxjdWxhdGVMaWdodGluZygpIHtcbiAgICAgICAgICB2ZWM0IHRyYW5zZm9ybWVkTm9ybWFsID0gJHtub3JtYWxzTWF0cml4TmFtZX0gKiB2ZWM0KCR7dmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZX0sIDEuMCk7ICAgICAgICAgICAgXG5cbiAgICAgICAgICBmbG9hdCBkaXJlY3Rpb25hbCA9IChkb3QodHJhbnNmb3JtZWROb3JtYWwueHl6LCBkaXJlY3Rpb25hbFZlY3RvcikgKyAxLjApIC8gMi4wO1xuICAgICAgICAgIFxuICAgICAgICAgIHZlYzMgbGlnaHRpbmcgPSAoZGlyZWN0aW9uYWxMaWdodENvbG91ciAqIGRpcmVjdGlvbmFsKTtcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm4gbGlnaHRpbmc7XG4gICAgICAgIH1cblxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxpZ2h0aW5nU291cmNlOyIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IG9mZnNldHNNYXRyaXhOYW1lID0gXCJ1T2Zmc2V0c01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9uTWF0cml4TmFtZSA9IFwidVBvc2l0aW9uTWF0cml4XCI7XG5leHBvcnQgY29uc3Qgcm90YXRpb25zTWF0cml4TmFtZSA9IFwidVJvdGF0aW9uc01hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHByb2plY3Rpb25NYXRyaXhOYW1lID0gXCJ1UGVyc3BlY3RpdmVNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhQb3NpdGlvblwiO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0c01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSAqICR7b2Zmc2V0c01hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvblNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Q29sb3VyXCJcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgJHtsaWdodGluZ1NvdXJjZX1cbiAgICAgIFxuICAgICAgICAke3Bvc2l0aW9uU291cmNlfVxuICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG91cjtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuXG4gICAgICAgICAgdkNvbG91ciA9ICR7dmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJ0ZXhTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3VyLnJnYiAqIHZMaWdodGluZywgdkNvbG91ci5hKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gdmVydGV4Tm9ybWFsc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHZlcnRleENvbG91cnNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IHZlcnRleENvbG91cnNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91cnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91cnNCdWZmZXIsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKENvbG91clJlbmRlcmVyQnVmZmVycywgdmVydGV4Q29sb3Vyc0J1ZmZlcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub3JtYWxzTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvbGlnaHRpbmdcIjtcblxuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeE5hbWUsIHJvdGF0aW9uc01hdHJpeE5hbWUsIHBvc2l0aW9uTWF0cml4TmFtZSwgcHJvamVjdGlvbk1hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG9mZnNldHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBub3JtYWxzTWF0cml4TmFtZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHBvc2l0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCByb3RhdGlvbnNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwcm9qZWN0aW9uTWF0cml4TmFtZSksXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IG5ldyBDbGFzcyhvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIFxuICAgIHJldHVybiB1bmlmb3JtTG9jYXRpb25zOyAgICAgICBcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7IHJldHVybiBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91clVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcyk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdmVydGV4Tm9ybWFsQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCB7IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKENsYXNzLCBwcm9ncmFtLCBjYW52YXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9ICBcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvY29sb3VyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXJcIjtcbmltcG9ydCBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiO1xuaW1wb3J0IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsaWdodGluZ1NvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5pbXBvcnQgcG9zaXRpb25Tb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lID0gXCJhVGV4dHVyZUNvb3JkaW5hdGVcIjtcblxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIFxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkaW5hdGU7XG4gICAgICAgIFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgdkxpZ2h0aW5nID0gY2FsY3VsYXRlTGlnaHRpbmcoKTtcblxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdlRleHR1cmVDb29yZGluYXRlID0gJHt0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZXJOYW1lID0gXCJ1U2FtcGxlclwiO1xuXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICAgICAgICBcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgJHtzYW1wbGVyTmFtZX07XG5cbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMzIHZMaWdodGluZztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBoaWdocCB2ZWM0IHRleGVsQ29sb3VyID0gdGV4dHVyZTJEKCR7c2FtcGxlck5hbWV9LCB2VGV4dHVyZUNvb3JkaW5hdGUpO1xuICAgICAgICAgIFxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodGV4ZWxDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB0ZXhlbENvbG91ci5hKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyQnVmZmVycywgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuaW1wb3J0IHsgc2FtcGxlck5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuaW1wb3J0IFRleHR1cmVSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvdGV4dHVyZVwiO1xuaW1wb3J0IGZyYWdtZW50U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS90ZXh0dXJlL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlXCI7XG5pbXBvcnQgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybVwiO1xuaW1wb3J0IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2dyYW0gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IENsYXNzKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNhbnZhcy5lbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgVGV4dHVyZVJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCBpbWFnZU1hcEpTT04pIHtcblx0XHRzdXBlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuXG5cdFx0dGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG5cdH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy5pbWFnZU1hcEpTT04pLFxuICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7IC8vL1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIGNvdW50ID0gcmVuZGVyZXJEYXRhLmdldENvdW50KCksXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICB0aGlzLnVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTihpbWFnZU1hcCwgaW1hZ2VNYXBKU09OLCBjYW52YXMpIHtcbiAgICBjb25zdCBpbWFnZSA9IGltYWdlTWFwLCAvLy9cbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG5cbiAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG5cbiAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZU1hcFRleHR1cmVSZW5kZXJlciwgY2FudmFzLCBpbWFnZU1hcEpTT04pO1xuXG4gICAgcmV0dXJuIGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50Lm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyk7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbiwgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIgJiYgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRleHR1cmVSZW5kZXJlciAmJiB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpOyAvLy9cblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfWl9GQVIsIERFRkFVTFRfWl9ORUFSLCBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnpGYXIgPSB6RmFyO1xuICAgIHRoaXMuek5lYXIgPSB6TmVhcjtcbiAgICB0aGlzLmZpZWxkT2ZWaWV3ID0gZmllbGRPZlZpZXc7XG4gIH1cblxuICBnZXRaRmFyKCkge1xuICAgIHJldHVybiB0aGlzLnpGYXI7XG4gIH1cblxuICBnZXRaTmVhcigpIHtcbiAgICByZXR1cm4gdGhpcy56TmVhcjtcbiAgfVxuXG4gIGdldEZpZWxkT2ZWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLmZpZWxkT2ZWaWV3O1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy56RmFyID0gdGhpcy56RmFyICogbWFnbmlmaWNhdGlvbjtcbiAgICB0aGlzLnpOZWFyID0gdGhpcy56TmVhciAqIG1hZ25pZmljYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB7IGZpZWxkT2ZWaWV3ID0gREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgZmllbGRPZlZpZXcgKj0gREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVI7IC8vL1xuXG4gICAgY29uc3QgeyB6RmFyID0gREVGQVVMVF9aX0ZBUiwgek5lYXIgPSBERUZBVUxUX1pfTkVBUiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTSElGVF9LRVlfQ09ERSA9IDE2O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgS0VZVVBfRVZFTlRfVFlQRSA9IFwia2V5dXBcIjtcbmV4cG9ydCBjb25zdCBLRVlET1dOX0VWRU5UX1RZUEUgPSBcImtleWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRVVQX0VWRU5UX1RZUEUgPSBcIm1vdXNldXBcIjtcbmV4cG9ydCBjb25zdCBNT1VTRURPV05fRVZFTlRfVFlQRSA9IFwibW91c2Vkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgPSBcIm1vdXNlbW92ZVwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFV0hFRUxfRVZFTlRfVFlQRSA9IFwibW91c2V3aGVlbFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSElGVF9LRVlfQ09ERSB9IGZyb20gXCIuLi9rZXlDb2Rlc1wiO1xuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5RXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLnNoaWZ0S2V5RG93biA9IHNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGlzU2hpZnRLZXlEb3duKCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0S2V5RG93bjtcbiAgfVxuXG4gIGtleVVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcih0aGlzLnNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIGtleURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBTSElGVF9LRVlfQ09ERSkge1xuICAgICAgdGhpcy5zaGlmdEtleURvd24gPSB0cnVlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlmdEtleUhhbmRsZXIoc2hpZnRLZXlIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHNoaWZ0S2V5SGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSwgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFVVBfRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFRE9XTl9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRVdIRUVMX0VWRU5UX1RZUEUsIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgS2V5RXZlbnRzIGZyb20gXCIuL2tleUV2ZW50c1wiO1xuaW1wb3J0IE1vdXNlRXZlbnRzIGZyb20gXCIuL21vdXNlRXZlbnRzXCI7XG5cbmltcG9ydCB7IHplcm8yLCBzdWJ0cmFjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnQsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IE1hc2sgZnJvbSBcIi4uL2VsZW1lbnQvbWFza1wiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IERFRkFVTFRfTUFHTklGSUNBVElPTiwgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHRoaXMuY2FudmFzLCByZW5kZXIpO1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLnVzZXJJbnB1dEhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLm1hc2tzLmZvckVhY2goKG1hc2spID0+IG1hc2subWFnbmlmeShtYWduaWZpY2F0aW9uKSk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQubWFnbmlmeShtYWduaWZpY2F0aW9uKSk7XG5cbiAgICB0aGlzLmNhbWVyYS5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB1c2VySW5wdXRIYW5kbGVyID0gdGhpcy51c2VySW5wdXRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgd2luZG93UmVzaXplSGFuZGxlciA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5tYXNrcy5mb3JFYWNoKChtYXNrKSA9PiBtYXNrLmluaXRpYWxpc2UodGhpcy5tYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0LmluaXRpYWxpc2UoY2FudmFzLCB0aGlzLm1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICB1c2VySW5wdXQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdXNlcklucHV0LmFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSB3aW5kb3dSZXNpemVIYW5kbGVyO1xuXG4gICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgbWFnbmlmaWNhdGlvbiA9IERFRkFVTFRfTUFHTklGSUNBVElPTiwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayksXG4gICAgICAgICAgcGFydHMgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFBhcnQpLFxuICAgICAgICAgIGNhbWVyYSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDYW1lcmEpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgcGFydHMsIG1hc2tzLCBjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SICogbWFnbmlmaWNhdGlvbiAqIG1hZ25pZmljYXRpb247XG5cbiAgICBzY2VuZS5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuaW1wb3J0IHsgc2NhbGUzLCByZWZsZWN0MywgdHJ1bmNhdGU0LCB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0RpcmVjdGlvbnNBbmRNYWduaWZpY2F0aW9uKGFuZ2xlcywgZGlyZWN0aW9ucywgbWFnbmlmaWNhdGlvbikge1xuICBhbmdsZXMgPSByZWZsZWN0MyhhbmdsZXMpOyAgLy8vXG5cbiAgY29uc3QgcmV2ZXJzZU9yZGVyID0gdHJ1ZSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMsIHJldmVyc2VPcmRlcik7XG5cbiAgbGV0IHJlbGF0aXZlT2Zmc2V0cyA9IHRyYW5zZm9ybTQoZGlyZWN0aW9ucywgcm90YXRpb25zTWF0cml4KTtcblxuICByZWxhdGl2ZU9mZnNldHMgPSB0cnVuY2F0ZTQocmVsYXRpdmVPZmZzZXRzKTtcblxuICByZWxhdGl2ZU9mZnNldHMgPSBzY2FsZTMocmVsYXRpdmVPZmZzZXRzLCBtYWduaWZpY2F0aW9uKTtcblxuICByZXR1cm4gcmVsYXRpdmVPZmZzZXRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHJlZmxlY3QyLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBJTlZFUlRfTVVMVElQTElFUiwgT0ZGU0VUX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzRGlyZWN0aW9uc0FuZE1hZ25pZmljYXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29mZnNldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgbWFnbmlmaWNhdGlvbiwgZGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gb2Zmc2V0cztcbiAgICB0aGlzLm1hZ25pZmljYXRpb24gPSBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMuZGVsdGFNdWx0aXBsaWVyID0gZGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgZ2V0TWFnbmlmaWNhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYWduaWZpY2F0aW9uKCk7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgbWFnbmlmaWNhdGlvbiA9IHRoaXMubWFnbmlmaWNhdGlvbixcbiAgICAgICAgICBzY2FsZWRNb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLmRlbHRhTXVsdGlwbGllcixcbiAgICAgICAgICBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBPRkZTRVRfTVVMVElQTElFUikpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgc2NhbGVkTW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0RpcmVjdGlvbnNBbmRNYWduaWZpY2F0aW9uKGFuZ2xlcywgZGlyZWN0aW9ucywgbWFnbmlmaWNhdGlvbik7XG5cbiAgICB0aGlzLm9mZnNldHMgPSBhZGQzKHRoaXMub2Zmc2V0cywgcmVsYXRpdmVPZmZzZXRzKTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHRoaXMubWFnbmlmaWNhdGlvbiA9IG1hZ25pZmljYXRpb247XG5cbiAgICB0aGlzLm9mZnNldHMgPSBzY2FsZTModGhpcy5vZmZzZXRzLCBtYWduaWZpY2F0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldHNBbmREZWx0YU11bHRpcGxpZXIoaW5pdGlhbE9mZnNldHMsIGRlbHRhTXVsdGlwbGllcikge1xuICAgIGNvbnN0IG9mZnNldHMgPSBpbml0aWFsT2Zmc2V0cywgLy8vXG4gICAgICAgICAgbWFnbmlmaWNhdGlvbiA9IG51bGwsIC8vXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBtYWduaWZpY2F0aW9uLCBkZWx0YU11bHRpcGxpZXIpO1xuXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbFBvc2l0aW9uQW5kRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxQb3NpdGlvbiwgZGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIElOVkVSVF9NVUxUSVBMSUVSKSxcbiAgICAgICAgICBtYWduaWZpY2F0aW9uID0gbnVsbCwgLy9cbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldHMsIG1hZ25pZmljYXRpb24sIGRlbHRhTXVsdGlwbGllcik7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWRkMywgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsdCB7XG4gIGNvbnN0cnVjdG9yKGFuZ2xlcywgZmxpcHBlZCkge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMuZmxpcHBlZCA9IGZsaXBwZWQ7XG4gIH1cblxuICBnZXRYQW5nbGUoKSB7XG4gICAgY29uc3QgZmlyc3RBbmdsZSA9IGZpcnN0KHRoaXMuYW5nbGVzKSxcbiAgICAgICAgICB4QW5nbGUgPSBmaXJzdEFuZ2xlOyAgLy8vXG5cbiAgICByZXR1cm4geEFuZ2xlO1xuICB9XG4gIFxuICBnZXRZQW5nbGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kQW5nbGUgPSBzZWNvbmQodGhpcy5hbmdsZXMpLFxuICAgICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlOyAvLy9cblxuICAgIHJldHVybiB5QW5nbGU7XG4gIH1cblxuICBnZXRaQW5nbGUoKSB7XG4gICAgY29uc3QgekFuZ2xlID0gMDtcblxuICAgIHJldHVybiB6QW5nbGU7XG4gIH1cbiAgXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cbiAgXG4gIHVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCBzY2FsYXIgPSB0aGlzLmZsaXBwZWQgP1xuICAgICAgICAgICAgICAgICAgICAgK0FOR0xFU19NVUxUSVBMSUVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgLUFOR0xFU19NVUxUSVBMSUVSLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgICAgICAgMCwgc2NhbGFyLCAwLFxuICAgICAgICAgICAgLXNjYWxhciwgICAgICAwLCAwLFxuICAgICAgICAgICAgICAgICAgMCwgICAgICAwLCAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTMoWyAuLi5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIDAgXSwgbWF0cml4KTsgIC8vL1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQzKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpIHtcbiAgICBjb25zdCBzY2FsYXIgPSBmbGlwcGVkID9cbiAgICAgICAgICAgICAgICAgICAgICtERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgIC1ERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUixcbiAgICAgICAgICBtYXRyaXggPSBbXG5cbiAgICAgICAgICAgICAgICAgIDAsIHNjYWxhciwgMCxcbiAgICAgICAgICAgIC1zY2FsYXIsICAgICAgMCwgMCxcbiAgICAgICAgICAgICAgICAgIDAsICAgICAgMCwgMCxcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgYW5nbGVzID0gdHJhbnNmb3JtMyhbIC4uLmluaXRpYWxBbmdsZXMsIDAgXSwgbWF0cml4KSwgLy8vXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgZmxpcHBlZCk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9ERUxUQV9NVUxUSVBMSUVSLCBERUZBVUxUX0lOSVRJQUxfQU5HTEVTLCBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgICAgICAgIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gICAgICAgICBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duKSB7XG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aGlzLnRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCB0aGlzLnRpbHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhID0gdGhpcywgIC8vL1xuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLnBhbi5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTLFxuICAgICAgICAgICAgaW5pdGlhbFBvc2l0aW9uID0gREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OLFxuICAgICAgICAgICAgZGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9ERUxUQV9NVUxUSVBMSUVSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSB0cnVlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbFBvc2l0aW9uQW5kRGVsdGFNdWx0aXBsaWVyKGluaXRpYWxQb3NpdGlvbiwgZGVsdGFNdWx0aXBsaWVyKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0KTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTUlOSU1VTV9ESVNUQU5DRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlLCBtaW5pbXVtRGlzdGFuY2UsIGRlbHRhTXVsdGlwbGllcikge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICB0aGlzLm1pbmltdW1EaXN0YW5jZSA9IG1pbmltdW1EaXN0YW5jZTtcbiAgICB0aGlzLmRlbHRhTXVsdGlwbGllciA9IGRlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0TWluaW11bURpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1pbmltdW1EaXN0YW5jZTtcbiAgfVxuXG4gIGdldERlbHRhTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAtIChtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLmRlbHRhTXVsdGlwbGllcik7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlzdGFuY2UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgKiBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gdGhpcy5taW5pbXVtRGlzdGFuY2UgKiBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMuZGVsdGFNdWx0aXBsaWVyID0gdGhpcy5kZWx0YU11bHRpcGxpZXIgKiBtYWduaWZpY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2VBbmREZWx0YU11bHRpcGxpZXIoaW5pdGlhbERpc3RhbmNlLCBkZWx0YU11bHRpcGxpZXIpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgbWluaW11bURpc3RhbmNlID0gTUlOSU1VTV9ESVNUQU5DRSxcbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgZGVsdGFNdWx0aXBsaWVyKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuaW1wb3J0IFpvb20gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvem9vbVwiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vY2FtZXJhXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfSU5JVElBTF9BTkdMRVMsIERFRkFVTFRfSU5JVElBTF9PRkZTRVRTLCBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UsIERFRkFVTFRfREVMVEFfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20pIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIHRoaXMucGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRoaXMudGlsdCk7XG4gICAgfSBlbHNlIGlmIChtb3VzZVdoZWVsRGVsdGEgIT09IDApIHtcbiAgICAgIHRoaXMuem9vbS51cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhID0gdGhpcywgIC8vL1xuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHN1cGVyLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG5cbiAgICB0aGlzLnBhbi5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICAgIHRoaXMuem9vbS5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTLFxuICAgICAgICAgICAgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgICAgIGluaXRpYWxEaXN0YW5jZSA9IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgICAgIGRlbHRhTXVsdGlwbGllciA9IERFRkFVTFRfREVMVEFfTVVMVElQTElFUiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmbGlwcGVkID0gZmFsc2UsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c0FuZERlbHRhTXVsdGlwbGllcihpbml0aWFsT2Zmc2V0cywgZGVsdGFNdWx0aXBsaWVyKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZUFuZERlbHRhTXVsdGlwbGllcihpbml0aWFsRGlzdGFuY2UsIGRlbHRhTXVsdGlwbGllciksXG4gICAgICAgICAgZGVzaWduQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKERlc2lnbkNhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0LCB6b29tKTtcblxuICAgIHJldHVybiBkZXNpZ25DYW1lcmE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0hPU1QgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGNhbGxiYWNrLCBjb25maWd1cmF0aW9uID0gd2luZG93Ll9fY29uZmlndXJhdGlvbl9fKSB7IC8vL1xuICBjb25zdCB7IGhvc3QgPSBERUZBVUxUX0hPU1QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWAsXG4gICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUztcblxuICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWQsXG4gICAgICBjcm9zc09yaWdpblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzLCBpbWFnZU5hbWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrLCBjb25maWd1cmF0aW9uID0gd2luZG93Ll9fY29uZmlndXJhdGlvbl9fKSB7IC8vL1xuICBjb25zdCB7IGhvc3QgPSBERUZBVUxUX0hPU1QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHNyYyA9IGAke2hvc3R9JHtpbWFnZU1hcFVSSX1gLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWQsXG4gICAgY3Jvc3NPcmlnaW5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXAsIGltYWdlTWFwSlNPTik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVsb2FkSW1hZ2VzLFxuICBwcmVsb2FkSW1hZ2VNYXBcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMywgbGVuZ3RoMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IGVkZ2UuY2xvbmUoKSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVOb3JtYWwobm9ybWFsKSB7XG4gIG5vcm1hbCA9IG5vcm1hbC5jbG9uZSgpO1xuICBcbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVmVydGljZXModmVydGljZXMpIHtcbiAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmNsb25lKCkpO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSB7XG4gIGNvbnN0IGVkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSB7XG4gIGNvbnN0IG5vcm1hbCA9IE5vcm1hbC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgYXJlYSA9IGxlbmd0aDMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSAvIDI7XG5cbiAgcmV0dXJuIGFyZWE7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5yZ2JhLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgdGhpcy5yZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgdGhpcy5yZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBDb2xvdXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzOyAvLy9cblxuICAgIGNvb3JkaW5hdGVUdXBsZXMgPSBjb29yZGluYXRlVHVwbGVzLm1hcCgoY29vcmRpbmF0ZVR1cGxlKSA9PiB7XG4gICAgICBjb29yZGluYXRlVHVwbGUgPSBzY2FsZTMoY29vcmRpbmF0ZVR1cGxlLCBtYWduaWZpY2F0aW9uKTtcblxuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVUdXBsZTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICBzdXBlci5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGludmVydDIsIGludmVydDMgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuaW1wb3J0IHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZS5zbGljZSgpKTsgIC8vL1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpIHtcbiAgY29uc3QgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGV4dGVudCxcbiAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IGFkZDIobXVsdGlwbHkyKHRleHR1cmVDb29yZGluYXRlVHVwbGUsIFsgd2lkdGgsIGhlaWdodCBdICksIFsgbGVmdCwgYm90dG9tIF0pKTsgLy8vXG5cbiAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgY29uc3QgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjsgLy8vXG5cbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcGFyZW50VmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhwYXJlbnRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICB2ZXJ0aWNlcyA9IHJvdGF0ZWRWZXJ0aWNlczsgIC8vL1xuXG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXggPSBmaXJzdChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleCA9IHNlY29uZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4ID0gdGhpcmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBmaXJzdCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBzZWNvbmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSB0aGlyZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0UGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uID0gc2Vjb25kUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb24gPSB0aGlyZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBSMXggPSBmaXJzdFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIxeSA9IGZpcnN0VmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUjJ4ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBSMnkgPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFIzeCA9IHRoaXJkVmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjN5ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBQMXggPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDJ4ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQM3ggPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDF5ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAyeSA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDN5ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAxdSA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAxdiA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAydSA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMnYgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDN1ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDN2ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4ID0gaW52ZXJ0MyhbIDEsIDEsIDEsIFAxdSwgUDJ1LCBQM3UsIFAxdiwgUDJ2LCBQM3YgXSksXG4gICAgICAgIGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXgsIFAyeCwgUDN4IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF5LCBQMnksIFAzeSBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBPeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICBPeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4ID0gaW52ZXJ0MihbIFV4LCBVeSwgVngsIFZ5IF0pLFxuICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjF4IC0gT3gsIFIxeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIyeCAtIE94LCBSMnkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIzeCAtIE94LCBSM3kgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gW1xuICAgICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgXTtcblxuICByZXR1cm4gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgcGVybXV0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXh0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvcih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IFRleHR1cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZFwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzOyAvLy9cblxuICAgIGNvb3JkaW5hdGVUdXBsZXMgPSBjb29yZGluYXRlVHVwbGVzLm1hcCgoY29vcmRpbmF0ZVR1cGxlKSA9PiB7XG4gICAgICBjb29yZGluYXRlVHVwbGUgPSBzY2FsZTMoY29vcmRpbmF0ZVR1cGxlLCBtYWduaWZpY2F0aW9uKTtcblxuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVUdXBsZTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICBzdXBlci5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhZGQoZmFjZXRzLCBmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrIH0gZnJvbSBcIi4vZWxlbWVudC9tYXNrXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcnQgfSBmcm9tIFwiLi9lbGVtZW50L3BhcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NlbmUgfSBmcm9tIFwiLi9lbGVtZW50L3NjZW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2dhbWluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9kZXNpZ25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJlbG9hZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuL2luZGV4XCI7IC8vLy9cblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHtcbiAgUmVhY3Rcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0Q29sb3VyID0gWyAxLCAwLCAwIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkU3F1YXJlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgXHRjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG5cdFx0XHQgICAgY29sb3VyZWRTcXVhcmUgPSBDb2xvdXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29sb3VyZWRTcXVhcmUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpO1xuXG4gIFx0cmV0dXJuIGNvbG91cmVkU3F1YXJlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBGYWNlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e2NvbG91cn0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgKzAuNSBdfSAvPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRmFjZSBmcm9tIFwiLi9mYWNlXCI7XG5cbmNvbnN0IGRlZmF1bHRDb2xvdXIgPSBbIDEsIDEsIDAgXTtcblxuY29uc3QgQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFtcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyArOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgKzkwLCAwIF19IC8+LFxuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAxODAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIC05MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAtOTAsIDAgXX0gLz4sXG5cbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgY3ViZUV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q3ViZSBjb2xvdXI9e1sgMCwgMSwgMCBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3ViZUV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInBsYXN0ZXIuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMiwgMCBdLCBbIDIsIDIgXSBdLFxuICAgICAgICBbIFsgMiwgMiBdLCBbIDAsIDIgXSwgWyAwLCAwIF0gXSxcblxuICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRRdWFkcmFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgTWFzaywgRGVzaWduQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcbmltcG9ydCBUZXh0dXJlZFF1YWRyYW5nbGUgZnJvbSBcIi4vZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGVcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VzIH0gPSBwcmVsb2FkVXRpbGl0aWVzO1xuXG5jb25zdCB0aWxpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VzKChpbWFnZXMsIGltYWdlTmFtZXMpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJtYXNrXCI+XG4gICAgICAgICAgPENvbG91cmVkU3F1YXJlIHNjYWxlPXtbIDAuMjUsIDAuMjUsIDEgXX0gcG9zaXRpb249e1sgMC4xMjUsIDAuMTI1LCAwIF19IC8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gaW1hZ2VOYW1lPVwiZmxvb3Jib2FyZHMuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfSBpbWFnZU5hbWU9XCJwYXZpbmcuanBnXCIgbWFza1JlZmVyZW5jZT1cIm1hc2tcIiAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGlsaW5nRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2VsZW1lbnQvY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3Qgc2ltcGxlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMCwgMCwgMSBdfSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgTWFzaywgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8TWFzayByZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIj5cbiAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS80LCAxLzQsIDEvNCBdfSAvPlxuICAgICAgPC9NYXNrPlxuICAgICAgPE1hc2sgcmVmZXJlbmNlPVwiaGFsZi1zaXplZC1jdWJlXCI+XG4gICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFza1JlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiLz5cbiAgICAgIDwvTWFzaz5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q3ViZSBtYXNrUmVmZXJlbmNlPVwiaGFsZi1zaXplZC1jdWJlXCIgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hc2tpbmdFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgICAwLCAwLCAwIF0sXG4gICAgICAgIFsgICAxLCAwLCAwIF0sXG4gICAgICAgIFsgMC41LCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMiBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwic3RyaXBlcy5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMC41LCAxIF0gXSxcblxuICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRUcmlhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkVHJpYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFRyaWFuZ2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlZFRyaWFuZ2xlIGZyb20gXCIuL3RleHR1cmVkVHJpYW5nbGVcIjtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZGUgZnJvbSBcIi4vc2lkZVwiO1xuXG5jb25zdCBQeXJhbWlkID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8U2lkZSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsICA5MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDE4MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDI3MCwgMCBdfSAvPixcblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHlyYW1pZDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgR2FtaW5nQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFB5cmFtaWQgZnJvbSBcIi4vZWxlbWVudC9weXJhbWlkXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBwcmVsb2FkVXRpbGl0aWVzO1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCwgaW1hZ2VNYXBKU09OKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBpbWFnZU1hcEpTT049e2ltYWdlTWFwSlNPTn0+XG4gICAgICAgICAgPFB5cmFtaWQvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxHYW1pbmdDYW1lcmEvPlxuICAgICAgPC9TY2VuZT5cblxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHlyYW1pZEV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4veGdsXCI7XG5cbmltcG9ydCBjdWJlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL2N1YmVcIjtcbmltcG9ydCB0aWxpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvdGlsaW5nXCI7XG5pbXBvcnQgc2ltcGxlRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZVwiO1xuaW1wb3J0IG1hc2tpbmdFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvbWFza2luZ1wiO1xuaW1wb3J0IHB5cmFtaWRFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvcHlyYW1pZFwiO1xuXG5jb25zdCBleGFtcGxlID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7ICAvLy9cblxuc3dpdGNoIChleGFtcGxlKSB7XG4gIGNhc2UgXCJjdWJlXCI6XG4gICAgY3ViZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJ0aWxpbmdcIjpcbiAgICB0aWxpbmdFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwic2ltcGxlXCI6XG4gICAgc2ltcGxlRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcIm1hc2tpbmdcIjpcbiAgICBtYXNraW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInB5cmFtaWRcIjpcbiAgICBweXJhbWlkRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7O0FBRU8sVUFBTSxRQUFLO2NBQUwsUUFBQTtBQUNOLFVBQU0sU0FBTTtjQUFOLFNBQUE7QUFDTixVQUFNLFNBQU07Y0FBTixTQUFBO0FBQ04sVUFBTSxXQUFRO2NBQVIsV0FBQTtBQUNOLFVBQU0sWUFBUztjQUFULFlBQUE7QUFDTixVQUFNLGtCQUFrQjtjQUFsQixrQkFBQTtBQUNOLFVBQU0sbUJBQW1CO2NBQW5CLG1CQUFBO0FBQ04sVUFBTSxvQkFBaUI7Y0FBakIsb0JBQUE7QUFDTixVQUFNLG9CQUFvQjtjQUFwQixvQkFBQTtBQUNOLFVBQU0sb0JBQW9CO2NBQXBCLG9CQUFBO0FBQ04sVUFBTSxnQ0FBZ0MsS0FBSyxLQUFLO2NBQTFDLGdDQUFBO0FBQ04sVUFBTSxpQ0FBOEI7Y0FBOUIsaUNBQUE7QUFDTixVQUFNLHFDQUFrQztjQUFsQyxxQ0FBQTtBQUNOLFVBQU0sd0NBQXFDO2NBQXJDLHdDQUFBOzs7Ozs7Ozs7Ozs7QUNiWSxVQUFBLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVqQixXQUFPLDJCQUFBOzZCQUFBO2dDQUFQOztxQkFBQSxXQUFPOztZQUMxQixLQUFhOzRDQUFHOzBCQUNGOzs7O1lBR2QsS0FBZ0I7K0NBQUc7MEJBQ0w7Ozs7WUFHZCxLQUFhOzBDQUFDLFlBQVk7bUJBQ25CLGFBQWE7Ozs7WUFHcEIsS0FBZ0I7NkNBQUMsZUFBZTttQkFDekIsZ0JBQWdCOzs7OztZQUdoQixLQUFjOzJDQUFDLE9BQU8sWUFBbUM7dUJBQXZCLE9BQUEsVUFBQSxRQUFHLHFCQUFILElBQXFCLE1BQXJCLE9BQUEsSUFBQSxPQUFBLElBQUEsSUFBQSxPQUFB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LElBQ2IsS0FBSyxRQUFROztVQUlqQixLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7VUFDekIsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLO1VBQ3pCLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSztVQUV6QixLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7VUFDekIsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLO1VBQ3pCLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSztVQUV6QixLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7VUFDekIsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLO1VBQ3pCLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSzs7O3lCQUtILFNBQVMsU0FBUztBQUMxQyxZQUFPLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNmLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUViLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNkLEtBQUssUUFBUyxJQUNmLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUSxLQUNkLE1BQU0sUUFBUTs7VUFJbEIsS0FBTSxLQUFNLEtBQU0sS0FBTSxLQUFNLEtBQUssTUFBTztVQUMxQyxLQUFNLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBSyxNQUFPO1VBQzFDLEtBQU0sS0FBTSxL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SSxHQUN0QixNQUFNLElBQUksSUFBSSxJQUFJLElBQUksR0FDdEIsTUFBTSxJQUFJLElBQUksSUFBSSxHQUNsQixNQUFNLElBQUksSUFBSSxJQUFJLElBQUksR0FDdEIsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQ3RCLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxHQUN0QixNQUFNLElBQUksSUFBSSxJQUFJOztZQUl0QixNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU07WUFBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU07WUFBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU07WUFBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU07WUFDdkksTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNO1lBQUssTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNO1lBQUssTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNO1lBQUssTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNO1lBQ3ZJLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTTtZQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTTtZQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTTtZQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTTtZQUNoSCxPQUFPO1lBQTRCLE9BQU87WUFBNEIsT0FBTztZQUE0QixPQUFPOzs7OzBCQU1sSCxRQUFRLFFBQVE7QUFDekMsWUFBTSxJQUFJLE9BQU8sSUFDWCxJQUFJLE9BQU8sSUFDWCxJQUFJLE9BQU8sSUFFWCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQVEsSUFDZCxNQUFNLE9BQU8sS0FDYixNQUFNLE9BQU87O1VBSW9CO1VBQTBDO1VBQTBDO1VBQTBDO1VBQzlIO1VBQTBDO1VBQTBDO1VBQTBDO1VBQzlIO1VBQTBDO1VB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
