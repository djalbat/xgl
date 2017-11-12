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
    value: function create(colourRenderer, textureRenderer, transforms) {
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
      }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lbGVtZW50LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwibmFtZXMiLCJ0aGVuRGVsZXRlIiwiYXJndW1lbnRzTGVuZ3RoIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZmlyc3RBcmd1bWVudCIsImZpcnN0IiwiT2JqZWN0Iiwia2V5cyIsImNvbnRleHQiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwicHJvcGVydHlOYW1lIiwiZGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiYmluZCIsImNoaWxkRWxlbWVudCIsInBhcmVudENvbnRleHQiLCJhc3NpZ24iLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwiY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50T3JQcm9wZXJ0aWVzIiwic2V0Q2hpbGRFbGVtZW50cyIsInVwZGF0ZUNvbnRleHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLE87Ozs7Ozs7dUNBQ2U7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7OztxQ0FFZ0JBLGEsRUFBZTtBQUM5QixXQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNEOzs7MkJBRU1DLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUNsRDtBQUNEOzs7a0NBRWFDLEssRUFBT0MsVSxFQUFZO0FBQy9CLFVBQU1DLGtCQUFrQkMsVUFBVUMsTUFBbEM7O0FBRUEsVUFBSUYsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCLFlBQU1HLGdCQUFnQkMsTUFBTUgsU0FBTixDQUF0Qjs7QUFFQSxZQUFJLE9BQU9FLGFBQVAsS0FBeUIsU0FBN0IsRUFBd0M7QUFDdENMLGtCQUFRTyxPQUFPQyxJQUFQLENBQVksS0FBS0MsT0FBakIsQ0FBUjs7QUFFQVIsdUJBQWFJLGFBQWI7QUFDRCxTQUpELE1BSU87QUFDTEosdUJBQWEsSUFBYjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUMsb0JBQW9CLENBQXhCLEVBQTJCO0FBQ3pCRixnQkFBUU8sT0FBT0MsSUFBUCxDQUFZLEtBQUtDLE9BQWpCLENBQVI7O0FBRUFSLHFCQUFhLElBQWI7QUFDRDs7QUFFREQsWUFBTVUsT0FBTixDQUFjLFVBQVNDLElBQVQsRUFBZTtBQUMzQixZQUFNQyxRQUFRLEtBQUtILE9BQUwsQ0FBYUUsSUFBYixDQUFkO0FBQUEsWUFDTUUsZUFBZUYsSUFEckI7QUFBQSxZQUM0QjtBQUN0QkcscUJBQWE7QUFDWEYsaUJBQU9BO0FBREksU0FGbkI7O0FBTUFMLGVBQU9RLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEJGLFlBQTVCLEVBQTBDQyxVQUExQzs7QUFFQSxZQUFJYixVQUFKLEVBQWdCO0FBQ2QsaUJBQU8sS0FBS1EsT0FBTCxDQUFhRSxJQUFiLENBQVA7QUFDRDtBQUNGLE9BWmEsQ0FZWkssSUFaWSxDQVlQLElBWk8sQ0FBZDtBQWFEOzs7a0NBRWFDLFksRUFBYztBQUMxQixVQUFNUixVQUFXLE9BQU9RLGFBQWFDLGFBQXBCLEtBQXNDLFVBQXZDLEdBQ0VELGFBQWFDLGFBQWIsRUFERixHQUVJRCxhQUFhUixPQUZqQzs7QUFJQSxXQUFLQSxPQUFMLEdBQWVGLE9BQU9ZLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtWLE9BQXZCLEVBQWdDQSxPQUFoQyxDQUFmOztBQUVBLGFBQU9RLGFBQWFSLE9BQXBCO0FBQ0Q7OzttQ0FFcUJXLEssRUFBT0MsVSxFQUFtQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFDOUQsVUFBTUMsNkNBQWNILEtBQWQsZ0JBQXVCRSxrQkFBdkIsS0FBTjtBQUFBLFVBQ00xQixnQkFBZ0I0QixxQ0FBcUNELE9BQXJDLEVBQThDRixVQUE5QyxDQUR0Qjs7QUFHQUUsY0FBUUUsZ0JBQVIsQ0FBeUI3QixhQUF6Qjs7QUFFQUEsb0JBQWNjLE9BQWQsQ0FBc0IsVUFBU08sWUFBVCxFQUF1QjtBQUMzQ00sZ0JBQVFHLGFBQVIsQ0FBc0JULFlBQXRCO0FBQ0QsT0FGRDs7QUFJQSxhQUFPTSxPQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCakMsT0FBakI7O0FBRUEsU0FBUzZCLG9DQUFULENBQThDRCxPQUE5QyxFQUF1REYsVUFBdkQsRUFBbUU7QUFDakUsTUFBTXpCLGdCQUFpQixPQUFPMkIsUUFBUTNCLGFBQWYsS0FBaUMsVUFBbEMsR0FDRTJCLFFBQVEzQixhQUFSLENBQXNCeUIsVUFBdEIsQ0FERixHQUVJQSxXQUFXekIsYUFBWCxJQUE0QixFQUZ0RDs7QUFJQSxTQUFPQSxhQUFQO0FBQ0QiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuICBcbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgLy8vXG4gIH1cblxuICBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gICAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG4gIFxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuICBcbiAgICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcbiAgXG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIFxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gIFxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG4gIFxuICAgICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgZGVsZXRlIGNoaWxkRWxlbWVudC5jb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudE9yUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICAgIGVsZW1lbnQuc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQudXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnRPclByb3BlcnRpZXMoZWxlbWVudCwgcHJvcGVydGllcykge1xuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbiJdfQ==