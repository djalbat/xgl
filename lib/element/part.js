"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _mask = _interopRequireDefault(require("./mask"));
var _element = _interopRequireDefault(require("../element"));
var _colour = _interopRequireDefault(require("../renderer/colour"));
var _images = _interopRequireDefault(require("../renderer/texture/images"));
var _imageMap = _interopRequireDefault(require("../renderer/texture/imageMap"));
var _element1 = require("../utilities/element");
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
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
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var Part = /*#__PURE__*/ function(Element) {
    _inherits(Part, Element);
    var _super = _createSuper(Part);
    function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
        _classCallCheck(this, Part);
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
    _createClass(Part, [
        {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
                this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas); ///
                this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas); ///
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
                var colourRenderer = _colour.default.fromNothing(canvas), childElements = this.getChildElements(), masks = (0, _element1).elementsFromChildElements(childElements, _mask.default);
                var textureRenderer = null;
                if (this.images !== null) {
                    var imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
                    textureRenderer = imagesTextureRenderer; ///
                }
                if (this.imageMap !== null) {
                    var imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
                    textureRenderer = imageMapTextureRenderer; ///
                }
                childElements.forEach(function(childElement) {
                    return childElement.createFacets(marginOfError);
                });
                childElements.forEach(function(childElement) {
                    return childElement.maskFacets(masks, marginOfError);
                });
                childElements.forEach(function(childElement) {
                    return childElement.addFacets(colourRenderer, textureRenderer);
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
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _images1 = properties.images, images = _images1 === void 0 ? null : _images1, _imageMap1 = properties.imageMap, imageMap = _imageMap1 === void 0 ? null : _imageMap1, _imageNames = properties.imageNames, imageNames = _imageNames === void 0 ? null : _imageNames, _imageTiling = properties.imageTiling, imageTiling = _imageTiling === void 0 ? false : _imageTiling, _imageMapJSON = properties.imageMapJSON, imageMapJSON = _imageMapJSON === void 0 ? null : _imageMapJSON, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);
                return part;
            }
        }
    ]);
    return Part;
}(_wrapNativeSuper(_element.default));
exports.default = Part;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNrIGZyb20gXCIuL21hc2tcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKTtcblxuICAgIGxldCB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZXNUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyh0aGlzLmltYWdlcywgdGhpcy5pbWFnZU5hbWVzLCB0aGlzLmltYWdlVGlsaW5nLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZU1hcCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBJbWFnZU1hcFRleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04odGhpcy5pbWFnZU1hcCwgdGhpcy5pbWFnZU1hcEpTT04sIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBpZiAoY29sb3VyUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB9XG5cbiAgICBpZiAodGV4dHVyZVJlbmRlcmVyICE9PSBudWxsKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIH1cblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhcnQiLCJpbWFnZXMiLCJpbWFnZU1hcCIsImltYWdlTmFtZXMiLCJpbWFnZVRpbGluZyIsImltYWdlTWFwSlNPTiIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwicmVuZGVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJjYW52YXMiLCJpbml0aWFsaXNlIiwibWFyZ2luT2ZFcnJvciIsImZyb21Ob3RoaW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJtYXNrcyIsImltYWdlc1RleHR1cmVSZW5kZXJlciIsImZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmciLCJpbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTiIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJtYXNrRmFjZXRzIiwiYWRkRmFjZXRzIiwiY3JlYXRlQnVmZmVycyIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInBhcnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBUSxDQUFSLEtBQVE7QUFDTCxHQUFZLENBQVosUUFB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