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
                var canvas = properties.canvas, context = properties.context, childElements = properties.childElements, parts = (0, _element1).elementsFromChildElements(childElements, _part.default), camera = (0, _element1).elementFromChildElements(childElements, _camera.default), scene = _element.default.fromProperties(Scene, properties, parts, camera, canvas), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
                scene.initialise(canvas, marginOfError);
                return scene;
            }
        }
    ]);
    return Scene;
}(_wrapNativeSuper(_element.default));
exports.default = Scene;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlciA9IHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHdpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHBhcnQucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIHRoaXMuY2FudmFzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBjb250ZXh0LCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBQYXJ0KSxcbiAgICAgICAgICBjYW1lcmEgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2FtZXJhKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbWFyZ2luT2ZFcnJvciA9IERFRkFVTFRfTUFSR0lOX09GX0VSUk9SO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2NlbmUiLCJwYXJ0cyIsImNhbWVyYSIsImNhbnZhcyIsImVzY2FwZUtleURvd25IYW5kbGVyIiwicmVzZXQiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwicmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzIiwibW91c2VXaGVlbERlbHRhIiwic2hpZnRLZXlEb3duIiwidXNlcklucHV0SGFuZGxlciIsInJlbmRlciIsImJpbmQiLCJ1cGRhdGUiLCJpbml0aWFsaXNlIiwibWFyZ2luT2ZFcnJvciIsInVzZXJJbnB1dCIsImZyb21Ob3RoaW5nIiwiZm9yRWFjaCIsInBhcnQiLCJhZGRVc2VySW5wdXRIYW5kbGVyIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiY2xlYXIiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJjb250ZXh0IiwiY2hpbGRFbGVtZW50cyIsInNjZW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVLLEdBQWlCLENBQWpCLEtBQWlCO0FBQ2YsR0FBbUIsQ0FBbkIsT0FBbUI7QUFDbEIsR0FBWSxDQUFaLFFBQVk7QUFDVixHQUE0QixDQUE1QixVQUE0QjtBQUU1QixHQUFpQixDQUFqQixPQUFpQjtBQUNDLEdBQWEsQ0FBYixTQUFhO0FBQ2UsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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