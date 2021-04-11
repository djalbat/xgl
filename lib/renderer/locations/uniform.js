"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _lighting = require("../source/lighting");
var _position = require("../source/position");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var UniformLocations = function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9ybWFsc01hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5cbmltcG9ydCB7IG9mZnNldHNNYXRyaXhOYW1lLCByb3RhdGlvbnNNYXRyaXhOYW1lLCBwb3NpdGlvbk1hdHJpeE5hbWUsIHByb2plY3Rpb25NYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVzQixTQUFvQjtJQUUyQyxTQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRyxnQkFBZ0I7YUFBaEIsZ0JBQWdCLENBQ3ZCLDRCQUE0QixFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixFQUFFLDhCQUE4QixFQUFFLCtCQUErQjs4QkFEbkosZ0JBQWdCO2FBRTVCLDRCQUE0QixHQUFHLDRCQUE0QjthQUMzRCw0QkFBNEIsR0FBRyw0QkFBNEI7YUFDM0QsNkJBQTZCLEdBQUcsNkJBQTZCO2FBQzdELDhCQUE4QixHQUFHLDhCQUE4QjthQUMvRCwrQkFBK0IsR0FBRywrQkFBK0I7O2lCQU5yRCxnQkFBZ0I7O1lBU25DLEdBQStCLEdBQS9CLCtCQUErQjs0QkFBL0IsK0JBQStCOzRCQUNqQiw0QkFBNEI7Ozs7WUFHMUMsR0FBK0IsR0FBL0IsK0JBQStCOzRCQUEvQiwrQkFBK0I7NEJBQ2pCLDRCQUE0Qjs7OztZQUcxQyxHQUFnQyxHQUFoQyxnQ0FBZ0M7NEJBQWhDLGdDQUFnQzs0QkFDbEIsNkJBQTZCOzs7O1lBRzNDLEdBQWlDLEdBQWpDLGlDQUFpQzs0QkFBakMsaUNBQWlDOzRCQUNuQiw4QkFBOEI7Ozs7WUFHNUMsR0FBa0MsR0FBbEMsa0NBQWtDOzRCQUFsQyxrQ0FBa0M7NEJBQ3BCLCtCQUErQjs7Ozs7WUFHdEMsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTTt3QkFBRSxJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQixrQkFBa0IsYUFBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUI7b0JBQWxCLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjs7b0JBQ3hELDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBaEN1QixTQUFvQixxQkFpQzNHLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBbkN4QyxTQUFvQixxQkFvQzVDLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBbENzQixTQUFvQixzQkFtQzNHLDhCQUE4QixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBbkNxQixTQUFvQix1QkFvQzNHLCtCQUErQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBcENvQixTQUFvQix3QkFxQzNHLGdCQUFnQixjQUFPLEtBQUs7b0JBQUMsNEJBQTRCO29CQUFFLDRCQUE0QjtvQkFBRSw2QkFBNkI7b0JBQUUsOEJBQThCO29CQUFFLCtCQUErQjtrQkFBcEssTUFBNEwsb0JBQW5CLGtCQUFrQjt1QkFFN00sZ0JBQWdCOzs7O1dBckNOLGdCQUFnQjs7a0JBQWhCLGdCQUFnQiJ9