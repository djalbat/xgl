"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _attribute = _interopRequireDefault(require("../../locations/attribute"));
var _vertexShader = require("../../source/colour/vertexShader");
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
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ColourAttributeLocations = /*#__PURE__*/ function(AttributeLocations) {
    _inherits(ColourAttributeLocations, AttributeLocations);
    function ColourAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
        _classCallCheck(this, ColourAttributeLocations);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourAttributeLocations).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));
        _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
        return _this;
    }
    _createClass(ColourAttributeLocations, [
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
                var vertexColourAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.vertexColourAttributeName), colourAttributeLocations = _attribute.default.fromProgram(ColourAttributeLocations, program, canvas, vertexColourAttributeLocation);
                return colourAttributeLocations;
            }
        }
    ]);
    return ColourAttributeLocations;
}(_attribute.default);
exports.default = ColourAttributeLocations;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImZyb21Qcm9ncmFtIiwicHJvZ3JhbSIsImNhbnZhcyIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwiY29sb3VyQXR0cmlidXRlTG9jYXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUEyQixDQUEzQixVQUEyQjtBQUVoQixHQUFrQyxDQUFsQyxhQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZEQSx3QkFBd0IsaUJBQTlCLFFBQVE7Y0FBRkEsd0JBQXdCO2FBQXhCQSx3QkFBd0IsQ0FDL0JDLCtCQUErQixFQUFFQyw2QkFBNkIsRUFBRUMsNkJBQTZCOzhCQUR0Rkgsd0JBQXdCOztpRUFBeEJBLHdCQUF3QixhQUVuQ0MsK0JBQStCLEVBQUVDLDZCQUE2QjtjQUUvREMsNkJBQTZCLEdBQUdBLDZCQUE2Qjs7O2lCQUpqREgsd0JBQXdCOztZQU8zQ0ksR0FBZ0MsRUFBaENBLENBQWdDO21CQUFoQ0EsUUFBUSxDQUFSQSxnQ0FBZ0MsR0FBRyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDRCw2QkFBNkI7WUFDM0MsQ0FBQzs7OztZQUVNRSxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxDQUFDO2dCQUNuQyxHQUFLLENBQUNKLDZCQUE2QixHQUFHSSxNQUFNLENBQUNDLG9CQUFvQixDQUFDRixPQUFPLEVBZG5DLGFBQWtDLDZCQWVsRUcsd0JBQXdCLEdBakJILFVBQTJCLFNBaUJGSixXQUFXLENBQUNMLHdCQUF3QixFQUFFTSxPQUFPLEVBQUVDLE1BQU0sRUFBRUosNkJBQTZCO2dCQUV4SSxNQUFNLENBQUNNLHdCQUF3QjtZQUNqQyxDQUFDOzs7V0FoQmtCVCx3QkFBd0I7RUFKZCxVQUEyQjtrQkFJckNBLHdCQUF3QiJ9