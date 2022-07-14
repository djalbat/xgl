"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Part;
    }
});
var _mask = /*#__PURE__*/ _interopRequireDefault(require("./mask"));
var _element = /*#__PURE__*/ _interopRequireDefault(require("../element"));
var _colour = /*#__PURE__*/ _interopRequireDefault(require("../renderer/colour"));
var _images = /*#__PURE__*/ _interopRequireDefault(require("../renderer/texture/images"));
var _imageMap = /*#__PURE__*/ _interopRequireDefault(require("../renderer/texture/imageMap"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
    "@swc/helpers - typeof";
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
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
                var colourRenderer = _colour.default.fromNothing(canvas), childElements = this.getChildElements(), masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default);
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
        },
        {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
                this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas); ///
                this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas); ///
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _images = properties.images, images = _images === void 0 ? null : _images, _imageMap = properties.imageMap, imageMap = _imageMap === void 0 ? null : _imageMap, _imageNames = properties.imageNames, imageNames = _imageNames === void 0 ? null : _imageNames, _imageTiling = properties.imageTiling, imageTiling = _imageTiling === void 0 ? false : _imageTiling, _imageMapJSON = properties.imageMapJSON, imageMapJSON = _imageMapJSON === void 0 ? null : _imageMapJSON, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);
                return part;
            }
        }
    ]);
    return Part;
}(_wrapNativeSuper(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcnQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNrIGZyb20gXCIuL21hc2tcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spO1xuXG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcblxuICAgIGlmIChjb2xvdXJSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0dXJlUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJQYXJ0IiwiaW1hZ2VzIiwiaW1hZ2VNYXAiLCJpbWFnZU5hbWVzIiwiaW1hZ2VUaWxpbmciLCJpbWFnZU1hcEpTT04iLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImluaXRpYWxpc2UiLCJjYW52YXMiLCJtYXJnaW5PZkVycm9yIiwiQ29sb3VyUmVuZGVyZXIiLCJmcm9tTm90aGluZyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwibWFza3MiLCJlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIiwiTWFzayIsImltYWdlc1RleHR1cmVSZW5kZXJlciIsIkltYWdlc1RleHR1cmVSZW5kZXJlciIsImZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmciLCJpbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsIkltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImNyZWF0ZUZhY2V0cyIsIm1hc2tGYWNldHMiLCJhZGRGYWNldHMiLCJjcmVhdGVCdWZmZXJzIiwicmVuZGVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJwYXJ0IiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBVVFBLElBQUk7Ozt5REFSUixRQUFROzREQUNMLFlBQVk7MkRBQ0wsb0JBQW9COzJEQUNiLDRCQUE0Qjs2REFDMUIsOEJBQThCO3dCQUV4QixzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBQSxBQUFNQSxJQUFJLGlCQUFWOzs7YUFBTUEsSUFBSSxDQUNYQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxFQUFFQyxlQUFlOzs7a0NBQzFGO1FBRVIsTUFBS04sTUFBTSxHQUFHQSxNQUFNLENBQUM7UUFDckIsTUFBS0MsUUFBUSxHQUFHQSxRQUFRLENBQUM7UUFDekIsTUFBS0MsVUFBVSxHQUFHQSxVQUFVLENBQUM7UUFDN0IsTUFBS0MsV0FBVyxHQUFHQSxXQUFXLENBQUM7UUFDL0IsTUFBS0MsWUFBWSxHQUFHQSxZQUFZLENBQUM7UUFDakMsTUFBS0MsY0FBYyxHQUFHQSxjQUFjLENBQUM7UUFDckMsTUFBS0MsZUFBZSxHQUFHQSxlQUFlLENBQUM7Ozs7O1lBR3pDQyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsQ0FBQ0MsTUFBTSxFQUFFQyxhQUFhLEVBQUU7Z0JBQ2hDLElBQU1KLGNBQWMsR0FBR0ssT0FBYyxRQUFBLENBQUNDLFdBQVcsQ0FBQ0gsTUFBTSxDQUFDLEVBQ25ESSxhQUFhLEdBQUcsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRSxFQUN2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