'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
    _classCallCheck(this, Element);

    this.childElements = null; ///
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
    value: function initialise(textureRenderer, colourRenderer, transforms, masked) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiY29udGV4dCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1lcyIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsInRleHR1cmVSZW5kZXJlciIsImNvbG91clJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImVsZW1lbnQiLCJhcHBseVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwic2V0Q2hpbGRFbGVtZW50cyIsInVwZGF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1osU0FBS0MsYUFBTCxHQUFxQixJQUFyQixDQURZLENBQ2dCO0FBQzdCOzs7O3VDQUVrQjtBQUNqQixhQUFPLEtBQUtBLGFBQVo7QUFDRDs7O3FDQUVnQkEsYSxFQUFlO0FBQzlCLFdBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7OztrQ0FFYUMsWSxFQUFjO0FBQzFCLFVBQU1DLFVBQVcsT0FBT0QsYUFBYUUsYUFBcEIsS0FBc0MsVUFBdkMsR0FDRUYsYUFBYUUsYUFBYixFQURGLEdBRUlGLGFBQWFDLE9BRmpDOztBQUlBLFdBQUtBLE9BQUwsR0FBZUUsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS0gsT0FBdkIsRUFBZ0NBLE9BQWhDLENBQWY7O0FBRUEsYUFBT0QsYUFBYUMsT0FBcEI7QUFDRDs7O2tDQUVhSSxLLEVBQU9DLFUsRUFBWTtBQUFBOztBQUMvQixVQUFNQyxrQkFBa0JDLFVBQVVDLE1BQWxDOztBQUVBLFVBQUlGLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFNRyxnQkFBZ0JDLE1BQU1ILFNBQU4sQ0FBdEI7O0FBRUEsWUFBSSxPQUFPRSxhQUFQLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3RDTCxrQkFBUUYsT0FBT1MsSUFBUCxDQUFZLEtBQUtYLE9BQWpCLENBQVI7O0FBRUFLLHVCQUFhSSxhQUFiO0FBQ0QsU0FKRCxNQUlPO0FBQ0xKLHVCQUFhLElBQWI7QUFDRDtBQUNGOztBQUVELFVBQUlDLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QkYsZ0JBQVFGLE9BQU9TLElBQVAsQ0FBWSxLQUFLWCxPQUFqQixDQUFSOztBQUVBSyxxQkFBYSxJQUFiO0FBQ0Q7O0FBRURELFlBQU1RLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEIsWUFBTUMsUUFBUSxNQUFLZCxPQUFMLENBQWFhLElBQWIsQ0FBZDtBQUFBLFlBQ01FLGVBQWVGLElBRHJCO0FBQUEsWUFDNEI7QUFDdEJHLHFCQUFhO0FBQ1hGO0FBRFcsU0FGbkI7O0FBTUFaLGVBQU9lLGNBQVAsQ0FBc0IsS0FBdEIsRUFBNEJGLFlBQTVCLEVBQTBDQyxVQUExQzs7QUFFQSxZQUFJWCxVQUFKLEVBQWdCO0FBQ2QsaUJBQU8sTUFBS0wsT0FBTCxDQUFhYSxJQUFiLENBQVA7QUFDRDtBQUNGLE9BWkQ7QUFhRDs7OytCQUVVSyxlLEVBQWlCQyxjLEVBQWdCQyxVLEVBQVlDLE0sRUFBUTtBQUM5RDtBQUNEOzs7bUNBRXFCQyxLLEVBQU9DLFUsRUFBbUM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQzlELFVBQU1DLDZDQUFjSCxLQUFkLGdCQUF1QkUsa0JBQXZCLEtBQU47O0FBRUFFLHNCQUFnQkQsT0FBaEIsRUFBeUJGLFVBQXpCOztBQUVBLGFBQU9FLE9BQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUIvQixPQUFqQjs7QUFFQSxTQUFTNkIsZUFBVCxDQUF5QkQsT0FBekIsRUFBa0NGLFVBQWxDLEVBQThDO0FBQzVDLE1BQU16QixnQkFBaUIsT0FBTzJCLFFBQVEzQixhQUFmLEtBQWlDLFVBQWxDLEdBQ0UyQixRQUFRM0IsYUFBUixDQUFzQnlCLFVBQXRCLENBREYsR0FFSUEsV0FBV3pCLGFBQVgsSUFBNEIsRUFGdEQ7O0FBSUEyQixVQUFRSSxnQkFBUixDQUF5Qi9CLGFBQXpCOztBQUVBQSxnQkFBY2MsT0FBZCxDQUFzQixVQUFTYixZQUFULEVBQXVCO0FBQzNDMEIsWUFBUUssYUFBUixDQUFzQi9CLFlBQXRCO0FBQ0QsR0FGRDtBQUdEIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBudWxsOyAgLy8vXG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuICB9XG5cbiAgYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuICBcbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICBcbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHRleHR1cmVSZW5kZXJlciwgY29sb3VyUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tlZCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBhcHBseVByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cyB8fCBbXTtcblxuICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgIGVsZW1lbnQudXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpO1xuICB9KTtcbn1cbiJdfQ==