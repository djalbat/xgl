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
var _mask = /*#__PURE__*/ _interop_require_default(require("./mask"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _colour = /*#__PURE__*/ _interop_require_default(require("../renderer/colour"));
var _images = /*#__PURE__*/ _interop_require_default(require("../renderer/texture/images"));
var _imageMap = /*#__PURE__*/ _interop_require_default(require("../renderer/texture/imageMap"));
var _element1 = require("../utilities/element");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var Part = /*#__PURE__*/ function(Element) {
    _inherits(Part, Element);
    var _super = _create_super(Part);
    function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
        _class_call_check(this, Part);
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
    _create_class(Part, [
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
                    childElement.createFacets(marginOfError);
                });
                childElements.forEach(function(childElement) {
                    childElement.maskFacets(masks, marginOfError);
                });
                childElements.forEach(function(childElement) {
                    childElement.addFacets(colourRenderer, textureRenderer);
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
                var _properties_images = properties.images, images = _properties_images === void 0 ? null : _properties_images, _properties_imageMap = properties.imageMap, imageMap = _properties_imageMap === void 0 ? null : _properties_imageMap, _properties_imageNames = properties.imageNames, imageNames = _properties_imageNames === void 0 ? null : _properties_imageNames, _properties_imageTiling = properties.imageTiling, imageTiling = _properties_imageTiling === void 0 ? false : _properties_imageTiling, _properties_imageMapJSON = properties.imageMapJSON, imageMapJSON = _properties_imageMapJSON === void 0 ? null : _properties_imageMapJSON, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);
                return part;
            }
        }
    ]);
    return Part;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNrIGZyb20gXCIuL21hc2tcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXIgZnJvbSBcIi4uL3JlbmRlcmVyL2NvbG91clwiO1xuaW1wb3J0IEltYWdlc1RleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZXNcIjtcbmltcG9ydCBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spO1xuXG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICB9KTtcblxuICAgIGlmIChjb2xvdXJSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0dXJlUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGltYWdlcyA9IG51bGwsIGltYWdlTWFwID0gbnVsbCwgaW1hZ2VOYW1lcyA9IG51bGwsIGltYWdlVGlsaW5nID0gZmFsc2UsIGltYWdlTWFwSlNPTiA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhcnQiLCJpbWFnZXMiLCJpbWFnZU1hcCIsImltYWdlTmFtZXMiLCJpbWFnZVRpbGluZyIsImltYWdlTWFwSlNPTiIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiaW5pdGlhbGlzZSIsImNhbnZhcyIsIm1hcmdpbk9mRXJyb3IiLCJDb2xvdXJSZW5kZXJlciIsImZyb21Ob3RoaW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJtYXNrcyIsImVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMiLCJNYXNrIiwiaW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyIsImltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIiLCJmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04iLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlRmFjZXRzIiwibWFza0ZhY2V0cyIsImFkZEZhY2V0cyIsImNyZWF0ZUJ1ZmZlcnMiLCJyZW5kZXIiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInBhcnQiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjs4REFDRzs2REFDTzs2REFDTzsrREFDRTt3QkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBQSxBQUFNQSxxQkFBTjtjQUFNQTsrQkFBQUE7YUFBQUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQ0FEakZQOzs7UUFJakIsTUFBS0MsTUFBTSxHQUFHQTtRQUNkLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxXQUFXLEdBQUdBO1FBQ25CLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsY0FBYyxHQUFHQTtRQUN0QixNQUFLQyxlQUFlLEdBQUdBOzs7a0JBVk5QOztZQWFuQlEsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLE1BQU0sRUFBRUMsYUFBYTtnQkFDOUIsSUFBTUosaUJBQWlCSyxlQUFjLENBQUNDLFdBQVcsQ0FBQ0gsU0FDNUNJLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0MsUUFBUUMsSUFBQUEsbUNBQXlCLEVBQUNILGVBQWVJLGFBQUk7Z0JBRTNELElBQUlWLGtCQUFrQjtnQkFFdEIsSUFBSSxJQUFJLENBQUNOLE1BQU0sS0FBSyxNQUFNO29CQUN4QixJQUFNaUIsd0JBQXdCQyxlQUFxQixDQUFDQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDRSxVQUFVLEVBQUUsSUFBSSxDQUFDQyxXQUFXLEVBQUVLO29CQUV2SUYsa0JBQWtCVyx1QkFBd0IsR0FBRztnQkFDL0M7Z0JBRUEsSUFBSSxJQUFJLENBQUNoQixRQUFRLEtBQUssTUFBTTtvQkFDMUIsSUFBTW1CLDBCQUEwQkMsaUJBQXVCLENBQUNDLDJCQUEyQixDQUFDLElBQUksQ0FBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUNHLFlBQVksRUFBRUk7b0JBRXRIRixrQkFBa0JjLHlCQUEwQixHQUFHO2dCQUNqRDtnQkFFQVIsY0FBY1csT0FBTyxDQUFDLFNBQUNDO29CQUNyQkEsYUFBYUMsWUFBWSxDQUFDaEI7Z0JBQzVCO2dCQUVBRyxjQUFjVyxPQUFPLENBQUMsU0FBQ0M7b0JBQ3JCQSxhQUFhRSxVQUFVLENBQUNaLE9BQU9MO2dCQUNqQztnQkFFQUcsY0FBY1csT0FBTyxDQUFDLFNBQUNDO29CQUNyQkEsYUFBYUcsU0FBUyxDQUFDdEIsZ0JBQWdCQztnQkFDekM7Z0JBRUEsSUFBSUQsbUJBQW1CLE1BQU07b0JBQzNCQSxlQUFldUIsYUFBYSxDQUFDcEI7Z0JBQy9CO2dCQUVBLElBQUlGLG9CQUFvQixNQUFNO29CQUM1QkEsZ0JBQWdCc0IsYUFBYSxDQUFDcEI7Z0JBQ2hDO2dCQUVBLElBQUksQ0FBQ0gsY0FBYyxHQUFHQTtnQkFFdEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1lBQ3pCOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFMUIsTUFBTTtnQkFDNUYsSUFBSSxDQUFDSCxjQUFjLElBQUksSUFBSSxDQUFDQSxjQUFjLENBQUN3QixNQUFNLENBQUNDLGVBQWVDLGVBQWVDLGdCQUFnQkMsaUJBQWlCQyxrQkFBa0IxQixTQUFVLEdBQUc7Z0JBRWhKLElBQUksQ0FBQ0YsZUFBZSxJQUFJLElBQUksQ0FBQ0EsZUFBZSxDQUFDdUIsTUFBTSxDQUFDQyxlQUFlQyxlQUFlQyxnQkFBZ0JDLGlCQUFpQkMsa0JBQWtCMUIsU0FBVSxHQUFHO1lBQ3BKOzs7O1lBRU8yQixLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5Qix5QkFBd0dBLFdBQWhHcEMsUUFBQUEseUNBQVMsa0RBQXVGb0MsV0FBakZuQyxVQUFBQSw2Q0FBVyxzREFBc0VtQyxXQUFoRWxDLFlBQUFBLGlEQUFhLHlEQUFtRGtDLFdBQTdDakMsYUFBQUEsbURBQWMsNERBQStCaUMsV0FBeEJoQyxjQUFBQSxxREFBZSxpQ0FDekZDLGlCQUFpQixNQUNqQkMsa0JBQWtCLE1BQ2xCK0IsT0FBT0MsZ0JBQU8sQ0FBQ0gsY0FBYyxDQW5FbEJwQyxNQW1FeUJxQyxZQUFZcEMsUUFBUUMsVUFBVUMsWUFBWUMsYUFBYUMsY0FBY0MsZ0JBQWdCQztnQkFFL0gsT0FBTytCO1lBQ1Q7OztXQXRFbUJ0QztxQkFBYXVDLGdCQUFPIn0=