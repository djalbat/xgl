"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RendererBuffers;
    }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
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
var vertexNormalComponents = 3, vertexPositionComponents = 3;
var RendererBuffers = /*#__PURE__*/ function() {
    function RendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
        _class_call_check(this, RendererBuffers);
        this.vertexPositionsBuffer = vertexPositionsBuffer;
        this.vertexNormalsBuffer = vertexNormalsBuffer;
        this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
    }
    _create_class(RendererBuffers, [
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
                ].concat(_to_consumable_array(remainingArguments)));
                return rendererBuffers;
            }
        }
    ]);
    return RendererBuffers;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9idWZmZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzIiwidmVydGV4UG9zaXRpb25Db21wb25lbnRzIiwidmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4Tm9ybWFsc0J1ZmZlciIsInZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyIiwiY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4UG9zaXRpb25zRGF0YSIsImNhbnZhcyIsImNyZWF0ZUJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsImNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyIiwidmVydGV4SW5kZXhlc0RhdGEiLCJjcmVhdGVFbGVtZW50QnVmZmVyIiwiYmluZFZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXIiLCJiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsImJpbmRFbGVtZW50QnVmZmVyIiwiY3JlYXRlQnVmZmVycyIsImJpbmRCdWZmZXJzIiwiZnJvbU5vdGhpbmciLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlbmRlcmVyQnVmZmVycyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIckIsSUFBTUMseUJBQXlCLEdBQ3pCQywyQkFBMkI7QUFFbEIsSUFBQSxBQUFNRixnQ0FBRCxBQUFMO2FBQU1BLGdCQUNQRyxxQkFBcUIsRUFBRUMsbUJBQW1CLEVBQUVDLDBCQUEwQjtnQ0FEL0RMO1FBRWpCLElBQUksQ0FBQ0cscUJBQXFCLEdBQUdBO1FBQzdCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBO1FBQzNCLElBQUksQ0FBQ0MsMEJBQTBCLEdBQUdBOztrQkFKakJMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsbUJBQW1CLEVBQUVDLE1BQU07Z0JBQ3JELElBQUksQ0FBQ0wscUJBQXFCLEdBQUdLLE9BQU9DLFlBQVksQ0FBQ0Y7WUFDbkQ7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCQyxpQkFBaUIsRUFBRUgsTUFBTTtnQkFDakQsSUFBSSxDQUFDSixtQkFBbUIsR0FBR0ksT0FBT0MsWUFBWSxDQUFDRTtZQUNqRDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNDLGlCQUFpQixFQUFFTCxNQUFNO2dCQUN4RCxJQUFJLENBQUNILDBCQUEwQixHQUFHRyxPQUFPTSxtQkFBbUIsQ0FBQ0Q7WUFDL0Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyw2QkFBNkIsRUFBRVIsTUFBTTtnQkFDM0RBLE9BQU9TLFVBQVUsQ0FBQyxJQUFJLENBQUNiLG1CQUFtQixFQUFFWSwrQkFBK0JmO1lBQzdFOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLCtCQUErQixFQUFFWCxNQUFNO2dCQUMvREEsT0FBT1MsVUFBVSxDQUFDLElBQUksQ0FBQ2QscUJBQXFCLEVBQUVnQixpQ0FBaUNqQjtZQUNqRjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCWixNQUFNO2dCQUNuQ0EsT0FBT2EsaUJBQWlCLENBQUMsSUFBSSxDQUFDaEIsMEJBQTBCO1lBQzFEOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjZixtQkFBbUIsRUFBRUksaUJBQWlCLEVBQUVFLGlCQUFpQixFQUFFTCxNQUFNO2dCQUM3RSxJQUFJLENBQUNGLDJCQUEyQixDQUFDQyxxQkFBcUJDO2dCQUN0RCxJQUFJLENBQUNFLHlCQUF5QixDQUFDQyxtQkFBbUJIO2dCQUNsRCxJQUFJLENBQUNJLGdDQUFnQyxDQUFDQyxtQkFBbUJMO1lBQzNEOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlQLDZCQUE2QixFQUFFRywrQkFBK0IsRUFBRVgsTUFBTTtnQkFDaEYsSUFBSSxDQUFDTyx1QkFBdUIsQ0FBQ0MsK0JBQStCUjtnQkFDNUQsSUFBSSxDQUFDVSx5QkFBeUIsQ0FBQ0MsaUNBQWlDWDtnQkFDaEUsSUFBSSxDQUFDWSw4QkFBOEIsQ0FBQ1o7WUFDdEM7Ozs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLFlBQVlDLEtBQUs7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztnQkFDN0MsSUFBTXZCLHdCQUF3QixNQUN4QkMsc0JBQXNCLE1BQ3RCQyw2QkFBNkIsTUFDN0JzQixrQkFBa0IsV0FBSUYsT0FBSjtvQkFBVXRCO29CQUF1QkM7b0JBQXFCQztpQkFBa0QsQ0FBeEcsT0FBa0YscUJBQUdxQjtnQkFFN0csT0FBT0M7WUFDVDs7O1dBbERtQjNCIn0=