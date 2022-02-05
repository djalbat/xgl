"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _lighting = require("../source/lighting");
var _position = require("../source/position");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var AttributeLocations = /*#__PURE__*/ function() {
    function AttributeLocations(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
        _classCallCheck(this, AttributeLocations);
        this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
        this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
    }
    _createClass(AttributeLocations, [
        {
            key: "getVertexPositionAttributeLocation",
            value: function getVertexPositionAttributeLocation() {
                return this.vertexPositionAttributeLocation;
            }
        },
        {
            key: "getVertexNormalAttributeLocation",
            value: function getVertexNormalAttributeLocation() {
                return this.vertexNormalAttributeLocation;
            }
        }
    ], [
        {
            key: "fromProgram",
            value: function fromProgram(Class, program, canvas) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, _position.vertexPositionAttributeName), vertexNormalAttributeLocation = canvas.getAttributeLocation(program, _lighting.vertexNormalAttributeName), attributeLocations = _construct(Class, [
                    vertexPositionAttributeLocation,
                    vertexNormalAttributeLocation
                ].concat(_toConsumableArray(remainingArguments)));
                return attributeLocations;
            }
        }
    ]);
    return AttributeLocations;
}();
exports.default = AttributeLocations;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIl0sIm5hbWVzIjpbIkF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImZyb21Qcm9ncmFtIiwiQ2xhc3MiLCJwcm9ncmFtIiwiY2FudmFzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIiwiYXR0cmlidXRlTG9jYXRpb25zIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUU4QixHQUFvQixDQUFwQixTQUFvQjtBQUNsQixHQUFvQixDQUFwQixTQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0NBLGtCQUFrQixpQkFBeEIsUUFBUTthQUFGQSxrQkFBa0IsQ0FDekJDLCtCQUErQixFQUFFQyw2QkFBNkI7O1FBQ3hFLElBQUksQ0FBQ0QsK0JBQStCLEdBQUdBLCtCQUErQjtRQUN0RSxJQUFJLENBQUNDLDZCQUE2QixHQUFHQSw2QkFBNkI7Ozs7WUFHcEVDLEdBQWtDLEVBQWxDQSxDQUFrQzttQkFBbENBLFFBQVEsQ0FBUkEsa0NBQWtDLEdBQUcsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQ0YsK0JBQStCO1lBQzdDLENBQUM7OztZQUVERyxHQUFnQyxFQUFoQ0EsQ0FBZ0M7bUJBQWhDQSxRQUFRLENBQVJBLGdDQUFnQyxHQUFHLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUNGLDZCQUE2QjtZQUMzQyxDQUFDOzs7O1lBRU1HLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQXlCLENBQUM7Z0JBQXhCLEdBQUdDLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEJBLGtCQUFrQixHQUFyQixHQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixHQUFyQixDQUFDO29CQUFFQSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7Z0JBQUQsQ0FBQztnQkFDOUQsR0FBSyxDQUFDUiwrQkFBK0IsR0FBR08sTUFBTSxDQUFDRSxvQkFBb0IsQ0FBQ0gsT0FBTyxFQUFFSSxTQUEyQiwrQkFDbEdULDZCQUE2QixHQUFHTSxNQUFNLENBQUNFLG9CQUFvQixDQUFDSCxPQUFPLEVBQUVLLFNBQXlCLDZCQUM5RkMsa0JBQWtCLGNBQU9QLEtBQUssRUFBVCxDQUFDO29CQUFTTCwrQkFBK0I7b0JBQUVDLDZCQUE2QjtnQkFBdUIsQ0FBQyxDQUFoRyxNQUFnRyxvQkFBbkJPLGtCQUFrQjtnQkFFMUgsTUFBTSxDQUFDSSxrQkFBa0I7WUFDM0IsQ0FBQzs7Ozs7a0JBcEJrQmIsa0JBQWtCIn0=