'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
    _classCallCheck(this, Element);
  }

  _createClass(Element, [{
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      ///
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
      }.bind(this), []);
    }
  }, {
    key: 'updateContext',
    value: function updateContext(childElement) {
      var context = typeof childElement.parentContext === 'function' ? childElement.parentContext() : childElement.context;

      this.context = Object.assign({}, this.context, context);

      delete childElement.context;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var childElements = properties.childElements,
          element = new (Function.prototype.bind.apply(Class, [null].concat(remainingArguments)))();


      childElements.forEach(function (childElement) {
        element.updateContext(childElement);
      });

      return element;
    }
  }]);

  return Element;
}();

module.exports = Element;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsIm5hbWVzIiwidGhlbkRlbGV0ZSIsImFyZ3VtZW50c0xlbmd0aCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZpcnN0QXJndW1lbnQiLCJmaXJzdCIsIk9iamVjdCIsImtleXMiLCJjb250ZXh0IiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImJpbmQiLCJjaGlsZEVsZW1lbnQiLCJwYXJlbnRDb250ZXh0IiwiYXNzaWduIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJ1cGRhdGVDb250ZXh0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxPOzs7Ozs7OzJCQUNHQyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDO0FBQ0Q7OztrQ0FFYUMsSyxFQUFPQyxVLEVBQVk7QUFDL0IsVUFBTUMsa0JBQWtCQyxVQUFVQyxNQUFsQzs7QUFFQSxVQUFJRixvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBTUcsZ0JBQWdCQyxNQUFNSCxTQUFOLENBQXRCOztBQUVBLFlBQUksT0FBT0UsYUFBUCxLQUF5QixTQUE3QixFQUF3QztBQUN0Q0wsa0JBQVFPLE9BQU9DLElBQVAsQ0FBWSxLQUFLQyxPQUFqQixDQUFSOztBQUVBUix1QkFBYUksYUFBYjtBQUNELFNBSkQsTUFJTztBQUNMSix1QkFBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQyxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJGLGdCQUFRTyxPQUFPQyxJQUFQLENBQVksS0FBS0MsT0FBakIsQ0FBUjs7QUFFQVIscUJBQWEsSUFBYjtBQUNEOztBQUVERCxZQUFNVSxPQUFOLENBQWMsVUFBU0MsSUFBVCxFQUFlO0FBQzNCLFlBQU1DLFFBQVEsS0FBS0gsT0FBTCxDQUFhRSxJQUFiLENBQWQ7QUFBQSxZQUNNRSxlQUFlRixJQURyQjtBQUFBLFlBQzRCO0FBQ3RCRyxxQkFBYTtBQUNYRixpQkFBT0E7QUFESSxTQUZuQjs7QUFNQUwsZUFBT1EsY0FBUCxDQUFzQixJQUF0QixFQUE0QkYsWUFBNUIsRUFBMENDLFVBQTFDOztBQUVBLFlBQUliLFVBQUosRUFBZ0I7QUFDZCxpQkFBTyxLQUFLUSxPQUFMLENBQWFFLElBQWIsQ0FBUDtBQUNEO0FBQ0YsT0FaYSxDQVlaSyxJQVpZLENBWVAsSUFaTyxDQUFkLEVBWWMsRUFaZDtBQWFEOzs7a0NBRWFDLFksRUFBYztBQUMxQixVQUFNUixVQUFXLE9BQU9RLGFBQWFDLGFBQXBCLEtBQXNDLFVBQXZDLEdBQ0VELGFBQWFDLGFBQWIsRUFERixHQUVJRCxhQUFhUixPQUZqQzs7QUFJQSxXQUFLQSxPQUFMLEdBQWVGLE9BQU9ZLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtWLE9BQXZCLEVBQWdDQSxPQUFoQyxDQUFmOztBQUVBLGFBQU9RLGFBQWFSLE9BQXBCO0FBQ0Q7OzttQ0FFcUJXLEssRUFBT0MsVSxFQUFtQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDeEQsVUFBRUMsYUFBRixHQUFvQkYsVUFBcEIsQ0FBRUUsYUFBRjtBQUFBLFVBQ0FDLE9BREEsc0NBQ2NKLEtBRGQsZ0JBQ3VCRSxrQkFEdkI7OztBQUdOQyxvQkFBY2IsT0FBZCxDQUFzQixVQUFTTyxZQUFULEVBQXVCO0FBQzNDTyxnQkFBUUMsYUFBUixDQUFzQlIsWUFBdEI7QUFDRCxPQUZEOztBQUlBLGFBQU9PLE9BQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUI5QixPQUFqQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcbiAgXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdib29sZWFuJykge1xuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgXG4gICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfTtcbiAgXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcbiAgXG4gICAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSwgW10pO1xuICB9XG5cbiAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgZWxlbWVudC51cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iXX0=