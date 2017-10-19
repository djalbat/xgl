'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
    _classCallCheck(this, Element);
  }

  _createClass(Element, [{
    key: 'isCanvasElement',
    value: function isCanvasElement() {
      return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJuYW1lcyIsInRoZW5EZWxldGUiLCJhcmd1bWVudHNMZW5ndGgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJmaXJzdEFyZ3VtZW50IiwiZmlyc3QiLCJPYmplY3QiLCJrZXlzIiwiY29udGV4dCIsImZvckVhY2giLCJuYW1lIiwidmFsdWUiLCJwcm9wZXJ0eU5hbWUiLCJkZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJiaW5kIiwiY2hpbGRFbGVtZW50IiwicGFyZW50Q29udGV4dCIsImFzc2lnbiIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50IiwidXBkYXRlQ29udGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTzs7Ozs7OztzQ0FDYztBQUNoQixhQUFPLEtBQVA7QUFDRDs7O2tDQUVhQyxLLEVBQU9DLFUsRUFBWTtBQUMvQixVQUFNQyxrQkFBa0JDLFVBQVVDLE1BQWxDOztBQUVBLFVBQUlGLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFNRyxnQkFBZ0JDLE1BQU1ILFNBQU4sQ0FBdEI7O0FBRUEsWUFBSSxPQUFPRSxhQUFQLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3RDTCxrQkFBUU8sT0FBT0MsSUFBUCxDQUFZLEtBQUtDLE9BQWpCLENBQVI7O0FBRUFSLHVCQUFhSSxhQUFiO0FBQ0QsU0FKRCxNQUlPO0FBQ0xKLHVCQUFhLElBQWI7QUFDRDtBQUNGOztBQUVELFVBQUlDLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QkYsZ0JBQVFPLE9BQU9DLElBQVAsQ0FBWSxLQUFLQyxPQUFqQixDQUFSOztBQUVBUixxQkFBYSxJQUFiO0FBQ0Q7O0FBRURELFlBQU1VLE9BQU4sQ0FBYyxVQUFTQyxJQUFULEVBQWU7QUFDM0IsWUFBTUMsUUFBUSxLQUFLSCxPQUFMLENBQWFFLElBQWIsQ0FBZDtBQUFBLFlBQ01FLGVBQWVGLElBRHJCO0FBQUEsWUFDNEI7QUFDdEJHLHFCQUFhO0FBQ1hGLGlCQUFPQTtBQURJLFNBRm5COztBQU1BTCxlQUFPUSxjQUFQLENBQXNCLElBQXRCLEVBQTRCRixZQUE1QixFQUEwQ0MsVUFBMUM7O0FBRUEsWUFBSWIsVUFBSixFQUFnQjtBQUNkLGlCQUFPLEtBQUtRLE9BQUwsQ0FBYUUsSUFBYixDQUFQO0FBQ0Q7QUFDRixPQVphLENBWVpLLElBWlksQ0FZUCxJQVpPLENBQWQsRUFZYyxFQVpkO0FBYUQ7OztrQ0FFYUMsWSxFQUFjO0FBQzFCLFVBQU1SLFVBQVcsT0FBT1EsYUFBYUMsYUFBcEIsS0FBc0MsVUFBdkMsR0FDRUQsYUFBYUMsYUFBYixFQURGLEdBRUlELGFBQWFSLE9BRmpDOztBQUlBLFdBQUtBLE9BQUwsR0FBZUYsT0FBT1ksTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1YsT0FBdkIsRUFBZ0NBLE9BQWhDLENBQWY7O0FBRUEsYUFBT1EsYUFBYVIsT0FBcEI7QUFDRDs7O21DQUVxQlcsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUN4RCxVQUFFQyxhQUFGLEdBQW9CRixVQUFwQixDQUFFRSxhQUFGO0FBQUEsVUFDQUMsT0FEQSxzQ0FDY0osS0FEZCxnQkFDdUJFLGtCQUR2Qjs7O0FBR05DLG9CQUFjYixPQUFkLENBQXNCLFVBQVNPLFlBQVQsRUFBdUI7QUFDM0NPLGdCQUFRQyxhQUFSLENBQXNCUixZQUF0QjtBQUNELE9BRkQ7O0FBSUEsYUFBT08sT0FBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQjVCLE9BQWpCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBpc0NhbnZhc0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICAgIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuICBcbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICBcbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICBcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuICBcbiAgICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpLCBbXSk7XG4gIH1cblxuICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSAnZnVuY3Rpb24nKSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDtcblxuICAgIHRoaXMuY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udGV4dCwgY29udGV4dCk7XG5cbiAgICBkZWxldGUgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiJdfQ==