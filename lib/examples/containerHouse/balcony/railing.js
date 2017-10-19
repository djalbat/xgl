'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('../../../maths/vec3'),
    TopRail = require('./railing/topRail'),
    Uprights = require('./railing/uprights'),
    CanvasElement = require('../../../element/canvas');

var add = vec3.add,
    thickness = TopRail.thickness,
    height = 3;

var Railing = function (_CanvasElement) {
  _inherits(Railing, _CanvasElement);

  function Railing() {
    _classCallCheck(this, Railing);

    return _possibleConstructorReturn(this, (Railing.__proto__ || Object.getPrototypeOf(Railing)).apply(this, arguments));
  }

  _createClass(Railing, [{
    key: 'childElements',
    value: function childElements(properties) {
      var position = properties.position,
          rotations = properties.rotations,
          length = properties.length;


      return [React.createElement(TopRail, { position: add(position, [0, height, 0]), rotations: rotations, length: length }), React.createElement(Uprights, { position: position, rotations: rotations, height: height, length: length, thickness: thickness })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(Railing, properties);
    }
  }]);

  return Railing;
}(CanvasElement);

Object.assign(Railing, {
  thickness: thickness
});

module.exports = Railing;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJUb3BSYWlsIiwiVXByaWdodHMiLCJDYW52YXNFbGVtZW50IiwiYWRkIiwidGhpY2tuZXNzIiwiaGVpZ2h0IiwiUmFpbGluZyIsInByb3BlcnRpZXMiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImxlbmd0aCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLHFCQUFSLENBQWI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLG1CQUFSLENBRGhCO0FBQUEsSUFFTUUsV0FBV0YsUUFBUSxvQkFBUixDQUZqQjtBQUFBLElBR01HLGdCQUFnQkgsUUFBUSx5QkFBUixDQUh0Qjs7QUFLTSxJQUFFSSxHQUFGLEdBQVVMLElBQVYsQ0FBRUssR0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDZ0JKLE9BRGhCLENBQ0VJLFNBREY7QUFBQSxJQUVBQyxNQUZBLEdBRVMsQ0FGVDs7SUFJQUMsTzs7Ozs7Ozs7Ozs7a0NBQ1VDLFUsRUFBWTtBQUFBLFVBQ2hCQyxRQURnQixHQUNnQkQsVUFEaEIsQ0FDaEJDLFFBRGdCO0FBQUEsVUFDTkMsU0FETSxHQUNnQkYsVUFEaEIsQ0FDTkUsU0FETTtBQUFBLFVBQ0tDLE1BREwsR0FDZ0JILFVBRGhCLENBQ0tHLE1BREw7OztBQUd4QixhQUFRLENBRU4sb0JBQUMsT0FBRCxJQUFTLFVBQVVQLElBQUlLLFFBQUosRUFBYyxDQUFDLENBQUQsRUFBSUgsTUFBSixFQUFZLENBQVosQ0FBZCxDQUFuQixFQUFrRCxXQUFXSSxTQUE3RCxFQUF3RSxRQUFRQyxNQUFoRixHQUZNLEVBSU4sb0JBQUMsUUFBRCxJQUFVLFVBQVVGLFFBQXBCLEVBQThCLFdBQVdDLFNBQXpDLEVBQW9ELFFBQVFKLE1BQTVELEVBQW9FLFFBQVFLLE1BQTVFLEVBQW9GLFdBQVdOLFNBQS9GLEdBSk0sQ0FBUjtBQU9EOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPTCxjQUFjUyxjQUFkLENBQTZCTCxPQUE3QixFQUFzQ0MsVUFBdEMsQ0FBUDtBQUEyRDs7OztFQWIzRUwsYTs7QUFnQnRCVSxPQUFPQyxNQUFQLENBQWNQLE9BQWQsRUFBdUI7QUFDckJGLGFBQVdBO0FBRFUsQ0FBdkI7O0FBSUFVLE9BQU9DLE9BQVAsR0FBaUJULE9BQWpCIiwiZmlsZSI6InJhaWxpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuLi8uLi8uLi9tYXRocy92ZWMzJyksXG4gICAgICBUb3BSYWlsID0gcmVxdWlyZSgnLi9yYWlsaW5nL3RvcFJhaWwnKSxcbiAgICAgIFVwcmlnaHRzID0gcmVxdWlyZSgnLi9yYWlsaW5nL3VwcmlnaHRzJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jYW52YXMnKTtcblxuY29uc3QgeyBhZGQgfSA9IHZlYzMsXG4gICAgICB7IHRoaWNrbmVzcyB9ID0gVG9wUmFpbCxcbiAgICAgIGhlaWdodCA9IDM7XG5cbmNsYXNzIFJhaWxpbmcgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgcm90YXRpb25zLCBsZW5ndGggfSA9IHByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPFRvcFJhaWwgcG9zaXRpb249e2FkZChwb3NpdGlvbiwgWzAsIGhlaWdodCwgMF0pfSByb3RhdGlvbnM9e3JvdGF0aW9uc30gbGVuZ3RoPXtsZW5ndGh9Lz4sXG5cbiAgICAgIDxVcHJpZ2h0cyBwb3NpdGlvbj17cG9zaXRpb259IHJvdGF0aW9ucz17cm90YXRpb25zfSBoZWlnaHQ9e2hlaWdodH0gbGVuZ3RoPXtsZW5ndGh9IHRoaWNrbmVzcz17dGhpY2tuZXNzfS8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFJhaWxpbmcsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmFpbGluZywge1xuICB0aGlja25lc3M6IHRoaWNrbmVzc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmFpbGluZztcbiJdfQ==