'use strict';

var vertexUtilities = require('../../utilities/vertex');

var calculateVertexIndexData = vertexUtilities.calculateVertexIndexData,
    calculateVertexNormalData = vertexUtilities.calculateVertexNormalData;


var initialVertexPositionData = [
        /*
                0.0, 0.0, 1.0, 1,
                1.0, 0.0, 1.0, 1,
                1.0, 1.0, 1.0, 1,
                0.0, 1.0, 1.0, 1,
        
                0.0, 0.0, 0.0, 1,
                0.0, 1.0, 0.0, 1,
                1.0, 1.0, 0.0, 1,
                1.0, 0.0, 0.0, 1,
        
                0.0, 1.0, 0.0, 1,
                0.0, 1.0, 1.0, 1,
                1.0, 1.0, 1.0, 1,
                1.0, 1.0, 0.0, 1,
        
                0.0, 0.0, 0.0, 1,
                1.0, 0.0, 0.0, 1,
                1.0, 0.0, 1.0, 1,
                0.0, 0.0, 1.0, 1,
        
                1.0, 0.0, 0.0, 1,
                1.0, 1.0, 0.0, 1,
                1.0, 1.0, 1.0, 1,
                1.0, 0.0, 1.0, 1,
        
                0.0, 0.0, 0.0, 1,
                0.0, 0.0, 1.0, 1,
                0.0, 1.0, 1.0, 1,
                0.0, 1.0, 0.0, 1,
        */
],
    vertexIndexData = calculateVertexIndexData(initialVertexPositionData),
    vertexNormalData = calculateVertexNormalData(initialVertexPositionData);

module.exports = {
        vertexIndexData: vertexIndexData,
        vertexNormalData: vertexNormalData,
        initialVertexPositionData: initialVertexPositionData
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3Vib2lkLmpzIl0sIm5hbWVzIjpbInZlcnRleFV0aWxpdGllcyIsInJlcXVpcmUiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEiLCJjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleEluZGV4RGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxrQkFBa0JDLFFBQVEsd0JBQVIsQ0FBeEI7O0lBRVFDLHdCLEdBQXVERixlLENBQXZERSx3QjtJQUEwQkMseUIsR0FBNkJILGUsQ0FBN0JHLHlCOzs7QUFFbEMsSUFBTUMsNEJBQTRCO0FBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRGtDLENBQWxDO0FBQUEsSUFpQ01DLGtCQUFrQkgseUJBQXlCRSx5QkFBekIsQ0FqQ3hCO0FBQUEsSUFrQ01FLG1CQUFtQkgsMEJBQTBCQyx5QkFBMUIsQ0FsQ3pCOztBQW9DQUcsT0FBT0MsT0FBUCxHQUFpQjtBQUNmSCx5QkFBaUJBLGVBREY7QUFFZkMsMEJBQWtCQSxnQkFGSDtBQUdmRixtQ0FBMkJBO0FBSFosQ0FBakIiLCJmaWxlIjoiY3Vib2lkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZXJ0ZXhVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdmVydGV4Jyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlVmVydGV4SW5kZXhEYXRhLCBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxEYXRhfSA9IHZlcnRleFV0aWxpdGllcztcblxuY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSA9IFtcbi8qXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsIDEsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsIDEsXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsIDEsXG4gICAgICAgIDAuMCwgMS4wLCAxLjAsIDEsXG5cbiAgICAgICAgMC4wLCAwLjAsIDAuMCwgMSxcbiAgICAgICAgMC4wLCAxLjAsIDAuMCwgMSxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCwgMSxcbiAgICAgICAgMS4wLCAwLjAsIDAuMCwgMSxcblxuICAgICAgICAwLjAsIDEuMCwgMC4wLCAxLFxuICAgICAgICAwLjAsIDEuMCwgMS4wLCAxLFxuICAgICAgICAxLjAsIDEuMCwgMS4wLCAxLFxuICAgICAgICAxLjAsIDEuMCwgMC4wLCAxLFxuXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsIDEsXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsIDEsXG4gICAgICAgIDEuMCwgMC4wLCAxLjAsIDEsXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsIDEsXG5cbiAgICAgICAgMS4wLCAwLjAsIDAuMCwgMSxcbiAgICAgICAgMS4wLCAxLjAsIDAuMCwgMSxcbiAgICAgICAgMS4wLCAxLjAsIDEuMCwgMSxcbiAgICAgICAgMS4wLCAwLjAsIDEuMCwgMSxcblxuICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLFxuICAgICAgICAwLjAsIDAuMCwgMS4wLCAxLFxuICAgICAgICAwLjAsIDEuMCwgMS4wLCAxLFxuICAgICAgICAwLjAsIDEuMCwgMC4wLCAxLFxuKi9cbiAgICAgIF0sXG4gICAgICB2ZXJ0ZXhJbmRleERhdGEgPSBjYWxjdWxhdGVWZXJ0ZXhJbmRleERhdGEoaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSksXG4gICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gY2FsY3VsYXRlVmVydGV4Tm9ybWFsRGF0YShpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZlcnRleEluZGV4RGF0YTogdmVydGV4SW5kZXhEYXRhLFxuICB2ZXJ0ZXhOb3JtYWxEYXRhOiB2ZXJ0ZXhOb3JtYWxEYXRhLFxuICBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhOiBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhXG59O1xuIl19