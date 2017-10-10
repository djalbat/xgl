'use strict';

class Element {
  assignContext(names, thenDelete) {
    const argumentsLength = arguments.length;
  
    if (argumentsLength === 1) {
      const firstArgument = first(arguments);
  
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
  
    names.forEach(function(name) {
      const value = this.context[name],
            propertyName = name,  ///
            descriptor = {
              value: value
            };
  
      Object.defineProperty(this, propertyName, descriptor);
  
      if (thenDelete) {
        delete this.context[name];
      }
    }.bind(this), []);
  }

  updateContext(childElement) {
    const context = (typeof childElement.context === 'function') ?
                      childElement.context() :
                        childElement.context;

    this.context = Object.assign({}, this.context, context);

    if (typeof childElement.context !== 'function') {
      delete childElement.context;
    }
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { childElements } = properties,
          element = new Class(...remainingArguments);

    childElements.forEach(function(childElement) {
      element.updateContext(childElement);
    });

    return element;
  }
}

module.exports = Element;
