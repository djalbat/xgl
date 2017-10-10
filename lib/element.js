'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
    _classCallCheck(this, Element);
  }

  _createClass(Element, [{
    key: 'create',
    value: function create(colourShader, textureShader) {
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
      var context = typeof childElement.context === 'function' ? childElement.context() : childElement.context;

      this.context = Object.assign({}, this.context, context);

      if (typeof childElement.context !== 'function') {
        delete childElement.context;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwibmFtZXMiLCJ0aGVuRGVsZXRlIiwiYXJndW1lbnRzTGVuZ3RoIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZmlyc3RBcmd1bWVudCIsImZpcnN0IiwiT2JqZWN0Iiwia2V5cyIsImNvbnRleHQiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiYmluZCIsImNoaWxkRWxlbWVudCIsImFzc2lnbiIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50IiwidXBkYXRlQ29udGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTzs7Ozs7OzsyQkFDR0MsWSxFQUFjQyxhLEVBQWU7QUFDbEM7QUFDRDs7O2tDQUVhQyxLLEVBQU9DLFUsRUFBWTtBQUMvQixVQUFNQyxrQkFBa0JDLFVBQVVDLE1BQWxDOztBQUVBLFVBQUlGLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFNRyxnQkFBZ0JDLE1BQU1ILFNBQU4sQ0FBdEI7O0FBRUEsWUFBSSxPQUFPRSxhQUFQLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3RDTCxrQkFBUU8sT0FBT0MsSUFBUCxDQUFZLEtBQUtDLE9BQWpCLENBQVI7O0FBRUFSLHVCQUFhSSxhQUFiO0FBQ0QsU0FKRCxNQUlPO0FBQ0xKLHVCQUFhLElBQWI7QUFDRDtBQUNGOztBQUVELFVBQUlDLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QkYsZ0JBQVFPLE9BQU9DLElBQVAsQ0FBWSxLQUFLQyxPQUFqQixDQUFSOztBQUVBUixxQkFBYSxJQUFiO0FBQ0Q7O0FBRURELFlBQU1VLE9BQU4sQ0FBYyxVQUFTQyxJQUFULEVBQWU7QUFDM0IsWUFBTUMsUUFBUSxLQUFLSCxPQUFMLENBQWFFLElBQWIsQ0FBZDtBQUFBLFlBQ01FLGVBQWVGLElBRHJCO0FBQUEsWUFDNEI7QUFDdEJHLHFCQUFhO0FBQ1hGLGlCQUFPQTtBQURJLFNBRm5COztBQU1BTCxlQUFPUSxjQUFQLENBQXNCLElBQXRCLEVBQTRCRixZQUE1QixFQUEwQ0MsVUFBMUM7O0FBRUEsWUFBSWIsVUFBSixFQUFnQjtBQUNkLGlCQUFPLEtBQUtRLE9BQUwsQ0FBYUUsSUFBYixDQUFQO0FBQ0Q7QUFDRixPQVphLENBWVpLLElBWlksQ0FZUCxJQVpPLENBQWQsRUFZYyxFQVpkO0FBYUQ7OztrQ0FFYUMsWSxFQUFjO0FBQzFCLFVBQU1SLFVBQVcsT0FBT1EsYUFBYVIsT0FBcEIsS0FBZ0MsVUFBakMsR0FDRVEsYUFBYVIsT0FBYixFQURGLEdBRUlRLGFBQWFSLE9BRmpDOztBQUlBLFdBQUtBLE9BQUwsR0FBZUYsT0FBT1csTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1QsT0FBdkIsRUFBZ0NBLE9BQWhDLENBQWY7O0FBRUEsVUFBSSxPQUFPUSxhQUFhUixPQUFwQixLQUFnQyxVQUFwQyxFQUFnRDtBQUM5QyxlQUFPUSxhQUFhUixPQUFwQjtBQUNEO0FBQ0Y7OzttQ0FFcUJVLEssRUFBT0MsVSxFQUFtQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDeEQsVUFBRUMsYUFBRixHQUFvQkYsVUFBcEIsQ0FBRUUsYUFBRjtBQUFBLFVBQ0FDLE9BREEsc0NBQ2NKLEtBRGQsZ0JBQ3VCRSxrQkFEdkI7OztBQUdOQyxvQkFBY1osT0FBZCxDQUFzQixVQUFTTyxZQUFULEVBQXVCO0FBQzNDTSxnQkFBUUMsYUFBUixDQUFzQlAsWUFBdEI7QUFDRCxPQUZEOztBQUlBLGFBQU9NLE9BQVA7QUFDRDs7Ozs7O0FBR0hFLE9BQU9DLE9BQVAsR0FBaUI3QixPQUFqQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIC8vL1xuICB9XG4gIFxuICBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG4gIFxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG4gIFxuICAgICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyksIFtdKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LmNvbnRleHQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmICh0eXBlb2YgY2hpbGRFbGVtZW50LmNvbnRleHQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiJdfQ==