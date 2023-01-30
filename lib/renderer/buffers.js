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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9idWZmZXJzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVuZGVyZXJCdWZmZXJzIiwidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsInZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyIsInZlcnRleFBvc2l0aW9uc0J1ZmZlciIsInZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsImNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlciIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsInZlcnRleEluZGV4ZXNEYXRhIiwiY3JlYXRlRWxlbWVudEJ1ZmZlciIsImJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kQnVmZmVyIiwiYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlciIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIiLCJiaW5kRWxlbWVudEJ1ZmZlciIsImNyZWF0ZUJ1ZmZlcnMiLCJiaW5kQnVmZmVycyIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJyZW5kZXJlckJ1ZmZlcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhyQixJQUFNQyx5QkFBeUIsR0FDekJDLDJCQUEyQjtBQUVsQixJQUFBLEFBQU1GLGdDQUFOO2FBQU1BLGdCQUNQRyxxQkFBcUIsRUFBRUMsbUJBQW1CLEVBQUVDLDBCQUEwQjs4QkFEL0RMO1FBRWpCLElBQUksQ0FBQ0cscUJBQXFCLEdBQUdBO1FBQzdCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBO1FBQzNCLElBQUksQ0FBQ0MsMEJBQTBCLEdBQUdBOztpQkFKakJMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsbUJBQW1CLEVBQUVDLE1BQU0sRUFBRTtnQkFDdkQsSUFBSSxDQUFDTCxxQkFBcUIsR0FBR0ssT0FBT0MsWUFBWSxDQUFDRjtZQUNuRDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSwwQkFBMEJDLGlCQUFpQixFQUFFSCxNQUFNLEVBQUU7Z0JBQ25ELElBQUksQ0FBQ0osbUJBQW1CLEdBQUdJLE9BQU9DLFlBQVksQ0FBQ0U7WUFDakQ7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUNBQWlDQyxpQkFBaUIsRUFBRUwsTUFBTSxFQUFFO2dCQUMxRCxJQUFJLENBQUNILDBCQUEwQixHQUFHRyxPQUFPTSxtQkFBbUIsQ0FBQ0Q7WUFDL0Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyw2QkFBNkIsRUFBRVIsTUFBTSxFQUFFO2dCQUM3REEsT0FBT1MsVUFBVSxDQUFDLElBQUksQ0FBQ2IsbUJBQW1CLEVBQUVZLCtCQUErQmY7WUFDN0U7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQkMsK0JBQStCLEVBQUVYLE1BQU0sRUFBRTtnQkFDakVBLE9BQU9TLFVBQVUsQ0FBQyxJQUFJLENBQUNkLHFCQUFxQixFQUFFZ0IsaUNBQWlDakI7WUFDakY7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQlosTUFBTSxFQUFFO2dCQUNyQ0EsT0FBT2EsaUJBQWlCLENBQUMsSUFBSSxDQUFDaEIsMEJBQTBCO1lBQzFEOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjZixtQkFBbUIsRUFBRUksaUJBQWlCLEVBQUVFLGlCQUFpQixFQUFFTCxNQUFNLEVBQUU7Z0JBQy9FLElBQUksQ0FBQ0YsMkJBQTJCLENBQUNDLHFCQUFxQkM7Z0JBQ3RELElBQUksQ0FBQ0UseUJBQXlCLENBQUNDLG1CQUFtQkg7Z0JBQ2xELElBQUksQ0FBQ0ksZ0NBQWdDLENBQUNDLG1CQUFtQkw7WUFDM0Q7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWVAsNkJBQTZCLEVBQUVHLCtCQUErQixFQUFFWCxNQUFNLEVBQUU7Z0JBQ2xGLElBQUksQ0FBQ08sdUJBQXVCLENBQUNDLCtCQUErQlI7Z0JBQzVELElBQUksQ0FBQ1UseUJBQXlCLENBQUNDLGlDQUFpQ1g7Z0JBQ2hFLElBQUksQ0FBQ1ksOEJBQThCLENBQUNaO1lBQ3RDOzs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLLEVBQXlCO2dCQUF2QixJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxLQUFxQixHQUFyQixPQUFBLEdBQUEsT0FBQSxNQUFBLE9BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7Z0JBQUQ7Z0JBQzVDLElBQU12Qix3QkFBd0IsSUFBSSxFQUM1QkMsc0JBQXNCLElBQUksRUFDMUJDLDZCQUE2QixJQUFJLEVBQ2pDc0Isa0JBQWtCLFdBQUlGLE9BQUo7b0JBQVV0QjtvQkFBdUJDO29CQUFxQkM7aUJBQWtELENBQXhHLE9BQWtGLG1CQUFHcUI7Z0JBRTdHLE9BQU9DO1lBQ1Q7OztXQWxEbUIzQiJ9