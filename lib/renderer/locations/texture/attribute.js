"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _attribute = _interopRequireDefault(require("../../locations/attribute"));
var _vertexShader = require("../../source/texture/vertexShader");
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
var TextureAttributeLocations = /*#__PURE__*/ function(AttributeLocations) {
    _inherits(TextureAttributeLocations, AttributeLocations);
    function TextureAttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
        _classCallCheck(this, TextureAttributeLocations);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureAttributeLocations).call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation));
        _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
        return _this;
    }
    _createClass(TextureAttributeLocations, [
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
                var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.textureCoordinateAttributeName), textureAttributeLocations = _attribute.default.fromProgram(TextureAttributeLocations, program, canvas, textureCoordinateAttributeLocation);
                return textureAttributeLocations;
            }
        }
    ]);
    return TextureAttributeLocations;
}(_attribute.default);
exports.default = TextureAttributeLocations;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFbUIsR0FBMkIsQ0FBM0IsVUFBMkI7QUFFWCxHQUFtQyxDQUFuQyxhQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdELHlCQUF5QjtjQUF6Qix5QkFBeUI7YUFBekIseUJBQXlCLENBQ2hDLCtCQUErQixFQUFFLDZCQUE2QixFQUFFLGtDQUFrQzs4QkFEM0YseUJBQXlCOztpRUFBekIseUJBQXlCLGFBRXBDLCtCQUErQixFQUFFLDZCQUE2QjtjQUUvRCxrQ0FBa0MsR0FBRyxrQ0FBa0M7OztpQkFKM0QseUJBQXlCOztZQU81QyxHQUFxQyxHQUFyQyxxQ0FBcUM7NEJBQXJDLHFDQUFxQyxHQUFHLENBQUM7NEJBQzNCLGtDQUFrQztZQUNoRCxDQUFDOzs7O1lBRU0sR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDbkMsR0FBSyxDQUFDLGtDQUFrQyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBZG5DLGFBQW1DLGtDQWV4RSx5QkFBeUIsR0FqQkosVUFBMkIsU0FpQkQsV0FBVyxDQUFDLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsa0NBQWtDO3VCQUV4SSx5QkFBeUI7WUFDbEMsQ0FBQzs7O1dBaEJrQix5QkFBeUI7RUFKZixVQUEyQjtrQkFJckMseUJBQXlCIn0=