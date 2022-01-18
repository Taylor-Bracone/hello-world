Open package.json and look at the scripts devDependencies and dependencies sections. What do you think each section does here? What commands can you run?
- devDependencies are not loaded all the time since only used by the devs themselves
- dependencies are what's needed to the program to run
- can run 'analyze', 'start', 'storybook', build-storybook' commands

The "demo" for your hello-world element is found in index.html. Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript?
- styles are called in the head
- script tag in body pulls in the js web component
- imports load in needed dependencies
- render function writes the html with web component

The Definition of your element is in your-element-name.js, while the class JS object is found in src/YourElementName.js. Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object? Leaving comments either in the source via // or in your
- HelloWorld.js is our web component code for the functionality of that component
- hello-world.js grabs the class we created in HelloWorld.js and defines it as a custo web component to be used in html
- In styles()
    - creates host styles to the whole component
- In properties()
    - initializes title and counter as properties with a type that can be set like variable
- In constructor()
    - calls the super's constructor
    - defines properties, title and counter
- In increment()
    - function used for the increment button
    - increases the count
- In decrement()
    - function used for the decrement button
    - decreases the count
- In render()
    - writes out html in area where web component is called
    - returns a header and two buttons


Try to explain what Lit is providing to the repo. What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever? After anwering these questions to the best of your abilities...
- Lit provides the ability to use the shadowdom of a custom component. By importing and using a custom component the shadowdom is created to sort of seperate the custom component's dom structure from the rest of the page's structure (lightDOM)
- Inside the component, Lit reads the structuring used with styles, properties, and render and handles them to create css html and variables that can be used and reflected into the lightdom