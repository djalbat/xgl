'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    vectorMaths = require('../maths/vector'),
    arrayUtilities = require('../utilities/array'),
    midPointUtilities = require('../utilities/midPoint');

var third = arrayUtilities.third,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3,
    projectMidPointPositionOntoXYPlane = midPointUtilities.projectMidPointPositionOntoXYPlane;

var MaskingEdge = function (_Edge) {
      _inherits(MaskingEdge, _Edge);

      function MaskingEdge() {
            _classCallCheck(this, MaskingEdge);

            return _possibleConstructorReturn(this, (MaskingEdge.__proto__ || Object.getPrototypeOf(MaskingEdge)).apply(this, arguments));
      }

      _createClass(MaskingEdge, [{
            key: 'isMidPointPositionToTheLeft',
            value: function isMidPointPositionToTheLeft(midPointPosition) {
                  midPointPosition = projectMidPointPositionOntoXYPlane(midPointPosition); ///

                  var extent = this.getExtent(),
                      position = this.getPosition(),
                      midPointRelativePosition = subtract3(midPointPosition, position),
                      ///
                  crossProduct = cross3(extent, midPointRelativePosition),
                      ///
                  crossProductComponents = crossProduct,
                      ///
                  thirdCrossProductComponent = third(crossProductComponents),
                      midPointPositionToTheLeft = thirdCrossProductComponent > 0;

                  return midPointPositionToTheLeft;
            }
      }, {
            key: 'isMidPointPositionToTheRight',
            value: function isMidPointPositionToTheRight(midPointPosition) {
                  var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition),
                      midPointPositionToTheRight = !midPointPositionToTheLeft;

                  return midPointPositionToTheRight;
            }
      }], [{
            key: 'fromStartVertexAndEndVertex',
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
                  return Edge.fromStartVertexAndEndVertex(MaskingEdge, startVertex, endVertex);
            }
      }]);

      return MaskingEdge;
}(Edge);

module.exports = MaskingEdge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lZGdlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJ2ZWN0b3JNYXRocyIsImFycmF5VXRpbGl0aWVzIiwibWlkUG9pbnRVdGlsaXRpZXMiLCJ0aGlyZCIsInN1YnRyYWN0MyIsImNyb3NzMyIsInByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUiLCJNYXNraW5nRWRnZSIsIm1pZFBvaW50UG9zaXRpb24iLCJleHRlbnQiLCJnZXRFeHRlbnQiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uIiwiY3Jvc3NQcm9kdWN0IiwiY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyIsInRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50IiwibWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCIsImlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCIsIm1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsY0FBY0QsUUFBUSxpQkFBUixDQURwQjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUgxQjs7QUFLTSxJQUFFSSxLQUFGLEdBQVlGLGNBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDd0JKLFdBRHhCLENBQ0VJLFNBREY7QUFBQSxJQUNhQyxNQURiLEdBQ3dCTCxXQUR4QixDQUNhSyxNQURiO0FBQUEsSUFFRUMsa0NBRkYsR0FFeUNKLGlCQUZ6QyxDQUVFSSxrQ0FGRjs7SUFJQUMsVzs7Ozs7Ozs7Ozs7d0RBQ3dCQyxnQixFQUFrQjtBQUM1Q0EscUNBQW1CRixtQ0FBbUNFLGdCQUFuQyxDQUFuQixDQUQ0QyxDQUM4Qjs7QUFFMUUsc0JBQU1DLFNBQVMsS0FBS0MsU0FBTCxFQUFmO0FBQUEsc0JBQ01DLFdBQVcsS0FBS0MsV0FBTCxFQURqQjtBQUFBLHNCQUVNQywyQkFBMkJULFVBQVVJLGdCQUFWLEVBQTRCRyxRQUE1QixDQUZqQztBQUFBLHNCQUV3RTtBQUNsRUcsaUNBQWVULE9BQU9JLE1BQVAsRUFBZUksd0JBQWYsQ0FIckI7QUFBQSxzQkFHK0Q7QUFDekRFLDJDQUF5QkQsWUFKL0I7QUFBQSxzQkFJOEM7QUFDeENFLCtDQUE2QmIsTUFBTVksc0JBQU4sQ0FMbkM7QUFBQSxzQkFNTUUsNEJBQTZCRCw2QkFBNkIsQ0FOaEU7O0FBUUEseUJBQU9DLHlCQUFQO0FBQ0Q7Ozt5REFFNEJULGdCLEVBQWtCO0FBQzdDLHNCQUFNUyw0QkFBNEIsS0FBS0MsMkJBQUwsQ0FBaUNWLGdCQUFqQyxDQUFsQztBQUFBLHNCQUNNVyw2QkFBNkIsQ0FBQ0YseUJBRHBDOztBQUdBLHlCQUFPRSwwQkFBUDtBQUNEOzs7d0RBRWtDQyxXLEVBQWFDLFMsRUFBVztBQUFFLHlCQUFPdkIsS0FBS3dCLDJCQUFMLENBQWlDZixXQUFqQyxFQUE4Q2EsV0FBOUMsRUFBMkRDLFNBQTNELENBQVA7QUFBK0U7Ozs7RUF0QnBIdkIsSTs7QUF5QjFCeUIsT0FBT0MsT0FBUCxHQUFpQmpCLFdBQWpCIiwiZmlsZSI6Im1hc2tpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4uL21hdGhzL3ZlY3RvcicpLCAgXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgbWlkUG9pbnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWlkUG9pbnQnKTtcblxuY29uc3QgeyB0aGlyZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0MywgY3Jvc3MzIH0gPSB2ZWN0b3JNYXRocyxcbiAgICAgIHsgcHJvamVjdE1pZFBvaW50UG9zaXRpb25PbnRvWFlQbGFuZSB9ID0gbWlkUG9pbnRVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0ID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyA9IGNyb3NzUHJvZHVjdCwgIC8vL1xuICAgICAgICAgIHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID0gdGhpcmQoY3Jvc3NQcm9kdWN0Q29tcG9uZW50cyksXG4gICAgICAgICAgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9ICh0aGlyZENyb3NzUHJvZHVjdENvbXBvbmVudCA+IDApO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gIH1cbiAgXG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHQobWlkUG9pbnRQb3NpdGlvbikge1xuICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQgPSB0aGlzLmlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodCA9ICFtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0O1xuICAgIFxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7IHJldHVybiBFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChNYXNraW5nRWRnZSwgc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRWRnZTtcbiJdfQ==