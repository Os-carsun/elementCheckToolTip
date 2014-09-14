// use strict;
var mouse = {
    x: 0,
    y: 0
};
var mouseClick = false;
var currentElement = null;

function mouseTooltip(e) {

    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
<<<<<<< HEAD
    console.log(">>x:"+mouse.x+"y:"+mouse.y+"<<");
=======
    console.log("x: " + mouse.x + ", y: " + mouse.y);
    console.log(">>"+mouseClick+"<<");
>>>>>>> 1143c372bcf6189e9eef0392b21bfb8b00a0be65
    if (mouseClick === true) return;
    currentElement = document.elementFromPoint(mouse.x, mouse.y);
    // console.log(currentElement);
    var content = "";

    var span = document.createElement('span');
    span.setAttribute("class","coupontooltip");
    document.body.appendChild(span);

<<<<<<< HEAD
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
=======

    for (var i = 0, atts = currentElement.attributes, n = atts.length; i < n; i++) {
        content += atts[i].nodeName + " : <input type='text' name=" + atts[i].nodeName + " value= ' "  + atts[i].value + "'> <br>";
    }
    content += "innerTexture : <input type='text' name='innerText' value='" + currentElement.innerText + "'> <br>";
    currentElement.innerHTML += " <span class=" + "coupontooltip" + ">" + content + "</span>";
    for (var i = 0, atts = currentElement.attributes, n = atts.length; i < n; i++) {
>>>>>>> 1143c372bcf6189e9eef0392b21bfb8b00a0be65
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
for (var i = 0; i < frames.length; i++) {
    frames[i].document.onmousedown = mouseTooltip;
    console.log(i);
}
