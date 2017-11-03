'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../../facet'),
    vec3 = require('../../maths/vec3'),
    CanvasElement = require('../../element/canvas'),
    transformUtilities = require('../../utilities/transform');

var FacetInXYPlane = require('../../facetInXYPlane'),
    VerticalLineInXYPlane = require('../../verticalLineInXYPlane');

var normalise = vec3.normalise,
    composeTransform = transformUtilities.composeTransform;


var facets = calculateFacets(),
    colours = [[1, 0, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1]];

var Triangle = function (_CanvasElement) {
  _inherits(Triangle, _CanvasElement);

  function Triangle(transform) {
    _classCallCheck(this, Triangle);

    var _this = _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this, transform));

    _this.facets = facets; ///
    _this.colours = colours; ///
    return _this;
  }

  _createClass(Triangle, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getColours',
    value: function getColours() {
      return this.colours;
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
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals(vertexPositions) {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var normal = facet.getNormal(),
            normals = [///
        normal, normal, normal];

        vertexNormals = normals.reduce(function (vertexNormals, normal) {
          var vertexNormal = normalise(normal);

          vertexNormals.push(vertexNormal);

          return vertexNormals;
        }, vertexNormals);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexColours',
    value: function calculateVertexColours(vertexPositions) {
      var vertexColours = this.facets.reduce(function (vertexColours, facet, index) {
        var colour = this.colours[index],
            colours = [colour, colour, colour];

        vertexColours = colours.reduce(function (vertexColours, colour) {
          var vertexColour = colour; ///

          vertexColours.push(vertexColour);

          return vertexColours;
        }, vertexColours);

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
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(width, height, depth, position, rotations),
          Class = Triangle,
          canvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return Triangle;
}(CanvasElement);

module.exports = Triangle;

function calculateFacets() {
  var facetVertices = [[-2, 0, 0], ///[ 0, 0, 2 ],
  [2, 0, 0], ///[ 1, 0, 1 ],
  [0, 2, 0]],
      maskFacetVertices = [[1, 0, 0], ///[ 0.5, 0, 1 ],
  [1, 1, 0], ///[ 0.5, 0, 2 ],
  [1, 1, 1]],
      facet = Facet.fromVertices(facetVertices),
      maskFacet = Facet.fromVertices(maskFacetVertices),
      facetInXYPlane = FacetInXYPlane.fromFacet(facet);

  var forwardsTranslation = facetInXYPlane.getForwardsTranslation(),
      backwardsTranslation = facetInXYPlane.getBackwardsTranslation(),
      forwardsRotationQuaternion = facetInXYPlane.getForwardsRotationQuaternion(),
      backwardsRotationQuaternion = facetInXYPlane.getBackwardsRotationQuaternion();

  maskFacet.rotate(forwardsRotationQuaternion);
  maskFacet.translate(forwardsTranslation);

  var lineInXYPlane = maskFacet.getLineInXYPlane(),
      verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
      forwardsRotationMatrix = verticalLineInXYPlane.getForwardsRotationMatrix();

  facetInXYPlane.rotate(forwardsRotationMatrix);

  var facetsInXYPlane = facetInXYPlane.possiblySplit(verticalLineInXYPlane),
      backwardsRotationMatrix = verticalLineInXYPlane.getBackwardsRotationMatrix();

  facetsInXYPlane.forEach(function (facetInXYPlane) {
    facetInXYPlane.rotate(backwardsRotationMatrix);
  });

  var facets = facetsInXYPlane.map(function (facetInXYPlane) {
    var facet = Facet.fromFacetInXYPlane(facetInXYPlane);

    facet.translate(backwardsTranslation);
    facet.rotate(backwardsRotationQuaternion);

    return facet;
  });

  return facets;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWMzIiwiQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybVV0aWxpdGllcyIsIkZhY2V0SW5YWVBsYW5lIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwibm9ybWFsaXNlIiwiY29tcG9zZVRyYW5zZm9ybSIsImZhY2V0cyIsImNhbGN1bGF0ZUZhY2V0cyIsImNvbG91cnMiLCJUcmlhbmdsZSIsInRyYW5zZm9ybSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMiLCJyZWR1Y2UiLCJmYWNldCIsInZlcnRpY2VzIiwiZ2V0VmVydGljZXMiLCJ2ZXJ0ZXgiLCJpbml0aWFsVmVydGV4UG9zaXRpb24iLCJzbGljZSIsInB1c2giLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwibm9ybWFsIiwiZ2V0Tm9ybWFsIiwibm9ybWFscyIsInZlcnRleE5vcm1hbCIsInZlcnRleENvbG91cnMiLCJpbmRleCIsImNvbG91ciIsInZlcnRleENvbG91ciIsImJpbmQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiQ2xhc3MiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmFjZXRWZXJ0aWNlcyIsIm1hc2tGYWNldFZlcnRpY2VzIiwiZnJvbVZlcnRpY2VzIiwibWFza0ZhY2V0IiwiZmFjZXRJblhZUGxhbmUiLCJmcm9tRmFjZXQiLCJmb3J3YXJkc1RyYW5zbGF0aW9uIiwiZ2V0Rm9yd2FyZHNUcmFuc2xhdGlvbiIsImJhY2t3YXJkc1RyYW5zbGF0aW9uIiwiZ2V0QmFja3dhcmRzVHJhbnNsYXRpb24iLCJmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRlIiwidHJhbnNsYXRlIiwibGluZUluWFlQbGFuZSIsImdldExpbmVJblhZUGxhbmUiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmcm9tTGluZUluWFlQbGFuZSIsImZvcndhcmRzUm90YXRpb25NYXRyaXgiLCJnZXRGb3J3YXJkc1JvdGF0aW9uTWF0cml4IiwiZmFjZXRzSW5YWVBsYW5lIiwicG9zc2libHlTcGxpdCIsImJhY2t3YXJkc1JvdGF0aW9uTWF0cml4IiwiZ2V0QmFja3dhcmRzUm90YXRpb25NYXRyaXgiLCJmb3JFYWNoIiwibWFwIiwiZnJvbUZhY2V0SW5YWVBsYW5lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLE9BQU9ELFFBQVEsa0JBQVIsQ0FEYjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxzQkFBUixDQUZ0QjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSwyQkFBUixDQUgzQjs7QUFLQSxJQUFNSSxpQkFBaUJKLFFBQVEsc0JBQVIsQ0FBdkI7QUFBQSxJQUNNSyx3QkFBd0JMLFFBQVEsNkJBQVIsQ0FEOUI7O0FBR00sSUFBRU0sU0FBRixHQUFnQkwsSUFBaEIsQ0FBRUssU0FBRjtBQUFBLElBQ0VDLGdCQURGLEdBQ3VCSixrQkFEdkIsQ0FDRUksZ0JBREY7OztBQUdOLElBQU1DLFNBQVNDLGlCQUFmO0FBQUEsSUFDTUMsVUFBVSxDQUNSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQURRLEVBRVIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBRlEsRUFHUixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FIUSxDQURoQjs7SUFPTUMsUTs7O0FBQ0osb0JBQVlDLFNBQVosRUFBdUI7QUFBQTs7QUFBQSxvSEFDZkEsU0FEZTs7QUFHckIsVUFBS0osTUFBTCxHQUFjQSxNQUFkLENBSHFCLENBR0M7QUFDdEIsVUFBS0UsT0FBTCxHQUFlQSxPQUFmLENBSnFCLENBSUc7QUFKSDtBQUt0Qjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtFLE9BQVo7QUFDRDs7O2dEQUUyQjtBQUMxQixVQUFNRyx5QkFBeUIsS0FBS0wsTUFBTCxDQUFZTSxNQUFaLENBQW1CLFVBQVNELHNCQUFULEVBQWlDRSxLQUFqQyxFQUF3QztBQUN4RixZQUFNQyxXQUFXRCxNQUFNRSxXQUFOLEVBQWpCOztBQUVBSixpQ0FBeUJHLFNBQVNGLE1BQVQsQ0FBZ0IsVUFBU0Qsc0JBQVQsRUFBaUNLLE1BQWpDLEVBQXlDO0FBQ2hGLGNBQU1DLHdCQUF3QkQsT0FBT0UsS0FBUCxFQUE5QixDQURnRixDQUNsQzs7QUFFOUNQLGlDQUF1QlEsSUFBdkIsQ0FBNEJGLHFCQUE1Qjs7QUFFQSxpQkFBT04sc0JBQVA7QUFDRCxTQU53QixFQU10QkEsc0JBTnNCLENBQXpCOztBQVFBLGVBQU9BLHNCQUFQO0FBQ0QsT0FaOEIsRUFZNUIsRUFaNEIsQ0FBL0I7O0FBY0EsYUFBT0Esc0JBQVA7QUFDRDs7OzJDQUVzQlMsZSxFQUFpQjtBQUN0QyxVQUFJQyxjQUFjLENBQWxCOztBQUVBLFVBQU1DLGdCQUFnQixLQUFLaEIsTUFBTCxDQUFZTSxNQUFaLENBQW1CLFVBQVNVLGFBQVQsRUFBd0JULEtBQXhCLEVBQStCO0FBQ2hFUyxxREFBcUJBLGFBQXJCLElBQW9DRCxjQUFjLENBQWxELEVBQXFEQSxjQUFjLENBQW5FLEVBQXNFQSxjQUFjLENBQXBGOztBQUVBQSx1QkFBZSxDQUFmOztBQUVBLGVBQU9DLGFBQVA7QUFDRCxPQU5lLEVBTWIsRUFOYSxDQUF0Qjs7QUFRQSxhQUFPQSxhQUFQO0FBQ0Q7OzsyQ0FFc0JGLGUsRUFBaUI7QUFDdEMsVUFBTUcsZ0JBQWdCLEtBQUtqQixNQUFMLENBQVlNLE1BQVosQ0FBbUIsVUFBU1csYUFBVCxFQUF3QlYsS0FBeEIsRUFBK0I7QUFDdEUsWUFBTVcsU0FBU1gsTUFBTVksU0FBTixFQUFmO0FBQUEsWUFDTUMsVUFBVSxDQUFFO0FBQ1ZGLGNBRFEsRUFFUkEsTUFGUSxFQUdSQSxNQUhRLENBRGhCOztBQU9BRCx3QkFBZ0JHLFFBQVFkLE1BQVIsQ0FBZSxVQUFTVyxhQUFULEVBQXdCQyxNQUF4QixFQUFnQztBQUM3RCxjQUFNRyxlQUFldkIsVUFBVW9CLE1BQVYsQ0FBckI7O0FBRUFELHdCQUFjSixJQUFkLENBQW1CUSxZQUFuQjs7QUFFQSxpQkFBT0osYUFBUDtBQUNELFNBTmUsRUFNYkEsYUFOYSxDQUFoQjs7QUFRQSxlQUFPQSxhQUFQO0FBQ0QsT0FqQnFCLEVBaUJuQixFQWpCbUIsQ0FBdEI7O0FBbUJBLGFBQU9BLGFBQVA7QUFDRDs7OzJDQUVzQkgsZSxFQUFpQjtBQUN0QyxVQUFNUSxnQkFBZ0IsS0FBS3RCLE1BQUwsQ0FBWU0sTUFBWixDQUFtQixVQUFTZ0IsYUFBVCxFQUF3QmYsS0FBeEIsRUFBK0JnQixLQUEvQixFQUFzQztBQUM3RSxZQUFNQyxTQUFTLEtBQUt0QixPQUFMLENBQWFxQixLQUFiLENBQWY7QUFBQSxZQUNNckIsVUFBVSxDQUNSc0IsTUFEUSxFQUVSQSxNQUZRLEVBR1JBLE1BSFEsQ0FEaEI7O0FBT0FGLHdCQUFnQnBCLFFBQVFJLE1BQVIsQ0FBZSxVQUFTZ0IsYUFBVCxFQUF3QkUsTUFBeEIsRUFBZ0M7QUFDN0QsY0FBTUMsZUFBZUQsTUFBckIsQ0FENkQsQ0FDL0I7O0FBRTlCRix3QkFBY1QsSUFBZCxDQUFtQlksWUFBbkI7O0FBRUEsaUJBQU9ILGFBQVA7QUFFRCxTQVBlLEVBT2JBLGFBUGEsQ0FBaEI7O0FBU0EsZUFBT0EsYUFBUDtBQUNELE9BbEJ3QyxDQWtCdkNJLElBbEJ1QyxDQWtCbEMsSUFsQmtDLENBQW5CLEVBa0JSLEVBbEJRLENBQXRCOztBQW9CQSxhQUFPSixhQUFQO0FBQ0Q7OzsyQkFFTUssYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZO0FBQ2xELFVBQU1mLGtCQUFrQixLQUFLZ0Isd0JBQUwsQ0FBOEJELFVBQTlCLENBQXhCO0FBQUEsVUFDTWIsZ0JBQWdCLEtBQUtlLHNCQUFMLENBQTRCakIsZUFBNUIsQ0FEdEI7QUFBQSxVQUVNRyxnQkFBZ0IsS0FBS2Usc0JBQUwsQ0FBNEJsQixlQUE1QixDQUZ0QjtBQUFBLFVBR01RLGdCQUFnQixLQUFLVyxzQkFBTCxDQUE0Qm5CLGVBQTVCLENBSHRCOztBQUtBYSxxQkFBZU8sa0JBQWYsQ0FBa0NwQixlQUFsQztBQUNBYSxxQkFBZVEsZ0JBQWYsQ0FBZ0NuQixhQUFoQztBQUNBVyxxQkFBZVMsZ0JBQWYsQ0FBZ0NuQixhQUFoQztBQUNBVSxxQkFBZVUsZ0JBQWYsQ0FBZ0NmLGFBQWhDOztBQUVBLGlIQUFhSyxjQUFiLEVBQTZCQyxlQUE3QixFQUE4Q0MsVUFBOUM7QUFDRDs7O21DQUVxQlMsVSxFQUFtQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBQSxVQUMvQ0MsS0FEK0MsR0FDREYsVUFEQyxDQUMvQ0UsS0FEK0M7QUFBQSxVQUN4Q0MsTUFEd0MsR0FDREgsVUFEQyxDQUN4Q0csTUFEd0M7QUFBQSxVQUNoQ0MsS0FEZ0MsR0FDREosVUFEQyxDQUNoQ0ksS0FEZ0M7QUFBQSxVQUN6QkMsUUFEeUIsR0FDREwsVUFEQyxDQUN6QkssUUFEeUI7QUFBQSxVQUNmQyxTQURlLEdBQ0ROLFVBREMsQ0FDZk0sU0FEZTtBQUFBLFVBRWpEeEMsU0FGaUQsR0FFckNMLGlCQUFpQnlDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQ0MsS0FBaEMsRUFBdUNDLFFBQXZDLEVBQWlEQyxTQUFqRCxDQUZxQztBQUFBLFVBR2pEQyxLQUhpRCxHQUd6QzFDLFFBSHlDO0FBQUEsVUFJakQyQyxhQUppRCxHQUlqQ3BELGNBQWNxRCxjQUFkLHVCQUE2QkYsS0FBN0IsRUFBb0NQLFVBQXBDLEVBQWdEbEMsU0FBaEQsU0FBOERtQyxrQkFBOUQsRUFKaUM7OztBQU12RCxhQUFPTyxhQUFQO0FBQ0Q7Ozs7RUFwSG9CcEQsYTs7QUF1SHZCc0QsT0FBT0MsT0FBUCxHQUFpQjlDLFFBQWpCOztBQUVBLFNBQVNGLGVBQVQsR0FBMkI7QUFDekIsTUFBTWlELGdCQUFnQixDQUNkLENBQUUsQ0FBQyxDQUFILEVBQU0sQ0FBTixFQUFTLENBQVQsQ0FEYyxFQUNBO0FBQ2QsR0FBRyxDQUFILEVBQU0sQ0FBTixFQUFTLENBQVQsQ0FGYyxFQUVBO0FBQ2QsR0FBRyxDQUFILEVBQU0sQ0FBTixFQUFTLENBQVQsQ0FIYyxDQUF0QjtBQUFBLE1BS01DLG9CQUFvQixDQUNsQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQURrQixFQUNKO0FBQ2QsR0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FGa0IsRUFFSjtBQUNkLEdBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSGtCLENBTDFCO0FBQUEsTUFVTTVDLFFBQVFoQixNQUFNNkQsWUFBTixDQUFtQkYsYUFBbkIsQ0FWZDtBQUFBLE1BV01HLFlBQVk5RCxNQUFNNkQsWUFBTixDQUFtQkQsaUJBQW5CLENBWGxCO0FBQUEsTUFZTUcsaUJBQWlCMUQsZUFBZTJELFNBQWYsQ0FBeUJoRCxLQUF6QixDQVp2Qjs7QUFjQSxNQUFNaUQsc0JBQXNCRixlQUFlRyxzQkFBZixFQUE1QjtBQUFBLE1BQ01DLHVCQUF1QkosZUFBZUssdUJBQWYsRUFEN0I7QUFBQSxNQUVNQyw2QkFBNkJOLGVBQWVPLDZCQUFmLEVBRm5DO0FBQUEsTUFHTUMsOEJBQThCUixlQUFlUyw4QkFBZixFQUhwQzs7QUFLQVYsWUFBVVcsTUFBVixDQUFpQkosMEJBQWpCO0FBQ0FQLFlBQVVZLFNBQVYsQ0FBb0JULG1CQUFwQjs7QUFFQSxNQUFNVSxnQkFBZ0JiLFVBQVVjLGdCQUFWLEVBQXRCO0FBQUEsTUFDTUMsd0JBQXdCdkUsc0JBQXNCd0UsaUJBQXRCLENBQXdDSCxhQUF4QyxDQUQ5QjtBQUFBLE1BRU1JLHlCQUF5QkYsc0JBQXNCRyx5QkFBdEIsRUFGL0I7O0FBSUFqQixpQkFBZVUsTUFBZixDQUFzQk0sc0JBQXRCOztBQUVBLE1BQU1FLGtCQUFrQmxCLGVBQWVtQixhQUFmLENBQTZCTCxxQkFBN0IsQ0FBeEI7QUFBQSxNQUNNTSwwQkFBMEJOLHNCQUFzQk8sMEJBQXRCLEVBRGhDOztBQUdBSCxrQkFBZ0JJLE9BQWhCLENBQXdCLFVBQVV0QixjQUFWLEVBQTBCO0FBQ2hEQSxtQkFBZVUsTUFBZixDQUFzQlUsdUJBQXRCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNMUUsU0FBU3dFLGdCQUFnQkssR0FBaEIsQ0FBb0IsVUFBVXZCLGNBQVYsRUFBMEI7QUFDckQsUUFBTS9DLFFBQVFoQixNQUFNdUYsa0JBQU4sQ0FBeUJ4QixjQUF6QixDQUFkOztBQUVBL0MsVUFBTTBELFNBQU4sQ0FBZ0JQLG9CQUFoQjtBQUNBbkQsVUFBTXlELE1BQU4sQ0FBYUYsMkJBQWI7O0FBRUEsV0FBT3ZELEtBQVA7QUFDRCxHQVBRLENBQWY7O0FBU0EsU0FBT1AsTUFBUDtBQUNEIiwiZmlsZSI6InRyaWFuZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4uLy4uL2ZhY2V0JyksXG4gICAgICB2ZWMzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjMycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IEZhY2V0SW5YWVBsYW5lID0gcmVxdWlyZSgnLi4vLi4vZmFjZXRJblhZUGxhbmUnKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4uLy4uL3ZlcnRpY2FsTGluZUluWFlQbGFuZScpO1xuXG5jb25zdCB7IG5vcm1hbGlzZSB9ID0gdmVjMyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jb25zdCBmYWNldHMgPSBjYWxjdWxhdGVGYWNldHMoKSxcbiAgICAgIGNvbG91cnMgPSBbXG4gICAgICAgIFsgMSwgMCwgMCwgMSBdLFxuICAgICAgICBbIDAsIDEsIDAsIDEgXSxcbiAgICAgICAgWyAwLCAwLCAxLCAxIF0sXG4gICAgICBdO1xuXG5jbGFzcyBUcmlhbmdsZSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7IC8vL1xuICAgIHRoaXMuY29sb3VycyA9IGNvbG91cnM7IC8vL1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldENvbG91cnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VycztcbiAgfVxuXG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb25zLCBmYWNldCkge1xuICAgICAgY29uc3QgdmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpO1xuXG4gICAgICBpbml0aWFsVmVydGV4UG9zaXRpb25zID0gdmVydGljZXMucmVkdWNlKGZ1bmN0aW9uKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMsIHZlcnRleCkge1xuICAgICAgICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguc2xpY2UoKTsgLy8vXG5cbiAgICAgICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucy5wdXNoKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gICAgICB9LCBpbml0aWFsVmVydGV4UG9zaXRpb25zKTtcblxuICAgICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGxldCB2ZXJ0ZXhJbmRleCA9IDA7XG5cbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleEluZGV4ZXMsIGZhY2V0KSB7XG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gWyAuLi52ZXJ0ZXhJbmRleGVzLCB2ZXJ0ZXhJbmRleCArIDAsIHZlcnRleEluZGV4ICsgMSwgdmVydGV4SW5kZXggKyAyIF07XG5cbiAgICAgICAgICAgIHZlcnRleEluZGV4ICs9IDM7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2V0KSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICAgIG5vcm1hbHMgPSBbIC8vL1xuICAgICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICAgIG5vcm1hbCxcbiAgICAgICAgICAgICAgbm9ybWFsXG4gICAgICAgICAgICBdO1xuXG4gICAgICB2ZXJ0ZXhOb3JtYWxzID0gbm9ybWFscy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Tm9ybWFscywgbm9ybWFsKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleE5vcm1hbCA9IG5vcm1hbGlzZShub3JtYWwpO1xuXG4gICAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgICAgfSwgdmVydGV4Tm9ybWFscyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleENvbG91cnMsIGZhY2V0LCBpbmRleCkge1xuICAgICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXJzW2luZGV4XSxcbiAgICAgICAgICAgIGNvbG91cnMgPSBbXG4gICAgICAgICAgICAgIGNvbG91cixcbiAgICAgICAgICAgICAgY29sb3VyLFxuICAgICAgICAgICAgICBjb2xvdXJcbiAgICAgICAgICAgIF07XG5cbiAgICAgIHZlcnRleENvbG91cnMgPSBjb2xvdXJzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXIpIHtcbiAgICAgICAgY29uc3QgdmVydGV4Q29sb3VyID0gY29sb3VyOyAgLy8vXG5cbiAgICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG5cbiAgICAgIH0sIHZlcnRleENvbG91cnMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgICB9LmJpbmQodGhpcyksIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleENvbG91cnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuXG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgQ2xhc3MgPSBUcmlhbmdsZSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmlhbmdsZTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRmFjZXRzKCkge1xuICBjb25zdCBmYWNldFZlcnRpY2VzID0gW1xuICAgICAgICAgIFsgLTIsIDAsIDAgXSwgLy8vWyAwLCAwLCAyIF0sXG4gICAgICAgICAgWyAgMiwgMCwgMCBdLCAvLy9bIDEsIDAsIDEgXSxcbiAgICAgICAgICBbICAwLCAyLCAwIF0sIC8vL1sgMCwgMSwgMSBdLFxuICAgICAgICBdLFxuICAgICAgICBtYXNrRmFjZXRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICBbIDEsIDAsIDAgXSwgIC8vL1sgMC41LCAwLCAxIF0sXG4gICAgICAgICAgWyAxLCAxLCAwIF0sICAvLy9bIDAuNSwgMCwgMiBdLFxuICAgICAgICAgIFsgMSwgMSwgMSBdLCAgLy8vWyAwLjUsIDEsIDEgXSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoZmFjZXRWZXJ0aWNlcyksXG4gICAgICAgIG1hc2tGYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhtYXNrRmFjZXRWZXJ0aWNlcyksXG4gICAgICAgIGZhY2V0SW5YWVBsYW5lID0gRmFjZXRJblhZUGxhbmUuZnJvbUZhY2V0KGZhY2V0KTtcblxuICBjb25zdCBmb3J3YXJkc1RyYW5zbGF0aW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0Rm9yd2FyZHNUcmFuc2xhdGlvbigpLFxuICAgICAgICBiYWNrd2FyZHNUcmFuc2xhdGlvbiA9IGZhY2V0SW5YWVBsYW5lLmdldEJhY2t3YXJkc1RyYW5zbGF0aW9uKCksXG4gICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSxcbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCk7XG5cbiAgbWFza0ZhY2V0LnJvdGF0ZShmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gIG1hc2tGYWNldC50cmFuc2xhdGUoZm9yd2FyZHNUcmFuc2xhdGlvbik7XG5cbiAgY29uc3QgbGluZUluWFlQbGFuZSA9IG1hc2tGYWNldC5nZXRMaW5lSW5YWVBsYW5lKCksXG4gICAgICAgIHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IFZlcnRpY2FsTGluZUluWFlQbGFuZS5mcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKSxcbiAgICAgICAgZm9yd2FyZHNSb3RhdGlvbk1hdHJpeCA9IHZlcnRpY2FsTGluZUluWFlQbGFuZS5nZXRGb3J3YXJkc1JvdGF0aW9uTWF0cml4KCk7XG5cbiAgZmFjZXRJblhZUGxhbmUucm90YXRlKGZvcndhcmRzUm90YXRpb25NYXRyaXgpO1xuXG4gIGNvbnN0IGZhY2V0c0luWFlQbGFuZSA9IGZhY2V0SW5YWVBsYW5lLnBvc3NpYmx5U3BsaXQodmVydGljYWxMaW5lSW5YWVBsYW5lKSxcbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25NYXRyaXggPSB2ZXJ0aWNhbExpbmVJblhZUGxhbmUuZ2V0QmFja3dhcmRzUm90YXRpb25NYXRyaXgoKTtcblxuICBmYWNldHNJblhZUGxhbmUuZm9yRWFjaChmdW5jdGlvbiAoZmFjZXRJblhZUGxhbmUpIHtcbiAgICBmYWNldEluWFlQbGFuZS5yb3RhdGUoYmFja3dhcmRzUm90YXRpb25NYXRyaXgpO1xuICB9KTtcblxuICBjb25zdCBmYWNldHMgPSBmYWNldHNJblhZUGxhbmUubWFwKGZ1bmN0aW9uIChmYWNldEluWFlQbGFuZSkge1xuICAgICAgICAgIGNvbnN0IGZhY2V0ID0gRmFjZXQuZnJvbUZhY2V0SW5YWVBsYW5lKGZhY2V0SW5YWVBsYW5lKTtcblxuICAgICAgICAgIGZhY2V0LnRyYW5zbGF0ZShiYWNrd2FyZHNUcmFuc2xhdGlvbik7XG4gICAgICAgICAgZmFjZXQucm90YXRlKGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICAgICAgICByZXR1cm4gZmFjZXQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG4iXX0=