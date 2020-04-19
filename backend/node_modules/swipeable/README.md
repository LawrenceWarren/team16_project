# swipeable
Register swipe events for dom elements on your mobile websites and get callbacks.

## Install
```node
npm install swipeable --save
```

## Usage

```javascript

var swipeable = require('swipeable');

swipeable(<DOM_NODE>, callback, options);

```

## Callback
On a valid swipe, callback params are of the form: 

```javascript

{
  left: true,
  right: false,
  top: false,
  bottom: false
}

/* 
 * The above callback indicated that the user swiped from left to right.
 * For right to left: The right key is set to true.
 * For Top to bottom: The top key is set to true.
 * For Bottom to Top: The bottom key is set to true.
 */
```

## Options
Options is an object consisting of the following overrides.

```javascript

{
  timeThreshold: 200, // Time duration(ms) during which the swipe should occur
  distanceThreshold: 200 // Minimum distance required to register a valid swipe
}

/*
 * The time duration should be specified in milliseconds.
 * The timeThreshold defaults to 300ms.
 *
 * Distance is specified equivalent to scroll distance.
 * The distance threshold defaults to 100.
 */
```

### Example

```javascript
var swipeable = require('swipeable'),
  node = document.getElementById('container');

function onSwipe(params) {
  console.log(params);
  /*
   * Prints params in the following format:
   * { left: true, right: false, bottom: false, top: false }
   */
};

swipeable(node, onSwipe);
```

### Usage with React
Add a ref to the element on which swipe needs to be detected and register event in component did mount.

```javascript
import React from 'react';
import swipeable from 'swipeable';

const Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    swipeable(this.refs.node, this.onScroll);
  }

  onScroll(params) {
   /*
    * Params are in the following format:
    * { left: true, right: false, bottom: false, top: false }
    * The above indicates Left to right scroll.
    */
  }

  render() {
    return (
      <div ref="node">
        // JSX
      </div>
    );
  }
}

export default Container;
```