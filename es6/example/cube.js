'use strict';

const jiggle = require('../../index');

const Cube = require('./element/cube');

const { Canvas, Scene, Part, Camera } = jiggle;

const canvas = new Canvas();

const cubeExample = () =>

	<Scene canvas={canvas}>
		<Part>
			<Cube colour={[ 0, 1, 0 ]} />
		</Part>
		<Camera />
	</Scene>

;

module.exports = cubeExample;
