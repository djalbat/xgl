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

Launch the `index.html` file in the project's root directory, which contains links to the various examples. You can compile these yourself, see the section on compiling from source near to the end. This section assumes that you are doing this and will work through some of the examples from scratch, starting with the simplest.

### The simple example

In order to build your own 3D scene you need a `canvas` HTML element:

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
Note that in what follows some of the boilerplate code in the actual examples is left out of the listings. Also note that if you are compiling the examples from within the cloned repository, it is correct to use the relative require. Normally you would require the package itself, however.

To continue, the `canvas` HTML element is encapsulated by an instance of the `Canvas` class and passed as an attribute to the outermost `Scene` JSX element, which itself contains a `Camera` JSX element and one or more `Part` JSX elements. The `Part` JSX elements contain JSX elements that are rendered on the canvas, called canvas elements, in this case a single `ColouredSquare` element:

```js
const canvas = new Canvas();

const simpleExample = () =>

  <Scene canvas={canvas}>
    <Part>
      <ColouredSquare />
    </Part>
    <Camera />
  </Scene>

;
```
### Creating canvas elements

Whilst the `Scene`, `Camera` and `Part` JSX elements are built in, you have to create the canvas elements. Here is the implementation of the `ColouredSquare` element:

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
The `ColouredCanvasElement` class is provided and all you have to do, initially at least, is to extend it, adding your own `fromProperties()` static method and passing the requisite coordinates, indexes and colour to the `fromProperties()` static method of the parent class. Note that the `ColouredSquare` class itself is passed as the first argument. Also note that a `colour` variable is extracted from the `properties` argument, including a default. This allows you to set a `colour` attribute on the corresponding JSX elements.

The `coordinates` and `indexes` arguments are the important ones. Jiggle works with facets underneath the hood, which are triangles with a colour or texture together with a normal. Facets are defined by triples of indexes that refer to specific coordinates. In this case there are four coordinates, one for each corner of the square. Two facets have been created in order to make the square. Note that the first and third coordinates are re-used. It is essential that you get the coordinates and indexes right for any canvas element. They are used to populate the WebGL rendering buffers and if they are wrong, inscrutable WebGL errors will likely result.

Before moving on it is worth a moment to study Jiggle's coordinate system. Obviously there are three dimensions, with the first, second and third coordinates of coordinate triples specifying signed distances along the x, y and z axes. The axes are right-handed, meaning that if you let the thumb and first finger of your right hand represent the x and y axes, your second finger will point in the direction of the z axis. Facets are also right handed, which means that if you let the fingers of your right hand curl around to represent the coordinates of each facet, your thumb will point in the direction of its normal. In this case your thumb will point back towards the camera. Note that the indexes for the two facets of the square are chosen so that the normals of each point in the same direction.

### The cube example

Because creating more than a handful of facets can be problematic, it is recommended that you build up complex canvas elements using simpler ones rather than increasing numbers of coordinates and indexes. There is little or no overhead in doing so, in particular the rendered scene will not run any slower once the WebGL buffers have been populated. This example has a cube canvas element built up from face elements rather than a dozen facets:

```js
const defaultC0lour = [ 1, 1, 0 ];

class Cube extends CanvasElement {
  childElements(properties) {
    const { colour = defaultC0lour } = properties;

    return ([

      <Face colour={colour} rotations={[   0,   0, 0 ]} />,
      <Face colour={colour} rotations={[ +90,   0, 0 ]} />,
      <Face colour={colour} rotations={[   0, +90, 0 ]} />,

      <Face colour={colour} rotations={[ 180,   0, 0 ]} />,
      <Face colour={colour} rotations={[ -90,   0, 0 ]} />,
      <Face colour={colour} rotations={[   0, -90, 0 ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Cube, properties); }
}

module.exports = Cube;
```
There are a couple of small amendments to the coloured square. The coordinates have been adjusted to make it easier to rotate and a colour variable has been extracted from the `properties` argument in the `fromProperties()` static method so that a `colour` attribute can be added to the JSX elements:

```js
const coordinates = [

        [ -0.5, -0.5, +0.5 ],
        [ +0.5, -0.5, +0.5 ],
        [ +0.5, +0.5, +0.5 ],
        [ -0.5, +0.5, +0.5 ],

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
The compound `Cube` element need only extend the `CanvasElement` class and provide its own `fromProperties()` static method. The `childElements()` method specifies the six coloured squares that are needed:

```js
const { CanvasElement } = jiggle;

