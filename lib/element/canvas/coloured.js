"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _canvas = _interopRequireDefault(require("../../element/canvas"));
var _coloured = _interopRequireDefault(require("../../primitive/facet/coloured"));
var _array = require("../../utilities/array");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ColouredCanvasElement = /*#__PURE__*/ function(CanvasElement) {
    _inherits(ColouredCanvasElement, CanvasElement);
    function ColouredCanvasElement(maskReference, transform, facets, masks, coordinates, indexes, colour) {
        _classCallCheck(this, ColouredCanvasElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredCanvasElement).call(this, maskReference, transform, facets, masks));
        _this.coordinates = coordinates;
        _this.indexes = indexes;
        _this.colour = colour;
        return _this;
    }
    _createClass(ColouredCanvasElement, [
        {
            key: "createFacets",
            value: function createFacets(marginOfError) {
                var _this = this;
                _get(_getPrototypeOf(ColouredCanvasElement.prototype), "createFacets", this).call(this, marginOfError);
                var indexTuples = this.indexes, facets1 = indexTuples.reduce(function(facets, indexTuple) {
                    var coordinateTuples = _this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, _this.colour, marginOfError), facet = colouredFacet; ///
                    if (facet !== null) {
                        (0, _array).add(facets, facet);
                    }
                    return facets;
                }, []);
                this.setFacets(facets1);
            }
        },
        {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
                var facets = this.getFacets();
                colourRenderer.addFacets(facets);
                _get(_getPrototypeOf(ColouredCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, colour) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++){
                    remainingArguments[_key - 5] = arguments[_key];
                }
                var _CanvasElement;
                return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                    Class,
                    properties,
                    coordinates,
                    indexes,
                    colour
                ].concat(_toConsumableArray(remainingArguments)));
            }
        }
    ]);
    return ColouredCanvasElement;
}(_canvas.default);
exports.default = ColouredCanvasElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcyk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgc3VwZXIuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICBmYWNldCA9IGNvbG91cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsIm1hc2tSZWZlcmVuY2UiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJtYXNrcyIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsImNyZWF0ZUZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJpbmRleFR1cGxlcyIsInJlZHVjZSIsImluZGV4VHVwbGUiLCJjb29yZGluYXRlVHVwbGVzIiwiY29sb3VyZWRGYWNldCIsImZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IiLCJmYWNldCIsInNldEZhY2V0cyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZ2V0RmFjZXRzIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDYW52YXNFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVjLEdBQXNCLENBQXRCLE9BQXNCO0FBQ3RCLEdBQWdDLENBQWhDLFNBQWdDO0FBRXRDLEdBQXVCLENBQXZCLE1BQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRCQSxxQkFBcUIsaUJBQTNCLFFBQVE7Y0FBRkEscUJBQXFCO2FBQXJCQSxxQkFBcUIsQ0FDNUJDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE1BQU07OEJBRDlEUCxxQkFBcUI7O2lFQUFyQkEscUJBQXFCLGFBRWhDQyxhQUFhLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLO2NBRXhDQyxXQUFXLEdBQUdBLFdBQVc7Y0FDekJDLE9BQU8sR0FBR0EsT0FBTztjQUNqQkMsTUFBTSxHQUFHQSxNQUFNOzs7aUJBTkhQLHFCQUFxQjs7WUFTeENRLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLENBQUNDLGFBQWEsRUFBRSxDQUFDOztxQ0FUVlQscUJBQXFCLGFBVWhDUSxDQUFZLGVBQWxCLElBQUssYUFBY0MsYUFBYTtnQkFFaEMsR0FBSyxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDSixPQUFPLEVBQzFCSCxPQUFNLEdBQUdPLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBUFIsTUFBTSxFQUFFUyxVQUFVLEVBQUssQ0FBQztvQkFDbkQsR0FBSyxDQUFDQyxnQkFBZ0IsU0FBUVIsV0FBVyxFQUNuQ1MsYUFBYSxHQW5CTCxTQUFnQyxTQW1CVkMsb0RBQW9ELENBQUNGLGdCQUFnQixFQUFFRCxVQUFVLFFBQU9MLE1BQU0sRUFBRUUsYUFBYSxHQUMzSU8sS0FBSyxHQUFHRixhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVqQyxFQUFFLEVBQUVFLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQzs0QkFwQmIsTUFBdUIsTUFxQnpCYixNQUFNLEVBQUVhLEtBQUs7b0JBQ25CLENBQUM7b0JBRUQsTUFBTSxDQUFDYixNQUFNO2dCQUNmLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRVgsSUFBSSxDQUFDYyxTQUFTLENBQUNkLE9BQU07WUFDdkIsQ0FBQzs7O1lBRURlLEdBQVMsRUFBVEEsQ0FBUzttQkFBVEEsUUFBUSxDQUFSQSxTQUFTLENBQUNDLGNBQWMsRUFBRUMsZUFBZSxFQUFFLENBQUM7Z0JBQzFDLEdBQUssQ0FBQ2pCLE1BQU0sR0FBRyxJQUFJLENBQUNrQixTQUFTO2dCQUU3QkYsY0FBYyxDQUFDRCxTQUFTLENBQUNmLE1BQU07cUNBL0JkSCxxQkFBcUIsYUFpQ2hDa0IsQ0FBUyxZQUFmLElBQUssYUFBV0MsY0FBYyxFQUFFQyxlQUFlO1lBQ2pELENBQUM7Ozs7WUFFTUUsR0FBYyxFQUFkQSxDQUFjO21CQUFyQixRQUFRLENBQURBLGNBQWMsQ0FBQ0MsS0FBSyxFQUFFQyxVQUFVLEVBQUVuQixXQUFXLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUF5QixDQUFDO2dCQUF4QixHQUFHa0IsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQkEsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7b0JBQUVBLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO29CQUFXQyxjQUFhO2dCQUFwQixNQUFNLEVBQUNBLGNBQWEsR0F6QzVGLE9BQXNCLFVBeUN1RUosY0FBYyxDQUE1QkksS0FBb0csQ0FBcEdBLGNBQWEsRUFBYkEsQ0FBQztvQkFBNEJILEtBQUs7b0JBQUVDLFVBQVU7b0JBQUVuQixXQUFXO29CQUFFQyxPQUFPO29CQUFFQyxNQUFNO2dCQUF1QixDQUFDLENBQXBHbUIsTUFBb0csb0JBQW5CRCxrQkFBa0I7WUFBRyxDQUFDOzs7V0FwQzNMekIscUJBQXFCO0VBTGhCLE9BQXNCO2tCQUszQkEscUJBQXFCIn0=