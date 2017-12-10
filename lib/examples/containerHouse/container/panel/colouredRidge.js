'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColouredCanvasElement = require('../../../../element/canvas/coloured');

var ColouredRidge = function (_ColouredCanvasElemen) {
  _inherits(ColouredRidge, _ColouredCanvasElemen);

  function ColouredRidge() {
    _classCallCheck(this, ColouredRidge);

    return _possibleConstructorReturn(this, (ColouredRidge.__proto__ || Object.getPrototypeOf(ColouredRidge)).apply(this, arguments));
  }

  _createClass(ColouredRidge, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$colour = properties.colour,
          colour = _properties$colour === undefined ? defaultColour : _properties$colour,
          colouredRidge = ColouredCanvasElement.fromProperties(ColouredRidge, properties, vertices, indexes, colour);


      return colouredRidge;
    }
  }]);

  return ColouredRidge;
}(ColouredCanvasElement);

module.exports = ColouredRidge;

var vertices = [[0.0, 0.0, 0.0], [0.1, 0.0, 0.0], [0.3, 0.0, 1.0], [0.7, 0.0, 1.0], [0.9, 0.0, 0.0], [1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.1, 1.0, 0.0], [0.3, 1.0, 1.0], [0.7, 1.0, 1.0], [0.9, 1.0, 0.0], [1.0, 1.0, 0.0]],
    indexes = [[0, 1, 6], [7, 6, 1], [1, 2, 7], [8, 7, 2], [2, 3, 8], [9, 8, 3], [3, 4, 9], [10, 9, 4], [4, 5, 10], [11, 10, 4]],
    defaultColour = [0.75, 0.75, 0.75, 1];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcGFuZWwvY29sb3VyZWRSaWRnZS5qcyJdLCJuYW1lcyI6WyJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJyZXF1aXJlIiwiQ29sb3VyZWRSaWRnZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJkZWZhdWx0Q29sb3VyIiwiY29sb3VyZWRSaWRnZSIsImZyb21Qcm9wZXJ0aWVzIiwidmVydGljZXMiLCJpbmRleGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx3QkFBd0JDLFFBQVEscUNBQVIsQ0FBOUI7O0lBRU1DLGE7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQUEsK0JBQ0dBLFVBREgsQ0FDeEJDLE1BRHdCO0FBQUEsVUFDeEJBLE1BRHdCLHNDQUNmQyxhQURlO0FBQUEsVUFFMUJDLGFBRjBCLEdBRVZOLHNCQUFzQk8sY0FBdEIsQ0FBcUNMLGFBQXJDLEVBQW9EQyxVQUFwRCxFQUFnRUssUUFBaEUsRUFBMEVDLE9BQTFFLEVBQW1GTCxNQUFuRixDQUZVOzs7QUFJaEMsYUFBT0UsYUFBUDtBQUNEOzs7O0VBTnlCTixxQjs7QUFTNUJVLE9BQU9DLE9BQVAsR0FBaUJULGFBQWpCOztBQUVBLElBQU1NLFdBQVcsQ0FFWCxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUZXLEVBR1gsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosQ0FIVyxFQUlYLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBSlcsRUFLWCxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQUxXLEVBTVgsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosQ0FOVyxFQU9YLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBUFcsRUFTWCxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQVRXLEVBVVgsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosQ0FWVyxFQVdYLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBWFcsRUFZWCxDQUFFLEdBQUYsRUFBTyxHQUFQLEVBQVksR0FBWixDQVpXLEVBYVgsQ0FBRSxHQUFGLEVBQU8sR0FBUCxFQUFZLEdBQVosQ0FiVyxFQWNYLENBQUUsR0FBRixFQUFPLEdBQVAsRUFBWSxHQUFaLENBZFcsQ0FBakI7QUFBQSxJQWlCSUMsVUFBVSxDQUVSLENBQUcsQ0FBSCxFQUFPLENBQVAsRUFBVyxDQUFYLENBRlEsRUFHUixDQUFHLENBQUgsRUFBTyxDQUFQLEVBQVcsQ0FBWCxDQUhRLEVBS1IsQ0FBRyxDQUFILEVBQU8sQ0FBUCxFQUFXLENBQVgsQ0FMUSxFQU1SLENBQUcsQ0FBSCxFQUFPLENBQVAsRUFBVyxDQUFYLENBTlEsRUFRUixDQUFHLENBQUgsRUFBTyxDQUFQLEVBQVcsQ0FBWCxDQVJRLEVBU1IsQ0FBRyxDQUFILEVBQU8sQ0FBUCxFQUFXLENBQVgsQ0FUUSxFQVdSLENBQUcsQ0FBSCxFQUFPLENBQVAsRUFBVyxDQUFYLENBWFEsRUFZUixDQUFFLEVBQUYsRUFBTyxDQUFQLEVBQVcsQ0FBWCxDQVpRLEVBY1IsQ0FBRyxDQUFILEVBQU8sQ0FBUCxFQUFVLEVBQVYsQ0FkUSxFQWVSLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVyxDQUFYLENBZlEsQ0FqQmQ7QUFBQSxJQW1DSUosZ0JBQWdCLENBQUUsSUFBRixFQUFRLElBQVIsRUFBYyxJQUFkLEVBQW9CLENBQXBCLENBbkNwQiIsImZpbGUiOiJjb2xvdXJlZFJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb2xvdXJlZENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZCcpO1xuXG5jbGFzcyBDb2xvdXJlZFJpZGdlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRSaWRnZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDb2xvdXJlZFJpZGdlLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyZWRSaWRnZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkUmlkZ2U7XG5cbmNvbnN0IHZlcnRpY2VzID0gW1xuXG4gICAgICBbIDAuMCwgMC4wLCAwLjAgXSxcbiAgICAgIFsgMC4xLCAwLjAsIDAuMCBdLFxuICAgICAgWyAwLjMsIDAuMCwgMS4wIF0sXG4gICAgICBbIDAuNywgMC4wLCAxLjAgXSxcbiAgICAgIFsgMC45LCAwLjAsIDAuMCBdLFxuICAgICAgWyAxLjAsIDAuMCwgMC4wIF0sXG5cbiAgICAgIFsgMC4wLCAxLjAsIDAuMCBdLFxuICAgICAgWyAwLjEsIDEuMCwgMC4wIF0sXG4gICAgICBbIDAuMywgMS4wLCAxLjAgXSxcbiAgICAgIFsgMC43LCAxLjAsIDEuMCBdLFxuICAgICAgWyAwLjksIDEuMCwgMC4wIF0sXG4gICAgICBbIDEuMCwgMS4wLCAwLjAgXSxcblxuICAgIF0sXG4gICAgaW5kZXhlcyA9IFtcblxuICAgICAgWyAgMCwgIDEsICA2IF0sXG4gICAgICBbICA3LCAgNiwgIDEgXSxcblxuICAgICAgWyAgMSwgIDIsICA3IF0sXG4gICAgICBbICA4LCAgNywgIDIgXSxcblxuICAgICAgWyAgMiwgIDMsICA4IF0sXG4gICAgICBbICA5LCAgOCwgIDMgXSxcblxuICAgICAgWyAgMywgIDQsICA5IF0sXG4gICAgICBbIDEwLCAgOSwgIDQgXSxcblxuICAgICAgWyAgNCwgIDUsIDEwIF0sXG4gICAgICBbIDExLCAxMCwgIDQgXSxcblxuICAgIF0sXG4gICAgZGVmYXVsdENvbG91ciA9IFsgMC43NSwgMC43NSwgMC43NSwgMSBdO1xuIl19