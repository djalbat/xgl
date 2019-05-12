'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element() {
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
    return element.updateContext(childElement);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwibmFtZXMiLCJ0aGVuRGVsZXRlIiwiYXJndW1lbnRzTGVuZ3RoIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZmlyc3RBcmd1bWVudCIsImZpcnN0IiwiT2JqZWN0Iiwia2V5cyIsImNvbnRleHQiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiY2hpbGRFbGVtZW50IiwicGFyZW50Q29udGV4dCIsImFzc2lnbiIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImVsZW1lbnQiLCJhcHBseVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwic2V0Q2hpbGRFbGVtZW50cyIsInVwZGF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsTzs7Ozs7Ozt1Q0FDZTtBQUNqQixhQUFPLEtBQUtDLGFBQVo7QUFDRDs7O3FDQUVnQkEsYSxFQUFlO0FBQzlCLFdBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7OztrQ0FFYUMsSyxFQUFPQyxVLEVBQVk7QUFBQTs7QUFDL0IsVUFBTUMsa0JBQWtCQyxVQUFVQyxNQUFsQzs7QUFFQSxVQUFJRixvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekIsWUFBTUcsZ0JBQWdCQyxNQUFNSCxTQUFOLENBQXRCOztBQUVBLFlBQUksT0FBT0UsYUFBUCxLQUF5QixTQUE3QixFQUF3QztBQUN0Q0wsa0JBQVFPLE9BQU9DLElBQVAsQ0FBWSxLQUFLQyxPQUFqQixDQUFSOztBQUVBUix1QkFBYUksYUFBYjtBQUNELFNBSkQsTUFJTztBQUNMSix1QkFBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQyxvQkFBb0IsQ0FBeEIsRUFBMkI7QUFDekJGLGdCQUFRTyxPQUFPQyxJQUFQLENBQVksS0FBS0MsT0FBakIsQ0FBUjs7QUFFQVIscUJBQWEsSUFBYjtBQUNEOztBQUVERCxZQUFNVSxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFlBQU1DLFFBQVEsTUFBS0gsT0FBTCxDQUFhRSxJQUFiLENBQWQ7QUFBQSxZQUNNRSxlQUFlRixJQURyQjtBQUFBLFlBQzRCO0FBQ3RCRyxxQkFBYTtBQUNYRjtBQURXLFNBRm5COztBQU1BTCxlQUFPUSxjQUFQLENBQXNCLEtBQXRCLEVBQTRCRixZQUE1QixFQUEwQ0MsVUFBMUM7O0FBRUEsWUFBSWIsVUFBSixFQUFnQjtBQUNkLGlCQUFPLE1BQUtRLE9BQUwsQ0FBYUUsSUFBYixDQUFQO0FBQ0Q7QUFDRixPQVpEO0FBYUQ7OztrQ0FFYUssWSxFQUFjO0FBQzFCLFVBQU1QLFVBQVcsT0FBT08sYUFBYUMsYUFBcEIsS0FBc0MsVUFBdkMsR0FDRUQsYUFBYUMsYUFBYixFQURGLEdBRUlELGFBQWFQLE9BRmpDOztBQUlBLFdBQUtBLE9BQUwsR0FBZUYsT0FBT1csTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1QsT0FBdkIsRUFBZ0NBLE9BQWhDLENBQWY7O0FBRUEsYUFBT08sYUFBYVAsT0FBcEI7QUFDRDs7O21DQUVxQlUsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxVQUFNQyw2Q0FBY0gsS0FBZCxnQkFBdUJFLGtCQUF2QixLQUFOOztBQUVBRSxzQkFBZ0JELE9BQWhCLEVBQXlCRixVQUF6Qjs7QUFFQSxhQUFPRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIRSxPQUFPQyxPQUFQLEdBQWlCM0IsT0FBakI7O0FBRUEsU0FBU3lCLGVBQVQsQ0FBeUJELE9BQXpCLEVBQWtDRixVQUFsQyxFQUE4QztBQUM1QyxNQUFNckIsZ0JBQWlCLE9BQU91QixRQUFRdkIsYUFBZixLQUFpQyxVQUFsQyxHQUNFdUIsUUFBUXZCLGFBQVIsQ0FBc0JxQixVQUF0QixDQURGLEdBRUlBLFdBQVdyQixhQUFYLElBQTRCLEVBRnREOztBQUlBdUIsVUFBUUksZ0JBQVIsQ0FBeUIzQixhQUF6Qjs7QUFFQUEsZ0JBQWNXLE9BQWQsQ0FBc0IsVUFBQ00sWUFBRDtBQUFBLFdBQWtCTSxRQUFRSyxhQUFSLENBQXNCWCxZQUF0QixDQUFsQjtBQUFBLEdBQXRCO0FBQ0QiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICAgIHRoaXMuY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG4gIFxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG4gIFxuICAgICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGRlbGV0ZSBjaGlsZEVsZW1lbnQuY29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgYXBwbHlQcm9wZXJ0aWVzKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBlbGVtZW50LnVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50KSk7XG59XG4iXX0=