'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vectorMaths = require('./maths/vector'),
    arrayUtilities = require('./utilities/array');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    normalise3 = vectorMaths.normalise3,
    subtract3 = vectorMaths.subtract3,
    cross3 = vectorMaths.cross3;

var Normal = function () {
  function Normal(extent) {
    _classCallCheck(this, Normal);

    this.extent = extent;
  }

  _createClass(Normal, [{
    key: 'clone',
    value: function clone() {
      var extent = cloneExtent(this.extent),
          normal = new Normal(extent);

      return normal;
    }
  }, {
    key: 'getExtent',
    value: function getExtent() {
      return this.extent;
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var firstVertex = first(vertices),
          secondVertex = second(vertices),
          thirdVertex = third(vertices),
          firstPosition = firstVertex.getPosition(),
          secondPosition = secondVertex.getPosition(),
          thirdPosition = thirdVertex.getPosition(),
          firstExtent = subtract3(secondPosition, firstPosition),
          secondExtent = subtract3(thirdPosition, firstPosition),
          extent = normalise3(cross3(firstExtent, secondExtent)),
          normal = new Normal(extent);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;

function cloneExtent(extent) {
  return extent.slice();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ub3JtYWwuanMiXSwibmFtZXMiOlsidmVjdG9yTWF0aHMiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwibm9ybWFsaXNlMyIsInN1YnRyYWN0MyIsImNyb3NzMyIsIk5vcm1hbCIsImV4dGVudCIsImNsb25lRXh0ZW50Iiwibm9ybWFsIiwidmVydGljZXMiLCJmaXJzdFZlcnRleCIsInNlY29uZFZlcnRleCIsInRoaXJkVmVydGV4IiwiZmlyc3RQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwic2Vjb25kUG9zaXRpb24iLCJ0aGlyZFBvc2l0aW9uIiwiZmlyc3RFeHRlbnQiLCJzZWNvbmRFeHRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjQyxRQUFRLGdCQUFSLENBQXBCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG1CQUFSLENBRHZCOztJQUdRRSxLLEdBQXlCRCxjLENBQXpCQyxLO0lBQU9DLE0sR0FBa0JGLGMsQ0FBbEJFLE07SUFBUUMsSyxHQUFVSCxjLENBQVZHLEs7SUFDZkMsVSxHQUFrQ04sVyxDQUFsQ00sVTtJQUFZQyxTLEdBQXNCUCxXLENBQXRCTyxTO0lBQVdDLE0sR0FBV1IsVyxDQUFYUSxNOztJQUV6QkMsTTtBQUNKLGtCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzRCQUVPO0FBQ04sVUFBTUEsU0FBU0MsWUFBWSxLQUFLRCxNQUFqQixDQUFmO0FBQUEsVUFDTUUsU0FBUyxJQUFJSCxNQUFKLENBQVdDLE1BQVgsQ0FEZjs7QUFHQSxhQUFPRSxNQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsTUFBWjtBQUNEOzs7aUNBRW1CRyxRLEVBQVU7QUFDNUIsVUFBTUMsY0FBY1gsTUFBTVUsUUFBTixDQUFwQjtBQUFBLFVBQ01FLGVBQWVYLE9BQU9TLFFBQVAsQ0FEckI7QUFBQSxVQUVNRyxjQUFjWCxNQUFNUSxRQUFOLENBRnBCO0FBQUEsVUFHTUksZ0JBQWdCSCxZQUFZSSxXQUFaLEVBSHRCO0FBQUEsVUFJTUMsaUJBQWlCSixhQUFhRyxXQUFiLEVBSnZCO0FBQUEsVUFLTUUsZ0JBQWdCSixZQUFZRSxXQUFaLEVBTHRCO0FBQUEsVUFNTUcsY0FBY2QsVUFBVVksY0FBVixFQUEwQkYsYUFBMUIsQ0FOcEI7QUFBQSxVQU9NSyxlQUFlZixVQUFVYSxhQUFWLEVBQXlCSCxhQUF6QixDQVByQjtBQUFBLFVBUU1QLFNBQVNKLFdBQVdFLE9BQU9hLFdBQVAsRUFBb0JDLFlBQXBCLENBQVgsQ0FSZjtBQUFBLFVBU01WLFNBQVMsSUFBSUgsTUFBSixDQUFXQyxNQUFYLENBVGY7O0FBV0EsYUFBT0UsTUFBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQmYsTUFBakI7O0FBRUEsU0FBU0UsV0FBVCxDQUFxQkQsTUFBckIsRUFBNkI7QUFBRSxTQUFPQSxPQUFPZSxLQUFQLEVBQVA7QUFBd0IiLCJmaWxlIjoibm9ybWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWN0b3JNYXRocyA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjdG9yJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub3JtYWxpc2UzLCBzdWJ0cmFjdDMsIGNyb3NzMyB9ID0gdmVjdG9yTWF0aHM7XG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKGV4dGVudCkge1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb3JtYWw7XG5cbmZ1bmN0aW9uIGNsb25lRXh0ZW50KGV4dGVudCkgeyByZXR1cm4gZXh0ZW50LnNsaWNlKCk7IH1cbiJdfQ==