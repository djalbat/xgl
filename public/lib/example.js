(() => {
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

  // lib/element.js
  var require_element = __commonJS((exports) => {
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
    var Element1 = function() {
      function Element12() {
        _classCallCheck(this, Element12);
      }
      _createClass(Element12, [
        {
          key: "getChildElements",
          value: function getChildElements() {
            return this.childElements;
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
            var element = _construct(Class, _toConsumableArray(remainingArguments)), childElements = typeof element.childElements === "function" ? element.childElements(properties) : properties.childElements || [];
            element.setChildElements(childElements);
            return element;
          }
        }
      ]);
      return Element12;
    }();
    exports.default = Element1;
  });

  // lib/maths/matrix.js
  var require_matrix = __commonJS((exports) => {
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
  });

  // lib/maths/vector.js
  var require_vector = __commonJS((exports) => {
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
  });

  // node_modules/necessary/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BACKSPACE_CHARACTER = exports.ETX_CHARACTER = exports.DATA_EVENT = exports.CONTENT_TYPE = exports.DEFAULT_LOG_FILE_BASE_NAME = exports.TRACE = exports.POST = exports.CARRIAGE_RETURN_CHARACTER = exports.DEFAULT_ENCODING = exports.ERROR = exports.ACCEPT = exports.DEBUG = exports.DEFAULT_RC_BASE_EXTENSION = exports.DEFAULT_ATTEMPTS = exports.CTRL_C = exports.FATAL = exports.DEFAULT_INITIAL_ANSWER = exports.WARNING = exports.APPLICATION_JSON = exports.INFO = exports.GET = exports.LINE_FEED_CHARACTER = exports.DEFAULT_LOG_LEVEL = exports.DEFAULT_LOG_DIRECTORY_PATH = exports.UTF8_ENCODING = void 0;
    var TRACE = "TRACE";
    exports.TRACE = TRACE;
    var DEBUG = "DEBUG";
    exports.DEBUG = DEBUG;
    var INFO = "INFO";
    exports.INFO = INFO;
    var WARNING = "WARNING";
    exports.WARNING = WARNING;
    var ERROR = "ERROR";
    exports.ERROR = ERROR;
    var FATAL = "FATAL";
    exports.FATAL = FATAL;
    var DEFAULT_LOG_LEVEL = WARNING;
    exports.DEFAULT_LOG_LEVEL = DEFAULT_LOG_LEVEL;
    var DEFAULT_LOG_DIRECTORY_PATH = null;
    exports.DEFAULT_LOG_DIRECTORY_PATH = DEFAULT_LOG_DIRECTORY_PATH;
    var DEFAULT_LOG_FILE_BASE_NAME = "default";
    exports.DEFAULT_LOG_FILE_BASE_NAME = DEFAULT_LOG_FILE_BASE_NAME;
    var GET = "GET";
    exports.GET = GET;
    var POST = "POST";
    exports.POST = POST;
    var ACCEPT = "accept";
    exports.ACCEPT = ACCEPT;
    var CONTENT_TYPE = "content-type";
    exports.CONTENT_TYPE = CONTENT_TYPE;
    var APPLICATION_JSON = "application/json";
    exports.APPLICATION_JSON = APPLICATION_JSON;
    var CTRL_C = "^C";
    exports.CTRL_C = CTRL_C;
    var DATA_EVENT = "data";
    exports.DATA_EVENT = DATA_EVENT;
    var UTF8_ENCODING = "utf8";
    exports.UTF8_ENCODING = UTF8_ENCODING;
    var ETX_CHARACTER = "";
    exports.ETX_CHARACTER = ETX_CHARACTER;
    var DEFAULT_ATTEMPTS = 3;
    exports.DEFAULT_ATTEMPTS = DEFAULT_ATTEMPTS;
    var DEFAULT_ENCODING = UTF8_ENCODING;
    exports.DEFAULT_ENCODING = DEFAULT_ENCODING;
    var LINE_FEED_CHARACTER = "\n";
    exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
    var DEFAULT_INITIAL_ANSWER = "";
    exports.DEFAULT_INITIAL_ANSWER = DEFAULT_INITIAL_ANSWER;
    var CARRIAGE_RETURN_CHARACTER = "\r";
    exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
    var DEFAULT_RC_BASE_EXTENSION = "";
    exports.DEFAULT_RC_BASE_EXTENSION = DEFAULT_RC_BASE_EXTENSION;
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.get = get;
    exports.post = post;
    exports.request = request;
    exports.default = void 0;
    var _constants = require_constants();
    function get(host, uri, parameters, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _constants.GET, body = null;
      guaranteeAccept(headers);
      request(host, uri, parameters, method, body, headers, callback);
    }
    function post(host, uri, parameters, body, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _constants.POST;
      guaranteeAccept(headers);
      guaranteeContentType(headers);
      request(host, uri, parameters, method, body, headers, callback);
    }
    function request(host, uri, parameters, method, body, headers, callback) {
      var url = urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
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
    function guarantee(headers, name, value) {
      var propertyNames = Object.getOwnPropertyNames(headers), names = propertyNames.map(function(propertyName) {
        var lowerCasePropertyName = propertyName.toLowerCase(), name1 = lowerCasePropertyName;
        return name1;
      }), namesIncludesName = names.includes(name);
      if (!namesIncludesName) {
        headers[name] = value;
      }
    }
    function guaranteeAccept(headers) {
      var name = _constants.ACCEPT, value = _constants.APPLICATION_JSON;
      guarantee(headers, name, value);
    }
    function guaranteeContentType(headers) {
      var name = _constants.CONTENT_TYPE, value = _constants.APPLICATION_JSON;
      guarantee(headers, name, value);
    }
    function queryStringFromParameters(parameters) {
      var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString1, name, index) {
        var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? "&" : "";
        queryString1 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString1;
      }, "");
      return queryString;
    }
    function urlFromHostURIAndParameters(host, uri, parameters) {
      var queryString = queryStringFromParameters(parameters), url = queryString === "" ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
      return url;
    }
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
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
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
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
    var _array = require_array();
    function isPathName(path) {
      path = path.replace(/^\//, "").replace(/\/$/, "");
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
      var lastPathName, firstRelativePathName = _array.first(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = _array.first(relativePathNames);
      lastPathName = _array.last(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = _array.first(relativePathNames);
        lastPathName = _array.last(pathNames);
      }
      if (lastPathName !== void 0) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath) {
      path = path.replace(/\/$/, "");
      var concatenatedPath = "".concat(path, "/").concat(relativePath);
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      var bottommostName = null;
      var matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        var secondMatch = _array.second(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = _array.second(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = _array.second(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = _array.second(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = _array.second(matches);
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
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
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
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _ajax = _interopRequireDefault2(require_ajax());
    var _path = _interopRequireDefault2(require_path());
    var _array = _interopRequireDefault2(require_array());
    var _asynchronous = _interopRequireDefault2(require_asynchronous());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "ajaxUtilities", {
      enumerable: true,
      get: function() {
        return _ajax.default;
      }
    });
    Object.defineProperty(exports, "pathUtilities", {
      enumerable: true,
      get: function() {
        return _path.default;
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
  });

  // lib/utilities/array.js
  var require_array2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
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
  });

  // lib/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MINIMUM_DISTANCE = exports.VERTICES_LENGTH = exports.MOUSE_MOVE = exports.MOUSE_DOWN = exports.Z_NEAR = exports.FIELD_OF_VIEW = exports.DEFAULT_MARGIN_OF_ERROR = exports.DELTA_SCALAR = exports.Z_FAR = exports.INVERT_SCALAR = exports.DEGREES_TO_RADIANS_SCALAR = exports.ANGLES_SCALAR = exports.MOUSE_UP = exports.MOUSE_WHEEL = exports.SHIFT_KEY_CODE = exports.OFFSET_SCALAR = void 0;
    var Z_FAR = 1e3;
    exports.Z_FAR = Z_FAR;
    var Z_NEAR = 1;
    exports.Z_NEAR = Z_NEAR;
    var MOUSE_UP = "MOUSE_UP";
    exports.MOUSE_UP = MOUSE_UP;
    var MOUSE_DOWN = "MOUSE_DOWN";
    exports.MOUSE_DOWN = MOUSE_DOWN;
    var MOUSE_MOVE = "MOUSE_MOVE";
    exports.MOUSE_MOVE = MOUSE_MOVE;
    var MOUSE_WHEEL = "MOUSE_WHEEL";
    exports.MOUSE_WHEEL = MOUSE_WHEEL;
    var DELTA_SCALAR = 1.25;
    exports.DELTA_SCALAR = DELTA_SCALAR;
    var INVERT_SCALAR = -1;
    exports.INVERT_SCALAR = INVERT_SCALAR;
    var ANGLES_SCALAR = 0.01;
    exports.ANGLES_SCALAR = ANGLES_SCALAR;
    var OFFSET_SCALAR = 0.25;
    exports.OFFSET_SCALAR = OFFSET_SCALAR;
    var SHIFT_KEY_CODE = 16;
    exports.SHIFT_KEY_CODE = SHIFT_KEY_CODE;
    var VERTICES_LENGTH = 3;
    exports.VERTICES_LENGTH = VERTICES_LENGTH;
    var MINIMUM_DISTANCE = 1;
    exports.MINIMUM_DISTANCE = MINIMUM_DISTANCE;
    var DEFAULT_MARGIN_OF_ERROR = 1e-7;
    exports.DEFAULT_MARGIN_OF_ERROR = DEFAULT_MARGIN_OF_ERROR;
    var DEGREES_TO_RADIANS_SCALAR = Math.PI / 180;
    exports.DEGREES_TO_RADIANS_SCALAR = DEGREES_TO_RADIANS_SCALAR;
    var FIELD_OF_VIEW = 45 * DEGREES_TO_RADIANS_SCALAR;
    exports.FIELD_OF_VIEW = FIELD_OF_VIEW;
  });

  // lib/utilities/matrix.js
  var require_matrix2 = __commonJS((exports) => {
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
    exports.projectionMatrixFromWidthAndHeight = projectionMatrixFromWidthAndHeight;
    var _vector = require_vector();
    var _array = require_array2();
    var _constants = require_constants2();
    var _matrix = require_matrix();
    function scaleMatrixFromScale(scale) {
      var scaleMatrix = _matrix.identity4();
      scaleMatrix = _matrix.scale4(scaleMatrix, scale);
      return scaleMatrix;
    }
    function offsetsMatrixFromOffsets(offsets) {
      var offsetsMatrix = _matrix.identity4();
      offsetsMatrix = _matrix.translate4(offsetsMatrix, offsets);
      return offsetsMatrix;
    }
    function positionMatrixFromNothing() {
      var positionMatrix = _matrix.identity4();
      return positionMatrix;
    }
    function positionMatrixFromDistance(distance) {
      var positionMatrix = _matrix.identity4();
      var x = 0, y = 0, z = -distance;
      positionMatrix = _matrix.translate4(positionMatrix, [
        x,
        y,
        z
      ]);
      return positionMatrix;
    }
    function positionMatrixFromPosition(position) {
      var positionMatrix = _matrix.identity4();
      positionMatrix = _matrix.translate4(positionMatrix, position);
      return positionMatrix;
    }
    function rotationsMatrixFromAngles(angles, param) {
      var reverseOrder = param === void 0 ? false : param;
      var rotationsMatrix = _matrix.identity4();
      var firstAngle = _array.first(angles), secondAngle = _array.second(angles), thirdAngle = _array.third(angles), xAngle = firstAngle, yAngle = secondAngle, zAngle = thirdAngle, xAxis = [
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
        rotationsMatrix = _matrix.rotate4(rotationsMatrix, zAngle, zAxis);
        rotationsMatrix = _matrix.rotate4(rotationsMatrix, yAngle, yAxis);
        rotationsMatrix = _matrix.rotate4(rotationsMatrix, xAngle, xAxis);
      } else {
        rotationsMatrix = _matrix.rotate4(rotationsMatrix, xAngle, xAxis);
        rotationsMatrix = _matrix.rotate4(rotationsMatrix, yAngle, yAxis);
        rotationsMatrix = _matrix.rotate4(rotationsMatrix, zAngle, zAxis);
      }
      return rotationsMatrix;
    }
    function rotationsMatrixFromRotations(rotations) {
      var scalar = _constants.DEGREES_TO_RADIANS_SCALAR, angles = _vector.scale3(rotations, scalar), rotationsMatrix = rotationsMatrixFromAngles(angles);
      return rotationsMatrix;
    }
    function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
      var normalsMatrix = _matrix.invert4(rotationsMatrix);
      normalsMatrix = _matrix.transpose4(normalsMatrix);
      return normalsMatrix;
    }
    function projectionMatrixFromWidthAndHeight(width, height) {
      var fieldOfView = _constants.FIELD_OF_VIEW, aspectRatio = width / height, zNear = _constants.Z_NEAR, zFar = _constants.Z_FAR, projectionMatrix = _matrix.perspective4(fieldOfView, aspectRatio, zNear, zFar);
      return projectionMatrix;
    }
  });

  // lib/utilities/transform.js
  var require_transform = __commonJS((exports) => {
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
        var scaleMatrix = _matrix1.scaleMatrixFromScale(scale);
        matrix = matrix === null ? scaleMatrix : _matrix.multiply4(scaleMatrix, matrix);
      }
      if (rotations !== null) {
        var rotationsMatrix = _matrix1.rotationsMatrixFromRotations(rotations);
        matrix = matrix === null ? rotationsMatrix : _matrix.multiply4(rotationsMatrix, matrix);
      }
      if (position !== null) {
        var positionMatrix = _matrix1.positionMatrixFromPosition(position);
        matrix = matrix === null ? positionMatrix : _matrix.multiply4(positionMatrix, matrix);
      }
      var transform = matrix === null ? function(vector) {
        return vector;
      } : function(vector) {
        return _vector.transform4(_toConsumableArray(vector).concat([
          1
        ]), matrix).slice(0, 3);
      };
      return transform;
    }
  });

  // lib/element/canvas.js
  var require_canvas = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
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
    var CanvasElement = function(Element1) {
      _inherits(CanvasElement2, _element.default);
      function CanvasElement2(transform, facets, mask, hidden) {
        _classCallCheck(this, CanvasElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasElement2).call(this));
        _this.transform = transform;
        _this.facets = facets;
        _this.mask = mask;
        _this.hidden = hidden;
        return _this;
      }
      _createClass(CanvasElement2, [
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
          key: "getMask",
          value: function getMask() {
            return this.mask;
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
          value: function applyMask(mask) {
            if (mask) {
              var element = this;
              mask.maskElement(element);
            }
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
          value: function createFacets(hidden) {
            var childElements = this.getChildElements();
            hidden = hidden || this.hidden;
            childElements.forEach(function(childElement) {
              return childElement.createFacets(hidden);
            });
            return hidden;
          }
        },
        {
          key: "amendFacets",
          value: function amendFacets() {
            var childElements = this.getChildElements();
            childElements.forEach(function(childElement) {
              return childElement.amendFacets();
            });
            this.applyTransform(this.transform);
            this.applyMask(this.mask);
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
        }
      ], [
        {
          key: "fromProperties",
          value: function fromProperties(Class, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              remainingArguments[_key - 2] = arguments[_key];
            }
            var _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations, _position = properties.position, position = _position === void 0 ? null : _position, _mask = properties.mask, mask = _mask === void 0 ? null : _mask, _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, transform = _transform.composeTransform(scale, rotations, position), facets = [], canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
              Class,
              properties,
              transform,
              facets,
              mask,
              hidden
            ].concat(_toConsumableArray(remainingArguments)));
            return canvasElement;
          }
        }
      ]);
      return CanvasElement2;
    }(_wrapNativeSuper(_element.default));
    exports.default = CanvasElement;
  });

  // lib/element/canvas/function.js
  var require_function = __commonJS((exports) => {
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
    var FunctionCanvasElement = function(CanvasElement) {
      _inherits(FunctionCanvasElement2, _canvas.default);
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
  });

  // lib/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
    var _function = _interopRequireDefault2(require_function());
    var _array = require_array2();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childElements[_key - 2] = arguments[_key];
      }
      properties = properties || {};
      childElements = _array.flatten(childElements);
      var element = void 0;
      if (isSubclassOf(firstArgument, _element.default)) {
        var Class = firstArgument;
        Object.assign(properties, {
          childElements
        });
        element = Class.fromProperties(properties);
      } else if (typeof firstArgument === "function") {
        var func = firstArgument, childElements1 = _array.guarantee(func(properties));
        Object.assign(properties, {
          childElements: childElements1
        });
        element = _function.default.fromProperties(properties);
      }
      return element;
    }
    var _default = {
      createElement
    };
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
  });

  // lib/xgl.js
  var require_xgl = __commonJS(() => {
    "use strict";
    var _react = _interopRequireDefault2(require_react());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.assign(window, {
      React: _react.default
    });
  });

  // lib/mixin/matrix.js
  var require_matrix3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.applyMatrix = applyMatrix;
    function applyMatrix(uniformLocation, matrix) {
      var transpose = false;
      this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
    }
  });

  // lib/mixin/blending.js
  var require_blending = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.enableBlending = enableBlending;
    function enableBlending() {
      var _context = this.context, BLEND = _context.BLEND, SRC_ALPHA = _context.SRC_ALPHA, ONE = _context.ONE, capacity = BLEND, sourceFactor = SRC_ALPHA, destinationFactor = ONE;
      this.context.enable(capacity);
      this.context.blendFunc(sourceFactor, destinationFactor);
    }
  });

  // lib/mixin/program.js
  var require_program = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createProgram = createProgram;
    exports.useProgram = useProgram;
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
  });

  // lib/mixin/colour.js
  var require_colour = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.clearColour = clearColour;
    exports.clearColourBuffer = clearColourBuffer;
    var defaultR = 0;
    var defaultG = 0;
    var defaultB = 0;
    var defaultA = 1;
    function clearColour(param, param1, param2, param3) {
      var r = param === void 0 ? defaultR : param, g = param1 === void 0 ? defaultG : param1, b = param2 === void 0 ? defaultB : param2, a = param3 === void 0 ? defaultA : param3;
      this.context.clearColor(r, g, b, a);
    }
    function clearColourBuffer() {
      var _context = this.context, COLOR_BUFFER_BIT = _context.COLOR_BUFFER_BIT, mask = COLOR_BUFFER_BIT;
      this.context.clear(mask);
    }
  });

  // lib/mixin/texture.js
  var require_texture = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createTexture = createTexture;
    exports.enableAnisotropicFiltering = enableAnisotropicFiltering;
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
      var extension = this.context.getExtension("EXT_texture_filter_anisotropic") || this.context.getExtension("MOZ_EXT_texture_filter_anisotropic") || this.context.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
      if (extension) {
        var _context = this.context, TEXTURE_2D = _context.TEXTURE_2D, MAX_TEXTURE_MAX_ANISOTROPY_EXT = extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY_EXT = extension.TEXTURE_MAX_ANISOTROPY_EXT, maximum = this.context.getParameter(MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        this.context.texParameterf(TEXTURE_2D, TEXTURE_MAX_ANISOTROPY_EXT, maximum);
      }
    }
  });

  // lib/mixin/depth.js
  var require_depth = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.clearDepth = clearDepth;
    exports.clearDepthBuffer = clearDepthBuffer;
    exports.enableDepthTesting = enableDepthTesting;
    var defaultDepth = 1;
    function clearDepth(param) {
      var depth = param === void 0 ? defaultDepth : param;
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
  });

  // lib/mixin/shader.js
  var require_shader = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createShader = createShader;
    exports.createVertexShader = createVertexShader;
    exports.createFragmentShader = createFragmentShader;
    function createShader(type, shaderSource) {
      var _context = this.context, COMPILE_STATUS = _context.COMPILE_STATUS, pname = COMPILE_STATUS, shader = this.context.createShader(type);
      this.context.shaderSource(shader, shaderSource);
      this.context.compileShader(shader);
      var compileStatus = this.context.getShaderParameter(shader, pname);
      if (!compileStatus) {
        throw new Error("Unable to create the shader.");
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
  });

  // lib/mixin/buffer.js
  var require_buffer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createElementBuffer = createElementBuffer;
    exports.bindElementBuffer = bindElementBuffer;
    exports.createBuffer = createBuffer;
    exports.bindBuffer = bindBuffer;
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
  });

  // lib/mixin/location.js
  var require_location = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getUniformLocation = getUniformLocation;
    exports.getAttributeLocation = getAttributeLocation;
    exports.setUniformLocationIntegerValue = setUniformLocationIntegerValue;
    function getUniformLocation(program, name) {
      return this.context.getUniformLocation(program, name);
    }
    function getAttributeLocation(program, name) {
      return this.context.getAttribLocation(program, name);
    }
    function setUniformLocationIntegerValue(uniformLocation, integerValue) {
      this.context.uniform1i(uniformLocation, integerValue);
    }
  });

  // lib/canvas.js
  var require_canvas2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _matrix = require_matrix3();
    var _blending = require_blending();
    var _program = require_program();
    var _colour = require_colour();
    var _texture = require_texture();
    var _depth = require_depth();
    var _shader = require_shader();
    var _buffer = require_buffer();
    var _location = require_location();
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
    function _defineProperty(obj, key, value) {
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
    var Canvas = function() {
      function Canvas2(param) {
        var selector = param === void 0 ? "canvas" : param;
        _classCallCheck(this, Canvas2);
        _defineProperty(this, "applyMatrix", _matrix.applyMatrix);
        _defineProperty(this, "enableBlending", _blending.enableBlending);
        _defineProperty(this, "useProgram", _program.useProgram);
        _defineProperty(this, "createProgram", _program.createProgram);
        _defineProperty(this, "clearColour", _colour.clearColour);
        _defineProperty(this, "clearColourBuffer", _colour.clearColourBuffer);
        _defineProperty(this, "createTexture", _texture.createTexture);
        _defineProperty(this, "enableAnisotropicFiltering", _texture.enableAnisotropicFiltering);
        _defineProperty(this, "clearDepth", _depth.clearDepth);
        _defineProperty(this, "clearDepthBuffer", _depth.clearDepthBuffer);
        _defineProperty(this, "enableDepthTesting", _depth.enableDepthTesting);
        _defineProperty(this, "createShader", _shader.createShader);
        _defineProperty(this, "createVertexShader", _shader.createVertexShader);
        _defineProperty(this, "createFragmentShader", _shader.createFragmentShader);
        _defineProperty(this, "bindBuffer", _buffer.bindBuffer);
        _defineProperty(this, "createBuffer", _buffer.createBuffer);
        _defineProperty(this, "bindElementBuffer", _buffer.bindElementBuffer);
        _defineProperty(this, "createElementBuffer", _buffer.createElementBuffer);
        _defineProperty(this, "getUniformLocation", _location.getUniformLocation);
        _defineProperty(this, "getAttributeLocation", _location.getAttributeLocation);
        _defineProperty(this, "setUniformLocationIntegerValue", _location.setUniformLocationIntegerValue);
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
            this.domElement.setAttribute("width", width);
          }
        },
        {
          key: "setHeight",
          value: function setHeight(height) {
            this.domElement.setAttribute("height", height);
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
    function domElementFromSelector(selector) {
      var domElement = typeof selector === "string" ? document.querySelectorAll(selector)[0] : selector;
      return domElement;
    }
    function contextFromDOMElement(domElement) {
      var context = domElement.getContext("webgl");
      if (!context) {
        throw new Error("Unable to get the WebGL context.");
      }
      return context;
    }
  });

  // lib/primitive/edge.js
  var require_edge = __commonJS((exports) => {
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
    var Edge = function() {
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
            var startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = _vector.subtract3(endPosition, startPosition), edge = new Class(position, extent);
            return edge;
          }
        }
      ]);
      return Edge2;
    }();
    exports.default = Edge;
  });

  // lib/utilities/midPoint.js
  var require_midPoint = __commonJS((exports) => {
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
        var vertexPosition = vertex.getPosition(), scaledVertexPosition = _vector.scale3(vertexPosition, 1 / 3);
        midPointPosition1 = _vector.add3(midPointPosition1, scaledVertexPosition);
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
  });

  // lib/primitive/edge/masking.js
  var require_masking = __commonJS((exports) => {
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
    var MaskingEdge = function(Edge) {
      _inherits(MaskingEdge2, _edge.default);
      function MaskingEdge2() {
        _classCallCheck(this, MaskingEdge2);
        return _possibleConstructorReturn(this, _getPrototypeOf(MaskingEdge2).apply(this, arguments));
      }
      _createClass(MaskingEdge2, [
        {
          key: "isMidPointPositionToTheLeft",
          value: function isMidPointPositionToTheLeft(midPointPosition) {
            midPointPosition = _midPoint.projectMidPointPositionOntoXYPlane(midPointPosition);
            var extent = this.getExtent(), position = this.getPosition(), midPointRelativePosition = _vector.subtract3(midPointPosition, position), crossProductComponents = _vector.cross3(extent, midPointRelativePosition), thirdCrossProductComponent = _array.third(crossProductComponents), midPointPositionToTheLeft = thirdCrossProductComponent > 0;
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
  });

  // lib/utilities/approximate.js
  var require_approximate = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isApproximatelyEqualToOne = isApproximatelyEqualToOne;
    exports.isApproximatelyEqualToZero = isApproximatelyEqualToZero;
    var _constants = require_constants2();
    function isApproximatelyEqualToOne(value, param) {
      var marginOfError = param === void 0 ? _constants.DEFAULT_MARGIN_OF_ERROR : param;
      return isApproximatelyEqualTo(value, 1, marginOfError);
    }
    function isApproximatelyEqualToZero(value, param) {
      var marginOfError = param === void 0 ? _constants.DEFAULT_MARGIN_OF_ERROR : param;
      return isApproximatelyEqualTo(value, 0, marginOfError);
    }
    function isApproximatelyEqualTo(valueA, valueB, param) {
      var marginOfError = param === void 0 ? _constants.DEFAULT_MARGIN_OF_ERROR : param;
      var difference = valueA - valueB, absoluteDifference = Math.abs(difference), approximatelyEqual = absoluteDifference < marginOfError;
      return approximatelyEqual;
    }
  });

  // lib/utilities/angle.js
  var require_angle = __commonJS((exports) => {
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
  });

  // lib/utilities/quaternion.js
  var require_quaternion = __commonJS((exports) => {
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
      var rotationQuaternionComponents = rotationQuaternion, firstRotationQuaternionComponent = _array.first(rotationQuaternionComponents), secondRotationQuaternionComponent = _array.second(rotationQuaternionComponents), thirdRotationQuaternionComponent = _array.third(rotationQuaternionComponents), fourthRotationQuaternionComponent = _array.fourth(rotationQuaternionComponents), inverseRotationQuaternion = [
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
      ], dotProductOfUnitNormalAndZAxis = _vector.dot3(unitNormal, zAxis), crossProductOfUnitNormalAndZAxis = _vector.cross3(unitNormal, zAxis), angleOfRotationCosine = dotProductOfUnitNormalAndZAxis, angleOfRotationCosineAbsoluteValue = Math.abs(angleOfRotationCosine), angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne = _approximate.isApproximatelyEqualToOne(angleOfRotationCosineAbsoluteValue), axisOfRotation = angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne ? [
        1,
        0,
        0
      ] : crossProductOfUnitNormalAndZAxis, unitAxisOfRotation = _vector.normalise3(axisOfRotation), halfAngleOfRotationCosine = _angle.calculateHalfAngleCosine(angleOfRotationCosine), halfAngleOfRotationSine = _angle.calculateHalfAngleSine(angleOfRotationCosine), unitAxisOfRotationComponents = unitAxisOfRotation, firstAxisOfRotationComponent = _array.first(unitAxisOfRotationComponents), secondAxisOfRotationComponent = _array.second(unitAxisOfRotationComponents), thirdAxisOfRotationComponent = _array.third(unitAxisOfRotationComponents), arbitraryRotationQuaternion = [
        halfAngleOfRotationCosine,
        firstAxisOfRotationComponent * halfAngleOfRotationSine,
        secondAxisOfRotationComponent * halfAngleOfRotationSine,
        thirdAxisOfRotationComponent * halfAngleOfRotationSine
      ];
      return arbitraryRotationQuaternion;
    }
    function calculateRotationAboutZAxisQuaternion(maskingEdge) {
      var maskingEdgeExtent = maskingEdge.getExtent(), unitMaskingEdgeExtent = _vector.normalise3(maskingEdgeExtent), unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent, firstUnitMaskingEdgeExtentComponent = _array.first(unitMaskingEdgeExtentComponents), secondUnitMaskingEdgeExtentComponent = _array.second(unitMaskingEdgeExtentComponents), angleOfRotationSine = firstUnitMaskingEdgeExtentComponent, angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent, halfAngleOfRotationCosine = _angle.calculateHalfAngleCosine(angleOfRotationCosine), halfAngleOfRotationSine = angleOfRotationSine > 0 ? +_angle.calculateHalfAngleSine(angleOfRotationCosine) : -_angle.calculateHalfAngleSine(angleOfRotationCosine), rotationAboutZAxisQuaternion = [
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
  });

  // lib/utilities/rotation.js
  var require_rotation = __commonJS((exports) => {
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
      var imaginaryQuaternion = imaginaryQuaternionFromPosition(position), inverseRotationQuaternion = _quaternion.calculateInverseRotationQuaternion(rotationQuaternion), rotatedImaginaryQuaternion = _quaternion.rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
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
  });

  // lib/utilities/intersection.js
  var require_intersection = __commonJS((exports) => {
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
      var extent = _vector.subtract3(endVertexPosition, startVertexPosition), offset = _vector.scale3(extent, intersection), intermediateVertexPosition = _vector.add3(startVertexPosition, offset);
      return intermediateVertexPosition;
    }
    function isEdgeNonParallel(edge) {
      var edgeExtent = edge.getExtent(), edgeExtentComponents = edgeExtent, firstEdgeExtentComponent = _array.first(edgeExtentComponents), secondEdgeExtentComponent = _array.second(edgeExtentComponents), edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent, edgeAngleTangentApproximatelyEqualToZero = _approximate.isApproximatelyEqualToZero(edgeAngleTangent), edgeParallel = edgeAngleTangentApproximatelyEqualToZero, edgeNonParallel = !edgeParallel;
      return edgeNonParallel;
    }
    function calculateEdgeIntersection(edge, firstPositionComponent) {
      var edgeExtent = edge.getExtent(), edgePosition = edge.getPosition(), edgeExtentComponents = edgeExtent, edgePositionComponents = edgePosition, firstEdgeExtentComponent = _array.first(edgeExtentComponents), firstEdgePositionComponent = _array.first(edgePositionComponents), edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
      return edgeIntersection;
    }
  });

  // lib/primitive/verticalLine.js
  var require_verticalLine = __commonJS((exports) => {
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
    var VerticalLine = function() {
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
          value: function splitFacet(facet, smallerFacets) {
            var edges = facet.getEdges(), intersections = edges.map(function(edge) {
              var intersection = _intersection.calculateIntersection(edge, this.firstPositionComponent);
              return intersection;
            }.bind(this));
            facet.splitWithIntersections(intersections, smallerFacets);
          }
        },
        {
          key: "splitFacets",
          value: function splitFacets(facets) {
            var smallerFacets = [];
            facets.forEach(function(facet) {
              facet.rotate(this.forwardsRotationQuaternion);
              this.splitFacet(facet, smallerFacets);
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
            var maskingEdgePosition = maskingEdge.getPosition(), rotationAboutZAxisQuaternion = _quaternion.calculateRotationAboutZAxisQuaternion(maskingEdge), rotationQuaternion = rotationAboutZAxisQuaternion, forwardsRotationQuaternion = _quaternion.calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = _quaternion.calculateBackwardsRotationQuaternion(rotationQuaternion), position = _rotation.rotatePosition(maskingEdgePosition, rotationQuaternion), positionComponents = position, firstPositionComponent = _array.first(positionComponents), verticalLine = new VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
            return verticalLine;
          }
        }
      ]);
      return VerticalLine2;
    }();
    exports.default = VerticalLine;
  });

  // lib/utilities/vertices.js
  var require_vertices = __commonJS((exports) => {
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
  });

  // lib/primitive/maskingFacet.js
  var require_maskingFacet = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _masking2 = _interopRequireDefault2(require_masking());
    var _verticalLine = _interopRequireDefault2(require_verticalLine());
    var _vertices = require_vertices();
    var _array = require_array2();
    var _constants = require_constants2();
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
    var MaskingFacet = function() {
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
          value: function maskFacet(facet, unmaskedFacets) {
            var unmaskedFacet = facet.clone();
            facet.rotate(this.forwardsRotationQuaternion);
            var maskingFacet = this, smallerFacets = this.splitFacet(facet), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
            _array.separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
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
              _array.push(unmaskedFacets, unmaskedSmallerFacets);
            }
          }
        },
        {
          key: "splitFacet",
          value: function splitFacet(facet) {
            var facets = [
              facet
            ], smallerFacets = facets;
            this.verticalLines.forEach(function(verticalLine) {
              smallerFacets = verticalLine.splitFacets(facets);
              facets = smallerFacets;
            });
            return smallerFacets;
          }
        }
      ], [
        {
          key: "fromFacet",
          value: function fromFacet(facet) {
            var facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = _quaternion.calculateArbitraryRotationQuaternion(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = _vertices.rotateVertices(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map(function(maskingEdge) {
              var verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
              return verticalLine;
            }), forwardsRotationQuaternion = _quaternion.calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = _quaternion.calculateBackwardsRotationQuaternion(rotationQuaternion), maskingFacet = new MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
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
  });

  // lib/element/mask.js
  var require_mask = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
    var _maskingFacet = _interopRequireDefault2(require_maskingFacet());
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
    var Mask = function(Element1) {
      _inherits(Mask2, _element.default);
      function Mask2(hidden) {
        _classCallCheck(this, Mask2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Mask2).call(this));
        _this.hidden = hidden;
        return _this;
      }
      _createClass(Mask2, [
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
          value: function maskElement1(element) {
            var maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
            maskElement(element, maskingFacets);
            childElements.forEach(function(childElement) {
              return maskElement(childElement, maskingFacets);
            });
          }
        },
        {
          key: "initialise",
          value: function initialise() {
            var childElements = this.getChildElements();
            childElements.forEach(function(childElement) {
              return childElement.createFacets(this.hidden);
            }.bind(this));
            childElements.forEach(function(childElement) {
              return childElement.amendFacets();
            });
          }
        }
      ], [
        {
          key: "fromProperties",
          value: function fromProperties(properties) {
            var _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, mask = _element.default.fromProperties(Mask2, properties, hidden);
            mask.initialise();
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
        _array.push(facets, elementFacets);
        retrieveFacets(childElements1, facets);
      });
      return facets;
    }
    function maskElement(element, maskingFacets) {
      var facets = element.getFacets();
      maskingFacets.forEach(function(maskingFacet) {
        var unmaskedFacets = [];
        facets.forEach(function(facet) {
          return maskingFacet.maskFacet(facet, unmaskedFacets);
        });
        facets = unmaskedFacets;
      });
      element.setFacets(facets);
      var childElements = element.getChildElements();
      childElements.forEach(function(childElement) {
        var element1 = childElement;
        maskElement(element1, maskingFacets);
      });
    }
  });

  // lib/renderer.js
  var require_renderer = __commonJS((exports) => {
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
    var Renderer = function() {
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
  });

  // lib/renderer/data.js
  var require_data = __commonJS((exports) => {
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
    var RendererData = function() {
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
            var vertexPositionsData = _array.flatten(vertexPositions);
            add(this.vertexPositionsData, vertexPositionsData);
          }
        },
        {
          key: "addVertexNormals",
          value: function addVertexNormals(vertexNormals) {
            var vertexNormalsData = _array.flatten(vertexNormals);
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
  });

  // lib/renderer/data/colour.js
  var require_colour2 = __commonJS((exports) => {
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
    var ColourRendererData = function(RendererData) {
      _inherits(ColourRendererData2, _data.default);
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
            var vertexColoursData = _array.flatten(vertexColours);
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
  });

  // lib/renderer/source/lighting.js
  var require_lighting = __commonJS((exports) => {
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
  });

  // lib/renderer/source/position.js
  var require_position = __commonJS((exports) => {
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
  });

  // lib/renderer/source/colour/vertexShader.js
  var require_vertexShader = __commonJS((exports) => {
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
  });

  // lib/renderer/source/colour/fragmentShader.js
  var require_fragmentShader = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var fragmentShaderSource = new String("\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ");
    var _default = fragmentShaderSource;
    exports.default = _default;
  });

  // lib/renderer/buffers.js
  var require_buffers = __commonJS((exports) => {
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
    var RendererBuffers = function() {
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
  });

  // lib/renderer/buffers/colour.js
  var require_colour3 = __commonJS((exports) => {
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
    var ColourRendererBuffers = function(RendererBuffers) {
      _inherits(ColourRendererBuffers2, _buffers.default);
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
  });

  // lib/renderer/locations/uniform.js
  var require_uniform = __commonJS((exports) => {
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
    var UniformLocations = function() {
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
  });

  // lib/renderer/locations/colour/uniform.js
  var require_uniform2 = __commonJS((exports) => {
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
    var ColourUniformLocations = function(UniformLocations) {
      _inherits(ColourUniformLocations2, _uniform.default);
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
  });

  // lib/renderer/locations/attribute.js
  var require_attribute = __commonJS((exports) => {
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
    var AttributeLocations = function() {
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
  });

  // lib/renderer/locations/colour/attribute.js
  var require_attribute2 = __commonJS((exports) => {
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
    var ColourAttributeLocations = function(AttributeLocations) {
      _inherits(ColourAttributeLocations2, _attribute.default);
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
  });

  // lib/renderer/colour.js
  var require_colour4 = __commonJS((exports) => {
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
    var ColourRenderer = function(Renderer) {
      _inherits(ColourRenderer2, _renderer.default);
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
            var facets = [], program = _renderer.createProgram(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
            return colourRenderer;
          }
        }
      ]);
      return ColourRenderer2;
    }(_renderer.default);
    exports.default = ColourRenderer;
  });

  // lib/renderer/source/texture/vertexShader.js
  var require_vertexShader2 = __commonJS((exports) => {
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
  });

  // lib/renderer/data/texture.js
  var require_texture2 = __commonJS((exports) => {
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
    var TextureRendererData = function(RendererData) {
      _inherits(TextureRendererData2, _data.default);
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
            var vertexTextureCoordinatesData = _array.flatten(vertexTextureCoordinateTuples);
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
  });

  // lib/renderer/source/texture/fragmentShader.js
  var require_fragmentShader2 = __commonJS((exports) => {
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
  });

  // lib/renderer/buffers/texture.js
  var require_texture3 = __commonJS((exports) => {
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
    var TextureRendererBuffers = function(RendererBuffers) {
      _inherits(TextureRendererBuffers2, _buffers.default);
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
  });

  // lib/renderer/locations/texture/uniform.js
  var require_uniform3 = __commonJS((exports) => {
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
    var TextureUniformLocations = function(UniformLocations) {
      _inherits(TextureUniformLocations2, _uniform.default);
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
  });

  // lib/renderer/locations/texture/attribute.js
  var require_attribute3 = __commonJS((exports) => {
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
    var TextureAttributeLocations = function(AttributeLocations) {
      _inherits(TextureAttributeLocations2, _attribute.default);
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
  });

  // lib/renderer/texture.js
  var require_texture4 = __commonJS((exports) => {
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
    var TextureRenderer = function(Renderer) {
      _inherits(TextureRenderer2, _renderer.default);
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
            var facets = [], program = _renderer.createProgram(_vertexShader.default, _fragmentShader.default, canvas), textureRendererData = _texture.default.fromNothing(), textureRendererBuffers = _texture1.default.fromNothing(), textureUniformLocations = _uniform.default.fromProgram(program, canvas), textureAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = textureRendererData, rendererBuffers = textureRendererBuffers, uniformLocations = textureUniformLocations, attributeLocations = textureAttributeLocations, textureRenderer = _construct(Class, [
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
  });

  // lib/renderer/texture/images.js
  var require_images = __commonJS((exports) => {
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
    var ImagesTextureRenderer = function(TextureRenderer) {
      _inherits(ImagesTextureRenderer2, _texture.default);
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
              var firstTexturedFacet = _array.first(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), facets1 = this.facetsMap[imageName];
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
  });

  // lib/renderer/texture/imageMap.js
  var require_imageMap = __commonJS((exports) => {
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
    var ImageMapTextureRenderer = function(TextureRenderer) {
      _inherits(ImageMapTextureRenderer2, _texture.default);
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
  });

  // lib/element/part.js
  var require_part = __commonJS((exports) => {
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
    var Part = function(Element1) {
      _inherits(Part2, _element.default);
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
          key: "initialise",
          value: function initialise(canvas) {
            var textureRenderer = null;
            var colourRenderer = _colour.default.fromNothing(canvas);
            if (this.images) {
              var imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
              textureRenderer = imagesTextureRenderer;
            }
            if (this.imageMap) {
              var imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
              textureRenderer = imageMapTextureRenderer;
            }
            var childElements = this.getChildElements();
            childElements.forEach(function(childElement) {
              return childElement.createFacets(this.hidden);
            }.bind(this));
            childElements.forEach(function(childElement) {
              return childElement.amendFacets();
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
  });

  // lib/element/camera.js
  var require_camera = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
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
    var Camera = function(Element1) {
      _inherits(Camera2, _element.default);
      function Camera2(pan, tilt) {
        _classCallCheck(this, Camera2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Camera2).call(this));
        _this.pan = pan;
        _this.tilt = tilt;
        return _this;
      }
      _createClass(Camera2, [
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
        }
      ], [
        {
          key: "fromProperties",
          value: function fromProperties(Class, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              remainingArguments[_key - 2] = arguments[_key];
            }
            return (_Element = _element.default).fromProperties.apply(_Element, [
              Class,
              properties
            ].concat(_toConsumableArray(remainingArguments)));
          }
        }
      ]);
      return Camera2;
    }(_wrapNativeSuper(_element.default));
    exports.default = Camera;
  });

  // lib/miscellaneous/keyEvents.js
  var require_keyEvents = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants2();
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
    var KeyEvents = function() {
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
            if (keyCode === _constants.SHIFT_KEY_CODE) {
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
            if (keyCode === _constants.SHIFT_KEY_CODE) {
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
            documentDOMElement.addEventListener("keyup", keyUpEventListener);
            documentDOMElement.addEventListener("keydown", keyDownEventListener);
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
  });

  // lib/miscellaneous/mouseEvents.js
  var require_mouseEvents = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants2();
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
    var MouseEvents = function() {
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
            this.mouseEventListener(event, _constants.MOUSE_UP);
          }
        },
        {
          key: "mouseDownEventListener",
          value: function mouseDownEventListener(event) {
            this.mouseDown = true;
            this.mouseEventListener(event, _constants.MOUSE_DOWN);
          }
        },
        {
          key: "mouseMoveEventListener",
          value: function mouseMoveEventListener(event) {
            this.mouseEventListener(event, _constants.MOUSE_MOVE);
          }
        },
        {
          key: "mouseWheelEventListener",
          value: function mouseWheelEventListener(event) {
            var handlers = this.handlersMap[_constants.MOUSE_WHEEL], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
            handlers.forEach(function(handler) {
              return handler(mouseWheelDelta);
            });
            event.preventDefault();
          }
        },
        {
          key: "addMouseUpHandler",
          value: function addMouseUpHandler(mouseUpHandler) {
            var mouseUpHandlers = this.handlersMap[_constants.MOUSE_UP];
            mouseUpHandlers.push(mouseUpHandler);
          }
        },
        {
          key: "addMouseDownHandler",
          value: function addMouseDownHandler(mouseDownHandler) {
            var mouseDownHandlers = this.handlersMap[_constants.MOUSE_DOWN];
            mouseDownHandlers.push(mouseDownHandler);
          }
        },
        {
          key: "addMouseMoveHandler",
          value: function addMouseMoveHandler(mouseMoveHandler) {
            var mouseMoveHandlers = this.handlersMap[_constants.MOUSE_MOVE];
            mouseMoveHandlers.push(mouseMoveHandler);
          }
        },
        {
          key: "addMouseWheelHandler",
          value: function addMouseWheelHandler(mouseWheelHandler) {
            var mouseWheelHandlers = this.handlersMap[_constants.MOUSE_WHEEL];
            mouseWheelHandlers.push(mouseWheelHandler);
          }
        },
        {
          key: "initialise",
          value: function initialise(canvas) {
            var canvasDOMElement = canvas.getDOMElement(), mouseUpEventListener = this.mouseUpEventListener.bind(this), mouseDownEventListener = this.mouseDownEventListener.bind(this), mouseMoveEventListener = this.mouseMoveEventListener.bind(this), mouseWheelEventListener = this.mouseWheelEventListener.bind(this);
            this.handlersMap[_constants.MOUSE_UP] = [];
            this.handlersMap[_constants.MOUSE_DOWN] = [];
            this.handlersMap[_constants.MOUSE_MOVE] = [];
            this.handlersMap[_constants.MOUSE_WHEEL] = [];
            canvasDOMElement.addEventListener("mouseup", mouseUpEventListener);
            canvasDOMElement.addEventListener("mousedown", mouseDownEventListener);
            canvasDOMElement.addEventListener("mousemove", mouseMoveEventListener);
            canvasDOMElement.addEventListener("mousewheel", mouseWheelEventListener);
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
      var mouseWheelDelta = Math.max(-1, Math.min(1, event.wheelDelta));
      return mouseWheelDelta;
    }
    function mouseCoordinatesFromEvent(event) {
      var target = event.target, clientX = event.clientX, clientY = event.clientY, canvasDOMElement = target, boundingClientRect = canvasDOMElement.getBoundingClientRect(), top = boundingClientRect.top, left = boundingClientRect.left, mouseCoordinates = [
        clientX - left,
        top - clientY
      ];
      return mouseCoordinates;
    }
  });

  // lib/miscellaneous/userInput.js
  var require_userInput = __commonJS((exports) => {
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
    var UserInput = function() {
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
              var mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = _vector.subtract2(this.mouseCoordinates, this.previousMouseCoordinates);
              this.handlers.forEach(function(handler) {
                return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
              });
            }
          }
        },
        {
          key: "mouseWheelHandler",
          value: function mouseWheelHandler(mouseWheelDelta, canvas) {
            var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = _vector.zero2();
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
  });

  // lib/element/scene.js
  var require_scene = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _part = _interopRequireDefault2(require_part());
    var _camera = _interopRequireDefault2(require_camera());
    var _element = _interopRequireDefault2(require_element());
    var _userInput = _interopRequireDefault2(require_userInput());
    var _vector = require_vector();
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
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
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
    var forEach = _necessary.asynchronousUtilities.forEach;
    var Scene = function(Element1) {
      _inherits(Scene2, _element.default);
      function Scene2(parts, camera, canvas) {
        _classCallCheck(this, Scene2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene2).call(this));
        _this.parts = parts;
        _this.camera = camera;
        _this.canvas = canvas;
        return _this;
      }
      _createClass(Scene2, [
        {
          key: "windowResizeHandler",
          value: function windowResizeHandler() {
            var clientWidth = this.canvas.getClientWidth(), clientHeight = this.canvas.getClientHeight(), width = clientWidth, height = clientHeight, render = this.render.bind(this), callback = render;
            this.canvas.resize(width, height);
            var relativeMouseCoordinates = _vector.zero2(), mouseWheelDelta = 0, shiftKeyDown = false;
            this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
          }
        },
        {
          key: "userInputHandler",
          value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
            var width = this.canvas.getWidth(), height = this.canvas.getHeight(), render = this.render.bind(this), callback = render;
            this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
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
          key: "initialise",
          value: function initialise(canvas, update, done) {
            var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this);
            userInput.initialise(canvas);
            initialiseParts(this.parts, update, canvas, function() {
              window.onresize = windowResizeHandler;
              userInput.addUserInputHandler(userInputHandler);
              this.windowResizeHandler();
              done && done();
            }.bind(this));
          }
        }
      ], [
        {
          key: "fromProperties",
          value: function fromProperties(properties) {
            var canvas = properties.canvas, done = properties.done, update = properties.update, childElements = properties.childElements, parts = partsFromChildElements(childElements), camera = cameraFromChildElements(childElements), scene = _element.default.fromProperties(Scene2, properties, parts, camera, canvas);
            scene.initialise(canvas, update, done);
            return scene;
          }
        }
      ]);
      return Scene2;
    }(_wrapNativeSuper(_element.default));
    exports.default = Scene;
    function defer(callback) {
      setTimeout(callback, 0);
    }
    function initialiseParts(parts, update, canvas, done) {
      forEach(parts, function(part, next, done1, context, index) {
        var partsLength = parts.length, progress = (index + 1) / partsLength;
        part.initialise(canvas);
        defer(function() {
          update && update(progress);
          next();
        });
      }, done);
    }
    function partsFromChildElements(childElements) {
      var parts = childElements.reduce(function(parts1, childElement) {
        if (_instanceof(childElement, _part.default)) {
          var part = childElement;
          parts1.push(part);
        }
        return parts1;
      }, []);
      return parts;
    }
    function cameraFromChildElements(childElements) {
      var camera = childElements.reduce(function(camera1, childElement) {
        if (camera1 === null) {
          if (_instanceof(childElement, _camera.default)) {
            camera1 = childElement;
          }
        }
        return camera1;
      }, null);
      return camera;
    }
  });

  // lib/utilities/offsets.js
  var require_offsets = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.relativeOffsetsFromAnglesAndDirections = relativeOffsetsFromAnglesAndDirections;
    var _vector = require_vector();
    var _matrix = require_matrix2();
    function relativeOffsetsFromAnglesAndDirections(angles, directions) {
      var reverseOrder = true, reflectedAngles = _vector.reflect3(angles), rotationsMatrix = _matrix.rotationsMatrixFromAngles(reflectedAngles, reverseOrder), relativeOffsets = _vector.transform4(directions, rotationsMatrix).slice(0, 3);
      return relativeOffsets;
    }
  });

  // lib/miscellaneous/pan.js
  var require_pan = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _vector = require_vector();
    var _offsets = require_offsets();
    var _constants = require_constants2();
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
    var Pan = function() {
      function Pan2(offsets) {
        _classCallCheck(this, Pan2);
        this.offsets = offsets;
      }
      _createClass(Pan2, [
        {
          key: "getOffsets",
          value: function getOffsets() {
            return this.offsets;
          }
        },
        {
          key: "updateOffsets",
          value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt) {
            var angles = tilt.getAngles(), scaledMouseWheelDelta = mouseWheelDelta * _constants.DELTA_SCALAR, scaledReflectedRelativeMouseCoordinates = _vector.reflect2(_vector.scale2(relativeMouseCoordinates, _constants.OFFSET_SCALAR)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
              scaledMouseWheelDelta,
              0
            ]), relativeOffsets = _offsets.relativeOffsetsFromAnglesAndDirections(angles, directions);
            this.offsets = _vector.add3(this.offsets, relativeOffsets);
          }
        }
      ], [
        {
          key: "fromInitialOffsets",
          value: function fromInitialOffsets(initialOffsets) {
            var offsets = initialOffsets, pan = new Pan2(offsets);
            return pan;
          }
        },
        {
          key: "fromInitialPosition",
          value: function fromInitialPosition(initialPosition) {
            var offsets = _vector.scale3(initialPosition, _constants.INVERT_SCALAR), pan = new Pan2(offsets);
            return pan;
          }
        }
      ]);
      return Pan2;
    }();
    exports.default = Pan;
  });

  // lib/miscellaneous/tilt.js
  var require_tilt = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array2();
    var _vector = require_vector();
    var _constants = require_constants2();
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
    var Tilt = function() {
      function Tilt2(angles, flipped) {
        _classCallCheck(this, Tilt2);
        this.angles = angles;
        this.flipped = flipped;
      }
      _createClass(Tilt2, [
        {
          key: "getXAngle",
          value: function getXAngle() {
            var firstAngle = _array.first(this.angles), xAngle = firstAngle;
            return xAngle;
          }
        },
        {
          key: "getYAngle",
          value: function getYAngle() {
            var secondAngle = _array.second(this.angles), yAngle = secondAngle;
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
            var scalar = this.flipped ? +_constants.ANGLES_SCALAR : -_constants.ANGLES_SCALAR, matrix = [
              0,
              scalar,
              0,
              -scalar,
              0,
              0,
              0,
              0,
              0
            ], relativeAngles = _vector.transform3(_toConsumableArray(relativeMouseCoordinates).concat([
              0
            ]), matrix);
            this.angles = _vector.add3(this.angles, relativeAngles);
          }
        }
      ], [
        {
          key: "fromInitialAnglesAndFlipped",
          value: function fromInitialAnglesAndFlipped(initialAngles, flipped) {
            var scalar = flipped ? +_constants.DEGREES_TO_RADIANS_SCALAR : -_constants.DEGREES_TO_RADIANS_SCALAR, matrix = [
              0,
              scalar,
              0,
              -scalar,
              0,
              0,
              0,
              0,
              0
            ], angles = _vector.transform3(_toConsumableArray(initialAngles).concat([
              0
            ]), matrix), tilt = new Tilt2(angles, flipped);
            return tilt;
          }
        }
      ]);
      return Tilt2;
    }();
    exports.default = Tilt;
  });

  // lib/element/camera/gaming.js
  var require_gaming = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _pan = _interopRequireDefault2(require_pan());
    var _tilt = _interopRequireDefault2(require_tilt());
    var _camera = _interopRequireDefault2(require_camera());
    var _vector = require_vector();
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
    var defaultInitialAngles = _vector.zero2();
    var defaultInitialPosition = [
      0,
      0,
      5
    ];
    var GamingCamera = function(Camera) {
      _inherits(GamingCamera2, _camera.default);
      function GamingCamera2() {
        _classCallCheck(this, GamingCamera2);
        return _possibleConstructorReturn(this, _getPrototypeOf(GamingCamera2).apply(this, arguments));
      }
      _createClass(GamingCamera2, [
        {
          key: "update",
          value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
            var pan = this.getPan(), tilt = this.getTilt();
            if (false) {
            } else if (shiftKeyDown) {
              pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
            } else if (mouseWheelDelta !== 0) {
              pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
            } else {
              tilt.updateAngles(relativeMouseCoordinates);
            }
            var angles = tilt.getAngles(), offsets = pan.getOffsets(), offsetsMatrix = _matrix.offsetsMatrixFromOffsets(offsets), positionMatrix = _matrix.positionMatrixFromNothing(), rotationsMatrix = _matrix.rotationsMatrixFromAngles(angles), projectionMatrix = _matrix.projectionMatrixFromWidthAndHeight(width, height), normalsMatrix = _matrix.normalsMatrixFromRotationsMatrix(rotationsMatrix);
            callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
          }
        }
      ], [
        {
          key: "fromProperties",
          value: function fromProperties(properties) {
            var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? defaultInitialAngles : _initialAngles, _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? defaultInitialPosition : _initialPosition, flipped = true, pan = _pan.default.fromInitialPosition(initialPosition), tilt = _tilt.default.fromInitialAnglesAndFlipped(initialAngles, flipped), gamingCamera = _camera.default.fromProperties(GamingCamera2, properties, pan, tilt);
            return gamingCamera;
          }
        }
      ]);
      return GamingCamera2;
    }(_camera.default);
    exports.default = GamingCamera;
  });

  // lib/miscellaneous/zoom.js
  var require_zoom = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants2();
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
    var Zoom = function() {
      function Zoom2(distance) {
        _classCallCheck(this, Zoom2);
        this.distance = distance;
      }
      _createClass(Zoom2, [
        {
          key: "getDistance",
          value: function getDistance() {
            return this.distance;
          }
        },
        {
          key: "updateDistance",
          value: function updateDistance(mouseWheelDelta) {
            this.distance -= mouseWheelDelta * _constants.DELTA_SCALAR;
            this.distance = Math.max(_constants.MINIMUM_DISTANCE, this.distance);
          }
        }
      ], [
        {
          key: "fromInitialDistance",
          value: function fromInitialDistance(initialDistance) {
            var distance = initialDistance, zoom = new Zoom2(distance);
            return zoom;
          }
        }
      ]);
      return Zoom2;
    }();
    exports.default = Zoom;
  });

  // lib/element/camera/design.js
  var require_design = __commonJS((exports) => {
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
    var defaultInitialAngles = _vector.zero2();
    var defaultInitialOffsets = _vector.zero3();
    var defaultInitialDistance = 5;
    var DesignCamera = function(Camera) {
      _inherits(DesignCamera2, _camera.default);
      function DesignCamera2(pan, tilt, zoom) {
        _classCallCheck(this, DesignCamera2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignCamera2).call(this, pan, tilt));
        _this.zoom = zoom;
        return _this;
      }
      _createClass(DesignCamera2, [
        {
          key: "update",
          value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
            var pan = this.getPan(), tilt = this.getTilt();
            if (false) {
            } else if (shiftKeyDown) {
              pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
            } else if (mouseWheelDelta !== 0) {
              this.zoom.updateDistance(mouseWheelDelta);
            } else {
              tilt.updateAngles(relativeMouseCoordinates);
            }
            var angles = tilt.getAngles(), offsets = pan.getOffsets(), distance = this.zoom.getDistance(), offsetsMatrix = _matrix.offsetsMatrixFromOffsets(offsets), positionMatrix = _matrix.positionMatrixFromDistance(distance), rotationsMatrix = _matrix.rotationsMatrixFromAngles(angles), projectionMatrix = _matrix.projectionMatrixFromWidthAndHeight(width, height), normalsMatrix = _matrix.normalsMatrixFromRotationsMatrix(rotationsMatrix);
            callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
          }
        }
      ], [
        {
          key: "fromProperties",
          value: function fromProperties(properties) {
            var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? defaultInitialAngles : _initialAngles, _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? defaultInitialOffsets : _initialOffsets, _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? defaultInitialDistance : _initialDistance, flipped = false, pan = _pan.default.fromInitialOffsets(initialOffsets), tilt = _tilt.default.fromInitialAnglesAndFlipped(initialAngles, flipped), zoom = _zoom.default.fromInitialDistance(initialDistance), designCamera = _camera.default.fromProperties(DesignCamera2, properties, pan, tilt, zoom);
            return designCamera;
          }
        }
      ]);
      return DesignCamera2;
    }(_camera.default);
    exports.default = DesignCamera;
  });

  // lib/primitive/normal.js
  var require_normal = __commonJS((exports) => {
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
    var Normal = function() {
      function Normal2(extent) {
        _classCallCheck(this, Normal2);
        this.extent = extent;
      }
      _createClass(Normal2, [
        {
          key: "clone",
          value: function clone() {
            var extent = cloneExtent(this.extent), normal = new Normal2(extent);
            return normal;
          }
        },
        {
          key: "getExtent",
          value: function getExtent() {
            return this.extent;
          }
        }
      ], [
        {
          key: "fromVertices",
          value: function fromVertices(vertices) {
            var firstVertex = _array.first(vertices), secondVertex = _array.second(vertices), thirdVertex = _array.third(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = _vector.subtract3(secondPosition, firstPosition), secondExtent = _vector.subtract3(thirdPosition, firstPosition), extent = _vector.normalise3(_vector.cross3(firstExtent, secondExtent)), normal = new Normal2(extent);
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
  });

  // lib/primitive/vertex.js
  var require_vertex = __commonJS((exports) => {
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
    var Vertex = function() {
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
          key: "clone",
          value: function clone() {
            var position = this.position.slice(), vertex = new Vertex2(position);
            return vertex;
          }
        },
        {
          key: "rotate",
          value: function rotate(rotationQuaternion) {
            this.position = _rotation.rotatePosition(this.position, rotationQuaternion);
          }
        },
        {
          key: "applyTransform",
          value: function applyTransform(transform) {
            this.position = transform(this.position);
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
  });

  // lib/utilities/facet.js
  var require_facet = __commonJS((exports) => {
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
    var _constants = require_constants2();
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
      var firstVertex = _array.first(vertices), secondVertex = _array.second(vertices), thirdVertex = _array.third(vertices), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstExtent = _vector.subtract3(secondVertexPosition, firstVertexPosition), secondExtent = _vector.subtract3(thirdVertexPosition, firstVertexPosition), area = _vector.length3(_vector.cross3(firstExtent, secondExtent)) / 2;
      return area;
    }
  });

  // lib/primitive/facet.js
  var require_facet2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _edge = _interopRequireDefault2(require_edge());
    var _normal = _interopRequireDefault2(require_normal());
    var _vertex = _interopRequireDefault2(require_vertex());
    var _array = require_array2();
    var _constants = require_constants2();
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
    var Facet = function() {
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
            var maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = _midPoint.calculateMidPointPosition(this.vertices), midPointPositionToOneSideOfMaskingEdges = _midPoint.isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges;
            return masked;
          }
        },
        {
          key: "permute",
          value: function permute(places) {
            this.vertices = _array.permute(this.vertices, places);
            this.normal = _facet.calculateNormal(this.vertices, _normal.default);
            this.edges = _facet.calculateEdges(this.vertices, _edge.default);
          }
        },
        {
          key: "rotate",
          value: function rotate(rotationQuaternion) {
            this.vertices.forEach(function(vertex) {
              return vertex.rotate(rotationQuaternion);
            });
            this.normal = _facet.calculateNormal(this.vertices, _normal.default);
            this.edges = _facet.calculateEdges(this.vertices, _edge.default);
          }
        },
        {
          key: "applyTransform",
          value: function applyTransform(transform) {
            this.vertices.forEach(function(vertex) {
              return vertex.applyTransform(transform);
            });
            this.normal = _facet.calculateNormal(this.vertices, _normal.default);
            this.edges = _facet.calculateEdges(this.vertices, _edge.default);
          }
        },
        {
          key: "splitWithIntersections",
          value: function splitWithIntersections(intersections, smallerFacets) {
            var nonNullIntersections = _intersection.calculateNonNullIntersections(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
            switch (nonNullIntersectionsLength) {
              case 2:
                this.splitWithTwoNonNullIntersections(intersections, smallerFacets);
                break;
              case 1:
                this.splitWithOneNonNullIntersection(intersections, smallerFacets);
                break;
              case 0:
                this.splitWithNoNonNullIntersections(intersections, smallerFacets);
                break;
            }
          }
        },
        {
          key: "splitWithTwoNonNullIntersections",
          value: function splitWithTwoNonNullIntersections(intersections, smallerFacets) {
            var nullIntersectionIndex = _intersection.calculateNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
            intersections = _array.permute(intersections, places);
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
            this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
          }
        },
        {
          key: "splitWithOneNonNullIntersection",
          value: function splitWithOneNonNullIntersection(intersections, smallerFacets) {
            var nonNullIntersectionIndex = _intersection.calculateNonNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
            intersections = _array.permute(intersections, places);
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
            this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
          }
        },
        {
          key: "splitWithNoNonNullIntersections",
          value: function splitWithNoNonNullIntersections(intersections, smallerFacets) {
            var smallerFacet = this.fromVertices(this.vertices);
            smallerFacets.push(smallerFacet);
          }
        },
        {
          key: "splitWithIndexTuplesAndIntersections",
          value: function splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets) {
            var vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map(function(intersection, index) {
              var startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = _intersection.calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection);
              return intermediateVertexPosition;
            });
            _array.push(vertexPositions, intermediateVertexPositions);
            indexTuples.forEach(function(indexTuple) {
              var positions = vertexPositions, indexes = indexTuple, facet = this, smallerFacet = smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet);
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
    function smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet) {
      var vertices = indexes.map(function(index) {
        var position = positions[index];
        position = position.slice();
        var vertex = _vertex.default.fromPosition(position);
        return vertex;
      }), smallerFacet = facet.fromVertices(vertices);
      return smallerFacet;
    }
  });

  // lib/primitive/facet/coloured.js
  var require_coloured = __commonJS((exports) => {
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
    var ColouredFacet = function(Facet) {
      _inherits(ColouredFacet2, _facet.default);
      function ColouredFacet2(vertices, normal, edges, rgba) {
        _classCallCheck(this, ColouredFacet2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredFacet2).call(this, vertices, normal, edges));
        _this.rgba = rgba;
        return _this;
      }
      _createClass(ColouredFacet2, [
        {
          key: "clone",
          value: function clone() {
            var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
            vertices = _facet1.cloneVertices(vertices);
            normal = _facet1.cloneNormal(normal);
            edges = _facet1.cloneEdges(edges);
            var rgba = this.rgba, colouredFacet = new ColouredFacet2(vertices, normal, edges, rgba);
            return colouredFacet;
          }
        },
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
          key: "fromVertices",
          value: function fromVertices(vertices) {
            var colouredFacet = null;
            var area = _facet1.calculateArea(vertices), areaApproximatelyEqualToZero = _approximate.isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero;
            if (largeEnough) {
              var rgba = this.rgba, normal = _facet1.calculateNormal(vertices, _normal.default), edges = _facet1.calculateEdges(vertices, _edge.default);
              colouredFacet = new ColouredFacet2(vertices, normal, edges, rgba);
            }
            return colouredFacet;
          }
        }
      ], [
        {
          key: "fromCoordinateTuplesIndexTupleAndColour",
          value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
            var colouredFacet = null;
            var vertices = _vertices.verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = _facet1.calculateArea(vertices), areaApproximatelyEqualToZero = _approximate.isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero;
            if (largeEnough) {
              var normal = _facet1.calculateNormal(vertices, _normal.default), edges = _facet1.calculateEdges(vertices, _edge.default), rgba = _toConsumableArray(colour).concat([
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
  });

  // lib/element/canvas/coloured.js
  var require_coloured2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _canvas = _interopRequireDefault2(require_canvas());
    var _coloured = _interopRequireDefault2(require_coloured());
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
    var ColouredCanvasElement = function(CanvasElement) {
      _inherits(ColouredCanvasElement2, _canvas.default);
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
          key: "createFacets",
          value: function createFacets(hidden) {
            hidden = _get(_getPrototypeOf(ColouredCanvasElement2.prototype), "createFacets", this).call(this, hidden);
            if (!hidden) {
              var indexTuples = this.indexes, facets = indexTuples.map(function(indexTuple) {
                var coordinateTuples = this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, this.colour), facet = colouredFacet;
                return facet;
              }.bind(this));
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
  });

  // lib/utilities/texture.js
  var require_texture5 = __commonJS((exports) => {
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
        return _vector.add2(_vector.multiply2(textureCoordinateTuple, [
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
      var arbitraryRotationQuaternion = _quaternion.calculateArbitraryRotationQuaternion(normal), rotationQuaternion = arbitraryRotationQuaternion;
      var tempVertices = _vertices.rotateVertices(vertices, rotationQuaternion);
      parentVertices = _vertices.rotateVertices(parentVertices, rotationQuaternion);
      vertices = tempVertices;
      var firstVertex = _array.first(vertices), secondVertex = _array.second(vertices), thirdVertex = _array.third(vertices), firstParentVertex = _array.first(parentVertices), secondParentVertex = _array.second(parentVertices), thirdParentVertex = _array.third(parentVertices), firstTextureCoordinateTuple = _array.first(textureCoordinateTuples), secondTextureCoordinateTuple = _array.second(textureCoordinateTuples), thirdTextureCoordinateTuple = _array.third(textureCoordinateTuples), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstParentVertexPosition = firstParentVertex.getPosition(), secondParentVertexPosition = secondParentVertex.getPosition(), thirdParentVertexPosition = thirdParentVertex.getPosition(), R1x = firstVertexPosition[0], R1y = firstVertexPosition[1], R2x = secondVertexPosition[0], R2y = secondVertexPosition[1], R3x = thirdVertexPosition[0], R3y = thirdVertexPosition[1], P1x = firstParentVertexPosition[0], P2x = secondParentVertexPosition[0], P3x = thirdParentVertexPosition[0], P1y = firstParentVertexPosition[1], P2y = secondParentVertexPosition[1], P3y = thirdParentVertexPosition[1], P1u = firstTextureCoordinateTuple[0], P1v = firstTextureCoordinateTuple[1], P2u = secondTextureCoordinateTuple[0], P2v = secondTextureCoordinateTuple[1], P3u = thirdTextureCoordinateTuple[0], P3v = thirdTextureCoordinateTuple[1], textureCoordinatesMatrix = _matrix.invert3([
        1,
        1,
        1,
        P1u,
        P2u,
        P3u,
        P1v,
        P2v,
        P3v
      ]), firstTransformedParentVerticesComponent = _vector.transform3([
        P1x,
        P2x,
        P3x
      ], textureCoordinatesMatrix), secondTransformedParentVerticesComponent = _vector.transform3([
        P1y,
        P2y,
        P3y
      ], textureCoordinatesMatrix), Ox = firstTransformedParentVerticesComponent[0], Ux = firstTransformedParentVerticesComponent[1], Vx = firstTransformedParentVerticesComponent[2], Oy = secondTransformedParentVerticesComponent[0], Uy = secondTransformedParentVerticesComponent[1], Vy = secondTransformedParentVerticesComponent[2], transformedParentVerticesMatrix = _matrix.invert2([
        Ux,
        Uy,
        Vx,
        Vy
      ]), firstAdjustedTextureCoordinate = _vector.transform2([
        R1x - Ox,
        R1y - Oy
      ], transformedParentVerticesMatrix), secondAdjustedTextureCoordinate = _vector.transform2([
        R2x - Ox,
        R2y - Oy
      ], transformedParentVerticesMatrix), thirdAdjustedTextureCoordinate = _vector.transform2([
        R3x - Ox,
        R3y - Oy
      ], transformedParentVerticesMatrix), adjustedTextureCoordinateTuple = [
        firstAdjustedTextureCoordinate,
        secondAdjustedTextureCoordinate,
        thirdAdjustedTextureCoordinate
      ];
      return adjustedTextureCoordinateTuple;
    }
  });

  // lib/primitive/facet/textured.js
  var require_textured = __commonJS((exports) => {
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
    var TexturedFacet = function(Facet) {
      _inherits(TexturedFacet2, _facet.default);
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
          key: "clone",
          value: function clone() {
            var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
            vertices = _facet1.cloneVertices(vertices);
            normal = _facet1.cloneNormal(normal);
            edges = _facet1.cloneEdges(edges);
            var imageName = this.imageName, textureCoordinateTuples = _texture.cloneTextureCoordinateTuples(this.textureCoordinateTuples), texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
            return texturedFacet;
          }
        },
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
            var json = imageMapJSON[this.imageName], extent = json, mappedTextureCoordinateTuples = _texture.calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);
            return mappedTextureCoordinateTuples;
          }
        },
        {
          key: "permute",
          value: function permute(places) {
            _get(_getPrototypeOf(TexturedFacet2.prototype), "permute", this).call(this, places);
            this.textureCoordinateTuples = _array.permute(this.textureCoordinateTuples, places);
          }
        },
        {
          key: "fromVertices",
          value: function fromVertices(vertices) {
            var texturedFacet = null;
            var area = _facet1.calculateArea(vertices), areaApproximatelyEqualToZero = _approximate.isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero;
            if (largeEnough) {
              var normal = _facet1.calculateNormal(vertices, _normal.default), parentVertices = this.vertices, adjustedTextureCoordinateTuple = _texture.calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, this.textureCoordinateTuples), edges = _facet1.calculateEdges(vertices, _edge.default), imageName = this.imageName, textureCoordinateTuples = adjustedTextureCoordinateTuple;
              texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
            }
            return texturedFacet;
          }
        }
      ], [
        {
          key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName",
          value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(textureCoordinateTuples, coordinateTuples, indexTuple, imageName) {
            var texturedFacet = null;
            var vertices = _vertices.verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = _facet1.calculateArea(vertices), areaApproximatelyEqualToZero = _approximate.isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero;
            if (largeEnough) {
              var normal = _facet1.calculateNormal(vertices, _normal.default), edges = _facet1.calculateEdges(vertices, _edge.default);
              texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
            }
            return texturedFacet;
          }
        }
      ]);
      return TexturedFacet2;
    }(_facet.default);
    exports.default = TexturedFacet;
  });

  // lib/element/canvas/textured.js
  var require_textured2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _canvas = _interopRequireDefault2(require_canvas());
    var _textured = _interopRequireDefault2(require_textured());
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
    var TexturedCanvasElement = function(CanvasElement) {
      _inherits(TexturedCanvasElement2, _canvas.default);
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
          key: "createFacets",
          value: function createFacets(hidden) {
            hidden = _get(_getPrototypeOf(TexturedCanvasElement2.prototype), "createFacets", this).call(this, hidden);
            if (!hidden) {
              var indexTuples = this.indexes, facets = indexTuples.map(function(indexTuple, index) {
                var vertexTextureCoordinateTuples = this.textureCoordinates[index], coordinateTuples = this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, this.imageName), facet = texturedFacet;
                return facet;
              }.bind(this));
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
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    require_xgl();
    var _canvas = _interopRequireDefault2(require_canvas2());
    var _mask = _interopRequireDefault2(require_mask());
    var _part = _interopRequireDefault2(require_part());
    var _scene = _interopRequireDefault2(require_scene());
    var _camera = _interopRequireDefault2(require_camera());
    var _gaming = _interopRequireDefault2(require_gaming());
    var _design = _interopRequireDefault2(require_design());
    var _canvas1 = _interopRequireDefault2(require_canvas());
    var _coloured = _interopRequireDefault2(require_coloured2());
    var _textured = _interopRequireDefault2(require_textured2());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
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
  });

  // lib/example/element/colouredSquare.js
  var require_colouredSquare = __commonJS((exports) => {
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
    var ColouredSquare = function(ColouredCanvasElement) {
      _inherits(ColouredSquare2, _index.ColouredCanvasElement);
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
  });

  // lib/example/element/face.js
  var require_face = __commonJS((exports) => {
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
  });

  // lib/example/element/cube.js
  var require_cube = __commonJS((exports) => {
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
  });

  // lib/example/cube.js
  var require_cube2 = __commonJS((exports) => {
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
    var canvas = new _index.Canvas();
    var cubeExample = function() {
      return React.createElement(_index.Scene, {
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
  });

  // lib/example/simple.js
  var require_simple = __commonJS((exports) => {
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
    var canvas = new _index.Canvas();
    var simpleExample = function() {
      return React.createElement(_index.Scene, {
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
  });

  // lib/example/masking.js
  var require_masking2 = __commonJS((exports) => {
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
    var canvas = new _index.Canvas();
    var maskingExample = function() {
      var SmallCube = function(properties) {
        return React.createElement(_cube2.default, {
          scale: [
            1 / 4,
            1 / 4,
            1 / 4
          ]
        });
      }, smallCubeMask = /* @__PURE__ */ React.createElement(_index.Mask, null, /* @__PURE__ */ React.createElement(SmallCube, null)), MediumCube = function(properties) {
        return React.createElement(_cube2.default, {
          scale: [
            1 / 2,
            1 / 2,
            1 / 2
          ],
          mask: smallCubeMask
        });
      }, mediumCubeMask = /* @__PURE__ */ React.createElement(_index.Mask, null, /* @__PURE__ */ React.createElement(MediumCube, null)), LargeCube = function(properties) {
        return React.createElement(_cube2.default, {
          mask: mediumCubeMask
        });
      };
      return /* @__PURE__ */ React.createElement(_index.Scene, {
        canvas
      }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(LargeCube, null)), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
    };
    var _default = maskingExample;
    exports.default = _default;
  });

  // lib/example/element/texturedTriangle.js
  var require_texturedTriangle = __commonJS((exports) => {
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
    var TexturedTriangle = function(TexturedCanvasElement) {
      _inherits(TexturedTriangle2, _index.TexturedCanvasElement);
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
  });

  // lib/example/element/side.js
  var require_side = __commonJS((exports) => {
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
  });

  // lib/example/element/pyramid.js
  var require_pyramid = __commonJS((exports) => {
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
  });

  // lib/miscellaneous/configuration.js
  var require_configuration = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var configuration = window.__configuration__;
    var _default = configuration;
    exports.default = _default;
  });

  // lib/example/pyramid.js
  var require_pyramid2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib();
    var _pyramid2 = _interopRequireDefault2(require_pyramid());
    var _configuration = _interopRequireDefault2(require_configuration());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var canvas = new _index.Canvas();
    var pyramidExample = function() {
      preloadImageMap(function(imageMap) {
        var imageMapJSON = _configuration.default.imageMapJSON;
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
    function preloadImageMap(callback) {
      var onload = function onload2(event) {
        callback(imageMap);
      };
      var imageMapURI = _configuration.default.imageMapURI, imageMap = new Image(), src = imageMapURI;
      Object.assign(imageMap, {
        src,
        onload
      });
    }
  });

  // lib/example/element/texturedQuadrangle.js
  var require_texturedQuadrangle = __commonJS((exports) => {
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
    var TexturedQuadrangle = function(TexturedCanvasElement) {
      _inherits(TexturedQuadrangle2, _index.TexturedCanvasElement);
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
  });

  // lib/example/tiling.js
  var require_tiling = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _index = require_lib();
    var _configuration = _interopRequireDefault2(require_configuration());
    var _colouredSquare = _interopRequireDefault2(require_colouredSquare());
    var _texturedQuadrangle = _interopRequireDefault2(require_texturedQuadrangle());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var forEach = _necessary.asynchronousUtilities.forEach;
    var canvas = new _index.Canvas();
    var mask = /* @__PURE__ */ React.createElement(_index.Mask, null, /* @__PURE__ */ React.createElement(_colouredSquare.default, {
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
    }));
    var tilingExample = function() {
      var imageNames = _configuration.default.imageNames, imageDirectoryURI = _configuration.default.imageDirectoryURI;
      preloadImages(imageNames, imageDirectoryURI, function(images) {
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, {
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
          mask
        }), /* @__PURE__ */ React.createElement(_texturedQuadrangle.default, {
          position: [
            -0.5,
            -0.5,
            -0.5
          ],
          imageName: "paving.jpg",
          mask
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      });
    };
    var _default = tilingExample;
    exports.default = _default;
    function preloadImages(imageNames, imageDirectoryURI, callback) {
      var done = function done2() {
        var images2 = context.images;
        callback(images2);
      };
      var images = [], context = {
        images
      };
      forEach(imageNames, function(imageName, next, done1, context1) {
        var onload = function onload2() {
          images.push(image);
          next();
        };
        var image = new Image(), src = "".concat(imageDirectoryURI, "/").concat(imageName);
        Object.assign(image, {
          src,
          onload
        });
      }, done, context);
    }
  });

  // lib/example.js
  "use strict";
  var _cube = _interopRequireDefault(require_cube2());
  var _simple = _interopRequireDefault(require_simple());
  var _masking = _interopRequireDefault(require_masking2());
  var _pyramid = _interopRequireDefault(require_pyramid2());
  var _tiling = _interopRequireDefault(require_tiling());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var example = window.location.search.substring(1);
  switch (example) {
    case "simple":
      _simple.default();
      break;
    case "cube":
      _cube.default();
      break;
    case "masking":
      _masking.default();
      break;
    case "pyramid":
      _pyramid.default();
      break;
    case "tiling":
      _tiling.default();
      break;
  }
})();
//# sourceMappingURL=example.js.map
