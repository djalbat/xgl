"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Scene;
    }
});
var _part = /*#__PURE__*/ _interopRequireDefault(require("../element/part"));
var _camera = /*#__PURE__*/ _interopRequireDefault(require("../element/camera"));
var _element = /*#__PURE__*/ _interopRequireDefault(require("../element"));
var _userInput = /*#__PURE__*/ _interopRequireDefault(require("../miscellaneous/userInput"));
var _vector = require("../maths/vector");
var _defaults = require("../defaults");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var Scene = /*#__PURE__*/ function(Element) {
    _inherits(Scene, Element);
    var _super = _createSuper(Scene);
    function Scene(parts, camera, canvas) {
        _classCallCheck(this, Scene);
        var _this;
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "escapeKeyDownHandler", function() {
            _this.camera.reset();
            _this.windowResizeHandler(); ///
        });
        _defineProperty(_assertThisInitialized(_this), "windowResizeHandler", function() {
            var clientWidth = _this.canvas.getClientWidth(), clientHeight = _this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
            _this.canvas.resize(width, height);
            var relativeMouseCoordinates = (0, _vector.zero2)(), mouseWheelDelta = 0, shiftKeyDown = false; ///
            _this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        });
        _defineProperty(_assertThisInitialized(_this), "userInputHandler", function(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
            var render = _this.render.bind(_assertThisInitialized(_this));
            _this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, _this.canvas, render);
        });
        _this.parts = parts;
        _this.camera = camera;
        _this.canvas = canvas;
        return _this;
    }
    _createClass(Scene, [
        {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
                var userInput = _userInput.default.fromNothing();
                this.parts.forEach(function(part) {
                    return part.initialise(canvas, marginOfError);
                });
                userInput.initialise(canvas);
                userInput.addUserInputHandler(this.userInputHandler);
                userInput.addEscapeKeyDownHandler(this.escapeKeyDownHandler);
                window.onresize = this.windowResizeHandler;
                this.windowResizeHandler(); ///
            }
        },
        {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
                var _this = this;
                this.canvas.clear();
                this.parts.forEach(function(part) {
                    return part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, _this.canvas);
                });
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var canvas = properties.canvas, childElements = properties.childElements, parts = (0, _element1.elementsFromChildElements)(childElements, _part.default), camera = (0, _element1.elementFromChildElements)(childElements, _camera.default), scene = _element.default.fromProperties(Scene, properties, parts, camera, canvas), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
                scene.initialise(canvas, marginOfError);
                return scene;
            }
        }
    ]);
    return Scene;
}(_wrapNativeSuper(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlciA9IChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih0aGlzLnVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyO1xuXG4gICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0LnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCB0aGlzLmNhbnZhcykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYXJ0cyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgUGFydCksXG4gICAgICAgICAgY2FtZXJhID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENhbWVyYSksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUjtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTY2VuZSIsInBhcnRzIiwiY2FtZXJhIiwiY2FudmFzIiwiZXNjYXBlS2V5RG93bkhhbmRsZXIiLCJyZXNldCIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJ6ZXJvMiIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsInVzZXJJbnB1dEhhbmRsZXIiLCJyZW5kZXIiLCJiaW5kIiwidXBkYXRlIiwiaW5pdGlhbGlzZSIsIm1hcmdpbk9mRXJyb3IiLCJ1c2VySW5wdXQiLCJVc2VySW5wdXQiLCJmcm9tTm90aGluZyIsImZvckVhY2giLCJwYXJ0IiwiYWRkVXNlcklucHV0SGFuZGxlciIsImFkZEVzY2FwZUtleURvd25IYW5kbGVyIiwid2luZG93Iiwib25yZXNpemUiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImNsZWFyIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMiLCJQYXJ0IiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwiQ2FtZXJhIiwic2NlbmUiLCJFbGVtZW50IiwiREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVdRQSxLQUFLOzs7eURBVFQsaUJBQWlCOzJEQUNmLG1CQUFtQjs0REFDbEIsWUFBWTs4REFDViw0QkFBNEI7c0JBRTVCLGlCQUFpQjt3QkFDQyxhQUFhO3dCQUNlLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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