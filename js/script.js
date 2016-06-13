// Knick Focks
var myDrag1;

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
}

function init(){
    myDrag1 = new DragAndDrop(options);
    myDrag1.init();
}

function handleDragStart(opt){
    //callback, do somthing
}

function handleDragMove(opt){
    //callback, do somthing
}

function handleDragEnd(opt){
    //callback, do somthing
}
