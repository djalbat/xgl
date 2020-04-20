"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RendererBuffers = require("../../renderer/buffers");

var vertexColourComponents = 4;

var ColourRendererBuffers = /*#__PURE__*/function (_RendererBuffers) {
  _inherits(ColourRendererBuffers, _RendererBuffers);

  function ColourRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
    var _this;

    _classCallCheck(this, ColourRendererBuffers);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColourRendererBuffers).call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer));
    _this.vertexColoursBuffer = vertexColoursBuffer;
    return _this;
  }

  _createClass(ColourRendererBuffers, [{
    key: "createVertexColoursBuffer",
    value: function createVertexColoursBuffer(vertexColoursData, canvas) {
      this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
    }
  }, {
    key: "bindVertexColoursBuffer",
    value: function bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
      canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
      _get(_getPrototypeOf(ColourRendererBuffers.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);

      this.createVertexColoursBuffer(vertexColoursData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
      _get(_getPrototypeOf(ColourRendererBuffers.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);

      this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var vertexColoursBuffer = null,
          ///
      colourRendererBuffers = RendererBuffers.fromNothing(ColourRendererBuffers, vertexColoursBuffer);
      return colourRendererBuffers;
    }
  }]);

  return ColourRendererBuffers;
}(RendererBuffers);

module.exports = ColourRendererBuffers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG91ci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlckJ1ZmZlcnMiLCJyZXF1aXJlIiwidmVydGV4Q29sb3VyQ29tcG9uZW50cyIsIkNvbG91clJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0J1ZmZlciIsInZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsInZlcnRleENvbG91cnNCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJzRGF0YSIsImNhbnZhcyIsImNyZWF0ZUJ1ZmZlciIsInZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlciIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyIiwiY29sb3VyUmVuZGVyZXJCdWZmZXJzIiwiZnJvbU5vdGhpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxPQUFPLENBQUMsd0JBQUQsQ0FBL0I7O0FBRUEsSUFBTUMsc0JBQXNCLEdBQUcsQ0FBL0I7O0lBRU1DLHFCOzs7QUFDSixpQ0FBWUMscUJBQVosRUFBbUNDLG1CQUFuQyxFQUF3REMsMEJBQXhELEVBQW9GQyxtQkFBcEYsRUFBeUc7QUFBQTs7QUFBQTs7QUFDdkcsK0ZBQU1ILHFCQUFOLEVBQTZCQyxtQkFBN0IsRUFBa0RDLDBCQUFsRDtBQUVBLFVBQUtDLG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFIdUc7QUFJeEc7Ozs7OENBRXlCQyxpQixFQUFtQkMsTSxFQUFRO0FBQ25ELFdBQUtGLG1CQUFMLEdBQTJCRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JGLGlCQUFwQixDQUEzQjtBQUNEOzs7NENBRXVCRyw2QixFQUErQkYsTSxFQUFRO0FBQzdEQSxNQUFBQSxNQUFNLENBQUNHLFVBQVAsQ0FBa0IsS0FBS0wsbUJBQXZCLEVBQTRDSSw2QkFBNUMsRUFBMkVULHNCQUEzRTtBQUNEOzs7a0NBRWFXLG1CLEVBQXFCQyxpQixFQUFtQkMsaUIsRUFBbUJQLGlCLEVBQW1CQyxNLEVBQVE7QUFDbEcsK0ZBQW9CSSxtQkFBcEIsRUFBeUNDLGlCQUF6QyxFQUE0REMsaUJBQTVELEVBQStFTixNQUEvRTs7QUFFQSxXQUFLTyx5QkFBTCxDQUErQlIsaUJBQS9CLEVBQWtEQyxNQUFsRDtBQUNEOzs7Z0NBRVdRLDZCLEVBQStCQywrQixFQUFpQ1AsNkIsRUFBK0JGLE0sRUFBUTtBQUNqSCw2RkFBa0JRLDZCQUFsQixFQUFpREMsK0JBQWpELEVBQWtGVCxNQUFsRjs7QUFFQSxXQUFLVSx1QkFBTCxDQUE2QlIsNkJBQTdCLEVBQTRERixNQUE1RDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1GLG1CQUFtQixHQUFHLElBQTVCO0FBQUEsVUFBa0M7QUFDNUJhLE1BQUFBLHFCQUFxQixHQUFHcEIsZUFBZSxDQUFDcUIsV0FBaEIsQ0FBNEJsQixxQkFBNUIsRUFBbURJLG1CQUFuRCxDQUQ5QjtBQUdBLGFBQU9hLHFCQUFQO0FBQ0Q7Ozs7RUFoQ2lDcEIsZTs7QUFtQ3BDc0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIscUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IFJlbmRlcmVyQnVmZmVycyA9IHJlcXVpcmUoXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCIpO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuIl19