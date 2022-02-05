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
exports.default = TexturedTriangle;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRUcmlhbmdsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbICAgMCwgMCwgMCBdLFxuICAgICAgICBbICAgMSwgMCwgMCBdLFxuICAgICAgICBbIDAuNSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRJbWFnZU5hbWUgPSBcInN0cmlwZXMuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDAuNSwgMSBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkVHJpYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFRyaWFuZ2xlID0gVGV4dHVyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRleHR1cmVkVHJpYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRUcmlhbmdsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImRlZmF1bHRJbWFnZU5hbWUiLCJkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRUcmlhbmdsZSIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsInRleHR1cmVkVHJpYW5nbGUiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRTBCLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxHQUFLLENBQUNBLFdBQVcsR0FBRyxDQUFDO0lBRWIsQ0FBQztBQUFHLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztJQUFDLENBQUM7SUFDYixDQUFDO0FBQUcsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUMsQ0FBQztJQUNiLENBQUM7QUFBQyxXQUFHO0FBQUUsU0FBQztBQUFFLFNBQUM7SUFBQyxDQUFDO0FBRWYsQ0FBQyxFQUNEQyxPQUFPLEdBQUcsQ0FBQztJQUVULENBQUM7QUFBQyxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7SUFBQyxDQUFDO0FBRWIsQ0FBQyxFQUNEQyxnQkFBZ0IsR0FBRyxDQUFhLGNBQ2hDQyx5QkFBeUIsR0FBRyxDQUFDO0lBRTNCLENBQUM7UUFBQyxDQUFDO0FBQUMsYUFBQztBQUFFLGFBQUM7UUFBQyxDQUFDO1FBQUUsQ0FBQztBQUFDLGFBQUM7QUFBRSxhQUFDO1FBQUMsQ0FBQztRQUFFLENBQUM7QUFBQyxlQUFHO0FBQUUsYUFBQztRQUFDLENBQUM7SUFBQyxDQUFDO0FBRXBDLENBQUM7SUFFY0MsZ0JBQWdCLGlCQUF0QixRQUFROzs7YUFBRkEsZ0JBQWdCOzs7Ozs7WUFDNUJDLEdBQWMsRUFBZEEsQ0FBYzttQkFBckIsUUFBUSxDQUFEQSxjQUFjLENBQUNDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxHQUFLLGNBQW9GQSxVQUFVLENBQTNGQyxTQUFTLEVBQVRBLFNBQVMsMkJBQUdMLGdCQUFnQixxQ0FBcURJLFVBQVUsQ0FBN0RFLGtCQUFrQixFQUFsQkEsa0JBQWtCLG9DQUFHTCx5QkFBeUIsd0JBQzlFTSxnQkFBZ0IsR0FBR0MsTUFBcUIsdUJBQUNMLGNBQWMsQ0FBQ0QsZ0JBQWdCLEVBQUVFLFVBQVUsRUFBRU4sV0FBVyxFQUFFQyxPQUFPLEVBQUVNLFNBQVMsRUFBRUMsa0JBQWtCO2dCQUUvSSxNQUFNLENBQUNDLGdCQUFnQjtZQUN6QixDQUFDOzs7O0VBTjJDQyxNQUFxQjtrQkFBOUNOLGdCQUFnQiJ9