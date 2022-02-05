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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var ColourAttributeLocations = /*#__PURE__*/ function(AttributeLocations) {
    _inherits(ColourAttributeLocations, AttributeLocations);
    var _super = _createSuper(ColourAttributeLocations);
    function ColourAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
        _classCallCheck(this, ColourAttributeLocations);
        var _this;
        _this = _super.call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBleHRlbmRzIEF0dHJpYnV0ZUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbik7XG5cbiAgICByZXR1cm4gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImZyb21Qcm9ncmFtIiwicHJvZ3JhbSIsImNhbnZhcyIsImdldEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsImNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyIsIkF0dHJpYnV0ZUxvY2F0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFbUIsR0FBMkIsQ0FBM0IsVUFBMkI7QUFFaEIsR0FBa0MsQ0FBbEMsYUFBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkRBLHdCQUF3QixpQkFBOUIsUUFBUTs7O2FBQUZBLHdCQUF3QixDQUMvQkMsK0JBQStCLEVBQUVDLDZCQUE2QixFQUFFQyw2QkFBNkI7OztrQ0FDakdGLCtCQUErQixFQUFFQyw2QkFBNkI7Y0FFL0RDLDZCQUE2QixHQUFHQSw2QkFBNkI7Ozs7O1lBR3BFQyxHQUFnQyxFQUFoQ0EsQ0FBZ0M7bUJBQWhDQSxRQUFRLENBQVJBLGdDQUFnQyxHQUFHLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUNELDZCQUE2QjtZQUMzQyxDQUFDOzs7O1lBRU1FLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFFLENBQUM7Z0JBQ25DLEdBQUssQ0FBQ0osNkJBQTZCLEdBQUdJLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUNGLE9BQU8sRUFBRUcsYUFBeUIsNkJBQzlGQyx3QkFBd0IsR0FBR0MsVUFBa0IsU0FBQ04sV0FBVyxDQUFDTCx3QkFBd0IsRUFBRU0sT0FBTyxFQUFFQyxNQUFNLEVBQUVKLDZCQUE2QjtnQkFFeEksTUFBTSxDQUFDTyx3QkFBd0I7WUFDakMsQ0FBQzs7OztFQWhCbURDLFVBQWtCO2tCQUFuRFgsd0JBQXdCIn0=