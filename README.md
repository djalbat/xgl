# Jiggle

**This project is barely started. Please come back another day.**

A combination of [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and [WebGL](https://github.com/djalbat/Easy).

# Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Jiggle.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install
    
# Usage
    
**This section is a work in progress. Again, please come back another day.**

```xml
    <Scene canvas={canvas}>
      <Camera initialDistance={15} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
        <Mask>
          <ColouredCuboid colour={[ 1, 1, 0, 1 ]} width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
            <Mask>
              <ColouredCuboid colour={[ 1, 0, 1, 1 ]} width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
            </Mask>
          </ColouredCuboid>
        </Mask>
      </ColouredCuboid>
    </Scene>
```

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
