'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/texture/vertexShader'),
    TextureRendererData = require('../renderer/data/texture'),
    fragmentShaderSource = require('./source/texture/fragmentShader'),
    TextureRendererBuffers = require('../renderer/buffers/texture'),
    TextureUniformLocations = require('./locations/texture/uniform'),
    TextureAttributeLocations = require('./locations/texture/attribute');

var createProgram = Renderer.createProgram;

var TextureRenderer = function (_Renderer) {
      _inherits(TextureRenderer, _Renderer);

      function TextureRenderer() {
            _classCallCheck(this, TextureRenderer);

            return _possibleConstructorReturn(this, (TextureRenderer.__proto__ || Object.getPrototypeOf(TextureRenderer)).apply(this, arguments));
      }

      _createClass(TextureRenderer, [{
            key: 'getTextureCoordinateAttributeLocation',
            value: function getTextureCoordinateAttributeLocation() {
                  var attributeLocations = this.getAttributeLocations(),
                      textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();

                  return textureCoordinateAttributeLocation;
            }
      }, {
            key: 'createBuffers',
            value: function createBuffers(canvas) {
                  var rendererData = this.getRendererData(),
                      rendererBuffers = this.getRendererBuffers(),
                      vertexPositionsData = rendererData.getVertexPositionsData(),
                      vertexNormalsData = rendererData.getVertexNormalsData(),
                      vertexIndexesData = rendererData.getVertexIndexesData(),
                      vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();

                  rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
            }
      }, {
            key: 'bindBuffers',
            value: function bindBuffers(canvas) {
                  var rendererBuffers = this.getRendererBuffers(),
                      vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(),
                      vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(),
                      textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();

                  rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
      }, {
            key: 'useTexture',
            value: function useTexture(index, canvas) {
                  var uniformLocations = this.getUniformLocations(),
                      samplerUniformLocation = uniformLocations.getSamplerUniformLocation(),
                      samplerUniformLocationIntegerValue = index; ///

                  canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
      }], [{
            key: 'fromNothing',
            value: function fromNothing(Class, canvas) {
                  for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                        remainingArguments[_key - 2] = arguments[_key];
                  }

                  var facets = [],
                      program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
                      textureRendererData = TextureRendererData.fromNothing(),
                      textureRendererBuffers = TextureRendererBuffers.fromNothing(),
                      textureUniformLocations = TextureUniformLocations.fromProgram(program, canvas),
                      textureAttributeLocations = TextureAttributeLocations.fromProgram(program, canvas),
                      rendererData = textureRendererData,
                      ///
                  rendererBuffers = textureRendererBuffers,
                      ///
                  uniformLocations = textureUniformLocations,
                      ///
                  attributeLocations = textureAttributeLocations,
                      ///
                  textureRenderer = new (Function.prototype.bind.apply(Class, [null].concat([facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations], remainingArguments)))();

                  canvas.enableAnisotropicFiltering(); ///

                  return textureRenderer;
            }
      }]);

      return TextureRenderer;
}(Renderer);

module.exports = TextureRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwicmVxdWlyZSIsInZlcnRleFNoYWRlclNvdXJjZSIsIlRleHR1cmVSZW5kZXJlckRhdGEiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsIlRleHR1cmVSZW5kZXJlckJ1ZmZlcnMiLCJUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyIsIlRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMiLCJjcmVhdGVQcm9ncmFtIiwiVGV4dHVyZVJlbmRlcmVyIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJjYW52YXMiLCJyZW5kZXJlckRhdGEiLCJnZXRSZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJnZXRSZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwiZ2V0VmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwiZ2V0VmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImdldFZlcnRleEluZGV4ZXNEYXRhIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJjcmVhdGVCdWZmZXJzIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlcnMiLCJpbmRleCIsInVuaWZvcm1Mb2NhdGlvbnMiLCJnZXRVbmlmb3JtTG9jYXRpb25zIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsImdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJmYWNldHMiLCJwcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyRGF0YSIsImZyb21Ob3RoaW5nIiwidGV4dHVyZVJlbmRlcmVyQnVmZmVycyIsInRleHR1cmVVbmlmb3JtTG9jYXRpb25zIiwiZnJvbVByb2dyYW0iLCJ0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIiwidGV4dHVyZVJlbmRlcmVyIiwiZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01DLHFCQUFxQkQsUUFBUSwrQkFBUixDQUQzQjtBQUFBLElBRU1FLHNCQUFzQkYsUUFBUSwwQkFBUixDQUY1QjtBQUFBLElBR01HLHVCQUF1QkgsUUFBUSxpQ0FBUixDQUg3QjtBQUFBLElBSU1JLHlCQUF5QkosUUFBUSw2QkFBUixDQUovQjtBQUFBLElBS01LLDBCQUEwQkwsUUFBUSw2QkFBUixDQUxoQztBQUFBLElBTU1NLDRCQUE0Qk4sUUFBUSwrQkFBUixDQU5sQzs7SUFRUU8sYSxHQUFrQlIsUSxDQUFsQlEsYTs7SUFFRkMsZTs7Ozs7Ozs7Ozs7b0VBQ29DO0FBQ3RDLHNCQUFNQyxxQkFBcUIsS0FBS0MscUJBQUwsRUFBM0I7QUFBQSxzQkFDTUMscUNBQXFDRixtQkFBbUJHLHFDQUFuQixFQUQzQzs7QUFHQSx5QkFBT0Qsa0NBQVA7QUFDRDs7OzBDQUVhRSxNLEVBQVE7QUFDcEIsc0JBQU1DLGVBQWUsS0FBS0MsZUFBTCxFQUFyQjtBQUFBLHNCQUNNQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFEeEI7QUFBQSxzQkFFTUMsc0JBQXNCSixhQUFhSyxzQkFBYixFQUY1QjtBQUFBLHNCQUdNQyxvQkFBb0JOLGFBQWFPLG9CQUFiLEVBSDFCO0FBQUEsc0JBSU1DLG9CQUFvQlIsYUFBYVMsb0JBQWIsRUFKMUI7QUFBQSxzQkFLTUMsK0JBQStCVixhQUFhVywrQkFBYixFQUxyQzs7QUFPQVQsa0NBQWdCVSxhQUFoQixDQUE4QlIsbUJBQTlCLEVBQW1ERSxpQkFBbkQsRUFBc0VFLGlCQUF0RSxFQUF5RkUsNEJBQXpGLEVBQXVIWCxNQUF2SDtBQUNEOzs7d0NBRVdBLE0sRUFBUTtBQUNsQixzQkFBTUcsa0JBQWtCLEtBQUtDLGtCQUFMLEVBQXhCO0FBQUEsc0JBQ01VLGdDQUFnQyxLQUFLQyxnQ0FBTCxFQUR0QztBQUFBLHNCQUVNQyxrQ0FBa0MsS0FBS0Msa0NBQUwsRUFGeEM7QUFBQSxzQkFHTW5CLHFDQUFxQyxLQUFLQyxxQ0FBTCxFQUgzQzs7QUFLQUksa0NBQWdCZSxXQUFoQixDQUE0QkosNkJBQTVCLEVBQTJERSwrQkFBM0QsRUFBNEZsQixrQ0FBNUYsRUFBZ0lFLE1BQWhJO0FBQ0Q7Ozt1Q0FFVW1CLEssRUFBT25CLE0sRUFBUTtBQUN4QixzQkFBTW9CLG1CQUFtQixLQUFLQyxtQkFBTCxFQUF6QjtBQUFBLHNCQUNNQyx5QkFBeUJGLGlCQUFpQkcseUJBQWpCLEVBRC9CO0FBQUEsc0JBRU1DLHFDQUFxQ0wsS0FGM0MsQ0FEd0IsQ0FHMEI7O0FBRWxEbkIseUJBQU95Qiw4QkFBUCxDQUFzQ0gsc0JBQXRDLEVBQThERSxrQ0FBOUQ7QUFDRDs7O3dDQUVrQkUsSyxFQUFPMUIsTSxFQUErQjtBQUFBLG9EQUFwQjJCLGtCQUFvQjtBQUFwQkEsMENBQW9CO0FBQUE7O0FBQ3ZELHNCQUFNQyxTQUFTLEVBQWY7QUFBQSxzQkFDTUMsVUFBVW5DLGNBQWNOLGtCQUFkLEVBQWtDRSxvQkFBbEMsRUFBd0RVLE1BQXhELENBRGhCO0FBQUEsc0JBRU04QixzQkFBc0J6QyxvQkFBb0IwQyxXQUFwQixFQUY1QjtBQUFBLHNCQUdNQyx5QkFBeUJ6Qyx1QkFBdUJ3QyxXQUF2QixFQUgvQjtBQUFBLHNCQUlNRSwwQkFBMEJ6Qyx3QkFBd0IwQyxXQUF4QixDQUFvQ0wsT0FBcEMsRUFBNkM3QixNQUE3QyxDQUpoQztBQUFBLHNCQUtNbUMsNEJBQTRCMUMsMEJBQTBCeUMsV0FBMUIsQ0FBc0NMLE9BQXRDLEVBQStDN0IsTUFBL0MsQ0FMbEM7QUFBQSxzQkFNTUMsZUFBZTZCLG1CQU5yQjtBQUFBLHNCQU0yQztBQUNyQzNCLG9DQUFrQjZCLHNCQVB4QjtBQUFBLHNCQU9nRDtBQUMxQ1oscUNBQW1CYSx1QkFSekI7QUFBQSxzQkFRa0Q7QUFDNUNyQyx1Q0FBcUJ1Qyx5QkFUM0I7QUFBQSxzQkFTc0Q7QUFDaERDLHVFQUFzQlYsS0FBdEIsaUJBQTRCRSxNQUE1QixFQUFvQ0MsT0FBcEMsRUFBNkM1QixZQUE3QyxFQUEyREUsZUFBM0QsRUFBNEVpQixnQkFBNUUsRUFBOEZ4QixrQkFBOUYsR0FBcUgrQixrQkFBckgsS0FWTjs7QUFZQTNCLHlCQUFPcUMsMEJBQVAsR0FidUQsQ0FhakI7O0FBRXRDLHlCQUFPRCxlQUFQO0FBQ0Q7Ozs7RUFwRDJCbEQsUTs7QUF1RDlCb0QsT0FBT0MsT0FBUCxHQUFpQjVDLGVBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXJEYXRhID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlJyksXG4gICAgICBmcmFnbWVudFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXInKSxcbiAgICAgIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmUnKSxcbiAgICAgIFRleHR1cmVVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtJyksXG4gICAgICBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcjtcblxuY2xhc3MgVGV4dHVyZVJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gVGV4dHVyZVJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMgPSBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gdGV4dHVyZVJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMsIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbmV3IENsYXNzKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGNhbnZhcy5lbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpOyAgLy8vXG5cbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZVJlbmRlcmVyO1xuIl19