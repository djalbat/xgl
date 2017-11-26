'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quadrangle = require('../quadrangle'),
    ColouredCanvasElement = require('../../../element/canvas/coloured');

var defaultVertices = quadrangle.defaultVertices,
    defaultIndexes = quadrangle.defaultIndexes;

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
          _properties$indexes = properties.indexes,
          indexes = _properties$indexes === undefined ? defaultIndexes : _properties$indexes,
          colouredQuadrangle = ColouredCanvasElement.fromProperties(ColouredQuadrangle, properties, vertices, indexes);


      return colouredQuadrangle;
    }
  }]);

  return ColouredQuadrangle;
}(ColouredCanvasElement);

module.exports = ColouredQuadrangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvcXVhZHJhbmdsZS5qcyJdLCJuYW1lcyI6WyJxdWFkcmFuZ2xlIiwicmVxdWlyZSIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImRlZmF1bHRWZXJ0aWNlcyIsImRlZmF1bHRJbmRleGVzIiwiQ29sb3VyZWRRdWFkcmFuZ2xlIiwicHJvcGVydGllcyIsInZlcnRpY2VzIiwiaW5kZXhlcyIsImNvbG91cmVkUXVhZHJhbmdsZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNQyx3QkFBd0JELFFBQVEsa0NBQVIsQ0FEOUI7O0lBR1FFLGUsR0FBb0NILFUsQ0FBcENHLGU7SUFBaUJDLGMsR0FBbUJKLFUsQ0FBbkJJLGM7O0lBRW5CQyxrQjs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBQSxpQ0FDaUNBLFVBRGpDLENBQ3hCQyxRQUR3QjtBQUFBLFVBQ3hCQSxRQUR3Qix3Q0FDYkosZUFEYTtBQUFBLGdDQUNpQ0csVUFEakMsQ0FDSUUsT0FESjtBQUFBLFVBQ0lBLE9BREosdUNBQ2NKLGNBRGQ7QUFBQSxVQUUxQkssa0JBRjBCLEdBRUxQLHNCQUFzQlEsY0FBdEIsQ0FBcUNMLGtCQUFyQyxFQUF5REMsVUFBekQsRUFBcUVDLFFBQXJFLEVBQStFQyxPQUEvRSxDQUZLOzs7QUFJaEMsYUFBT0Msa0JBQVA7QUFDRDs7OztFQU44QlAscUI7O0FBU2pDUyxPQUFPQyxPQUFQLEdBQWlCUCxrQkFBakIiLCJmaWxlIjoicXVhZHJhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcXVhZHJhbmdsZSA9IHJlcXVpcmUoJy4uL3F1YWRyYW5nbGUnKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgZGVmYXVsdFZlcnRpY2VzLCBkZWZhdWx0SW5kZXhlcyB9ID0gcXVhZHJhbmdsZTtcblxuY2xhc3MgQ29sb3VyZWRRdWFkcmFuZ2xlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHZlcnRpY2VzID0gZGVmYXVsdFZlcnRpY2VzLCBpbmRleGVzID0gZGVmYXVsdEluZGV4ZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyZWRRdWFkcmFuZ2xlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkUXVhZHJhbmdsZSwgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkUXVhZHJhbmdsZTtcbiJdfQ==