"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TexturedQuadrangle;
    }
});
var _index = require("../../index");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var coordinates = [
    [
        0,
        0,
        0
    ],
    [
        1,
        0,
        0
    ],
    [
        0,
        1,
        0
    ],
    [
        1,
        1,
        0
    ]
], indexes = [
    [
        0,
        1,
        3
    ],
    [
        3,
        2,
        0
    ]
], defaultImageName = "plaster.jpg", defaultTextureCoordinates = [
    [
        [
            0,
            0
        ],
        [
            2,
            0
        ],
        [
            2,
            2
        ]
    ],
    [
        [
            2,
            2
        ],
        [
            0,
            2
        ],
        [
            0,
            0
        ]
    ]
];
var TexturedQuadrangle = /*#__PURE__*/ function(TexturedCanvasElement) {
    _inherits(TexturedQuadrangle, TexturedCanvasElement);
    var _super = _create_super(TexturedQuadrangle);
    function TexturedQuadrangle() {
        _class_call_check(this, TexturedQuadrangle);
        return _super.apply(this, arguments);
    }
    _create_class(TexturedQuadrangle, null, [
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                var _properties_imageName = properties.imageName, imageName = _properties_imageName === void 0 ? defaultImageName : _properties_imageName, _properties_textureCoordinates = properties.textureCoordinates, textureCoordinates = _properties_textureCoordinates === void 0 ? defaultTextureCoordinates : _properties_textureCoordinates, texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);
                return texturedQuadrangle;
            }
        }
    ]);
    return TexturedQuadrangle;
}(_index.TexturedCanvasElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIFsgMSwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgWyAzLCAyLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJwbGFzdGVyLmpwZ1wiLFxuICAgICAgZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIFsgMCwgMCBdLCBbIDIsIDAgXSwgWyAyLCAyIF0gXSxcbiAgICAgICAgWyBbIDIsIDIgXSwgWyAwLCAyIF0sIFsgMCwgMCBdIF0sXG5cbiAgICAgIF07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkUXVhZHJhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkUXVhZHJhbmdsZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFF1YWRyYW5nbGUsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRRdWFkcmFuZ2xlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVGV4dHVyZWRRdWFkcmFuZ2xlIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiZGVmYXVsdEltYWdlTmFtZSIsImRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlZFF1YWRyYW5nbGUiLCJUZXh0dXJlZENhbnZhc0VsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBMEJxQkE7OztxQkF4QmlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxjQUFjO0lBRVo7UUFBRTtRQUFHO1FBQUc7S0FBRztJQUNYO1FBQUU7UUFBRztRQUFHO0tBQUc7SUFDWDtRQUFFO1FBQUc7UUFBRztLQUFHO0lBQ1g7UUFBRTtRQUFHO1FBQUc7S0FBRztDQUVaLEVBQ0RDLFVBQVU7SUFFUjtRQUFFO1FBQUc7UUFBRztLQUFHO0lBQ1g7UUFBRTtRQUFHO1FBQUc7S0FBRztDQUVaLEVBQ0RDLG1CQUFtQixlQUNuQkMsNEJBQTRCO0lBRTFCO1FBQUU7WUFBRTtZQUFHO1NBQUc7UUFBRTtZQUFFO1lBQUc7U0FBRztRQUFFO1lBQUU7WUFBRztTQUFHO0tBQUU7SUFDaEM7UUFBRTtZQUFFO1lBQUc7U0FBRztRQUFFO1lBQUU7WUFBRztTQUFHO1FBQUU7WUFBRTtZQUFHO1NBQUc7S0FBRTtDQUVqQztBQUVRLElBQUEsQUFBTUosbUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaSyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUM5Qiw0QkFBeUZBLFdBQWpGQyxXQUFBQSwrQ0FBWUosMkVBQXFFRyxXQUFuREUsb0JBQUFBLGlFQUFxQkosNERBQ3JESyxxQkFBcUJDLDRCQUFxQixDQUFDTCxjQUFjLENBSDlDTCxvQkFHbUVNLFlBQVlMLGFBQWFDLFNBQVNLLFdBQVdDO2dCQUVqSSxPQUFPQztZQUNUOzs7V0FObUJUO0VBQTJCVSw0QkFBcUIifQ==