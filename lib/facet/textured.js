'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../facet'),
    vectorUtilities = require('../utilities/vector'),
    verticesUtilities = require('../utilities/vertices'),
    imageMapUtilities = require('../utilities/imageMap');

var add2 = vectorUtilities.add2,
    multiply2 = vectorUtilities.multiply2,
    calculateNormal = verticesUtilities.calculateNormal,
    getImageDetails = imageMapUtilities.getImageDetails;

var TexturedFacet = function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, imageName, textureCoordinates) {
    _classCallCheck(this, TexturedFacet);

    var _this = _possibleConstructorReturn(this, (TexturedFacet.__proto__ || Object.getPrototypeOf(TexturedFacet)).call(this, vertices, normal));

    _this.imageName = imageName;
    _this.textureCoordinates = textureCoordinates;
    return _this;
  }

  _createClass(TexturedFacet, [{
    key: 'getImageName',
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: 'getTextureCoordinates',
    value: function getTextureCoordinates() {
      return this.textureCoordinates;
    }
  }, {
    key: 'getVertexTextureCoordinates',
    value: function getVertexTextureCoordinates() {
      var imageDetails = getImageDetails(this.imageName),
          left = imageDetails.left,
          bottom = imageDetails.bottom,
          width = imageDetails.width,
          height = imageDetails.height,
          vertexTextureCoordinates = translateTextureCoordinates(this.textureCoordinates, left, bottom, width, height);


      return vertexTextureCoordinates;
    }
  }], [{
    key: 'fromVerticesIndexesImageNameAndTextureCoordinates',
    value: function fromVerticesIndexesImageNameAndTextureCoordinates(vertices, indexes, imageName, textureCoordinates, index) {
      vertices = indexes.map(function (index) {
        return vertices[index];
      }); ///

      textureCoordinates = textureCoordinates.slice(index * 3, index * 3 + 3); ///

      var normal = calculateNormal(vertices),
          texturedFacet = new TexturedFacet(vertices, normal, imageName, textureCoordinates);

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;

function translateTextureCoordinates(textureCoordinates, left, bottom, width, height) {
  textureCoordinates = textureCoordinates.map(function (textureCoordinates) {
    ///
    textureCoordinates = add2(multiply2(textureCoordinates, [width, height]), [left, bottom]);

    return textureCoordinates;
  });

  return textureCoordinates;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWN0b3JVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsImltYWdlTWFwVXRpbGl0aWVzIiwiYWRkMiIsIm11bHRpcGx5MiIsImNhbGN1bGF0ZU5vcm1hbCIsImdldEltYWdlRGV0YWlscyIsIlRleHR1cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsImxlZnQiLCJpbWFnZURldGFpbHMiLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsInRyYW5zbGF0ZVRleHR1cmVDb29yZGluYXRlcyIsImluZGV4ZXMiLCJpbmRleCIsIm1hcCIsInNsaWNlIiwidGV4dHVyZWRGYWNldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEscUJBQVIsQ0FEeEI7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsdUJBQVIsQ0FGMUI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsdUJBQVIsQ0FIMUI7O0lBS1FJLEksR0FBb0JILGUsQ0FBcEJHLEk7SUFBTUMsUyxHQUFjSixlLENBQWRJLFM7SUFDTkMsZSxHQUFvQkosaUIsQ0FBcEJJLGU7SUFDQUMsZSxHQUFvQkosaUIsQ0FBcEJJLGU7O0lBRUZDLGE7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsU0FBOUIsRUFBeUNDLGtCQUF6QyxFQUE2RDtBQUFBOztBQUFBLDhIQUNyREgsUUFEcUQsRUFDM0NDLE1BRDJDOztBQUczRCxVQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFKMkQ7QUFLNUQ7Ozs7bUNBRWM7QUFDYixhQUFPLEtBQUtELFNBQVo7QUFDRDs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtDLGtCQUFaO0FBQ0Q7OztrREFFNkI7QUFDdEIseUJBQWVMLGdCQUFnQixLQUFLSSxTQUFyQixDQUFmO0FBQUEsVUFDRUUsSUFERixHQUNrQ0MsWUFEbEMsQ0FDRUQsSUFERjtBQUFBLFVBQ1FFLE1BRFIsR0FDa0NELFlBRGxDLENBQ1FDLE1BRFI7QUFBQSxVQUNnQkMsS0FEaEIsR0FDa0NGLFlBRGxDLENBQ2dCRSxLQURoQjtBQUFBLFVBQ3VCQyxNQUR2QixHQUNrQ0gsWUFEbEMsQ0FDdUJHLE1BRHZCO0FBQUEsVUFFQUMsd0JBRkEsR0FFMkJDLDRCQUE0QixLQUFLUCxrQkFBakMsRUFBcURDLElBQXJELEVBQTJERSxNQUEzRCxFQUFtRUMsS0FBbkUsRUFBMEVDLE1BQTFFLENBRjNCOzs7QUFJTixhQUFPQyx3QkFBUDtBQUNEOzs7c0VBRXdEVCxRLEVBQVVXLE8sRUFBU1QsUyxFQUFXQyxrQixFQUFvQlMsSyxFQUFPO0FBQ2hIWixpQkFBV1csUUFBUUUsR0FBUixDQUFZLFVBQVNELEtBQVQsRUFBZ0I7QUFBRSxlQUFPWixTQUFTWSxLQUFULENBQVA7QUFBeUIsT0FBdkQsQ0FBWCxDQURnSCxDQUMxQzs7QUFFdEVULDJCQUFxQkEsbUJBQW1CVyxLQUFuQixDQUF5QkYsUUFBUSxDQUFqQyxFQUFvQ0EsUUFBUSxDQUFSLEdBQVksQ0FBaEQsQ0FBckIsQ0FIZ0gsQ0FHdEM7O0FBRTFFLFVBQU1YLFNBQVNKLGdCQUFnQkcsUUFBaEIsQ0FBZjtBQUFBLFVBQ01lLGdCQUFnQixJQUFJaEIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxTQUFwQyxFQUErQ0Msa0JBQS9DLENBRHRCOztBQUdBLGFBQU9ZLGFBQVA7QUFDRDs7OztFQWpDeUJ6QixLOztBQW9DNUIwQixPQUFPQyxPQUFQLEdBQWlCbEIsYUFBakI7O0FBRUEsU0FBU1csMkJBQVQsQ0FBcUNQLGtCQUFyQyxFQUF5REMsSUFBekQsRUFBK0RFLE1BQS9ELEVBQXVFQyxLQUF2RSxFQUE4RUMsTUFBOUUsRUFBdUY7QUFDckZMLHVCQUFxQkEsbUJBQW1CVSxHQUFuQixDQUF1QixVQUFTVixrQkFBVCxFQUE2QjtBQUFHO0FBQzFFQSx5QkFBcUJSLEtBQUtDLFVBQVVPLGtCQUFWLEVBQThCLENBQUVJLEtBQUYsRUFBU0MsTUFBVCxDQUE5QixDQUFMLEVBQXdELENBQUVKLElBQUYsRUFBUUUsTUFBUixDQUF4RCxDQUFyQjs7QUFFQSxXQUFPSCxrQkFBUDtBQUNELEdBSm9CLENBQXJCOztBQU1BLFNBQU9BLGtCQUFQO0FBQ0QiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IGFkZDIsIG11bHRpcGx5MiB9ID0gdmVjdG9yVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBnZXRJbWFnZURldGFpbHMgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBpbWFnZURldGFpbHMgPSBnZXRJbWFnZURldGFpbHModGhpcy5pbWFnZU5hbWUpLFxuICAgICAgICAgIHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZURldGFpbHMsXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzID0gdHJhbnNsYXRlVGV4dHVyZUNvb3JkaW5hdGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzLCBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXNJbmRleGVzSW1hZ2VOYW1lQW5kVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRpY2VzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgaW5kZXgpIHtcbiAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uKGluZGV4KSB7IHJldHVybiB2ZXJ0aWNlc1tpbmRleF07IH0pOyAgLy8vXG5cbiAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXMuc2xpY2UoaW5kZXggKiAzLCBpbmRleCAqIDMgKyAzKTsgIC8vL1xuXG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVUZXh0dXJlQ29vcmRpbmF0ZXModGV4dHVyZUNvb3JkaW5hdGVzLCBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgKSB7XG4gIHRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcy5tYXAoZnVuY3Rpb24odGV4dHVyZUNvb3JkaW5hdGVzKSB7ICAvLy9cbiAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBhZGQyKG11bHRpcGx5Mih0ZXh0dXJlQ29vcmRpbmF0ZXMsIFsgd2lkdGgsIGhlaWdodCBdICksIFsgbGVmdCwgYm90dG9tIF0pO1xuXG4gICAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbiAgfSk7XG5cbiAgcmV0dXJuIHRleHR1cmVDb29yZGluYXRlcztcbn1cbiJdfQ==