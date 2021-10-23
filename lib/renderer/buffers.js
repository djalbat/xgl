"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9idWZmZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwiUmVuZGVyZXJCdWZmZXJzIiwidmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4Tm9ybWFsc0J1ZmZlciIsInZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyIiwiY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4UG9zaXRpb25zRGF0YSIsImNhbnZhcyIsImNyZWF0ZUJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsImNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyIiwidmVydGV4SW5kZXhlc0RhdGEiLCJjcmVhdGVFbGVtZW50QnVmZmVyIiwiYmluZFZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXIiLCJiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsImJpbmRFbGVtZW50QnVmZmVyIiwiY3JlYXRlQnVmZmVycyIsImJpbmRCdWZmZXJzIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlbmRlcmVyQnVmZmVycyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixHQUFLLENBQUNBLHNCQUFzQixHQUFHLENBQUMsRUFDMUJDLHdCQUF3QixHQUFHLENBQUM7SUFFYkMsZUFBZSxpQkFBckIsUUFBUTthQUFGQSxlQUFlLENBQ3RCQyxxQkFBcUIsRUFBRUMsbUJBQW1CLEVBQUVDLDBCQUEwQjs4QkFEL0RILGVBQWU7UUFFaEMsSUFBSSxDQUFDQyxxQkFBcUIsR0FBR0EscUJBQXFCO1FBQ2xELElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBLG1CQUFtQjtRQUM5QyxJQUFJLENBQUNDLDBCQUEwQixHQUFHQSwwQkFBMEI7O2lCQUozQ0gsZUFBZTs7WUFPbENJLEdBQTJCLEVBQTNCQSxDQUEyQjttQkFBM0JBLFFBQVEsQ0FBUkEsMkJBQTJCLENBQUNDLG1CQUFtQixFQUFFQyxNQUFNLEVBQUUsQ0FBQztnQkFDeEQsSUFBSSxDQUFDTCxxQkFBcUIsR0FBR0ssTUFBTSxDQUFDQyxZQUFZLENBQUNGLG1CQUFtQjtZQUN0RSxDQUFDOzs7WUFFREcsR0FBeUIsRUFBekJBLENBQXlCO21CQUF6QkEsUUFBUSxDQUFSQSx5QkFBeUIsQ0FBQ0MsaUJBQWlCLEVBQUVI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