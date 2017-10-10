'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = require('./canvas'),
    Offset = require('./scene/offset'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture');

var Scene = function () {
  function Scene(offsetVec3, canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    this.offsetVec3 = offsetVec3;
    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
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
      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bindBuffers(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, offset, rotation, position, projection, normal);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bindBuffers(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, offset, rotation, position, projection, normal);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      assignContext.call(this);

      this.registerCallback(function (rotation, position, projection, normal) {
        var offset = Offset.fromVec3(this.offsetVec3);

        this.resize();

        this.drawElements(offset, rotation, position, projection, normal);
      }.bind(this));

      this.addMouseEventHandlers();
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
          scene = new Scene(offsetVec3, canvas, colourShader, textureShader);


      var parentElement = scene; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourShader, textureShader);

        updateParentContext(childElement, parentElement); ///
      });

      if (imageMap) {
        textureShader.createTexture(imageMap, canvas);
      }

      textureShader.createBuffers(canvas);
      colourShader.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      // window.onresize = function() {
      //   scene.resize();
      //   scene.render();
      // };

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}();

module.exports = Scene;

function updateParentContext(childElement, parentElement) {
  var parentContext = typeof childElement.parentContext === 'function' ? childElement.parentContext() : childElement.context;

  parentElement.context = Object.assign({}, parentElement.context, parentContext);

  delete childElement.context;
}

