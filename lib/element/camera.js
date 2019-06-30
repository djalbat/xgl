'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(pan, tilt) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.pan = pan;

    _this.tilt = tilt;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getPan',
    value: function getPan() {
      return this.pan;
    }
  }, {
    key: 'getTilt',
    value: function getTilt() {
      return this.tilt;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(width, height, render) {
      this.update(width, height, render);
    }
  }, {
    key: 'render',
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      ///
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      ///
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var forceUpdate = this.forceUpdate.bind(this),
          userInputUpdate = this.userInputUpdate.bind(this);

      return {
        forceUpdate: forceUpdate,
        userInputUpdate: userInputUpdate
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.fromProperties.apply(Element, [Class, properties].concat(remainingArguments));
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbWVyYSIsInBhbiIsInRpbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlciIsInVwZGF0ZSIsImNhbnZhcyIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiZm9yY2VVcGRhdGUiLCJiaW5kIiwidXNlcklucHV0VXBkYXRlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQXVCO0FBQUE7O0FBQUE7O0FBR3JCLFVBQUtELEdBQUwsR0FBV0EsR0FBWDs7QUFFQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFMcUI7QUFNdEI7Ozs7NkJBRVE7QUFDUCxhQUFPLEtBQUtELEdBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7OztnQ0FFV0MsSyxFQUFPQyxNLEVBQVFDLE0sRUFBUTtBQUNqQyxXQUFLQyxNQUFMLENBQVlILEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCQyxNQUEzQjtBQUNEOzs7MkJBRU1FLE0sRUFBUUMsYSxFQUFlQyxhLEVBQWVDLGMsRUFBZ0JDLGUsRUFBaUJDLGdCLEVBQWtCO0FBQzlGO0FBQ0Q7OzsrQkFFVUwsTSxFQUFRO0FBQ2pCO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1NLGNBQWMsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBcEI7QUFBQSxVQUNPQyxrQkFBa0IsS0FBS0EsZUFBTCxDQUFxQkQsSUFBckIsQ0FBMEIsSUFBMUIsQ0FEekI7O0FBR0MsYUFBUTtBQUNORCxnQ0FETTtBQUVORTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFFLGFBQU9wQixRQUFRcUIsY0FBUixpQkFBdUJILEtBQXZCLEVBQThCQyxVQUE5QixTQUE2Q0Msa0JBQTdDLEVBQVA7QUFBMEU7Ozs7RUF2Q3pIcEIsTzs7QUEwQ3JCc0IsT0FBT0MsT0FBUCxHQUFpQnJCLE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhbiwgdGlsdCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcblxuICAgIHRoaXMudGlsdCA9IHRpbHQ7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZm9yY2VVcGRhdGUod2lkdGgsIGhlaWdodCwgcmVuZGVyKSB7XG4gICAgdGhpcy51cGRhdGUod2lkdGgsIGhlaWdodCwgcmVuZGVyKTtcbiAgfVxuXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgLy8vXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IGZvcmNlVXBkYXRlID0gdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVzZXJJbnB1dFVwZGF0ZSA9IHRoaXMudXNlcklucHV0VXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGZvcmNlVXBkYXRlLFxuICAgICAgdXNlcklucHV0VXBkYXRlXG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19