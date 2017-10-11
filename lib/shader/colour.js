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
          colourShader = canvas.createShader(ColourShader, vertexShader, fragmentShader);

      return colourShader;
    }
  }]);

  return ColourShader;
}(Shader);

module.exports = ColourShader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zaGFkZXIvY29sb3VyLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJTaGFkZXIiLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsImNyZWF0ZVZlcnRleFNoYWRlciIsImNyZWF0ZUZyYWdtZW50U2hhZGVyIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTmFtZSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJDb2xvdXJTaGFkZXIiLCJwcm9ncmFtIiwiY2FudmFzIiwidmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleENvbG91ckRhdGEiLCJjcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJCdWZmZXIiLCJjcmVhdGVCdWZmZXIiLCJiaW5kVmVydGV4Q29sb3VyQnVmZmVyIiwidmVydGV4Q29sb3VyQ29tcG9uZW50cyIsImJpbmRCdWZmZXIiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsImNvbG91clNoYWRlciIsImNyZWF0ZVNoYWRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FEM0I7QUFBQSxJQUVNRyx1QkFBdUJILFFBQVEsMEJBQVIsQ0FGN0I7O0lBSVFJLGtCLEdBQTZDSCxNLENBQTdDRyxrQjtJQUFvQkMsb0IsR0FBeUJKLE0sQ0FBekJJLG9CO0lBQ3BCQyx5QixHQUE4Qkosa0IsQ0FBOUJJLHlCO0lBQ0FDLGMsR0FBbUJSLFMsQ0FBbkJRLGM7SUFDQUMsSyxHQUFVRCxjLENBQVZDLEs7SUFDRkMsRyxHQUFNRCxLLEVBQVE7O0lBRWRFLFk7OztBQUNKLHdCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUFBLDRIQUNyQkQsT0FEcUIsRUFDWkMsTUFEWTs7QUFHM0IsVUFBS0MsNkJBQUwsR0FBcUNELE9BQU9FLG9CQUFQLENBQTRCSCxPQUE1QixFQUFxQ0wseUJBQXJDLENBQXJDOztBQUVBLFVBQUtTLGdCQUFMLEdBQXdCLEVBQXhCO0FBTDJCO0FBTTVCOzs7O3dDQUVtQkEsZ0IsRUFBa0I7QUFDcENOLFVBQUksS0FBS00sZ0JBQVQsRUFBMkJBLGdCQUEzQjtBQUNEOzs7a0NBRWFILE0sRUFBUTtBQUNwQixXQUFLSSx3QkFBTCxDQUE4QkosTUFBOUI7O0FBRUEsZ0lBQW9CQSxNQUFwQjtBQUNEOzs7NkNBRXdCQSxNLEVBQVE7QUFDL0IsV0FBS0ssa0JBQUwsR0FBMEJMLE9BQU9NLFlBQVAsQ0FBb0IsS0FBS0gsZ0JBQXpCLENBQTFCO0FBQ0Q7OztnQ0FFV0gsTSxFQUFRO0FBQ2xCLFdBQUtPLHNCQUFMLENBQTRCUCxNQUE1Qjs7QUFFQSw4SEFBa0JBLE1BQWxCO0FBQ0Q7OzsyQ0FFc0JBLE0sRUFBUTtBQUM3QixVQUFNUSx5QkFBeUIsQ0FBL0I7O0FBRUFSLGFBQU9TLFVBQVAsQ0FBa0IsS0FBS0osa0JBQXZCLEVBQTJDLEtBQUtKLDZCQUFoRCxFQUErRU8sc0JBQS9FO0FBQ0Q7OztvQ0FFZVIsTSxFQUFRLENBQUUsQyxDQUFFOzs7O2dDQUVUQSxNLEVBQVE7QUFDekIsVUFBTVUsZUFBZWxCLG1CQUFtQkYsa0JBQW5CLEVBQXVDVSxNQUF2QyxDQUFyQjtBQUFBLFVBQ01XLGlCQUFpQmxCLHFCQUFxQkYsb0JBQXJCLEVBQTJDUyxNQUEzQyxDQUR2QjtBQUFBLFVBRU1ZLGVBQWVaLE9BQU9hLFlBQVAsQ0FBb0JmLFlBQXBCLEVBQWtDWSxZQUFsQyxFQUFnREMsY0FBaEQsQ0FGckI7O0FBSUEsYUFBT0MsWUFBUDtBQUNEOzs7O0VBM0N3QnZCLE07O0FBOEMzQnlCLE9BQU9DLE9BQVAsR0FBaUJqQixZQUFqQiIsImZpbGUiOiJjb2xvdXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTaGFkZXIgPSByZXF1aXJlKCcuLi9zaGFkZXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci92ZXJ0ZXgnKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50Jyk7XG5cbmNvbnN0IHsgY3JlYXRlVmVydGV4U2hhZGVyLCBjcmVhdGVGcmFnbWVudFNoYWRlciB9ID0gU2hhZGVyLFxuICAgICAgeyB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lIH0gPSB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXG4gICAgICB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IG1lcmdlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIGFkZCA9IG1lcmdlOyAgLy8vXG5cbmNsYXNzIENvbG91clNoYWRlciBleHRlbmRzIFNoYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIGNhbnZhcykge1xuICAgIHN1cGVyKHByb2dyYW0sIGNhbnZhcyk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJEYXRhID0gW107XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJEYXRhKHZlcnRleENvbG91ckRhdGEpIHtcbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhLCB2ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleENvbG91ckJ1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodGhpcy52ZXJ0ZXhDb2xvdXJEYXRhKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMuYmluZFZlcnRleENvbG91ckJ1ZmZlcihjYW52YXMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhDb2xvdXJCdWZmZXIoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91ckJ1ZmZlciwgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQ29tcG9uZW50cyk7XG4gIH1cblxuICBhY3RpdmF0ZVRleHR1cmUoY2FudmFzKSB7fSAgLy8vXG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJTaGFkZXIgPSBjYW52YXMuY3JlYXRlU2hhZGVyKENvbG91clNoYWRlciwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG5cbiAgICByZXR1cm4gY29sb3VyU2hhZGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyU2hhZGVyO1xuIl19