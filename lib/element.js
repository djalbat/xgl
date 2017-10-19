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
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {}
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

      var element = new (Function.prototype.bind.apply(Class, [null].concat(remainingArguments)))(),
          childElements = childElementsFromElementOrProperties(element, properties);

      element.setChildElements(childElements);

      childElements.forEach(function (childElement) {
        element.updateContext(childElement);
      });

      return element;
    }
  }]);

  return Element;
}();

module.exports = Element;

function childElementsFromElementOrProperties(element, properties) {
  var childElements = typeof element.childElements === 'function' ? element.childElements(properties) : properties.childElements || [];

  return childElements;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwibmFtZXMiLCJ0aGVuRGVsZXRlIiwiYXJndW1lbnRzTGVuZ3RoIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZmlyc3RBcmd1bWVudCIsImZpcnN0IiwiT2JqZWN0Iiwia2V5cyIsImNvbnRleHQiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiYmluZCIsImNoaWxkRWxlbWVudCIsInBhcmVudENvbnRleHQiLCJhc3NpZ24iLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwiY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50T3JQcm9wZXJ0aWVzIiwic2V0Q2hpbGRFbGVtZW50cyIsInVwZGF0ZUNvbnRleHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87Ozs7Ozs7dUNBQ2U7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7OztxQ0FFZ0JBLGEsRUFBZTtBQUM5QixXQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7MkJBRU1DLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWSxDQUFFOzs7a0NBRXhDQyxLLEVBQU9DLFUsRUFBWTtBQUMvQixVQUFNQyxrQkFBa0JDLFVBQVVDLE1BQWxDOztBQUVBLFVBQUlGLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QixZQUFNRyxnQkFBZ0JDLE1BQU1ILFNBQU4sQ0FBdEI7O0FBRUEsWUFBSSxPQUFPRSxhQUFQLEtBQXlCLFNBQTdCLEVBQXdDO0FBQ3RDTCxrQkFBUU8sT0FBT0MsSUFBUCxDQUFZLEtBQUtDLE9BQWpCLENBQVI7O0FBRUFSLHVCQUFhSSxhQUFiO0FBQ0QsU0FKRCxNQUlPO0FBQ0xKLHVCQUFhLElBQWI7QUFDRDtBQUNGOztBQUVELFVBQUlDLG9CQUFvQixDQUF4QixFQUEyQjtBQUN6QkYsZ0JBQVFPLE9BQU9DLElBQVAsQ0FBWSxLQUFLQyxPQUFqQixDQUFSOztBQUVBUixxQkFBYSxJQUFiO0FBQ0Q7O0FBRURELFlBQU1VLE9BQU4sQ0FBYyxVQUFTQyxJQUFULEVBQWU7QUFDM0IsWUFBTUMsUUFBUSxLQUFLSCxPQUFMLENBQWFFLElBQWIsQ0FBZDtBQUFBLFlBQ01FLGVBQWVGLElBRHJCO0FBQUEsWUFDNEI7QUFDdEJHLHFCQUFhO0FBQ1hGLGlCQUFPQTtBQURJLFNBRm5COztBQU1BTCxlQUFPUSxjQUFQLENBQXNCLElBQXRCLEVBQTRCRixZQUE1QixFQUEwQ0MsVUFBMUM7O0FBRUEsWUFBSWIsVUFBSixFQUFnQjtBQUNkLGlCQUFPLEtBQUtRLE9BQUwsQ0FBYUUsSUFBYixDQUFQO0FBQ0Q7QUFDRixPQVphLENBWVpLLElBWlksQ0FZUCxJQVpPLENBQWQsRUFZYyxFQVpkO0FBYUQ7OztrQ0FFYUMsWSxFQUFjO0FBQzFCLFVBQU1SLFVBQVcsT0FBT1EsYUFBYUMsYUFBcEIsS0FBc0MsVUFBdkMsR0FDRUQsYUFBYUMsYUFBYixFQURGLEdBRUlELGFBQWFSLE9BRmpDOztBQUlBLFdBQUtBLE9BQUwsR0FBZUYsT0FBT1ksTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS1YsT0FBdkIsRUFBZ0NBLE9BQWhDLENBQWY7O0FBRUEsYUFBT1EsYUFBYVIsT0FBcEI7QUFDRDs7O21DQUVxQlcsSyxFQUFPQyxVLEVBQW1DO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUM5RCxVQUFNQyw2Q0FBY0gsS0FBZCxnQkFBdUJFLGtCQUF2QixLQUFOO0FBQUEsVUFDTTFCLGdCQUFnQjRCLHFDQUFxQ0QsT0FBckMsRUFBOENGLFVBQTlDLENBRHRCOztBQUdBRSxjQUFRRSxnQkFBUixDQUF5QjdCLGFBQXpCOztBQUVBQSxvQkFBY2MsT0FBZCxDQUFzQixVQUFTTyxZQUFULEVBQXVCO0FBQzNDTSxnQkFBUUcsYUFBUixDQUFzQlQsWUFBdEI7QUFDRCxPQUZEOztBQUlBLGFBQU9NLE9BQVA7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJqQyxPQUFqQjs7QUFFQSxTQUFTNkIsb0NBQVQsQ0FBOENELE9BQTlDLEVBQXVERixVQUF2RCxFQUFtRTtBQUNqRSxNQUFNekIsZ0JBQWlCLE9BQU8yQixRQUFRM0IsYUFBZixLQUFpQyxVQUFsQyxHQUNFMkIsUUFBUTNCLGFBQVIsQ0FBc0J5QixVQUF0QixDQURGLEdBRUlBLFdBQVd6QixhQUFYLElBQTRCLEVBRnREOztBQUlBLFNBQU9BLGFBQVA7QUFDRCIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgZ2V0Q2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7fVxuXG4gIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICBcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcbiAgXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdib29sZWFuJykge1xuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG4gIFxuICAgICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgXG4gICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfTtcbiAgXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcbiAgXG4gICAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSwgW10pO1xuICB9XG5cbiAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudE9yUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQudXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnRPclByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbiJdfQ==