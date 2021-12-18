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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
    function TexturedTriangle() {
        _classCallCheck(this, TexturedTriangle);
        return _possibleConstructorReturn(this, _getPrototypeOf(TexturedTriangle).apply(this, arguments));
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
exports.default = TexturedTriangle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRUcmlhbmdsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImRlZmF1bHRJbWFnZU5hbWUiLCJkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRUcmlhbmdsZSIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsInRleHR1cmVkVHJpYW5nbGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRTBCLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELEdBQUssQ0FBQ0EsV0FBVyxHQUFHLENBQUM7SUFFYixDQUFDO1FBQUcsQ0FBQztRQUFFLENBQUM7UUFBRSxDQUFDO0lBQUMsQ0FBQztJQUNiLENBQUM7UUFBRyxDQUFDO1FBQUUsQ0FBQztRQUFFLENBQUM7SUFBQyxDQUFDO0lBQ2IsQ0FBQztRQUFDLEdBQUc7UUFBRSxDQUFDO1FBQUUsQ0FBQztJQUFDLENBQUM7QUFFZixDQUFDLEVBQ0RDLE9BQU8sR0FBRyxDQUFDO0lBRVQsQ0FBQztRQUFDLENBQUM7UUFBRSxDQUFDO1FBQUUsQ0FBQztJQUFDLENBQUM7QUFFYixDQUFDLEVBQ0RDLGdCQUFnQixHQUFHLENBQWEsY0FDaENDLHlCQUF5QixHQUFHLENBQUM7SUFFM0IsQ0FBQztRQUFDLENBQUM7WUFBQyxDQUFDO1lBQUUsQ0FBQztRQUFDLENBQUM7UUFBRSxDQUFDO1lBQUMsQ0FBQztZQUFFLENBQUM7UUFBQyxDQUFDO1FBQUUsQ0FBQztZQUFDLEdBQUc7WUFBRSxDQUFDO1FBQUMsQ0FBQztJQUFDLENBQUM7QUFFcEMsQ0FBQztJQUVjQyxnQkFBZ0IsaUJBQXRCLFFBQVE7Y0FBRkEsZ0JBQWdCO2FBQWhCQSxnQkFBZ0I7OEJBQWhCQSxnQkFBZ0I7Z0VBQWhCQSxnQkFBZ0I7O2lCQUFoQkEsZ0JBQWdCOztZQUM1QkMsR0FBYyxFQUFkQSxDQUFjO21CQUFyQixRQUFRLENBQURBLGNBQWMsQ0FBQ0MsVUFBVSxFQUFFLENBQUM7Z0JBQ2pDLEdBQUssY0FBb0ZBLFVBQVUsQ0FBM0ZDLFNBQVMsRUFBVEEsU0FBUywyQkFBR0wsZ0JBQWdCLHFDQUFxREksVUFBVSxDQUE3REUsa0JBQWtCLEVBQWxCQSxrQkFBa0Isb0NBQUdMLHlCQUF5Qix3QkFDOUVNLGdCQUFnQixHQXhCWSxNQUFhLHVCQXdCQUosY0FBYyxDQUFDRCxnQkFBZ0IsRUFBRUUsVUFBVSxFQUFFTixXQUFXLEVBQUVDLE9BQU8sRUFBRU0sU0FBUyxFQUFFQyxrQkFBa0I7Z0JBRS9JLE1BQU0sQ0FBQ0MsZ0JBQWdCO1lBQ3pCLENBQUM7OztXQU5rQkwsZ0JBQWdCO0VBckJDLE1BQWE7a0JBcUI5QkEsZ0JBQWdCIn0=