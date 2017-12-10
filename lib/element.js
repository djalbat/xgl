'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(canvas) {
    _classCallCheck(this, Element);

    this.canvas = canvas;

    this.childElements = undefined; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjYW52YXMiLCJjaGlsZEVsZW1lbnRzIiwidW5kZWZpbmVkIiwiY2hpbGRFbGVtZW50IiwiY29udGV4dCIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1lcyIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJrZXlzIiwiZm9yRWFjaCIsIm5hbWUiLCJ2YWx1ZSIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsImJpbmQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwiYXBwbHlQcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInNldENoaWxkRWxlbWVudHMiLCJ1cGRhdGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87QUFDSixtQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUEsU0FBS0MsYUFBTCxHQUFxQkMsU0FBckIsQ0FIa0IsQ0FHYztBQUNqQzs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsTUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOzs7cUNBRWdCQSxhLEVBQWU7QUFDOUIsV0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7O2tDQUVhRSxZLEVBQWM7QUFDMUIsVUFBTUMsVUFBVyxPQUFPRCxhQUFhRSxhQUFwQixLQUFzQyxVQUF2QyxHQUNFRixhQUFhRSxhQUFiLEVBREYsR0FFSUYsYUFBYUMsT0FGakM7O0FBSUEsV0FBS0EsT0FBTCxHQUFlRSxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLSCxPQUF2QixFQUFnQ0EsT0FBaEMsQ0FBZjs7QUFFQSxhQUFPRCxhQUFhQyxPQUFwQjtBQUNEOzs7a0NBRWFJLEssRUFBT0MsVSxFQUFZO0FBQy9CLFVBQU1DLGtCQUFrQkMsVUFBVUMsTUFBbEM7O0FBRUEsVUFBSUYsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFlBQU1HLGdCQUFnQkMsTUFBTUgsU0FBTixDQUF0Qjs7QUFFQSxZQUFJLE9BQU9FLGFBQVAsS0FBeUIsU0FBN0IsRUFBd0M7QUFDdENMLGtCQUFRRixPQUFPUyxJQUFQLENBQVksS0FBS1gsT0FBakIsQ0FBUjs7QUFFQUssdUJBQWFJLGFBQWI7QUFDRCxTQUpELE1BSU87QUFDTEosdUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUMsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCRixnQkFBUUYsT0FBT1MsSUFBUCxDQUFZLEtBQUtYLE9BQWpCLENBQVI7O0FBRUFLLHFCQUFhLElBQWI7QUFDRDs7QUFFREQsWUFBTVEsT0FBTixDQUFjLFVBQVNDLElBQVQsRUFBZTtBQUMzQixZQUFNQyxRQUFRLEtBQUtkLE9BQUwsQ0FBYWEsSUFBYixDQUFkO0FBQUEsWUFDTUUsZUFBZUYsSUFEckI7QUFBQSxZQUM0QjtBQUN0QkcscUJBQWE7QUFDWEYsaUJBQU9BO0FBREksU0FGbkI7O0FBTUFaLGVBQU9lLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEJGLFlBQTVCLEVBQTBDQyxVQUExQzs7QUFFQSxZQUFJWCxVQUFKLEVBQWdCO0FBQ2QsaUJBQU8sS0FBS0wsT0FBTCxDQUFhYSxJQUFiLENBQVA7QUFDRDtBQUNGLE9BWmEsQ0FZWkssSUFaWSxDQVlQLElBWk8sQ0FBZDtBQWFEOzs7K0JBRVVDLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUN0RDtBQUNEOzs7bUNBRXFCQyxLLEVBQU9DLFUsRUFBbUM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQ3hELFVBQUU1QixNQUFGLEdBQWEyQixVQUFiLENBQUUzQixNQUFGO0FBQUEsVUFDQTZCLE9BREEsc0NBQ2NILEtBRGQsaUJBQ29CMUIsTUFEcEIsR0FDK0I0QixrQkFEL0I7OztBQUdORSxzQkFBZ0JELE9BQWhCLEVBQXlCRixVQUF6Qjs7QUFFQSxhQUFPRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCakMsT0FBakI7O0FBRUEsU0FBUytCLGVBQVQsQ0FBeUJELE9BQXpCLEVBQWtDRixVQUFsQyxFQUE4QztBQUM1QyxNQUFNMUIsZ0JBQWlCLE9BQU80QixRQUFRNUIsYUFBZixLQUFpQyxVQUFsQyxHQUNFNEIsUUFBUTVCLGFBQVIsQ0FBc0IwQixVQUF0QixDQURGLEdBRUlBLFdBQVcxQixhQUFYLElBQTRCLEVBRnREOztBQUlBNEIsVUFBUUksZ0JBQVIsQ0FBeUJoQyxhQUF6Qjs7QUFFQUEsZ0JBQWNlLE9BQWQsQ0FBc0IsVUFBU2IsWUFBVCxFQUF1QjtBQUMzQzBCLFlBQVFLLGFBQVIsQ0FBc0IvQixZQUF0QjtBQUNELEdBRkQ7QUFHRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG4gIFxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG4gIFxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cbiAgXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDtcblxuICAgIHRoaXMuY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udGV4dCwgY29udGV4dCk7XG5cbiAgICBkZWxldGUgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG4gIH1cblxuICBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG4gIFxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG4gIFxuICAgICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGVsZW1lbnQgPSBuZXcgQ2xhc3MoY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgYXBwbHlQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KTtcbiAgfSk7XG59XG4iXX0=