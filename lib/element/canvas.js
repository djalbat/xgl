"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("../element"));
var _transform = require("../utilities/transform");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
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
var _Element;
var CanvasElement = function(Element1) {
    _inherits(CanvasElement, _element.default);
    function CanvasElement(transform, facets, mask, hidden) {
        _classCallCheck(this, CanvasElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasElement).call(this));
        _this.transform = transform;
        _this.facets = facets;
        _this.mask = mask;
        _this.hidden = hidden;
        return _this;
    }
    _createClass(CanvasElement, [
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
                    var element = this; ///
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
                hidden = hidden || this.hidden; ///
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
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
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
    return CanvasElement;
}(_wrapNativeSuper(_element.default));
exports.default = CanvasElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGhpZGRlbiA9IGhpZGRlbiB8fCB0aGlzLmhpZGRlbjsgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhoaWRkZW4pKTtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBhbWVuZEZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmFwcGx5TWFzayh0aGlzLm1hc2spO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2NhbGUgPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIG1hc2sgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCByb3RhdGlvbnMsIHBvc2l0aW9uKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFUSxRQUFZO0lBRUMsVUFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJFL0IsUUFBTztJQXpFWixhQUFhLFlBQVMsUUFBTztjQUE3QixhQUFhLEVBSmQsUUFBWTthQUlYLGFBQWEsQ0FDcEIsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTTs4QkFEeEIsYUFBYTs7aUVBQWIsYUFBYTtjQUl6QixTQUFTLEdBQUcsU0FBUztjQUNyQixNQUFNLEdBQUcsTUFBTTtjQUNmLElBQUksR0FBRyxJQUFJO2NBRVgsTUFBTSxHQUFHLE1BQU07OztpQkFSSCxhQUFhOztZQVdoQyxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZOzRCQUNFLFNBQVM7Ozs7WUFHdkIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUzs0QkFDSyxNQUFNOzs7O1lBR3BCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU87NEJBQ08sSUFBSTs7OztZQUdsQixHQUFTLEdBQVQs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