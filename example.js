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
        function Tilt2(angles) {
          _classCallCheck(this, Tilt2);
          this.angles = angles;
        }
        _createClass(Tilt2, [
          {
            key: "getAngles",
            value: function getAngles() {
              return this.angles;
            }
          },
          {
            key: "getRotatedAngles",
            value: function getRotatedAngles(param) {
              var clockwise = param === void 0 ? true : param;
              var multiplier = clockwise ? 1 : -1, matrix = [
                0,
                +multiplier,
                -multiplier,
                0
              ], rotatedAngles = (0, _vector).transform2(this.angles, matrix);
              return rotatedAngles;
            }
          },
          {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
              relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER);
              var relativeAngles = relativeMouseCoordinates;
              this.angles = (0, _vector).add2(this.angles, relativeAngles);
            }
          }
        ], [
          {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
              var angles = initialAngles, tilt = new Tilt2(angles);
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
              var camera = this, persist = this.doesPersist(), offsets = this.pan.getOffsets(), clockwise = true, rotatedAngles = this.tilt.getRotatedAngles(clockwise), angles = rotatedAngles;
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
        var tilt = _tilt.default.fromInitialAngles(initialAngles);
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
              var camera = this, persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance(), clockwise = false, rotatedAngles = this.tilt.getRotatedAngles(clockwise), angles = rotatedAngles;
              if (persist) {
                var key = _constants.DESIGN_CAMERA, angles = this.tilt.getAngles(), json = {
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
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, {
          persist: true
        }));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZWxlbWVudC5qcyIsICJzcmMvbWF0aHMvdmVjdG9yLmpzIiwgInNyYy9tYXRocy9tYXRyaXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvcGF0aC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb250ZW50VHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FqYXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgInNyYy91dGlsaXRpZXMvbWF0cml4LmpzIiwgInNyYy91dGlsaXRpZXMvdHJhbnNmb3JtLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvZnVuY3Rpb24uanMiLCAic3JjL3JlYWN0LmpzIiwgInNyYy9kZWZhdWx0cy5qcyIsICJzcmMvbWl4aW5zL2RlcHRoLmpzIiwgInNyYy9lcnJvcnMuanMiLCAic3JjL21peGlucy9zaGFkZXIuanMiLCAic3JjL21peGlucy9idWZmZXIuanMiLCAic3JjL21peGlucy9jb2xvdXIuanMiLCAic3JjL21peGlucy9tYXRyaXguanMiLCAic3JjL21peGlucy90ZXh0dXJlLmpzIiwgInNyYy9taXhpbnMvcHJvZ3JhbS5qcyIsICJzcmMvbWl4aW5zL2JsZW5kaW5nLmpzIiwgInNyYy9taXhpbnMvbG9jYXRpb24uanMiLCAic3JjL2NhbnZhcy5qcyIsICJzcmMvcHJpbWl0aXZlL2VkZ2UuanMiLCAic3JjL3V0aWxpdGllcy9taWRQb2ludC5qcyIsICJzcmMvcHJpbWl0aXZlL2VkZ2UvbWFza2luZy5qcyIsICJzcmMvdXRpbGl0aWVzL2FwcHJveGltYXRlLmpzIiwgInNyYy91dGlsaXRpZXMvYW5nbGUuanMiLCAic3JjL3V0aWxpdGllcy9xdWF0ZXJuaW9uLmpzIiwgInNyYy91dGlsaXRpZXMvcm90YXRpb24uanMiLCAic3JjL3V0aWxpdGllcy9pbnRlcnNlY3Rpb24uanMiLCAic3JjL3ByaW1pdGl2ZS92ZXJ0aWNhbExpbmUuanMiLCAic3JjL3V0aWxpdGllcy92ZXJ0aWNlcy5qcyIsICJzcmMvcHJpbWl0aXZlL21hc2tpbmdGYWNldC5qcyIsICJzcmMvZWxlbWVudC9tYXNrLmpzIiwgInNyYy9yZW5kZXJlci5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9saWdodGluZy5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3Bvc2l0aW9uLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvY29sb3VyL3ZlcnRleFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0uanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci9jb2xvdXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvZGF0YS90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlci5qcyIsICJzcmMvcmVuZGVyZXIvYnVmZmVycy90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUuanMiLCAic3JjL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIiwgInNyYy9lbGVtZW50L3BhcnQuanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhLmpzIiwgInNyYy9rZXlDb2Rlcy5qcyIsICJzcmMvZXZlbnRUeXBlcy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvdXNlcklucHV0LmpzIiwgInNyYy91dGlsaXRpZXMvZWxlbWVudC5qcyIsICJzcmMvZWxlbWVudC9zY2VuZS5qcyIsICJzcmMvdXRpbGl0aWVzL29mZnNldHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvcGFuLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3RpbHQuanMiLCAic3JjL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2UuanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhL2dhbWluZy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy96b29tLmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS9kZXNpZ24uanMiLCAic3JjL3V0aWxpdGllcy9wcmVsb2FkLmpzIiwgInNyYy9wcmltaXRpdmUvbm9ybWFsLmpzIiwgInNyYy9wcmltaXRpdmUvdmVydGV4LmpzIiwgInNyYy91dGlsaXRpZXMvZmFjZXQuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsICJzcmMvdXRpbGl0aWVzL3RleHR1cmUuanMiLCAic3JjL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZC5qcyIsICJzcmMvZWxlbWVudC9jYW52YXMvdGV4dHVyZWQuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy94Z2wuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9jb2xvdXJlZFNxdWFyZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2ZhY2UuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9jdWJlLmpzIiwgInNyYy9leGFtcGxlL2N1YmUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFF1YWRyYW5nbGUuanMiLCAic3JjL2V4YW1wbGUvdGlsaW5nLmpzIiwgInNyYy9leGFtcGxlL3NpbXBsZS5qcyIsICJzcmMvZXhhbXBsZS9tYXNraW5nLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRUcmlhbmdsZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3NpZGUuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC9weXJhbWlkLmpzIiwgInNyYy9leGFtcGxlL3B5cmFtaWQuanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgV0lEVEggPSBcIndpZHRoXCI7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gXCJoZWlnaHRcIjtcbmV4cG9ydCBjb25zdCBDQU5WQVMgPSBcImNhbnZhc1wiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFOT05ZTU9VUyA9IFwiYW5vbnltb3VzXCI7XG5leHBvcnQgY29uc3QgR0FNSU5HX0NBTUVSQSA9IFwiZ2FtaW5nX2NhbWVyYVwiO1xuZXhwb3J0IGNvbnN0IERFU0lHTl9DQU1FUkEgPSBcImRlc2lnbl9jYW1lcmFcIjtcbmV4cG9ydCBjb25zdCBWRVJUSUNFU19MRU5HVEggPSAzO1xuZXhwb3J0IGNvbnN0IE1JTklNVU1fRElTVEFOQ0UgPSAxO1xuZXhwb3J0IGNvbnN0IElOVkVSVF9NVUxUSVBMSUVSID0gLTE7XG5leHBvcnQgY29uc3QgQU5HTEVTX01VTFRJUExJRVIgPSAwLjAxO1xuZXhwb3J0IGNvbnN0IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIkVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIk1PWl9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDID0gXCJXRUJLSVRfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8yKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8zKCkge1xuICByZXR1cm4gKFtcblxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDIodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGg0KHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6ICsgdyp3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDIodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3QzKHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkb3Q0KHZlY3RvckEsIHZlY3RvckIpIHsgcmV0dXJuICh2ZWN0b3JBWzBdICogdmVjdG9yQlswXSArIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdICsgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0gKyB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIGNvbnN0IGF4ID0gdmVjdG9yQVswXSwgYXkgPSB2ZWN0b3JBWzFdLCBheiA9IHZlY3RvckFbMl0sXG4gICAgICAgIGJ4ID0gdmVjdG9yQlswXSwgYnkgPSB2ZWN0b3JCWzFdLCBieiA9IHZlY3RvckJbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBheSAqIGJ6IC0gYXogKiBieSxcbiAgICBheiAqIGJ4IC0gYXggKiBieixcbiAgICBheCAqIGJ5IC0gYXkgKiBieCxcblxuICBdKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlMyh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeik7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGlzZTQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM10sXG4gICAgICAgIGxlbmd0aCA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xuXG4gIGlmIChsZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIHggLyBsZW5ndGgsXG4gICAgICB5IC8gbGVuZ3RoLFxuICAgICAgeiAvIGxlbmd0aCxcbiAgICAgIHcgLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDIodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgLXZlY3RvclswXSxcbiAgICAtdmVjdG9yWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmbGVjdDModmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgLXZlY3RvclswXSxcbiAgICAtdmVjdG9yWzFdLFxuICAgIC12ZWN0b3JbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0NCh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAtdmVjdG9yWzBdLFxuICAgIC12ZWN0b3JbMV0sXG4gICAgLXZlY3RvclsyXSxcbiAgICAtdmVjdG9yWzNdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGU0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSxcbiAgICB2ZWN0b3JbMV0sXG4gICAgdmVjdG9yWzJdXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTIodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUzKHZlY3Rvciwgc2NhbGFyKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdICogc2NhbGFyLFxuICAgIHZlY3RvclsxXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMl0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQodmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbM10gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQyKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKyB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkNCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSArIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3QzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAtIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAtIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NCh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSAqIHZlY3RvckJbMl0sXG4gICAgdmVjdG9yQVszXSAqIHZlY3RvckJbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm0yKHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0gKiB4ICsgbWF0cml4WzJdICogeSxcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzNdICogeSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTModmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbM10gKiB5ICsgbWF0cml4WzZdICogeixcbiAgICBtYXRyaXhbMV0gKiB4ICsgbWF0cml4WzRdICogeSArIG1hdHJpeFs3XSAqIHosXG4gICAgbWF0cml4WzJdICogeCArIG1hdHJpeFs1XSAqIHkgKyBtYXRyaXhbOF0gKiB6LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtNCh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICB3ID0gdmVjdG9yWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WyAwXSAqIHggKyBtYXRyaXhbIDRdICogeSArIG1hdHJpeFsgOF0gKiB6ICsgbWF0cml4WzEyXSAqIHcsXG4gICAgbWF0cml4WyAxXSAqIHggKyBtYXRyaXhbIDVdICogeSArIG1hdHJpeFsgOV0gKiB6ICsgbWF0cml4WzEzXSAqIHcsXG4gICAgbWF0cml4WyAyXSAqIHggKyBtYXRyaXhbIDZdICogeSArIG1hdHJpeFsxMF0gKiB6ICsgbWF0cml4WzE0XSAqIHcsXG4gICAgbWF0cml4WyAzXSAqIHggKyBtYXRyaXhbIDddICogeSArIG1hdHJpeFsxMV0gKiB6ICsgbWF0cml4WzE1XSAqIHcsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgemVybzIsXG4gIHplcm8zLFxuICB6ZXJvNCxcbiAgbGVuZ3RoMixcbiAgbGVuZ3RoMyxcbiAgbGVuZ3RoNCxcbiAgZG90MixcbiAgZG90MyxcbiAgZG90NCxcbiAgY3Jvc3MzLFxuICBub3JtYWxpc2UyLFxuICBub3JtYWxpc2UzLFxuICBub3JtYWxpc2U0LFxuICByZWZsZWN0MixcbiAgcmVmbGVjdDMsXG4gIHJlZmxlY3Q0LFxuICB0cnVuY2F0ZTQsXG4gIHNjYWxlMixcbiAgc2NhbGUzLFxuICBzY2FsZTQsXG4gIGFkZDIsXG4gIGFkZDMsXG4gIGFkZDQsXG4gIHN1YnRyYWN0MixcbiAgc3VidHJhY3QzLFxuICBzdWJ0cmFjdDQsXG4gIG11bHRpcGx5MixcbiAgbXVsdGlwbHkzLFxuICBtdWx0aXBseTQsXG4gIHRyYW5zZm9ybTIsXG4gIHRyYW5zZm9ybTMsXG4gIHRyYW5zZm9ybTRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCxcbiAgICAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsXG4gICAgMCwgMSwgMCxcbiAgICAwLCAwLCAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHk0KCkge1xuICByZXR1cm4gKFtcblxuICAgIDEsIDAsIDAsIDAsXG4gICAgMCwgMSwgMCwgMCxcbiAgICAwLCAwLCAxLCAwLFxuICAgIDAsIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTIobWF0cml4QSwgbWF0cml4Qikge1xuICBjb25zdCBhMCA9IG1hdHJpeEFbMF0sXG4gICAgICAgIGExID0gbWF0cml4QVsxXSxcbiAgICAgICAgYTIgPSBtYXRyaXhBWzJdLFxuICAgICAgICBhMyA9IG1hdHJpeEFbM10sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEyICogYjEsXG4gICAgYTEgKiBiMCArIGEzICogYjEsXG5cbiAgICBhMCAqIGIyICsgYTIgKiBiMyxcbiAgICBhMSAqIGIyICsgYTMgKiBiMyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MyhtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcbiAgICAgICAgYTQgPSBtYXRyaXhBWzRdLFxuICAgICAgICBhNSA9IG1hdHJpeEFbNV0sXG4gICAgICAgIGE2ID0gbWF0cml4QVs2XSxcbiAgICAgICAgYTcgPSBtYXRyaXhBWzddLFxuICAgICAgICBhOCA9IG1hdHJpeEFbOF0sXG5cbiAgICAgICAgYjAgPSBtYXRyaXhCWzBdLFxuICAgICAgICBiMSA9IG1hdHJpeEJbMV0sXG4gICAgICAgIGIyID0gbWF0cml4QlsyXSxcbiAgICAgICAgYjMgPSBtYXRyaXhCWzNdLFxuICAgICAgICBiNCA9IG1hdHJpeEJbNF0sXG4gICAgICAgIGI1ID0gbWF0cml4Qls1XSxcbiAgICAgICAgYjYgPSBtYXRyaXhCWzZdLFxuICAgICAgICBiNyA9IG1hdHJpeEJbN10sXG4gICAgICAgIGI4ID0gbWF0cml4Qls4XTtcblxuICByZXR1cm4gKFtcblxuICAgIGEwICogYjAgKyBhMyAqIGIxICsgYTYgKiBiMixcbiAgICBhMSAqIGIwICsgYTQgKiBiMSArIGE3ICogYjIsXG4gICAgYTIgKiBiMCArIGE1ICogYjEgKyBhOCAqIGIyLFxuXG4gICAgYTAgKiBiMyArIGEzICogYjQgKyBhNiAqIGI1LFxuICAgIGExICogYjMgKyBhNCAqIGI0ICsgYTcgKiBiNSxcbiAgICBhMiAqIGIzICsgYTUgKiBiNCArIGE4ICogYjUsXG5cbiAgICBhMCAqIGI2ICsgYTMgKiBiNyArIGE2ICogYjgsXG4gICAgYTEgKiBiNiArIGE0ICogYjcgKyBhNyAqIGI4LFxuICAgIGEyICogYjYgKyBhNSAqIGI3ICsgYTggKiBiOCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5NChtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0ICBhMCA9IG1hdHJpeEFbIDBdLFxuICAgICAgICAgYTEgPSBtYXRyaXhBWyAxXSxcbiAgICAgICAgIGEyID0gbWF0cml4QVsgMl0sXG4gICAgICAgICBhMyA9IG1hdHJpeEFbIDNdLFxuICAgICAgICAgYTQgPSBtYXRyaXhBWyA0XSxcbiAgICAgICAgIGE1ID0gbWF0cml4QVsgNV0sXG4gICAgICAgICBhNiA9IG1hdHJpeEFbIDZdLFxuICAgICAgICAgYTcgPSBtYXRyaXhBWyA3XSxcbiAgICAgICAgIGE4ID0gbWF0cml4QVsgOF0sXG4gICAgICAgICBhOSA9IG1hdHJpeEFbIDldLFxuICAgICAgICBhMTAgPSBtYXRyaXhBWzEwXSxcbiAgICAgICAgYTExID0gbWF0cml4QVsxMV0sXG4gICAgICAgIGExMiA9IG1hdHJpeEFbMTJdLFxuICAgICAgICBhMTMgPSBtYXRyaXhBWzEzXSxcbiAgICAgICAgYTE0ID0gbWF0cml4QVsxNF0sXG4gICAgICAgIGExNSA9IG1hdHJpeEFbMTVdLFxuXG4gICAgICAgICBiMCA9IG1hdHJpeEJbIDBdLFxuICAgICAgICAgYjEgPSBtYXRyaXhCWyAxXSxcbiAgICAgICAgIGIyID0gbWF0cml4QlsgMl0sXG4gICAgICAgICBiMyA9IG1hdHJpeEJbIDNdLFxuICAgICAgICAgYjQgPSBtYXRyaXhCWyA0XSxcbiAgICAgICAgIGI1ID0gbWF0cml4QlsgNV0sXG4gICAgICAgICBiNiA9IG1hdHJpeEJbIDZdLFxuICAgICAgICAgYjcgPSBtYXRyaXhCWyA3XSxcbiAgICAgICAgIGI4ID0gbWF0cml4QlsgOF0sXG4gICAgICAgICBiOSA9IG1hdHJpeEJbIDldLFxuICAgICAgICBiMTAgPSBtYXRyaXhCWzEwXSxcbiAgICAgICAgYjExID0gbWF0cml4QlsxMV0sXG4gICAgICAgIGIxMiA9IG1hdHJpeEJbMTJdLFxuICAgICAgICBiMTMgPSBtYXRyaXhCWzEzXSxcbiAgICAgICAgYjE0ID0gbWF0cml4QlsxNF0sXG4gICAgICAgIGIxNSA9IG1hdHJpeEJbMTVdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiAgYjAgKyAgYTQgKiAgYjEgKyAgYTggKiAgYjIgKyBhMTIgKiAgYjMsXG4gICAgYTEgKiAgYjAgKyAgYTUgKiAgYjEgKyAgYTkgKiAgYjIgKyBhMTMgKiAgYjMsXG4gICAgYTIgKiAgYjAgKyAgYTYgKiAgYjEgKyBhMTAgKiAgYjIgKyBhMTQgKiAgYjMsXG4gICAgYTMgKiAgYjAgKyAgYTcgKiAgYjEgKyBhMTEgKiAgYjIgKyBhMTUgKiAgYjMsXG5cbiAgICBhMCAqICBiNCArICBhNCAqICBiNSArICBhOCAqICBiNiArIGExMiAqICBiNyxcbiAgICBhMSAqICBiNCArICBhNSAqICBiNSArICBhOSAqICBiNiArIGExMyAqICBiNyxcbiAgICBhMiAqICBiNCArICBhNiAqICBiNSArIGExMCAqICBiNiArIGExNCAqICBiNyxcbiAgICBhMyAqICBiNCArICBhNyAqICBiNSArIGExMSAqICBiNiArIGExNSAqICBiNyxcblxuICAgIGEwICogIGI4ICsgIGE0ICogIGI5ICsgIGE4ICogYjEwICsgYTEyICogYjExLFxuICAgIGExICogIGI4ICsgIGE1ICogIGI5ICsgIGE5ICogYjEwICsgYTEzICogYjExLFxuICAgIGEyICogIGI4ICsgIGE2ICogIGI5ICsgYTEwICogYjEwICsgYTE0ICogYjExLFxuICAgIGEzICogIGI4ICsgIGE3ICogIGI5ICsgYTExICogYjEwICsgYTE1ICogYjExLFxuXG4gICAgYTAgKiBiMTIgKyAgYTQgKiBiMTMgKyAgYTggKiBiMTQgKyBhMTIgKiBiMTUsXG4gICAgYTEgKiBiMTIgKyAgYTUgKiBiMTMgKyAgYTkgKiBiMTQgKyBhMTMgKiBiMTUsXG4gICAgYTIgKiBiMTIgKyAgYTYgKiBiMTMgKyBhMTAgKiBiMTQgKyBhMTQgKiBiMTUsXG4gICAgYTMgKiBiMTIgKyAgYTcgKiBiMTMgKyBhMTEgKiBiMTQgKyBhMTUgKiBiMTUsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQyKG1hdHJpeCkge1xuICBjb25zdCBtMCA9IG1hdHJpeFswXSxcbiAgICAgICAgbTEgPSBtYXRyaXhbMV0sXG4gICAgICAgIG0yID0gbWF0cml4WzJdLFxuICAgICAgICBtMyA9IG1hdHJpeFszXSxcblxuICAgICAgICBkZXRlcm1pbmFudCA9IG0wICogbTMgLSBtMiAqIG0xO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICArbTMgLyBkZXRlcm1pbmFudCwgLW0xIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAtbTIgLyBkZXRlcm1pbmFudCwgK20wIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0MyhtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WzBdLCBtMDEgPSBtYXRyaXhbMV0sIG0wMiA9IG1hdHJpeFsyXSxcbiAgICAgICAgbTEwID0gbWF0cml4WzNdLCBtMTEgPSBtYXRyaXhbNF0sIG0xMiA9IG1hdHJpeFs1XSxcbiAgICAgICAgbTIwID0gbWF0cml4WzZdLCBtMjEgPSBtYXRyaXhbN10sIG0yMiA9IG1hdHJpeFs4XSxcblxuICAgICAgICBiMDEgPSAgbTIyICogbTExIC0gbTEyICogbTIxLFxuICAgICAgICBiMTEgPSAtbTIyICogbTEwICsgbTEyICogbTIwLFxuICAgICAgICBiMjEgPSAgbTIxICogbTEwIC0gbTExICogbTIwLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAwICogYjAxICsgbTAxICogYjExICsgbTAyICogYjIxO1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICBiMDEgLyBkZXRlcm1pbmFudCwgKC1tMjIgKiBtMDEgKyBtMDIgKiBtMjEpIC8gZGV0ZXJtaW5hbnQsICggbTEyICogbTAxIC0gbTAyICogbTExKSAvIGRldGVybWluYW50LFxuICAgICAgYjExIC8gZGV0ZXJtaW5hbnQsICggbTIyICogbTAwIC0gbTAyICogbTIwKSAvIGRldGVybWluYW50LCAoLW0xMiAqIG0wMCArIG0wMiAqIG0xMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIGIyMSAvIGRldGVybWluYW50LCAoLW0yMSAqIG0wMCArIG0wMSAqIG0yMCkgLyBkZXRlcm1pbmFudCwgKCBtMTEgKiBtMDAgLSBtMDEgKiBtMTApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0NChtYXRyaXgpIHtcbiAgY29uc3QgbTAwID0gbWF0cml4WyAwXSwgbTAxID0gbWF0cml4WyAxXSwgbTAyID0gbWF0cml4WyAyXSwgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgbTEwID0gbWF0cml4WyA0XSwgbTExID0gbWF0cml4WyA1XSwgbTEyID0gbWF0cml4WyA2XSwgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgbTIwID0gbWF0cml4WyA4XSwgbTIxID0gbWF0cml4WyA5XSwgbTIyID0gbWF0cml4WzEwXSwgbTIzID0gbWF0cml4WzExXSxcbiAgICAgICAgbTMwID0gbWF0cml4WzEyXSwgbTMxID0gbWF0cml4WzEzXSwgbTMyID0gbWF0cml4WzE0XSwgbTMzID0gbWF0cml4WzE1XSxcblxuICAgICAgICBiMDAgPSBtMDAgKiBtMTEgLSBtMDEgKiBtMTAsXG4gICAgICAgIGIwMSA9IG0wMCAqIG0xMiAtIG0wMiAqIG0xMCxcbiAgICAgICAgYjAyID0gbTAwICogbTEzIC0gbTAzICogbTEwLFxuICAgICAgICBiMDMgPSBtMDEgKiBtMTIgLSBtMDIgKiBtMTEsXG4gICAgICAgIGIwNCA9IG0wMSAqIG0xMyAtIG0wMyAqIG0xMSxcbiAgICAgICAgYjA1ID0gbTAyICogbTEzIC0gbTAzICogbTEyLFxuICAgICAgICBiMDYgPSBtMjAgKiBtMzEgLSBtMjEgKiBtMzAsXG4gICAgICAgIGIwNyA9IG0yMCAqIG0zMiAtIG0yMiAqIG0zMCxcbiAgICAgICAgYjA4ID0gbTIwICogbTMzIC0gbTIzICogbTMwLFxuICAgICAgICBiMDkgPSBtMjEgKiBtMzIgLSBtMjIgKiBtMzEsXG4gICAgICAgIGIxMCA9IG0yMSAqIG0zMyAtIG0yMyAqIG0zMSxcbiAgICAgICAgYjExID0gbTIyICogbTMzIC0gbTIzICogbTMyLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmIChkZXRlcm1pbmFudCAhPT0gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICAobTExICogYjExIC0gbTEyICogYjEwICsgbTEzICogYjA5KSAvIGRldGVybWluYW50LCAobTAyICogYjEwIC0gbTAxICogYjExIC0gbTAzICogYjA5KSAvIGRldGVybWluYW50LCAobTMxICogYjA1IC0gbTMyICogYjA0ICsgbTMzICogYjAzKSAvIGRldGVybWluYW50LCAobTIyICogYjA0IC0gbTIxICogYjA1IC0gbTIzICogYjAzKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMiAqIGIwOCAtIG0xMCAqIGIxMSAtIG0xMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0wMCAqIGIxMSAtIG0wMiAqIGIwOCArIG0wMyAqIGIwNykgLyBkZXRlcm1pbmFudCwgKG0zMiAqIGIwMiAtIG0zMCAqIGIwNSAtIG0zMyAqIGIwMSkgLyBkZXRlcm1pbmFudCwgKG0yMCAqIGIwNSAtIG0yMiAqIGIwMiArIG0yMyAqIGIwMSkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTAgKiBiMTAgLSBtMTEgKiBiMDggKyBtMTMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDEgKiBiMDggLSBtMDAgKiBiMTAgLSBtMDMgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzAgKiBiMDQgLSBtMzEgKiBiMDIgKyBtMzMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjEgKiBiMDIgLSBtMjAgKiBiMDQgLSBtMjMgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTExICogYjA3IC0gbTEwICogYjA5IC0gbTEyICogYjA2KSAvIGRldGVybWluYW50LCAobTAwICogYjA5IC0gbTAxICogYjA3ICsgbTAyICogYjA2KSAvIGRldGVybWluYW50LCAobTMxICogYjAxIC0gbTMwICogYjAzIC0gbTMyICogYjAwKSAvIGRldGVybWluYW50LCAobTIwICogYjAzIC0gbTIxICogYjAxICsgbTIyICogYjAwKSAvIGRldGVybWluYW50LFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTIobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbMl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2UzKG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSwgbWF0cml4WzNdLCBtYXRyaXhbNl0sXG4gICAgbWF0cml4WzFdLCBtYXRyaXhbNF0sIG1hdHJpeFs3XSxcbiAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XSwgbWF0cml4WzhdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlNChtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdLCBtYXRyaXhbIDRdLCBtYXRyaXhbIDhdLCBtYXRyaXhbMTJdLFxuICAgIG1hdHJpeFsgMV0sIG1hdHJpeFsgNV0sIG1hdHJpeFsgOV0sIG1hdHJpeFsxM10sXG4gICAgbWF0cml4WyAyXSwgbWF0cml4WyA2XSwgbWF0cml4WzEwXSwgbWF0cml4WzE0XSxcbiAgICBtYXRyaXhbIDNdLCBtYXRyaXhbIDddLCBtYXRyaXhbMTFdLCBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGU0KG1hdHJpeCwgdmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCwgbWF0cml4WyAxXSAqIHgsIG1hdHJpeFsgMl0gKiB4LCBtYXRyaXhbIDNdICogeCxcbiAgICBtYXRyaXhbIDRdICogeSwgbWF0cml4WyA1XSAqIHksIG1hdHJpeFsgNl0gKiB5LCBtYXRyaXhbIDddICogeSxcbiAgICBtYXRyaXhbIDhdICogeiwgbWF0cml4WyA5XSAqIHosIG1hdHJpeFsxMF0gKiB6LCBtYXRyaXhbMTFdICogeixcbiAgICBtYXRyaXhbMTJdICogMSwgbWF0cml4WzEzXSAqIDEsIG1hdHJpeFsxNF0gKiAxLCBtYXRyaXhbMTVdICogMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTQobWF0cml4LCBhbmdsZSwgdmVjdG9yKSB7XG4gIGxldCB4ID0gdmVjdG9yWzBdLFxuICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgIHogPSB2ZWN0b3JbMl07XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG5cbiAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgIHggLz0gbGVuZ3RoO1xuICAgIHkgLz0gbGVuZ3RoO1xuICAgIHogLz0gbGVuZ3RoO1xuXG4gICAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgIHQgPSAxIC0gYyxcblxuICAgICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgICAgbTAxID0gbWF0cml4WyAxXSxcbiAgICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgICAgbTEwID0gbWF0cml4WyA0XSxcbiAgICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgICAgbTEzID0gbWF0cml4WyA3XSxcbiAgICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgICAgbTIyID0gbWF0cml4WzEwXSxcbiAgICAgICAgICBtMjMgPSBtYXRyaXhbMTFdLFxuXG4gICAgICAgICAgYjAwID0geCAqIHggKiB0ICsgYyxcbiAgICAgICAgICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcyxcbiAgICAgICAgICBiMDIgPSB6ICogeCAqIHQgLSB5ICogcyxcbiAgICAgICAgICBiMTAgPSB4ICogeSAqIHQgLSB6ICogcyxcbiAgICAgICAgICBiMTEgPSB5ICogeSAqIHQgKyBjLFxuICAgICAgICAgIGIxMiA9IHogKiB5ICogdCArIHggKiBzLFxuICAgICAgICAgIGIyMCA9IHggKiB6ICogdCArIHkgKiBzLFxuICAgICAgICAgIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzLFxuICAgICAgICAgIGIyMiA9IHogKiB6ICogdCArIGM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgbTAwICogYjAwICsgbTEwICogYjAxICsgbTIwICogYjAyLCBtMDEgKiBiMDAgKyBtMTEgKiBiMDEgKyBtMjEgKiBiMDIsIG0wMiAqIGIwMCArIG0xMiAqIGIwMSArIG0yMiAqIGIwMiwgbTAzICogYjAwICsgbTEzICogYjAxICsgbTIzICogYjAyLFxuICAgICAgbTAwICogYjEwICsgbTEwICogYjExICsgbTIwICogYjEyLCBtMDEgKiBiMTAgKyBtMTEgKiBiMTEgKyBtMjEgKiBiMTIsIG0wMiAqIGIxMCArIG0xMiAqIGIxMSArIG0yMiAqIGIxMiwgbTAzICogYjEwICsgbTEzICogYjExICsgbTIzICogYjEyLFxuICAgICAgbTAwICogYjIwICsgbTEwICogYjIxICsgbTIwICogYjIyLCBtMDEgKiBiMjAgKyBtMTEgKiBiMjEgKyBtMjEgKiBiMjIsIG0wMiAqIGIyMCArIG0xMiAqIGIyMSArIG0yMiAqIGIyMiwgbTAzICogYjIwICsgbTEzICogYjIxICsgbTIzICogYjIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTJdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxM10sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzE0XSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTVdLFxuXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcblxuICAgICAgICBtMDAgPSBtYXRyaXhbIDBdLFxuICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICBtMDIgPSBtYXRyaXhbIDJdLFxuICAgICAgICBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICBtMTEgPSBtYXRyaXhbIDVdLFxuICAgICAgICBtMTIgPSBtYXRyaXhbIDZdLFxuICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLFxuICAgICAgICBtMjEgPSBtYXRyaXhbIDldLFxuICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICBtMjMgPSBtYXRyaXhbMTFdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0wMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTExLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjMsXG4gICAgbTAwICogeCArIG0xMCAqIHkgKyBtMjAgKiB6ICsgbWF0cml4WzEyXSwgbTAxICogeCArIG0xMSAqIHkgKyBtMjEgKiB6ICsgbWF0cml4WzEzXSwgbTAyICogeCArIG0xMiAqIHkgKyBtMjIgKiB6ICsgbWF0cml4WzE0XSwgbTAzICogeCArIG0xMyAqIHkgKyBtMjMgKiB6ICsgbWF0cml4WzE1XSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlNChmaWVsZE9mVmlldywgYXNwZWN0UmF0aW8sIHpOZWFyLCB6RmFyKSB7XG4gIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmaWVsZE9mVmlldyAvIDIpLFxuICAgICAgICBuZiA9IDEgLyAoek5lYXIgLSB6RmFyKTtcblxuICByZXR1cm4gKFtcblxuICAgIGYgLyBhc3BlY3RSYXRpbywgMCwgMCwgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgMCwgICAgICAgICAgICAgICBmLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIDAsICh6RmFyICsgek5lYXIpICogbmYsICAgIC0xLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKDIgKiB6RmFyICogek5lYXIpICogbmYsIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaWRlbnRpdHkyLFxuICBpZGVudGl0eTMsXG4gIGlkZW50aXR5NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgaW52ZXJ0MixcbiAgaW52ZXJ0MyxcbiAgaW52ZXJ0NCxcbiAgdHJhbnNwb3NlMixcbiAgdHJhbnNwb3NlMyxcbiAgdHJhbnNwb3NlNCxcbiAgc2NhbGU0LFxuICByb3RhdGU0LFxuICB0cmFuc2xhdGU0LFxuICBwZXJzcGVjdGl2ZTRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4ID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgRVJST1IgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgQ1RSTF9DID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVCA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEUgPSBcImNvbnRlbnQtdHlwZVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdO31cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoKGFycmF5KSB7IHJldHVybiBhcnJheVszXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgW2VsZW1lbnRPckFycmF5Ml07XG4gIFxuICBwdXNoKGFycmF5MSwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheTEsIGFycmF5Mikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXkyLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRFbGVtZW50cyA9IFtdO1xuICBcbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgZmlsdGVyZWRFbGVtZW50cy51bnNoaWZ0KGZpcnN0RGVsZXRlZEVsZW1lbnQpOyAgLy8vXG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHBydW5lZEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gIFxuICBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIHBhc3NlZCA/XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KSA6XG4gICAgICAgIGFycmF5Mi5wdXNoKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhOYW1lKHBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLy8sIEVNUFRZX1NUUklORykucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7IC8vL1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gKC9cXC8vLnRlc3QocGF0aCkgPT09IGZhbHNlKTtcblxuICByZXR1cm4gcGF0aE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhUb3Btb3N0TmFtZShwYXRoKSB7XG4gIGNvbnN0IHBhdGhOYW1lID0gaXNQYXRoTmFtZShwYXRoKSxcbiAgICAgICAgcGF0aEFic29sdXRlUGF0aCA9IGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSxcbiAgICAgICAgcGF0aFRvcG1vc3ROYW1lID0gKHBhdGhOYW1lICYmIHBhdGhBYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoUmVsYXRpdmVQYXRoID0gIS9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoUmVsYXRpdmVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aEFic29sdXRlUGF0aCA9IC9eXFwvLy50ZXN0KHBhdGgpO1xuXG4gIHJldHVybiBwYXRoQWJzb2x1dGVQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoKHRvcG1vc3ROYW1lLCBhYnNvbHV0ZVBhdGgpIHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdE5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoID0gcmVnRXhwLnRlc3QoYWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBsZXQgY29tYmluZWRQYXRoID0gbnVsbDtcblxuICBjb25zdCBwYXRoTmFtZXMgPSBwYXRoLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgcmVsYXRpdmVQYXRoTmFtZXMgPSByZWxhdGl2ZVBhdGguc3BsaXQoL1xcLy8pO1xuXG4gIGxldCBsYXN0UGF0aE5hbWUsXG4gICAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgaWYgKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuXCIpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICB9XG5cbiAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLi5cIikgJiYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gICAgcGF0aE5hbWVzLnBvcCgpO1xuXG4gICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuICAgIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbWJpbmVkUGF0aE5hbWVzID0gW10uY29uY2F0KHBhdGhOYW1lcykuY29uY2F0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICAgIGNvbWJpbmVkUGF0aCA9IGNvbWJpbmVkUGF0aE5hbWVzLmpvaW4oXCIvXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdGVuYXRlUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAgLy8vXG5cbiAgY29uc3QgY29uY2F0ZW5hdGVkUGF0aCA9IGAke3BhdGh9LyR7cmVsYXRpdmVQYXRofWA7XG5cbiAgcmV0dXJuIGNvbmNhdGVuYXRlZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IGJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXi4qXFwvKFteXFwvXStcXC8/KSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgYm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aChwYXRoKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4rKVxcL1teXFwvXStcXC8/JC8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgdG9wbW9zdERpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKylcXC8uKyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKC4qKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10rXFwvKC4rKSQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNQYXRoTmFtZSxcbiAgaXNQYXRoVG9wbW9zdE5hbWUsXG4gIGlzUGF0aFJlbGF0aXZlUGF0aCxcbiAgaXNQYXRoQWJzb2x1dGVQYXRoLFxuICBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgsXG4gIGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGhcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EX0NIQVJBQ1RFUiA9IFwiJlwiO1xuZXhwb3J0IGNvbnN0IExJTkVfRkVFRF9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tTUEFDRV9DSEFSQUNURVIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3Qgb3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLFxuICAgICAgICBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBvdmVyd3JpdHRlbiA9IG93blByb3BlcnR5TmFtZXMuc29tZSgob3duUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID0gb3duUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAobG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICBoZWFkZXJzW293blByb3BlcnR5TmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICBpZiAoIW92ZXJ3cml0dGVuKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IG93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSxcbiAgICAgICAgbG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lcyA9IG93blByb3BlcnR5TmFtZXMubWFwKChvd25Qcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWUgPSBvd25Qcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIHJldHVybiBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWU7XG4gICAgICAgIH0pLFxuICAgICAgICBsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzSW5jbHVkZXNMb3dlcmNhc2VOYW1lID0gbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lcy5pbmNsdWRlcyhsb3dlcmNhc2VOYW1lKTtcblxuICBpZiAoIWxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXNJbmNsdWRlc0xvd2VyY2FzZU5hbWUpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1ldGVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvdmVyd3JpdGUsXG4gIHVuZGVyd3JpdGUsXG4gIHBvcnRGcm9tSG9zdCxcbiAgc2VjdXJlRnJvbUhvc3QsXG4gIGhvc3RuYW1lRnJvbUhvc3QsXG4gIHF1ZXJ5U3RyaW5nRnJvbVBhcmFtZXRlcnMsXG4gIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVyc1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGlsc3QoY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnR1YWxseShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaywgaW5kZXgpID0+IHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9NRVRIT0QgPSBcIkdFVFwiO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVUSE9EID0gXCJQT1NUXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBQ0NFUFQsIENPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgdW5kZXJ3cml0ZSwgdXJsRnJvbUhvc3RVUklBbmRQYXJhbWV0ZXJzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYm9keSA9IG51bGw7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgYm9keSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9EO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycyk7XG5cbiAgdW5kZXJ3cml0ZUNvbnRlbnRUeXBlKGhlYWRlcnMpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzLCBtZXRob2QsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHVybCA9IHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyhob3N0LCB1cmksIHBhcmFtZXRlcnMpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGJvZHksICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBib2R5ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZVRleHQgfSA9IHhtbEh0dHBSZXF1ZXN0O1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGJvZHkgPSByZXNwb25zZVRleHQ7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGJvZHksICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGJvZHkgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgYm9keSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhib2R5LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcblxuICBpZiAoYWNjZXB0ICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihBQ0NFUFQsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRSwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGJvZHkgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGJvZHkpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFQsICAvLy9cbiAgICAgICAgdmFsdWUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEUsICAvLy9cbiAgICAgICAgdmFsdWUgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBtZXJnZSwgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGFycmF5LCBlbGVtZW50KSB7XG4gIGFycmF5LnB1c2goZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJtdXRlKGFycmF5LCBwbGFjZXMpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBjdXQgPSBsZW5ndGggLSBwbGFjZXMsXG4gICAgICAgIGxlYWRpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKDAsIGN1dCksXG4gICAgICAgIHRyYWlsaW5nRWxlbWVudHMgPSBhcnJheS5zbGljZShjdXQpO1xuXG4gIGFycmF5ID0gWyAuLi50cmFpbGluZ0VsZW1lbnRzLCAuLi5sZWFkaW5nRWxlbWVudHMgXTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiBlbGVtZW50cy5jb25jYXQoYXJyYXkpLCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICBbIGFycmF5T3JFbGVtZW50IF07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjYWxlMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlkZW50aXR5NCwgc2NhbGU0LCBpbnZlcnQ0LCByb3RhdGU0LCB0cmFuc2xhdGU0LCB0cmFuc3Bvc2U0LCBwZXJzcGVjdGl2ZTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIgPSBmYWxzZSkge1xuICBsZXQgcm90YXRpb25zTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gMCwgLy8vXG4gICAgICAgIHhBbmdsZSA9IGZpcnN0QW5nbGUsICAvLy8vXG4gICAgICAgIHlBbmdsZSA9IHNlY29uZEFuZ2xlLCAvLy9cbiAgICAgICAgekFuZ2xlID0gdGhpcmRBbmdsZSwgIC8vL1xuICAgICAgICB4QXhpcyA9IFsgMSwgMCwgMCBdLFxuICAgICAgICB5QXhpcyA9IFsgMCwgMSwgMCBdLFxuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdO1xuXG4gIGlmIChyZXZlcnNlT3JkZXIpIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgekFuZ2xlLCB6QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgfSBlbHNlIHtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeEFuZ2xlLCB4QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHlBbmdsZSwgeUF4aXMpO1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgfVxuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucykge1xuICBjb25zdCBzY2FsYXIgPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiwgLy8vXG4gICAgICAgIGFuZ2xlcyA9IHNjYWxlMyhyb3RhdGlvbnMsIHNjYWxhciksXG4gICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKTtcblxuICByZXR1cm4gcm90YXRpb25zTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KSB7XG4gIGxldCBub3JtYWxzTWF0cml4ID0gaW52ZXJ0NChyb3RhdGlvbnNNYXRyaXgpOyAvLy9cblxuICBub3JtYWxzTWF0cml4ID0gdHJhbnNwb3NlNChub3JtYWxzTWF0cml4KTtcblxuICByZXR1cm4gbm9ybWFsc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzKGNhbWVyYSwgY2FudmFzKSB7XG4gIGNvbnN0IHpGYXIgPSBjYW1lcmEuZ2V0WkZhcigpLFxuICAgICAgICB6TmVhciA9IGNhbWVyYS5nZXRaTmVhcigpLFxuICAgICAgICB3aWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGZpZWxkT2ZWaWV3ID0gY2FtZXJhLmdldEZpZWxkT2ZWaWV3KCksXG4gICAgICAgIGFzcGVjdFJhdGlvID0gKCB3aWR0aCAvIGhlaWdodCApLFxuICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpO1xuXG4gIHJldHVybiBwcm9qZWN0aW9uTWF0cml4O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtdWx0aXBseTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgc2NhbGVNYXRyaXhGcm9tU2NhbGUsIHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uLCByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pIHtcbiAgbGV0IG1hdHJpeCA9IG51bGw7XG5cbiAgaWYgKHNjYWxlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2NhbGVNYXRyaXggPSBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICBzY2FsZU1hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChzY2FsZU1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbnMgIT09IG51bGwpIHtcbiAgICBjb25zdCByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tUm90YXRpb25zKHJvdGF0aW9ucyk7XG5cbiAgICBtYXRyaXggPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICByb3RhdGlvbnNNYXRyaXggOlxuICAgICAgICAgICAgICAgICBtdWx0aXBseTQocm90YXRpb25zTWF0cml4LCBtYXRyaXgpO1xuXG4gIH1cblxuICBpZiAocG9zaXRpb24gIT09IG51bGwpIHtcbiAgICBjb25zdCBwb3NpdGlvbk1hdHJpeCA9IHBvc2l0aW9uTWF0cml4RnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA6XG4gICAgICAgICAgICAgICAgICBtdWx0aXBseTQocG9zaXRpb25NYXRyaXgsIG1hdHJpeCk7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm0gPSAobWF0cml4ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdmVjdG9yIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICh2ZWN0b3IpID0+IHRyYW5zZm9ybTQoWyAuLi52ZWN0b3IsIDEgXSwgbWF0cml4KS5zbGljZSgwLCAzKTtcblxuICByZXR1cm4gdHJhbnNmb3JtO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBjb21wb3NlVHJhbnNmb3JtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWFza1JlZmVyZW5jZSA9IG1hc2tSZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRNYXNrUmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tSZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbjtcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrUmVmZXJlbmNlLCBtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2sgPSB0aGlzLmZpbmRNYXNrKG1hc2tSZWZlcmVuY2UsIG1hc2tzKTtcblxuICAgIGlmIChtYXNrICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZmluZE1hc2sobWFza1JlZmVyZW5jZSwgbWFza3MpIHtcbiAgICBjb25zdCBtYXNrID0gbWFza3MuZmluZCgobWFzaykgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gbWFzay5nZXRSZWZlcmVuY2UoKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbWFza1JlZmVyZW5jZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBtYXNrO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBoaWRkZW4gPSBoaWRkZW4gfHwgdGhpcy5oaWRkZW47IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgYW1lbmRGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTtcblxuICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMubWFza1JlZmVyZW5jZSwgbWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIHsgc2NhbGUgPSBudWxsLCByb3RhdGlvbnMgPSBudWxsIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgbGV0IHsgcG9zaXRpb24gPSBudWxsIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgaWYgKHBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IHNjYWxlMyhwb3NpdGlvbiwgbWFnbmlmaWNhdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQubWFnbmlmeShtYWduaWZpY2F0aW9uKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgbWFza1JlZmVyZW5jZSA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IG51bGwsIC8vL1xuICAgICAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgaGlkZGVuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGZ1bmN0aW9uRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoRnVuY3Rpb25DYW52YXNFbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBmdW5jdGlvbkVsZW1lbnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uQ2FudmFzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmxhdHRlbiwgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBsZXQgZWxlbWVudDtcblxuICBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICBjb25zdCBmdW5jID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoZnVuYyhwcm9wZXJ0aWVzKSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9KTtcblxuICAgIGVsZW1lbnQgPSBGdW5jdGlvbkNhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHplcm8yLCB6ZXJvMyB9IGZyb20gXCIuL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9SID0gMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0cgPSAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQiA9IDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9BID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0hPU1QgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVQVEggPSAxLjA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9aX0ZBUiA9IDEwMDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9aX05FQVIgPSAxO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSElEREVOID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTSVNUID0gZmFsc2U7XG5leHBvcnQgY29uc3QgREVGQVVMVF9GSUVMRF9PRl9WSUVXID0gNDU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NQUdOSUZJQ0FUSU9OID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfQU5HTEVTID0gemVybzIoKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyA9IHplcm8zKCk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFID0gNTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gPSBbIDAsIDAsIDUgXTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgPSAwLjI1O1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiA9IDAuMDI1O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0RFUFRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGgoZGVwdGggPSBERUZBVUxUX0RFUFRIKSB7XG4gIHRoaXMuY29udGV4dC5jbGVhckRlcHRoKGRlcHRoKTsgXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVwdGhCdWZmZXIoKSB7XG4gIGNvbnN0IHsgREVQVEhfQlVGRkVSX0JJVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBtYXNrID0gREVQVEhfQlVGRkVSX0JJVDtcblxuICB0aGlzLmNvbnRleHQuY2xlYXIobWFzayk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURlcHRoVGVzdGluZygpIHtcbiAgY29uc3QgeyBERVBUSF9URVNULCBMRVFVQUwgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBERVBUSF9URVNULFxuICAgICAgICBkZXB0aENvbXBhcmlzb25GdW5jdGlvbiA9IExFUVVBTDtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuZGVwdGhGdW5jKGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uKTtcbn1cblxuY29uc3QgZGVwdGhNaXhpbnMgPSB7XG4gIGNsZWFyRGVwdGgsXG4gIGNsZWFyRGVwdGhCdWZmZXIsXG4gIGVuYWJsZURlcHRoVGVzdGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVwdGhNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTSEFERVJfRVJST1IgPSBcIlVuYWJsZSB0byBjcmVhdGUgdGhlIHNoYWRlci5cIjtcbmV4cG9ydCBjb25zdCBXRUJfR0xfQ09OVEVYVF9FUlJPUiA9IFwiVW5hYmxlIHRvIGdldCB0aGUgV2ViR0wgY29udGV4dC5cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hBREVSX0VSUk9SIH0gZnJvbSBcIi4uL2Vycm9yc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIodHlwZSwgc2hhZGVyU291cmNlKSB7XG4gIGNvbnN0IHsgQ09NUElMRV9TVEFUVVMgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcG5hbWUgPSBDT01QSUxFX1NUQVRVUyxcbiAgICAgICAgc2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcih0eXBlKTtcblxuICB0aGlzLmNvbnRleHQuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTtcblxuICB0aGlzLmNvbnRleHQuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuXG4gIGNvbnN0IGNvbXBpbGVTdGF0dXMgPSB0aGlzLmNvbnRleHQuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgcG5hbWUpO1xuXG4gIGlmICghY29tcGlsZVN0YXR1cykge1xuICAgIHRocm93IG5ldyBFcnJvcihTSEFERVJfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgVkVSVEVYX1NIQURFUiB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlID0gVkVSVEVYX1NIQURFUixcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgdmVydGV4U2hhZGVyU291cmNlKTtcblxuICByZXR1cm4gdmVydGV4U2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHsgRlJBR01FTlRfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBGUkFHTUVOVF9TSEFERVIsXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIodHlwZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiBmcmFnbWVudFNoYWRlcjtcbn1cblxuY29uc3Qgc2hhZGVyTWl4aW5zID0ge1xuICBjcmVhdGVTaGFkZXIsXG4gIGNyZWF0ZVZlcnRleFNoYWRlcixcbiAgY3JlYXRlRnJhZ21lbnRTaGFkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoYWRlck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICB1aW50MTZBcnJheSA9IG5ldyBVaW50MTZBcnJheShkYXRhKSxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgdWludDE2QXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gZWxlbWVudEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kQnVmZmVyKGJ1ZmZlciwgYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIEZMT0FUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdHlwZSA9IEZMT0FULFxuICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMDtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVMb2NhdGlvbik7XG59XG5cbmNvbnN0IGJ1ZmZlck1peGlucyA9IHtcbiAgY3JlYXRlRWxlbWVudEJ1ZmZlcixcbiAgYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcixcbiAgYmluZEJ1ZmZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVmZmVyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX1IsIERFRkFVTFRfRywgREVGQVVMVF9CLCBERUZBVUxUX0EgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJDb2xvdXIociA9IERFRkFVTFRfUiwgZyA9IERFRkFVTFRfRywgYiA9IERFRkFVTFRfQiwgYSA9IERFRkFVTFRfQSkgeyB0aGlzLmNvbnRleHQuY2xlYXJDb2xvcihyLCBnLCBiLCBhKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNvbG91ckJ1ZmZlcigpIHtcbiAgY29uc3QgeyBDT0xPUl9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBDT0xPUl9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuY29uc3QgY29sb3VyTWl4aW5zID0ge1xuICBjbGVhckNvbG91cixcbiAgY2xlYXJDb2xvdXJCdWZmZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbG91ck1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gYXBwbHlNYXRyaXgodW5pZm9ybUxvY2F0aW9uLCBtYXRyaXgpIHtcbiAgY29uc3QgdHJhbnNwb3NlID0gZmFsc2U7ICAvLy9cblxuICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtTG9jYXRpb24sIHRyYW5zcG9zZSwgbWF0cml4KTtcbn1cblxuY29uc3QgbWF0cml4TWl4aW5zID0ge1xuICBhcHBseU1hdHJpeFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0cml4TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMsXG4gICAgICAgICBNT1pfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDLFxuICAgICAgICAgV0VCS0lUX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCkge1xuXHRjb25zdCB7IFJHQkEsIExJTkVBUiwgVU5TSUdORURfQllURSwgVEVYVFVSRTAsIFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9TLCBURVhUVVJFX1dSQVBfVCwgVU5QQUNLX0ZMSVBfWV9XRUJHTCwgQ0xBTVBfVE9fRURHRSwgTkVBUkVTVCwgUkVQRUFULCBURVhUVVJFX01JTl9GSUxURVIgfSA9IHRoaXMuY29udGV4dCxcblx0XHRcdFx0dGFyZ2V0ID0gVEVYVFVSRTAgKyBpbmRleCxcblx0XHRcdFx0bGV2ZWwgPSAwLFxuXHRcdFx0XHRpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdGZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuXHRcdFx0XHR0ZXh0dXJlID0gdGhpcy5jb250ZXh0LmNyZWF0ZVRleHR1cmUoKTtcblxuICB0aGlzLmNvbnRleHQuYWN0aXZlVGV4dHVyZSh0YXJnZXQpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZShURVhUVVJFXzJELCB0ZXh0dXJlKTtcblxuICB0aGlzLmNvbnRleHQucGl4ZWxTdG9yZWkoVU5QQUNLX0ZMSVBfWV9XRUJHTCwgdHJ1ZSk7XG5cbiAgdGhpcy5jb250ZXh0LnRleEltYWdlMkQoVEVYVFVSRV8yRCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuICBpZiAocmVwZWF0KSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFJFUEVBVCk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIFJFUEVBVCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UpO1xuICAgIHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxuXG5cdHRoaXMuY29udGV4dC50ZXhQYXJhbWV0ZXJpKFRFWFRVUkVfMkQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgTElORUFSKTtcblxuXHRyZXR1cm4gdGV4dHVyZTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmcoKSB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IChcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpIHx8XG4gICAgdGhpcy5jb250ZXh0LmdldEV4dGVuc2lvbihXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKVxuICApO1xuXG4gIGlmIChleHRlbnNpb24pIHtcbiAgICBjb25zdCB7IFRFWFRVUkVfMkQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICB7IE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQgfSA9IGV4dGVuc2lvbixcbiAgICAgICAgICBtYXhpbXVtID0gdGhpcy5jb250ZXh0LmdldFBhcmFtZXRlcihNQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmYoVEVYVFVSRV8yRCwgVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIG1heGltdW0pO1xuICB9XG59XG5cbmNvbnN0IHRleHR1cmVNaXhpbnMgPSB7XG4gIGNyZWF0ZVRleHR1cmUsXG4gIGVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZXh0dXJlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIHtcbiAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY29udGV4dC5jcmVhdGVQcm9ncmFtKCk7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuXG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIHVzZVByb2dyYW0ocHJvZ3JhbSkge1xuICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxuY29uc3QgcHJvZ3JhbU1peGlucyA9IHtcbiAgY3JlYXRlUHJvZ3JhbSxcbiAgdXNlUHJvZ3JhbVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZ3JhbU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZW5hYmxlQmxlbmRpbmcoKSB7XG4gIGNvbnN0IHsgQkxFTkQsIFNSQ19BTFBIQSwgT05FIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIGNhcGFjaXR5ID0gQkxFTkQsXG4gICAgICAgIHNvdXJjZUZhY3RvciA9IFNSQ19BTFBIQSxcbiAgICAgICAgZGVzdGluYXRpb25GYWN0b3IgPSBPTkU7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZShjYXBhY2l0eSk7XG5cbiAgdGhpcy5jb250ZXh0LmJsZW5kRnVuYyhzb3VyY2VGYWN0b3IsIGRlc3RpbmF0aW9uRmFjdG9yKTtcbn1cblxuY29uc3QgYmxlbmRpbmdNaXhpbnMgPSB7XG4gIGVuYWJsZUJsZW5kaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBibGVuZGluZ01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKSB7XG4gIHRoaXMuY29udGV4dC51bmlmb3JtMWkodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpO1xufVxuXG5jb25zdCBsb2NhdGlvbk1peGlucyA9IHtcbiAgZ2V0VW5pZm9ybUxvY2F0aW9uLFxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbixcbiAgc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvbk1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRlcHRoTWl4aW5zIGZyb20gXCIuL21peGlucy9kZXB0aFwiO1xuaW1wb3J0IHNoYWRlck1peGlucyBmcm9tIFwiLi9taXhpbnMvc2hhZGVyXCI7XG5pbXBvcnQgYnVmZmVyTWl4aW5zIGZyb20gXCIuL21peGlucy9idWZmZXJcIjtcbmltcG9ydCBjb2xvdXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NvbG91clwiO1xuaW1wb3J0IG1hdHJpeE1peGlucyBmcm9tIFwiLi9taXhpbnMvbWF0cml4XCI7XG5pbXBvcnQgdGV4dHVyZU1peGlucyBmcm9tIFwiLi9taXhpbnMvdGV4dHVyZVwiO1xuaW1wb3J0IHByb2dyYW1NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Byb2dyYW1cIjtcbmltcG9ydCBibGVuZGluZ01peGlucyBmcm9tIFwiLi9taXhpbnMvYmxlbmRpbmdcIjtcbmltcG9ydCBsb2NhdGlvbk1peGlucyBmcm9tIFwiLi9taXhpbnMvbG9jYXRpb25cIjtcblxuaW1wb3J0IHsgV0VCX0dMX0NPTlRFWFRfRVJST1IgfSBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCB7IFdJRFRILCBIRUlHSFQsIENBTlZBUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IENBTlZBUykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICAgICAgICBjb250ZXh0ID0gY29udGV4dEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZURlcHRoVGVzdGluZygpOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC53aWR0aDsgfVxuXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oZWlnaHQ7IH1cblxuICBnZXRDbGllbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfVxuXG4gIGdldENsaWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKFdJRFRILCB3aWR0aCk7IH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoSEVJR0hULCBoZWlnaHQpOyB9XG5cbiAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCB4ID0gMCxcbiAgICAgICAgICB5ID0gMDtcblxuICAgIHRoaXMuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgdGhpcy5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJEZXB0aCgpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVwdGhCdWZmZXIoKTtcbiAgICB0aGlzLmNsZWFyQ29sb3VyQnVmZmVyKCk7XG4gIH1cblxuICByZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7XG5cbiAgICB0aGlzLmFwcGx5TWF0cml4KG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG9mZnNldHNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgobm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXgpO1xuICAgIHRoaXMuYXBwbHlNYXRyaXgocHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCkge1xuICAgIGNvbnN0IHsgVFJJQU5HTEVTLCBVTlNJR05FRF9TSE9SVCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG1vZGUgPSBUUklBTkdMRVMsXG4gICAgICAgICAgdHlwZSA9IFVOU0lHTkVEX1NIT1JULFxuICAgICAgICAgIGNvdW50ID0gZmluaXNoIC0gc3RhcnQsXG4gICAgICAgICAgb2Zmc2V0ID0gc3RhcnQgKiAyOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHR5cGUsIG9mZnNldClcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGRlcHRoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgc2hhZGVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgYnVmZmVyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgY29sb3VyTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbWF0cml4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgdGV4dHVyZU1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIHByb2dyYW1NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBibGVuZGluZ01peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGxvY2F0aW9uTWl4aW5zKTtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBjb25zdCBjb250ZXh0ID0gZG9tRWxlbWVudC5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFdFQl9HTF9DT05URVhUX0VSUk9SKTtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdWJ0cmFjdDMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgZXh0ZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksXG4gICAgICAgICAgZXh0ZW50ID0gdGhpcy5leHRlbnQuc2xpY2UoKSxcbiAgICAgICAgICBlZGdlID0gbmV3IEVkZ2UocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoQ2xhc3MsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBpZiAoZW5kVmVydGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZFZlcnRleCA9IHN0YXJ0VmVydGV4OyAgLy8vXG4gICAgICBzdGFydFZlcnRleCA9IENsYXNzOyAgLy8vXG4gICAgICBDbGFzcyA9IEVkZ2U7IC8vL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBlbmRQb3NpdGlvbiA9IGVuZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICBleHRlbnQgPSBzdWJ0cmFjdDMoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgIGVkZ2UgPSBuZXcgQ2xhc3MocG9zaXRpb24sIGV4dGVudCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQzLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb24gPSB2ZXJ0aWNlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb24sIHZlcnRleCkgPT4ge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2NhbGVkVmVydGV4UG9zaXRpb24gPSBzY2FsZTModmVydGV4UG9zaXRpb24sIDEvMyk7XG5cbiAgICBtaWRQb2ludFBvc2l0aW9uID0gYWRkMyhtaWRQb2ludFBvc2l0aW9uLCBzY2FsZWRWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbiAgfSwgWyAwLCAwLCAwIF0pO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKSB7XG4gIG1pZFBvaW50UG9zaXRpb24gPSBbIC4uLm1pZFBvaW50UG9zaXRpb24uc2xpY2UoMCwgMiksIDAgXTsgIC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSxcbiAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzIHx8IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7IC8vL1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcykge1xuICAgICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXM7XG59XG5cbmZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcy5yZWR1Y2UoKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMsIG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgaWYgKG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZSA9IG1hc2tpbmdFZGdlLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbik7XG5cbiAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXM7XG4gIH0sIHRydWUpO1xuXG4gIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuXG5pbXBvcnQgeyB0aGlyZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWlkUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0VkZ2UgZXh0ZW5kcyBFZGdlIHtcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBtaWRQb2ludFBvc2l0aW9uID0gcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZShtaWRQb2ludFBvc2l0aW9uKTsgIC8vL1xuXG4gICAgY29uc3QgZXh0ZW50ID0gdGhpcy5nZXRFeHRlbnQoKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnRQb3NpdGlvbiwgcG9zaXRpb24pLFxuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludFJlbGF0aXZlUG9zaXRpb24pLCAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSAodGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPiAwKTtcblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICB9XG4gIFxuICBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pIHtcbiAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gdGhpcy5pc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQobWlkUG9pbnRQb3NpdGlvbiksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQgPSAhbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgICBcbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkgeyByZXR1cm4gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoTWFza2luZ0VkZ2UsIHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpOyB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDEsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyh2YWx1ZSwgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SKSB7IHJldHVybiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlLCAwLCBtYXJnaW5PZkVycm9yKTsgfVxuXG5mdW5jdGlvbiBpc0FwcHJveGltYXRlbHlFcXVhbFRvKHZhbHVlQSwgdmFsdWVCLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlQSAtIHZhbHVlQixcbiAgICAgICAgYWJzb2x1dGVEaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZSksXG4gICAgICAgIGFwcHJveGltYXRlbHlFcXVhbCA9IChhYnNvbHV0ZURpZmZlcmVuY2UgPCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gYXBwcm94aW1hdGVseUVxdWFsO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxICsgYW5nbGVDb3NpbmUpIC8gMik7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZG90MywgY3Jvc3MzLCBub3JtYWxpc2UzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUsIGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FuZ2xlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbikgeyByZXR1cm4gaGFtaWx0b25Qcm9kdWN0KGhhbWlsdG9uUHJvZHVjdChyb3RhdGlvblF1YXRlcm5pb24sIGltYWdpbmFyeVF1YXRlcm5pb24pLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHJvdGF0aW9uUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZpcnN0KHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSBzZWNvbmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gdGhpcmQocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIGZvdXJ0aFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IGZvdXJ0aChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBmaXJzdFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtc2Vjb25kUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC10aGlyZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCxcbiAgICAgICAgICAtZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50XG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGludmVyc2VSb3RhdGlvblF1YXRlcm5pb247ICAvLy9cblxuICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSB7XG4gIGNvbnN0IGV4dGVudCA9IG5vcm1hbC5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE5vcm1hbCA9IGV4dGVudCwgIC8vL1xuICAgICAgICB6QXhpcyA9IFsgMCwgMCwgMSBdLFxuICAgICAgICBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBkb3QzKHVuaXROb3JtYWwsIHpBeGlzKSxcbiAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMgPSBjcm9zczModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmUgPSBkb3RQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsIC8vL1xuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlID0gTWF0aC5hYnMoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lQWJzb2x1dGVWYWx1ZUFwcHJveGltYXRlbHlFcXVhbFRvT25lID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb09uZShhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlKSxcbiAgICAgICAgYXhpc09mUm90YXRpb24gPSBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbIDEsIDAsIDAgXSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyb3NzUHJvZHVjdE9mVW5pdE5vcm1hbEFuZFpBeGlzLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb24gPSBub3JtYWxpc2UzKGF4aXNPZlJvdGF0aW9uKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSA9IGNhbGN1bGF0ZUhhbGZBbmdsZVNpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgdW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyA9IHVuaXRBeGlzT2ZSb3RhdGlvbiwgIC8vL1xuICAgICAgICBmaXJzdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gZmlyc3QodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gc2Vjb25kKHVuaXRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICB0aGlyZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ID0gdGhpcmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IFtcbiAgICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lLFxuICAgICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZSxcbiAgICAgICAgICBzZWNvbmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgKiBoYWxmQW5nbGVPZlJvdGF0aW9uU2luZVxuICAgICAgICBdO1xuXG4gIHJldHVybiBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlRXh0ZW50ID0gbWFza2luZ0VkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudCA9IG5vcm1hbGlzZTMobWFza2luZ0VkZ2VFeHRlbnQpLFxuICAgICAgICB1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzID0gdW5pdE1hc2tpbmdFZGdlRXh0ZW50LCAgLy8vXG4gICAgICAgIGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QodW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCA9IHNlY29uZCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uU2luZSA9IGZpcnN0VW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IHNlY29uZFVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudCwgIC8vL1xuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gKGFuZ2xlT2ZSb3RhdGlvblNpbmUgPiAwICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb247XG59XG5cbmZ1bmN0aW9uIGhhbWlsdG9uUHJvZHVjdChxdWF0ZXJuaW9uQSwgcXVhdGVybmlvbkIpIHtcbiAgY29uc3QgYTEgPSBxdWF0ZXJuaW9uQVswXSxcbiAgICAgICAgYjEgPSBxdWF0ZXJuaW9uQVsxXSxcbiAgICAgICAgYzEgPSBxdWF0ZXJuaW9uQVsyXSxcbiAgICAgICAgZDEgPSBxdWF0ZXJuaW9uQVszXSxcbiAgICAgICAgYTIgPSBxdWF0ZXJuaW9uQlswXSxcbiAgICAgICAgYjIgPSBxdWF0ZXJuaW9uQlsxXSxcbiAgICAgICAgYzIgPSBxdWF0ZXJuaW9uQlsyXSxcbiAgICAgICAgZDIgPSBxdWF0ZXJuaW9uQlszXSxcbiAgICAgICAgYSA9IGExICogYTIgLSBiMSAqIGIyIC0gYzEgKiBjMiAtIGQxICogZDIsXG4gICAgICAgIGIgPSBhMSAqIGIyICsgYjEgKiBhMiArIGMxICogZDIgLSBkMSAqIGMyLFxuICAgICAgICBjID0gYTEgKiBjMiAtIGIxICogZDIgKyBjMSAqIGEyICsgZDEgKiBiMixcbiAgICAgICAgZCA9IGExICogZDIgKyBiMSAqIGMyIC0gYzEgKiBiMiArIGQxICogYTIsXG4gICAgICAgIHF1YXRlcm5pb24gPSBbIGEsIGIsIGMsIGQgXTtcblxuICByZXR1cm4gcXVhdGVybmlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbiwgY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlUG9zaXRpb24ocG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBpbWFnaW5hcnlRdWF0ZXJuaW9uID0gaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbihwb3NpdGlvbiksXG4gICAgICAgIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgIHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uID0gcm90YXRlSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uLCByb3RhdGlvblF1YXRlcm5pb24sIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBvc2l0aW9uID0gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbik7XG5cbiAgcmV0dXJuIHBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGFkZDMsIHN1YnRyYWN0Mywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCkge1xuICBsZXQgaW50ZXJzZWN0aW9uID0gbnVsbDtcblxuICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICBpZiAoZWRnZU5vblBhcmFsbGVsKSB7XG4gICAgY29uc3QgZWRnZUludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSwgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGVkZ2VJbnRlcnNlY3Rpb24gPiAwICkgJiYgKGVkZ2VJbnRlcnNlY3Rpb24gPCAxKSk7XG5cbiAgICBpZiAoZWRnZUludGVyc2VjdGlvbk5vblRyaXZpYWwpIHtcbiAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMucmVkdWNlKChub25OdWxsSW50ZXJzZWN0aW9ucywgaW50ZXJzZWN0aW9uKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbiA9IGludGVyc2VjdGlvbjsgLy8vXG5cbiAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zLnB1c2gobm9uTnVsbEludGVyc2VjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIG5vbk51bGxJbnRlcnNlY3Rpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGludGVyc2VjdGlvbnMucmVkdWNlKChudWxsSW50ZXJzZWN0aW9uSW5kZXgsIGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICBpZiAobnVsbEludGVyc2VjdGlvbkluZGV4ID09PSBudWxsKSB7XG4gICAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBudWxsSW50ZXJzZWN0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGV4dGVudCA9IHN1YnRyYWN0MyhlbmRWZXJ0ZXhQb3NpdGlvbiwgc3RhcnRWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIG9mZnNldCA9IHNjYWxlMyhleHRlbnQsIGludGVyc2VjdGlvbiksXG4gICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gYWRkMyhzdGFydFZlcnRleFBvc2l0aW9uLCBvZmZzZXQpO1xuXG4gIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNFZGdlTm9uUGFyYWxsZWwoZWRnZSkge1xuICBjb25zdCBlZGdlRXh0ZW50ID0gZWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50ID0gZmlyc3QoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBzZWNvbmRFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudCA9IGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCAvIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQsXG4gICAgICAgIGVkZ2VBbmdsZVRhbmdlbnRBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhlZGdlQW5nbGVUYW5nZW50KSxcbiAgICAgICAgZWRnZVBhcmFsbGVsID0gZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybywgLy8vXG4gICAgICAgIGVkZ2VOb25QYXJhbGxlbCA9ICFlZGdlUGFyYWxsZWw7XG5cbiAgcmV0dXJuIGVkZ2VOb25QYXJhbGxlbDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlUG9zaXRpb24gPSBlZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QoZWRnZVBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIGVkZ2VJbnRlcnNlY3Rpb24gPSAoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCAtIGZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50KSAvIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudDtcblxuICByZXR1cm4gZWRnZUludGVyc2VjdGlvbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB7XG4gICAgY29uc3Qgcm90YXRlZFZlcnRleCA9IHZlcnRleC5jbG9uZSgpOyAgLy8vXG5cbiAgICByb3RhdGVkVmVydGV4LnJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHJvdGF0ZWRWZXJ0ZXg7XG4gIH0pO1xuXG4gIHJldHVybiByb3RhdGVkVmVydGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpIHsgIC8vL1xuICBjb25zdCBpbmRleGVzID0gaW5kZXhUdXBsZSwgLy8vXG4gICAgICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlID0gY29vcmRpbmF0ZVR1cGxlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0gVmVydGV4LmZyb21Db29yZGluYXRlVHVwbGUoY29vcmRpbmF0ZVR1cGxlKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2tpbmdFZGdlIGZyb20gXCIuL2VkZ2UvbWFza2luZ1wiO1xuaW1wb3J0IFZlcnRpY2FsTGluZSBmcm9tIFwiLi92ZXJ0aWNhbExpbmVcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBwdXNoLCBzZXBhcmF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNraW5nRmFjZXQge1xuICBjb25zdHJ1Y3RvcihtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLm1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcztcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSB2ZXJ0aWNhbExpbmVzO1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldE1hc2tpbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNraW5nRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNhbExpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsTGluZXM7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldCA9IGZhY2V0LmNsb25lKCk7ICAvLy9cblxuICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzbWFsbGVyRmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICBtYXNrZWRTbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBzZXBhcmF0ZShzbWFsbGVyRmFjZXRzLCBtYXNrZWRTbWFsbGVyRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMsIChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE1hc2tlZCA9IHNtYWxsZXJGYWNldC5pc01hc2tlZChtYXNraW5nRmFjZXQpO1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9IG1hc2tlZFNtYWxsZXJGYWNldHMubGVuZ3RoO1xuXG4gICAgaWYgKG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPT09IDApIHtcbiAgICAgIHVubWFza2VkRmFjZXRzLnB1c2godW5tYXNrZWRGYWNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cy5mb3JFYWNoKCh1bm1hc2tlZFNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHB1c2godW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgbWFza2luZ0VkZ2UgPSBNYXNraW5nRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gbWFza2luZ0VkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXNraW5nRWRnZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUZBVUxUX0hJRERFTiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGhpZGRlbiwgcmVmZXJlbmNlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0SGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGRlbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcikpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5tYWduaWZ5KG1hZ25pZmljYXRpb24pKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbiwgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgaGlkZGVuID0gREVGQVVMVF9ISURERU4gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuLCByZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiwgbWVyZ2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBub3JtYWxzTWF0cml4TmFtZSA9IFwidU5vcm1hbHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRpbmdTb3VyY2U7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcG9zaXRpb25NYXRyaXhOYW1lID0gXCJ1UG9zaXRpb25NYXRyaXhcIjtcbmV4cG9ydCBjb25zdCByb3RhdGlvbnNNYXRyaXhOYW1lID0gXCJ1Um90YXRpb25zTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleFBvc2l0aW9uXCI7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRzTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uc01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uc01hdHJpeE5hbWV9ICogJHtvZmZzZXRzTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhDb2xvdXJcIlxuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuXG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4TmFtZSwgcm90YXRpb25zTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0c01hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5pbXBvcnQgeyBzYW1wbGVyTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmVcIjtcbmltcG9ydCBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCI7XG5pbXBvcnQgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvY29sb3VyXCI7XG5pbXBvcnQgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlc1wiO1xuaW1wb3J0IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuICBcbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcyk7ICAvLy9cbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQubWFnbmlmeShtYWduaWZpY2F0aW9uKSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlciAmJiBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyICYmIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9aX0ZBUiwgREVGQVVMVF9aX05FQVIsIERFRkFVTFRfRklFTERfT0ZfVklFVyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuekZhciA9IHpGYXI7XG4gICAgdGhpcy56TmVhciA9IHpOZWFyO1xuICAgIHRoaXMuZmllbGRPZlZpZXcgPSBmaWVsZE9mVmlldztcbiAgfVxuXG4gIGdldFpGYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuekZhcjtcbiAgfVxuXG4gIGdldFpOZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnpOZWFyO1xuICB9XG5cbiAgZ2V0RmllbGRPZlZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRPZlZpZXc7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLnpGYXIgPSB0aGlzLnpGYXIgKiBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMuek5lYXIgPSB0aGlzLnpOZWFyICogbWFnbmlmaWNhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgbGV0IHsgZmllbGRPZlZpZXcgPSBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgfSA9IHByb3BlcnRpZXM7XG5cbiAgICBmaWVsZE9mVmlldyAqPSBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUjsgLy8vXG5cbiAgICBjb25zdCB7IHpGYXIgPSBERUZBVUxUX1pfRkFSLCB6TmVhciA9IERFRkFVTFRfWl9ORUFSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbWVyYSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRVNDQVBFX0tFWV9DT0RFID0gMjc7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBLRVlVUF9FVkVOVF9UWVBFID0gXCJrZXl1cFwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV05fRVZFTlRfVFlQRSA9IFwia2V5ZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFVVBfRVZFTlRfVFlQRSA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFRE9XTl9FVkVOVF9UWVBFID0gXCJtb3VzZWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRU1PVkVfRVZFTlRfVFlQRSA9IFwibW91c2Vtb3ZlXCI7XG5leHBvcnQgY29uc3QgTU9VU0VXSEVFTF9FVkVOVF9UWVBFID0gXCJtb3VzZXdoZWVsXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVTQ0FQRV9LRVlfQ09ERSwgU0hJRlRfS0VZX0NPREUgfSBmcm9tIFwiLi4va2V5Q29kZXNcIjtcbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSwgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW91c2VFdmVudHMge1xuICBjb25zdHJ1Y3RvcihoYW5kbGVyc01hcCwgbW91c2VEb3duKSB7XG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IGhhbmRsZXJzTWFwO1xuICAgIHRoaXMubW91c2VEb3duID0gbW91c2VEb3duO1xuICB9XG5cbiAgbW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBldmVudFR5cGUpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMubW91c2VEb3duKSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFVVBfRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZURvd25FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFRE9XTl9FVkVOVF9UWVBFKTtcbiAgfVxuXG5cdG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VXSEVFTF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVdoZWVsSGFuZGxlcnMucHVzaChtb3VzZVdoZWVsSGFuZGxlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcykge1xuICAgICAgY29uc3QgY2FudmFzRE9NRWxlbWVudCA9IGNhbnZhcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgICBtb3VzZVVwRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VVcEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuICAgIHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICBjYW52YXNET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkV2ZW50TGlzdGVuZXIpO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcblxuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRVdIRUVMX0VWRU5UX1RZUEUsIG1vdXNlV2hlZWxFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIHJldHVybiBtb3VzZVdoZWVsRGVsdGE7XG59XG5cbmZ1bmN0aW9uIG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQsIGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50LFxuICAgICAgICBjYW52YXNET01FbGVtZW50ID0gdGFyZ2V0LCAgLy8vXG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGNhbnZhc0RPTUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIHsgdG9wLCBsZWZ0IH0gPSBib3VuZGluZ0NsaWVudFJlY3QsXG4gICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgY2xpZW50WCAtIGxlZnQsXG4gICAgICAgICAgdG9wIC0gY2xpZW50WVxuICAgICAgICBdO1xuXG4gIHJldHVybiBtb3VzZUNvb3JkaW5hdGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgS2V5RXZlbnRzIGZyb20gXCIuL2tleUV2ZW50c1wiO1xuaW1wb3J0IE1vdXNlRXZlbnRzIGZyb20gXCIuL21vdXNlRXZlbnRzXCI7XG5cbmltcG9ydCB7IHplcm8yLCBzdWJ0cmFjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5rZXlFdmVudHMgPSBrZXlFdmVudHM7XG4gICAgdGhpcy5tb3VzZUV2ZW50cyA9IG1vdXNlRXZlbnRzO1xuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlRG93biwgY2FudmFzKSB7XG4gICAgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPSB0aGlzLm1vdXNlQ29vcmRpbmF0ZXM7ICAvLy9cblxuICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXM7XG5cbiAgICBpZiAodGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW91c2VEb3duKSB7XG4gICAgICBjb25zdCBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgICBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc3VidHJhY3QyKHRoaXMubW91c2VDb29yZGluYXRlcywgdGhpcy5wcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSwgY2FudmFzKSB7XG4gICAgY29uc3Qgc2hpZnRLZXlEb3duID0gdGhpcy5rZXlFdmVudHMuaXNTaGlmdEtleURvd24oKSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpO1xuXG4gICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pKTtcbiAgfVxuXG4gIGFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VySW5wdXRIYW5kbGVyOyAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7IHRoaXMua2V5RXZlbnRzLmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTsgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5rZXlFdmVudHMuaW5pdGlhbGlzZSgpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50cy5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUhhbmRsZXIobW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGtleUV2ZW50cyA9IEtleUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IG51bGwsICAvLy9cbiAgICAgICAgICB1c2VySW5wdXQgPSBuZXcgVXNlcklucHV0KGhhbmRsZXJzLCBrZXlFdmVudHMsIG1vdXNlRXZlbnRzLCBtb3VzZUNvb3JkaW5hdGVzLCBwcmV2aW91c01vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHVzZXJJbnB1dDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDbGFzcykge1xuICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnQsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IE1hc2sgZnJvbSBcIi4uL2VsZW1lbnQvbWFza1wiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IERFRkFVTFRfTUFHTklGSUNBVElPTiwgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHRoaXMuY2FudmFzLCByZW5kZXIpO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0LnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCB0aGlzLmNhbnZhcykpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5tYXNrcy5mb3JFYWNoKChtYXNrKSA9PiBtYXNrLm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0Lm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuXG4gICAgdGhpcy5jYW1lcmEubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlciA9IHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWFza3MuZm9yRWFjaCgobWFzaykgPT4gbWFzay5pbml0aWFsaXNlKHRoaXMubWFza3MsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5pbml0aWFsaXNlKGNhbnZhcywgdGhpcy5tYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBtYWduaWZpY2F0aW9uID0gREVGQVVMVF9NQUdOSUZJQ0FUSU9OLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKSxcbiAgICAgICAgICBwYXJ0cyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgUGFydCksXG4gICAgICAgICAgY2FtZXJhID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENhbWVyYSksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgKiBtYWduaWZpY2F0aW9uICogbWFnbmlmaWNhdGlvbjtcblxuICAgIHNjZW5lLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5pbXBvcnQgeyByZWZsZWN0MiwgdHJ1bmNhdGU0LCB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKSB7XG4gIGFuZ2xlcyA9IHJlZmxlY3QyKGFuZ2xlcyk7ICAvLy9cblxuICBjb25zdCByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyKTtcblxuICBsZXQgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChkaXJlY3Rpb25zLCByb3RhdGlvbnNNYXRyaXgpO1xuXG4gIHJlbGF0aXZlT2Zmc2V0cyA9IHRydW5jYXRlNChyZWxhdGl2ZU9mZnNldHMpO1xuXG4gIHJldHVybiByZWxhdGl2ZU9mZnNldHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgc2NhbGUzLCByZWZsZWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHJlbGF0aXZlT2Zmc2V0c0Zyb21BbmdsZXNBbmREaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vZmZzZXRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpIHtcbiAgICB0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gICAgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcjtcbiAgfVxuXG4gIGdldE9mZnNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0cztcbiAgfVxuXG4gIGdldERlbHRhTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyO1xuICB9XG5cbiAgdXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKSB7XG4gICAgbW91c2VXaGVlbERlbHRhID0gbW91c2VXaGVlbERlbHRhICogdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyOyAvLy9cblxuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7IC8vL1xuXG4gICAgY29uc3Qgc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gcmVmbGVjdDIoc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgMSkpLFxuICAgICAgICAgIGRpcmVjdGlvbnMgPSBbIC4uLnNjYWxlZFJlZmxlY3RlZFJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCAwIF0sXG4gICAgICAgICAgcmVsYXRpdmVPZmZzZXRzID0gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zLCAxKTtcblxuICAgIHRoaXMub2Zmc2V0cyA9IGFkZDModGhpcy5vZmZzZXRzLCByZWxhdGl2ZU9mZnNldHMpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5vZmZzZXRzID0gc2NhbGUzKHRoaXMub2Zmc2V0cyxtYWduaWZpY2F0aW9uKTtcbiAgICB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgKiBtYWduaWZpY2F0aW9uO1xuICAgIHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciA9IHRoaXMucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllciAqIG1hZ25pZmljYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoaW5pdGlhbE9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpIHtcbiAgICBjb25zdCBvZmZzZXRzID0gaW5pdGlhbE9mZnNldHMsIC8vL1xuICAgICAgICAgIHBhbiA9IG5ldyBQYW4ob2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcik7XG5cbiAgICByZXR1cm4gcGFuO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOR0xFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYWRkMiwgc2NhbGUyLCB0cmFuc2Zvcm0yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWx0IHtcbiAgY29uc3RydWN0b3IoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXM7XG4gIH1cblxuICBnZXRBbmdsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICB9XG5cbiAgZ2V0Um90YXRlZEFuZ2xlcyhjbG9ja3dpc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbXVsdGlwbGllciA9IGNsb2Nrd2lzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgKzEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAwLCAgICAgICAgICAgK211bHRpcGxpZXIsXG4gICAgICAgICAgICAtbXVsdGlwbGllciwgICAgICAgICAgIDAsXG5cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJvdGF0ZWRBbmdsZXMgPSB0cmFuc2Zvcm0yKHRoaXMuYW5nbGVzLCBtYXRyaXgpOyAvLy9cblxuICAgIHJldHVybiByb3RhdGVkQW5nbGVzO1xuICB9XG5cbiAgdXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcykge1xuICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHNjYWxlMihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIEFOR0xFU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgICBjb25zdCByZWxhdGl2ZUFuZ2xlcyA9IHJlbGF0aXZlTW91c2VDb29yZGluYXRlczsgIC8vL1xuXG4gICAgdGhpcy5hbmdsZXMgPSBhZGQyKHRoaXMuYW5nbGVzLCByZWxhdGl2ZUFuZ2xlcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcykge1xuICAgIGNvbnN0IGFuZ2xlcyA9IGluaXRpYWxBbmdsZXMsIC8vL1xuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMpO1xuXG4gICAgcmV0dXJuIHRpbHQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEpTT04oa2V5KSB7XG4gIGxldCBqc29uID0gbnVsbDtcblxuICBjb25zdCB2YWx1ZSA9IGdldChrZXkpO1xuXG4gIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgIGpzb24gPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SlNPTihrZXksIGpzb24pIHtcbiAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICBzZXQoa2V5LCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU09OKGtleSkge1xuICByZW1vdmUoa2V5KTtcbn1cblxuZnVuY3Rpb24gZ2V0KGtheSkge1xuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtheSkgfHwgbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldChrYXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtheSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFuIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3BhblwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvdGlsdFwiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyLCBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCByZW1vdmVKU09OLCBzZXRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IEdBTUlOR19DQU1FUkEsIElOVkVSVF9NVUxUSVBMSUVSLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04sXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIsXG4gICAgICAgICBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyxcbiAgICAgICAgIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMsXG4gICAgICAgICBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nLFxuICAgICAgICAgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgsXG4gICAgICAgICBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldywgcGFuLCB0aWx0LCBwZXJzaXN0KSB7XG4gICAgc3VwZXIoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KTtcblxuICAgIHRoaXMucGFuID0gcGFuO1xuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gICAgdGhpcy5wZXJzaXN0ID0gcGVyc2lzdDtcbiAgfVxuXG4gIGdldFBhbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYW47XG4gIH1cblxuICBnZXRUaWx0KCkge1xuICAgIHJldHVybiB0aGlzLnRpbHQ7XG4gIH1cblxuICBkb2VzUGVyc2lzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJzaXN0O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY29uc3Qga2V5ID0gR0FNSU5HX0NBTUVSQTsgIC8vL1xuXG4gICAgcmVtb3ZlSlNPTihrZXkpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW5Gcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICAgIHRoaXMudGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyh0aGlzLnByb3BlcnRpZXMpO1xuICB9XG5cbiAgdXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIGNhbnZhcywgcmVuZGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbE1vdmVkID0gKG1vdXNlV2hlZWxEZWx0YSAhPT0gMCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoc2hpZnRLZXlEb3duIHx8IG1vdXNlV2hlZWxNb3ZlZCkge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FtZXJhID0gdGhpcywgIC8vL1xuICAgICAgICAgIHBlcnNpc3QgPSB0aGlzLmRvZXNQZXJzaXN0KCksXG4gICAgICAgICAgb2Zmc2V0cyA9IHRoaXMucGFuLmdldE9mZnNldHMoKSxcbiAgICAgICAgICBjbG9ja3dpc2UgPSB0cnVlLFxuICAgICAgICAgIHJvdGF0ZWRBbmdsZXMgPSB0aGlzLnRpbHQuZ2V0Um90YXRlZEFuZ2xlcyhjbG9ja3dpc2UpLFxuICAgICAgICAgIGFuZ2xlcyA9IHJvdGF0ZWRBbmdsZXM7IC8vL1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLnBhbi5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXJBbmRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKGluaXRpYWxPZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxBbmdsZXMgPSBERUZBVUxUX0lOSVRJQUxfQU5HTEVTIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGluaXRpYWxBbmdsZXMgPSBzY2FsZTIoaW5pdGlhbEFuZ2xlcywgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIpOyAvLy9cblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgYW5nbGVzIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsQW5nbGVzID0gYW5nbGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKTtcblxuICByZXR1cm4gdGlsdDtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gbWluaW11bURpc3RhbmNlO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIGdldE1pbmltdW1EaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtRGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAtIG1vdXNlV2hlZWxEZWx0YTtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaXN0YW5jZSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAqIG1hZ25pZmljYXRpb247XG4gICAgdGhpcy5taW5pbXVtRGlzdGFuY2UgPSB0aGlzLm1pbmltdW1EaXN0YW5jZSAqIG1hZ25pZmljYXRpb247XG4gICAgdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyICogbWFnbmlmaWNhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbERpc3RhbmNlQW5kTW91c2VXaGVlbERlbHRhTXVsdGlwbGllcihpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IGluaXRpYWxEaXN0YW5jZSwgLy8vXG4gICAgICAgICAgbWluaW11bURpc3RhbmNlID0gTUlOSU1VTV9ESVNUQU5DRSxcbiAgICAgICAgICB6b29tID0gbmV3IFpvb20oZGlzdGFuY2UsIG1pbmltdW1EaXN0YW5jZSwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcik7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhbiBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy9wYW5cIjtcbmltcG9ydCBUaWx0IGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3RpbHRcIjtcbmltcG9ydCBab29tIGZyb20gXCIuLi8uLi9taXNjZWxsYW5lb3VzL3pvb21cIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBnZXRKU09OLCBzZXRKU09OLCByZW1vdmVKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IERFU0lHTl9DQU1FUkEsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9PRkZTRVRTLFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFLFxuICAgICAgICAgREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgREVGQVVMVF9SRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBwZXJzaXN0ID0gdGhpcy5kb2VzUGVyc2lzdCgpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICBjbG9ja3dpc2UgPSBmYWxzZSxcbiAgICAgICAgICByb3RhdGVkQW5nbGVzID0gdGhpcy50aWx0LmdldFJvdGF0ZWRBbmdsZXMoY2xvY2t3aXNlKSxcbiAgICAgICAgICBhbmdsZXMgPSByb3RhdGVkQW5nbGVzOyAvLy9cblxuICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLFxuICAgICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgYW5nbGVzLFxuICAgICAgICAgICAgICBvZmZzZXRzLFxuICAgICAgICAgICAgICBkaXN0YW5jZVxuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICBzdXBlci5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuXG4gICAgdGhpcy5wYW4ubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcbiAgICB0aGlzLnpvb20ubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhbiA9IHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIHRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgem9vbSA9IHpvb21Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBkZXNpZ25DYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoRGVzaWduQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGRlc2lnbkNhbWVyYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gREVGQVVMVF9NT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSBERUZBVUxUX1JFTEFUSVZFX01PVVNFX0NPT1JESU5BVEVTX01VTFRJUExJRVIgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VXaGVlbERlbHRhTXVsdGlwbGllckFuZFJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIoaW5pdGlhbE9mZnNldHMsIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIsIHJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIpO1xuXG4gIHJldHVybiBwYW47XG59XG5cbmZ1bmN0aW9uIHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXMoaW5pdGlhbEFuZ2xlcyk7XG5cbiAgcmV0dXJuIHRpbHQ7XG59XG5cbmZ1bmN0aW9uIHpvb21Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCwgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IERFRkFVTFRfTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgeyBpbml0aWFsRGlzdGFuY2UgPSBERUZBVUxUX0lOSVRJQUxfRElTVEFOQ0UgfSA9IHByb3BlcnRpZXM7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBERVNJR05fQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGRpc3RhbmNlIH0gPSBqc29uO1xuXG4gICAgICBpbml0aWFsRGlzdGFuY2UgPSBkaXN0YW5jZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKTtcblxuICByZXR1cm4gem9vbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBBTk9OWU1PVVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0hPU1QgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKGNhbGxiYWNrLCBjb25maWd1cmF0aW9uID0gd2luZG93Ll9fY29uZmlndXJhdGlvbl9fKSB7IC8vL1xuICBjb25zdCB7IGhvc3QgPSBERUZBVUxUX0hPU1QsIGltYWdlTmFtZXMsIGltYWdlRGlyZWN0b3J5VVJJIH0gPSBjb25maWd1cmF0aW9uLFxuICAgICAgICBpbWFnZXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICBpbWFnZXNcbiAgICAgICAgfTtcblxuICBmb3JFYWNoKGltYWdlTmFtZXMsIChpbWFnZU5hbWUsIG5leHQsIGRvbmUsIGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBzcmMgPSBgJHtob3N0fSR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWAsXG4gICAgICAgICAgaW1hZ2UgPSBuZXcgSW1hZ2UoKSxcbiAgICAgICAgICBjcm9zc09yaWdpbiA9IEFOT05ZTU9VUztcblxuICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWQsXG4gICAgICBjcm9zc09yaWdpblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25sb2FkKCkge1xuICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuXG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9LCBkb25lLCBjb250ZXh0KTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSBjb250ZXh0O1xuXG4gICAgY2FsbGJhY2soaW1hZ2VzLCBpbWFnZU5hbWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlTWFwKGNhbGxiYWNrLCBjb25maWd1cmF0aW9uID0gd2luZG93Ll9fY29uZmlndXJhdGlvbl9fKSB7IC8vL1xuICBjb25zdCB7IGhvc3QgPSBERUZBVUxUX0hPU1QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04gfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHNyYyA9IGAke2hvc3R9JHtpbWFnZU1hcFVSSX1gLFxuICAgICAgICBpbWFnZU1hcCA9IG5ldyBJbWFnZSgpLFx0Ly8vXG4gICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihpbWFnZU1hcCwge1xuICAgIHNyYyxcbiAgICBvbmxvYWQsXG4gICAgY3Jvc3NPcmlnaW5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25sb2FkKGV2ZW50KSB7XG4gICAgY2FsbGJhY2soaW1hZ2VNYXAsIGltYWdlTWFwSlNPTik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVsb2FkSW1hZ2VzLFxuICBwcmVsb2FkSW1hZ2VNYXBcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9ybWFsaXNlMywgc3VidHJhY3QzLCBjcm9zczMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IGV4dGVudCA9IGNsb25lRXh0ZW50KHRoaXMuZXh0ZW50KSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgc2Vjb25kUG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICB0aGlyZFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkUG9zaXRpb24sIGZpcnN0UG9zaXRpb24pLFxuICAgICAgICAgIGV4dGVudCA9IG5vcm1hbGlzZTMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKGV4dGVudCk7XG5cbiAgICByZXR1cm4gbm9ybWFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNvb3JkaW5hdGVUdXBsZS5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMywgbGVuZ3RoMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWRnZXMoZWRnZXMpIHtcbiAgZWRnZXMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IGVkZ2UuY2xvbmUoKSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVOb3JtYWwobm9ybWFsKSB7XG4gIG5vcm1hbCA9IG5vcm1hbC5jbG9uZSgpO1xuICBcbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVmVydGljZXModmVydGljZXMpIHtcbiAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmNsb25lKCkpO1xuXG4gIHJldHVybiB2ZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSB7XG4gIGNvbnN0IGVkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LCAvLy9cbiAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgZWRnZSA9IEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSB7XG4gIGNvbnN0IG5vcm1hbCA9IE5vcm1hbC5mcm9tVmVydGljZXModmVydGljZXMpO1xuXG4gIHJldHVybiBub3JtYWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFZlcnRleFBvc2l0aW9uID0gc2Vjb25kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBmaXJzdEV4dGVudCA9IHN1YnRyYWN0MyhzZWNvbmRWZXJ0ZXhQb3NpdGlvbiwgZmlyc3RWZXJ0ZXhQb3NpdGlvbiksXG4gICAgICAgIHNlY29uZEV4dGVudCA9IHN1YnRyYWN0Myh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgYXJlYSA9IGxlbmd0aDMoY3Jvc3MzKGZpcnN0RXh0ZW50LCBzZWNvbmRFeHRlbnQpKSAvIDI7XG5cbiAgcmV0dXJuIGFyZWE7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5yZ2JhLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgdGhpcy5yZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgdGhpcy5yZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBDb2xvdXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzOyAvLy9cblxuICAgIGNvb3JkaW5hdGVUdXBsZXMgPSBjb29yZGluYXRlVHVwbGVzLm1hcCgoY29vcmRpbmF0ZVR1cGxlKSA9PiB7XG4gICAgICBjb29yZGluYXRlVHVwbGUgPSBzY2FsZTMoY29vcmRpbmF0ZVR1cGxlLCBtYWduaWZpY2F0aW9uKTtcblxuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVUdXBsZTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICBzdXBlci5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGludmVydDIsIGludmVydDMgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuaW1wb3J0IHsgYWRkMiwgbXVsdGlwbHkyLCB0cmFuc2Zvcm0yLCB0cmFuc2Zvcm0zIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzLm1hcCgodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSkgPT4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZS5zbGljZSgpKTsgIC8vL1xuXG4gIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpIHtcbiAgY29uc3QgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGV4dGVudCxcbiAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IGFkZDIobXVsdGlwbHkyKHRleHR1cmVDb29yZGluYXRlVHVwbGUsIFsgd2lkdGgsIGhlaWdodCBdICksIFsgbGVmdCwgYm90dG9tIF0pKTsgLy8vXG5cbiAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgY29uc3QgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjsgLy8vXG5cbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcGFyZW50VmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhwYXJlbnRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICB2ZXJ0aWNlcyA9IHJvdGF0ZWRWZXJ0aWNlczsgIC8vL1xuXG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXggPSBzZWNvbmQodmVydGljZXMpLFxuICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXggPSBmaXJzdChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleCA9IHNlY29uZChwYXJlbnRWZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4ID0gdGhpcmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBmaXJzdCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBzZWNvbmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICB0aGlyZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSB0aGlyZCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgIGZpcnN0VmVydGV4UG9zaXRpb24gPSBmaXJzdFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFZlcnRleFBvc2l0aW9uID0gdGhpcmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IGZpcnN0UGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uID0gc2Vjb25kUGFyZW50VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb24gPSB0aGlyZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBSMXggPSBmaXJzdFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIxeSA9IGZpcnN0VmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUjJ4ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBSMnkgPSBzZWNvbmRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFIzeCA9IHRoaXJkVmVydGV4UG9zaXRpb25bMF0sICAvLy9cbiAgICAgICAgUjN5ID0gdGhpcmRWZXJ0ZXhQb3NpdGlvblsxXSwgIC8vL1xuICAgICAgICBQMXggPSBmaXJzdFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDJ4ID0gc2Vjb25kUGFyZW50VmVydGV4UG9zaXRpb25bMF0sIC8vL1xuICAgICAgICBQM3ggPSB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDF5ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAyeSA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzFdLCAvLy9cbiAgICAgICAgUDN5ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAxdSA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAxdiA9IGZpcnN0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAydSA9IHNlY29uZFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMnYgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgUDN1ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDN2ID0gdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzFdLCAvLy9cbiAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4ID0gaW52ZXJ0MyhbIDEsIDEsIDEsIFAxdSwgUDJ1LCBQM3UsIFAxdiwgUDJ2LCBQM3YgXSksXG4gICAgICAgIGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudCA9IHRyYW5zZm9ybTMoWyBQMXgsIFAyeCwgUDN4IF0sIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCksXG4gICAgICAgIHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF5LCBQMnksIFAzeSBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBPeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFswXSwgIC8vL1xuICAgICAgICBVeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeCA9IGZpcnN0VHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICBPeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXkgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzFdLCAgLy8vXG4gICAgICAgIFZ5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsyXSwgIC8vL1xuICAgICAgICB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4ID0gaW52ZXJ0MihbIFV4LCBVeSwgVngsIFZ5IF0pLFxuICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUgPSB0cmFuc2Zvcm0yKFsgUjF4IC0gT3gsIFIxeSAtIE95IF0sIHRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIyeCAtIE94LCBSMnkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgdGhpcmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIzeCAtIE94LCBSM3kgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gW1xuICAgICAgICAgIGZpcnN0QWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICBzZWNvbmRBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlLFxuICAgICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgXTtcblxuICByZXR1cm4gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgcGVybXV0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXh0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvcih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IFRleHR1cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC90ZXh0dXJlZFwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzOyAvLy9cblxuICAgIGNvb3JkaW5hdGVUdXBsZXMgPSBjb29yZGluYXRlVHVwbGVzLm1hcCgoY29vcmRpbmF0ZVR1cGxlKSA9PiB7XG4gICAgICBjb29yZGluYXRlVHVwbGUgPSBzY2FsZTMoY29vcmRpbmF0ZVR1cGxlLCBtYWduaWZpY2F0aW9uKTtcblxuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVUdXBsZTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICBzdXBlci5tYWduaWZ5KG1hZ25pZmljYXRpb24pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhZGQoZmFjZXRzLCBmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwgIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXNrIH0gZnJvbSBcIi4vZWxlbWVudC9tYXNrXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcnQgfSBmcm9tIFwiLi9lbGVtZW50L3BhcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2NlbmUgfSBmcm9tIFwiLi9lbGVtZW50L3NjZW5lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdhbWluZ0NhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2dhbWluZ1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi9lbGVtZW50L2NhbWVyYS9kZXNpZ25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcHJlbG9hZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlY3Rvck1hdGhzIH0gZnJvbSBcIi4vbWF0aHMvdmVjdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hdHJpeE1hdGhzIH0gZnJvbSBcIi4vbWF0aHMvbWF0cml4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4vaW5kZXhcIjsgLy8vL1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBSZWFjdFxufSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbG91cmVkU3F1YXJlIGZyb20gXCIuL2NvbG91cmVkU3F1YXJlXCI7XG5cbmNvbnN0IEZhY2UgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCArMC41IF19IC8+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGYWNlIGZyb20gXCIuL2ZhY2VcIjtcblxuY29uc3QgZGVmYXVsdENvbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jb25zdCBDdWJlID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoW1xuXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICs5MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIDE4MCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgLTkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjdWJlRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDdWJlIGNvbG91cj17WyAwLCAxLCAwIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhIHBlcnNpc3QgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdWJlRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwicGxhc3Rlci5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAyLCAwIF0sIFsgMiwgMiBdIF0sXG4gICAgICAgIFsgWyAyLCAyIF0sIFsgMCwgMiBdLCBbIDAsIDAgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFF1YWRyYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBNYXNrLCBEZXNpZ25DYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuaW1wb3J0IFRleHR1cmVkUXVhZHJhbmdsZSBmcm9tIFwiLi9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZVwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZXMgfSA9IHByZWxvYWRVdGlsaXRpZXM7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZXMoKGltYWdlcywgaW1hZ2VOYW1lcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cIm1hc2tcIj5cbiAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8UGFydCBpbWFnZXM9e2ltYWdlc30gaW1hZ2VOYW1lcz17aW1hZ2VOYW1lc30gaW1hZ2VUaWxpbmcgPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJmbG9vcmJvYXJkcy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aWxpbmdFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAwLCAxIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaW1wbGVFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9lbGVtZW50L2N1YmVcIjtcblxuY29uc3QgbWFza2luZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxNYXNrIHJlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiPlxuICAgICAgICA8Q3ViZSBzY2FsZT17WyAxLzQsIDEvNCwgMS80IF19IC8+XG4gICAgICA8L01hc2s+XG4gICAgICA8TWFzayByZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIj5cbiAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrUmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCIvPlxuICAgICAgPC9NYXNrPlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDdWJlIG1hc2tSZWZlcmVuY2U9XCJoYWxmLXNpemVkLWN1YmVcIiAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFza2luZ0V4YW1wbGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAgIDAsIDAsIDAgXSxcbiAgICAgICAgWyAgIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLjUsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAyIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJzdHJpcGVzLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDEsIDAgXSwgWyAwLjUsIDEgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFRyaWFuZ2xlIGV4dGVuZHMgVGV4dHVyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlTmFtZSA9IGRlZmF1bHRJbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyA9IGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdGV4dHVyZWRUcmlhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkVHJpYW5nbGU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVkVHJpYW5nbGUgZnJvbSBcIi4vdGV4dHVyZWRUcmlhbmdsZVwiO1xuXG5jb25zdCBTaWRlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPFRleHR1cmVkVHJpYW5nbGUgc2NhbGU9e1sgMSwgMS9NYXRoLnNxcnQoMiksIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgMCwgMC41IF19IHJvdGF0aW9ucz17WyAtNDUsIDAsIDAgXX0gLz5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2lkZSBmcm9tIFwiLi9zaWRlXCI7XG5cbmNvbnN0IFB5cmFtaWQgPSAocHJvcGVydGllcykgPT4gW1xuXG4gIDxTaWRlIC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgIDkwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMTgwLCAwIF19IC8+LFxuICA8U2lkZSByb3RhdGlvbnM9e1sgMCwgMjcwLCAwIF19IC8+LFxuXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBQeXJhbWlkO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBHYW1pbmdDYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgUHlyYW1pZCBmcm9tIFwiLi9lbGVtZW50L3B5cmFtaWRcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IHByZWxvYWRVdGlsaXRpZXM7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBweXJhbWlkRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi94Z2xcIjtcblxuaW1wb3J0IGN1YmVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvY3ViZVwiO1xuaW1wb3J0IHRpbGluZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS90aWxpbmdcIjtcbmltcG9ydCBzaW1wbGVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvc2ltcGxlXCI7XG5pbXBvcnQgbWFza2luZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9tYXNraW5nXCI7XG5pbXBvcnQgcHlyYW1pZEV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9weXJhbWlkXCI7XG5cbmNvbnN0IGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImN1YmVcIjpcbiAgICBjdWJlRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInRpbGluZ1wiOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJzaW1wbGVcIjpcbiAgICBzaW1wbGVFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwibWFza2luZ1wiOlxuICAgIG1hc2tpbmdFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwicHlyYW1pZFwiOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7QUFFTyxVQUFNLFFBQUs7Y0FBTCxRQUFBO0FBQ04sVUFBTSxTQUFNO2NBQU4sU0FBQTtBQUNOLFVBQU0sU0FBTTtjQUFOLFNBQUE7QUFDTixVQUFNLFdBQVE7Y0FBUixXQUFBO0FBQ04sVUFBTSxZQUFTO2NBQVQsWUFBQTtBQUNOLFVBQU0sZ0JBQWE7Y0FBYixnQkFBQTtBQUNOLFVBQU0sZ0JBQWE7Y0FBYixnQkFBQTtBQUNOLFVBQU0sa0JBQWtCO2NBQWxCLGtCQUFBO0FBQ04sVUFBTSxtQkFBbUI7Y0FBbkIsbUJBQUE7QUFDTixVQUFNLG9CQUFpQjtjQUFqQixvQkFBQTtBQUNOLFVBQU0sb0JBQW9CO2NBQXBCLG9CQUFBO0FBQ04sVUFBTSxnQ0FBZ0MsS0FBSyxLQUFLO2NBQTFDLGdDQUFBO0FBQ04sVUFBTSxpQ0FBOEI7Y0FBOUIsaUNBQUE7QUFDTixVQUFNLHFDQUFrQztjQUFsQyxxQ0FBQTtBQUNOLFVBQU0sd0NBQXFDO2NBQXJDLHdDQUFB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
