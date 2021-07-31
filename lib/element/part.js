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
var Part = /*#__PURE__*/ function(Element1) {
    _inherits(Part, Element1);
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
            value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
                this.colourRenderer && this.colourRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///
                this.textureRenderer && this.textureRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas, masks, magnification) {
                var textureRenderer = null;
                var colourRenderer = _colour.default.fromNothing(canvas);
                if (this.images) {
                    var imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
                    textureRenderer = imagesTextureRenderer; ///
                }
                if (this.imageMap) {
                    var imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
                    textureRenderer = imageMapTextureRenderer; ///
                }
                var childElements = this.getChildElements();
                childElements.forEach((function(childElement) {
                    return childElement.createFacets(this.hidden, magnification);
                }).bind(this));
                childElements.forEach(function(childElement) {
                    return childElement.amendFacets(masks);
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
                var _images1 = properties.images, images = _images1 === void 0 ? null : _images1, _imageMap1 = properties.imageMap, imageMap = _imageMap1 === void 0 ? null : _imageMap1, _imageNames = properties.imageNames, imageNames = _imageNames === void 0 ? null : _imageNames, _imageTiling = properties.imageTiling, imageTiling = _imageTiling === void 0 ? false : _imageTiling, _imageMapJSON = properties.imageMapJSON, imageMapJSON = _imageMapJSON === void 0 ? null : _imageMapJSON, _hidden = properties.hidden, hidden = _hidden === void 0 ? false : _hidden, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);
                return part;
            }
        }
    ]);
    return Part;
}(_wrapNativeSuper(_element.default));
exports.default = Part;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpOyAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFza3MsIG1hZ25pZmljYXRpb24pIHtcbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXApIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuLCBtYWduaWZpY2F0aW9uKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKG1hc2tzKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG5cbiAgICBjb2xvdXJSZW5kZXJlciAmJiBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyICYmIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7IC8vL1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCwgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUSxHQUFZLENBQVosUUFBWTtBQUNMLEdBQW9CLENBQXBCLE9BQW9CO0FBQ2IsR0FBNEIsQ0FBNUIsT0FBNEI7QUFDMUIsR0FBOEIsQ0FBOUIsU0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0MsSUFBSTtjQUFKLElBQUk7YUFBSixJQUFJLENBQ1gsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU07OEJBRHpGLElBQUk7O2lFQUFKLElBQUk7Y0FJaEIsTUFBTSxHQUFHLE1BQU07Y0FDZixRQUFRLEdBQUcsUUFBUTtjQUNuQixVQUFVLEdBQUcsVUFBVTtjQUN2QixXQUFXLEdBQUcsV0FBVztjQUN6QixZQUFZLEdBQUcsWUFBWTtjQUMzQixjQUFjLEdBQUcsY0FBYztjQUMvQixlQUFlLEdBQUcsZUFBZTtjQUVqQyxNQUFNLEdBQUcsTUFBTTs7O2lCQVpILElBQUk7O1lBZXZCLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLENBQUM7cUJBQzFGLGNBQWMsU0FBUyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVB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