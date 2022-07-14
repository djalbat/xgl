"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TexturedTriangle;
    }
});
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
        0.5,
        1,
        0
    ], 
], indexes = [
    [
        0,
        1,
        2
    ], 
], defaultImageName = "stripes.jpg", defaultTextureCoordinates = [
    [
        [
            0,
            0
        ],
        [
            1,
            0
        ],
        [
            0.5,
            1
        ]
    ], 
];
var TexturedTriangle = /*#__PURE__*/ function(TexturedCanvasElement) {
    _inherits(TexturedTriangle, TexturedCanvasElement);
    var _super = _createSuper(TexturedTriangle);
    function TexturedTriangle() {
        _classCallCheck(this, TexturedTriangle);
        return _super.apply(this, arguments);
    }
    _createClass(TexturedTriangle, null, [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _imageName = properties.imageName, imageName = _imageName === void 0 ? defaultImageName : _imageName, _textureCoordinates = properties.textureCoordinates, textureCoordinates = _textureCoordinates === void 0 ? defaultTextureCoordinates : _textureCoordinates, texturedTriangle = _index.TexturedCanvasElement.fromProperties(TexturedTriangle, properties, coordinates, indexes, imageName, textureCoordinates);
                return texturedTriangle;
            }
        }
    ]);
    return TexturedTriangle;
}(_index.TexturedCanvasElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRUcmlhbmdsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXh0dXJlZFRyaWFuZ2xlIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiZGVmYXVsdEltYWdlTmFtZSIsImRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZFRyaWFuZ2xlIiwiVGV4dHVyZWRDYW52YXNFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUF1QlFBLGdCQUFnQjs7O3FCQXJCQyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFNQyxXQUFXLEdBQUc7SUFFWjtBQUFJLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztLQUFFO0lBQ2I7QUFBSSxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7S0FBRTtJQUNiO0FBQUUsV0FBRztBQUFFLFNBQUM7QUFBRSxTQUFDO0tBQUU7Q0FFZCxFQUNEQyxPQUFPLEdBQUc7SUFFUjtBQUFFLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztLQUFFO0NBRVosRUFDREMsZ0JBQWdCLEdBQUcsYUFBYSxFQUNoQ0MseUJBQXlCLEdBQUc7SUFFMUI7UUFBRTtBQUFFLGFBQUM7QUFBRSxhQUFDO1NBQUU7UUFBRTtBQUFFLGFBQUM7QUFBRSxhQUFDO1NBQUU7UUFBRTtBQUFFLGVBQUc7QUFBRSxhQUFDO1NBQUU7S0FBRTtDQUVuQyxBQUFDO0FBRU8sSUFBQSxBQUFNSixnQkFBZ0IsaUJBQXRCOzs7YUFBTUEsZ0JBQWdCOzs7Ozs7WUFDNUJLLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQXJCLFNBQU9BLGNBQWMsQ0FBQ0MsVUFBVSxFQUFFO2dCQUNoQyxpQkFBeUZBLFVBQVUsQ0FBM0ZDLFNBQVMsRUFBVEEsU0FBUywyQkFBR0osZ0JBQWdCLGFBQUEsd0JBQXFERyxVQUFVLENBQTdERSxrQkFBa0IsRUFBbEJBLGtCQUFrQixvQ0FBR0oseUJBQXlCLHNCQUFBLEVBQzlFSyxnQkFBZ0IsR0FBR0MsTUFBcUIsc0JBQUEsQ0FBQ0wsY0FBYyxDQUFDTCxnQkFBZ0IsRUFBRU0sVUFBVSxFQUFFTCxXQUFXLEVBQUVDLE9BQU8sRUFBRUssU0FBUyxFQUFFQyxrQkFBa0IsQ0FBQyxBQUFDO2dCQUVqSixPQUFPQyxnQkFBZ0IsQ0FBQzthQUN6Qjs7OztDQUNGLENBUDZDQyxNQUFxQixzQkFBQSxDQU9sRSJ9