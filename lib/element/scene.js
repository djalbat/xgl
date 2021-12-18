"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _part = _interopRequireDefault(require("../element/part"));
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
var Scene = /*#__PURE__*/ function(Element) {
    _inherits(Scene, Element);
    var _super = _createSuper(Scene);
    function Scene(parts, camera, canvas) {
        _classCallCheck(this, Scene);
        var _this;
        _this = _super.call(this);
        _this.parts = parts;
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
            key: "escapeKeyDownHandler",
            value: function escapeKeyDownHandler() {
                this.camera.reset();
                this.windowResizeHandler(); ///
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
                var _this = this;
                this.canvas.clear();
                this.parts.forEach(function(part) {
                    return part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, _this.canvas);
                });
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
                var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this), escapeKeyDownHandler = this.escapeKeyDownHandler.bind(this);
                this.parts.forEach(function(part) {
                    return part.initialise(canvas, marginOfError);
                });
                userInput.initialise(canvas);
                userInput.addUserInputHandler(userInputHandler);
                userInput.addEscapeKeyDownHandler(escapeKeyDownHandler);
                window.onresize = windowResizeHandler;
                this.windowResizeHandler(); ///
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var canvas = properties.canvas, childElements = properties.childElements, parts = (0, _element1).elementsFromChildElements(childElements, _part.default), camera = (0, _element1).elementFromChildElements(childElements, _camera.default), scene = _element.default.fromProperties(Scene, properties, parts, camera, canvas), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
                scene.initialise(canvas, marginOfError);
                return scene;
            }
        }
    ]);
    return Scene;
}(_wrapNativeSuper(_element.default));
exports.default = Scene;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGVzY2FwZUtleURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMuY2FtZXJhLnJlc2V0KCk7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMudXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgdGhpcy5jYW52YXMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlciA9IHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBQYXJ0KSxcbiAgICAgICAgICBjYW1lcmEgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2FtZXJhKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2NlbmUiLCJwYXJ0cyIsImNhbWVyYSIsImNhbnZhcyIsInVzZXJJbnB1dEhhbmRsZXIiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJyZW5kZXIiLCJiaW5kIiwidXBkYXRlIiwiZXNjYXBlS2V5RG93bkhhbmRsZXIiLCJyZXNldCIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImNsZWFyIiwiZm9yRWFjaCIsInBhcnQiLCJpbml0aWFsaXNlIiwibWFyZ2luT2ZFcnJvciIsInVzZXJJbnB1dCIsImZyb21Ob3RoaW5nIiwiYWRkVXNlcklucHV0SGFuZGxlciIsImFkZEVzY2FwZUtleURvd25IYW5kbGVyIiwid2luZG93Iiwib25yZXNpemUiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwic2NlbmUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBaUIsQ0FBakIsS0FBaUI7QUFDZixHQUFtQixDQUFuQixPQUFtQjtBQUNsQixHQUFZLENBQVosUUFBWTtBQUNWLEdBQTRCLENBQTVCLFVBQTRCO0FBRTVCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ0MsR0FBYSxDQUFiLFNBQWE7QUFDZSxHQUFzQixDQUF0QixTQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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