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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9ybWFsc01hdHJpeE5hbWUgfSBmcm9tIFwiLi4vc291cmNlL2xpZ2h0aW5nXCI7XG5cbmltcG9ydCB7IG9mZnNldHNNYXRyaXhOYW1lLCByb3RhdGlvbnNNYXRyaXhOYW1lLCBwb3NpdGlvbk1hdHJpeE5hbWUsIHByb2plY3Rpb25NYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmb3JtTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbikge1xuICAgIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5ub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShDbGFzcywgcHJvZ3JhbSwgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBvZmZzZXRzTWF0cml4TmFtZSksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbm9ybWFsc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gY2FudmFzLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBwb3NpdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcm90YXRpb25zTWF0cml4TmFtZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcHJvamVjdGlvbk1hdHJpeE5hbWUpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBuZXcgQ2xhc3Mob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gdW5pZm9ybUxvY2F0aW9uczsgICAgICAgXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJVbmlmb3JtTG9jYXRpb25zIiwib2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsIm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsInByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImZyb21Qcm9ncmFtIiwiQ2xhc3MiLCJwcm9ncmFtIiwiY2FudmFzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidW5pZm9ybUxvY2F0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFc0Is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