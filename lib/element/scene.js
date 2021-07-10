"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _part = _interopRequireDefault(require("../element/part"));
var _camera = _interopRequireDefault(require("../element/camera"));
var _element = _interopRequireDefault(require("../element"));
var _userInput = _interopRequireDefault(require("../miscellaneous/userInput"));
var _vector = require("../maths/vector");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var forEach = _necessary.asynchronousUtilities.forEach;
var Scene = /*#__PURE__*/ function(Element1) {
    _inherits(Scene, Element1);
    function Scene(parts, camera, canvas) {
        _classCallCheck(this, Scene);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this));
        _this.parts = parts;
        _this.camera = camera;
        _this.canvas = canvas;
        return _this;
    }
    _createClass(Scene, [
        {
            key: "windowResizeHandler",
            value: function windowResizeHandler() {
                var clientWidth = this.canvas.getClientWidth(), clientHeight = this.canvas.getClientHeight(), width = clientWidth, height = clientHeight, render = this.render.bind(this), callback = render; ///
                this.canvas.resize(width, height);
                var relativeMouseCoordinates = (0, _vector).zero2(), mouseWheelDelta = 0, shiftKeyDown = false; ///
                this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
            }
        },
        {
            key: "userInputHandler",
            value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
                var width = this.canvas.getWidth(), height = this.canvas.getHeight(), render = this.render.bind(this), callback = render; ///
                this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback);
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
            key: "initialise",
            value: function initialise(canvas, update, done) {
                var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this);
                userInput.initialise(canvas);
                initialiseParts(this.parts, update, canvas, (function() {
                    window.onresize = windowResizeHandler;
                    userInput.addUserInputHandler(userInputHandler);
                    this.windowResizeHandler(); ///
                    done && done(); ///
                }).bind(this));
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var canvas = properties.canvas, done = properties.done, update = properties.update, childElements = properties.childElements, parts = partsFromChildElements(childElements), camera = cameraFromChildElements(childElements), scene = _element.default.fromProperties(Scene, properties, parts, camera, canvas);
                scene.initialise(canvas, update, done);
                return scene;
            }
        }
    ]);
    return Scene;
}(_wrapNativeSuper(_element.default));
exports.default = Scene;
function defer(callback) {
    setTimeout(callback, 0);
}
function initialiseParts(parts, update, canvas, done) {
    forEach(parts, function(part, next, done1, context, index) {
        var partsLength = parts.length, progress = (index + 1) / partsLength;
        part.initialise(canvas);
        defer(function() {
            update && update(progress); ///
            next();
        });
    }, done);
}
function partsFromChildElements(childElements) {
    var parts = childElements.reduce(function(parts1, childElement) {
        if (_instanceof(childElement, _part.default)) {
            var part = childElement; ///
            parts1.push(part);
        }
        return parts1;
    }, []);
    return parts;
}
function cameraFromChildElements(childElements) {
    var camera = childElements.reduce(function(camera1, childElement) {
        if (camera1 === null) {
            if (_instanceof(childElement, _camera.default)) {
                camera1 = childElement; ///
            }
        }
        return camera1;
    }, null);
    return camera;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYXJ0IGZyb20gXCIuLi9lbGVtZW50L3BhcnRcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2VsZW1lbnQvY2FtZXJhXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy91c2VySW5wdXRcIjtcblxuaW1wb3J0IHsgemVybzIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQsICAvLy9cbiAgICAgICAgICByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNhbGxiYWNrID0gcmVuZGVyOyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHVzZXJJbnB1dEhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNhbGxiYWNrID0gcmVuZGVyOyAgLy8vXG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgY2FsbGJhY2spO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0LnJlbmRlcih0aGlzLmNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSkge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IFVzZXJJbnB1dC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHVzZXJJbnB1dEhhbmRsZXIgPSB0aGlzLnVzZXJJbnB1dEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB3aW5kb3dSZXNpemVIYW5kbGVyID0gdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB1c2VySW5wdXQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgaW5pdGlhbGlzZVBhcnRzKHRoaXMucGFydHMsIHVwZGF0ZSwgY2FudmFzLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub25yZXNpemUgPSB3aW5kb3dSZXNpemVIYW5kbGVyO1xuXG4gICAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKTtcblxuICAgICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuXG4gICAgICBkb25lICYmIGRvbmUoKTsgLy8vXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2FudmFzLCBkb25lLCB1cGRhdGUsIGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFydHMgPSBwYXJ0c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIGNhbWVyYSA9IGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgcGFydHMsIGNhbWVyYSwgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmVyKGNhbGxiYWNrKSB7XG4gIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlUGFydHMocGFydHMsIHVwZGF0ZSwgY2FudmFzLCBkb25lKSB7XG4gIGZvckVhY2gocGFydHMsIChwYXJ0LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoLFxuICAgICAgICAgIHByb2dyZXNzID0gKCBpbmRleCArIDEgKSAvIHBhcnRzTGVuZ3RoO1xuXG4gICAgcGFydC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICBkZWZlcigoKSA9PiB7XG4gICAgICB1cGRhdGUgJiYgdXBkYXRlKHByb2dyZXNzKTsgLy8vXG5cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjb25zdCBwYXJ0cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChwYXJ0cywgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIFBhcnQpIHtcbiAgICAgIGNvbnN0IHBhcnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBjYW1lcmFGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IGNhbWVyYSA9IGNoaWxkRWxlbWVudHMucmVkdWNlKChjYW1lcmEsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjYW1lcmEgPT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDYW1lcmEpIHtcbiAgICAgICAgY2FtZXJhID0gY2hpbGRFbGVtZW50OyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGNhbWVyYTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUUwQixHQUFXLENBQVgsVUFBVztBQUVoQyxHQUFpQixDQUFqQixLQUFpQjtBQUNmLEdBQW1CLENBQW5CLE9BQW1CO0FBQ2xCLEdBQVksQ0FBWixRQUFZO0FBQ1YsR0FBNEIsQ0FBNUIsVUFBNEI7QUFFNUIsR0FBaUIsQ0FBakIsT0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZDLEdBQUssQ0FBRyxPQUFPLEdBVHVCLFVBQVcsdUJBU3pDLE9BQU87SUFFTSxLQUFLO2NBQUwsS0FBSzthQUFMLEtBQUssQ0FDWixLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU07OEJBRGQsS0FBSzs7aUVBQUwsS0FBSztjQUlqQixLQUFLLEdBQUcsS0FBSztjQUViLE1BQU0sR0FBRyxNQUFNO2NBRWYsTUFBTSxHQUFHLE1BQU07OztpQkFSSCxLQUFLOztZQVd4QixHQUFtQixHQUFuQixtQkFBbUI7NEJBQW5CLG1CQUFtQixHQUFHLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQyxXQUFXLFFBQVEsTUFBTSxDQUFDLGNBQWMsSUFDeEMsWUFBWSxRQUFRLE1BQU0sQ0FBQyxlQUFlLElBQzFDLEtBQUssR0FBRyxXQUFXLEVBQ25CLE1BQU0sR0FBRyxZQUFZLEVBQ3JCLE1BQU0sUUFBUSxNQUFNLENBQUMsSUFBSSxRQUN6QixRQUFRLEdBQUcsTUFBTSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTTtnQkFFaEMs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