# Jiggle

Makes use of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) to leverage [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API).

Jiggle provides the *programmatic* means to create 3D scenes. It puts an almost opaque layer of abstraction over WebGL so that little or no experience of WebGL is needed. You create scenes declaratively using JSX, adding imperative code as and when needed.

Please bear in mind that this project is still in embryonic form!

## Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/jiggle.git

...and then install the necessary modules with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Getting started

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
Note that in what follows some of the boilerplate code in the actual examples is left out. Also note that if you are compiling the examples from within the cloned repository, it is correct to use the relative require. However, normally you would require the package itself.

To continue, the `canvas` HTML element is encapsulated by an instance of the `Canvas` class and passed to the outermost `Scene` JSX element, which itself contains a `Camera` JSX element and one or more `Part` JSX elements. The `Part` JSX elements contain JSX elements that are actually rendered, in this case a single `ColouredSquare` element:

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
