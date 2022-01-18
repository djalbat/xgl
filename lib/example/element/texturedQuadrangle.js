"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../index");
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
var coordinates = [
    [
        0,
        0,
        0
    ],
    [
        1,
        0,
        0
    ],
    [
        0,
        1,
        0
    ],
    [
        1,
        1,
        0
    ], 
], indexes = [
    [
        0,
        1,
        3
    ],
    [
        3,
        2,
        0
    ], 
], defaultImageName = "plaster.jpg", defaultTextureCoordinates = [
    [
        [
            0,
            0
        ],
        [
            2,
            0
        ],
        [
            2,
            2
        ]
    ],
    [
        [
            2,
            2
        ],
        [
            0,
            2
        ],
        [
            0,
            0
        ]
    ], 
];
var TexturedQuadrangle = /*#__PURE__*/ function(TexturedCanvasElement) {
    _inherits(TexturedQuadrangle, TexturedCanvasElement);
    var _super = _createSuper(TexturedQuadrangle);
    function TexturedQuadrangle() {
        _classCallCheck(this, TexturedQuadrangle);
        return _super.apply(this, arguments);
    }
    _createClass(TexturedQuadrangle, null, [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _imageName = properties.imageName, imageName = _imageName === void 0 ? defaultImageName : _imageName, _textureCoordinates = properties.textureCoordinates, textureCoordinates = _textureCoordinates === void 0 ? defaultTextureCoordinates : _textureCoordinates, texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);
                return texturedQuadrangle;
            }
        }
    ]);
    return TexturedQuadrangle;
}(_index.TexturedCanvasElement);
exports.default = TexturedQuadrangle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiZGVmYXVsdEltYWdlTmFtZSIsImRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJUZXh0dXJlZFF1YWRyYW5nbGUiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZFF1YWRyYW5nbGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRTBCLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxHQUFLLENBQUNBLFdBQVcsR0FBRyxDQUFDO0lBRWIsQ0FBQztBQUFDLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztJQUFDLENBQUM7SUFDWCxDQUFDO0FBQUMsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUMsQ0FBQztJQUNYLENBQUM7QUFBQyxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7SUFBQyxDQUFDO0lBQ1gsQ0FBQztBQUFDLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztJQUFDLENBQUM7QUFFYixDQUFDLEVBQ0RDLE9BQU8sR0FBRyxDQUFDO0lBRVQsQ0FBQztBQUFDLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztJQUFDLENBQUM7SUFDWCxDQUFDO0FBQUMsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUMsQ0FBQztBQUViLENBQUMsRUFDREMsZ0JBQWdCLEdBQUcsQ0FBYSxjQUNoQ0MseUJBQXlCLEdBQUcsQ0FBQztJQUUzQixDQUFDO1FBQUMsQ0FBQztBQUFDLGFBQUM7QUFBRSxhQUFDO1FBQUMsQ0FBQztRQUFFLENBQUM7QUFBQyxhQUFDO0FBQUUsYUFBQztRQUFDLENBQUM7UUFBRSxDQUFDO0FBQUMsYUFBQztBQUFFLGFBQUM7UUFBQyxDQUFDO0lBQUMsQ0FBQztJQUNoQyxDQUFDO1FBQUMsQ0FBQztBQUFDLGFBQUM7QUFBRSxhQUFDO1FBQUMsQ0FBQztRQUFFLENBQUM7QUFBQyxhQUFDO0FBQUUsYUFBQztRQUFDLENBQUM7UUFBRSxDQUFDO0FBQUMsYUFBQztBQUFFLGFBQUM7UUFBQyxDQUFDO0lBQUMsQ0FBQztBQUVsQyxDQUFDO0lBRWNDLGtCQUFrQixpQkFBeEIsUUFBUTtjQUFGQSxrQkFBa0I7OEJBQWxCQSxrQkFBa0I7YUFBbEJBLGtCQUFrQjs4QkFBbEJBLGtCQUFrQjs7O2lCQUFsQkEsa0JBQWtCOztZQUM5QkMsR0FBYyxFQUFkQSxDQUFjO21CQUFyQixRQUFRLENBQURBLGNBQWMsQ0FBQ0MsVUFBVSxFQUFFLENBQUM7Z0JBQ2pDLEdBQUssY0FBb0ZBLFVBQVUsQ0FBM0ZDLFNBQVMsRUFBVEEsU0FBUywyQkFBR0wsZ0JBQWdCLHFDQUFxREksVUFBVSxDQUE3REUsa0JBQWtCLEVBQWxCQSxrQkFBa0Isb0NBQUdMLHlCQUF5Qix3QkFDOUVNLGtCQUFrQixHQTNCVSxNQUFhLHVCQTJCRUosY0FBYyxDQUFDRCxrQkFBa0IsRUFBRUUsVUFBVSxFQUFFTixXQUFXLEVBQUVDLE9BQU8sRUFBRU0sU0FBUyxFQUFFQyxrQkFBa0I7Z0JBRW5KLE1BQU0sQ0FBQ0Msa0JBQWtCO1lBQzNCLENBQUM7OztXQU5rQkwsa0JBQWtCO0VBeEJELE1BQWE7a0JBd0I5QkEsa0JBQWtCIn0=