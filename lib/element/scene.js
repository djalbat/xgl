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
        _this.parts = parts;
        _this.camera = camera;
        _this.canvas = canvas;
        return _this;
    }
    _createClass(Scene, [
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
                var relativeMouseCoordinates = (0, _vector.zero2)(), mouseWheelDelta = 0, shiftKeyDown = false; ///
                this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
            }
        },
        {
            key: "userInputHandler",
            value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
                var render = this.render.bind(this);
                this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, this.canvas, render);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlciA9IHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIHRoaXMuY2FudmFzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBQYXJ0KSxcbiAgICAgICAgICBjYW1lcmEgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2FtZXJhKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNjZW5lIiwicGFydHMiLCJjYW1lcmEiLCJjYW52YXMiLCJlc2NhcGVLZXlEb3duSGFuZGxlciIsInJlc2V0Iiwid2luZG93UmVzaXplSGFuZGxlciIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlc2l6ZSIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsInplcm8yIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwidXNlcklucHV0SGFuZGxlciIsInJlbmRlciIsImJpbmQiLCJ1cGRhdGUiLCJpbml0aWFsaXNlIiwibWFyZ2luT2ZFcnJvciIsInVzZXJJbnB1dCIsIlVzZXJJbnB1dCIsImZyb21Ob3RoaW5nIiwiZm9yRWFjaCIsInBhcnQiLCJhZGRVc2VySW5wdXRIYW5kbGVyIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiY2xlYXIiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyIsIlBhcnQiLCJlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMiLCJDYW1lcmEiLCJzY2VuZSIsIkVsZW1lbnQiLCJERUZBVUxUX01BUkdJTl9PRl9FUlJPUiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBV1FBLEtBQUs7Ozt5REFU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