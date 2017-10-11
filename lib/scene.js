'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    Offset = require('./scene/offset'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(offsetVec3, canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.offsetVec3 = offsetVec3;
    _this.canvas = canvas;
    _this.colourShader = colourShader;
    _this.textureShader = textureShader;
    return _this;
  }

  _createClass(Scene, [{
    key: 'getOffsetVec3',
    value: function getOffsetVec3() {
      return this.offsetVec3;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getColourShader',
    value: function getColourShader() {
      return this.colourShader;
    }
  }, {
    key: 'getTextureShader',
    value: function getTextureShader() {
      return this.textureShader;
    }
  }, {
    key: 'resize',
    value: function resize() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      this.canvas.resize(width, height);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(offset, rotation, position, projection, normal) {
      var colourShaderProgram = this.colourShader.getProgram(),
          textureShaderProgram = this.textureShader.getProgram();

      this.canvas.clear();

      this.canvas.useProgram(colourShaderProgram);

      this.colourShader.bindBuffers(this.canvas);

      this.canvas.render(this.colourShader, offset, rotation, position, projection, normal);

      this.canvas.useProgram(textureShaderProgram);

      this.textureShader.bindBuffers(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, offset, rotation, position, projection, normal);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(rotation, position, projection, normal) {
      var offset = Offset.fromVec3(this.offsetVec3);

      this.drawElements(offset, rotation, position, projection, normal);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      this.onUpdate(this.updateHandler.bind(this));

      window.onresize = function () {
        this.resize();

        this.forceUpdate();
      }.bind(this);

      this.resize();

      this.forceUpdate();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          offset = properties.offset,
          offsetVec3 = offset,
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, offsetVec3, canvas, colourShader, textureShader);


      childElements.forEach(function (childElement) {
        childElement.create(colourShader, textureShader);
      });

      if (imageMap) {
        textureShader.createTexture(imageMap, canvas);
      }

      colourShader.createBuffers(canvas);
      textureShader.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhcyIsIk9mZnNldCIsIkNvbG91clNoYWRlciIsIlRleHR1cmVTaGFkZXIiLCJTY2VuZSIsIm9mZnNldFZlYzMiLCJjYW52YXMiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0Iiwicm90YXRpb24iLCJwb3NpdGlvbiIsInByb2plY3Rpb24iLCJub3JtYWwiLCJjb2xvdXJTaGFkZXJQcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInRleHR1cmVTaGFkZXJQcm9ncmFtIiwiY2xlYXIiLCJ1c2VQcm9ncmFtIiwiYmluZEJ1ZmZlcnMiLCJyZW5kZXIiLCJhY3RpdmF0ZVRleHR1cmUiLCJmcm9tVmVjMyIsImRyYXdFbGVtZW50cyIsImFzc2lnbkNvbnRleHQiLCJvblVwZGF0ZSIsInVwZGF0ZUhhbmRsZXIiLCJiaW5kIiwid2luZG93Iiwib25yZXNpemUiLCJmb3JjZVVwZGF0ZSIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiaW1hZ2VNYXAiLCJmcm9tTm90aGluZyIsInNjZW5lIiwiZnJvbVByb3BlcnRpZXMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJlbmFibGVEZXB0aEZ1bmN0aW9uIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxVQUFSLENBRGY7QUFBQSxJQUVNRSxTQUFTRixRQUFRLGdCQUFSLENBRmY7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LFVBQ0N4QixNQURELEdBQ1lzQixVQURaLENBQ0N0QixNQUREO0FBQUEsVUFFMUJYLFVBRjBCLEdBRWJXLE1BRmE7QUFBQSxVQUcxQlYsTUFIMEIsR0FHakIsSUFBSU4sTUFBSixFQUhpQjtBQUFBLFVBSTFCTyxZQUowQixHQUlYTCxhQUFhdUMsV0FBYixDQUF5Qm5DLE1BQXpCLENBSlc7QUFBQSxVQUsxQkUsYUFMMEIsR0FLVkwsY0FBY3NDLFdBQWQsQ0FBMEJuQyxNQUExQixDQUxVO0FBQUEsVUFNMUJvQyxLQU4wQixHQU1sQjVDLFFBQVE2QyxjQUFSLENBQXVCdkMsS0FBdkIsRUFBOEJrQyxVQUE5QixFQUEwQ2pDLFVBQTFDLEVBQXNEQyxNQUF0RCxFQUE4REMsWUFBOUQsRUFBNEVDLGFBQTVFLENBTmtCOzs7QUFRaEMrQixvQkFBY0ssT0FBZCxDQUFzQixVQUFTQyxZQUFULEVBQXVCO0FBQzNDQSxxQkFBYUMsTUFBYixDQUFvQnZDLFlBQXBCLEVBQWtDQyxhQUFsQztBQUNELE9BRkQ7O0FBSUEsVUFBSWdDLFFBQUosRUFBYztBQUNaaEMsc0JBQWN1QyxhQUFkLENBQTRCUCxRQUE1QixFQUFzQ2xDLE1BQXRDO0FBQ0Q7O0FBRURDLG1CQUFheUMsYUFBYixDQUEyQjFDLE1BQTNCO0FBQ0FFLG9CQUFjd0MsYUFBZCxDQUE0QjFDLE1BQTVCOztBQUVBQSxhQUFPMkMsa0JBQVA7QUFDQTNDLGFBQU80QyxtQkFBUDs7QUFFQVIsWUFBTVMsVUFBTjs7QUFFQSxhQUFPVCxLQUFQO0FBQ0Q7Ozs7RUF2R2lCNUMsTzs7QUEwR3BCc0QsT0FBT0MsT0FBUCxHQUFpQmpELEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgT2Zmc2V0ID0gcmVxdWlyZSgnLi9zY2VuZS9vZmZzZXQnKSxcbiAgICAgIENvbG91clNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL3RleHR1cmUnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0VmVjMywgY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vZmZzZXRWZWMzID0gb2Zmc2V0VmVjMztcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91clNoYWRlciA9IGNvbG91clNoYWRlcjtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICB9XG4gIFxuICBnZXRPZmZzZXRWZWMzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldFZlYzM7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENvbG91clNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJTaGFkZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVTaGFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZVNoYWRlcjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpIHtcbiAgICBjb25zdCBjb2xvdXJTaGFkZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJTaGFkZXIuZ2V0UHJvZ3JhbSgpLFxuICAgICAgICAgIHRleHR1cmVTaGFkZXJQcm9ncmFtID0gdGhpcy50ZXh0dXJlU2hhZGVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKGNvbG91clNoYWRlclByb2dyYW0pO1xuXG4gICAgdGhpcy5jb2xvdXJTaGFkZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVNoYWRlclByb2dyYW0pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgb2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21WZWMzKHRoaXMub2Zmc2V0VmVjMyk7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLm9uVXBkYXRlKHRoaXMudXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcblxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgaW1hZ2VNYXAsIG9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBvZmZzZXRWZWMzID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcygpLFxuICAgICAgICAgIGNvbG91clNoYWRlciA9IENvbG91clNoYWRlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVTaGFkZXIgPSBUZXh0dXJlU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBvZmZzZXRWZWMzLCBjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGltYWdlTWFwKSB7XG4gICAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZVRleHR1cmUoaW1hZ2VNYXAsIGNhbnZhcyk7XG4gICAgfVxuXG4gICAgY29sb3VyU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgICBjYW52YXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=