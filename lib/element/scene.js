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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Scene = /*#__PURE__*/ function(Element) {
    _inherits(Scene, Element);
    function Scene(parts, camera, canvas, colour) {
        _class_call_check(this, Scene);
        var _this;
        _this = _call_super(this, Scene), _define_property(_this, "escapeKeyDownHandler", function() {
            _this.camera.reset();
            _this.windowResizeHandler(); ///
        }), _define_property(_this, "windowResizeHandler", function() {
            var clientWidth = _this.canvas.getClientWidth(), clientHeight = _this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
            _this.canvas.resize(width, height);
            var relativeMouseCoordinates = (0, _vector.zero2)(), mouseWheelDelta = 0, shiftKeyDown = false; ///
            _this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
        }), _define_property(_this, "userInputHandler", function(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
            var render = _this.render.bind(_this);
            _this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, _this.canvas, render);
        });
        _this.parts = parts;
        _this.camera = camera;
        _this.canvas = canvas;
        _this.colour = colour;
        return _this;
    }
    _create_class(Scene, [
        {
            key: "getParts",
            value: function getParts() {
                return this.parts;
            }
        },
        {
            key: "getCamera",
            value: function getCamera() {
                return this.camera;
            }
        },
        {
            key: "getCanvas",
            value: function getCanvas() {
                return this.canvas;
            }
        },
        {
            key: "getColour",
            value: function getColour() {
                return this.colour;
            }
        },
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
                this.canvas.clear(this.colour);
                this.parts.forEach(function(part) {
                    part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, _this.canvas);
                });
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var canvas = properties.canvas, childElements = properties.childElements, _properties_backgroundColour = properties.backgroundColour, backgroundColour = _properties_backgroundColour === void 0 ? _defaults.DEFAULT_BACKGROUND_COLOUR : _properties_backgroundColour, parts = (0, _element1.elementsFromChildElements)(childElements, _part.default), camera = (0, _element1.elementFromChildElements)(childElements, _camera.default), colour = backgroundColour, scene = _element.default.fromProperties(Scene, properties, parts, camera, canvas, colour), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
                scene.initialise(canvas, marginOfError);
                return scene;
            }
        }
    ]);
    return Scene;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydCBmcm9tIFwiLi4vZWxlbWVudC9wYXJ0XCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9lbGVtZW50L2NhbWVyYVwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0XCI7XG5cbmltcG9ydCB7IHplcm8yIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IsIERFRkFVTFRfQkFDS0dST1VORF9DT0xPVVIgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cywgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJ0cywgY2FtZXJhLCBjYW52YXMsIGNvbG91cikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cztcbiAgfVxuXG4gIGdldENhbWVyYSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW1lcmE7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuXG4gIGVzY2FwZUtleURvd25IYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2FtZXJhLnJlc2V0KCk7XG5cbiAgICB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIoKTsgLy8vXG4gIH1cblxuICB3aW5kb3dSZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gemVybzIoKSwgLy8vXG4gICAgICAgICAgbW91c2VXaGVlbERlbHRhID0gMCwgIC8vL1xuICAgICAgICAgIHNoaWZ0S2V5RG93biA9IGZhbHNlOyAvLy9cblxuICAgIHRoaXMudXNlcklucHV0SGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKTtcbiAgfVxuXG4gIHVzZXJJbnB1dEhhbmRsZXIgPSAocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikgPT4ge1xuICAgIGNvbnN0IHJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNhbWVyYS51cGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgdGhpcy5jYW52YXMsIHJlbmRlcik7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IFVzZXJJbnB1dC5mcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICBwYXJ0LmluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHVzZXJJbnB1dC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih0aGlzLnVzZXJJbnB1dEhhbmRsZXIpO1xuXG4gICAgdXNlcklucHV0LmFkZEVzY2FwZUtleURvd25IYW5kbGVyKHRoaXMuZXNjYXBlS2V5RG93bkhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyO1xuXG4gICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcih0aGlzLmNvbG91cik7XG5cbiAgICB0aGlzLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgIHBhcnQucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIHRoaXMuY2FudmFzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGNoaWxkRWxlbWVudHMsIGJhY2tncm91bmRDb2xvdXIgPSBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1VSIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHBhcnRzID0gZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBQYXJ0KSxcbiAgICAgICAgICBjYW1lcmEgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgQ2FtZXJhKSxcbiAgICAgICAgICBjb2xvdXIgPSBiYWNrZ3JvdW5kQ29sb3VyLCAgLy9cbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIHBhcnRzLCBjYW1lcmEsIGNhbnZhcywgY29sb3VyKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1I7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTY2VuZSIsInBhcnRzIiwiY2FtZXJhIiwiY2FudmFzIiwiY29sb3VyIiwiZXNjYXBlS2V5RG93bkhhbmRsZXIiLCJyZXNldCIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJ6ZXJvMiIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsInVzZXJJbnB1dEhhbmRsZXIiLCJyZW5kZXIiLCJiaW5kIiwidXBkYXRlIiwiZ2V0UGFydHMiLCJnZXRDYW1lcmEiLCJnZXRDYW52YXMiLCJnZXRDb2xvdXIiLCJpbml0aWFsaXNlIiwibWFyZ2luT2ZFcnJvciIsInVzZXJJbnB1dCIsIlVzZXJJbnB1dCIsImZyb21Ob3RoaW5nIiwiZm9yRWFjaCIsInBhcnQiLCJhZGRVc2VySW5wdXRIYW5kbGVyIiwiYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiY2xlYXIiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiYmFja2dyb3VuZENvbG91ciIsIkRFRkFVTFRfQkFDS0dST1VORF9DT0xPVVIiLCJlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIiwiUGFydCIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsIkNhbWVyYSIsInNjZW5lIiwiRWxlbWVudCIsIkRFRkFVTFRfTUFSR0lOX09GX0VSUk9SIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyREFUSjs2REFDRTs4REFDQztnRUFDRTtzQkFFQTt3QkFDNkM7d0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFBLEFBQU1BLHNCQUFOO2NBQU1BO2FBQUFBLE1BQ1BDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE1BQU07Z0NBRHRCSjs7Z0JBRWpCLGtCQUZpQkEsUUEwQm5CSyx3QkFBQUEsd0JBQXVCO1lBQ3JCLE1BQUtILE1BQU0sQ0FBQ0ksS0FBSztZQUVqQixNQUFLQyxtQkFBbUIsSUFBSSxHQUFHO1FBQ2pDLElBRUFBLHdCQUFBQSx1QkFBc0I7WUFDcEIsSUFBTUMsY0FBYyxNQUFLTCxNQUFNLENBQUNNLGNBQWMsSUFDeENDLGVBQWUsTUFBS1AsTUFBTSxDQUFDUSxlQUFlLElBQzFDQyxRQUFRSixhQUNSSyxTQUFTSDtZQUVmLE1BQUtQLE1BQU0sQ0FBQ1csTUFBTSxDQUFDRixPQUFPQztZQUUxQixJQUFNRSwyQkFBMkJDLElBQUFBLGFBQUssS0FDaENDLGtCQUFrQixHQUNsQkMsZUFBZSxPQUFPLEdBQUc7WUFFL0IsTUFBS0MsZ0JBQWdCLENBQUNKLDBCQUEwQkUsaUJBQWlCQztRQUNuRSxJQUVBQyx3QkFBQUEsb0JBQW1CLFNBQUNKLDBCQUEwQkUsaUJBQWlCQztZQUM3RCxJQUFNRSxTQUFTLE1BQUtBLE1BQU0sQ0FBQ0MsSUFBSTtZQUUvQixNQUFLbkIsTUFBTSxDQUFDb0IsTUFBTSxDQUFDUCwwQkFBMEJFLGlCQUFpQkMsY0FBYyxNQUFLZixNQUFNLEVBQUVpQjtRQUMzRjtRQS9DRSxNQUFLbkIsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQVBHSjs7WUFVbkJ1QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUN0QixLQUFLO1lBQ25COzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ3RCLE1BQU07WUFDcEI7OztZQUVBdUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDdEIsTUFBTTtZQUNwQjs7O1lBRUF1QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUN0QixNQUFNO1lBQ3BCOzs7WUE2QkF1QixLQUFBQTttQkFBQUEsU0FBQUEsV0FBV3hCLE1BQU0sRUFBRXlCLGFBQWE7Z0JBQzlCLElBQU1DLFlBQVlDLGtCQUFTLENBQUNDLFdBQVc7Z0JBRXZDLElBQUksQ0FBQzlCLEtBQUssQ0FBQytCLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEJBLEtBQUtOLFVBQVUsQ0FBQ3hCLFFBQVF5QjtnQkFDMUI7Z0JBRUFDLFVBQVVGLFVBQVUsQ0FBQ3hCO2dCQUVyQjBCLFVBQVVLLG1CQUFtQixDQUFDLElBQUksQ0FBQ2YsZ0JBQWdCO2dCQUVuRFUsVUFBVU0sdUJBQXVCLENBQUMsSUFBSSxDQUFDOUIsb0JBQW9CO2dCQUUzRCtCLE9BQU9DLFFBQVEsR0FBRyxJQUFJLENBQUM5QixtQkFBbUI7Z0JBRTFDLElBQUksQ0FBQ0EsbUJBQW1CLElBQUksR0FBRztZQUNqQzs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPa0IsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0I7O2dCQUNwRixJQUFJLENBQUN2QyxNQUFNLENBQUN3QyxLQUFLLENBQUMsSUFBSSxDQUFDdkMsTUFBTTtnQkFFN0IsSUFBSSxDQUFDSCxLQUFLLENBQUMrQixPQUFPLENBQUMsU0FBQ0M7b0JBQ2xCQSxLQUFLYixNQUFNLENBQUNrQixlQUFlQyxlQUFlQyxnQkFBZ0JDLGlCQUFpQkMsa0JBQWtCLE1BQUt2QyxNQUFNO2dCQUMxRztZQUNGOzs7O1lBRU95QyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5QixJQUFRMUMsU0FBd0UwQyxXQUF4RTFDLFFBQVEyQyxnQkFBZ0VELFdBQWhFQyw4Q0FBZ0VELFdBQWpERSxrQkFBQUEsNkRBQW1CQyxtQ0FBeUIsaUNBQ3JFL0MsUUFBUWdELElBQUFBLG1DQUF5QixFQUFDSCxlQUFlSSxhQUFJLEdBQ3JEaEQsU0FBU2lELElBQUFBLGtDQUF3QixFQUFDTCxlQUFlTSxlQUFNLEdBQ3ZEaEQsU0FBUzJDLGtCQUNUTSxRQUFRQyxnQkFBTyxDQUFDVixjQUFjLENBcEZuQjVDLE9Bb0YyQjZDLFlBQVk1QyxPQUFPQyxRQUFRQyxRQUFRQyxTQUN6RXdCLGdCQUFnQjJCLGlDQUF1QjtnQkFFN0NGLE1BQU0xQixVQUFVLENBQUN4QixRQUFReUI7Z0JBRXpCLE9BQU95QjtZQUNUOzs7V0ExRm1CckQ7cUJBQWNzRCxnQkFBTyJ9