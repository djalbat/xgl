# Jiggle

Makes use of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) to leverage [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API).

Jiggle provides the *programmatic* means to compose 3D scenes. It places an almost opaque layer of abstraction on top of WebGL so that no experience of WebGL is needed. Since it is based on JSX, you can compose scenes declaratively, adding imperative code as and when needed. A few basic 3D primitives are provided out of the box and there are instructions below to show you how to create more.

Please bear in mind that this project is still in an embryonic state!

## Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Jiggle.git

...and then install the necessary modules with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Example

Launch the example/index.html file. There is a Redux as well as a vanilla example application.
    
## Usage

```js
<Scene canvas={canvas}>
  <Camera initialDistance={5} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
  <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
    <Mask>
      <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
        <Mask>
          <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
        </Mask>
      </ColouredCuboid>
    </Mask>
  </ColouredCuboid>
</Scene>
```

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
    
![Masked cube](https://github.com/djalbat/Jiggle/blob/master/assets/masked_cube.jpg)

![Masked cube facets](https://github.com/djalbat/Jiggle/blob/master/assets/masked_cube_facets.jpg)

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
As well as building the Jiggle library itself, this will build the examples. The source code for the two examples can be found in the `es6/examples` directory. To view the compiled examples, open the `examples/index.html` file.
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
