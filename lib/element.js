'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(canvas) {
    _classCallCheck(this, Element);

    this.canvas = canvas;
  }

  _createClass(Element, [{
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      return this.childElements;
    }
  }, {
    key: 'setCanvas',
    value: function setCanvas(canvas) {
      this.canvas = canvas;
    }
  }, {
    key: 'setChildElements',
    value: function setChildElements(childElements) {
      this.childElements = childElements;
    }
  }, {
    key: 'updateContext',
    value: function updateContext(childElement) {
      var context = typeof childElement.parentContext === 'function' ? childElement.parentContext() : childElement.context;

      this.context = Object.assign({}, this.context, context);

      delete childElement.context;
    }
  }, {
    key: 'assignContext',
    value: function assignContext(names, thenDelete) {
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
      }.bind(this));
    }
  }, {
    key: 'initialise',
    value: function initialise(colourRenderer, textureRenderer, transforms) {
      ///
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var canvas = properties.canvas,
          element = new (Function.prototype.bind.apply(Class, [null].concat([canvas], remainingArguments)))();


      applyProperties(element, properties);

      return element;
    }
  }]);

  return Element;
}();

module.exports = Element;

function applyProperties(element, properties) {
  var childElements = typeof element.childElements === 'function' ? element.childElements(properties) : properties.childElements || [];

  element.setChildElements(childElements);

  childElements.forEach(function (childElement) {
    element.updateContext(childElement);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjYW52YXMiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiY29udGV4dCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1lcyIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImJpbmQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwiYXBwbHlQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInNldENoaWxkRWxlbWVudHMiLCJ1cGRhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7OEJBRVNELE0sRUFBUTtBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O3FDQUVnQkMsYSxFQUFlO0FBQzlCLFdBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7OztrQ0FFYUMsWSxFQUFjO0FBQzFCLFVBQU1DLFVBQVcsT0FBT0QsYUFBYUUsYUFBcEIsS0FBc0MsVUFBdkMsR0FDRUYsYUFBYUUsYUFBYixFQURGLEdBRUlGLGFBQWFDLE9BRmpDOztBQUlBLFdBQUtBLE9BQUwsR0FBZUUsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS0gsT0FBdkIsRUFBZ0NBLE9BQWhDLENBQWY7O0FBRUEsYUFBT0QsYUFBYUMsT0FBcEI7QUFDRDs7O2tDQUVhSSxLLEVBQU9DLFUsRUFBWTtBQUMvQixVQUFNQyxrQkFBa0JDLFVBQVVDLE1BQWxDOztBQUVBLFVBQUlGLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFNRyxnQkFBZ0JDLE1BQU1ILFNBQU4sQ0FBdEI7O0FBRUEsWUFBSSxPQUFPRSxhQUFQLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3RDTCxrQkFBUUYsT0FBT1MsSUFBUCxDQUFZLEtBQUtYLE9BQWpCLENBQVI7O0FBRUFLLHVCQUFhSSxhQUFiO0FBQ0QsU0FKRCxNQUlPO0FBQ0xKLHVCQUFhLElBQWI7QUFDRDtBQUNGOztBQUVELFVBQUlDLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QkYsZ0JBQVFGLE9BQU9TLElBQVAsQ0FBWSxLQUFLWCxPQUFqQixDQUFSOztBQUVBSyxxQkFBYSxJQUFiO0FBQ0Q7O0FBRURELFlBQU1RLE9BQU4sQ0FBYyxVQUFTQyxJQUFULEVBQWU7QUFDM0IsWUFBTUMsUUFBUSxLQUFLZCxPQUFMLENBQWFhLElBQWIsQ0FBZDtBQUFBLFlBQ01FLGVBQWVGLElBRHJCO0FBQUEsWUFDNEI7QUFDdEJHLHFCQUFhO0FBQ1hGO0FBRFcsU0FGbkI7O0FBTUFaLGVBQU9lLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEJGLFlBQTVCLEVBQTBDQyxVQUExQzs7QUFFQSxZQUFJWCxVQUFKLEVBQWdCO0FBQ2QsaUJBQU8sS0FBS0wsT0FBTCxDQUFhYSxJQUFiLENBQVA7QUFDRDtBQUNGLE9BWmEsQ0FZWkssSUFaWSxDQVlQLElBWk8sQ0FBZDtBQWFEOzs7K0JBRVVDLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUN0RDtBQUNEOzs7bUNBRXFCQyxLLEVBQU9DLFUsRUFBbUM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQ3hELFVBQUUzQixNQUFGLEdBQWEwQixVQUFiLENBQUUxQixNQUFGO0FBQUEsVUFDQTRCLE9BREEsc0NBQ2NILEtBRGQsaUJBQ29CekIsTUFEcEIsR0FDK0IyQixrQkFEL0I7OztBQUdORSxzQkFBZ0JELE9BQWhCLEVBQXlCRixVQUF6Qjs7QUFFQSxhQUFPRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCaEMsT0FBakI7O0FBRUEsU0FBUzhCLGVBQVQsQ0FBeUJELE9BQXpCLEVBQWtDRixVQUFsQyxFQUE4QztBQUM1QyxNQUFNekIsZ0JBQWlCLE9BQU8yQixRQUFRM0IsYUFBZixLQUFpQyxVQUFsQyxHQUNFMkIsUUFBUTNCLGFBQVIsQ0FBc0J5QixVQUF0QixDQURGLEdBRUlBLFdBQVd6QixhQUFYLElBQTRCLEVBRnREOztBQUlBMkIsVUFBUUksZ0JBQVIsQ0FBeUIvQixhQUF6Qjs7QUFFQUEsZ0JBQWNjLE9BQWQsQ0FBc0IsVUFBU2IsWUFBVCxFQUF1QjtBQUMzQzBCLFlBQVFLLGFBQVIsQ0FBc0IvQixZQUF0QjtBQUNELEdBRkQ7QUFHRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldENhbnZhcyhjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuICBcbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbiAgfVxuXG4gIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcbiAgXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdib29sZWFuJykge1xuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgXG4gICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBlbGVtZW50ID0gbmV3IENsYXNzKGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIGFwcGx5UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgZWxlbWVudC51cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCk7XG4gIH0pO1xufVxuIl19