// use strict;
var mouse = {
    x: 0,
    y: 0
};
var mouseClick = false;
var currentElement = null;
var body = document.getElementsByTagName('body')[0];

function mouseTooltip(e) {

    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
    console.log(">>x:"+mouse.x+"y:"+mouse.y+"<<");
    if (mouseClick === true) return;
    currentElement = document.elementFromPoint(mouse.x, mouse.y);
    // console.log(currentElement);
    var content = "";

    var span = document.createElement('span');
    span.setAttribute("class","coupontooltip");
    document.body.appendChild(span);

    span.style.top=mouse.y;
    span.style.left=mouse.x;
    for (var i = 0, atts = currentElement.attributes, n = atts.length, arr = []; i < n; i++) {
        span.innerHTML+=atts[i].nodeName + " : <input type='text' name=" + atts[i].nodeName + " value= ' "  + atts[i].value + "'> <br>";
        console.log(document.getElementsByName(atts[i].nodeName)[0]);
        //  document.getElementsByName(atts[i].nodeName)[0].onchange = function(e) {
        //     currentElement.setAttribute(e.srcElement.name, e.srcElement.value);
        // }
    }
    span.innerHTML+= "innerTexture : <input type='text' name='innerText' value='" + currentElement.innerText + "'> <br>";
    document.getElementsByName("innerText")[0].onchange = function(e) {
        currentElement.innerText = document.getElementsByName("innerText")[0].value;
        mouseClick = false;
    }
    for (var i = 0, atts = currentElement.attributes, n = atts.length, arr = []; i < n; i++) {
        var node = atts[i];
        document.getElementsByName(node.nodeName)[0].onchange = function(e) {
            currentElement.setAttribute(e.srcElement.name, e.srcElement.value);
        }
    }
    mouseClick = true;
    document.getElementsByClassName('coupontooltip')[0].ondblclick = function() {
        document.getElementsByClassName('coupontooltip')[0].remove();
        mouseClick = false;
    }
}
document.onmousedown = mouseTooltip;
