"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _part = _interopRequireDefault(require("../element/part"));
var _mask = _interopRequireDefault(require("../element/mask"));
var _camera = _interopRequireDefault(require("../element/camera"));
var _element = _interopRequireDefault(require("../element"));
var _userInput = _interopRequireDefault(require("../miscellaneous/userInput"));
var _vector = require("../maths/vector");
var _constants = require("../constants");
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
            value: function initialise(canvas, update, done, magnification) {
                var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this);
                userInput.initialise(canvas);
                initialiseMasks(this.masks, magnification);
                initialiseParts(this.parts, this.masks, update, canvas, magnification, (function() {
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
                var canvas = properties.canvas, update = properties.update, done = properties.done, _magnification = properties.magnification, magnification = _magnification === void 0 ? _constants.DEFAULT_MAGNIFICATION : _magnification, childElements = properties.childElements, masks = masksFromChildElements(childElements), parts = partsFromChildElements(childElements), camera = cameraFromChildElements(childElements), scene = _element.default.fromProperties(Scene, properties, parts, masks, camera, canvas);
                scene.initialise(canvas, update, done, magnification);
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
function initialiseMasks(masks, magnification) {
    masks.forEach(function(mask) {
        return mask.initialise(magnification, masks);
    });
}
function initialiseParts(parts, masks, update, canvas, magnification, done) {
    forEach(parts, function(part, next, done1, context, index) {
        var partsLength = parts.length, progress = (index + 1) / partsLength;
        part.initialise(canvas, masks, magnification);
        defer(function() {
            update && update(progress); ///
            next();
        });
    }, done);
}
function masksFromChildElements(childElements) {
    var masks = childElements.reduce(function(masks1, childElement) {
        if (_instanceof(childElement, _mask.default)) {
            var mask = childElement; ///
            masks1.push(mask);
        }
        return masks1;
    }, []);
    return masks;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBQYXJ0IGZyb20gXCIuLi9lbGVtZW50L3BhcnRcIjtcbmltcG9ydCBNYXNrIGZyb20gXCIuLi9lbGVtZW50L21hc2tcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2VsZW1lbnQvY2FtZXJhXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy91c2VySW5wdXRcIjtcblxuaW1wb3J0IHsgemVybzIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBERUZBVUxUX01BR05JRklDQVRJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucGFydHMgPSBwYXJ0cztcbiAgICB0aGlzLm1hc2tzID0gbWFza3M7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0LCAgLy8vXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjayk7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjYWxsYmFjayA9IHJlbmRlcjsgIC8vL1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUsIG1hZ25pZmljYXRpb24pIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB1c2VySW5wdXRIYW5kbGVyID0gdGhpcy51c2VySW5wdXRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgd2luZG93UmVzaXplSGFuZGxlciA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIGluaXRpYWxpc2VNYXNrcyh0aGlzLm1hc2tzLCBtYWduaWZpY2F0aW9uKTtcblxuICAgIGluaXRpYWxpc2VQYXJ0cyh0aGlzLnBhcnRzLCB0aGlzLm1hc2tzLCB1cGRhdGUsIGNhbnZhcywgbWFnbmlmaWNhdGlvbiwgKCkgPT4ge1xuICAgICAgd2luZG93Lm9ucmVzaXplID0gd2luZG93UmVzaXplSGFuZGxlcjtcblxuICAgICAgdXNlcklucHV0LmFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcik7XG5cbiAgICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cblxuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgdXBkYXRlLCBkb25lLCBtYWduaWZpY2F0aW9uID0gREVGQVVMVF9NQUdOSUZJQ0FUSU9OLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hc2tzID0gbWFza3NGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBwYXJ0cyA9IHBhcnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgY2FtZXJhID0gY2FtZXJhRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBwYXJ0cywgbWFza3MsIGNhbWVyYSwgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUsIG1hZ25pZmljYXRpb24pO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmVyKGNhbGxiYWNrKSB7XG4gIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlTWFza3MobWFza3MsIG1hZ25pZmljYXRpb24pIHtcbiAgbWFza3MuZm9yRWFjaCgobWFzaykgPT4gbWFzay5pbml0aWFsaXNlKG1hZ25pZmljYXRpb24sIG1hc2tzKSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VQYXJ0cyhwYXJ0cywgbWFza3MsIHVwZGF0ZSwgY2FudmFzLCBtYWduaWZpY2F0aW9uLCBkb25lKSB7XG4gIGZvckVhY2gocGFydHMsIChwYXJ0LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoLFxuICAgICAgICAgIHByb2dyZXNzID0gKCBpbmRleCArIDEgKSAvIHBhcnRzTGVuZ3RoO1xuXG4gICAgcGFydC5pbml0aWFsaXNlKGNhbnZhcywgbWFza3MsIG1hZ25pZmljYXRpb24pO1xuXG4gICAgZGVmZXIoKCkgPT4ge1xuICAgICAgdXBkYXRlICYmIHVwZGF0ZShwcm9ncmVzcyk7IC8vL1xuXG4gICAgICBuZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBtYXNrc0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgbWFza3MgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgobWFza3MsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrKSB7XG4gICAgICBjb25zdCBtYXNrID0gY2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICAgIG1hc2tzLnB1c2gobWFzayk7XG4gICAgfVxuICAgIHJldHVybiBtYXNrcztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBtYXNrcztcbn1cblxuZnVuY3Rpb24gcGFydHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKHBhcnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgUGFydCkge1xuICAgICAgY29uc3QgcGFydCA9IGNoaWxkRWxlbWVudDsgIC8vL1xuXG4gICAgICBwYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gcGFydHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYUZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY29uc3QgY2FtZXJhID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGNhbWVyYSwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGNhbWVyYSA9PT0gbnVsbCkge1xuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIENhbWVyYSkge1xuICAgICAgICBjYW1lcmEgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gY2FtZXJhO1xufVxuIl0sIm5hbWVzIjpbXSwibWFw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