class Cube extends CanvasElement {
  childElements(properties) {
    return ([

      <ColouredSquare colour={[ 1, 0, 0 ]} rotations={[   0,   0, 0 ]} />,
      <ColouredSquare colour={[ 0, 1, 0 ]} rotations={[ +90,   0, 0 ]} />,
      <ColouredSquare colour={[ 0, 0, 1 ]} rotations={[   0, +90, 0 ]} />,

      <ColouredSquare colour={[ 0, 1, 1 ]} rotations={[ 180,   0, 0 ]} />,
      <ColouredSquare colour={[ 1, 0, 1 ]} rotations={[ -90,   0, 0 ]} />,
      <ColouredSquare colour={[ 1, 1, 0 ]} rotations={[   0, -90, 0 ]} />,

    ]);
  }

  static fromProperties(properties) { return CanvasElement.fromProperties(Cube, properties); }
}
```
Rotations are specified as triples giving three rotations around the x, y and z axes, respectively. Rotations are right handed, which means that if you point the thumb of your right hand in the direction of the chosen axis, your curled fingers give the direction of the rotation about it. Rotations can be hard to work out, particularly when they are compounded. Note that the rotations here are chosen so that the normals of each face of the cube are directed outwards.

### Masking





Something like the following should appear:

![Masked cube](https://github.com/djalbat/Jiggle/blob/master/assets/masked_cube.jpg)

Here a cube is masked by a cube that it contains, that is itself masked by a cube that it contains. Masking could be considered as the only functionality that Jiggle provides over and above WebGL, by the way. Here is the JSX:
```js
const example = () =>

  <Scene canvas={canvas}>
    <Part canvas={canvas}>
      <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
        <Mask>
          <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
            <Mask>
              <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
            </Mask>
          </ColouredCuboid>
        </Mask>
      </ColouredCuboid>
    </Part>
    <Camera canvas={canvas} initialDistance={5} initialOffset={[ 0, 0, 0 ]} />
  </Scene>

;
```
### Vertices, facets and elements

Jiggle's basic drawing primitive is a facet, which is essentially a triangle with a normal. The cube above comprises twelve facets, for example, two for each side. If masked with another cube


Masking can cause facets to be subdivided many times and should be used sparingly for that reason. Masking a cube just once with another cube results in around a hundred facets, for example:

![Masked cube facets](https://github.com/djalbat/Jiggle/blob/master/assets/masked_cube_facets.jpg)


## Usage

### Creating a scene

Jiggle also provides a `Canvas` class that represents an HTML canvas. Putting a scene together...

### Using Jiggles to preload an image map for textures

If you are familiar with WebGL, note that with Jiggle you can and should re-use vertices. To define a cuboid, for example, only the minimum eight vertices need to be given, with each being used for three sides. New vertices are created to be added to the WebGL buffer at the appropriate time. If you are not familiar with WebGL, don't worry about this. Just define vertices as you would expect to, and the indexes to reference them, most likely multiple times if the vertices are shared between edges. Here are the default vertices and indexes for a cuboid, for example:  
   
```js
const defaultVertices = [
        
        [ 0, 0, 0 ],
        [ 1, 0, 0 ],
        [ 1, 1, 0 ],
        [ 0, 1, 0 ],
    
        [ 0, 0, 1 ],
        [ 1, 0, 1 ],
        [ 1, 1, 1 ],
        [ 0, 1, 1 ],
    
      ],
      defaultIndexes = [
    
        [ 1, 0, 3 ],
        [ 3, 2, 1 ],
    
        [ 4, 5, 6 ],
        [ 6, 7, 4 ],
    
        [ 0, 4, 7 ],
        [ 7, 3, 0 ],
    
        [ 5, 1, 2 ],
        [ 2, 6, 5 ],
    
        [ 7, 6, 2 ],
        [ 2, 3, 7 ],
    
        [ 4, 0, 1 ],
        [ 1, 5, 4 ],
    
      ], ...   
```
          
Note that array of indexes is partitioned into triples, with each triple corresponding to a facet. There are two facets for each side of the cuboid. Again, if you are familiar with WebGL, note that there is no need to define normals explicitly. Instead each facet has a normal which is calculated and then duplicated for each of the facet's vertices at the appropriate time. Again if you are not familiar with WebGL, don't worry about this. In either case you may have to play around with the order of triples that define each facet in order to get the normal to face the right way.
    
## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
As well as building the Jiggle library itself, this will build the examples. The source code for the examples can be found in the `es6/example.js` file and the files in the `es6/example` directory.
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
