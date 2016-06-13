#DragAndDrop
'DragAndDrop' allows you to easily attach drag and drop events to a div id. Set up ‘DragAndDrop’ for a single id or an array of ids. Change the options to adjust the animation, callback events, and more.

#####Create options for your DragAndDrop Class
```javascript
var options = {
    id:['block1', 'block2'],
    dragStartEvent: handleDragStart,
    dragMoveEvent: null,
    dragEndEvent: handleDragEnd,
    elementSettings:{
        centerToElement:true,
        animate:true,
        animateDuration: '200ms',
        animateEase:'ease-out',
        animateDelay:'0ms'
    },
    zIndex:99
};

// options:
// id: array of ids
// dragStartEvent: event callback, use null if you don’t want an event returned
// dragMoveEvent: event callback, use null if you don’t want an event returned
// dragEndEvent: event callback, use null if you don’t want an event returned
// elementSettings:
    // centerToElement:true | false
    // animate:true | false // animates to coordinates if set to true
    // animateDuration: string // ‘100ms’, ‘1s’, etc.
    // animateEase: string // ‘linear’, ’ease’, ’ease-in’, ’ease-out’, ’ease-in-out’, ’step-start’, ’step-end’, ’steps(int,start|end)’, ’cubic-bezier(n,n,n,n)’, ’initial’, ’inherit’;
    // animateDelay: string // ‘0’, ‘100ms’, ‘1s’, etc.
// zIndex: zIndex to accommodate overlapping issues when multiple DragAndDrop ids used.
```

#####Create a new DragAndDrop instance while passing your options
```javascript
var myDrag = new DragAndDrop(options);
```

#####Initialize instance:
```javascript
myDrag.init();
```

#####Remove reference:
```javascript
myDrag.remove();
```
