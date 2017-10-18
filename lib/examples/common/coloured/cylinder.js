'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    ColouredElement = require('../../../element/coloured');

var initialVertexPositionData = cylinder.initialVertexPositionData;

var ColouredCylinder = function (_ColouredElement) {
  _inherits(ColouredCylinder, _ColouredElement);

  function ColouredCylinder() {
    _classCallCheck(this, ColouredCylinder);

    return _possibleConstructorReturn(this, (ColouredCylinder.__proto__ || Object.getPrototypeOf(ColouredCylinder)).apply(this, arguments));
  }

  _createClass(ColouredCylinder, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredElement.fromPropertiesAndInitialVertexPositionData(ColouredCylinder, properties, initialVertexPositionData);
    }
  }]);

  return ColouredCylinder;
}(ColouredElement);

module.exports = ColouredCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvY3lsaW5kZXIuanMiXSwibmFtZXMiOlsiY3lsaW5kZXIiLCJyZXF1aXJlIiwiQ29sb3VyZWRFbGVtZW50IiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIkNvbG91cmVkQ3lsaW5kZXIiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsMkJBQVIsQ0FEeEI7O0lBR1FFLHlCLEdBQThCSCxRLENBQTlCRyx5Qjs7SUFFRkMsZ0I7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQUUsYUFBT0gsZ0JBQWdCSSwwQ0FBaEIsQ0FBMkRGLGdCQUEzRCxFQUE2RUMsVUFBN0UsRUFBeUZGLHlCQUF6RixDQUFQO0FBQTZIOzs7O0VBRHBJRCxlOztBQUkvQkssT0FBT0MsT0FBUCxHQUFpQkosZ0JBQWpCIiwiZmlsZSI6ImN5bGluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjeWxpbmRlciA9IHJlcXVpcmUoJy4uL2N5bGluZGVyJyksXG4gICAgICBDb2xvdXJlZEVsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIENvbG91cmVkQ3lsaW5kZXIgZXh0ZW5kcyBDb2xvdXJlZEVsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gQ29sb3VyZWRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzQW5kSW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YShDb2xvdXJlZEN5bGluZGVyLCBwcm9wZXJ0aWVzLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkQ3lsaW5kZXI7XG4iXX0=