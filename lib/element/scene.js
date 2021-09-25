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
var Scene = /*#__PURE__*/ function(Element) {
    _inherits(Scene, Element);
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
            key: "prepare",
            value: function prepare() {
                this.masks.forEach(function(mask) {
                    return mask.prepare();
                });
                this.parts.forEach(function(part) {
                    return part.prepare();
                });
            }
        },
        {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
                var _this = this, _this1 = this;
                var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this), escapeKeyDownHandler = this.escapeKeyDownHandler.bind(this);
                this.masks.forEach(function(mask) {
                    return mask.initialise(_this.masks, marginOfError);
                });
                this.parts.forEach(function(part) {
                    return part.initialise(canvas, _this1.masks, marginOfError);
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
                var canvas = properties.canvas, childElements = properties.childElements, masks = (0, _element1).elementsFromChildElements(childElements, _mask.default), parts = (0, _element1).elementsFromChildElements(childElements, _part.default), camera = (0, _element1).elementFromChildElements(childElements, _camera.default), scene = _element.default.fromProperties(Scene, properties, parts, masks, camera, canvas), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
                scene.prepare();
                scene.initialise(canvas, marginOfError);
                return scene;
            }
        }
    ]);
    return Scene;
}(_wrapNativeSuper(_element.default));
exports.default = Scene;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIlBhcnQiLCJNYXNrIiwiQ2FtZXJhIiwiRWxlbWVudCIsIlVzZXJJbnB1dCIsInplcm8yIiwiREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IiLCJlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMiLCJlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIiwiU2NlbmUiLCJjb25zdHJ1Y3RvciIsInBhcnRzIiwibWFza3MiLCJjYW1lcmEiLCJjYW52YXMiLCJ1c2VySW5wdXRIYW5kbGVyIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwicmVuZGVyIiwiYmluZCIsInVwZGF0ZSIsImVzY2FwZUtleURvd25IYW5kbGVyIiwicmVzZXQiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsImZvckVhY2giLCJwYXJ0IiwicHJlcGFyZSIsIm1hc2siLCJpbml0aWFsaXNlIiwibWFyZ2luT2ZFcnJvciIsInVzZXJJbnB1dCIsImZyb21Ob3RoaW5nIiwiYWRkVXNlcklucHV0SGFuZGxlciIsImFkZEVzY2FwZUtleURvd25IYW5kbGVyIiwid2luZG93Iiwib25yZXNpemUiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwic2NlbmUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRUssR0FBaUIsQ0FBakIsS0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsS0FBaUI7QUFDZixHQUFtQixDQUFuQixPQUFt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LEtBQUssT0EzRXFELFNBQXNCLDRCQTJFOUMsYUFBYSxFQW5GeEMsS0FBaUIsV0FvRnhCLE1BQU0sT0E1RW9ELFNBQXNCLDJCQTRFOUMsYUFBYSxFQWxGdEMsT0FBbUIsV0FtRjVCLEtBQUssR0FsRkssUUFBWSxTQWtGTixjQUFjLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEdBQzlFLGFBQWEsR0EvRWlCLFNBQWE7Z0JBaUZqRCxLQUFLLENBQUMsT0FBTztnQkFFYixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxhQUFhO2dCQUV0QyxNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7OztXQW5Ga0IsS0FBSzttQkFQTixRQUFZO2tCQU9YLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhcnQgZnJvbSBcIi4uL2VsZW1lbnQvcGFydFwiO1xuaW1wb3J0IE1hc2sgZnJvbSBcIi4uL2VsZW1lbnQvbWFza1wiO1xuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZWxlbWVudC9jYW1lcmFcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMsIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIG1hc2tzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gICAgdGhpcy5tYXNrcyA9IG1hc2tzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGVzY2FwZUtleURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMuY2FtZXJhLnJlc2V0KCk7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMudXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgdGhpcy5jYW52YXMpKTtcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgdGhpcy5tYXNrcy5mb3JFYWNoKChtYXNrKSA9PiBtYXNrLnByZXBhcmUoKSk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucHJlcGFyZSgpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlciA9IHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWFza3MuZm9yRWFjaCgobWFzaykgPT4gbWFzay5pbml0aWFsaXNlKHRoaXMubWFza3MsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5pbml0aWFsaXNlKGNhbnZhcywgdGhpcy5tYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hc2tzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBNYXNrKSxcbiAgICAgICAgICBwYXJ0cyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgUGFydCksXG4gICAgICAgICAgY2FtZXJhID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENhbWVyYSksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1I7XG5cbiAgICBzY2VuZS5wcmVwYXJlKCk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiJdfQ==