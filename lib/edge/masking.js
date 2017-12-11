'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array');

var third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3;

var MaskingEdge = function (_Edge) {
      _inherits(MaskingEdge, _Edge);

      function MaskingEdge() {
            _classCallCheck(this, MaskingEdge);

            return _possibleConstructorReturn(this, (MaskingEdge.__proto__ || Object.getPrototypeOf(MaskingEdge)).apply(this, arguments));
      }

      _createClass(MaskingEdge, [{
            key: 'isMidPointToTheLeft',
            value: function isMidPointToTheLeft(midPoint) {
                  midPoint = projectOntoXYPlane(midPoint); ///

                  var position = this.getPosition(),
                      extent = this.getExtent(),
                      midPointDirection = subtract3(midPoint, position),
                      crossProduct = cross3(extent, midPointDirection),
                      ///
                  crossProductComponents = crossProduct,
                      ///
                  thirdCrossProductComponent = third(crossProductComponents),
                      midPointToTheLeft = thirdCrossProductComponent > 0;

                  return midPointToTheLeft;
            }
      }, {
            key: 'isMidPointToTheRight',
            value: function isMidPointToTheRight(midPoint) {
                  var midPointToTheLeft = this.isMidPointToTheLeft(midPoint),
                      midPointToTheRight = !midPointToTheLeft; ///

                  return midPointToTheRight;
            }
      }], [{
            key: 'fromStartVertexAndEndVertex',
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
                  var position = startVertex.slice(),
                      ///
                  extent = subtract3(endVertex, startVertex),
                      maskingEdge = new MaskingEdge(position, extent);

                  return maskingEdge;
            }
      }]);

      return MaskingEdge;
}(Edge);

module.exports = MaskingEdge;

function projectOntoXYPlane(vertex) {
      vertex = [].concat(_toConsumableArray(vertex.slice(0, 2)), [0]); ///

      return vertex;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lZGdlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsImFycmF5VXRpbGl0aWVzIiwidGhpcmQiLCJzdWJ0cmFjdDMiLCJjcm9zczMiLCJNYXNraW5nRWRnZSIsIm1pZFBvaW50IiwicHJvamVjdE9udG9YWVBsYW5lIiwicG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImV4dGVudCIsImdldEV4dGVudCIsIm1pZFBvaW50RGlyZWN0aW9uIiwiY3Jvc3NQcm9kdWN0IiwiY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyIsInRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50IiwibWlkUG9pbnRUb1RoZUxlZnQiLCJpc01pZFBvaW50VG9UaGVMZWZ0IiwibWlkUG9pbnRUb1RoZVJpZ2h0Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJzbGljZSIsIm1hc2tpbmdFZGdlIiwibW9kdWxlIiwiZXhwb3J0cyIsInZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2Qjs7QUFJTSxJQUFFRyxLQUFGLEdBQVlELGNBQVosQ0FBRUMsS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDd0JILFdBRHhCLENBQ0VHLFNBREY7QUFBQSxJQUNhQyxNQURiLEdBQ3dCSixXQUR4QixDQUNhSSxNQURiOztJQUdBQyxXOzs7Ozs7Ozs7OztnREFDZ0JDLFEsRUFBVTtBQUM1QkEsNkJBQVdDLG1CQUFtQkQsUUFBbkIsQ0FBWCxDQUQ0QixDQUNjOztBQUUxQyxzQkFBTUUsV0FBVyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsc0JBQ01DLFNBQVMsS0FBS0MsU0FBTCxFQURmO0FBQUEsc0JBRU1DLG9CQUFvQlQsVUFBVUcsUUFBVixFQUFvQkUsUUFBcEIsQ0FGMUI7QUFBQSxzQkFHTUssZUFBZVQsT0FBT00sTUFBUCxFQUFlRSxpQkFBZixDQUhyQjtBQUFBLHNCQUd3RDtBQUNsREUsMkNBQXlCRCxZQUovQjtBQUFBLHNCQUk4QztBQUN4Q0UsK0NBQTZCYixNQUFNWSxzQkFBTixDQUxuQztBQUFBLHNCQU1NRSxvQkFBcUJELDZCQUE2QixDQU54RDs7QUFRQSx5QkFBT0MsaUJBQVA7QUFDRDs7O2lEQUVvQlYsUSxFQUFVO0FBQzdCLHNCQUFNVSxvQkFBb0IsS0FBS0MsbUJBQUwsQ0FBeUJYLFFBQXpCLENBQTFCO0FBQUEsc0JBQ01ZLHFCQUFxQixDQUFDRixpQkFENUIsQ0FENkIsQ0FFbUI7O0FBRWhELHlCQUFPRSxrQkFBUDtBQUNEOzs7d0RBRWtDQyxXLEVBQWFDLFMsRUFBVztBQUN6RCxzQkFBTVosV0FBV1csWUFBWUUsS0FBWixFQUFqQjtBQUFBLHNCQUFzQztBQUNoQ1gsMkJBQVNQLFVBQVVpQixTQUFWLEVBQXFCRCxXQUFyQixDQURmO0FBQUEsc0JBRU1HLGNBQWMsSUFBSWpCLFdBQUosQ0FBZ0JHLFFBQWhCLEVBQTBCRSxNQUExQixDQUZwQjs7QUFJQSx5QkFBT1ksV0FBUDtBQUNEOzs7O0VBNUJ1QnhCLEk7O0FBK0IxQnlCLE9BQU9DLE9BQVAsR0FBaUJuQixXQUFqQjs7QUFFQSxTQUFTRSxrQkFBVCxDQUE0QmtCLE1BQTVCLEVBQW9DO0FBQ2xDQSw0Q0FBYUEsT0FBT0osS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBYixJQUFpQyxDQUFqQyxHQURrQyxDQUNJOztBQUV0QyxhQUFPSSxNQUFQO0FBQ0QiLCJmaWxlIjoibWFza2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIHZlY3Rvck1hdGhzID0gcmVxdWlyZSgnLi4vbWF0aHMvdmVjdG9yJyksICBcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpIHtcbiAgICBtaWRQb2ludCA9IHByb2plY3RPbnRvWFlQbGFuZShtaWRQb2ludCk7ICAvLy9cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgbWlkUG9pbnREaXJlY3Rpb24gPSBzdWJ0cmFjdDMobWlkUG9pbnQsIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3QgPSBjcm9zczMoZXh0ZW50LCBtaWRQb2ludERpcmVjdGlvbiksIC8vL1xuICAgICAgICAgIGNyb3NzUHJvZHVjdENvbXBvbmVudHMgPSBjcm9zc1Byb2R1Y3QsICAvLy9cbiAgICAgICAgICB0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA9IHRoaXJkKGNyb3NzUHJvZHVjdENvbXBvbmVudHMpLFxuICAgICAgICAgIG1pZFBvaW50VG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRUb1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRUb1RoZVJpZ2h0KG1pZFBvaW50KSB7XG4gICAgY29uc3QgbWlkUG9pbnRUb1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRUb1RoZUxlZnQobWlkUG9pbnQpLFxuICAgICAgICAgIG1pZFBvaW50VG9UaGVSaWdodCA9ICFtaWRQb2ludFRvVGhlTGVmdDsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFRvVGhlUmlnaHQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gc3RhcnRWZXJ0ZXguc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleCwgc3RhcnRWZXJ0ZXgpLFxuICAgICAgICAgIG1hc2tpbmdFZGdlID0gbmV3IE1hc2tpbmdFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hc2tpbmdFZGdlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFza2luZ0VkZ2U7XG5cbmZ1bmN0aW9uIHByb2plY3RPbnRvWFlQbGFuZSh2ZXJ0ZXgpIHtcbiAgdmVydGV4ID0gWy4uLnZlcnRleC5zbGljZSgwLCAyKSwgMF07ICAvLy9cblxuICByZXR1cm4gdmVydGV4O1xufVxuIl19