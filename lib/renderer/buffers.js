"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = RendererBuffers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1ZmZlcnMuanMiXSwibmFtZXMiOlsidmVydGV4Tm9ybWFsQ29tcG9uZW50cyIsInZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyIsIlJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0J1ZmZlciIsInZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiY3JlYXRlRWxlbWVudEJ1ZmZlciIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJiaW5kRWxlbWVudEJ1ZmZlciIsImNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsImJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyIiwiYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlciIsImJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicmVuZGVyZXJCdWZmZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQixHQUFHLENBQS9CO0FBQUEsSUFDTUMsd0JBQXdCLEdBQUcsQ0FEakM7O0lBR3FCQyxlO0FBQ25CLDJCQUFZQyxxQkFBWixFQUFtQ0MsbUJBQW5DLEVBQXdEQywwQkFBeEQsRUFBb0Y7QUFBQTs7QUFDbEYsU0FBS0YscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFDQSxTQUFLQywwQkFBTCxHQUFrQ0EsMEJBQWxDO0FBQ0Q7Ozs7Z0RBRTJCQyxtQixFQUFxQkMsTSxFQUFRO0FBQ3ZELFdBQUtKLHFCQUFMLEdBQTZCSSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JGLG1CQUFwQixDQUE3QjtBQUNEOzs7OENBRXlCRyxpQixFQUFtQkYsTSxFQUFRO0FBQ25ELFdBQUtILG1CQUFMLEdBQTJCRyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLGlCQUFwQixDQUEzQjtBQUNEOzs7cURBRWdDQyxpQixFQUFtQkgsTSxFQUFRO0FBQzFELFdBQUtGLDBCQUFMLEdBQWtDRSxNQUFNLENBQUNJLG1CQUFQLENBQTJCRCxpQkFBM0IsQ0FBbEM7QUFDRDs7OzRDQUV1QkUsNkIsRUFBK0JMLE0sRUFBUTtBQUM3REEsTUFBQUEsTUFBTSxDQUFDTSxVQUFQLENBQWtCLEtBQUtULG1CQUF2QixFQUE0Q1EsNkJBQTVDLEVBQTJFWixzQkFBM0U7QUFDRDs7OzhDQUV5QmMsK0IsRUFBaUNQLE0sRUFBUTtBQUNqRUEsTUFBQUEsTUFBTSxDQUFDTSxVQUFQLENBQWtCLEtBQUtWLHFCQUF2QixFQUE4Q1csK0JBQTlDLEVBQStFYix3QkFBL0U7QUFDRDs7O21EQUU4Qk0sTSxFQUFRO0FBQ3JDQSxNQUFBQSxNQUFNLENBQUNRLGlCQUFQLENBQXlCLEtBQUtWLDBCQUE5QjtBQUNEOzs7a0NBRWFDLG1CLEVBQXFCRyxpQixFQUFtQkMsaUIsRUFBbUJILE0sRUFBUTtBQUMvRSxXQUFLUywyQkFBTCxDQUFpQ1YsbUJBQWpDLEVBQXNEQyxNQUF0RDtBQUNBLFdBQUtVLHlCQUFMLENBQStCUixpQkFBL0IsRUFBa0RGLE1BQWxEO0FBQ0EsV0FBS1csZ0NBQUwsQ0FBc0NSLGlCQUF0QyxFQUF5REgsTUFBekQ7QUFDRDs7O2dDQUVXSyw2QixFQUErQkUsK0IsRUFBaUNQLE0sRUFBUTtBQUNsRixXQUFLWSx1QkFBTCxDQUE2QlAsNkJBQTdCLEVBQTRETCxNQUE1RDtBQUNBLFdBQUthLHlCQUFMLENBQStCTiwrQkFBL0IsRUFBZ0VQLE1BQWhFO0FBQ0EsV0FBS2MsOEJBQUwsQ0FBb0NkLE1BQXBDO0FBQ0Q7OztnQ0FFa0JlLEssRUFBOEI7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsUUFBQUEsa0JBQW9CO0FBQUE7O0FBQy9DLFVBQU1wQixxQkFBcUIsR0FBRyxJQUE5QjtBQUFBLFVBQW9DO0FBQzlCQyxNQUFBQSxtQkFBbUIsR0FBRyxJQUQ1QjtBQUFBLFVBQ2tDO0FBQzVCQyxNQUFBQSwwQkFBMEIsR0FBRyxJQUZuQztBQUFBLFVBRTBDO0FBQ3BDbUIsTUFBQUEsZUFBZSxjQUFPRixLQUFQLEdBQWFuQixxQkFBYixFQUFvQ0MsbUJBQXBDLEVBQXlEQywwQkFBekQsU0FBd0ZrQixrQkFBeEYsRUFIckI7O0FBS0EsYUFBT0MsZUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHZlcnRleE5vcm1hbENvbXBvbmVudHMgPSAzLFxuICAgICAgdmVydGV4UG9zaXRpb25Db21wb25lbnRzID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gdmVydGV4UG9zaXRpb25zQnVmZmVyO1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IHZlcnRleE5vcm1hbHNCdWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSBjYW52YXMuY3JlYXRlRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBiaW5kVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy52ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQ29tcG9uZW50cyk7XG4gIH1cblxuICBiaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkNvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kRWxlbWVudEJ1ZmZlcih0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpO1xuICAgIHRoaXMuY3JlYXRlVmVydGV4Tm9ybWFsc0J1ZmZlcih2ZXJ0ZXhOb3JtYWxzRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4UG9zaXRpb25zQnVmZmVyKHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gICAgdGhpcy5iaW5kVmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zQnVmZmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIl19