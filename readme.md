# RNDM Render Plugin: Google Analytics

## About

This plugin provides google analytics functionality for the [RNDM Render package](https://github.com/rndm-com/rndm-render).

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-google-analytics
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-google-analytics';
```

## Usage

The Google Analytics plugin has been created as a simple middleware wrapper for any component. This means that in the very first instance of a base view, you can add your tracker initialisation or any other processes.

It uses the following methods from the [React GA](https://github.com/react-ga/react-ga) Node JS Package:

- initialize
- set
- pageview
- modalview
- timing
- ga
- event
- exception
- outboundLink
- plugin.require
- plugin.execute

Please read the [React GA Readme](https://github.com/react-ga/react-ga/blob/master/README.md) for all the parameters that can be passed as arguments.

**Example**

The below example initialises a tracker as well as sending a pageview:

```json
{
  "type": "react-native.View",
  "props": {
    "middleware": [{
      "middleware": "google-analytics.initialize",
      "args": ["YOUR_TRACKER_HERE", {
        "gaOptions": {
          "name": "example"
        }
      }]
    }, {
      "middleware": "google-analytics.pageview",
      "args": ["/test", ["example"]]
    }],
    "children": {
      "type": "react-native.Text",
      "props": {
        "children": "Testing"
      }
    }
  }
}
```
