'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Facet = require('../facet'),
    Mask = require('../element/mask'),
    vectorUtilities = require('../utilities/vector'),
    transformUtilities = require('../utilities/transform');

var normalise3 = vectorUtilities.normalise3,
    composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(facets, transform) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.facets = facets;

    _this.transform = transform;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements(),
          mask = false; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms, mask);

        if (childElement instanceof Mask) {
          var maskElement = childElement,
              ///
          element = this; ///

          maskElement.mask(element);
        }
      }.bind(this));
    }
  }, {
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions() {
      var vertexPositions = this.facets.reduce(function (vertexPositions, facet) {
        var vertices = facet.getVertices();

        vertexPositions = vertices.reduce(function (vertexPositions, vertex) {
          var vertexPosition = vertex.slice(); ///

          vertexPositions.push(vertexPosition);

          return vertexPositions;
        }, vertexPositions);

        return vertexPositions;
      }, []);

      return vertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals() {
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
    value: function calculateVertexIndexes() {
      var vertexIndex = 0;

      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet) {
        vertexIndexes.push(vertexIndex++);
        vertexIndexes.push(vertexIndex++);
        vertexIndexes.push(vertexIndex++);

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          facets = indexes.map(function (indexes) {
        var facet = Facet.fromVerticesAndIndexes(vertices, indexes);

        return facet;
      }),
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, facets, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkZhY2V0IiwiTWFzayIsInZlY3RvclV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsIm5vcm1hbGlzZTMiLCJjb21wb3NlVHJhbnNmb3JtIiwiQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImZvckVhY2giLCJmYWNldCIsImFwcGx5VHJhbnNmb3JtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwibWFzayIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsIm1hc2tFbGVtZW50IiwiZWxlbWVudCIsImJpbmQiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJyZWR1Y2UiLCJ2ZXJ0aWNlcyIsImdldFZlcnRpY2VzIiwidmVydGV4IiwidmVydGV4UG9zaXRpb24iLCJzbGljZSIsInB1c2giLCJ2ZXJ0ZXhOb3JtYWxzIiwibm9ybWFsIiwiZ2V0Tm9ybWFsIiwidmVydGV4Tm9ybWFsIiwidmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleGVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiaW5kZXhlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsIm1hcCIsImZyb21WZXJ0aWNlc0FuZEluZGV4ZXMiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxPQUFPRixRQUFRLGlCQUFSLENBRmI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEscUJBQVIsQ0FIeEI7QUFBQSxJQUlNSSxxQkFBcUJKLFFBQVEsd0JBQVIsQ0FKM0I7O0FBTU0sSUFBRUssVUFBRixHQUFpQkYsZUFBakIsQ0FBRUUsVUFBRjtBQUFBLElBQ0VDLGdCQURGLEdBQ3VCRixrQkFEdkIsQ0FDRUUsZ0JBREY7O0lBR0FDLGE7OztBQUNKLHlCQUFZQyxNQUFaLEVBQW9CQyxTQUFwQixFQUErQjtBQUFBOztBQUFBOztBQUc3QixVQUFLRCxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFMNkI7QUFNOUI7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtELE1BQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7Ozs4QkFFU0QsTSxFQUFRO0FBQ2hCLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7MkJBRU1FLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUNsREEsb0JBQWMsS0FBS0gsU0FBbkIsNEJBQWlDRyxVQUFqQyxHQURrRCxDQUNKOztBQUU5QyxXQUFLSixNQUFMLENBQVlLLE9BQVosQ0FBb0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNsQ0EsY0FBTUMsZUFBTixDQUFzQkgsVUFBdEI7QUFDRCxPQUZEOztBQUlBLFVBQU1JLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLE9BQU8sS0FEYixDQVBrRCxDQVE5Qjs7QUFFcEJGLG9CQUFjSCxPQUFkLENBQXNCLFVBQVNNLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhQyxNQUFiLENBQW9CVixjQUFwQixFQUFvQ0MsZUFBcEMsRUFBcURDLFVBQXJELEVBQWlFTSxJQUFqRTs7QUFFQSxZQUFJQyx3QkFBd0JqQixJQUE1QixFQUFrQztBQUNoQyxjQUFNbUIsY0FBY0YsWUFBcEI7QUFBQSxjQUFtQztBQUM3Qkcsb0JBQVUsSUFEaEIsQ0FEZ0MsQ0FFVjs7QUFFdEJELHNCQUFZSCxJQUFaLENBQWlCSSxPQUFqQjtBQUNEO0FBQ0YsT0FUcUIsQ0FTcEJDLElBVG9CLENBU2YsSUFUZSxDQUF0QjtBQVVEOzs7K0NBRTBCO0FBQ3pCLFVBQU1DLGtCQUFrQixLQUFLaEIsTUFBTCxDQUFZaUIsTUFBWixDQUFtQixVQUFTRCxlQUFULEVBQTBCVixLQUExQixFQUFpQztBQUMxRSxZQUFNWSxXQUFXWixNQUFNYSxXQUFOLEVBQWpCOztBQUVBSCwwQkFBa0JFLFNBQVNELE1BQVQsQ0FBZ0IsVUFBU0QsZUFBVCxFQUEwQkksTUFBMUIsRUFBa0M7QUFDbEUsY0FBTUMsaUJBQWlCRCxPQUFPRSxLQUFQLEVBQXZCLENBRGtFLENBQzNCOztBQUV2Q04sMEJBQWdCTyxJQUFoQixDQUFxQkYsY0FBckI7O0FBRUEsaUJBQU9MLGVBQVA7QUFDRCxTQU5pQixFQU1mQSxlQU5lLENBQWxCOztBQVFBLGVBQU9BLGVBQVA7QUFDRCxPQVp1QixFQVlyQixFQVpxQixDQUF4Qjs7QUFjQSxhQUFPQSxlQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBTVEsZ0JBQWdCLEtBQUt4QixNQUFMLENBQVlpQixNQUFaLENBQW1CLFVBQVNPLGFBQVQsRUFBd0JsQixLQUF4QixFQUErQjtBQUN0RSxZQUFNbUIsU0FBU25CLE1BQU1vQixTQUFOLEVBQWY7QUFBQSxZQUNNQyxlQUFlOUIsV0FBVzRCLE1BQVgsQ0FEckI7O0FBR0FELHNCQUFjRCxJQUFkLENBQW1CSSxZQUFuQjtBQUNBSCxzQkFBY0QsSUFBZCxDQUFtQkksWUFBbkI7QUFDQUgsc0JBQWNELElBQWQsQ0FBbUJJLFlBQW5COztBQUVBLGVBQU9ILGFBQVA7QUFDRCxPQVRxQixFQVNuQixFQVRtQixDQUF0Qjs7QUFXQSxhQUFPQSxhQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsVUFBSUksY0FBYyxDQUFsQjs7QUFFQSxVQUFNQyxnQkFBZ0IsS0FBSzdCLE1BQUwsQ0FBWWlCLE1BQVosQ0FBbUIsVUFBU1ksYUFBVCxFQUF3QnZCLEtBQXhCLEVBQStCO0FBQ3RFdUIsc0JBQWNOLElBQWQsQ0FBbUJLLGFBQW5CO0FBQ0FDLHNCQUFjTixJQUFkLENBQW1CSyxhQUFuQjtBQUNBQyxzQkFBY04sSUFBZCxDQUFtQkssYUFBbkI7O0FBRUEsZUFBT0MsYUFBUDtBQUNELE9BTnFCLEVBTW5CLEVBTm1CLENBQXRCOztBQVFBLGFBQU9BLGFBQVA7QUFDRDs7O21DQUVxQkMsSyxFQUFPQyxVLEVBQVliLFEsRUFBVWMsTyxFQUFnQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBQSxVQUN6RUMsS0FEeUUsR0FDM0JILFVBRDJCLENBQ3pFRyxLQUR5RTtBQUFBLFVBQ2xFQyxNQURrRSxHQUMzQkosVUFEMkIsQ0FDbEVJLE1BRGtFO0FBQUEsVUFDMURDLEtBRDBELEdBQzNCTCxVQUQyQixDQUMxREssS0FEMEQ7QUFBQSxVQUNuREMsUUFEbUQsR0FDM0JOLFVBRDJCLENBQ25ETSxRQURtRDtBQUFBLFVBQ3pDQyxTQUR5QyxHQUMzQlAsVUFEMkIsQ0FDekNPLFNBRHlDO0FBQUEsVUFFM0V0QyxNQUYyRSxHQUVsRWdDLFFBQVFPLEdBQVIsQ0FBWSxVQUFTUCxPQUFULEVBQWtCO0FBQ3JDLFlBQU0xQixRQUFRYixNQUFNK0Msc0JBQU4sQ0FBNkJ0QixRQUE3QixFQUF1Q2MsT0FBdkMsQ0FBZDs7QUFFQSxlQUFPMUIsS0FBUDtBQUNELE9BSlEsQ0FGa0U7QUFBQSxVQU8zRUwsU0FQMkUsR0FPL0RILGlCQUFpQm9DLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQ0MsS0FBaEMsRUFBdUNDLFFBQXZDLEVBQWlEQyxTQUFqRCxDQVArRDtBQUFBLFVBUTNFRyxhQVIyRSxHQVEzRGxELFFBQVFtRCxjQUFSLGlCQUF1QlosS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDL0IsTUFBMUMsRUFBa0RDLFNBQWxELFNBQWdFZ0Msa0JBQWhFLEVBUjJEOzs7QUFVakYsYUFBT1EsYUFBUDtBQUNEOzs7O0VBckd5QmxELE87O0FBd0c1Qm9ELE9BQU9DLE9BQVAsR0FBaUI3QyxhQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBNYXNrID0gcmVxdWlyZSgnLi4vZWxlbWVudC9tYXNrJyksXG4gICAgICB2ZWN0b3JVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVjdG9yJyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtLCAuLi50cmFuc2Zvcm1zXTsgLy8vXG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICBmYWNldC5hcHBseVRyYW5zZm9ybXModHJhbnNmb3Jtcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFzayA9IGZhbHNlOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFzayk7XG5cbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrKSB7XG4gICAgICAgIGNvbnN0IG1hc2tFbGVtZW50ID0gY2hpbGRFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrRWxlbWVudC5tYXNrKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleFBvc2l0aW9ucywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcblxuICAgICAgdmVydGV4UG9zaXRpb25zID0gdmVydGljZXMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleFBvc2l0aW9ucywgdmVydGV4KSB7XG4gICAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LnNsaWNlKCk7IC8vL1xuXG4gICAgICAgIHZlcnRleFBvc2l0aW9ucy5wdXNoKHZlcnRleFBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICAgICAgfSwgdmVydGV4UG9zaXRpb25zKTtcblxuICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2V0KSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbGlzZTMobm9ybWFsKTtcblxuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4ZXMoKSB7XG4gICAgbGV0IHZlcnRleEluZGV4ID0gMDtcblxuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4SW5kZXhlcywgZmFjZXQpIHtcbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaCh2ZXJ0ZXhJbmRleCsrKTtcbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaCh2ZXJ0ZXhJbmRleCsrKTtcbiAgICAgIHZlcnRleEluZGV4ZXMucHVzaCh2ZXJ0ZXhJbmRleCsrKTtcblxuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHZlcnRpY2VzLCBpbmRleGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZhY2V0cyA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uKGluZGV4ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzQW5kSW5kZXhlcyh2ZXJ0aWNlcywgaW5kZXhlcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCB0cmFuc2Zvcm0sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iXX0=