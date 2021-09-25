"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
var _vector = require("../maths/vector");
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
var Normal = /*#__PURE__*/ function() {
    function Normal(extent) {
        _classCallCheck(this, Normal);
        this.extent = extent;
    }
    _createClass(Normal, [
        {
            key: "getExtent",
            value: function getExtent() {
                return this.extent;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var extent = cloneExtent(this.extent), normal = new Normal(extent);
                return normal;
            }
        }
    ], [
        {
            key: "fromVertices",
            value: function fromVertices(vertices) {
                var firstVertex = (0, _array).first(vertices), secondVertex = (0, _array).second(vertices), thirdVertex = (0, _array).third(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = (0, _vector).subtract3(secondPosition, firstPosition), secondExtent = (0, _vector).subtract3(thirdPosition, firstPosition), extent = (0, _vector).normalise3((0, _vector).cross3(firstExtent, secondExtent)), normal = new Normal(extent);
                return normal;
            }
        }
    ]);
    return Normal;
}();
exports.default = Normal;
function cloneExtent(extent) {
    return extent.slice();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbm9ybWFsLmpzIl0sIm5hbWVzIjpbImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJub3JtYWxpc2UzIiwic3VidHJhY3QzIiwiY3Jvc3MzIiwiTm9ybWFsIiwiY29uc3RydWN0b3IiLCJleHRlbnQiLCJnZXRFeHRlbnQiLCJjbG9uZSIsImNsb25lRXh0ZW50Iiwibm9ybWFsIiwiZnJvbVZlcnRpY2VzIiwidmVydGljZXMiLCJmaXJzdFZlcnRleCIsInNlY29uZFZlcnRleCIsInRoaXJkVmVydGV4IiwiZmlyc3RQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwic2Vjb25kUG9zaXRpb24iLCJ0aGlyZFBvc2l0aW9uIiwiZmlyc3RFeHRlbnQiLCJzZWNvbmRFeHRlbnQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFeUIsR0FBb0IsQ0FBcEIsTUFBb0I7QUFDWCxHQUFpQixDQUFqQixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUMsTUFBTSxpQkFBWixRQUFRO2FBQUYsTUFBTSxDQUNiLE1BQU07OEJBREMsTUFBTTtRQUV2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07O2lCQUZILE1BQU07O1lBS3pCLEdBQVMsRUFBVCxDQUFTO21CQUFULFFBQVEsQ0FBUixTQUFTLEdBQUcsQ0FBQztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDcEIsQ0FBQzs7O1lBRUQsR0FBSyxFQUFMLENBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssR0FBRyxDQUFDO2dCQUNQLEdBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQ2hDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBRWhDLE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQzs7OztZQUVNLEdBQVksRUFBWixDQUFZO21CQUFuQixRQUFRLENBQUQsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3QixHQUFLLENBQUMsV0FBVyxPQXBCZ0IsTUFBb0IsUUFvQjNCLFFBQVEsR0FDNUIsWUFBWSxPQXJCZSxNQUFvQixTQXFCekIsUUFBUSxHQUM5QixXQUFXLE9BdEJnQixNQUFvQixRQXNCM0IsUUFBUSxHQUM1QixhQUFhLEdBQUcsV0FBVyxDQUFDLFdBQVcsSUFDdkMsY0FBYyxHQUFHLFlBQVksQ0FBQyxXQUFXLElBQ3pDLGFBQWEsR0FBRyxXQUFXLENBQUMsV0FBVyxJQUN2QyxXQUFXLE9BekJ5QixPQUFpQixZQXlCN0IsY0FBYyxFQUFFLGFBQWEsR0FDckQsWUFBWSxPQTFCd0IsT0FBaUIsWUEwQjVCLGFBQWEsRUFBRSxhQUFhLEdBQ3JELE1BQU0sT0EzQjhCLE9BQWlCLGlCQUFqQixPQUFpQixTQTJCMUIsV0FBVyxFQUFFLFlBQVksSUFDcEQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFFaEMsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7V0E3QmtCLE1BQU07O2tCQUFOLE1BQU07U0FnQ2xCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztBQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub3JtYWxpc2UzLCBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IoZXh0ZW50KSB7XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVFeHRlbnQoZXh0ZW50KSB7IHJldHVybiBleHRlbnQuc2xpY2UoKTsgfVxuIl19