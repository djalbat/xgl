"use strict";

const xgl = require("../../index"); ///

const Cube = require("./element/cube");

const { Canvas, Scene, Part, DesignCamera } = xgl;

const canvas = new Canvas();

const cubeExample = () =>

	<Scene canvas={canvas}>
		<Part>
			<Cube colour={[ 0, 1, 0 ]} />
		</Part>
		<DesignCamera />
	</Scene>

;

module.exports = cubeExample;