function assignContext(names, thenDelete) {
  var argumentsLength = arguments.length;

  if (argumentsLength === 1) {
    var firstArgument = first(arguments);

    if (typeof firstArgument === 'boolean') {
      names = Object.keys(this.context);

      thenDelete = firstArgument;
    } else {
      thenDelete = true;
    }
  }

  if (argumentsLength === 0) {
    names = Object.keys(this.context);

    thenDelete = true;
  }

  names.forEach(function (name) {
    var value = this.context[name],
        propertyName = name,
        ///
    descriptor = {
      value: value
    };

    Object.defineProperty(this, propertyName, descriptor);

    if (thenDelete) {
      delete this.context[name];
    }
  }.bind(this), []);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJyZXF1aXJlIiwiT2Zmc2V0IiwiQ29sb3VyU2hhZGVyIiwiVGV4dHVyZVNoYWRlciIsIlNjZW5lIiwib2Zmc2V0VmVjMyIsImNhbnZhcyIsImNvbG91clNoYWRlciIsInRleHR1cmVTaGFkZXIiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJvZmZzZXQiLCJyb3RhdGlvbiIsInBvc2l0aW9uIiwicHJvamVjdGlvbiIsIm5vcm1hbCIsImNsZWFyIiwidXNlU2hhZGVyIiwiYmluZEJ1ZmZlcnMiLCJhY3RpdmF0ZVRleHR1cmUiLCJyZW5kZXIiLCJhc3NpZ25Db250ZXh0IiwiY2FsbCIsInJlZ2lzdGVyQ2FsbGJhY2siLCJmcm9tVmVjMyIsImRyYXdFbGVtZW50cyIsImJpbmQiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImltYWdlTWFwIiwiZnJvbU5vdGhpbmciLCJzY2VuZSIsInBhcmVudEVsZW1lbnQiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwidXBkYXRlUGFyZW50Q29udGV4dCIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVCdWZmZXJzIiwiZW5hYmxlRGVwdGhUZXN0aW5nIiwiZW5hYmxlRGVwdGhGdW5jdGlvbiIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1lcyIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJrZXlzIiwibmFtZSIsInZhbHVlIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxVQUFSLENBQWY7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGdCQUFSLENBRGY7QUFBQSxJQUVNRSxlQUFlRixRQUFRLGlCQUFSLENBRnJCO0FBQUEsSUFHTUcsZ0JBQWdCSCxRQUFRLGtCQUFSLENBSHRCOztJQUtNSSxLO0FBQ0osaUJBQVlDLFVBQVosRUFBd0JDLE1BQXhCLEVBQWdDQyxZQUFoQyxFQUE4Q0MsYUFBOUMsRUFBNkQ7QUFBQTs7QUFDM0QsU0FBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxhQUFPLEtBQUtILFVBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLQyxZQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLGNBQWMsS0FBS0gsTUFBTCxDQUFZSSxjQUFaLEVBQXBCO0FBQUEsVUFDTUMsZUFBZSxLQUFLTCxNQUFMLENBQVlNLGVBQVosRUFEckI7QUFBQSxVQUVNQyxRQUFRSixXQUZkO0FBQUEsVUFFNEI7QUFDdEJLLGVBQVNILFlBSGYsQ0FETyxDQUl1Qjs7QUFFOUIsV0FBS0wsTUFBTCxDQUFZUyxNQUFaLENBQW1CRixLQUFuQixFQUEwQkMsTUFBMUI7QUFDRDs7O2lDQUVZRSxNLEVBQVFDLFEsRUFBVUMsUSxFQUFVQyxVLEVBQVlDLE0sRUFBUTtBQUMzRCxXQUFLZCxNQUFMLENBQVllLEtBQVo7O0FBRUEsV0FBS2YsTUFBTCxDQUFZZ0IsU0FBWixDQUFzQixLQUFLZixZQUEzQjs7QUFFQSxXQUFLQSxZQUFMLENBQWtCZ0IsV0FBbEIsQ0FBOEIsS0FBS2pCLE1BQW5DOztBQUVBLFdBQUtDLFlBQUwsQ0FBa0JpQixlQUFsQixDQUFrQyxLQUFLbEIsTUFBdkM7O0FBRUEsV0FBS0EsTUFBTCxDQUFZbUIsTUFBWixDQUFtQixLQUFLbEIsWUFBeEIsRUFBc0NTLE1BQXRDLEVBQThDQyxRQUE5QyxFQUF3REMsUUFBeEQsRUFBa0VDLFVBQWxFLEVBQThFQyxNQUE5RTs7QUFFQSxXQUFLZCxNQUFMLENBQVlnQixTQUFaLENBQXNCLEtBQUtkLGFBQTNCOztBQUVBLFdBQUtBLGFBQUwsQ0FBbUJlLFdBQW5CLENBQStCLEtBQUtqQixNQUFwQzs7QUFFQSxXQUFLRSxhQUFMLENBQW1CZ0IsZUFBbkIsQ0FBbUMsS0FBS2xCLE1BQXhDOztBQUVBLFdBQUtBLE1BQUwsQ0FBWW1CLE1BQVosQ0FBbUIsS0FBS2pCLGFBQXhCLEVBQXVDUSxNQUF2QyxFQUErQ0MsUUFBL0MsRUFBeURDLFFBQXpELEVBQW1FQyxVQUFuRSxFQUErRUMsTUFBL0U7QUFDRDs7O2lDQUVZO0FBQ1hNLG9CQUFjQyxJQUFkLENBQW1CLElBQW5COztBQUVBLFdBQUtDLGdCQUFMLENBQXNCLFVBQVNYLFFBQVQsRUFBbUJDLFFBQW5CLEVBQTZCQyxVQUE3QixFQUF5Q0MsTUFBekMsRUFBaUQ7QUFDckUsWUFBTUosU0FBU2YsT0FBTzRCLFFBQVAsQ0FBZ0IsS0FBS3hCLFVBQXJCLENBQWY7O0FBRUEsYUFBS1UsTUFBTDs7QUFFQSxhQUFLZSxZQUFMLENBQWtCZCxNQUFsQixFQUEwQkMsUUFBMUIsRUFBb0NDLFFBQXBDLEVBQThDQyxVQUE5QyxFQUEwREMsTUFBMUQ7QUFDRCxPQU5xQixDQU1wQlcsSUFOb0IsQ0FNZixJQU5lLENBQXRCOztBQVFBLFdBQUtDLHFCQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFBLFVBQ3hCQyxhQUR3QixHQUNZRCxVQURaLENBQ3hCQyxhQUR3QjtBQUFBLFVBQ1RDLFFBRFMsR0FDWUYsVUFEWixDQUNURSxRQURTO0FBQUEsVUFDQ25CLE1BREQsR0FDWWlCLFVBRFosQ0FDQ2pCLE1BREQ7QUFBQSxVQUUxQlgsVUFGMEIsR0FFYlcsTUFGYTtBQUFBLFVBRzFCVixNQUgwQixHQUdqQixJQUFJUCxNQUFKLEVBSGlCO0FBQUEsVUFJMUJRLFlBSjBCLEdBSVhMLGFBQWFrQyxXQUFiLENBQXlCOUIsTUFBekIsQ0FKVztBQUFBLFVBSzFCRSxhQUwwQixHQUtWTCxjQUFjaUMsV0FBZCxDQUEwQjlCLE1BQTFCLENBTFU7QUFBQSxVQU0xQitCLEtBTjBCLEdBTWxCLElBQUlqQyxLQUFKLENBQVVDLFVBQVYsRUFBc0JDLE1BQXRCLEVBQThCQyxZQUE5QixFQUE0Q0MsYUFBNUMsQ0FOa0I7OztBQVFoQyxVQUFNOEIsZ0JBQWdCRCxLQUF0QixDQVJnQyxDQVFIOztBQUU3Qkgsb0JBQWNLLE9BQWQsQ0FBc0IsVUFBU0MsWUFBVCxFQUF1QjtBQUMzQ0EscUJBQWFDLE1BQWIsQ0FBb0JsQyxZQUFwQixFQUFrQ0MsYUFBbEM7O0FBRUFrQyw0QkFBb0JGLFlBQXBCLEVBQWtDRixhQUFsQyxFQUgyQyxDQUdPO0FBQ25ELE9BSkQ7O0FBTUEsVUFBSUgsUUFBSixFQUFjO0FBQ1ozQixzQkFBY21DLGFBQWQsQ0FBNEJSLFFBQTVCLEVBQXNDN0IsTUFBdEM7QUFDRDs7QUFFREUsb0JBQWNvQyxhQUFkLENBQTRCdEMsTUFBNUI7QUFDQUMsbUJBQWFxQyxhQUFiLENBQTJCdEMsTUFBM0I7O0FBRUFBLGFBQU91QyxrQkFBUDtBQUNBdkMsYUFBT3dDLG1CQUFQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBVCxZQUFNVSxVQUFOOztBQUVBLGFBQU9WLEtBQVA7QUFDRDs7Ozs7O0FBR0hXLE9BQU9DLE9BQVAsR0FBaUI3QyxLQUFqQjs7QUFFQSxTQUFTc0MsbUJBQVQsQ0FBNkJGLFlBQTdCLEVBQTJDRixhQUEzQyxFQUEwRDtBQUN4RCxNQUFNWSxnQkFBaUIsT0FBT1YsYUFBYVUsYUFBcEIsS0FBc0MsVUFBdkMsR0FDRVYsYUFBYVUsYUFBYixFQURGLEdBRUlWLGFBQWFXLE9BRnZDOztBQUlBYixnQkFBY2EsT0FBZCxHQUF3QkMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JmLGNBQWNhLE9BQWhDLEVBQXlDRCxhQUF6QyxDQUF4Qjs7QUFFQSxTQUFPVixhQUFhVyxPQUFwQjtBQUNEOztBQUVELFNBQVN6QixhQUFULENBQXVCNEIsS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDO0FBQ3hDLE1BQU1DLGtCQUFrQkMsVUFBVUMsTUFBbEM7O0FBRUEsTUFBSUYsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFFBQU1HLGdCQUFnQkMsTUFBTUgsU0FBTixDQUF0Qjs7QUFFQSxRQUFJLE9BQU9FLGFBQVAsS0FBeUIsU0FBN0IsRUFBd0M7QUFDdENMLGNBQVFGLE9BQU9TLElBQVAsQ0FBWSxLQUFLVixPQUFqQixDQUFSOztBQUVBSSxtQkFBYUksYUFBYjtBQUNELEtBSkQsTUFJTztBQUNMSixtQkFBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJQyxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJGLFlBQVFGLE9BQU9TLElBQVAsQ0FBWSxLQUFLVixPQUFqQixDQUFSOztBQUVBSSxpQkFBYSxJQUFiO0FBQ0Q7O0FBRURELFFBQU1mLE9BQU4sQ0FBYyxVQUFTdUIsSUFBVCxFQUFlO0FBQzNCLFFBQU1DLFFBQVEsS0FBS1osT0FBTCxDQUFhVyxJQUFiLENBQWQ7QUFBQSxRQUNNRSxlQUFlRixJQURyQjtBQUFBLFFBQzRCO0FBQ3RCRyxpQkFBYTtBQUNYRixhQUFPQTtBQURJLEtBRm5COztBQU1BWCxXQUFPYyxjQUFQLENBQXNCLElBQXRCLEVBQTRCRixZQUE1QixFQUEwQ0MsVUFBMUM7O0FBRUEsUUFBSVYsVUFBSixFQUFnQjtBQUNkLGFBQU8sS0FBS0osT0FBTCxDQUFhVyxJQUFiLENBQVA7QUFDRDtBQUNGLEdBWmEsQ0FZWi9CLElBWlksQ0FZUCxJQVpPLENBQWQsRUFZYyxFQVpkO0FBYUQiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBPZmZzZXQgPSByZXF1aXJlKCcuL3NjZW5lL29mZnNldCcpLFxuICAgICAgQ29sb3VyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldFZlYzMsIGNhbnZhcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgdGhpcy5vZmZzZXRWZWMzID0gb2Zmc2V0VmVjMztcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91clNoYWRlciA9IGNvbG91clNoYWRlcjtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICB9XG4gIFxuICBnZXRPZmZzZXRWZWMzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldFZlYzM7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENvbG91clNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJTaGFkZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVTaGFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZVNoYWRlcjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMuY29sb3VyU2hhZGVyKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMudGV4dHVyZVNoYWRlcik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgYXNzaWduQ29udGV4dC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKGZ1bmN0aW9uKHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBPZmZzZXQuZnJvbVZlYzModGhpcy5vZmZzZXRWZWMzKTtcblxuICAgICAgdGhpcy5yZXNpemUoKTtcblxuICAgICAgdGhpcy5kcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgaW1hZ2VNYXAsIG9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBvZmZzZXRWZWMzID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcygpLFxuICAgICAgICAgIGNvbG91clNoYWRlciA9IENvbG91clNoYWRlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVTaGFkZXIgPSBUZXh0dXJlU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2NlbmUgPSBuZXcgU2NlbmUob2Zmc2V0VmVjMywgY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuICAgIFxuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBzY2VuZTsgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgICBcbiAgICAgIHVwZGF0ZVBhcmVudENvbnRleHQoY2hpbGRFbGVtZW50LCBwYXJlbnRFbGVtZW50KTsgLy8vXG4gICAgfSk7XG5cbiAgICBpZiAoaW1hZ2VNYXApIHtcbiAgICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlVGV4dHVyZShpbWFnZU1hcCwgY2FudmFzKTtcbiAgICB9XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICBjb2xvdXJTaGFkZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuICAgIGNhbnZhcy5lbmFibGVEZXB0aEZ1bmN0aW9uKCk7XG5cbiAgICAvLyB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyAgIHNjZW5lLnJlc2l6ZSgpO1xuICAgIC8vICAgc2NlbmUucmVuZGVyKCk7XG4gICAgLy8gfTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRDb250ZXh0KGNoaWxkRWxlbWVudCwgcGFyZW50RWxlbWVudCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDtcblxuICBwYXJlbnRFbGVtZW50LmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRFbGVtZW50LmNvbnRleHQsIHBhcmVudENvbnRleHQpO1xuXG4gIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gIH1cblxuICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpLCBbXSk7XG59XG4iXX0=