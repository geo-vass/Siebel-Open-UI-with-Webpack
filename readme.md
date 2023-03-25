# Create a modern Siebel Open UI app with npm and Webpack

npm and Webpack can assist in modernizing your development cycle in Siebel Open UI by providing:

1. An easy way to install dependencies
   No need to always have to declare dependencies/3rd party libraries/css files through the Manifest Administration of Siebel.
   Just install your required dependency through npm install <library name>
2. Bundled files based on your code and your dependencies.

## Installing

You may try the code by cloning the repo and running the command: npm install

## Manual Installation/Fresh project

We are going to work with our dedicated local Siebel Server. I would suggest creating a folder under the scripts folder and register the PR inside. I created a "demo" folder.
I suggest switching to your code editor (I'm using VS Code) from now on.
Create the following files and folders:
demoPR.js
main.js
vendor.js
webpack (folder)
---src (folder)
vendor.js
index.js
---dist (folder)

We should create a manifest record for the PR and register it for the applet like we always do in Siebel Open UI.
In a Windows OS, we can create two hard symbolic links from the dist folder of webpack to the demo folder. That way all of the changes made in development will be immediately updated.
In my case, I opened the Windows command line and executed the following commands:

```
mklink /H "C:\Siebel\Client\public\scripts\siebel\custom\demo\webpack\dist\main.js" "C:\Siebel\Client\public\scripts\siebel\custom\demo\main.js"
mklink /H "C:\Siebel\Client\public\scripts\siebel\custom\demo\webpack\dist\vendor.js" "C:\Siebel\Client\public\scripts\siebel\custom\demo\vendor.js"
```

An important note, for the above to work the source files (inside dist folder) should not exist.

Create a webpack folder inside demo folder. From the terminal,

```
cd .\webpack\
```

Run the following commands:

1. Initialize an npm project

```
npm init -y
```

2. Install webpack and webpack cli as dev dependencies

```
npm install --save-dev webpack webpack-cli
```

You can now use ES6 import/export syntax to declare code dependencies.

### Webpack configuration

Change the start script inside package.json:

```
"start": "webpack"
```

By running

```
npm start
```

Webpack:

1. Searches the default entry point for webpack is src/index.js. This means that this file must exist
   under this folder.
2. Outputs the final code in dist folder.

#### Config files

Lets configure Webpack to our needs. Create and copy the configuration of the following files.
webpack.common.js
webpack.dev.js
webpack.prod.js

It is considered good practice to separate the environments. The common.js file is where we will configure the common ground
between our dev and our production configuration. To be able to merge the functionality of common with dev and
prod, we need to install webpack-merge:

```
npm install --save-dev webpack-merge
```

Copy the configuration of these files based on your needs.
Comments can be found inside the code for various options. More info and options on webpack configuration
can be found at: https://webpack.js.org/concepts/

#### Loaders

Loaders handle how webpack treats different types of files.
Run the following command to install the css related loaders included in webpack config file:

```
npm install --save-dev css-loader exports-loader style-loader
```

#### Dev Server

To be able to immediately see the changes done to our code while working on our Siebel local client, we need to install a webpack dev server by running the following command:

```
npm install --save-dev webpack-dev-server
```

##### 3rd party files

You can import 3rd party libraries (CSS/JS) inside vendor.js.
We are going to use a Bootstrap example, so lets install it as well:

```
npm install --save-dev bootstrap
```

Lets load bootstrap css/js inside our vendor.js

```
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

```

##### CSS

Run the following command to install the plugin required to separate our CSS:

```
npm install --save-dev mini-css-extract-plugin
```

Minimize your CSS by installing the following plugin:

```
npm install --save-dev css-minimizer-webpack-plugin
```

### Start Coding!

Now that we have set up webpack, we should open our dedicated Siebel Client and start working!
Now fire up the dedicated Siebel Client and navigate to the applet.
Start the webpack dev server with the command:

```
npm start
```

The index.js is where we write our code. In our example, we will insert a bootstrap navbar on top of the page.

---

Talk about PR changes here

---

Fingers crossed, everything worked well and you should be able to see that bootstrap navbar on top of the page! Making changes while in development should update the UI!
When you're done with development, run the build command

```
npm run build
```

and transfer the files to the target environment. No more dependencies and 3rd-party files to worry about!
Once again, the best practice is to separate the css files for the target environment. With this configuration, a vendor.css file will be produced which will have to be registered under Manifest Administration.

Happy coding ;)
