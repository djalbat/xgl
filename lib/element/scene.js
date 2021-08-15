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
            value: function initialise(canvas) {
                var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this);
                this.masks.forEach((function(mask) {
                    return mask.initialise(this.masks);
                }).bind(this));
                this.parts.forEach((function(part) {
                    return part.initialise(canvas, this.masks);
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
                var canvas = properties.canvas, _magnification = properties.magnification, magnification = _magnification === void 0 ? _defaults.DEFAULT_MAGNIFICATION : _magnification, childElements = properties.childElements, masks = (0, _element1).elementsFromChildElements(childElements, _mask.default), parts = (0, _element1).elementsFromChildElements(childElements, _part.default), camera = (0, _element1).elementFromChildElements(childElements, _camera.default), scene = _element.default.fromProperties(Scene, properties, parts, masks, camera, canvas);
                scene.magnify(magnification);
                scene.initialise(canvas);
                return scene;
            }
        }
    ]);
    return Scene;
}(_wrapNativeSuper(_element.default));
exports.default = Scene;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgTWFzayBmcm9tIFwiLi4vZWxlbWVudC9tYXNrXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQUdOSUZJQ0FUSU9OIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMsIGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocGFydHMsIG1hc2tzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gICAgdGhpcy5tYXNrcyA9IG1hc2tzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0LnJlbmRlcih0aGlzLmNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkpO1xuICB9XG5cbiAgbWFnbmlmeShtYWduaWZpY2F0aW9uKSB7XG4gICAgdGhpcy5tYXNrcy5mb3JFYWNoKChtYXNrKSA9PiBtYXNrLm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0Lm1hZ25pZnkobWFnbmlmaWNhdGlvbikpO1xuXG4gICAgdGhpcy5jYW1lcmEubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdXNlcklucHV0SGFuZGxlciA9IHRoaXMudXNlcklucHV0SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMubWFza3MuZm9yRWFjaCgobWFzaykgPT4gbWFzay5pbml0aWFsaXNlKHRoaXMubWFza3MpKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5pbml0aWFsaXNlKGNhbnZhcywgdGhpcy5tYXNrcykpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gd2luZG93UmVzaXplSGFuZGxlcjtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIG1hZ25pZmljYXRpb24gPSBERUZBVUxUX01BR05JRklDQVRJT04sIGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFza3MgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIE1hc2spLFxuICAgICAgICAgIHBhcnRzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBQYXJ0KSxcbiAgICAgICAgICBjYW1lcmEgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2FtZXJhKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBtYXNrcywgY2FtZXJhLCBjYW52YXMpO1xuXG4gICAgc2NlbmUubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUssR0FBaUIsQ0FBakIsS0FBaUI7QUFDakIsR0FBaUIsQ0FBakIsS0FBaUI7QUFDZixHQUFtQixDQUFuQixPQUFtQjtBQUNsQixHQUFZLENBQVosUUFBWTtBQUNWLEdBQTRCLENBQTVCLFVBQTRCO0FBRTVCLEdBQWlCLENBQWpCLE9BQWlCO0FBQ0QsR0FBYSxDQUFiLFNBQWE7QUFDaUIsR0FBc0IsQ0FBdEIsU0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckUsS0FBSztjQUFMLEtBQUs7YUFBTCxLQUFLLENBQ1osS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTs4QkFEckIsS0FBSzs7aUVBQUwsS0FBSztjQUlqQixLQUFLLEdBQUcsS0FBSztjQUNiLEtBQUssR0FBRyxLQUFLO2NBQ2IsTUFBTSxHQUFHLE1BQU07Y0FDZixNQUFNLEdBQUcsTUFBTTs7O2lCQVBILEtBQUs7O1lBVXhCLEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxDQUFDO2dCQUN6RSxHQUFLLENBQUMsTUFB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