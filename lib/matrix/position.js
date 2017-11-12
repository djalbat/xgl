'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Matrix = require('../matrix'),
    mathsUtiltities = require('../utilities/maths');

var identity4 = mathsUtiltities.identity4,
    translate4 = mathsUtiltities.translate4;

var PositionMatrix = function (_Matrix) {
  _inherits(PositionMatrix, _Matrix);

  function PositionMatrix() {
    _classCallCheck(this, PositionMatrix);

    return _possibleConstructorReturn(this, (PositionMatrix.__proto__ || Object.getPrototypeOf(PositionMatrix)).apply(this, arguments));
  }

  _createClass(PositionMatrix, null, [{
    key: 'fromDistance',
    value: function fromDistance(distance) {
      var x = 0,
          y = 0,
          z = -distance,
          ///
      positionMatrix = PositionMatrix.fromCoordinates(x, y, z);

      return positionMatrix;
    }
  }, {
    key: 'fromCoordinates',
    value: function fromCoordinates(x, y, z) {
      var matrix = identity4();

      matrix = translate4(matrix, [x, y, z]);

      var positionMatrix = new PositionMatrix(matrix);

      return positionMatrix;
    }
  }]);

  return PositionMatrix;
}(Matrix);

module.exports = PositionMatrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXRyaXgvcG9zaXRpb24uanMiXSwibmFtZXMiOlsiTWF0cml4IiwicmVxdWlyZSIsIm1hdGhzVXRpbHRpdGllcyIsImlkZW50aXR5NCIsInRyYW5zbGF0ZTQiLCJQb3NpdGlvbk1hdHJpeCIsImRpc3RhbmNlIiwieCIsInkiLCJ6IiwicG9zaXRpb25NYXRyaXgiLCJmcm9tQ29vcmRpbmF0ZXMiLCJtYXRyaXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsa0JBQWtCRCxRQUFRLG9CQUFSLENBRHhCOztJQUdRRSxTLEdBQTBCRCxlLENBQTFCQyxTO0lBQVdDLFUsR0FBZUYsZSxDQUFmRSxVOztJQUViQyxjOzs7Ozs7Ozs7OztpQ0FDZ0JDLFEsRUFBVTtBQUM1QixVQUFNQyxJQUFJLENBQVY7QUFBQSxVQUNNQyxJQUFJLENBRFY7QUFBQSxVQUVNQyxJQUFJLENBQUNILFFBRlg7QUFBQSxVQUVxQjtBQUNmSSx1QkFBaUJMLGVBQWVNLGVBQWYsQ0FBK0JKLENBQS9CLEVBQWtDQyxDQUFsQyxFQUFxQ0MsQ0FBckMsQ0FIdkI7O0FBS0EsYUFBT0MsY0FBUDtBQUNEOzs7b0NBRXNCSCxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHO0FBQzlCLFVBQUlHLFNBQVNULFdBQWI7O0FBRUFTLGVBQVNSLFdBQVdRLE1BQVgsRUFBbUIsQ0FBRUwsQ0FBRixFQUFLQyxDQUFMLEVBQVFDLENBQVIsQ0FBbkIsQ0FBVDs7QUFFQSxVQUFNQyxpQkFBaUIsSUFBSUwsY0FBSixDQUFtQk8sTUFBbkIsQ0FBdkI7O0FBRUEsYUFBT0YsY0FBUDtBQUNEOzs7O0VBbEIwQlYsTTs7QUFxQjdCYSxPQUFPQyxPQUFQLEdBQWlCVCxjQUFqQiIsImZpbGUiOiJwb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTWF0cml4ID0gcmVxdWlyZSgnLi4vbWF0cml4JyksXG4gICAgICBtYXRoc1V0aWx0aXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbWF0aHMnKTtcblxuY29uc3QgeyBpZGVudGl0eTQsIHRyYW5zbGF0ZTQgfSA9IG1hdGhzVXRpbHRpdGllcztcblxuY2xhc3MgUG9zaXRpb25NYXRyaXggZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gICAgY29uc3QgeCA9IDAsXG4gICAgICAgICAgeSA9IDAsXG4gICAgICAgICAgeiA9IC1kaXN0YW5jZSwgLy8vXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBQb3NpdGlvbk1hdHJpeC5mcm9tQ29vcmRpbmF0ZXMoeCwgeSwgeik7XG5cbiAgICByZXR1cm4gcG9zaXRpb25NYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVzKHgsIHksIHopIHtcbiAgICBsZXQgbWF0cml4ID0gaWRlbnRpdHk0KCk7XG5cbiAgICBtYXRyaXggPSB0cmFuc2xhdGU0KG1hdHJpeCwgWyB4LCB5LCB6IF0pO1xuXG4gICAgY29uc3QgcG9zaXRpb25NYXRyaXggPSBuZXcgUG9zaXRpb25NYXRyaXgobWF0cml4KTtcblxuICAgIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc2l0aW9uTWF0cml4O1xuIl19