# Activity 2

## package.json - Scripts

The scripts block defines different actions that can be taken within the project. For example the script "start" can be run in the project with the command `npm start`. When that command is run, it will run the command defined with the "start" key.

Other scripts that can be run include `npm run analyze` `npm run storybook` and `npm run build-storybook` 

## package.json - Dependencies

The dependencies block defines a version range for each package that is listed. As dependencies are specified in a project, it is important for their versions to be explicitly defined so that new updates do not break the entire project. In many cases the dependency block will define versions by a semantic number like `1.2.3`, but these versions can also be determined with a git url, local path, or all (*).

## package.json - devDependencies

The devDependencies block is designed to define dependencies that developers use for testing and documentation. When developers use npm modules in their projects, they only need the dependencies required to run that module, rather than all of the additional modules from the development workflow.

## index.html

The `./demo/index.html` file includes a `<div>` element with the class of `demo`. There is a script shown in the `<script>` tag in this file which utilizes the lit `render()` function to replace the div with the `<hello-world>` HTML custom element that is defined in `./hello-world.js`

The Definition of your element is in your-element-name.js, while the class JS object is found in src/YourElementName.js. Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object? Leaving comments either in the source via // or in your

## hello-world.js

This question *"why are hello-world.js and ./src/HelloWorld.js separate files"* stumped me.

At first glance, it appears that these files could be combined into one. I feel though that for organization sake, it makes sense to separate them as one defines the element properties and the other hydrates the element in the browser with the content from the source file. In practice, when there is more than one element defined, there would only be one `hello-world.js` file that references all of the element source files.

*see the comments that I've left in the source file*

## Lit

Lit provides a framework for developing reusable components that can be used anywhere on the web. Because the components are just HTML, CSS, and JavaScript, they can be used anywhere that these languages can be rendered. This enables less experienced web developers to use complex components by placing a single script into the source code and using the element tag. Reusable elements mean that less boilerplate code is required to start a web project, as the elements, regardless of where they are on the web, pull from a single source.

***I still need to finish this***
