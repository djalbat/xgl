"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
function getUniformLocation(program, name) {
    return this.context.getUniformLocation(program, name);
}
function getAttributeLocation(program, name) {
    return this.context.getAttribLocation(program, name);
}
function setUniformLocationIntegerValue(uniformLocation, integerValue) {
    this.context.uniform1i(uniformLocation, integerValue);
}
var locationMixins = {
    getUniformLocation: getUniformLocation,
    getAttributeLocation: getAttributeLocation,
    setUniformLocationIntegerValue: setUniformLocationIntegerValue
};
var _default = locationMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvbG9jYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSkge1xuICB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHVuaWZvcm1Mb2NhdGlvbiwgaW50ZWdlclZhbHVlKTtcbn1cblxuY29uc3QgbG9jYXRpb25NaXhpbnMgPSB7XG4gIGdldFVuaWZvcm1Mb2NhdGlvbixcbiAgZ2V0QXR0cmlidXRlTG9jYXRpb24sXG4gIHNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYXRpb25NaXhpbnM7XG4iXSwibmFtZXMiOlsiZ2V0VW5pZm9ybUxvY2F0aW9uIiwicHJvZ3JhbSIsIm5hbWUiLCJjb250ZXh0IiwiZ2V0QXR0cmlidXRlTG9jYXRpb24iLCJnZXRBdHRyaWJMb2NhdGlvbiIsInNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsInVuaWZvcm1Mb2NhdGlvbiIsImludGVnZXJWYWx1ZSIsInVuaWZvcm0xaSIsImxvY2F0aW9uTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQkE7OztlQUFBOzs7QUFsQkEsU0FBU0EsbUJBQW1CQyxPQUFPLEVBQUVDLElBQUk7SUFDdkMsT0FBTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0gsa0JBQWtCLENBQUNDLFNBQVNDO0FBQ2xEO0FBRUEsU0FBU0UscUJBQXFCSCxPQUFPLEVBQUVDLElBQUk7SUFDekMsT0FBTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0UsaUJBQWlCLENBQUNKLFNBQVNDO0FBQ2pEO0FBRUEsU0FBU0ksK0JBQStCQyxlQUFlLEVBQUVDLFlBQVk7SUFDbkUsSUFBSSxDQUFDTCxPQUFPLENBQUNNLFNBQVMsQ0FBQ0YsaUJBQWlCQztBQUMxQztBQUVBLElBQU1FLGlCQUFpQjtJQUNyQlYsb0JBQUFBO0lBQ0FJLHNCQUFBQTtJQUNBRSxnQ0FBQUE7QUFDRjtJQUVBLFdBQWVJIn0=