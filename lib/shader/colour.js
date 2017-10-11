'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Shader = require('../shader'),
    vertexShaderSource = require('./source/colour/vertex'),
    fragmentShaderSource = require('./source/colour/fragment');

var createVertexShader = Shader.createVertexShader,
    createFragmentShader = Shader.createFragmentShader,
    vertexColourAttributeName = vertexShaderSource.vertexColourAttributeName,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var ColourShader = function (_Shader) {
  _inherits(ColourShader, _Shader);

  function ColourShader(program, canvas) {
    _classCallCheck(this, ColourShader);

    var _this = _possibleConstructorReturn(this, (ColourShader.__proto__ || Object.getPrototypeOf(ColourShader)).call(this, program, canvas));

    _this.vertexColourAttributeLocation = canvas.getAttributeLocation(program, vertexColourAttributeName);

    _this.vertexColourData = [];
    return _this;
  }

  _createClass(ColourShader, [{
    key: 'addVertexColourData',
    value: function addVertexColourData(vertexColourData) {
      add(this.vertexColourData, vertexColourData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.createVertexColourBuffer(canvas);

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'createVertexColourBuffer',
    value: function createVertexColourBuffer(canvas) {
      this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      this.bindVertexColourBuffer(canvas);

      _get(ColourShader.prototype.__proto__ || Object.getPrototypeOf(ColourShader.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindVertexColourBuffer',
    value: function bindVertexColourBuffer(canvas) {
      var vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, this.vertexColourAttributeLocation, vertexColourComponents);
    }
  }, {
    key: 'activateTexture',
    value: function activateTexture(canvas) {} ///

  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          program = canvas.createProgram(vertexShader, fragmentShader),
          colourShader = new ColourShader(program, canvas);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJTaGFkZXIiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsImNyZWF0ZVZlcnRleFNoYWRlciIsImNyZWF0ZUZyYWdtZW50U2hhZGVyIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJDb2xvdXJTaGFkZXIiLCJwcm9ncmFtIiwiY2FudmFzIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleENvbG91ckRhdGEiLCJjcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kVmVydGV4Q29sb3VyQnVmZmVyIiwidmVydGV4Q29sb3VyQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNyZWF0ZVByb2dyYW0iLCJjb2xvdXJTaGFkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFNBQVNELFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRDNCO0FBQUEsSUFFTUcsdUJBQXVCSCxRQUFRLDBCQUFSLENBRjdCOztJQUlRSSxrQixHQUE2Q0gsTSxDQUE3Q0csa0I7SUFBb0JDLG9CLEdBQXlCSixNLENBQXpCSSxvQjtJQUNwQkMseUIsR0FBOEJKLGtCLENBQTlCSSx5QjtJQUNBQyxjLEdBQW1CUixTLENBQW5CUSxjO0lBQ0FDLEssR0FBVUQsYyxDQUFWQyxLO0lBQ0ZDLEcsR0FBTUQsSyxFQUFROztJQUVkRSxZOzs7QUFDSix3QkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFBQSw0SEFDckJELE9BRHFCLEVBQ1pDLE1BRFk7O0FBRzNCLFVBQUtDLDZCQUFMLEdBQXFDRCxPQUFPRSxvQkFBUCxDQUE0QkgsT0FBNUIsRUFBcUNMLHlCQUFyQyxDQUFyQzs7QUFFQSxVQUFLUyxnQkFBTCxHQUF3QixFQUF4QjtBQUwyQjtBQU01Qjs7Ozt3Q0FFbUJBLGdCLEVBQWtCO0FBQ3BDTixVQUFJLEtBQUtNLGdCQUFULEVBQTJCQSxnQkFBM0I7QUFDRDs7O2tDQUVhSCxNLEVBQVE7QUFDcEIsV0FBS0ksd0JBQUwsQ0FBOEJKLE1BQTlCOztBQUVBLGdJQUFvQkEsTUFBcEI7QUFDRDs7OzZDQUV3QkEsTSxFQUFRO0FBQy9CLFdBQUtLLGtCQUFMLEdBQTBCTCxPQUFPTSxZQUFQLENBQW9CLEtBQUtILGdCQUF6QixDQUExQjtBQUNEOzs7Z0NBRVdILE0sRUFBUTtBQUNsQixXQUFLTyxzQkFBTCxDQUE0QlAsTUFBNUI7O0FBRUEsOEhBQWtCQSxNQUFsQjtBQUNEOzs7MkNBRXNCQSxNLEVBQVE7QUFDN0IsVUFBTVEseUJBQXlCLENBQS9COztBQUVBUixhQUFPUyxVQUFQLENBQWtCLEtBQUtKLGtCQUF2QixFQUEyQyxLQUFLSiw2QkFBaEQsRUFBK0VPLHNCQUEvRTtBQUNEOzs7b0NBRWVSLE0sRUFBUSxDQUFFLEMsQ0FBRTs7OztnQ0FFVEEsTSxFQUFRO0FBQ3pCLFVBQU1VLGVBQWVsQixtQkFBbUJGLGtCQUFuQixFQUF1Q1UsTUFBdkMsQ0FBckI7QUFBQSxVQUNNVyxpQkFBaUJsQixxQkFBcUJGLG9CQUFyQixFQUEyQ1MsTUFBM0MsQ0FEdkI7QUFBQSxVQUVNRCxVQUFVQyxPQUFPWSxhQUFQLENBQXFCRixZQUFyQixFQUFtQ0MsY0FBbkMsQ0FGaEI7QUFBQSxVQUdNRSxlQUFlLElBQUlmLFlBQUosQ0FBaUJDLE9BQWpCLEVBQTBCQyxNQUExQixDQUhyQjs7QUFLQSxhQUFPYSxZQUFQO0FBQ0Q7Ozs7RUE1Q3dCeEIsTTs7QUErQzNCeUIsT0FBT0MsT0FBUCxHQUFpQmpCLFlBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFNoYWRlciA9IHJlcXVpcmUoJy4uL3NoYWRlcicpLFxuICAgICAgdmVydGV4U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL3ZlcnRleCcpLFxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSByZXF1aXJlKCcuL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnQnKTtcblxuY29uc3QgeyBjcmVhdGVWZXJ0ZXhTaGFkZXIsIGNyZWF0ZUZyYWdtZW50U2hhZGVyIH0gPSBTaGFkZXIsXG4gICAgICB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSA9IHZlcnRleFNoYWRlclNvdXJjZSxcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgQ29sb3VyU2hhZGVyIGV4dGVuZHMgU2hhZGVyIHtcbiAgY29uc3RydWN0b3IocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgc3VwZXIocHJvZ3JhbSwgY2FudmFzKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBjYW52YXMuZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgdmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSBbXTtcbiAgfVxuXG4gIGFkZFZlcnRleENvbG91ckRhdGEodmVydGV4Q29sb3VyRGF0YSkge1xuICAgIGFkZCh0aGlzLnZlcnRleENvbG91ckRhdGEsIHZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3VyQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleENvbG91ckRhdGEpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5iaW5kVmVydGV4Q29sb3VyQnVmZmVyKGNhbnZhcyk7XG5cbiAgICBzdXBlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3VyQnVmZmVyLCB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzKTtcbiAgfVxuXG4gIGFjdGl2YXRlVGV4dHVyZShjYW52YXMpIHt9ICAvLy9cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4U2hhZGVyID0gY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBuZXcgQ29sb3VyU2hhZGVyKHByb2dyYW0sIGNhbnZhcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clNoYWRlcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clNoYWRlcjtcbiJdfQ==