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
    function TexturedQuadrangle() {
        _classCallCheck(this, TexturedQuadrangle);
        return _possibleConstructorReturn(this, _getPrototypeOf(TexturedQuadrangle).apply(this, arguments));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIl0sIm5hbWVzIjpbIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImRlZmF1bHRJbWFnZU5hbWUiLCJkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRRdWFkcmFuZ2xlIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwidGV4dHVyZWRRdWFkcmFuZ2xlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUUwQixHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxHQUFLLENBQUMsV0FBVyxHQUFHLENBQUM7SUFFYixDQUFDO1FBQUMsQ0FBQztRQUFFLENBQUM7UUFBRSxDQUFDO0lBQUMsQ0FBQztJQUNYLENBQUM7UUFBQyxDQUFDO1FBQUUsQ0FBQztRQUFFLENBQUM7SUFBQyxDQUFDO0lBQ1gsQ0FBQztRQUFDLENBQUM7UUFBRSxDQUFDO1FBQUUsQ0FBQztJQUFDLENBQUM7SUFDWCxDQUFDO1FBQUMsQ0FBQztRQUFFLENBQUM7UUFBRSxDQUFDO0lBQUMsQ0FBQztBQUViLENBQUMsRUFDRCxPQUFPLEdBQUcsQ0FBQztJQUVULENBQUM7UUFBQyxDQUFDO1FBQUUsQ0FBQztRQUFFLENBQUM7SUFBQyxDQUFDO0lBQ1gsQ0FBQztRQUFDLENBQUM7UUFBRSxDQUFDO1FBQUUsQ0FBQztJQUFDLENBQUM7QUFFYixDQUFDLEVBQ0QsZ0JBQWdCLElBQUcsV0FBYSxHQUNoQyx5QkFBeUIsR0FBRyxDQUFDO0lBRTNCLENBQUM7UUFBQyxDQUFDO1lBQUMsQ0FBQztZQUFFLENBQUM7UUFBQyxDQUFDO1FBQUUsQ0FBQztZQUFDLENBQUM7WUFBRSxDQUFDO1FBQUMsQ0FBQztRQUFFLENBQUM7WUFBQyxDQUFDO1lBQUUsQ0FBQztRQUFDLENBQUM7SUFBQyxDQUFDO0lBQ2hDLENBQUM7UUFBQyxDQUFDO1lBQUMsQ0FBQztZQUFFLENBQUM7UUFBQyxDQUFDO1FBQUUsQ0FBQztZQUFDLENBQUM7WUFBRSxDQUFDO1FBQUMsQ0FBQztRQUFFLENBQUM7WUFBQyxDQUFDO1lBQUUsQ0FBQztRQUFDLENBQUM7SUFBQyxDQUFDO0FBRWxDLENBQUM7SUFFYyxrQkFBa0IsaUJBQXhCLFFBQVE7Y0FBRixrQkFBa0I7YUFBbEIsa0JBQWtCOzhCQUFsQixrQkFBa0I7Z0VBQWxCLGtCQUFrQjs7aUJBQWxCLGtCQUFrQjs7WUFDOUIsR0FBYyxHQUFkLGNBQWM7bUJBQXJCLFFBQVEsQ0FBRCxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2pDLEdBQUssY0FBb0YsVUFBVSxDQUEzRixTQUFTLEVBQVQsU0FBUywyQkFBRyxnQkFBZ0IscUNBQXFELFVBQVUsQ0FBN0Qsa0JBQWtCLEVBQWxCLGtCQUFrQixvQ0FBRyx5QkFBeUIsd0JBQzlFLGtCQUFrQixHQTNCVSxNQUFhLHVCQTJCRSxjQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGtCQUFrQjtnQkFFbkosTUFBTSxDQUFDLGtCQUFrQjtZQUMzQixDQUFDOzs7V0FOa0Isa0JBQWtCO0VBeEJELE1BQWE7a0JBd0I5QixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwicGxhc3Rlci5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAyLCAwIF0sIFsgMiwgMiBdIF0sXG4gICAgICAgIFsgWyAyLCAyIF0sIFsgMCwgMiBdLCBbIDAsIDAgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFF1YWRyYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuIl19