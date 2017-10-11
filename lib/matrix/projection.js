'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mat4 = require('../maths/mat4'),
    Matrix = require('../matrix'),
    constants = require('../constants');

var create = mat4.create,
    perspective = mat4.perspective,
    FIELD_OF_VIEW = constants.FIELD_OF_VIEW,
    Z_NEAR = constants.Z_NEAR,
    Z_FAR = constants.Z_FAR;

var ProjectionMatrix = function (_Matrix) {
      _inherits(ProjectionMatrix, _Matrix);

      function ProjectionMatrix() {
            _classCallCheck(this, ProjectionMatrix);

            return _possibleConstructorReturn(this, (ProjectionMatrix.__proto__ || Object.getPrototypeOf(ProjectionMatrix)).apply(this, arguments));
      }

      _createClass(ProjectionMatrix, null, [{
            key: 'fromWidthAndHeight',
            value: function fromWidthAndHeight(width, height) {
                  var mat4 = create(),
                      fieldOfView = FIELD_OF_VIEW,
                      aspectRatio = width / height,
                      zNear = Z_NEAR,
                      zFar = Z_FAR,
                      projectionMatrix = new ProjectionMatrix(mat4);

                  perspective(mat4, fieldOfView, aspectRatio, zNear, zFar);

                  return projectionMatrix;
            }
      }]);

      return ProjectionMatrix;
}(Matrix);

module.exports = ProjectionMatrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXRyaXgvcHJvamVjdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsIk1hdHJpeCIsImNvbnN0YW50cyIsImNyZWF0ZSIsInBlcnNwZWN0aXZlIiwiRklFTERfT0ZfVklFVyIsIlpfTkVBUiIsIlpfRkFSIiwiUHJvamVjdGlvbk1hdHJpeCIsIndpZHRoIiwiaGVpZ2h0IiwiZmllbGRPZlZpZXciLCJhc3BlY3RSYXRpbyIsInpOZWFyIiwiekZhciIsInByb2plY3Rpb25NYXRyaXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsZUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxXQUFSLENBRGY7QUFBQSxJQUVNRSxZQUFZRixRQUFRLGNBQVIsQ0FGbEI7O0lBSVFHLE0sR0FBd0JKLEksQ0FBeEJJLE07SUFBUUMsVyxHQUFnQkwsSSxDQUFoQkssVztJQUNSQyxhLEdBQWlDSCxTLENBQWpDRyxhO0lBQWVDLE0sR0FBa0JKLFMsQ0FBbEJJLE07SUFBUUMsSyxHQUFVTCxTLENBQVZLLEs7O0lBRXpCQyxnQjs7Ozs7Ozs7Ozs7K0NBQ3NCQyxLLEVBQU9DLE0sRUFBUTtBQUN2QyxzQkFBTVgsT0FBT0ksUUFBYjtBQUFBLHNCQUNNUSxjQUFjTixhQURwQjtBQUFBLHNCQUVNTyxjQUFjSCxRQUFRQyxNQUY1QjtBQUFBLHNCQUdNRyxRQUFRUCxNQUhkO0FBQUEsc0JBSU1RLE9BQU9QLEtBSmI7QUFBQSxzQkFLTVEsbUJBQW1CLElBQUlQLGdCQUFKLENBQXFCVCxJQUFyQixDQUx6Qjs7QUFPQUssOEJBQVlMLElBQVosRUFBa0JZLFdBQWxCLEVBQStCQyxXQUEvQixFQUE0Q0MsS0FBNUMsRUFBbURDLElBQW5EOztBQUVBLHlCQUFPQyxnQkFBUDtBQUNEOzs7O0VBWjRCZCxNOztBQWUvQmUsT0FBT0MsT0FBUCxHQUFpQlQsZ0JBQWpCIiwiZmlsZSI6InByb2plY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCcuLi9tYXRocy9tYXQ0JyksXG4gICAgICBNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IGNyZWF0ZSwgcGVyc3BlY3RpdmUgfSA9IG1hdDQsXG4gICAgICB7IEZJRUxEX09GX1ZJRVcsIFpfTkVBUiwgWl9GQVIgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgUHJvamVjdGlvbk1hdHJpeCBleHRlbmRzIE1hdHJpeCB7XG4gIHN0YXRpYyBmcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IG1hdDQgPSBjcmVhdGUoKSxcbiAgICAgICAgICBmaWVsZE9mVmlldyA9IEZJRUxEX09GX1ZJRVcsXG4gICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICB6TmVhciA9IFpfTkVBUixcbiAgICAgICAgICB6RmFyID0gWl9GQVIsXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IG5ldyBQcm9qZWN0aW9uTWF0cml4KG1hdDQpO1xuXG4gICAgcGVyc3BlY3RpdmUobWF0NCwgZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgICByZXR1cm4gcHJvamVjdGlvbk1hdHJpeDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Rpb25NYXRyaXg7XG4iXX0=