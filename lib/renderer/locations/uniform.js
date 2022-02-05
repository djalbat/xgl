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
var UniformLocations = /*#__PURE__*/ function() {
    function UniformLocations(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
        _classCallCheck(this, UniformLocations);
        this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
        this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
        this.positionMatrixUniformLocation = positionMatrixUniformLocation;
        this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
        this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
    }
    _createClass(UniformLocations, [
        {
            key: "getOffsetsMatrixUniformLocation",
            value: function getOffsetsMatrixUniformLocation() {
                return this.offsetsMatrixUniformLocation;
            }
        },
        {
            key: "getNormalsMatrixUniformLocation",
            value: function getNormalsMatrixUniformLocation() {
                return this.normalsMatrixUniformLocation;
            }
        },
        {
            key: "getPositionMatrixUniformLocation",
            value: function getPositionMatrixUniformLocation() {
                return this.positionMatrixUniformLocation;
            }
        },
        {
            key: "getRotationsMatrixUniformLocation",
            value: function getRotationsMatrixUniformLocation() {
                return this.rotationsMatrixUniformLocation;
            }
        },
        {
            key: "getProjectionMatrixUniformLocation",
            value: function getProjectionMatrixUniformLocation() {
                return this.projectionMatrixUniformLocation;
            }
        }
    ], [
        {
            key: "fromProgram",
            value: function fromProgram(Class, program, canvas) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    remainingArguments[_key - 3] = arguments[_key];
                }
                var offsetsMatrixUniformLocation = canvas.getUniformLocation(program, _position.offsetsMatrixName), normalsMatrixUniformLocation = canvas.getUniformLocation(program, _lighting.normalsMatrixName), positionMatrixUniformLocation = canvas.getUniformLocation(program, _position.positionMatrixName), rotationsMatrixUniformLocation = canvas.getUniformLocation(program, _position.rotationsMatrixName), projectionMatrixUniformLocation = canvas.getUniformLocation(program, _position.projectionMatrixName), uniformLocations = _construct(Class, [
                    offsetsMatrixUniformLocation,
                    normalsMatrixUniformLocation,
                    positionMatrixUniformLocation,
                    rotationsMatrixUniformLocation,
                    projectionMatrixUniformLocation
                ].concat(_toConsumableArray(remainingArguments)));
                return uniformLocations;
            }
        }
    ]);
    return UniformLocations;
}();
exports.default = UniformLocations;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9ybWFsc01hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5cbmltcG9ydCB7IG9mZnNldHNNYXRyaXhOYW1lLCByb3RhdGlvbnNNYXRyaXhOYW1lLCBwb3NpdGlvbk1hdHJpeE5hbWUsIHByb2plY3Rpb25NYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVbmlmb3JtTG9jYXRpb25zIiwib2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsIm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImZyb21Qcm9ncmFtIiwiQ2xhc3MiLCJwcm9ncmFtIiwiY2FudmFzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwib2Zmc2V0c01hdHJpeE5hbWUiLCJub3JtYWxzTWF0cml4TmFtZSIsInBvc2l0aW9uTWF0cml4TmFtZSIsInJvdGF0aW9uc01hdHJpeE5hbWUiLCJwcm9qZWN0aW9uTWF0cml4TmFtZSIsInVuaWZvcm1Mb2NhdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRXNCLEdBQW9CLENBQXBCLFNBQW9CO0FBRTJDLEdBQW9CLENBQXBCLFNBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoR0EsZ0JBQWdCLGlCQUF0QixRQUFRO2FBQUZBLGdCQUFnQixDQUN2QkMsNEJBQTRCLEVBQUVDLDRCQUE0QixFQUFFQyw2QkFBNkIsRUFBRUMsOEJBQThCLEVBQUVDLCtCQUErQjs7UUFDcEssSUFBSSxDQUFDSiw0QkFBNEIsR0FBR0EsNEJBQTRCO1FBQ2hFLElBQUksQ0FBQ0MsNEJBQTRCLEdBQUdBLDRCQUE0QjtRQUNoRSxJQUFJLENBQUNDLDZCQUE2QixHQUFHQSw2QkFBNkI7UUFDbEUsSUFBSSxDQUFDQyw4QkFBOEIsR0FBR0EsOEJBQThCO1FBQ3BFLElBQUksQ0FBQ0MsK0JBQStCLEdBQUdBLCtCQUErQjs7OztZQUd4RUMsR0FBK0IsRUFBL0JBLENBQStCO21CQUEvQkEsUUFBUSxDQUFSQSwrQkFBK0IsR0FBRyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDTCw0QkFBNEI7WUFDMUMsQ0FBQzs7O1lBRURNLEdBQStCLEVBQS9CQSxDQUErQjttQkFBL0JBLFFBQVEsQ0FBUkEsK0JBQStCLEdBQUcsQ0FBQztnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQ0wsNEJBQTRCO1lBQzFDLENBQUM7OztZQUVETSxHQUFnQyxFQUFoQ0EsQ0FBZ0M7bUJBQWhDQSxRQUFRLENBQVJBLGdDQUFnQyxHQUFHLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUNMLDZCQUE2QjtZQUMzQyxDQUFDOzs7WUFFRE0sR0FBaUMsRUFBakNBLENBQWlDO21CQUFqQ0EsUUFBUSxDQUFSQSxpQ0FBaUMsR0FBRyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDTCw4QkFBOEI7WUFDNUMsQ0FBQzs7O1lBRURNLEdBQWtDLEVBQWxDQSxDQUFrQzttQkFBbENBLFFBQVEsQ0FBUkEsa0NBQWtDLEdBQUcsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQ0wsK0JBQStCO1lBQzdDLENBQUM7Ozs7WUFFTU0sR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBeUIsQ0FBQztnQkFBeEIsR0FBR0MsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQkEsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7b0JBQUVBLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO2dCQUM5RCxHQUFLLENBQUNkLDRCQUE0QixHQUFHYSxNQUFNLENBQUNFLGtCQUFrQixDQUFDSCxPQUFPLEVBQUVJLFNBQWlCLHFCQUNuRmYsNEJBQTRCLEdBQUdZLE1BQU0sQ0FBQ0Usa0JBQWtCLENBQUNILE9BQU8sRUFBRUssU0FBaUIscUJBQ25GZiw2QkFBNkIsR0FBR1csTUFBTSxDQUFDRSxrQkFBa0IsQ0FBQ0gsT0FBTyxFQUFFTSxTQUFrQixzQkFDckZmLDhCQUE4QixHQUFHVSxNQUFNLENBQUNFLGtCQUFrQixDQUFDSCxPQUFPLEVBQUVPLFNBQW1CLHVCQUN2RmYsK0JBQStCLEdBQUdTLE1BQU0sQ0FBQ0Usa0JBQWtCLENBQUNILE9BQU8sRUFBRVEsU0FBb0Isd0JBQ3pGQyxnQkFBZ0IsY0FBT1YsS0FBSyxFQUFULENBQUM7b0JBQVNYLDRCQUE0QjtvQkFBRUMsNEJBQTRCO29CQUFFQyw2QkFBNkI7b0JBQUVDLDhCQUE4QjtvQkFBRUMsK0JBQStCO2dCQUF1QixDQUFDLENBQTVMLE1BQTRMLG9CQUFuQlUsa0JBQWtCO2dCQUVwTixNQUFNLENBQUNPLGdCQUFnQjtZQUN6QixDQUFDOzs7OztrQkF0Q2tCdEIsZ0JBQWdCIn0=