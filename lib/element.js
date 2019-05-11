'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
    ///

    _classCallCheck(this, Element);
  }

  _createClass(Element, [{
    key: 'getChildElements',
    value: function getChildElements() {
      return this.childElements;
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
      var _this = this;

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
        var value = _this.context[name],
            propertyName = name,
            ///
        descriptor = {
          value: value
        };

        Object.defineProperty(_this, propertyName, descriptor);

        if (thenDelete) {
          delete _this.context[name];
        }
      });
    }
  }, {
    key: 'initialise',
    value: function initialise(colourRenderer, textureRenderer, transforms, masked) {
      ///
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var element = new (Function.prototype.bind.apply(Class, [null].concat(remainingArguments)))();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiY29udGV4dCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1lcyIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImVsZW1lbnQiLCJhcHBseVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwic2V0Q2hpbGRFbGVtZW50cyIsInVwZGF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTztBQUNKLHFCQUFjO0FBQ2Q7O0FBRGM7QUFFYjs7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7OztxQ0FFZ0JBLGEsRUFBZTtBQUM5QixXQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7a0NBRWFDLFksRUFBYztBQUMxQixVQUFNQyxVQUFXLE9BQU9ELGFBQWFFLGFBQXBCLEtBQXNDLFVBQXZDLEdBQ0VGLGFBQWFFLGFBQWIsRUFERixHQUVJRixhQUFhQyxPQUZqQzs7QUFJQSxXQUFLQSxPQUFMLEdBQWVFLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtILE9BQXZCLEVBQWdDQSxPQUFoQyxDQUFmOztBQUVBLGFBQU9ELGFBQWFDLE9BQXBCO0FBQ0Q7OztrQ0FFYUksSyxFQUFPQyxVLEVBQVk7QUFBQTs7QUFDL0IsVUFBTUMsa0JBQWtCQyxVQUFVQyxNQUFsQzs7QUFFQSxVQUFJRixvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBTUcsZ0JBQWdCQyxNQUFNSCxTQUFOLENBQXRCOztBQUVBLFlBQUksT0FBT0UsYUFBUCxLQUF5QixTQUE3QixFQUF3QztBQUN0Q0wsa0JBQVFGLE9BQU9TLElBQVAsQ0FBWSxLQUFLWCxPQUFqQixDQUFSOztBQUVBSyx1QkFBYUksYUFBYjtBQUNELFNBSkQsTUFJTztBQUNMSix1QkFBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQyxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJGLGdCQUFRRixPQUFPUyxJQUFQLENBQVksS0FBS1gsT0FBakIsQ0FBUjs7QUFFQUsscUJBQWEsSUFBYjtBQUNEOztBQUVERCxZQUFNUSxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFlBQU1DLFFBQVEsTUFBS2QsT0FBTCxDQUFhYSxJQUFiLENBQWQ7QUFBQSxZQUNNRSxlQUFlRixJQURyQjtBQUFBLFlBQzRCO0FBQ3RCRyxxQkFBYTtBQUNYRjtBQURXLFNBRm5COztBQU1BWixlQUFPZSxjQUFQLENBQXNCLEtBQXRCLEVBQTRCRixZQUE1QixFQUEwQ0MsVUFBMUM7O0FBRUEsWUFBSVgsVUFBSixFQUFnQjtBQUNkLGlCQUFPLE1BQUtMLE9BQUwsQ0FBYWEsSUFBYixDQUFQO0FBQ0Q7QUFDRixPQVpEO0FBYUQ7OzsrQkFFVUssYyxFQUFnQkMsZSxFQUFpQkMsVSxFQUFZQyxNLEVBQVE7QUFDOUQ7QUFDRDs7O21DQUVxQkMsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxVQUFNQyw2Q0FBY0gsS0FBZCxnQkFBdUJFLGtCQUF2QixLQUFOOztBQUVBRSxzQkFBZ0JELE9BQWhCLEVBQXlCRixVQUF6Qjs7QUFFQSxhQUFPRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCL0IsT0FBakI7O0FBRUEsU0FBUzZCLGVBQVQsQ0FBeUJELE9BQXpCLEVBQWtDRixVQUFsQyxFQUE4QztBQUM1QyxNQUFNekIsZ0JBQWlCLE9BQU8yQixRQUFRM0IsYUFBZixLQUFpQyxVQUFsQyxHQUNFMkIsUUFBUTNCLGFBQVIsQ0FBc0J5QixVQUF0QixDQURGLEdBRUlBLFdBQVd6QixhQUFYLElBQTRCLEVBRnREOztBQUlBMkIsVUFBUUksZ0JBQVIsQ0FBeUIvQixhQUF6Qjs7QUFFQUEsZ0JBQWNjLE9BQWQsQ0FBc0IsVUFBQ2IsWUFBRCxFQUFrQjtBQUN0QzBCLFlBQVFLLGFBQVIsQ0FBc0IvQixZQUF0QjtBQUNELEdBRkQ7QUFHRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG5cdFx0Ly8vXG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuICB9XG5cbiAgYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuICBcbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICBcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tlZCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBhcHBseVByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cyB8fCBbXTtcblxuICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KTtcbiAgfSk7XG59XG4iXX0=