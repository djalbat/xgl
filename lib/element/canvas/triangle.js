'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../../facet'),
    vectorUtilities = require('../../utilities/vector'),
    ColouredCanvasElement = require('../../element/canvas/coloured');

var MaskingFacet = require('../../maskingFacet');

var normalise3 = vectorUtilities.normalise3;


var facets = calculateFacets();

var Triangle = function (_ColouredCanvasElemen) {
  _inherits(Triangle, _ColouredCanvasElemen);

  function Triangle(transform, colour) {
    _classCallCheck(this, Triangle);

    var _this = _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this, transform, colour));

    _this.facets = facets; ///
    return _this;
  }

  _createClass(Triangle, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getColour',
    value: function getColour() {
      return this.colour;
    }
  }, {
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      var initialVertexPositions = this.facets.reduce(function (initialVertexPositions, facet) {
        var vertices = facet.getVertices();

        initialVertexPositions = vertices.reduce(function (initialVertexPositions, vertex) {
          var initialVertexPosition = vertex.slice(); ///

          initialVertexPositions.push(initialVertexPosition);

          return initialVertexPositions;
        }, initialVertexPositions);

        return initialVertexPositions;
      }, []);

      return initialVertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals(vertexPositions) {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var normal = facet.getNormal(),
            vertexNormal = normalise3(normal);

        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexIndexes',
    value: function calculateVertexIndexes(vertexPositions) {
      var vertexIndex = 0;

      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet) {
        vertexIndexes = [].concat(_toConsumableArray(vertexIndexes), [vertexIndex + 0, vertexIndex + 1, vertexIndex + 2]);

        vertexIndex += 3;

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }, {
    key: 'calculateVertexColours',
    value: function calculateVertexColours(vertexPositions) {
      var vertexColours = this.facets.reduce(function (vertexColours, facet) {
        var vertexColour = this.colour;

        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);

        return vertexColours;
      }.bind(this), []);

      return vertexColours;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);

      _get(Triangle.prototype.__proto__ || Object.getPrototypeOf(Triangle.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColouredCanvasElement.fromProperties(Triangle, properties);
    }
  }]);

  return Triangle;
}(ColouredCanvasElement);

module.exports = Triangle;

function calculateFacets() {
  var facetVertices = [[0, 0, 0], [5, 0, 0], [0, 5, 0]],
      maskingFacetVertices = [[2, 1, 0], [2, 2, 0], [1, 2, 0]],
      facet = Facet.fromVertices(facetVertices),
      maskingFacet = MaskingFacet.fromVertices(maskingFacetVertices),
      facets = maskingFacet.maskFacet(facet);

  return facets;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWN0b3JVdGlsaXRpZXMiLCJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJNYXNraW5nRmFjZXQiLCJub3JtYWxpc2UzIiwiZmFjZXRzIiwiY2FsY3VsYXRlRmFjZXRzIiwiVHJpYW5nbGUiLCJ0cmFuc2Zvcm0iLCJjb2xvdXIiLCJpbml0aWFsVmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXQiLCJ2ZXJ0aWNlcyIsImdldFZlcnRpY2VzIiwidmVydGV4IiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uIiwic2xpY2UiLCJwdXNoIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4Tm9ybWFscyIsIm5vcm1hbCIsImdldE5vcm1hbCIsInZlcnRleE5vcm1hbCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsInZlcnRleENvbG91cnMiLCJ2ZXJ0ZXhDb2xvdXIiLCJiaW5kIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZhY2V0VmVydGljZXMiLCJtYXNraW5nRmFjZXRWZXJ0aWNlcyIsImZyb21WZXJ0aWNlcyIsIm1hc2tpbmdGYWNldCIsIm1hc2tGYWNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxhQUFSLENBQWQ7QUFB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QUFDRCIsImZpbGUiOiJ0cmlhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9mYWNldCcpLFxuICAgICAgdmVjdG9yVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlY3RvcicpLFxuICAgICAgQ29sb3VyZWRDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMvY29sb3VyZWQnKTtcblxuY29uc3QgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vbWFza2luZ0ZhY2V0Jyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzO1xuXG5jb25zdCBmYWNldHMgPSBjYWxjdWxhdGVGYWNldHMoKTtcblxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgY29sb3VyKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzOyAvLy9cbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25zID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0KSB7XG4gICAgICBjb25zdCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG5cbiAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9ucywgdmVydGV4KSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5zbGljZSgpOyAvLy9cblxuICAgICAgICBpbml0aWFsVmVydGV4UG9zaXRpb25zLnB1c2goaW5pdGlhbFZlcnRleFBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgICAgIH0sIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNldCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2UzKG5vcm1hbCk7XG5cbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcblxuICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGxldCB2ZXJ0ZXhJbmRleCA9IDA7XG5cbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleEluZGV4ZXMsIGZhY2V0KSB7XG4gICAgICB2ZXJ0ZXhJbmRleGVzID0gWyAuLi52ZXJ0ZXhJbmRleGVzLCB2ZXJ0ZXhJbmRleCArIDAsIHZlcnRleEluZGV4ICsgMSwgdmVydGV4SW5kZXggKyAyIF07XG5cbiAgICAgIHZlcnRleEluZGV4ICs9IDM7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleENvbG91cnMsIGZhY2V0KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cjtcblxuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgICB9LmJpbmQodGhpcyksIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleENvbG91cnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuXG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUcmlhbmdsZSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmlhbmdsZTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRmFjZXRzKCkge1xuICBjb25zdCBmYWNldFZlcnRpY2VzID0gW1xuICAgICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICAgIFsgNSwgMCwgMCBdLFxuICAgICAgICAgIFsgMCwgNSwgMCBdLFxuICAgICAgICBdLFxuICAgICAgICBtYXNraW5nRmFjZXRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICBbIDIsIDEsIDAgXSxcbiAgICAgICAgICBbIDIsIDIsIDAgXSxcbiAgICAgICAgICBbIDEsIDIsIDAgXSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoZmFjZXRWZXJ0aWNlcyksXG4gICAgICAgIG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tVmVydGljZXMobWFza2luZ0ZhY2V0VmVydGljZXMpLFxuICAgICAgICBmYWNldHMgPSBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuIl19