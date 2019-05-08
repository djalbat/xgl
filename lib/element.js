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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiY29udGV4dCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1lcyIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImJpbmQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwiYXBwbHlQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInNldENoaWxkRWxlbWVudHMiLCJ1cGRhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87QUFDSixxQkFBYztBQUFBOztBQUNaLFNBQUtDLGFBQUwsR0FBcUIsSUFBckIsQ0FEWSxDQUNnQjtBQUM3Qjs7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQSxhQUFaO0FBQ0Q7OztxQ0FFZ0JBLGEsRUFBZTtBQUM5QixXQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7a0NBRWFDLFksRUFBYztBQUMxQixVQUFNQyxVQUFXLE9BQU9ELGFBQWFFLGFBQXBCLEtBQXNDLFVBQXZDLEdBQ0VGLGFBQWFFLGFBQWIsRUFERixHQUVJRixhQUFhQyxPQUZqQzs7QUFJQSxXQUFLQSxPQUFMLEdBQWVFLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtILE9BQXZCLEVBQWdDQSxPQUFoQyxDQUFmOztBQUVBLGFBQU9ELGFBQWFDLE9BQXBCO0FBQ0Q7OztrQ0FFYUksSyxFQUFPQyxVLEVBQVk7QUFDL0IsVUFBTUMsa0JBQWtCQyxVQUFVQyxNQUFsQzs7QUFFQSxVQUFJRixvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBTUcsZ0JBQWdCQyxNQUFNSCxTQUFOLENBQXRCOztBQUVBLFlBQUksT0FBT0UsYUFBUCxLQUF5QixTQUE3QixFQUF3QztBQUN0Q0wsa0JBQVFGLE9BQU9TLElBQVAsQ0FBWSxLQUFLWCxPQUFqQixDQUFSOztBQUVBSyx1QkFBYUksYUFBYjtBQUNELFNBSkQsTUFJTztBQUNMSix1QkFBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQyxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJGLGdCQUFRRixPQUFPUyxJQUFQLENBQVksS0FBS1gsT0FBakIsQ0FBUjs7QUFFQUsscUJBQWEsSUFBYjtBQUNEOztBQUVERCxZQUFNUSxPQUFOLENBQWMsVUFBU0MsSUFBVCxFQUFlO0FBQzNCLFlBQU1DLFFBQVEsS0FBS2QsT0FBTCxDQUFhYSxJQUFiLENBQWQ7QUFBQSxZQUNNRSxlQUFlRixJQURyQjtBQUFBLFlBQzRCO0FBQ3RCRyxxQkFBYTtBQUNYRjtBQURXLFNBRm5COztBQU1BWixlQUFPZSxjQUFQLENBQXNCLElBQXRCLEVBQTRCRixZQUE1QixFQUEwQ0MsVUFBMUM7O0FBRUEsWUFBSVgsVUFBSixFQUFnQjtBQUNkLGlCQUFPLEtBQUtMLE9BQUwsQ0FBYWEsSUFBYixDQUFQO0FBQ0Q7QUFDRixPQVphLENBWVpLLElBWlksQ0FZUCxJQVpPLENBQWQ7QUFhRDs7OytCQUVVQyxjLEVBQWdCQyxlLEVBQWlCQyxVLEVBQVk7QUFDdEQ7QUFDRDs7O21DQUVxQkMsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxVQUFNQyw2Q0FBY0gsS0FBZCxnQkFBdUJFLGtCQUF2QixLQUFOOztBQUVBRSxzQkFBZ0JELE9BQWhCLEVBQXlCRixVQUF6Qjs7QUFFQSxhQUFPRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCL0IsT0FBakI7O0FBRUEsU0FBUzZCLGVBQVQsQ0FBeUJELE9BQXpCLEVBQWtDRixVQUFsQyxFQUE4QztBQUM1QyxNQUFNekIsZ0JBQWlCLE9BQU8yQixRQUFRM0IsYUFBZixLQUFpQyxVQUFsQyxHQUNFMkIsUUFBUTNCLGFBQVIsQ0FBc0J5QixVQUF0QixDQURGLEdBRUlBLFdBQVd6QixhQUFYLElBQTRCLEVBRnREOztBQUlBMkIsVUFBUUksZ0JBQVIsQ0FBeUIvQixhQUF6Qjs7QUFFQUEsZ0JBQWNjLE9BQWQsQ0FBc0IsVUFBU2IsWUFBVCxFQUF1QjtBQUMzQzBCLFlBQVFLLGFBQVIsQ0FBc0IvQixZQUF0QjtBQUNELEdBRkQ7QUFHRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gbnVsbDsgIC8vL1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbiAgfVxuXG4gIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcbiAgXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdib29sZWFuJykge1xuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgXG4gICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBhcHBseVByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkRWxlbWVudHMocHJvcGVydGllcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cyB8fCBbXTtcblxuICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgIGVsZW1lbnQudXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpO1xuICB9KTtcbn1cbiJdfQ==