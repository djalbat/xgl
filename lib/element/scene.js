"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _part = _interopRequireDefault(require("../element/part"));
var _mask = _interopRequireDefault(require("../element/mask"));
var _camera = _interopRequireDefault(require("../element/camera"));
var _element = _interopRequireDefault(require("../element"));
var _userInput = _interopRequireDefault(require("../miscellaneous/userInput"));
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
var Scene = /*#__PURE__*/ function(Element1) {
    _inherits(Scene, Element1);
    function Scene(parts, masks, camera, canvas) {
        _classCallCheck(this, Scene);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this));
        _this.parts = parts;
        _this.masks = masks;
        _this.camera = camera;
        _this.canvas = canvas;
        return _this;
    }
    _createClass(Scene, [
        {
            key: "userInputHandler",
            value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
                var render = this.render.bind(this);
                this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, this.canvas, render);
            }
        },
        {
            key: "windowResizeHandler",
            value: function windowResizeHandler() {
                var clientWidth = this.canvas.getClientWidth(), clientHeight = this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
                this.canvas.resize(width, height);
                var relativeMouseCoordinates = (0, _vector).zero2(), mouseWheelDelta = 0, shiftKeyDown = false; ///
                this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
            }
        },
        {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
                this.canvas.clear();
                this.parts.forEach((function(part) {
                    return part.render(this.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
                }).bind(this));
            }
        },
        {
            key: "magnify",
            value: function magnify(magnification) {
                this.masks.forEach(function(mask) {
                    return mask.magnify(magnification);
                });
                this.parts.forEach(function(part) {
                    return part.magnify(magnification);
                });
                this.camera.magnify(magnification);
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
                var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this);
                this.masks.forEach((function(mask) {
                    return mask.initialise(this.masks, marginOfError);
                }).bind(this));
                this.parts.forEach((function(part) {
                    return part.initialise(canvas, this.masks, marginOfError);
                }).bind(this));
                userInput.initialise(canvas);
                userInput.addUserInputHandler(userInputHandler);
                window.onresize = windowResizeHandler;
                this.windowResizeHandler(); ///
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var canvas = properties.canvas, _magnification = properties.magnification, magnification = _magnification === void 0 ? _defaults.DEFAULT_MAGNIFICATION : _magnification, childElements = properties.childElements, masks = (0, _element1).elementsFromChildElements(childElements, _mask.default), parts = (0, _element1).elementsFromChildElements(childElements, _part.default), camera = (0, _element1).elementFromChildElements(childElements, _camera.default), scene = _element.default.fromProperties(Scene, properties, parts, masks, camera, canvas), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR * magnification * magnification;
                scene.magnify(magnification);
                scene.initialise(canvas, marginOfError);
                return scene;
            }
        }
    ]);
    return Scene;
}(_wrapNativeSuper(_element.default));
exports.default = Scene;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgTWFzayBmcm9tIFwiLi4vZWxlbWVudC9tYXNrXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQUdOSUZJQ0FUSU9OLCBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzLCBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBtYXNrcywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMubWFza3MgPSBtYXNrcztcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIHVzZXJJbnB1dEhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikge1xuICAgIGNvbnN0IHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgdGhpcy5jYW52YXMsIHJlbmRlcik7XG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMudXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIHRoaXMubWFza3MuZm9yRWFjaCgobWFzaykgPT4gbWFzay5tYWduaWZ5KG1hZ25pZmljYXRpb24pKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5tYWduaWZ5KG1hZ25pZmljYXRpb24pKTtcblxuICAgIHRoaXMuY2FtZXJhLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IFVzZXJJbnB1dC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHVzZXJJbnB1dEhhbmRsZXIgPSB0aGlzLnVzZXJJbnB1dEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB3aW5kb3dSZXNpemVIYW5kbGVyID0gdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm1hc2tzLmZvckVhY2goKG1hc2spID0+IG1hc2suaW5pdGlhbGlzZSh0aGlzLm1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQuaW5pdGlhbGlzZShjYW52YXMsIHRoaXMubWFza3MsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBtYWduaWZpY2F0aW9uID0gREVGQVVMVF9NQUdOSUZJQ0FUSU9OLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKSxcbiAgICAgICAgICBwYXJ0cyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgUGFydCksXG4gICAgICAgICAgY2FtZXJhID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENhbWVyYSksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgKiBtYWduaWZpY2F0aW9uICogbWFnbmlmaWNhdGlvbjtcblxuICAgIHNjZW5lLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQWlCLENBQWpCLEtBQWlCO0FBQ2pCLEdBQWlCLENBQWpCLEtBQWlCO0FBQ2YsR0FBbUIsQ0FBbkIsT0FBbUI7QUFDbEIsR0FBWSxDQUFaLFFBQVk7QUFDVixHQUE0QixDQUE1QixVQUE0QjtBQUU1QixHQUFpQixDQUFqQixPQUFpQjtBQUN3QixHQUFhLENBQWIsU0FBYTtBQUNSLEdBQXNCLENBQXRCLFNBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJFLEtBQUs7Y0FBTCxLQUFLO2FBQUwsS0FBSyxDQUNaLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU07OEJBRHJCLEtBQUs7O2lFQUFMLEtBQUs7Y0FJakIsS0FBSyxHQUFHLEtBQUs7Y0FDYixL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