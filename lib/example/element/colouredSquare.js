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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
], defaultColour = [
    1,
    0,
    0
];
var ColouredSquare = /*#__PURE__*/ function(ColouredCanvasElement) {
    _inherits(ColouredSquare, ColouredCanvasElement);
    var _super = _createSuper(ColouredSquare);
    function ColouredSquare() {
        _classCallCheck(this, ColouredSquare);
        return _super.apply(this, arguments);
    }
    _createClass(ColouredSquare, null, [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _colour = properties.colour, colour = _colour === void 0 ? defaultColour : _colour, colouredSquare = _index.ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);
                return colouredSquare;
            }
        }
    ]);
    return ColouredSquare;
}(_index.ColouredCanvasElement);
exports.default = ColouredSquare;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvY29sb3VyZWRTcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuY29uc3QgY29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAwLCAwIF0sXG4gICAgICAgIFsgMSwgMCwgMCBdLFxuICAgICAgICBbIDAsIDEsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICBbIDMsIDIsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGRlZmF1bHRDb2xvdXIgPSBbIDEsIDAsIDAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRTcXVhcmUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBcdGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdENvbG91ciB9ID0gcHJvcGVydGllcyxcblx0XHRcdCAgICBjb2xvdXJlZFNxdWFyZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cik7XG5cbiAgXHRyZXR1cm4gY29sb3VyZWRTcXVhcmU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJkZWZhdWx0Q29sb3VyIiwiQ29sb3VyZWRTcXVhcmUiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJjb2xvdXJlZFNxdWFyZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFMEIsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELEdBQUssQ0FBQ0EsV0FBVyxHQUFHLENBQUM7SUFFYixDQUFDO0FBQUMsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUMsQ0FBQztJQUNYLENBQUM7QUFBQyxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7SUFBQyxDQUFDO0lBQ1gsQ0FBQztBQUFDLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztJQUFDLENBQUM7SUFDWCxDQUFDO0FBQUMsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUMsQ0FBQztBQUViLENBQUMsRUFDREMsT0FBTyxHQUFHLENBQUM7SUFFVCxDQUFDO0FBQUMsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0lBQUMsQ0FBQztJQUNYLENBQUM7QUFBQyxTQUFDO0FBQUUsU0FBQztBQUFFLFNBQUM7SUFBQyxDQUFDO0FBRWIsQ0FBQyxFQUNEQyxhQUFhLEdBQUcsQ0FBQztBQUFDLEtBQUM7QUFBRSxLQUFDO0FBQUUsS0FBQztBQUFDLENBQUM7SUFFWkMsY0FBYyxpQkFBcEIsUUFBUTtjQUFGQSxjQUFjOzhCQUFkQSxjQUFjO2FBQWRBLGNBQWM7OEJBQWRBLGNBQWM7OztpQkFBZEEsY0FBYzs7WUFDMUJDLEdBQWMsRUFBZEEsQ0FBYzttQkFBckIsUUFBUSxDQUFEQSxjQUFjLENBQUNDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQyxHQUFLLFdBQThCQSxVQUFVLENBQXJDQyxNQUFNLEVBQU5BLE1BQU0sd0JBQUdKLGFBQWEsWUFDMUJLLGNBQWMsR0FyQmlCLE1BQWEsdUJBcUJMSCxjQUFjLENBQUNELGNBQWMsRUFBRUUsVUFBVSxFQUFFTCxXQUFXLEVBQUVDLE9BQU8sRUFBRUssTUFBTTtnQkFFbEgsTUFBTSxDQUFDQyxjQUFjO1lBQ3RCLENBQUM7OztXQU5rQkosY0FBYztFQWxCRyxNQUFhO2tCQWtCOUJBLGNBQWMifQ==