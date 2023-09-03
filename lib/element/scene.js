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
var _part = /*#__PURE__*/ _interop_require_default(require("../element/part"));
var _camera = /*#__PURE__*/ _interop_require_default(require("../element/camera"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _userInput = /*#__PURE__*/ _interop_require_default(require("../miscellaneous/userInput"));
var _vector = require("../maths/vector");
var _defaults = require("../defaults");
var _element1 = require("../utilities/element");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var Scene = /*#__PURE__*/ function(Element) {
    _inherits(Scene, Element);
    var _super = _create_super(Scene);
    function Scene(parts, camera, canvas) {
        _class_call_check(this, Scene);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "escapeKeyDownHandler", function() {
            _this.camera.reset();
            _this.windowResizeHandler(); ///
        });
        _define_property(_assert_this_initialized(_this), "windowResizeHandler", function() {
            var clientWidth = _this.canvas.getClientWidth(), clientHeight = _this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
            _this.canvas.resize(width, height);
            var relativeMouseCoordinates = (0, _vector.zero2)(), mouseWheelDelta = 0, shiftKeyDown = false; ///
            _this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        });
        _define_property(_assert_this_initialized(_this), "userInputHandler", function(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
            var render = _this.render.bind(_assert_this_initialized(_this));
            _this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, _this.canvas, render);
        });
        _this.parts = parts;
        _this.camera = camera;
        _this.canvas = canvas;
        return _this;
    }
    _create_class(Scene, [
        {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
                var userInput = _userInput.default.fromNothing();
                this.parts.forEach(function(part) {
                    part.initialise(canvas, marginOfError);
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
                    part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, _this.canvas);
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
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5wYXJ0cyA9IHBhcnRzO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZXNjYXBlS2V5RG93bkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jYW1lcmEucmVzZXQoKTtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zdCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSB6ZXJvMigpLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGEgPSAwLCAgLy8vXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2U7IC8vL1xuXG4gICAgdGhpcy51c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pO1xuICB9XG5cbiAgdXNlcklucHV0SGFuZGxlciA9IChyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB0aGlzLmNhbnZhcywgcmVuZGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gVXNlcklucHV0LmZyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgIHBhcnQuaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdXNlcklucHV0LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHRoaXMudXNlcklucHV0SGFuZGxlcik7XG5cbiAgICB1c2VySW5wdXQuYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIodGhpcy5lc2NhcGVLZXlEb3duSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXI7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgIHBhcnQucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIHRoaXMuY2FudmFzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFydHMgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFBhcnQpLFxuICAgICAgICAgIGNhbWVyYSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDYW1lcmEpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgcGFydHMsIGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1I7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTY2VuZSIsInBhcnRzIiwiY2FtZXJhIiwiY2FudmFzIiwiZXNjYXBlS2V5RG93bkhhbmRsZXIiLCJyZXNldCIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJ6ZXJvMiIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsInVzZXJJbnB1dEhhbmRsZXIiLCJyZW5kZXIiLCJiaW5kIiwidXBkYXRlIiwiaW5pdGlhbGlzZSIsIm1hcmdpbk9mRXJyb3IiLCJ1c2VySW5wdXQiLCJVc2VySW5wdXQiLCJmcm9tTm90aGluZyIsImZvckVhY2giLCJwYXJ0IiwiYWRkVXNlcklucHV0SGFuZGxlciIsImFkZEVzY2FwZUtleURvd25IYW5kbGVyIiwid2luZG93Iiwib25yZXNpemUiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImNsZWFyIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMiLCJQYXJ0IiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwiQ2FtZXJhIiwic2NlbmUiLCJFbGVtZW50IiwiREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJEQVRKOzZEQUNFOzhEQUNDO2dFQUNFO3NCQUVBO3dCQUNrQjt3QkFDNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFBLEFB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