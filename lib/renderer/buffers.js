"use strict";

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var vertexNormalComponents = 3,
    vertexPositionComponents = 3;

var RendererBuffers = /*#__PURE__*/function () {
  function RendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
    _classCallCheck(this, RendererBuffers);

    this.vertexPositionsBuffer = vertexPositionsBuffer;
    this.vertexNormalsBuffer = vertexNormalsBuffer;
    this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
  }

  _createClass(RendererBuffers, [{
    key: "createVertexPositionsBuffer",
    value: function createVertexPositionsBuffer(vertexPositionsData, canvas) {
      this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
    }
  }, {
    key: "createVertexNormalsBuffer",
    value: function createVertexNormalsBuffer(vertexNormalsData, canvas) {
      this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
    }
  }, {
    key: "createVertexIndexesElementBuffer",
    value: function createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
      this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
    }
  }, {
    key: "bindVertexNormalsBuffer",
    value: function bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
    }
  }, {
    key: "bindVertexPositionsBuffer",
    value: function bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
    }
  }, {
    key: "bindVertexIndexesElementBuffer",
    value: function bindVertexIndexesElementBuffer(canvas) {
      canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
      this.createVertexPositionsBuffer(vertexPositionsData, canvas);
      this.createVertexNormalsBuffer(vertexNormalsData, canvas);
      this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
      this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
      this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
      this.bindVertexIndexesElementBuffer(canvas);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing(Class) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var vertexPositionsBuffer = null,
          ///
      vertexNormalsBuffer = null,
          ///
      vertexIndexesElementBuffer = null,
          ///
      rendererBuffers = _construct(Class, [vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer].concat(remainingArguments));

      return rendererBuffers;
    }
  }]);

  return RendererBuffers;
}();

module.exports = RendererBuffers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZmZlcnMuanMiXSwibmFtZXMiOlsidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsInZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyIsIlJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0J1ZmZlciIsInZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiY3JlYXRlRWxlbWVudEJ1ZmZlciIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kRWxlbWVudEJ1ZmZlciIsImNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsImJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyIiwiYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlciIsImJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicmVuZGVyZXJCdWZmZXJzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsQ0FBL0I7QUFBQSxJQUNNQyx3QkFBd0IsR0FBRyxDQURqQzs7SUFHTUMsZTtBQUNKLDJCQUFZQyxxQkFBWixFQUFtQ0MsbUJBQW5DLEVBQXdEQywwQkFBeEQsRUFBb0Y7QUFBQTs7QUFDbEYsU0FBS0YscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFDQSxTQUFLQywwQkFBTCxHQUFrQ0EsMEJBQWxDO0FBQ0Q7Ozs7Z0RBRTJCQyxtQixFQUFxQkMsTSxFQUFRO0FBQ3ZELFdBQUtKLHFCQUFMLEdBQTZCSSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JGLG1CQUFwQixDQUE3QjtBQUNEOzs7OENBRXlCRyxpQixFQUFtQkYsTSxFQUFRO0FBQ25ELFdBQUtILG1CQUFMLEdBQTJCRyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLGlCQUFwQixDQUEzQjtBQUNEOzs7cURBRWdDQyxpQixFQUFtQkgsTSxFQUFRO0FBQzFELFdBQUtGLDBCQUFMLEdBQWtDRSxNQUFNLENBQUNJLG1CQUFQLENBQTJCRCxpQkFBM0IsQ0FBbEM7QUFDRDs7OzRDQUV1QkUsNkIsRUFBK0JMLE0sRUFBUTtBQUM3REEsTUFBQUEsTUFBTSxDQUFDTSxVQUFQLENBQWtCLEtBQUtULG1CQUF2QixFQUE0Q1EsNkJBQTVDLEVBQTJFWixzQkFBM0U7QUFDRDs7OzhDQUV5QmMsK0IsRUFBaUNQLE0sRUFBUTtBQUNqRUEsTUFBQUEsTUFBTSxDQUFDTSxVQUFQLENBQWtCLEtBQUtWLHFCQUF2QixFQUE4Q1csK0JBQTlDLEVBQStFYix3QkFBL0U7QUFDRDs7O21EQUU4Qk0sTSxFQUFRO0FBQ3JDQSxNQUFBQSxNQUFNLENBQUNRLGlCQUFQLENBQXlCLEtBQUtWLDBCQUE5QjtBQUNEOzs7a0NBRWFDLG1CLEVBQXFCRyxpQixFQUFtQkMsaUIsRUFBbUJILE0sRUFBUTtBQUMvRSxXQUFLUywyQkFBTCxDQUFpQ1YsbUJBQWpDLEVBQXNEQyxNQUF0RDtBQUNBLFdBQUtVLHlCQUFMLENBQStCUixpQkFBL0IsRUFBa0RGLE1BQWxEO0FBQ0EsV0FBS1csZ0NBQUwsQ0FBc0NSLGlCQUF0QyxFQUF5REgsTUFBekQ7QUFDRDs7O2dDQUVXSyw2QixFQUErQkUsK0IsRUFBaUNQLE0sRUFBUTtBQUNsRixXQUFLWSx1QkFBTCxDQUE2QlAsNkJBQTdCLEVBQTRETCxNQUE1RDtBQUNBLFdBQUthLHlCQUFMLENBQStCTiwrQkFBL0IsRUFBZ0VQLE1BQWhFO0FBQ0EsV0FBS2MsOEJBQUwsQ0FBb0NkLE1BQXBDO0FBQ0Q7OztnQ0FFa0JlLEssRUFBOEI7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBQy9DLFVBQU1wQixxQkFBcUIsR0FBRyxJQUE5QjtBQUFBLFVBQW9DO0FBQzlCQyxNQUFBQSxtQkFBbUIsR0FBRyxJQUQ1QjtBQUFBLFVBQ2tDO0FBQzVCQyxNQUFBQSwwQkFBMEIsR0FBRyxJQUZuQztBQUFBLFVBRTBDO0FBQ3BDbUIsTUFBQUEsZUFBZSxjQUFPRixLQUFQLEdBQWFuQixxQkFBYixFQUFvQ0MsbUJBQXBDLEVBQXlEQywwQkFBekQsU0FBd0ZrQixrQkFBeEYsRUFIckI7O0FBS0EsYUFBT0MsZUFBUDtBQUNEOzs7Ozs7QUFHSEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCeEIsZUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyA9IDMsXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMgPSAzO1xuXG5jbGFzcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gdmVydGV4Tm9ybWFsc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRFbGVtZW50QnVmZmVyKHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMuY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gcmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXJCdWZmZXJzO1xuIl19