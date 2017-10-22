'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vertexNormalComponents = 3,
    vertexPositionComponents = 3;

var RendererBuffers = function () {
  function RendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
    _classCallCheck(this, RendererBuffers);

    this.vertexPositionsBuffer = vertexPositionsBuffer;
    this.vertexNormalsBuffer = vertexNormalsBuffer;
    this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
  }

  _createClass(RendererBuffers, [{
    key: 'createVertexPositionsBuffer',
    value: function createVertexPositionsBuffer(vertexPositionsData, canvas) {
      this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
    }
  }, {
    key: 'createVertexNormalsBuffer',
    value: function createVertexNormalsBuffer(vertexNormalsData, canvas) {
      this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
    }
  }, {
    key: 'createVertexIndexesElementBuffer',
    value: function createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
      this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
    }
  }, {
    key: 'bindVertexNormalsBuffer',
    value: function bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: 'bindVertexPositionsBuffer',
    value: function bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: 'bindVertexIndexesElementBuffer',
    value: function bindVertexIndexesElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
      this.createVertexPositionsBuffer(vertexPositionsData, canvas);
      this.createVertexNormalsBuffer(vertexNormalsData, canvas);
      this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
      this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
      this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
      this.bindVertexIndexesElementBuffer(canvas);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(Class) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var vertexPositionsBuffer = null,
          ///
      vertexNormalsBuffer = null,
          ///
      vertexIndexesElementBuffer = null,
          ///
      rendererBuffers = new (Function.prototype.bind.apply(Class, [null].concat([vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer], remainingArguments)))();

      return rendererBuffers;
    }
  }]);

  return RendererBuffers;
}();

module.exports = RendererBuffers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9idWZmZXJzLmpzIl0sIm5hbWVzIjpbInZlcnRleE5vcm1hbENvbXBvbmVudHMiLCJ2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMiLCJSZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxzQnVmZmVyIiwidmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwiY2FudmFzIiwiY3JlYXRlQnVmZmVyIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImNyZWF0ZUVsZW1lbnRCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRCdWZmZXIiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEVsZW1lbnRCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyIiwiY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIiLCJiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlciIsImJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIiLCJiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInJlbmRlcmVyQnVmZmVycyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSx5QkFBeUIsQ0FBL0I7QUFBQSxJQUNNQywyQkFBMkIsQ0FEakM7O0lBR01DLGU7QUFDSiwyQkFBWUMscUJBQVosRUFBbUNDLG1CQUFuQyxFQUF3REMsMEJBQXhELEVBQW9GO0FBQUE7O0FBQ2xGLFNBQUtGLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0EsU0FBS0MsMEJBQUwsR0FBa0NBLDBCQUFsQztBQUNEOzs7O2dEQUUyQkMsbUIsRUFBcUJDLE0sRUFBUTtBQUN2RCxXQUFLSixxQkFBTCxHQUE2QkksT0FBT0MsWUFBUCxDQUFvQkYsbUJBQXBCLENBQTdCO0FBQ0Q7Ozs4Q0FFeUJHLGlCLEVBQW1CRixNLEVBQVE7QUFDbkQsV0FBS0gsbUJBQUwsR0FBMkJHLE9BQU9DLFlBQVAsQ0FBb0JDLGlCQUFwQixDQUEzQjtBQUNEOzs7cURBRWdDQyxpQixFQUFtQkgsTSxFQUFRO0FBQzFELFdBQUtGLDBCQUFMLEdBQWtDRSxPQUFPSSxtQkFBUCxDQUEyQkQsaUJBQTNCLENBQWxDO0FBQ0Q7Ozs0Q0FFdUJFLDZCLEVBQStCTCxNLEVBQVE7QUFDN0RBLGFBQU9NLFVBQVAsQ0FBa0IsS0FBS1QsbUJBQXZCLEVBQTRDUSw2QkFBNUMsRUFBMkVaLHNCQUEzRTtBQUNEOzs7OENBRXlCYywrQixFQUFpQ1AsTSxFQUFRO0FBQ2pFQSxhQUFPTSxVQUFQLENBQWtCLEtBQUtWLHFCQUF2QixFQUE4Q1csK0JBQTlDLEVBQStFYix3QkFBL0U7QUFDRDs7O21EQUU4Qk0sTSxFQUFRO0FBQ3JDQSxhQUFPUSxpQkFBUCxDQUF5QixLQUFLViwwQkFBOUI7QUFDRDs7O2tDQUVhQyxtQixFQUFxQkcsaUIsRUFBbUJDLGlCLEVBQW1CSCxNLEVBQVE7QUFDL0UsV0FBS1MsMkJBQUwsQ0FBaUNWLG1CQUFqQyxFQUFzREMsTUFBdEQ7QUFDQSxXQUFLVSx5QkFBTCxDQUErQlIsaUJBQS9CLEVBQWtERixNQUFsRDtBQUNBLFdBQUtXLGdDQUFMLENBQXNDUixpQkFBdEMsRUFBeURILE1BQXpEO0FBQ0Q7OztnQ0FFV0ssNkIsRUFBK0JFLCtCLEVBQWlDUCxNLEVBQVE7QUFDbEYsV0FBS1ksdUJBQUwsQ0FBNkJQLDZCQUE3QixFQUE0REwsTUFBNUQ7QUFDQSxXQUFLYSx5QkFBTCxDQUErQk4sK0JBQS9CLEVBQWdFUCxNQUFoRTtBQUNBLFdBQUtjLDhCQUFMLENBQW9DZCxNQUFwQztBQUNEOzs7Z0NBRWtCZSxLLEVBQThCO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUMvQyxVQUFNcEIsd0JBQXdCLElBQTlCO0FBQUEsVUFBb0M7QUFDOUJDLDRCQUFzQixJQUQ1QjtBQUFBLFVBQ2tDO0FBQzVCQyxtQ0FBNkIsSUFGbkM7QUFBQSxVQUUwQztBQUNwQ21CLDJEQUFzQkYsS0FBdEIsaUJBQTRCbkIscUJBQTVCLEVBQW1EQyxtQkFBbkQsRUFBd0VDLDBCQUF4RSxHQUF1R2tCLGtCQUF2RyxLQUhOOztBQUtBLGFBQU9DLGVBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJ4QixlQUFqQiIsImZpbGUiOiJidWZmZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlckJ1ZmZlcnM7XG4iXX0=