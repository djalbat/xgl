# XGL

Makes use of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) to leverage [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API).

XGL provides the *programmatic* means to create 3D scenes. It puts an almost opaque layer of abstraction over WebGL so that little or no experience of WebGL is needed. You create scenes declaratively using JSX, adding imperative code as and when.

* [Installation](#installation)
* [Examples](#examples)
  * [The simple example](#the-simple-example)
  * [The cube example](#the-cube-example)
  * [The masking example](#the-masking-example)
  * [The pyramid example](#the-pyramid-example)
  * [The tiling example](#the-tiling-example)
* [Preload utilities](#preload-utilities)
* [Cameras](#cameras)
* [Building](#building)
* [Acknowledgements](#acknowledgements)

## Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/xgl.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Examples

The examples are available via a small [Express](https://expressjs.com/) application that makes use of [XGL Server](https://github.com/djalbat/xgl-server). Once the dependencies are installed, this can be launched with the following command from the root of the repository:

```
npm start
```

The index page for the examples will then be available at http://localhost:8888. You can compile the examples yourself, see the section on building near to the end.

### The simple example

In order to create a scene you need a `canvas` HTML element:

```
<html>
  <head>
    <link href="css/example.css" rel="stylesheet" type="text/css" media="all">
  </head>
  <body>
    <canvas></canvas>
    <script src="example.js"> </script>
  </body>
</html>
```

You could style the `canvas` HTML element to take up the entire viewport, at least to begin with:

```
canvas {
  height: 100vh;
  width: 100vw;
  display: block;
}
```
Note that in what follows most of the boilerplate code has been left out of the listings. Also note that if you are compiling the examples from within the cloned repository, it is correct to use the relative require. Normally you would require the package itself, however.

To continue, the `canvas` HTML element is encapsulated by an instance of the `Canvas` class and passed as an attribute to the outermost `Scene` JSX element, which itself contains a `Camera` JSX element together with one or more `Part` JSX elements. The `Part` JSX elements contain the JSX elements that are actually rendered on the canvas, called canvas elements, in this case a single `ColouredSquare` element:

```
const simpleExample = () => {
  const canvas = new Canvas();

  return (

    <Scene canvas={canvas}>
      <Part>
        <ColouredSquare colour={[ 0, 0, 1 ]} />
      </Part>
      <DesignCamera/>
    </Scene>

  );
};
```
Whilst the `Scene`, `Camera` and `Part` JSX elements are built in, you have to create the canvas elements:

```
const coordinates = [

        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 0, 1, 0 ],
        [ 1, 1, 0 ],

      ],
      indexes = [

        [ 0, 1, 3 ],
        [ 3, 2, 0 ],

      ],
      defaultColour = [ 1, 0, 0 ];

class ColouredSquare extends ColouredCanvasElement {
  static fromProperties(properties) {
    const { colour = defaultColour } = properties,
          colouredSquare = ColouredCanvasElement.fromProperties(ColouredSquare, properties, coordinates, indexes, colour);

    return colouredSquare;
  }
}
```
The `ColouredCanvasElement` class is provided and all you have to do is to extend it, adding your own `fromProperties()` static method and passing the requisite coordinates, indexes and colour variables along with the `properties` argument to the `fromProperties()` static method of the parent class. Note that the `ColouredSquare` class itself is also passed as the first argument. Also note that a `colour` variable is extracted from the `properties` argument, allowing a `colour` attribute on the corresponding JSX elements. If none is provided, a default is used.

The `coordinates` and `indexes` arguments are the important ones. Underneath the hood, XGL works with facets, which are essentially triangles with a colour or texture together with a normal. Facets are defined by triples of indexes that refer to specific coordinates. In this case there are four coordinates, one for each corner of the square. Two facets have been created in order to make the square. Note that the first and last coordinates are re-used. It is essential that you get the coordinates and indexes right for any canvas element. They are used to populate the WebGL rendering buffers and if they are wrong, inscrutable WebGL errors will likely result.

Before moving on it is worth a moment to study XGL's coordinate system. Obviously there are three dimensions, with the first, second and third coordinates of coordinate triples specifying signed distances along the x, y and z axes. The axes are right-handed, meaning that if you let the thumb and first finger of your right hand represent the x and y axes, your second finger will point in the direction of the z axis. Facets are also right handed, which means that if you let the fingers of your right hand curl around to represent the coordinates of each facet, your thumb will point in the direction of its normal. In this case your thumb will point back towards the camera. Note that the indexes for the two facets of the square are chosen so that the normals of each point in the same direction.

### The cube example

Because creating more than a handful of facets can be problematic, it is recommended that you create complex canvas elements as composites of simpler ones rather than increasing the number of coordinates and indexes. There is effectively no overhead when creating composite elements, in particular the rendered scene will not run any more slowly. In this example a `Cube` element is created which is composed of six child `Face` elements rather than a dozen facets. A pure function is used, so there is no need to use a class:

```
const defaultC0lour = [ 1, 1, 0 ];

const Cube = (properties) => {
  const { colour = defaultC0lour } = properties;

  return ([

    <Face colour={colour} rotations={[   0,   0, 0 ]} />,
    <Face colour={colour} rotations={[ +90,   0, 0 ]} />,
    <Face colour={colour} rotations={[   0, +90, 0 ]} />,

    <Face colour={colour} rotations={[ 180,   0, 0 ]} />,
    <Face colour={colour} rotations={[ -90,   0, 0 ]} />,
    <Face colour={colour} rotations={[   0, -90, 0 ]} />,

  ]);
};
```
The `Face` elements themselves also result from a pure function. Here the coordinates of the `ColouredSquare` element are adjusted to make it simpler to rotate:

```
const Face = (properties) => {
  const { colour } = properties;

  return (

    <ColouredSquare colour={colour} position={[ -0.5, -0.5, +0.5 ]} />

  );
};
```
Note that the previous `Cube()` function returned an array of child elements whereas the `Face{}` function returns just one. In the latter cases, single elements are coerced into arrays automatically.

Rotations are specified as triples giving three rotations around the x, y and z axes, respectively. Rotations are right handed, which means that if you point the thumb of your right hand in the direction of the chosen axis, your curled fingers give the direction of the rotation about it. Rotations can be hard to work out, particularly when they are compounded. Note that the rotations here are chosen so that the normals of each face of the cube are directed outwards.

### The masking example

Masking is something specific to XGL, it is not part of WebGL.

![Masked cube](https://github.com/djalbat/XGL/blob/master/assets/masked_cube.jpg)

Here a cube has been masked by a cube that has itself been masked:

```
const maskingExample = () => {
  const canvas = new Canvas();

  return (

    <Scene canvas={canvas}>
      <Mask reference="quarterCube">
        <Cube scale={[ 1/4, 1/4, 1/4 ]} />
      </Mask>
      <Mask reference="halfCube">
        <Cube scale={[ 1/2, 1/2, 1/2 ]} maskReference="quarterCube"/>
      </Mask>
      <Part>
        <Cube maskReference="halfCube" />
      </Part>
      <DesignCamera/>
    </Scene>

  );
};
```

Here is the scene that results, with the facets coloured randomly so that each is visible:

![Masked cube facets](https://github.com/djalbat/XGL/blob/master/assets/masked_cube_facets.jpg)

The quarter sized cube is used to make the mask for the half sized cube which is in turn used to mask the unit-sized cube. Each facet of the small-sized cube forms a prism that cuts through each facet of the medium-sized cube. In practice, however, most of the prisms formed from the masking element do not intersect any prism in the masked element and are quickly discarded. Nonetheless masking is computationally expensive and less than optimal. Masking the original two facets of the masked cube results in sixteen facets when half that number would be optimal. It is a cube of this form, with each face already masked, that masks the large-sized cube in the full example.

### The pyramid example

This example utilities the image map provided by XGL server. If you inspect the example HTML, you will also see that the JSON describing the image map has been embedded within:

```
<script>

  window.__configuration__ = {
    imageMapURI: "/imageMap",
    imageMapJSON: {

      ...

      "stripes.jpg": {
        "left": 0.501953125,
        "bottom": 0.501953125,
        "width": 0.49609375,
        "height": 0.49609375
      }
    }
  };

</script>
```
As explained in the XGL Server usage section, assigning a `__configuration__` property to the global `window` object makes its values accessible to the bundled application running in the browser. With the image map URI and corresponding JSON to hand, the pyramid example can load the image map and pass both that and the JSON to any `Part` element that uses textures:

```
const pyramidExample = () => {
  preloadImageMap((imageMap, imageMapJSON) => {
    const canvas = new Canvas();

    return (

      <Scene canvas={canvas}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <Pyramid/>
        </Part>
        <GamingCamera/>
      </Scene>

    );
  });
};
```
The `Pyramid` element is a compound element consisting of four sides, three of which are rotated around the y-axis as you would expect:

```
const Pyramid = (properties) => [

  <Side/>,
  <Side rotations={[ 0,  90, 0 ]} />,
  <Side rotations={[ 0, 180, 0 ]} />,
  <Side rotations={[ 0, 270, 0 ]} />,

];
```
Each side consists of a textured triangle:

```
const coordinates = [

        [   0, 0, 0 ],
        [   1, 0, 0 ],
        [ 0.5, 1, 0 ],

      ],
      indexes = [

        [ 0, 1, 2 ],

      ],
      defaultImageName = "stripes.jpg",
      defaultTextureCoordinates = [

        [ [ 0, 0 ], [ 1, 0 ], [ 0.5, 1 ] ],

      ];

class TexturedTriangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedTriangle = TexturedCanvasElement.fromProperties(TexturedTriangle, properties, coordinates, indexes, imageName, textureCoordinates);

    return texturedTriangle;
  }
}
```
This extends the `TexturedCanvasElement` class, which takes an image name and texture coordinates rather than a colour.

The coordinates and indexes define a triangle with the third vertex horizontally half way between the first and second. Therefore the part of the square texture that is utilised should match this:

<img src="https://github.com/djalbat/XGL/blob/master/assets/texture_map_centre.png" width="320" height="160">

However, if we alter the texture coordinates thus...

```
[ 0, 0 ], [ 1, 0 ], [ 0, 1 ]

```
...then the leftmost corner of the texture is mapped to the topmost vertex of the triangle:

<img src="https://github.com/djalbat/XGL/blob/master/assets/texture_map_left.png" width="320" height="160">

On the other hand, if we alter the texture coordinates thus...

```
[ 0, 0 ], [ 1, 0 ], [ 1, 1 ]
```
...then the it is the rightmost corner of the texture that is mapped to the topmost vertex of the triangle:

<img src="https://github.com/djalbat/XGL/blob/master/assets/texture_map_right.png" width="320" height="160">

The textured triangles themselves are adjusted to make the sides...

```
const Side = (properties) =>

  <TexturedTriangle scale={[ 1, 1/Math.sqrt(2), 1 ]} position={[ -0.5, 0, 0.5 ]} rotations={[ -45, 0, 0 ]} />

;
```
...meaning that the sides themselves need only be rotated about the y axis to form the pyramid, as already shown.

### The tiling example

This example also makes use of images, but there are loaded individually rather than being parts of an image map. See the preload utilities section below for more details. Nothing else effectively has to change from the previous example:

```
const tilingExample = () => {
  preloadImages((images, imageNames) => {
    const canvas = new Canvas();

    return (

      <Scene canvas={canvas}>
        <Mask reference="mask">
          <ColouredSquare scale={[ 0.25, 0.25, 1 ]} position={[ 0.125, 0.125, 0 ]} />
        </Mask>
        <Part images={images} imageNames={imageNames} imageTiling >
          <TexturedQuadrangle position={[ 0, 0, 0 ]} imageName="floorboards.jpg" maskReference="mask" />
          <TexturedQuadrangle position={[ -0.5, -0.5, -0.5 ]} imageName="paving.jpg" maskReference="mask" />
        </Part>
        <DesignCamera/>
      </Scene>

    );
  });
};
```
One advantage of loading images individually is that since whole images are mapped to textures rather than just part of an image, you can tile the textures. If you wish to do so, you must add a boolean `imageTiling` attribute to the `Part` element. Additionally, you **must** ensure that the length of the sides of the images are powers fo two.

In order to tile textures, you simply have to extend the texture coordinates past the usual [ 0, 1 ] range, for example:

```
const coordinates = ...,
      indexes = ...,
      defaultImageName = ...,
      defaultTextureCoordinates = [

        [ [ 0, 0 ], [ 2, 0 ], [ 2, 2 ] ],
        [ [ 2, 2 ], [ 0, 2 ], [ 0, 0 ] ],

      ];

class TexturedQuadrangle extends TexturedCanvasElement {
  static fromProperties(properties) {
    const { imageName = defaultImageName, textureCoordinates = defaultTextureCoordinates } = properties,
          texturedQuadrangle = TexturedCanvasElement.fromProperties(TexturedQuadrangle, properties, coordinates, indexes, imageName, textureCoordinates);

    return texturedQuadrangle;
  }
}
```
A mask has also been included in this example. Masking works with tiling without fuss:

<img src="https://github.com/djalbat/XGL/blob/master/assets/tiling_example.png" width="480" height="auto">

Note that the floorboards texture works well whereas the edges of paving texture are out of alignment. To find textures that are suitable for tiling, type something like "seamless floorboards texture" into Google images, rather than just "paving texture".

It is reasonable to ask, if loading images directly allows them to be tiled and at the same time does away with the need for an image map, why choose the latter? The reason is that there is limit on the number images that can be passed to a `Part` element. This is not a drawback of XGL but WebGL, or rather OpenGL. The number of images that texture renderers must support is only 8, although admittedly on modern systems this number is likely to be in the region of hundreds. Also bear in mind that individual images all have to be loaded over a network and this may become problematic for large numbers of them. Since the work of creating image maps is done for you, image maps are recommended unless you need tiling.

## Preload utilities

Two functions are made available to help you preload images for use by the texture renderers. The first, `preloadImages()`, preloads images one at a time and provides them, along with their names, via a callback. The images and image names can then be passed to parts, the child elements elements of which can make use of the images by specifying image names, as in the tiling example explained above:

```
preloadImages((images, imageNames) => {
  const canvas = new Canvas();

  return (
    <Scene canvas={canvas}>
      <Part images={images} imageNames={imageNames} imageTiling >
        <TexturedQuadrangle ... imageName="paving.jpg" />
        <TexturedQuadrangle ... imageName="floorboards.jpg" />
      </Part>
      <DesignCamera/>
    </Scene>
  );

});
```

In fact the array of image names must be passed to the function by was of an optional `configuration` argument coming after the callback argument, in a similar fashion to the `preloadImageImageMap()` function explained next. This can also optionally supply a `host` argument and must supply an `imageDirectoryURI` argument. Ordinarily these would be supplied from the server side by way of a `script` element, thus:

```
<script>

  window.__configuration__ = {

    host: "...",
    imageNames: [ ...],
    imageDirectoryURI: "..."

  }

</script>
```

If you define such an element with the `__configuration__` property set in this way then there is no need to pass any further arguments to the function.

It was mentioned in the tiling example but is worth repeating here that if you wish to tile textures then you have load the images individually. Tiling images extract from an image map leads to unsatisfactory results.

The `preloadImageImageMap() function` works in tandem with XGL server, as explained in the pyramid example explained above. Again an optional `host` can be provided in an optional `configuration` argument that must include `imageMapURI` and `imageMapJSON` arguments. The `imageMap` and `imageMapJSON` arguments passed by way of the callback function are then passed to any part that needs to make use of them.

```
const pyramidExample = () => {
  preloadImageMap((imageMap, imageMapJSON) => {
    const canvas = new Canvas();

    return (

      <Scene canvas={canvas}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <Pyramid/>
        </Part>
        <GamingCamera/>
      </Scene>

    );
  });
};
```

## Cameras

Two cameras come as standard, the design camera and the gaming camera.

The design camera points at the same place, with mouse movements moving it toward, away from or around that place when the mouse button is held down. If you hold the shift key down as well, you can alter the offset, namely the place at which it points. You can set the initial distance, angles and offsets by way of attributes:

```
<Scene ... >
  ...
  <DesignCamera initialDistance={10} initialAngles={[ 225, 22.5 ]} initialOffsets={[ -10, 0, 10 ]} />
</Scene>
```
Here the initial angles are chosen so each of the three axes points away from the camera. The offsets re-position the scene as a whole.

The gaming camera allows you to freely move around around a scene. If you hold the mouse down you can look around with mouse movements. Holding the shift key down at the same time allows you to pan, whilst the mouse wheel allows you to move backwards and forwards. You can set the initial position and angles by way of attributes:

```
<Scene ... >
  ...
  <GamingCamera initialPosition={[ 0, 0, 10 ]} initialAngles={[ 45, 0 ]} />
</Scene>
```
You can create your own cameras by extending the `Camera` class, with the source for the gaming and design cameras being a good place to start.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
If you have an example running in a browser, it will be reloaded should make changes to the source code.
    
## Acknowledgements

* The primitive vector and matrix functions are taken from Brandon Jones' [gl-matrix](https://github.com/toji/gl-matrix).

## Contact

- james.smith@djalbat.com
