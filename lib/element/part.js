"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _colour = _interopRequireDefault(require("../renderer/colour"));
var _images = _interopRequireDefault(require("../renderer/texture/images"));
var _imageMap = _interopRequireDefault(require("../renderer/texture/imageMap"));
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
var Part = /*#__PURE__*/ function(Element) {
    _inherits(Part, Element);
    function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
        _classCallCheck(this, Part);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Part).call(this));
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
    _createClass(Part, [
        {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
                this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas); ///
                this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas); ///
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.prepare();
                });
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas, masks, marginOfError) {
                var _this = this;
                var textureRenderer = null;
                var colourRenderer = _colour.default.fromNothing(canvas);
                if (this.images !== null) {
                    var imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
                    textureRenderer = imagesTextureRenderer; ///
                }
                if (this.imageMap !== null) {
                    var imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
                    textureRenderer = imageMapTextureRenderer; ///
                }
                var childElements = this.getChildElements();
                childElements.forEach(function(childElement) {
                    return childElement.createFacets(_this.hidden, marginOfError);
                });
                childElements.forEach(function(childElement) {
                    return childElement.amendFacets(masks, marginOfError);
                });
                childElements.forEach(function(childElement) {
                    return childElement.addFacets(colourRenderer, textureRenderer);
                });
                colourRenderer && colourRenderer.createBuffers(canvas); ///
                textureRenderer && textureRenderer.createBuffers(canvas); ///
                this.colourRenderer = colourRenderer;
                this.textureRenderer = textureRenderer;
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _images = properties.images, images = _images === void 0 ? null : _images, _imageMap = properties.imageMap, imageMap = _imageMap === void 0 ? null : _imageMap, _imageNames = properties.imageNames, imageNames = _imageNames === void 0 ? null : _imageNames, _imageTiling = properties.imageTiling, imageTiling = _imageTiling === void 0 ? false : _imageTiling, _imageMapJSON = properties.imageMapJSON, imageMapJSON = _imageMapJSON === void 0 ? null : _imageMapJSON, _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);
                return part;
            }
        }
    ]);
    return Part;
}(_wrapNativeSuper(_element.default));
exports.default = Part;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsIkNvbG91clJlbmRlcmVyIiwiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIiLCJQYXJ0IiwiY29uc3RydWN0b3IiLCJpbWFnZXMiLCJpbWFnZU1hcCIsImltYWdlTmFtZXMiLCJpbWFnZVRpbGluZyIsImltYWdlTWFwSlNPTiIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiaGlkZGVuIiwicmVuZGVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJjYW52YXMiLCJwcmVwYXJlIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiaW5pdGlhbGlzZSIsIm1hc2tzIiwibWFyZ2luT2ZFcnJvciIsImZyb21Ob3RoaW5nIiwiaW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyIsImltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OIiwiY3JlYXRlRmFjZXRzIiwiYW1lbmRGYWNldHMiLCJhZGRGYWNldHMiLCJjcmVhdGVCdWZmZXJzIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFUSxHQUFZLENBQVosUUFBWTtBQUNMLEdBQW9CLENBQXBCLE9BQW9CO0FBQ2IsR0FBNEIsQ0FBNUIsT0FBNEI7QUFDMUIsR0FBOEIsQ0FBOUIsU0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVk7a0JBS1gsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci9jb2xvdXJcIjtcbmltcG9ydCBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzXCI7XG5pbXBvcnQgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pbWFnZXMgPSBpbWFnZXM7XG4gICAgdGhpcy5pbWFnZU1hcCA9IGltYWdlTWFwO1xuICAgIHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG4gICAgdGhpcy5pbWFnZVRpbGluZyA9IGltYWdlVGlsaW5nO1xuICAgIHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG4gIFxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LnByZXBhcmUoKSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlciAmJiBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyICYmIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG4iXX0=