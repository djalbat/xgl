# Jiggle

**This project is barely started. Please come back another day.**

A combination of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and [WebGL](https://github.com/djalbat/Easy).

# Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Jiggle.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install
    
# Usage

If you are familiar with WebGL, note that with Jiggle you can and should re-use vertices. To define a cuboid, for example, only the minimum eight vertices need to be given, with each being used for three sides. New vertices are created to be added to the WebGL buffer at the appropriate time. If you are not familiar with WebGL, don't worry about this. Just define vertices as you would expect to, and the indexes to reference them, most likely multiple times if the vertices are shared between edges. Here are the default vertices and indexes for a cuboid, for example:  
   
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
    
            [ 0, 3, 1 ],
            [ 2, 1, 3 ],
    
            [ 4, 5, 6 ],
            [ 6, 7, 4 ],
    
            [ 0, 4, 7 ],
            [ 7, 3, 0 ],
    
            [ 5, 1, 6 ],
            [ 2, 6, 1 ],
    
            [ 3, 7, 6 ],
            [ 6, 2, 3 ],
    
            [ 0, 5, 4 ],
            [ 5, 0, 1 ],
    
          ];   
          
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
