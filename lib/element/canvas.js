'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(width, height, depth, dimensions, position, rotations, transformations) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.width = width;
    _this.height = height;
    _this.depth = depth;
    _this.dimensions = dimensions;
    _this.position = position;
    _this.rotations = rotations;
    _this.transformations = transformations;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getWidth',
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: 'getDepth',
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: 'getDimensions',
    value: function getDimensions() {
      return this.dimensions;
    }
  }, {
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: 'getRotations',
    value: function getRotations() {
      return this.rotations;
    }
  }, {
    key: 'getTransformations',
    value: function getTransformations() {
      return this.transformations;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          dimensions = properties.dimensions,
          position = properties.position,
          rotations = properties.rotations,
          transformations = properties.transformations,
          canvasElement = new (Function.prototype.bind.apply(Class, [null].concat([width, height, depth, dimensions, position, rotations, transformations], remainingArguments)))();


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhc0VsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwicm90YXRpb25zIiwidHJhbnNmb3JtYXRpb25zIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2FudmFzRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCOztJQUVNQyxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLEtBQTNCLEVBQWtDQyxVQUFsQyxFQUE4Q0MsUUFBOUMsRUFBd0RDLFNBQXhELEVBQW1FQyxlQUFuRSxFQUFvRjtBQUFBOztBQUFBOztBQUdsRixVQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQVRrRjtBQVVuRjs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS04sS0FBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtDLFFBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLQyxlQUFaO0FBQ0Q7OzttQ0FFcUJDLEssRUFBT0MsVSxFQUFtQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBQSxVQUN0RFQsS0FEc0QsR0FDcUJRLFVBRHJCLENBQ3REUixLQURzRDtBQUFBLFVBQy9DQyxNQUQrQyxHQUNxQk8sVUFEckIsQ0FDL0NQLE1BRCtDO0FBQUEsVUFDdkNDLEtBRHVDLEdBQ3FCTSxVQURyQixDQUN2Q04sS0FEdUM7QUFBQSxVQUNoQ0MsVUFEZ0MsR0FDcUJLLFVBRHJCLENBQ2hDTCxVQURnQztBQUFBLFVBQ3BCQyxRQURvQixHQUNxQkksVUFEckIsQ0FDcEJKLFFBRG9CO0FBQUEsVUFDVkMsU0FEVSxHQUNxQkcsVUFEckIsQ0FDVkgsU0FEVTtBQUFBLFVBQ0NDLGVBREQsR0FDcUJFLFVBRHJCLENBQ0NGLGVBREQ7QUFBQSxVQUV4REksYUFGd0Qsc0NBRXBDSCxLQUZvQyxpQkFFOUJQLEtBRjhCLEVBRXZCQyxNQUZ1QixFQUVmQyxLQUZlLEVBRVJDLFVBRlEsRUFFSUMsUUFGSixFQUVjQyxTQUZkLEVBRXlCQyxlQUZ6QixHQUU2Q0csa0JBRjdDOzs7QUFJOUQsYUFBT0MsYUFBUDtBQUNEOzs7O0VBOUN5QmIsTzs7QUFpRDVCYyxPQUFPQyxPQUFQLEdBQWlCYixhQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCwgZGVwdGgsIGRpbWVuc2lvbnMsIHBvc2l0aW9uLCByb3RhdGlvbnMsIHRyYW5zZm9ybWF0aW9ucykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMucm90YXRpb25zID0gcm90YXRpb25zO1xuICAgIHRoaXMudHJhbnNmb3JtYXRpb25zID0gdHJhbnNmb3JtYXRpb25zO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwdGg7XG4gIH1cblxuICBnZXREaW1lbnNpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnM7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnM7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm1hdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtYXRpb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgcm90YXRpb25zLCB0cmFuc2Zvcm1hdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IG5ldyBDbGFzcyh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgZGltZW5zaW9ucywgcG9zaXRpb24sIHJvdGF0aW9ucywgdHJhbnNmb3JtYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19