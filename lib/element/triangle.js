'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    vec3 = require('../maths/vec3'),
    Facet = require('../facet'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var chop = arrayUtilities.chop,
    composeTransform = transformUtilities.composeTransform,
    subtract = vec3.subtract,
    cross = vec3.cross,
    normalise = vec3.normalise;


var vertices = [[0, 0, 0], ///[ 0, 0, 2 ],
[2, 0, 0], ///[ 1, 0, 1 ],
[0, 2, 0]];

var Triangle = function (_Element) {
  _inherits(Triangle, _Element);

  function Triangle(transform) {
    _classCallCheck(this, Triangle);

    var _this = _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this));

    _this.transform = transform;

    _this.facet = Facet.fromVertices(vertices); ///
    return _this;
  }

  _createClass(Triangle, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'getFacet',
    value: function getFacet() {
      return this.facet;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });
    }
  }, {
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions(transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var initialVertexPositions = this.getInitialVertexPositions(),
          vertexPositions = initialVertexPositions.map(function (initialVertexPosition) {
        var vertexPosition = initialVertexPosition;

        transforms.forEach(function (transform) {
          vertexPosition = transform(vertexPosition);
        });

        return vertexPosition;
      });

      return vertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals(vertexPositions) {
      var faces = chop(vertexPositions, 4),
          ///
      vertexNormals = faces.reduce(function (vertexNormals, face) {
        var vertexPositions = face; ///

        for (var index = 0; index < 4; index++) {
          var firstVertexIndex = index,
              secondVertexIndex = (index + 1) % 4,
              thirdVertexIndex = (index + 3) % 4,
              firstVertexPosition = vertexPositions[firstVertexIndex],
              secondVertexPosition = vertexPositions[secondVertexIndex],
              thirdVertexPosition = vertexPositions[thirdVertexIndex],
              firstVector = subtract(secondVertexPosition, firstVertexPosition),
              secondVector = subtract(thirdVertexPosition, firstVertexPosition),
              vertexNormal = normalise(cross(firstVector, secondVector));

          vertexNormals.push(vertexNormal);
        }

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexIndexes',
    value: function calculateVertexIndexes(vertexPositions) {
      var vertexIndexes = [],
          vertexPositionsLength = vertexPositions.length,
          facesLength = vertexPositionsLength / 4; ///

      for (var index = 0; index < facesLength; index++) {
        var offset = index * 4;

        vertexIndexes.push(offset + 0);
        vertexIndexes.push(offset + 1);
        vertexIndexes.push(offset + 2);
        vertexIndexes.push(offset + 0);
        vertexIndexes.push(offset + 2);
        vertexIndexes.push(offset + 3);
      }

      return vertexIndexes;
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
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return Triangle;
}(Element);

module.exports = Triangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RyaWFuZ2xlLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwidmVjMyIsIkZhY2V0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0cmFuc2Zvcm1VdGlsaXRpZXMiLCJjaG9wIiwiY29tcG9zZVRyYW5zZm9ybSIsInN1YnRyYWN0IiwiY3Jvc3MiLCJub3JtYWxpc2UiLCJ2ZXJ0aWNlcyIsIlRyaWFuZ2xlIiwidHJhbnNmb3JtIiwiZmFjZXQiLCJmcm9tVmVydGljZXMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGUiLCJpbml0aWFsVmVydGV4UG9zaXRpb25zIiwiZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucyIsInZlcnRleFBvc2l0aW9ucyIsIm1hcCIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbiIsInZlcnRleFBvc2l0aW9uIiwiZmFjZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwicmVkdWNlIiwiZmFjZSIsImluZGV4IiwiZmlyc3RWZXJ0ZXhJbmRleCIsInNlY29uZFZlcnRleEluZGV4IiwidGhpcmRWZXJ0ZXhJbmRleCIsImZpcnN0VmVydGV4UG9zaXRpb24iLCJzZWNvbmRWZXJ0ZXhQb3NpdGlvbiIsInRoaXJkVmVydGV4UG9zaXRpb24iLCJmaXJzdFZlY3RvciIsInNlY29uZFZlY3RvciIsInZlcnRleE5vcm1hbCIsInB1c2giLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4UG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmFjZXNMZW5ndGgiLCJvZmZzZXQiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiQ2xhc3MiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxlQUFSLENBRGI7QUFBQSxJQUVNRSxRQUFRRixRQUFRLFVBQVIsQ0FGZDtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxvQkFBUixDQUh2QjtBQUFBLElBSU1JLHFCQUFxQkosUUFBUSx3QkFBUixDQUozQjs7QUFNTSxJQUFFSyxJQUFGLEdBQVdGLGNBQVgsQ0FBRUUsSUFBRjtBQUFBLElBQ0VDLGdCQURGLEdBQ3VCRixrQkFEdkIsQ0FDRUUsZ0JBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWlDTixJQUZqQyxDQUVFTSxRQUZGO0FBQUEsSUFFWUMsS0FGWixHQUVpQ1AsSUFGakMsQ0FFWU8sS0FGWjtBQUFBLElBRW1CQyxTQUZuQixHQUVpQ1IsSUFGakMsQ0FFbUJRLFNBRm5COzs7QUFJTixJQUFNQyxXQUFXLENBQ1QsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEUyxFQUNJO0FBQ2IsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FGUyxFQUVJO0FBQ2IsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FIUyxDQUFqQjs7SUFNTUMsUTs7O0FBQ0osb0JBQVlDLFNBQVosRUFBdUI7QUFBQTs7QUFBQTs7QUFHckIsVUFBS0EsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsVUFBS0MsS0FBTCxHQUFhWCxNQUFNWSxZQUFOLENBQW1CSixRQUFuQixDQUFiLENBTHFCLENBS3VCO0FBTHZCO0FBTXRCOzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLRSxTQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7MkJBRU1FLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUNsREEsb0JBQWMsS0FBS0wsU0FBbkIsNEJBQWlDSyxVQUFqQyxHQURrRCxDQUNKOztBQUU5QyxVQUFNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjRSxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhQyxNQUFiLENBQW9CUCxjQUFwQixFQUFvQ0MsZUFBcEMsRUFBcURDLFVBQXJEO0FBQ0QsT0FGRDtBQUdEOzs7NkNBRXdCQSxVLEVBQVk7QUFDbkNBLG9CQUFjLEtBQUtMLFNBQW5CLDRCQUFpQ0ssVUFBakMsR0FEbUMsQ0FDVzs7QUFFOUMsVUFBTU0seUJBQXlCLEtBQUtDLHlCQUFMLEVBQS9CO0FBQUEsVUFDTUMsa0JBQWtCRix1QkFBdUJHLEdBQXZCLENBQTJCLFVBQVNDLHFCQUFULEVBQWdDO0FBQzNFLFlBQUlDLGlCQUFpQkQscUJBQXJCOztBQUVBVixtQkFBV0csT0FBWCxDQUFtQixVQUFTUixTQUFULEVBQW9CO0FBQ3JDZ0IsMkJBQWlCaEIsVUFBVWdCLGNBQVYsQ0FBakI7QUFDRCxTQUZEOztBQUlBLGVBQU9BLGNBQVA7QUFDRCxPQVJpQixDQUR4Qjs7QUFXQSxhQUFPSCxlQUFQO0FBQ0Q7OzsyQ0FFc0JBLGUsRUFBaUI7QUFDdEMsVUFBTUksUUFBUXhCLEtBQUtvQixlQUFMLEVBQXNCLENBQXRCLENBQWQ7QUFBQSxVQUF5QztBQUNuQ0ssc0JBQWdCRCxNQUFNRSxNQUFOLENBQWEsVUFBU0QsYUFBVCxFQUF3QkUsSUFBeEIsRUFBOEI7QUFDekQsWUFBTVAsa0JBQWtCTyxJQUF4QixDQUR5RCxDQUMzQjs7QUFFOUIsYUFBSyxJQUFJQyxRQUFRLENBQWpCLEVBQW9CQSxRQUFRLENBQTVCLEVBQStCQSxPQUEvQixFQUF3QztBQUN0QyxjQUFNQyxtQkFBbUJELEtBQXpCO0FBQUEsY0FDTUUsb0JBQW9CLENBQUNGLFFBQVEsQ0FBVCxJQUFjLENBRHhDO0FBQUEsY0FFTUcsbUJBQW1CLENBQUNILFFBQVEsQ0FBVCxJQUFjLENBRnZDO0FBQUEsY0FHTUksc0JBQXNCWixnQkFBZ0JTLGdCQUFoQixDQUg1QjtBQUFBLGNBSU1JLHVCQUF1QmIsZ0JBQWdCVSxpQkFBaEIsQ0FKN0I7QUFBQSxjQUtNSSxzQkFBc0JkLGdCQUFnQlcsZ0JBQWhCLENBTDVCO0FBQUEsY0FNTUksY0FBY2pDLFNBQVMrQixvQkFBVCxFQUErQkQsbUJBQS9CLENBTnBCO0FBQUEsY0FPTUksZUFBZWxDLFNBQVNnQyxtQkFBVCxFQUE4QkYsbUJBQTlCLENBUHJCO0FBQUEsY0FRTUssZUFBZWpDLFVBQVVELE1BQU1nQyxXQUFOLEVBQW1CQyxZQUFuQixDQUFWLENBUnJCOztBQVVBWCx3QkFBY2EsSUFBZCxDQUFtQkQsWUFBbkI7QUFDRDs7QUFFRCxlQUFPWixhQUFQO0FBQ0QsT0FsQmUsRUFrQmIsRUFsQmEsQ0FEdEI7O0FBcUJBLGFBQU9BLGFBQVA7QUFDRDs7OzJDQUVzQkwsZSxFQUFpQjtBQUN0QyxVQUFNbUIsZ0JBQWdCLEVBQXRCO0FBQUEsVUFDTUMsd0JBQXdCcEIsZ0JBQWdCcUIsTUFEOUM7QUFBQSxVQUVNQyxjQUFjRix3QkFBd0IsQ0FGNUMsQ0FEc0MsQ0FHUzs7QUFFL0MsV0FBSyxJQUFJWixRQUFRLENBQWpCLEVBQW9CQSxRQUFRYyxXQUE1QixFQUF5Q2QsT0FBekMsRUFBa0Q7QUFDaEQsWUFBTWUsU0FBU2YsUUFBUSxDQUF2Qjs7QUFFQVcsc0JBQWNELElBQWQsQ0FBbUJLLFNBQVMsQ0FBNUI7QUFDQUosc0JBQWNELElBQWQsQ0FBbUJLLFNBQVMsQ0FBNUI7QUFDQUosc0JBQWNELElBQWQsQ0FBbUJLLFNBQVMsQ0FBNUI7QUFDQUosc0JBQWNELElBQWQsQ0FBbUJLLFNBQVMsQ0FBNUI7QUFDQUosc0JBQWNELElBQWQsQ0FBbUJLLFNBQVMsQ0FBNUI7QUFDQUosc0JBQWNELElBQWQsQ0FBbUJLLFNBQVMsQ0FBNUI7QUFDRDs7QUFFRCxhQUFPSixhQUFQO0FBQ0Q7OzttQ0FFcUJLLFUsRUFBbUM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQUEsVUFDL0NDLEtBRCtDLEdBQ0RGLFVBREMsQ0FDL0NFLEtBRCtDO0FBQUEsVUFDeENDLE1BRHdDLEdBQ0RILFVBREMsQ0FDeENHLE1BRHdDO0FBQUEsVUFDaENDLEtBRGdDLEdBQ0RKLFVBREMsQ0FDaENJLEtBRGdDO0FBQUEsVUFDekJDLFFBRHlCLEdBQ0RMLFVBREMsQ0FDekJLLFFBRHlCO0FBQUEsVUFDZkMsU0FEZSxHQUNETixVQURDLENBQ2ZNLFNBRGU7QUFBQSxVQUVqRDNDLFNBRmlELEdBRXJDTixpQkFBaUI2QyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpREMsU0FBakQsQ0FGcUM7QUFBQSxVQUdqREMsS0FIaUQsR0FHekM3QyxRQUh5QztBQUFBLFVBSWpEOEMsYUFKaUQsR0FJakMxRCxRQUFRMkQsY0FBUixpQkFBdUJGLEtBQXZCLEVBQThCUCxVQUE5QixFQUEwQ3JDLFNBQTFDLFNBQXdEc0Msa0JBQXhELEVBSmlDOzs7QUFNdkQsYUFBT08sYUFBUDtBQUNEOzs7O0VBL0ZvQjFELE87O0FBa0d2QjRELE9BQU9DLE9BQVAsR0FBaUJqRCxRQUFqQiIsImZpbGUiOiJ0cmlhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIHZlYzMgPSByZXF1aXJlKCcuLi9tYXRocy92ZWMzJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCB7IGNob3AgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXMsXG4gICAgICB7IHN1YnRyYWN0LCBjcm9zcywgbm9ybWFsaXNlIH0gPSB2ZWMzO1xuXG5jb25zdCB2ZXJ0aWNlcyA9IFtcbiAgICAgICAgWyAwLCAwLCAwIF0sIC8vL1sgMCwgMCwgMiBdLFxuICAgICAgICBbIDIsIDAsIDAgXSwgLy8vWyAxLCAwLCAxIF0sXG4gICAgICAgIFsgMCwgMiwgMCBdLCAvLy9bIDAsIDEsIDEgXSxcbiAgICAgIF07XG5cbmNsYXNzIFRyaWFuZ2xlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgIHRoaXMuZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModmVydGljZXMpOyAgLy8vXG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXQ7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBpbml0aWFsVmVydGV4UG9zaXRpb25zLm1hcChmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb24pIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXhQb3NpdGlvbiA9IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbjtcblxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbiA9IHRyYW5zZm9ybSh2ZXJ0ZXhQb3NpdGlvbik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgZmFjZXMgPSBjaG9wKHZlcnRleFBvc2l0aW9ucywgNCksICAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gZmFjZXMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IGZhY2U7IC8vL1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBmaXJzdFZlcnRleEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMSkgJSA0LFxuICAgICAgICAgICAgICAgICAgICB0aGlyZFZlcnRleEluZGV4ID0gKGluZGV4ICsgMykgJSA0LFxuICAgICAgICAgICAgICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2ZpcnN0VmVydGV4SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzZWNvbmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXJkVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbdGhpcmRWZXJ0ZXhJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0VmVjdG9yID0gc3VidHJhY3Qoc2Vjb25kVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRWZWN0b3IgPSBzdWJ0cmFjdCh0aGlyZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsaXNlKGNyb3NzKGZpcnN0VmVjdG9yLCBzZWNvbmRWZWN0b3IpKTtcblxuICAgICAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNMZW5ndGggPSB2ZXJ0ZXhQb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIGZhY2VzTGVuZ3RoID0gdmVydGV4UG9zaXRpb25zTGVuZ3RoIC8gNDsgLy8vXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmFjZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogNDtcblxuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDEpO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDIpO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDApO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDIpO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKG9mZnNldCArIDMpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgQ2xhc3MgPSBUcmlhbmdsZSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmlhbmdsZTtcbiJdfQ==