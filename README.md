# XGL

Makes use of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) to leverage [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API).

XGL provides the *programmatic* means to create 3D scenes. It puts an almost opaque layer of abstraction over WebGL so that little or no experience of WebGL is needed. You create scenes declaratively using JSX, adding imperative code as and when.

## Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/xgl.git

...and then install the necessary modules with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Tutorial

The examples are available via a small [Express](https://expressjs.com/) application that makes use of [XGL Server](https://github.com/djalbat/xgl-server). Once the dependencies are installed, this can be launched with the following command from the root of the repository:

```
node ./bin/main.js
```

The index page for the examples will then be available at http://localhost:8000. You can compile the examples yourself, see the section on compiling from source near to the end. This section assumes that you are doing so and will work through each of them, starting with the simplest.

### The simple example

In order to create a scene you need a `canvas` HTML element:

```html
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

```css
canvas {
  height: 100vh;
  width: 100vw;
  display: block;
}
```
Note that in what follows most of the boilerplate code has been left out of the listings. Also note that if you are compiling the examples from within the cloned repository, it is correct to use the relative require. Normally you would require the package itself, however.

To continue, the `canvas` HTML element is encapsulated by an instance of the `Canvas` class and passed as an attribute to the outermost `Scene` JSX element, which itself contains a `Camera` JSX element together with one or more `Part` JSX elements. The `Part` JSX elements contain the JSX elements that are actually rendered on the canvas, called canvas elements, in this case a single `ColouredSquare` element:

```js
const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <ColouredSquare colour={[ 0, 0, 1 ]} />
    </Part>
    <Camera />
  </Scene>

;
```
Whilst the `Scene`, `Camera` and `Part` JSX elements are built in, you have to create the canvas elements:

```js
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

```js
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

```js
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

Masking is something specific to XGL, it is not part of WebGL. A screenshot of the masking example is better than words:

![Masked cube](https://github.com/djalbat/XGL/blob/master/assets/masked_cube.jpg)

Here a cube has been masked by a cube that it contains, that has itself been masked by a cube that it contains. The listing below is an abridged version of the example, with only two nested cubes rather than three:

```js
const { Canvas, Scene, Mask, Part, Camera } = xgl;

const canvas = new Canvas();

const maskingExample = () => {
  const SmallCube =

          <Cube scale={[ 1/4, 1/4, 1/4 ]} />

        ,
        smallCubeMask =

          <Mask>
            <SmallCube />
          </Mask>

        ,
        MediumCube =

          <Cube scale={[ 1/2, 1/2, 1/2 ]} mask={smallCubeMask} />

        ;

  return (

    <Scene canvas={canvas}>
      <Part>
        <MediumCube />
      </Part>
      <Camera />
    </Scene>

  );
};
```
Note that the cubes are created directly with JSX elements. If you have no need of the `properties` argument, you can use this abbreviated form, doing away with a function call.

Here is the scene that results, with the facets coloured randomly so that each is visible:

![Masked cube facets](https://github.com/djalbat/XGL/blob/master/assets/masked_cube_facets.jpg)

The small-sized cube is used to make the mask for the medium-sized cube. Each facet of the small-sized cube forms a prism that cuts through each facet of the medium-sized cube. In practice, however, most of the prisms formed from the masking element do not intersect any prism in the masked element and are quickly discarded. Nonetheless masking is computationally expensive and less than optimal. Masking the original two facets of the masked cube results in sixteen facets when half that number would be optimal. It is a cube of this form, with each face already masked, that masks the large-sized cube in the full example.

### The pyramid example

This example utilities the image map provided by the small Express application, available at http://localhost:8000/imageMap. If you inspect the example HTML, you will also see that the JSON describing the image map has been embedded within:

```
<script>

  window.__configuration__ = {
    imageMapURI: '/imageMap',
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
As explained in the XGL Server tutorial, assigning a `__configuration__` property to the global `window` object makes its values accessible to the bundled application running in the browser. With the image map URI and corresponding JSON to hand, the pyramid example can load the image map and pass both that and the JSON to any `Part` element that uses textures:

```js
const pyramidExample = () => {
  preloadImageMap((imageMap) => {
    const { imageMapJSON } = configuration;

    return (

      <Scene canvas={canvas}>
        <Part imageMap={imageMap} imageMapJSON={imageMapJSON}>
          <Pyramid />
        </Part>
        <Camera />
      </Scene>

    );
  });
};

module.exports = pyramidExample;

const preloadImageMap = (callback) => {
  const { imageMapURI } = configuration,
        imageMap = new Image(),	///
        src = imageMapURI;  ///

  Object.assign(imageMap, {
    src,
    onload
  });

  function onload(event) {
    callback(imageMap);
  }
}
```
The `Pyramid` element is a compound element consisting of four sides, three of which are rotated around the y-axis as you would expect:

```js
const Pyramid = (properties) => [

  <Side />,
  <Side rotations={[ 0,  90, 0 ]} />,
  <Side rotations={[ 0, 180, 0 ]} />,
  <Side rotations={[ 0, 270, 0 ]} />,

];
```
Each side consists of a textured triangle:

```js
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

```js
const Side = (properties) =>

  <TexturedTriangle scale={[ 1, 1/Math.sqrt(2), 1 ]} position={[ -0.5, 0, 0.5 ]} rotations={[ -45, 0, 0 ]} />

;
```
...meaning that the sides themselves need only be rotated about the y axis to form the pyramid, as already shown.

### The tiling example

This example also makes use of images, but there are loaded individually rather than being parts of an image map. The `imageNames` and `imageDirectoryURI` variables are again made available by way of the configuration, allowing the images to be loaded sequentially:

```js
const necessary = require('necessary');

const { asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities;

function preloadImages(imageNames, imageDirectoryURI, callback) {
  const images = [],
        context = {
          images
        };

  forEach(imageNames, (imageName, next, done, context) => {
    const image = new Image(),
          src = `${imageDirectoryURI}/${imageName}`;

    Object.assign(image, {
      src,
      onload: (event) => {
        images.push(image);

        next();
      }
    });
  }, done, context);

  function done() {
    const { images } = context;

    callback(images);
  }
}
```
Now the resultant `images` and `imageNames` are passed to the `Part` element and otherwise, nothing else effectively has to change from the previous example:

```js
const tilingExample = () => {
  const { imageNames, imageDirectoryURI } = configuration;

  preloadImages(imageNames, imageDirectoryURI, (images) => {
    return (

      <Scene canvas={canvas}>
        <Part images={images} imageNames={imageNames} imageTiling={true} >
          <TexturedQuadrangle position={[ 0, 0, 0 ]} imageName={'paving.jpg'} mask={mask} />
          <TexturedQuadrangle position={[ -0.5, -0.5, -0.5 ]} imageName={'floorboards.jpg'} mask={mask} />
        </Part>
        <Camera />
      </Scene>

    );
  });
};
```
One advantage of loading images individually is that since whole images are mapped to textures rather than just part of an image, you can tile the textures. If you wish to do so, you must add a boolean `imageTiling` attribute to the `Part` element. Additionally, you **must** ensure that the length of the sides of the images are powers fo two.

In order to tile textures, you simply have to extend the texture coordinates past the usual [ 0, 1 ] range, for example:

```js
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
A mask has also been included in this example, to demonstrate that masking works with textures without further ado:

<img src="https://github.com/djalbat/XGL/blob/master/assets/tiling_example.png" width="640" height="auto">

Note that the floorboards texture works well whereas the edges of paving texture are out of alignment. To find textures that are suitable for tiling, type something like 'floorboards seamless texture' into Google images, rather than just 'paving texture'.

It is reasonable to ask, if loading images directly allows them to be tiled and at the same time does away with the need for an image map, why choose the latter? The reason is that there is limit on the number images that can be passed to a `Part` element. This is not a drawback of XGL but WebGL, or rather OpenGL. The number of images that texture renderers must support is only 8, although admittedly on modern systems this number is likely to be in the region of hundreds. Also bear in mind that individual images all have to be loaded over a network and this may become problematic for large numbers of them. Since the work of creating image maps is done for you, image maps are recommended unless you need tiling.

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
As well as building the XGL library itself, this will build the examples. The source code for the examples can be found in the `es6/example.js` file and in the files and sub-directories in the `es6/example` directory.
    
## Acknowledgements

* The primitive vector and matrix functions are taken from Brandon Jones' [gl-matrix](https://github.com/toji/gl-matrix).

## Contact

- james.smith@djalbat.com
- http://djalbat.com
