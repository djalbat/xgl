# Jiggle

Makes use of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) to leverage [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API).

Jiggle provides the *programmatic* means to create 3D scenes. It puts an almost opaque layer of abstraction over WebGL so that little or no experience of WebGL is needed. You create scenes declaratively using JSX, adding imperative code as and when.

Please bear in mind that this project is still in embryonic form!

## Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/jiggle.git

...and then install the necessary modules with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Tutorial

Open the `index.html` file in the project's root directory, which contains links to the various examples. You can compile these yourself, see the section on compiling from source near to the end. This section assumes that you are doing so and will work through the examples, starting with the simplest.

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
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],

      ],
      indexes = [

        [ 0, 1, 2 ],
        [ 2, 3, 0 ],

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

The `coordinates` and `indexes` arguments are the important ones. Jiggle works with facets underneath the hood, which are triangles with a colour or texture together with a normal. Facets are defined by triples of indexes that refer to specific coordinates. In this case there are four coordinates, one for each corner of the square. Two facets have been created in order to make the square. Note that the first and third coordinates are re-used. It is essential that you get the coordinates and indexes right for any canvas element. They are used to populate the WebGL rendering buffers and if they are wrong, inscrutable WebGL errors will likely result.

Before moving on it is worth a moment to study Jiggle's coordinate system. Obviously there are three dimensions, with the first, second and third coordinates of coordinate triples specifying signed distances along the x, y and z axes. The axes are right-handed, meaning that if you let the thumb and first finger of your right hand represent the x and y axes, your second finger will point in the direction of the z axis. Facets are also right handed, which means that if you let the fingers of your right hand curl around to represent the coordinates of each facet, your thumb will point in the direction of its normal. In this case your thumb will point back towards the camera. Note that the indexes for the two facets of the square are chosen so that the normals of each point in the same direction.

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

Masking is something specific to Jiggle, it is not part of WebGL. A screenshot of the masking example is better than words:

![Masked cube](https://github.com/djalbat/Jiggle/blob/master/assets/masked_cube.jpg)

Here a cube has been masked by a cube that it contains, that has itself been masked by a cube that it contains. The listing below is an abridged version of the example, with only two nested cubes rather than three:

```js
const { Canvas, Scene, Mask, Part, Camera } = jiggle;

const canvas = new Canvas();

const maskingExample = () => {
  const SmallCube =

          <Cube size={[ 1/4, 1/4, 1/4 ]} />

        ,
        smallCubeMask =

          <Mask>
            <SmallCube />
          </Mask>

        ,
        MediumCube =

          <Cube size={[ 1/2, 1/2, 1/2 ]} mask={smallCubeMask} />

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
Note that the cubes are created directly with JSX elements. If you have no need of the `properties` argument, you can use this abbreviated form that does away with a function.

Here is the scene that results, with the facets coloured randomly so that each is visible:

![Masked cube facets](https://github.com/djalbat/Jiggle/blob/master/assets/masked_cube_facets.jpg)

The small-sized cube is used to make the mask for the medium-sized cube. Each facet of the small-sized cube forms a prism that cuts through each facet of the medium-sized cube. In practice, however, most of the prisms formed from the masking element do not intersect any prism in the masked element and are quickly discarded. Nonetheless masking is computationally expensive and less than optimal. Masking the original two facets of the masked cube results in sixteen facets when half that number would be optimal. It is a cube of this form, with each face already masked, that masks the large-sized cube in the full example.

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
As well as building the Jiggle library itself, this will build the examples. The source code for the examples can be found in the `es6/example.js` file and in the files and sub-directories in the `es6/example` directory.
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
