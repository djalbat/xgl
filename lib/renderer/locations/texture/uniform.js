"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _uniform = _interopRequireDefault(require("../../locations/uniform"));
var _fragmentShader = require("../../source/texture/fragmentShader");
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
var TextureUniformLocations = /*#__PURE__*/ function(UniformLocations) {
    _inherits(TextureUniformLocations, UniformLocations);
    function TextureUniformLocations(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
        _classCallCheck(this, TextureUniformLocations);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureUniformLocations).call(this, offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation));
        _this.samplerUniformLocation = samplerUniformLocation;
        return _this;
    }
    _createClass(TextureUniformLocations, [
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
                var samplerUniformLocation = canvas.getUniformLocation(program, _fragmentShader.samplerName), textureUniformLocations = _uniform.default.fromProgram(TextureUniformLocations, program, canvas, samplerUniformLocation);
                return textureUniformLocations;
            }
        }
    ]);
    return TextureUniformLocations;
}(_uniform.default);
exports.default = TextureUniformLocations;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi4vLi4vbG9jYXRpb25zL3VuaWZvcm1cIjtcblxuaW1wb3J0IHsgc2FtcGxlck5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgZXh0ZW5kcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHN1cGVyKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHNhbXBsZXJVbmlmb3JtTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBzYW1wbGVyTmFtZSksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24pO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWlCLEdBQXlCLENBQXpCLFFBQXlCO0FBRTFCLEdBQXFDLENBQXJDLGVBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUMsdUJBQXVCO2NBQXZCLHVCQUF1QjthQUF2Qix1QkFBdUIsQ0FDOUIsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLEVBQUUsc0JBQXNCOzhCQUQzSyx1QkFBdUI7O2lFQUF2Qix1QkFBdUIsYUFFbEMsNEJBQTRCLEVBQUUsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCO2NBRTNKLHNCQUFzQixHQUFHLHNCQUFzQjs7O2lCQUpuQyx1QkFBdUI7O1lBTzFDLEdBQXlCLEdBQXpCLHlCQUF5Qjs0QkFBekIseUJBQXlCLEdBQUcsQ0FBQzs0QkFDZixzQkFBc0I7WUFDcEMsQ0FBQzs7OztZQUVNLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ25DLEdBQUssQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQWR4QyxlQUFxQyxlQWV2RCx1QkFBdUIsR0FqQkosUUFBeUIsU0FpQkQsV0FBVyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsc0JBQXNCO3VCQUV0SCx1QkFBdUI7WUFDaEMsQ0FBQzs7O1dBaEJrQix1QkFBdUI7RUFKZixRQUF5QjtrQkFJakMsdUJBQXVCIn0=