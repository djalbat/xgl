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
      exports.FUNCTION = exports.HEIGHT = exports.VERTICES_LENGTH = exports.INVERT_MULTIPLIER = exports.DEGREES_TO_RADIANS_MULTIPLIER = exports.DESIGN_CAMERA = exports.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = exports.EXT_TEXTURE_FILTER_ANISOTROPIC = exports.WIDTH = exports.ANGLES_MULTIPLIER = exports.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = exports.CANVAS = exports.ANONYMOUS = exports.GAMING_CAMERA = exports.MINIMUM_DISTANCE = void 0;
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
      var GAMING_CAMERA = "gaming_camera";
      exports.GAMING_CAMERA = GAMING_CAMERA;
      var DESIGN_CAMERA = "design_camera";
      exports.DESIGN_CAMERA = DESIGN_CAMERA;
      var VERTICES_LENGTH = 3;
      exports.VERTICES_LENGTH = VERTICES_LENGTH;
      var MINIMUM_DISTANCE = 1;
      exports.MINIMUM_DISTANCE = MINIMUM_DISTANCE;
      var INVERT_MULTIPLIER = -1;
      exports.INVERT_MULTIPLIER = INVERT_MULTIPLIER;
      var ANGLES_MULTIPLIER = 0.01;
      exports.ANGLES_MULTIPLIER = ANGLES_MULTIPLIER;
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
      var Element = /* @__PURE__ */ function() {
        function Element2() {
          _classCallCheck(this, Element2);
        }
        _createClass(Element2, [
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
        return Element2;
      }();
      exports.default = Element;
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
      exports.default = void 0;
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
      exports.default = _default;
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
      exports.default = void 0;
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
      var _default = {
        identity2,
        identity3,
        identity4,
        multiply2,
        multiply3,
        multiply4,
        invert2,
        invert3,
        invert4,
        transpose2,
        transpose3,
        transpose4,
        scale4,
        rotate4,
        translate4,
        perspective4
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/constants.js
  var require_constants2 = __commonJS({
    "node_modules/necessary/lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EMPTY_STRING = exports.ERROR = exports.UTF8 = exports.ACCEPT = exports.CTRL_C = exports.CONTENT_TYPE = void 0;
      var UTF8 = "utf8";
      exports.UTF8 = UTF8;
      var ERROR = "error";
      exports.ERROR = ERROR;
      var CTRL_C = "^C";
      exports.CTRL_C = CTRL_C;
      var ACCEPT = "accept";
      exports.ACCEPT = ACCEPT;
      var EMPTY_STRING = "";
      exports.EMPTY_STRING = EMPTY_STRING;
      var CONTENT_TYPE = "content-type";
      exports.CONTENT_TYPE = CONTENT_TYPE;
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
      exports.back = back;
      exports.front = front;
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
      function back(array) {
        return array.slice(array.length - 1);
      }
      function front(array) {
        return array.slice(0, array.length - 1);
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
        var found = array.some(function(element2, index) {
          var passed = test(element2, index);
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
        var found = array.some(function(element2, index) {
          var passed = test(element2, index);
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

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS({
    "node_modules/necessary/lib/characters.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CARRIAGE_RETURN_CHARACTER = exports.BACKSPACE_CHARACTER = exports.LINE_FEED_CHARACTER = exports.ETX_CHARACTER = exports.AMPERSAND_CHARACTER = exports.COLON_CHARACTER = void 0;
      var ETX_CHARACTER = "";
      exports.ETX_CHARACTER = ETX_CHARACTER;
      var COLON_CHARACTER = ":";
      exports.COLON_CHARACTER = COLON_CHARACTER;
      var AMPERSAND_CHARACTER = "&";
      exports.AMPERSAND_CHARACTER = AMPERSAND_CHARACTER;
      var LINE_FEED_CHARACTER = "\n";
      exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
      var BACKSPACE_CHARACTER = String.fromCharCode(127);
      exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
      var CARRIAGE_RETURN_CHARACTER = "\r";
      exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
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
      var _characters = require_characters();
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
        var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
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
        var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString2, name, index) {
          var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
          queryString2 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
          return queryString2;
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

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS({
    "node_modules/necessary/lib/methods.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.POST_METHOD = exports.GET_METHOD = void 0;
      var GET_METHOD = "GET";
      exports.GET_METHOD = GET_METHOD;
      var POST_METHOD = "POST";
      exports.POST_METHOD = POST_METHOD;
    }
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS({
    "node_modules/necessary/lib/contentTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.APPLICATION_JSON_CONTENT_TYPE = void 0;
      var APPLICATION_JSON_CONTENT_TYPE = "application/json";
      exports.APPLICATION_JSON_CONTENT_TYPE = APPLICATION_JSON_CONTENT_TYPE;
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
      var _constants = require_constants2();
      var _methods = require_methods();
      var _contentTypes = require_contentTypes();
      var _http = require_http();
      function get(host, uri, parameters, headers, callback) {
        if (callback === void 0) {
          callback = headers;
          headers = {};
        }
        var method = _methods.GET_METHOD, body = null;
        underwriteAccept(headers);
        request(host, uri, parameters, method, body, headers, callback);
      }
      function post(host, uri, parameters, body, headers, callback) {
        if (callback === void 0) {
          callback = headers;
          headers = {};
        }
        var method = _methods.POST_METHOD;
        underwriteAccept(headers);
        underwriteContentType(headers);
        request(host, uri, parameters, method, body, headers, callback);
      }
      function request(host, uri, parameters, method, body, headers, callback) {
        var url = (0, _http).urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
        if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
          var json = body, jsonString = JSON.stringify(json);
          body = jsonString;
        }
        xmlHttpRequest.onreadystatechange = function() {
          var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText;
          if (readyState == 4) {
            var body2 = responseText;
            if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
              try {
                var jsonString2 = body2, json2 = JSON.parse(jsonString2);
                body2 = json2;
              } catch (error) {
                body2 = null;
              }
              callback(body2, status);
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
        var name = _constants.ACCEPT, value = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
        (0, _http).underwrite(headers, name, value);
      }
      function underwriteContentType(headers) {
        var name = _constants.CONTENT_TYPE, value = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
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
        var firstAngle = (0, _array).first(angles), secondAngle = (0, _array).second(angles), thirdAngle = 0, xAngle = firstAngle, yAngle = secondAngle, zAngle = thirdAngle, xAxis = [
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
      var CanvasElement = /* @__PURE__ */ function(Element) {
        _inherits(CanvasElement2, Element);
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
              var mask = masks.find(function(mask2) {
                var reference = mask2.getReference();
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
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
          var func = firstArgument, childElements = (0, _array).guarantee(func(properties));
          Object.assign(properties, {
            childElements
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
      exports.DEFAULT_INITIAL_POSITION = exports.DEFAULT_DEPTH = exports.DEFAULT_R = exports.DEFAULT_PERSIST = exports.DEFAULT_INITIAL_ANGLES = exports.DEFAULT_G = exports.DEFAULT_INITIAL_DISTANCE = exports.DEFAULT_MARGIN_OF_ERROR = exports.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER = exports.DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER = exports.DEFAULT_HIDDEN = exports.DEFAULT_HOST = exports.DEFAULT_Z_NEAR = exports.DEFAULT_INITIAL_OFFSETS = exports.DEFAULT_Z_FAR = exports.DEFAULT_A = exports.DEFAULT_B = exports.DEFAULT_FIELD_OF_VIEW = exports.DEFAULT_MAGNIFICATION = void 0;
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
      var DEFAULT_PERSIST = false;
      exports.DEFAULT_PERSIST = DEFAULT_PERSIST;
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
      var DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER = 0.25;
      exports.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER = DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER;
      var DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER = 0.025;
      exports.DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER = DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER;
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
        var midPointPosition = vertices.reduce(function(midPointPosition2, vertex) {
          var vertexPosition = vertex.getPosition(), scaledVertexPosition = (0, _vector).scale3(vertexPosition, 1 / 3);
          midPointPosition2 = (0, _vector).add3(midPointPosition2, scaledVertexPosition);
          return midPointPosition2;
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
      var Mask = /* @__PURE__ */ function(Element) {
        _inherits(Mask2, Element);
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
          var element = childElement, elementFacets = element.getFacets(), childElements2 = element.getChildElements();
          (0, _array).push(facets, elementFacets);
          retrieveFacets(childElements2, facets);
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
          var element2 = childElement;
          maskElement(element2, maskingFacets, marginOfError);
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
                var firstTexturedFacet = (0, _array).first(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), facets = this.facetsMap[imageName];
                add(facets, texturedFacets);
              }
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              var index = 0;
              this.imageNames.forEach(function(imageName) {
                var facets = this.facetsMap[imageName];
                facets.forEach(function(facet) {
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
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
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
      var Part = /* @__PURE__ */ function(Element) {
        _inherits(Part2, Element);
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
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
              this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
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
              var _images2 = properties.images, images = _images2 === void 0 ? null : _images2, _imageMap2 = properties.imageMap, imageMap = _imageMap2 === void 0 ? null : _imageMap2, _imageNames = properties.imageNames, imageNames = _imageNames === void 0 ? null : _imageNames, _imageTiling = properties.imageTiling, imageTiling = _imageTiling === void 0 ? false : _imageTiling, _imageMapJSON = properties.imageMapJSON, imageMapJSON = _imageMapJSON === void 0 ? null : _imageMapJSON, _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part2, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);
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
      var Camera = /* @__PURE__ */ function(Element) {
        _inherits(Camera2, Element);
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
      exports.SHIFT_KEY_CODE = exports.ESCAPE_KEY_CODE = void 0;
      var SHIFT_KEY_CODE = 16;
      exports.SHIFT_KEY_CODE = SHIFT_KEY_CODE;
      var ESCAPE_KEY_CODE = 27;
      exports.ESCAPE_KEY_CODE = ESCAPE_KEY_CODE;
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
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
              var documentDOMElement = document.documentElement;
              documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, function(event) {
                var keyCode = event.keyCode;
                if (keyCode === _keyCodes.ESCAPE_KEY_CODE) {
                  escapeKeyDownHandler();
                }
              });
            }
          },
          {
            key: "initialise",
            value: function initialise() {
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
      var Scene = /* @__PURE__ */ function(Element) {
        _inherits(Scene2, Element);
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
            key: "escapeKeyDownHandler",
            value: function escapeKeyDownHandler() {
              this.camera.reset();
              this.windowResizeHandler();
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
                return part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, this.canvas);
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
              var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this), escapeKeyDownHandler = this.escapeKeyDownHandler.bind(this);
              this.masks.forEach(function(mask) {
                return mask.initialise(this.masks, marginOfError);
              }.bind(this));
              this.parts.forEach(function(part) {
                return part.initialise(canvas, this.masks, marginOfError);
              }.bind(this));
              userInput.initialise(canvas);
              userInput.addUserInputHandler(userInputHandler);
              userInput.addEscapeKeyDownHandler(escapeKeyDownHandler);
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
      exports.relativeOffsetsFromAnglesAndDirections = relativeOffsetsFromAnglesAndDirections;
      var _matrix = require_matrix2();
      var _vector = require_vector();
      function relativeOffsetsFromAnglesAndDirections(angles, directions) {
        angles = (0, _vector).reflect2(angles);
        var reverseOrder = true, rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles, reverseOrder);
        var relativeOffsets = (0, _vector).transform4(directions, rotationsMatrix);
        relativeOffsets = (0, _vector).truncate4(relativeOffsets);
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
        function Pan2(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
          _classCallCheck(this, Pan2);
          this.offsets = offsets;
          this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
          this.relativeMouseCoordinatesMultiplier = relativeMouseCoordinatesMultiplier;
        }
        _createClass(Pan2, [
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
              relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier);
              var scaledReflectedRelativeMouseCoordinates = (0, _vector).reflect2((0, _vector).scale2(relativeMouseCoordinates, 1)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
                mouseWheelDelta,
                0
              ]), relativeOffsets = (0, _offsets).relativeOffsetsFromAnglesAndDirections(angles, directions, 1);
              this.offsets = (0, _vector).add3(this.offsets, relativeOffsets);
            }
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              this.offsets = (0, _vector).scale3(this.offsets, magnification);
              this.mouseWheelDeltaMultiplier = this.mouseWheelDeltaMultiplier * magnification;
              this.relativeMouseCoordinatesMultiplier = this.relativeMouseCoordinatesMultiplier * magnification;
            }
          }
        ], [
          {
            key: "fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier",
            value: function fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
              var offsets = initialOffsets, pan = new Pan2(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
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
      var _constants = require_constants();
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
      var Tilt = /* @__PURE__ */ function() {
        function Tilt2(angles, clockwise) {
          _classCallCheck(this, Tilt2);
          this.angles = angles;
          this.clockwise = clockwise;
        }
        _createClass(Tilt2, [
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
              relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER);
              var multiplier = this.clockwise ? 1 : -1, matrix = [
                0,
                +multiplier,
                -multiplier,
                0
              ], relativeAngles = (0, _vector).transform2(relativeMouseCoordinates, matrix);
              this.angles = (0, _vector).add2(this.angles, relativeAngles);
            }
          }
        ], [
          {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
              var angles = initialAngles, clockwise = false, tilt = new Tilt2(angles, clockwise);
              return tilt;
            }
          },
          {
            key: "fromInitialAnglesAndClockwise",
            value: function fromInitialAnglesAndClockwise(initialAngles, clockwise) {
              var angles = initialAngles, tilt = new Tilt2(angles, clockwise);
              return tilt;
            }
          }
        ]);
        return Tilt2;
      }();
      exports.default = Tilt;
    }
  });

  // lib/utilities/localStorage.js
  var require_localStorage = __commonJS({
    "lib/utilities/localStorage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getJSON = getJSON;
      exports.setJSON = setJSON;
      exports.removeJSON = removeJSON;
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
      exports.default = void 0;
      var _pan = _interopRequireDefault2(require_pan());
      var _tilt = _interopRequireDefault2(require_tilt());
      var _camera = _interopRequireDefault2(require_camera());
      var _vector = require_vector();
      var _localStorage = require_localStorage();
      var _constants = require_constants();
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
        function GamingCamera2(zFar, zNear, fieldOfView, pan, tilt, persist) {
          _classCallCheck(this, GamingCamera2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera2).call(this, zFar, zNear, fieldOfView));
          _this.pan = pan;
          _this.tilt = tilt;
          _this.persist = persist;
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
            key: "doesPersist",
            value: function doesPersist() {
              return this.persist;
            }
          },
          {
            key: "reset",
            value: function reset() {
              var key = _constants.GAMING_CAMERA;
              (0, _localStorage).removeJSON(key);
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
              var camera = this, angles = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets();
              if (persist) {
                var key = _constants.GAMING_CAMERA, angles = this.tilt.getAngles(), json = {
                  angles,
                  offsets
                };
                (0, _localStorage).setJSON(key, json);
              }
              var offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromNothing(), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
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
              var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), gamingCamera = _camera.default.fromProperties(GamingCamera2, properties, pan, tilt, persist);
              return gamingCamera;
            }
          }
        ]);
        return GamingCamera2;
      }(_camera.default);
      exports.default = GamingCamera;
      function panFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelDeltaMultiplier = properties.mouseWheelDeltaMultiplier, mouseWheelDeltaMultiplier = _mouseWheelDeltaMultiplier === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER : _mouseWheelDeltaMultiplier, _relativeMouseCoordinatesMultiplier = properties.relativeMouseCoordinatesMultiplier, relativeMouseCoordinatesMultiplier = _relativeMouseCoordinatesMultiplier === void 0 ? _defaults.DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER : _relativeMouseCoordinatesMultiplier;
        var _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _initialPosition;
        var initialOffsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER);
        if (persist) {
          var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets;
          }
        }
        var pan = _pan.default.fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
        return pan;
      }
      function tiltFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist;
        var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles;
        initialAngles = (0, _vector).scale2(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
        if (persist) {
          var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
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
        function Zoom2(distance, minimumDistance, mouseWheelDeltaMultiplier) {
          _classCallCheck(this, Zoom2);
          this.distance = distance;
          this.minimumDistance = minimumDistance;
          this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
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
          },
          {
            key: "magnify",
            value: function magnify(magnification) {
              this.distance = this.distance * magnification;
              this.minimumDistance = this.minimumDistance * magnification;
              this.mouseWheelDeltaMultiplier = this.mouseWheelDeltaMultiplier * magnification;
            }
          }
        ], [
          {
            key: "fromInitialDistanceAndMouseWheelDeltaMultiplier",
            value: function fromInitialDistanceAndMouseWheelDeltaMultiplier(initialDistance, mouseWheelDeltaMultiplier) {
              var distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, zoom = new Zoom2(distance, minimumDistance, mouseWheelDeltaMultiplier);
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
      var _vector = require_vector();
      var _localStorage = require_localStorage();
      var _constants = require_constants();
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
        function DesignCamera2(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
          _classCallCheck(this, DesignCamera2);
          var _this;
          _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignCamera2).call(this, zFar, zNear, fieldOfView));
          _this.pan = pan;
          _this.tilt = tilt;
          _this.zoom = zoom;
          _this.persist = persist;
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
            key: "doesPersist",
            value: function doesPersist() {
              return this.persist;
            }
          },
          {
            key: "reset",
            value: function reset() {
              var key = _constants.DESIGN_CAMERA;
              (0, _localStorage).removeJSON(key);
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
              var camera = this, angles = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance();
              if (persist) {
                var key = _constants.DESIGN_CAMERA, json = {
                  angles,
                  offsets,
                  distance
                };
                (0, _localStorage).setJSON(key, json);
              }
              var offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromDistance(distance), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
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
              var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), zoom = zoomFromProperties(properties), designCamera = _camera.default.fromProperties(DesignCamera2, properties, pan, tilt, zoom, persist);
              return designCamera;
            }
          }
        ]);
        return DesignCamera2;
      }(_camera.default);
      exports.default = DesignCamera;
      function panFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelDeltaMultiplier = properties.mouseWheelDeltaMultiplier, mouseWheelDeltaMultiplier = _mouseWheelDeltaMultiplier === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER : _mouseWheelDeltaMultiplier, _relativeMouseCoordinatesMultiplier = properties.relativeMouseCoordinatesMultiplier, relativeMouseCoordinatesMultiplier = _relativeMouseCoordinatesMultiplier === void 0 ? _defaults.DEFAULT_RELATIVE_MOUSE_COORDINATES_MULTIPLIER : _relativeMouseCoordinatesMultiplier;
        var _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _initialOffsets;
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets;
          }
        }
        var pan = _pan.default.fromInitialOffsetsMouseWheelDeltaMultiplierAndRelativeMouseCoordinatesMultiplier(initialOffsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
        return pan;
      }
      function tiltFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist;
        var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles;
        initialAngles = (0, _vector).scale2(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var angles = json.angles;
            initialAngles = angles;
          }
        }
        var tilt = _tilt.default.fromInitialAngles(initialAngles);
        return tilt;
      }
      function zoomFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelDeltaMultiplier = properties.mouseWheelDeltaMultiplier, mouseWheelDeltaMultiplier = _mouseWheelDeltaMultiplier === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_DELTA_MULTIPLIER : _mouseWheelDeltaMultiplier;
        var _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _initialDistance;
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var distance = json.distance;
            initialDistance = distance;
          }
        }
        var zoom = _zoom.default.fromInitialDistanceAndMouseWheelDeltaMultiplier(initialDistance, mouseWheelDeltaMultiplier);
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
                var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets2, indexTuple) {
                  var coordinateTuples = this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, this.colour, marginOfError), facet = colouredFacet;
                  if (facet !== null) {
                    (0, _array).add(facets2, facet);
                  }
                  return facets2;
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
                var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets2, indexTuple, index) {
                  var vertexTextureCoordinateTuples = this.textureCoordinates[index], coordinateTuples = this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, this.imageName, marginOfError), facet = texturedFacet;
                  if (facet !== null) {
                    (0, _array).add(facets2, facet);
                  }
                  return facets2;
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
      Object.defineProperty(exports, "vectorMaths", {
        enumerable: true,
        get: function() {
          return _vector.default;
        }
      });
      Object.defineProperty(exports, "matrixMaths", {
        enumerable: true,
        get: function() {
          return _matrix.default;
        }
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
      var _vector = _interopRequireDefault2(require_vector());
      var _matrix = _interopRequireDefault2(require_matrix());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZWxlbWVudC5qcyIsICJzcmMvbWF0aHMvdmVjdG9yLmpzIiwgInNyYy9tYXRocy9tYXRyaXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvcGF0aC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb250ZW50VHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FqYXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgInNyYy91dGlsaXRpZXMvbWF0cml4LmpzIiwgInNyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvZnVuY3Rpb24uanMiLCAic3JjL3JlYWN0LmpzIiwgInNyYy9kZWZhdWx0cy5qcyIsICJzcmMvbWl4aW5zL2RlcHRoLmpzIiwgInNyYy9lcnJvcnMuanMiLCAic3JjL21peGlucy9zaGFkZXIuanMiLCAic3JjL21peGlucy9idWZmZXIuanMiLCAic3JjL21peGlucy9jb2xvdXIuanMiLCAic3JjL21peGlucy9tYXRyaXguanMiLCAic3JjL21peGlucy90ZXh0dXJlLmpzIiwgInNyYy9taXhpbnMvcHJvZ3JhbS5qcyIsICJzcmMvbWl4aW5zL2JsZW5kaW5nLmpzIiwgInNyYy9taXhpbnMvbG9jYXRpb24uanMiLCAic3JjL2NhbnZhcy5qcyIsICJzcmMvcHJpbWl0aXZlL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy9taWRQb2ludC5qcyIsICJzcmMvcHJpbWl0aXZlL2VkZ2UvbWFza2luZy5qcyIsICJzcmMvdXRpbGl0aWVzL2FwcHJveGltYXRlLmpzIiwgInNyYy91dGlsaXRpZXMvYW5nbGUuanMiLCAic3JjL3V0aWxpdGllcy9xdWF0ZXJuaW9uLmpzIiwgInNyYy91dGlsaXRpZXMvcm90YXRpb24uanMiLCAic3JjL3V0aWxpdGllcy9pbnRlcnNlY3Rpb24uanMiLCAic3JjL3ByaW1pdGl2ZS92ZXJ0aWNhbExpbmUuanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0aWNlcy5qcyIsICJzcmMvcHJpbWl0aXZlL21hc2tpbmdGYWNldC5qcyIsICJzcmMvZWxlbWVudC9tYXNrLmpzIiwgInNyYy9yZW5kZXJlci5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9saWdodGluZy5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3Bvc2l0aW9uLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0uanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIiwgInNyYy9lbGVtZW50L3BhcnQuanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhLmpzIiwgInNyYy9rZXlDb2Rlcy5qcyIsICJzcmMvZXZlbnRUeXBlcy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvdXNlcklucHV0LmpzIiwgInNyYy91dGlsaXRpZXMvZWxlbWVudC5qcyIsICJzcmMvZWxlbWVudC9zY2VuZS5qcyIsICJzcmMvdXRpbGl0aWVzL29mZnNldHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvcGFuLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCAic3JjL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2UuanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy96b29tLmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiLCAic3JjL3V0aWxpdGllcy9wcmVsb2FkLmpzIiwgInNyYy9wcmltaXRpdmUvbm9ybWFsLmpzIiwgInNyYy9wcmltaXRpdmUvdmVydGV4LmpzIiwgInNyYy91dGlsaXRpZXMvZmFjZXQuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsICJzcmMvdXRpbGl0aWVzL3RleHR1cmUuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy94Z2wuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9jb2xvdXJlZFNxdWFyZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2ZhY2UuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9jdWJlLmpzIiwgInNyYy9leGFtcGxlL2N1YmUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUuanMiLCAic3JjL2V4YW1wbGUvdGlsaW5nLmpzIiwgInNyYy9leGFtcGxlL3NpbXBsZS5qcyIsICJzcmMvZXhhbXBsZS9tYXNraW5nLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRUcmlhbmdsZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3NpZGUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9weXJhbWlkLmpzIiwgInNyYy9leGFtcGxlL3B5cmFtaWQuanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSBcIndpZHRoXCI7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gXCJoZWlnaHRcIjtcbmV4cG9ydCBjb25zdCBDQU5WQVMgPSBcImNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFOT05ZTU9VUyA9IFwiYW5vbnltb3VzXCI7XG5leHBvcnQgY29uc3QgR0FNSU5HX0NBTUVSQSA9IFwiZ2FtaW5nX2NhbWVyYVwiO1xuZXhwb3J0IGNvbnN0IERFU0lHTl9DQU1FUkEgPSBcImRlc2lnbl9jYW1lcmFcIjtcbmV4cG9ydCBjb25zdCBWRVJUSUNFU19MRU5HVEggPSAzO1xuZXhwb3J0IGNvbnN0IE1JTklNVU1fRElTVEFOQ0UgPSAxO1xuZXhwb3J0IGNvbnN0IElOVkVSVF9NVUxUSVBMSUVSID0gLTE7XG5leHBvcnQgY29uc3QgQU5HTEVTX01VTFRJUExJRVIgPSAwLjAxO1xuZXhwb3J0IGNvbnN0IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIk1PWl9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8yKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8zKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QzKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0gKyB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IGF4ID0gdmVjdG9yQVswXSwgYXkgPSB2ZWN0b3JBWzFdLCBheiA9IHZlY3RvckFbMl0sXG4gICAgICAgIGJ4ID0gdmVjdG9yQlswXSwgYnkgPSB2ZWN0b3JCWzFdLCBieiA9IHZlY3RvckJbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBheSAqIGJ6IC0gYXogKiBieSxcbiAgICBheiAqIGJ4IC0gYXggKiBieixcbiAgICBheCAqIGJ5IC0gYXkgKiBieCxcblxuICBdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM10sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcbiAgICAgIHcgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDIodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgLXZlY3RvclswXSxcbiAgICAtdmVjdG9yWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDModmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgLXZlY3RvclswXSxcbiAgICAtdmVjdG9yWzFdLFxuICAgIC12ZWN0b3JbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0NCh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAtdmVjdG9yWzBdLFxuICAgIC12ZWN0b3JbMV0sXG4gICAgLXZlY3RvclsyXSxcbiAgICAtdmVjdG9yWzNdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGU0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSxcbiAgICB2ZWN0b3JbMV0sXG4gICAgdmVjdG9yWzJdXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUzKHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbM10gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSArIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAtIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAqIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzJdICogeSxcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTModmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbM10gKiB5ICsgbWF0cml4WzZdICogeixcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzRdICogeSArIG1hdHJpeFs3XSAqIHosXG4gICAgbWF0cml4WzJdICogeCArIG1hdHJpeFs1XSAqIHkgKyBtYXRyaXhbOF0gKiB6LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHggKyBtYXRyaXhbIDRdICogeSArIG1hdHJpeFsgOF0gKiB6ICsgbWF0cml4WzEyXSAqIHcsXG4gICAgbWF0cml4WyAxXSAqIHggKyBtYXRyaXhbIDVdICogeSArIG1hdHJpeFsgOV0gKiB6ICsgbWF0cml4WzEzXSAqIHcsXG4gICAgbWF0cml4WyAyXSAqIHggKyBtYXRyaXhbIDZdICogeSArIG1hdHJpeFsxMF0gKiB6ICsgbWF0cml4WzE0XSAqIHcsXG4gICAgbWF0cml4WyAzXSAqIHggKyBtYXRyaXhbIDddICogeSArIG1hdHJpeFsxMV0gKiB6ICsgbWF0cml4WzE1XSAqIHcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgemVybzIsXG4gIHplcm8zLFxuICB6ZXJvNCxcbiAgbGVuZ3RoMixcbiAgbGVuZ3RoMyxcbiAgbGVuZ3RoNCxcbiAgZG90MixcbiAgZG90MyxcbiAgZG90NCxcbiAgY3Jvc3MzLFxuICBub3JtYWxpc2UyLFxuICBub3JtYWxpc2UzLFxuICBub3JtYWxpc2U0LFxuICByZWZsZWN0MixcbiAgcmVmbGVjdDMsXG4gIHJlZmxlY3Q0LFxuICB0cnVuY2F0ZTQsXG4gIHNjYWxlMixcbiAgc2NhbGUzLFxuICBzY2FsZTQsXG4gIGFkZDIsXG4gIGFkZDMsXG4gIGFkZDQsXG4gIHN1YnRyYWN0MixcbiAgc3VidHJhY3QzLFxuICBzdWJ0cmFjdDQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIHRyYW5zZm9ybTIsXG4gIHRyYW5zZm9ybTMsXG4gIHRyYW5zZm9ybTRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBhMCA9IG1hdHJpeEFbMF0sXG4gICAgICAgIGExID0gbWF0cml4QVsxXSxcbiAgICAgICAgYTIgPSBtYXRyaXhBWzJdLFxuICAgICAgICBhMyA9IG1hdHJpeEFbM10sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcbiAgICAgICAgYTQgPSBtYXRyaXhBWzRdLFxuICAgICAgICBhNSA9IG1hdHJpeEFbNV0sXG4gICAgICAgIGE2ID0gbWF0cml4QVs2XSxcbiAgICAgICAgYTcgPSBtYXRyaXhBWzddLFxuICAgICAgICBhOCA9IG1hdHJpeEFbOF0sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdLFxuICAgICAgICBiNCA9IG1hdHJpeEJbNF0sXG4gICAgICAgIGI1ID0gbWF0cml4Qls1XSxcbiAgICAgICAgYjYgPSBtYXRyaXhCWzZdLFxuICAgICAgICBiNyA9IG1hdHJpeEJbN10sXG4gICAgICAgIGI4ID0gbWF0cml4Qls4XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NChtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0ICBhMCA9IG1hdHJpeEFbIDBdLFxuICAgICAgICAgYTEgPSBtYXRyaXhBWyAxXSxcbiAgICAgICAgIGEyID0gbWF0cml4QVsgMl0sXG4gICAgICAgICBhMyA9IG1hdHJpeEFbIDNdLFxuICAgICAgICAgYTQgPSBtYXRyaXhBWyA0XSxcbiAgICAgICAgIGE1ID0gbWF0cml4QVsgNV0sXG4gICAgICAgICBhNiA9IG1hdHJpeEFbIDZdLFxuICAgICAgICAgYTcgPSBtYXRyaXhBWyA3XSxcbiAgICAgICAgIGE4ID0gbWF0cml4QVsgOF0sXG4gICAgICAgICBhOSA9IG1hdHJpeEFbIDldLFxuICAgICAgICBhMTAgPSBtYXRyaXhBWzEwXSxcbiAgICAgICAgYTExID0gbWF0cml4QVsxMV0sXG4gICAgICAgIGExMiA9IG1hdHJpeEFbMTJdLFxuICAgICAgICBhMTMgPSBtYXRyaXhBWzEzXSxcbiAgICAgICAgYTE0ID0gbWF0cml4QVsxNF0sXG4gICAgICAgIGExNSA9IG1hdHJpeEFbMTVdLFxuXG4gICAgICAgICBiMCA9IG1hdHJpeEJbIDBdLFxuICAgICAgICAgYjEgPSBtYXRyaXhCWyAxXSxcbiAgICAgICAgIGIyID0gbWF0cml4QlsgMl0sXG4gICAgICAgICBiMyA9IG1hdHJpeEJbIDNdLFxuICAgICAgICAgYjQgPSBtYXRyaXhCWyA0XSxcbiAgICAgICAgIGI1ID0gbWF0cml4QlsgNV0sXG4gICAgICAgICBiNiA9IG1hdHJpeEJbIDZdLFxuICAgICAgICAgYjcgPSBtYXRyaXhCWyA3XSxcbiAgICAgICAgIGI4ID0gbWF0cml4QlsgOF0sXG4gICAgICAgICBiOSA9IG1hdHJpeEJbIDldLFxuICAgICAgICBiMTAgPSBtYXRyaXhCWzEwXSxcbiAgICAgICAgYjExID0gbWF0cml4QlsxMV0sXG4gICAgICAgIGIxMiA9IG1hdHJpeEJbMTJdLFxuICAgICAgICBiMTMgPSBtYXRyaXhCWzEzXSxcbiAgICAgICAgYjE0ID0gbWF0cml4QlsxNF0sXG4gICAgICAgIGIxNSA9IG1hdHJpeEJbMTVdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBtMCA9IG1hdHJpeFswXSxcbiAgICAgICAgbTEgPSBtYXRyaXhbMV0sXG4gICAgICAgIG0yID0gbWF0cml4WzJdLFxuICAgICAgICBtMyA9IG1hdHJpeFszXSxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IG0wICogbTMgLSBtMiAqIG0xO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICArbTMgLyBkZXRlcm1pbmFudCwgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WzBdLCBtMDEgPSBtYXRyaXhbMV0sIG0wMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTEwID0gbWF0cml4WzNdLCBtMTEgPSBtYXRyaXhbNF0sIG0xMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgbTIwID0gbWF0cml4WzZdLCBtMjEgPSBtYXRyaXhbN10sIG0yMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSAgbTIyICogbTExIC0gbTEyICogbTIxLFxuICAgICAgICBiMTEgPSAtbTIyICogbTEwICsgbTEyICogbTIwLFxuICAgICAgICBiMjEgPSAgbTIxICogbTEwIC0gbTExICogbTIwLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAwICogYjAxICsgbTAxICogYjExICsgbTAyICogYjIxO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpIC8gZGV0ZXJtaW5hbnQsICggbTEyICogbTAxIC0gbTAyICogbTExKSAvIGRldGVybWluYW50LFxuICAgICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTIyICogbTAwIC0gbTAyICogbTIwKSAvIGRldGVybWluYW50LCAoLW0xMiAqIG0wMCArIG0wMiAqIG0xMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LCAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKCBtMTEgKiBtMDAgLSBtMDEgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WyAwXSwgbTAxID0gbWF0cml4WyAxXSwgbTAyID0gbWF0cml4WyAyXSwgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgbTEwID0gbWF0cml4WyA0XSwgbTExID0gbWF0cml4WyA1XSwgbTEyID0gbWF0cml4WyA2XSwgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgbTIwID0gbWF0cml4WyA4XSwgbTIxID0gbWF0cml4WyA5XSwgbTIyID0gbWF0cml4WzEwXSwgbTIzID0gbWF0cml4WzExXSxcbiAgICAgICAgbTMwID0gbWF0cml4WzEyXSwgbTMxID0gbWF0cml4WzEzXSwgbTMyID0gbWF0cml4WzE0XSwgbTMzID0gbWF0cml4WzE1XSxcblxuICAgICAgICBiMDAgPSBtMDAgKiBtMTEgLSBtMDEgKiBtMTAsXG4gICAgICAgIGIwMSA9IG0wMCAqIG0xMiAtIG0wMiAqIG0xMCxcbiAgICAgICAgYjAyID0gbTAwICogbTEzIC0gbTAzICogbTEwLFxuICAgICAgICBiMDMgPSBtMDEgKiBtMTIgLSBtMDIgKiBtMTEsXG4gICAgICAgIGIwNCA9IG0wMSAqIG0xMyAtIG0wMyAqIG0xMSxcbiAgICAgICAgYjA1ID0gbTAyICogbTEzIC0gbTAzICogbTEyLFxuICAgICAgICBiMDYgPSBtMjAgKiBtMzEgLSBtMjEgKiBtMzAsXG4gICAgICAgIGIwNyA9IG0yMCAqIG0zMiAtIG0yMiAqIG0zMCxcbiAgICAgICAgYjA4ID0gbTIwICogbTMzIC0gbTIzICogbTMwLFxuICAgICAgICBiMDkgPSBtMjEgKiBtMzIgLSBtMjIgKiBtMzEsXG4gICAgICAgIGIxMCA9IG0yMSAqIG0zMyAtIG0yMyAqIG0zMSxcbiAgICAgICAgYjExID0gbTIyICogbTMzIC0gbTIzICogbTMyLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICAobTExICogYjExIC0gbTEyICogYjEwICsgbTEzICogYjA5KSAvIGRldGVybWluYW50LCAobTAyICogYjEwIC0gbTAxICogYjExIC0gbTAzICogYjA5KSAvIGRldGVybWluYW50LCAobTMxICogYjA1IC0gbTMyICogYjA0ICsgbTMzICogYjAzKSAvIGRldGVybWluYW50LCAobTIyICogYjA0IC0gbTIxICogYjA1IC0gbTIzICogYjAzKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMiAqIGIwOCAtIG0xMCAqIGIxMSAtIG0xMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wMCAqIGIxMSAtIG0wMiAqIGIwOCArIG0wMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0zMiAqIGIwMiAtIG0zMCAqIGIwNSAtIG0zMyAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG0yMCAqIGIwNSAtIG0yMiAqIGIwMiArIG0yMyAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTAgKiBiMTAgLSBtMTEgKiBiMDggKyBtMTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDEgKiBiMDggLSBtMDAgKiBiMTAgLSBtMDMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzAgKiBiMDQgLSBtMzEgKiBiMDIgKyBtMzMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjEgKiBiMDIgLSBtMjAgKiBiMDQgLSBtMjMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTExICogYjA3IC0gbTEwICogYjA5IC0gbTEyICogYjA2KSAvIGRldGVybWluYW50LCAobTAwICogYjA5IC0gbTAxICogYjA3ICsgbTAyICogYjA2KSAvIGRldGVybWluYW50LCAobTMxICogYjAxIC0gbTMwICogYjAzIC0gbTMyICogYjAwKSAvIGRldGVybWluYW50LCAobTIwICogYjAzIC0gbTIxICogYjAxICsgbTIyICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbMl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzNdLCBtYXRyaXhbNl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs3XSxcbiAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XSwgbWF0cml4WzhdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdLCBtYXRyaXhbIDRdLCBtYXRyaXhbIDhdLCBtYXRyaXhbMTJdLFxuICAgIG1hdHJpeFsgMV0sIG1hdHJpeFsgNV0sIG1hdHJpeFsgOV0sIG1hdHJpeFsxM10sXG4gICAgbWF0cml4WyAyXSwgbWF0cml4WyA2XSwgbWF0cml4WzEwXSwgbWF0cml4WzE0XSxcbiAgICBtYXRyaXhbIDNdLCBtYXRyaXhbIDddLCBtYXRyaXhbMTFdLCBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCwgbWF0cml4WyAxXSAqIHgsIG1hdHJpeFsgMl0gKiB4LCBtYXRyaXhbIDNdICogeCxcbiAgICBtYXRyaXhbIDRdICogeSwgbWF0cml4WyA1XSAqIHksIG1hdHJpeFsgNl0gKiB5LCBtYXRyaXhbIDddICogeSxcbiAgICBtYXRyaXhbIDhdICogeiwgbWF0cml4WyA5XSAqIHosIG1hdHJpeFsxMF0gKiB6LCBtYXRyaXhbMTFdICogeixcbiAgICBtYXRyaXhbMTJdICogMSwgbWF0cml4WzEzXSAqIDEsIG1hdHJpeFsxNF0gKiAxLCBtYXRyaXhbMTVdICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgICBtMjMgPSBtYXRyaXhbMTFdLFxuXG4gICAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgbTAwICogYjAwICsgbTEwICogYjAxICsgbTIwICogYjAyLCBtMDEgKiBiMDAgKyBtMTEgKiBiMDEgKyBtMjEgKiBiMDIsIG0wMiAqIGIwMCArIG0xMiAqIGIwMSArIG0yMiAqIGIwMiwgbTAzICogYjAwICsgbTEzICogYjAxICsgbTIzICogYjAyLFxuICAgICAgbTAwICogYjEwICsgbTEwICogYjExICsgbTIwICogYjEyLCBtMDEgKiBiMTAgKyBtMTEgKiBiMTEgKyBtMjEgKiBiMTIsIG0wMiAqIGIxMCArIG0xMiAqIGIxMSArIG0yMiAqIGIxMiwgbTAzICogYjEwICsgbTEzICogYjExICsgbTIzICogYjEyLFxuICAgICAgbTAwICogYjIwICsgbTEwICogYjIxICsgbTIwICogYjIyLCBtMDEgKiBiMjAgKyBtMTEgKiBiMjEgKyBtMjEgKiBiMjIsIG0wMiAqIGIyMCArIG0xMiAqIGIyMSArIG0yMiAqIGIyMiwgbTAzICogYjIwICsgbTEzICogYjIxICsgbTIzICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTJdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxM10sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE0XSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcblxuICAgICAgICBtMDAgPSBtYXRyaXhbIDBdLFxuICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICBtMTIgPSBtYXRyaXhbIDZdLFxuICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICBtMjEgPSBtYXRyaXhbIDldLFxuICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICBtMjMgPSBtYXRyaXhbMTFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTExLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjMsXG4gICAgbTAwICogeCArIG0xMCAqIHkgKyBtMjAgKiB6ICsgbWF0cml4WzEyXSwgbTAxICogeCArIG0xMSAqIHkgKyBtMjEgKiB6ICsgbWF0cml4WzEzXSwgbTAyICogeCArIG0xMiAqIHkgKyBtMjIgKiB6ICsgbWF0cml4WzE0XSwgbTAzICogeCArIG0xMyAqIHkgKyBtMjMgKiB6ICsgbWF0cml4WzE1XSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmaWVsZE9mVmlldyAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcblxuICByZXR1cm4gKFtcblxuICAgIGYgLyBhc3BlY3RSYXRpbywgMCwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICBmLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICh6RmFyICsgek5lYXIpICogbmYsICAgIC0xLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKDIgKiB6RmFyICogek5lYXIpICogbmYsIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaWRlbnRpdHkyLFxuICBpZGVudGl0eTMsXG4gIGlkZW50aXR5NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgaW52ZXJ0MixcbiAgaW52ZXJ0MyxcbiAgaW52ZXJ0NCxcbiAgdHJhbnNwb3NlMixcbiAgdHJhbnNwb3NlMyxcbiAgdHJhbnNwb3NlNCxcbiAgc2NhbGU0LFxuICByb3RhdGU0LFxuICB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4ID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgQ1RSTF9DID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVCA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEUgPSBcImNvbnRlbnQtdHlwZVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgW2VsZW1lbnRPckFycmF5Ml07XG4gIFxuICBwdXNoKGFycmF5MSwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgY29uc3QgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EX0NIQVJBQ1RFUiA9IFwiJlwiO1xuZXhwb3J0IGNvbnN0IExJTkVfRkVFRF9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3Qgb3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLFxuICAgICAgICBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBvdmVyd3JpdHRlbiA9IG93blByb3BlcnR5TmFtZXMuc29tZSgob3duUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID0gb3duUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAobG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICBoZWFkZXJzW293blByb3BlcnR5TmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAoIW92ZXJ3cml0dGVuKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IG93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSxcbiAgICAgICAgbG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lcyA9IG93blByb3BlcnR5TmFtZXMubWFwKChvd25Qcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWUgPSBvd25Qcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIHJldHVybiBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWU7XG4gICAgICAgIH0pLFxuICAgICAgICBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzSW5jbHVkZXNMb3dlcmNhc2VOYW1lID0gbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lcy5pbmNsdWRlcyhsb3dlcmNhc2VOYW1lKTtcblxuICBpZiAoIWxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXNJbmNsdWRlc0xvd2VyY2FzZU5hbWUpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvdmVyd3JpdGUsXG4gIHVuZGVyd3JpdGUsXG4gIHBvcnRGcm9tSG9zdCxcbiAgc2VjdXJlRnJvbUhvc3QsXG4gIGhvc3RuYW1lRnJvbUhvc3QsXG4gIHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMsXG4gIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVyc1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaywgaW5kZXgpID0+IHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBQ0NFUFQsIENPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgdW5kZXJ3cml0ZSwgdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IG51bGw7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgYm9keSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9EO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycyk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlKGhlYWRlcnMpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGJvZHksICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBib2R5ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZVRleHQgfSA9IHhtbEh0dHBSZXF1ZXN0O1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGJvZHkgPSByZXNwb25zZVRleHQ7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGJvZHksICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGJvZHkgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgYm9keSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhib2R5LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICBpZiAoYWNjZXB0ICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihBQ0NFUFQsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRSwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGJvZHkgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGJvZHkpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFQsICAvLy9cbiAgICAgICAgdmFsdWUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEUsICAvLy9cbiAgICAgICAgdmFsdWUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGFycmF5LCBlbGVtZW50KSB7XG4gIGFycmF5LnB1c2goZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlkZW50aXR5NCwgc2NhbGU0LCBpbnZlcnQ0LCByb3RhdGU0LCB0cmFuc2xhdGU0LCB0cmFuc3Bvc2U0LCBwZXJzcGVjdGl2ZTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIgPSBmYWxzZSkge1xuICBsZXQgcm90YXRpb25zTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gMCwgLy8vXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsICAvLy8vXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLCAvLy9cbiAgICAgICAgekFuZ2xlID0gdGhpcmRBbmdsZSwgIC8vL1xuICAgICAgICB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgICB5QXhpcyA9IFsgMCwgMSwgMCBdLFxuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdO1xuXG4gIGlmIChyZXZlcnNlT3JkZXIpIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgfSBlbHNlIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgfVxuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucykge1xuICBjb25zdCBzY2FsYXIgPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiwgLy8vXG4gICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhyb3RhdGlvbnMsIHNjYWxhciksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSB7XG4gIGxldCBub3JtYWxzTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbnNNYXRyaXgpOyAvLy9cblxuICBub3JtYWxzTWF0cml4ID0gdHJhbnNwb3NlNChub3JtYWxzTWF0cml4KTtcblxuICByZXR1cm4gbm9ybWFsc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSB7XG4gIGNvbnN0IHpGYXIgPSBjYW1lcmEuZ2V0WkZhcigpLFxuICAgICAgICB6TmVhciA9IGNhbWVyYS5nZXRaTmVhcigpLFxuICAgICAgICB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGZpZWxkT2ZWaWV3ID0gY2FtZXJhLmdldEZpZWxkT2ZWaWV3KCksXG4gICAgICAgIGFzcGVjdFJhdGlvID0gKCB3aWR0aCAvIGhlaWdodCApLFxuICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gIHJldHVybiBwcm9qZWN0aW9uTWF0cml4O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtdWx0aXBseTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWFza1JlZmVyZW5jZSA9IG1hc2tSZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRNYXNrUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbjtcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrUmVmZXJlbmNlLCBtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2sgPSB0aGlzLmZpbmRNYXNrKG1hc2tSZWZlcmVuY2UsIG1hc2tzKTtcblxuICAgIGlmIChtYXNrICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZmluZE1hc2sobWFza1JlZmVyZW5jZSwgbWFza3MpIHtcbiAgICBjb25zdCBtYXNrID0gbWFza3MuZmluZCgobWFzaykgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWFzay5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbWFza1JlZmVyZW5jZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBtYXNrO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBoaWRkZW4gPSBoaWRkZW4gfHwgdGhpcy5oaWRkZW47IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgYW1lbmRGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTtcblxuICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMubWFza1JlZmVyZW5jZSwgbWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIHsgc2NhbGUgPSBudWxsLCByb3RhdGlvbnMgPSBudWxsIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgbGV0IHsgcG9zaXRpb24gPSBudWxsIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IHNjYWxlMyhwb3NpdGlvbiwgbWFnbmlmaWNhdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQubWFnbmlmeShtYWduaWZpY2F0aW9uKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgbWFza1JlZmVyZW5jZSA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IG51bGwsIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgaGlkZGVuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGZ1bmN0aW9uRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25DYW52YXNFbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBmdW5jdGlvbkVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHplcm8yLCB6ZXJvMyB9IGZyb20gXCIuL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9SID0gMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0cgPSAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQiA9IDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9BID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0hPU1QgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVQVEggPSAxLjA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9aX0ZBUiA9IDEwMDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9aX05FQVIgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSElEREVOID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTSVNUID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVGQVVMVF9GSUVMRF9PRl9WSUVXID0gNDU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NQUdOSUZJQ0FUSU9OID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfQU5HTEVTID0gemVybzIoKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyA9IHplcm8zKCk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFID0gNTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gPSBbIDAsIDAsIDUgXTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgPSAwLjI1O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiA9IDAuMDI1O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0RFUFRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBERUZBVUxUX0RFUFRIKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gREVQVEhfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBERVBUSF9URVNULFxuICAgICAgICBkZXB0aENvbXBhcmlzb25GdW5jdGlvbiA9IExFUVVBTDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uKTtcbn1cblxuY29uc3QgZGVwdGhNaXhpbnMgPSB7XG4gIGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVwdGhNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTSEFERVJfRVJST1IgPSBcIlVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5cIjtcbmV4cG9ydCBjb25zdCBXRUJfR0xfQ09OVEVYVF9FUlJPUiA9IFwiVW5hYmxlIHRvIGdldCB0aGUgV2ViR0wgY29udGV4dC5cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hBREVSX0VSUk9SIH0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihTSEFERVJfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiBmcmFnbWVudFNoYWRlcjtcbn1cblxuY29uc3Qgc2hhZGVyTWl4aW5zID0ge1xuICBjcmVhdGVTaGFkZXIsXG4gIGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoYWRlck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICB1aW50MTZBcnJheSA9IG5ldyBVaW50MTZBcnJheShkYXRhKSxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgdWludDE2QXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gZWxlbWVudEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kQnVmZmVyKGJ1ZmZlciwgYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIEZMT0FUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdHlwZSA9IEZMT0FULFxuICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMDtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVMb2NhdGlvbik7XG59XG5cbmNvbnN0IGJ1ZmZlck1peGlucyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVmZmVyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX1IsIERFRkFVTFRfRywgREVGQVVMVF9CLCBERUZBVUxUX0EgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IERFRkFVTFRfUiwgZyA9IERFRkFVTFRfRywgYiA9IERFRkFVTFRfQiwgYSA9IERFRkFVTFRfQSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuY29uc3QgY29sb3VyTWl4aW5zID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG91ck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxuY29uc3QgbWF0cml4TWl4aW5zID0ge1xuICBhcHBseU1hdHJpeFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0cml4TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMsXG4gICAgICAgICBNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDLFxuICAgICAgICAgV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCkge1xuXHRjb25zdCB7IFJHQkEsIExJTkVBUiwgVU5TSUdORURfQllURSwgVEVYVFVSRTAsIFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBURVhUVVJFX1dSQVBfVCwgVU5QQUNLX0ZMSVBfWV9XRUJHTCwgQ0xBTVBfVE9fRURHRSwgTkVBUkVTVCwgUkVQRUFULCBURVhUVVJFX01JTl9GSUxURVIgfSA9IHRoaXMuY29udGV4dCxcblx0XHRcdFx0dGFyZ2V0ID0gVEVYVFVSRTAgKyBpbmRleCxcblx0XHRcdFx0bGV2ZWwgPSAwLFxuXHRcdFx0XHRpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdGZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuXHRcdFx0XHR0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQucGl4ZWxTdG9yZWkoVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICBpZiAocmVwZWF0KSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFJFUEVBVCk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIFJFUEVBVCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxuXG5cdHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgTElORUFSKTtcblxuXHRyZXR1cm4gdGV4dHVyZTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IChcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKVxuICApO1xuXG4gIGlmIChleHRlbnNpb24pIHtcbiAgICBjb25zdCB7IFRFWFRVUkVfMkQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICB7IE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQgfSA9IGV4dGVuc2lvbixcbiAgICAgICAgICBtYXhpbXVtID0gdGhpcy5jb250ZXh0LmdldFBhcmFtZXRlcihNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmYoVEVYVFVSRV8yRCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIG1heGltdW0pO1xuICB9XG59XG5cbmNvbnN0IHRleHR1cmVNaXhpbnMgPSB7XG4gIGNyZWF0ZVRleHR1cmUsXG4gIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZXh0dXJlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIHVzZVByb2dyYW0ocHJvZ3JhbSkge1xuICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxuY29uc3QgcHJvZ3JhbU1peGlucyA9IHtcbiAgY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZ3JhbU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxuY29uc3QgYmxlbmRpbmdNaXhpbnMgPSB7XG4gIGVuYWJsZUJsZW5kaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBibGVuZGluZ01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7XG4gIHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpO1xufVxuXG5jb25zdCBsb2NhdGlvbk1peGlucyA9IHtcbiAgZ2V0VW5pZm9ybUxvY2F0aW9uLFxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbixcbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvbk1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRlcHRoTWl4aW5zIGZyb20gXCIuL21peGlucy9kZXB0aFwiO1xuaW1wb3J0IHNoYWRlck1peGlucyBmcm9tIFwiLi9taXhpbnMvc2hhZGVyXCI7XG5pbXBvcnQgYnVmZmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9idWZmZXJcIjtcbmltcG9ydCBjb2xvdXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NvbG91clwiO1xuaW1wb3J0IG1hdHJpeE1peGlucyBmcm9tIFwiLi9taXhpbnMvbWF0cml4XCI7XG5pbXBvcnQgdGV4dHVyZU1peGlucyBmcm9tIFwiLi9taXhpbnMvdGV4dHVyZVwiO1xuaW1wb3J0IHByb2dyYW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Byb2dyYW1cIjtcbmltcG9ydCBibGVuZGluZ01peGlucyBmcm9tIFwiLi9taXhpbnMvYmxlbmRpbmdcIjtcbmltcG9ydCBsb2NhdGlvbk1peGlucyBmcm9tIFwiLi9taXhpbnMvbG9jYXRpb25cIjtcblxuaW1wb3J0IHsgV0VCX0dMX0NPTlRFWFRfRVJST1IgfSBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCB7IFdJRFRILCBIRUlHSFQsIENBTlZBUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IENBTlZBUykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFdJRFRILCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoSEVJR0hULCBoZWlnaHQpOyB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4ID0gMCxcbiAgICAgICAgICB5ID0gMDtcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JULFxuICAgICAgICAgIGNvdW50ID0gZmluaXNoIC0gc3RhcnQsXG4gICAgICAgICAgb2Zmc2V0ID0gc3RhcnQgKiAyOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGxvY2F0aW9uTWl4aW5zKTtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFdFQl9HTF9DT05URVhUX0VSUk9SKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdWJ0cmFjdDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4OyAgLy8vXG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzOyAgLy8vXG4gICAgICBDbGFzcyA9IEVkZ2U7IC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb24gPSB2ZXJ0aWNlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb24sIHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2NhbGVkVmVydGV4UG9zaXRpb24gPSBzY2FsZTModmVydGV4UG9zaXRpb24sIDEvMyk7XG5cbiAgICBtaWRQb2ludFBvc2l0aW9uID0gYWRkMyhtaWRQb2ludFBvc2l0aW9uLCBzY2FsZWRWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbiAgfSwgWyAwLCAwLCAwIF0pO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKSB7XG4gIG1pZFBvaW50UG9zaXRpb24gPSBbIC4uLm1pZFBvaW50UG9zaXRpb24uc2xpY2UoMCwgMiksIDAgXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIHx8IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuXG5pbXBvcnQgeyB0aGlyZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0VkZ2UgZXh0ZW5kcyBFZGdlIHtcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBtaWRQb2ludFBvc2l0aW9uID0gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnRQb3NpdGlvbiwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24pLCAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbiksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQgPSAhbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkgeyByZXR1cm4gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoTWFza2luZ0VkZ2UsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FuZ2xlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSB7XG4gIGNvbnN0IGV4dGVudCA9IG5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE5vcm1hbCA9IGV4dGVudCwgIC8vL1xuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UzKGF4aXNPZlJvdGF0aW9uKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyA9IHVuaXRBeGlzT2ZSb3RhdGlvbiwgIC8vL1xuICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gdGhpcmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlUG9zaXRpb24ocG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbWFnaW5hcnlRdWF0ZXJuaW9uID0gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbiksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uID0gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBvc2l0aW9uID0gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKChub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgLy8vXG5cbiAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zLnB1c2gobm9uTnVsbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhQb3NpdGlvbiwgc3RhcnRWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIG9mZnNldCA9IHNjYWxlMyhleHRlbnQsIGludGVyc2VjdGlvbiksXG4gICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gYWRkMyhzdGFydFZlcnRleFBvc2l0aW9uLCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3Qgcm90YXRlZFZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByb3RhdGVkVmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHJvdGF0ZWRWZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiByb3RhdGVkVmVydGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpIHsgIC8vL1xuICBjb25zdCBpbmRleGVzID0gaW5kZXhUdXBsZSwgLy8vXG4gICAgICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlID0gY29vcmRpbmF0ZVR1cGxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2tpbmdFZGdlIGZyb20gXCIuL2VkZ2UvbWFza2luZ1wiO1xuaW1wb3J0IFZlcnRpY2FsTGluZSBmcm9tIFwiLi92ZXJ0aWNhbExpbmVcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBwdXNoLCBzZXBhcmF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNraW5nRmFjZXQge1xuICBjb25zdHJ1Y3RvcihtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLm1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcztcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSB2ZXJ0aWNhbExpbmVzO1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldE1hc2tpbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNraW5nRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNhbExpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsTGluZXM7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldCA9IGZhY2V0LmNsb25lKCk7ICAvLy9cblxuICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzbWFsbGVyRmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICBtYXNrZWRTbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBzZXBhcmF0ZShzbWFsbGVyRmFjZXRzLCBtYXNrZWRTbWFsbGVyRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMsIChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE1hc2tlZCA9IHNtYWxsZXJGYWNldC5pc01hc2tlZChtYXNraW5nRmFjZXQpO1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9IG1hc2tlZFNtYWxsZXJGYWNldHMubGVuZ3RoO1xuXG4gICAgaWYgKG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPT09IDApIHtcbiAgICAgIHVubWFza2VkRmFjZXRzLnB1c2godW5tYXNrZWRGYWNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cy5mb3JFYWNoKCh1bm1hc2tlZFNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHB1c2godW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgbWFza2luZ0VkZ2UgPSBNYXNraW5nRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gbWFza2luZ0VkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXNraW5nRWRnZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUZBVUxUX0hJRERFTiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGhpZGRlbiwgcmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0SGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcikpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5tYWduaWZ5KG1hZ25pZmljYXRpb24pKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbiwgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgaGlkZGVuID0gREVGQVVMVF9ISURERU4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuLCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiwgbWVyZ2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBub3JtYWxzTWF0cml4TmFtZSA9IFwidU5vcm1hbHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRpbmdTb3VyY2U7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcG9zaXRpb25NYXRyaXhOYW1lID0gXCJ1UG9zaXRpb25NYXRyaXhcIjtcbmV4cG9ydCBjb25zdCByb3RhdGlvbnNNYXRyaXhOYW1lID0gXCJ1Um90YXRpb25zTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleFBvc2l0aW9uXCI7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRzTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uc01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uc01hdHJpeE5hbWV9ICogJHtvZmZzZXRzTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhDb2xvdXJcIlxuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuXG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4TmFtZSwgcm90YXRpb25zTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0c01hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5pbXBvcnQgeyBzYW1wbGVyTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmVcIjtcbmltcG9ydCBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCI7XG5pbXBvcnQgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvY29sb3VyXCI7XG5pbXBvcnQgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlc1wiO1xuaW1wb3J0IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuICBcbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcyk7ICAvLy9cbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQubWFnbmlmeShtYWduaWZpY2F0aW9uKSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlciAmJiBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyICYmIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9aX0ZBUiwgREVGQVVMVF9aX05FQVIsIERFRkFVTFRfRklFTERfT0ZfVklFVyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuekZhciA9IHpGYXI7XG4gICAgdGhpcy56TmVhciA9IHpOZWFyO1xuICAgIHRoaXMuZmllbGRPZlZpZXcgPSBmaWVsZE9mVmlldztcbiAgfVxuXG4gIGdldFpGYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuekZhcjtcbiAgfVxuXG4gIGdldFpOZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnpOZWFyO1xuICB9XG5cbiAgZ2V0RmllbGRPZlZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRPZlZpZXc7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLnpGYXIgPSB0aGlzLnpGYXIgKiBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMuek5lYXIgPSB0aGlzLnpOZWFyICogbWFnbmlmaWNhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHsgZmllbGRPZlZpZXcgPSBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBmaWVsZE9mVmlldyAqPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUjsgLy8vXG5cbiAgICBjb25zdCB7IHpGYXIgPSBERUZBVUxUX1pfRkFSLCB6TmVhciA9IERFRkFVTFRfWl9ORUFSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRVNDQVBFX0tFWV9DT0RFID0gMjc7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBLRVlVUF9FVkVOVF9UWVBFID0gXCJrZXl1cFwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV05fRVZFTlRfVFlQRSA9IFwia2V5ZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFVVBfRVZFTlRfVFlQRSA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFRE9XTl9FVkVOVF9UWVBFID0gXCJtb3VzZWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRU1PVkVfRVZFTlRfVFlQRSA9IFwibW91c2Vtb3ZlXCI7XG5leHBvcnQgY29uc3QgTU9VU0VXSEVFTF9FVkVOVF9UWVBFID0gXCJtb3VzZXdoZWVsXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVTQ0FQRV9LRVlfQ09ERSwgU0hJRlRfS0VZX0NPREUgfSBmcm9tIFwiLi4va2V5Q29kZXNcIjtcbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSwgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFVVBfRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFRE9XTl9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRVdIRUVMX0VWRU5UX1RZUEUsIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgS2V5RXZlbnRzIGZyb20gXCIuL2tleUV2ZW50c1wiO1xuaW1wb3J0IE1vdXNlRXZlbnRzIGZyb20gXCIuL21vdXNlRXZlbnRzXCI7XG5cbmltcG9ydCB7IHplcm8yLCBzdWJ0cmFjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7IHRoaXMua2V5RXZlbnRzLmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTsgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZSgpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnQsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IE1hc2sgZnJvbSBcIi4uL2VsZW1lbnQvbWFza1wiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IERFRkFVTFRfTUFHTklGSUNBVElPTiwgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHRoaXMuY2FudmFzLCByZW5kZXIpO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0LnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCB0aGlzLmNhbnZhcykpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5tYXNrcy5mb3JFYWNoKChtYXNrKSA9PiBtYXNrLm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0Lm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuXG4gICAgdGhpcy5jYW1lcmEubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlciA9IHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWFza3MuZm9yRWFjaCgobWFzaykgPT4gbWFzay5pbml0aWFsaXNlKHRoaXMubWFza3MsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5pbml0aWFsaXNlKGNhbnZhcywgdGhpcy5tYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBtYWduaWZpY2F0aW9uID0gREVGQVVMVF9NQUdOSUZJQ0FUSU9OLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKSxcbiAgICAgICAgICBwYXJ0cyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgUGFydCksXG4gICAgICAgICAgY2FtZXJhID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENhbWVyYSksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgKiBtYWduaWZpY2F0aW9uICogbWFnbmlmaWNhdGlvbjtcblxuICAgIHNjZW5lLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5pbXBvcnQgeyByZWZsZWN0MiwgdHJ1bmNhdGU0LCB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKSB7XG4gIGFuZ2xlcyA9IHJlZmxlY3QyKGFuZ2xlcyk7ICAvLy9cblxuICBjb25zdCByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyKTtcblxuICBsZXQgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChkaXJlY3Rpb25zLCByb3RhdGlvbnNNYXRyaXgpO1xuXG4gIHJlbGF0aXZlT2Zmc2V0cyA9IHRydW5jYXRlNChyZWxhdGl2ZU9mZnNldHMpO1xuXG4gIHJldHVybiByZWxhdGl2ZU9mZnNldHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgc2NhbGUzLCByZWZsZWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gICAgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIGdldERlbHRhTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKSB7XG4gICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyOyAvLy9cblxuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7IC8vL1xuXG4gICAgY29uc3Qgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMSkpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zLCAxKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gc2NhbGUzKHRoaXMub2Zmc2V0cyxtYWduaWZpY2F0aW9uKTtcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgKiBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciAqIG1hZ25pZmljYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoaW5pdGlhbE9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7XG5cbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMiwgc2NhbGUyLCB0cmFuc2Zvcm0yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlcztcbiAgICB0aGlzLmNsb2Nrd2lzZSA9IGNsb2Nrd2lzZTtcbiAgfVxuXG4gIGdldEFuZ2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbmdsZXM7XG4gIH1cblxuICBpc0Nsb2Nrd2lzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja3dpc2U7XG4gIH1cblxuICB1cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgQU5HTEVTX01VTFRJUExJRVIpOyAvLy9cblxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSB0aGlzLmNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgIG1hdHJpeCA9IFtcblxuICAgICAgICAgICAgMCwgICAgICAgICAgICttdWx0aXBsaWVyLFxuICAgICAgICAgICAgLW11bHRpcGxpZXIsICAgICAgICAgICAwLFxuXG4gICAgICAgICAgXSxcbiAgICAgICAgICByZWxhdGl2ZUFuZ2xlcyA9IHRyYW5zZm9ybTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtYXRyaXgpO1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQyKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IGluaXRpYWxBbmdsZXMsIC8vL1xuICAgICAgICAgIGNsb2Nrd2lzZSA9IGZhbHNlLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlc0FuZENsb2Nrd2lzZShpbml0aWFsQW5nbGVzLCBjbG9ja3dpc2UpIHtcbiAgICBjb25zdCBhbmdsZXMgPSBpbml0aWFsQW5nbGVzLCAvLy9cbiAgICAgICAgICB0aWx0ID0gbmV3IFRpbHQoYW5nbGVzLCBjbG9ja3dpc2UpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEpTT04oa2V5KSB7XG4gIGxldCBqc29uID0gbnVsbDtcblxuICBjb25zdCB2YWx1ZSA9IGdldChrZXkpO1xuXG4gIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SlNPTihrZXksIGpzb24pIHtcbiAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICBzZXQoa2V5LCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU09OKGtleSkge1xuICByZW1vdmUoa2V5KTtcbn1cblxuZnVuY3Rpb24gZ2V0KGtheSkge1xuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtheSkgfHwgbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldChrYXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtheSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyLCBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCByZW1vdmVKU09OLCBzZXRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IEdBTUlOR19DQU1FUkEsIElOVkVSVF9NVUxUSVBMSUVSLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04sXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsXG4gICAgICAgICBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgICAgICAgIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gICAgICAgICBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy5wZXJzaXN0ID0gcGVyc2lzdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBkb2VzUGVyc2lzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzaXN0O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQTsgIC8vL1xuXG4gICAgcmVtb3ZlSlNPTihrZXkpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW5Gcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICAgIHRoaXMudGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIGNhbnZhcywgcmVuZGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbE1vdmVkID0gKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duIHx8IG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhID0gdGhpcywgIC8vL1xuICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBwZXJzaXN0ID0gdGhpcy5kb2VzUGVyc2lzdCgpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgYW5nbGVzLFxuICAgICAgICAgICAgICBvZmZzZXRzXG4gICAgICAgICAgICB9O1xuXG4gICAgICBzZXRKU09OKGtleSwganNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHRoaXMucGFuLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbFBvc2l0aW9uID0gREVGQVVMVF9JTklUSUFMX1BPU0lUSU9OIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCBpbml0aWFsT2Zmc2V0cyA9IHNjYWxlMyhpbml0aWFsUG9zaXRpb24sIElOVkVSVF9NVUxUSVBMSUVSKTtcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoaW5pdGlhbE9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgIHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb2Nrd2lzZSA9IHRydWUsXG4gICAgICAgIHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNSU5JTVVNX0RJU1RBTkNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcikge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICB0aGlzLm1pbmltdW1EaXN0YW5jZSA9IG1pbmltdW1EaXN0YW5jZTtcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICBnZXRNaW5pbXVtRGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWluaW11bURpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgLSBtb3VzZVdoZWVsRGVsdGE7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gTWF0aC5tYXgodGhpcy5taW5pbXVtRGlzdGFuY2UsIHRoaXMuZGlzdGFuY2UpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgKiBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gdGhpcy5taW5pbXVtRGlzdGFuY2UgKiBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciAqIG1hZ25pZmljYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIG1pbmltdW1EaXN0YW5jZSA9IE1JTklNVU1fRElTVEFOQ0UsXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlLCBtaW5pbXVtRGlzdGFuY2UsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIpO1xuICAgIFxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUixcbiAgICAgICAgIERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzLFxuICAgICAgICAgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyxcbiAgICAgICAgIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc2lnbkNhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCB6b29tLCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLnBlcnNpc3QgPSBwZXJzaXN0O1xuICB9XG5cbiAgZ2V0UGFuKCkge1xuICAgIHJldHVybiB0aGlzLnBhbjtcbiAgfVxuXG4gIGdldFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGlsdDtcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGRvZXNQZXJzaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcnNpc3Q7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBOyAgLy8vXG5cbiAgICByZW1vdmVKU09OKGtleSk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy50aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gICAgdGhpcy56b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHRoaXMucHJvcGVydGllcyk7XG4gIH1cblxuICB1cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgY2FudmFzLCByZW5kZXIpIHtcbiAgICBjb25zdCBtb3VzZVdoZWVsTW92ZWQgPSAobW91c2VXaGVlbERlbHRhICE9PSAwKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzaGlmdEtleURvd24pIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2UgaWYgKG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgdGhpcy56b29tLnVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGlsdC51cGRhdGVBbmdsZXMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBhbmdsZXMsXG4gICAgICAgICAgICAgIG9mZnNldHMsXG4gICAgICAgICAgICAgIGRpc3RhbmNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICBzZXRKU09OKGtleSwganNvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeCA9IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcyksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHN1cGVyLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG5cbiAgICB0aGlzLnBhbi5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICAgIHRoaXMuem9vbS5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB6b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsT2Zmc2V0cyA9IERFRkFVTFRfSU5JVElBTF9PRkZTRVRTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBvZmZzZXRzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsT2Zmc2V0cyA9IG9mZnNldHM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBhbiA9IFBhbi5mcm9tSW5pdGlhbE9mZnNldHNNb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyQW5kUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcihpbml0aWFsT2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKTtcblxuICByZXR1cm4gdGlsdDtcbn1cblxuZnVuY3Rpb24gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCB7IGluaXRpYWxEaXN0YW5jZSA9IERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgZGlzdGFuY2UgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxEaXN0YW5jZSA9IGRpc3RhbmNlOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbERlbHRhTXVsdGlwbGllcihpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIpO1xuXG4gIHJldHVybiB6b29tO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEFOT05ZTU9VUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfSE9TVCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoY2FsbGJhY2ssIGNvbmZpZ3VyYXRpb24gPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX18pIHsgLy8vXG4gIGNvbnN0IHsgaG9zdCA9IERFRkFVTFRfSE9TVCwgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHNyYyA9IGAke2hvc3R9JHtpbWFnZURpcmVjdG9yeVVSSX0vJHtpbWFnZU5hbWV9YCxcbiAgICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTO1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2UsIHtcbiAgICAgIHNyYyxcbiAgICAgIG9ubG9hZCxcbiAgICAgIGNyb3NzT3JpZ2luXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjYWxsYmFjayhpbWFnZXMsIGltYWdlTmFtZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2ssIGNvbmZpZ3VyYXRpb24gPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX18pIHsgLy8vXG4gIGNvbnN0IHsgaG9zdCA9IERFRkFVTFRfSE9TVCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgc3JjID0gYCR7aG9zdH0ke2ltYWdlTWFwVVJJfWAsXG4gICAgICAgIGltYWdlTWFwID0gbmV3IEltYWdlKCksXHQvLy9cbiAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGltYWdlTWFwLCB7XG4gICAgc3JjLFxuICAgIG9ubG9hZCxcbiAgICBjcm9zc09yaWdpblxuICB9KTtcblxuICBmdW5jdGlvbiBvbmxvYWQoZXZlbnQpIHtcbiAgICBjYWxsYmFjayhpbWFnZU1hcCwgaW1hZ2VNYXBKU09OKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZWxvYWRJbWFnZXMsXG4gIHByZWxvYWRJbWFnZU1hcFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub3JtYWxpc2UzLCBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IoZXh0ZW50KSB7XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVFeHRlbnQoZXh0ZW50KSB7IHJldHVybiBleHRlbnQuc2xpY2UoKTsgfVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzLCBsZW5ndGgzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFZGdlcyhlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4gZWRnZS5jbG9uZSgpKTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZU5vcm1hbChub3JtYWwpIHtcbiAgbm9ybWFsID0gbm9ybWFsLmNsb25lKCk7XG4gIFxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguY2xvbmUoKSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpIHtcbiAgY29uc3QgZWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHB1c2gsIHBlcm11dGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiwgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyxcbiAgICAgICAgIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ufSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmdldFBvc2l0aW9uKCkpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3Qgbm9ybWFsRXh0ZW50ID0gdGhpcy5ub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsRXh0ZW50LCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXggPSBpbmRleCAqIDMsXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMCxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMSxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaXNNYXNrZWQobWFza2luZ0ZhY2V0KSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VzID0gbWFza2luZ0ZhY2V0LmdldE1hc2tpbmdFZGdlcygpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb24gPSBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBzcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEsIDIgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDIsIDAgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgICAgICBbIDMsIDQsIDAgXSxcbiAgICAgICAgICAgIFsgMywgMiwgNCBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgwLCAxKTsgIC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMCBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDMsIDIgXSxcbiAgICAgICAgICAgIFsgMywgMSwgMiBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXMuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih0aGlzLnZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcikge1xuICBjb25zdCB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgXG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zbGljZSgpOyAvLy9cbiAgICBcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pLFxuICAgICAgICBzbWFsbGVyRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCB0aGlzLnJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCB0aGlzLnJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICByZ2JhID0gWyAuLi5jb2xvdXIsIDEgXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IENvbG91cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZFwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICBsZXQgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXM7IC8vL1xuXG4gICAgY29vcmRpbmF0ZVR1cGxlcyA9IGNvb3JkaW5hdGVUdXBsZXMubWFwKChjb29yZGluYXRlVHVwbGUpID0+IHtcbiAgICAgIGNvb3JkaW5hdGVUdXBsZSA9IHNjYWxlMyhjb29yZGluYXRlVHVwbGUsIG1hZ25pZmljYXRpb24pO1xuXG4gICAgICByZXR1cm4gY29vcmRpbmF0ZVR1cGxlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgIHN1cGVyLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gQ29sb3VyZWRGYWNldC5mcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkKGZhY2V0cywgZmFjZXQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgaW52ZXJ0MiwgaW52ZXJ0MyB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5pbXBvcnQgeyBhZGQyLCBtdWx0aXBseTIsIHRyYW5zZm9ybTIsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLnNsaWNlKCkpOyAgLy8vXG5cbiAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCkge1xuICBjb25zdCB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gYWRkMihtdWx0aXBseTIodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgWyB3aWR0aCwgaGVpZ2h0IF0gKSwgWyBsZWZ0LCBib3R0b20gXSkpOyAvLy9cblxuICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICBjb25zdCBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uOyAvLy9cblxuICBjb25zdCByb3RhdGVkVmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwYXJlbnRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHBhcmVudFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHZlcnRpY2VzID0gcm90YXRlZFZlcnRpY2VzOyAgLy8vXG5cbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleCA9IGZpcnN0KHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4ID0gc2Vjb25kKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXggPSB0aGlyZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGZpcnN0KHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHNlY29uZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IHRoaXJkKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uID0gZmlyc3RQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb24gPSBzZWNvbmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIFIxeCA9IGZpcnN0VmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjF5ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBSMnggPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFIyeSA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUjN4ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSM3kgPSB0aGlyZFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFAxeCA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMnggPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAzeCA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQMXkgPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDJ5ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQM3kgPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDF1ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDF2ID0gZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDJ1ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAydiA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQM3UgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQM3YgPSB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXggPSBpbnZlcnQzKFsgMSwgMSwgMSwgUDF1LCBQMnUsIFAzdSwgUDF2LCBQMnYsIFAzdiBdKSxcbiAgICAgICAgZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeCwgUDJ4LCBQM3ggXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXksIFAyeSwgUDN5IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIE94ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ4ID0gZmlyc3RUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIE95ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzJdLCAgLy8vXG4gICAgICAgIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXggPSBpbnZlcnQyKFsgVXgsIFV5LCBWeCwgVnkgXSksXG4gICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMXggLSBPeCwgUjF5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjJ4IC0gT3gsIFIyeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjN4IC0gT3gsIFIzeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBbXG4gICAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHNlY29uZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICBdO1xuXG4gIHJldHVybiBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGltYWdlTWFwSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBpbWFnZU1hcEpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlOyAgLy8vXG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICBsZXQgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXM7IC8vL1xuXG4gICAgY29vcmRpbmF0ZVR1cGxlcyA9IGNvb3JkaW5hdGVUdXBsZXMubWFwKChjb29yZGluYXRlVHVwbGUpID0+IHtcbiAgICAgIGNvb3JkaW5hdGVUdXBsZSA9IHNjYWxlMyhjb29yZGluYXRlVHVwbGUsIG1hZ25pZmljYXRpb24pO1xuXG4gICAgICByZXR1cm4gY29vcmRpbmF0ZVR1cGxlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgIHN1cGVyLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzW2luZGV4XSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5pbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IHRleHR1cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2sgfSBmcm9tIFwiLi9lbGVtZW50L21hc2tcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFydCB9IGZyb20gXCIuL2VsZW1lbnQvcGFydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY2VuZSB9IGZyb20gXCIuL2VsZW1lbnQvc2NlbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtaW5nQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZ2FtaW5nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2Rlc2lnblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wcmVsb2FkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVjdG9yTWF0aHMgfSBmcm9tIFwiLi9tYXRocy92ZWN0b3JcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF0cml4TWF0aHMgfSBmcm9tIFwiLi9tYXRocy9tYXRyaXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy8vXG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIFJlYWN0XG59KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPEN1YmUgY29sb3VyPXtbIDAsIDEsIDAgXX0gLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1YmVFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIE1hc2ssIERlc2lnbkNhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5pbXBvcnQgVGV4dHVyZWRRdWFkcmFuZ2xlIGZyb20gXCIuL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlcyB9ID0gcHJlbG9hZFV0aWxpdGllcztcblxuY29uc3QgdGlsaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlcygoaW1hZ2VzLCBpbWFnZU5hbWVzKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwibWFza1wiPlxuICAgICAgICAgIDxDb2xvdXJlZFNxdWFyZSBzY2FsZT17WyAwLjI1LCAwLjI1LCAxIF19IHBvc2l0aW9uPXtbIDAuMTI1LCAwLjEyNSwgMCBdfSAvPlxuICAgICAgICA8L01hc2s+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgICA8VGV4dHVyZWRRdWFkcmFuZ2xlIHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0gaW1hZ2VOYW1lPVwicGF2aW5nLmpwZ1wiIG1hc2tSZWZlcmVuY2U9XCJtYXNrXCIgLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IHNpbXBsZUV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0PlxuICAgICAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpbXBsZUV4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPE1hc2sgcmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCI+XG4gICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cbiAgICAgIDwvTWFzaz5cbiAgICAgIDxNYXNrIHJlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiPlxuICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzIsIDEvMiwgMS8yIF19IG1hc2tSZWZlcmVuY2U9XCJxdWFydGVyLXNpemVkLWN1YmVcIi8+XG4gICAgICA8L01hc2s+XG4gICAgICA8UGFydD5cbiAgICAgICAgPEN1YmUgbWFza1JlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZWRUcmlhbmdsZSBmcm9tIFwiLi90ZXh0dXJlZFRyaWFuZ2xlXCI7XG5cbmNvbnN0IFNpZGUgPSAocHJvcGVydGllcykgPT5cblxuICA8VGV4dHVyZWRUcmlhbmdsZSBzY2FsZT17WyAxLCAxL01hdGguc3FydCgyKSwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAwLCAwLjUgXX0gcm90YXRpb25zPXtbIC00NSwgMCwgMCBdfSAvPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTaWRlIGZyb20gXCIuL3NpZGVcIjtcblxuY29uc3QgUHlyYW1pZCA9IChwcm9wZXJ0aWVzKSA9PiBbXG5cbiAgPFNpZGUgLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAgOTAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAxODAsIDAgXX0gLz4sXG4gIDxTaWRlIHJvdGF0aW9ucz17WyAwLCAyNzAsIDAgXX0gLz4sXG5cbl07XG5cbmV4cG9ydCBkZWZhdWx0IFB5cmFtaWQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIEdhbWluZ0NhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gcHJlbG9hZFV0aWxpdGllcztcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXAsIGltYWdlTWFwSlNPTikgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB5cmFtaWRFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL3hnbFwiO1xuXG5pbXBvcnQgY3ViZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9jdWJlXCI7XG5pbXBvcnQgdGlsaW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3RpbGluZ1wiO1xuaW1wb3J0IHNpbXBsZUV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVcIjtcbmltcG9ydCBtYXNraW5nRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL21hc2tpbmdcIjtcbmltcG9ydCBweXJhbWlkRXhhbXBsZSBmcm9tIFwiLi9leGFtcGxlL3B5cmFtaWRcIjtcblxuY29uc3QgZXhhbXBsZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpOyAgLy8vXG5cbnN3aXRjaCAoZXhhbXBsZSkge1xuICBjYXNlIFwiY3ViZVwiOlxuICAgIGN1YmVFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwidGlsaW5nXCI6XG4gICAgdGlsaW5nRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInNpbXBsZVwiOlxuICAgIHNpbXBsZUV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJtYXNraW5nXCI6XG4gICAgbWFza2luZ0V4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJweXJhbWlkXCI6XG4gICAgcHlyYW1pZEV4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7OztBQUVPLFVBQU0sUUFBSztjQUFMLFFBQUE7QUFDTixVQUFNLFNBQU07Y0FBTixTQUFBO0FBQ04sVUFBTSxTQUFNO2NBQU4sU0FBQTtBQUNOLFVBQU0sV0FBUTtjQUFSLFdBQUE7QUFDTixVQUFNLFlBQVM7Y0FBVCxZQUFBO0FBQ04sVUFBTSxnQkFBYTtjQUFiLGdCQUFBO0FBQ04sVUFBTSxnQkFBYTtjQUFiLGdCQUFBO0FBQ04sVUFBTSxrQkFBa0I7Y0FBbEIsa0JBQUE7QUFDTixVQUFNLG1CQUFtQjtjQUFuQixtQkFBQTtBQUNOLFVBQU0sb0JBQWlCO2NBQWpCLG9CQUFBO0FBQ04sVUFBTSxvQkFBb0I7Y0FBcEIsb0JBQUE7QUFDTixVQUFNLGdDQUFnQyxLQUFLLEtBQUs7Y0FBMUMsZ0NBQUE7QUFDTixVQUFNLGlDQUE4QjtjQUE5QixpQ0FBQTtBQUNOLFVBQU0scUNBQWtDO2NBQWxDLHFDQUFBO0FBQ04sVUFBTSx3Q0FBcUM7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
