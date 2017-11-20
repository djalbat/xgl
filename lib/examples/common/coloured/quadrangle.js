'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../../../facet'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0]],
    firstIndexes = [0, 1, 3],
    secondIndexes = [2, 3, 1];

var ColouredQuadrangle = function (_ColouredCanvasElemen) {
  _inherits(ColouredQuadrangle, _ColouredCanvasElemen);

  function ColouredQuadrangle() {
    _classCallCheck(this, ColouredQuadrangle);

    return _possibleConstructorReturn(this, (ColouredQuadrangle.__proto__ || Object.getPrototypeOf(ColouredQuadrangle)).apply(this, arguments));
  }

  _createClass(ColouredQuadrangle, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          firstFacet = Facet.fromVerticesAndIndexes(vertices, firstIndexes),
          secondFacet = Facet.fromVerticesAndIndexes(vertices, secondIndexes),
          facets = [firstFacet, secondFacet],
          colouredQuadrangle = ColouredCanvasElement.fromProperties(ColouredQuadrangle, properties, facets);


      return colouredQuadrangle;
    }
  }]);

  return ColouredQuadrangle;
}(ColouredCanvasElement);

module.exports = ColouredQuadrangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvcXVhZHJhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJkZWZhdWx0VmVydGljZXMiLCJmaXJzdEluZGV4ZXMiLCJzZWNvbmRJbmRleGVzIiwiQ29sb3VyZWRRdWFkcmFuZ2xlIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiZmlyc3RGYWNldCIsImZyb21WZXJ0aWNlc0FuZEluZGV4ZXMiLCJzZWNvbmRGYWNldCIsImZhY2V0cyIsImNvbG91cmVkUXVhZHJhbmdsZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGdCQUFSLENBQWQ7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsa0NBQVIsQ0FEOUI7O0FBR0EsSUFBTUUsa0JBQWtCLENBRWhCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRmdCLEVBR2hCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSGdCLEVBSWhCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSmdCLEVBS2hCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBTGdCLENBQXhCO0FBQUEsSUFRTUMsZUFBZSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQVJyQjtBQUFBLElBU01DLGdCQUFnQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQVR0Qjs7SUFXTUMsa0I7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQUEsaUNBQ09BLFVBRFAsQ0FDeEJDLFFBRHdCO0FBQUEsVUFDeEJBLFFBRHdCLHdDQUNiTCxlQURhO0FBQUEsVUFFMUJNLFVBRjBCLEdBRWJULE1BQU1VLHNCQUFOLENBQTZCRixRQUE3QixFQUF1Q0osWUFBdkMsQ0FGYTtBQUFBLFVBRzFCTyxXQUgwQixHQUdaWCxNQUFNVSxzQkFBTixDQUE2QkYsUUFBN0IsRUFBdUNILGFBQXZDLENBSFk7QUFBQSxVQUkxQk8sTUFKMEIsR0FJakIsQ0FDUEgsVUFETyxFQUVQRSxXQUZPLENBSmlCO0FBQUEsVUFRMUJFLGtCQVIwQixHQVFMWCxzQkFBc0JZLGNBQXRCLENBQXFDUixrQkFBckMsRUFBeURDLFVBQXpELEVBQXFFSyxNQUFyRSxDQVJLOzs7QUFVaEMsYUFBT0Msa0JBQVA7QUFDRDs7OztFQVo4QlgscUI7O0FBZWpDYSxPQUFPQyxPQUFQLEdBQWlCVixrQkFBakIiLCJmaWxlIjoicXVhZHJhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuLi8uLi8uLi9mYWNldCcpLFxuICAgICAgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgZGVmYXVsdFZlcnRpY2VzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZmlyc3RJbmRleGVzID0gWyAwLCAxLCAzIF0sXG4gICAgICBzZWNvbmRJbmRleGVzID0gWyAyLCAzLCAxIF07XG5cbmNsYXNzIENvbG91cmVkUXVhZHJhbmdsZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB2ZXJ0aWNlcyA9IGRlZmF1bHRWZXJ0aWNlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmaXJzdEZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzQW5kSW5kZXhlcyh2ZXJ0aWNlcywgZmlyc3RJbmRleGVzKSxcbiAgICAgICAgICBzZWNvbmRGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlc0FuZEluZGV4ZXModmVydGljZXMsIHNlY29uZEluZGV4ZXMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtcbiAgICAgICAgICAgIGZpcnN0RmFjZXQsXG4gICAgICAgICAgICBzZWNvbmRGYWNldFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY29sb3VyZWRRdWFkcmFuZ2xlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgZmFjZXRzKTtcblxuICAgIHJldHVybiBjb2xvdXJlZFF1YWRyYW5nbGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZFF1YWRyYW5nbGU7XG4iXX0=