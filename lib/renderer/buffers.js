"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var vertexNormalComponents = 3, vertexPositionComponents = 3;
var RendererBuffers = /*#__PURE__*/ function() {
    function RendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
        _classCallCheck(this, RendererBuffers);
        this.vertexPositionsBuffer = vertexPositionsBuffer;
        this.vertexNormalsBuffer = vertexNormalsBuffer;
        this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
    }
    _createClass(RendererBuffers, [
        {
            key: "createVertexPositionsBuffer",
            value: function createVertexPositionsBuffer(vertexPositionsData, canvas) {
                this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
            }
        },
        {
            key: "createVertexNormalsBuffer",
            value: function createVertexNormalsBuffer(vertexNormalsData, canvas) {
                this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
            }
        },
        {
            key: "createVertexIndexesElementBuffer",
            value: function createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
                this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
            }
        },
        {
            key: "bindVertexNormalsBuffer",
            value: function bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
                canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
            }
        },
        {
            key: "bindVertexPositionsBuffer",
            value: function bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
                canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
            }
        },
        {
            key: "bindVertexIndexesElementBuffer",
            value: function bindVertexIndexesElementBuffer(canvas) {
                canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
            }
        },
        {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
                this.createVertexPositionsBuffer(vertexPositionsData, canvas);
                this.createVertexNormalsBuffer(vertexNormalsData, canvas);
                this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
            }
        },
        {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
                this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
                this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
                this.bindVertexIndexesElementBuffer(canvas);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var vertexPositionsBuffer = null, vertexNormalsBuffer = null, vertexIndexesElementBuffer = null, rendererBuffers = _construct(Class, [
                    vertexPositionsBuffer,
                    vertexNormalsBuffer,
                    vertexIndexesElementBuffer
                ].concat(_toConsumableArray(remainingArguments)));
                return rendererBuffers;
            }
        }
    ]);
    return RendererBuffers;
}();
exports.default = RendererBuffers;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9idWZmZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwiUmVuZGVyZXJCdWZmZXJzIiwidmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4Tm9ybWFsc0J1ZmZlciIsInZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyIiwiY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4UG9zaXRpb25zRGF0YSIsImNhbnZhcyIsImNyZWF0ZUJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsImNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyIiwidmVydGV4SW5kZXhlc0RhdGEiLCJjcmVhdGVFbGVtZW50QnVmZmVyIiwiYmluZFZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXIiLCJiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsImJpbmRFbGVtZW50QnVmZmVyIiwiY3JlYXRlQnVmZmVycyIsImJpbmRCdWZmZXJzIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlbmRlcmVyQnVmZmVycyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosR0FBSyxDQUFDQSxzQkFBc0IsR0FBRyxDQUFDLEVBQzFCQyx3QkFBd0IsR0FBRyxDQUFDO0lBRWJDLGVBQWUsaUJBQXJCLFFBQVE7YUFBRkEsZUFBZSxDQUN0QkMscUJBQXFCLEVBQUVDLG1CQUFtQixFQUFFQywwQkFBMEI7OEJBRC9ESCxlQUFlO1FBRWhDLElBQUksQ0FBQ0MscUJBQXFCLEdBQUdBLHFCQUFxQjtRQUNsRCxJQUFJLENBQUNDLG1CQUFtQixHQUFHQSxtQkFBbUI7UUFDOUMsSUFBSSxDQUFDQywwQkFBMEIsR0FBR0EsMEJBQTBCOztpQkFKM0NILGVBQWU7O1lBT2xDSSxHQUEyQixFQUEzQkEsQ0FBMkI7bUJBQTNCQSxRQUFRLENBQVJBLDJCQUEyQixDQUFDQyxtQkFBbUIsRUFBRUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3hELElBQUksQ0FBQ0wscUJBQXFCLEdBQUdLLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDRixtQkFBbUI7WUFDdEUsQ0FBQzs7O1lBRURHLEdBQXlCLEVBQXpCQSxDQUF5QjttQkFBekJBLFFBQVEsQ0FBUkEseUJBQXlCLENBQUNDLGlCQUFp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