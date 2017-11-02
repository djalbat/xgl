'use strict';

require('../jiggle');

const Facet = require('../facet'),
      FacetInXYPlane = require('../facetInXYPlane'),
      VerticalLineInXYPlane = require('../verticalLineInXYPlane');

const facets = () => {
  const facetVertices = [
          [ 0, 0, 0 ], ///[ 0, 0, 2 ],
          [ 2, 0, 0 ], ///[ 1, 0, 1 ],
          [ 0, 2, 0 ], ///[ 0, 1, 1 ],
        ],
        maskFacetVertices = [
          [ 0, 0, 1 ],  ///[ 0.5, 0, 1 ],
          [ 1, 0, 0 ],  ///[ 0.5, 0, 2 ],
          [ 0, 1, 0 ],  ///[ 0.5, 1, 1 ],
        ],
        facet = Facet.fromVertices(facetVertices),
        maskFacet = Facet.fromVertices(maskFacetVertices),
        facetInXYPlane = FacetInXYPlane.fromFacet(facet);

  const rotationQuaternion = facetInXYPlane.getRotationQuaternion(),
        translation = facetInXYPlane.getTranslation();

  maskFacet.rotate(rotationQuaternion);
  maskFacet.translate(translation);

  const lineInXYPlane = maskFacet.getLineInXYPlane(),
        verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
        rotationMatrix = verticalLineInXYPlane.getRotationMatrix();

  facetInXYPlane.rotate(rotationMatrix);

  facetInXYPlane.split(verticalLineInXYPlane);

};

module.exports = facets;
