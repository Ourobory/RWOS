var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
  element.style.display = "none"
}
window.setInterval(function() {
                document.getElementById("datetime").innerHTML = new Date().toLocaleString();
            }, 1000);
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("secondbox"));
function dragElement(elmnt) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;
    if (document.getElementById(elmnt.id + "handle")) {
    document.getElementById(elmnt.id + "handle").onmousedown = startDragging;} 
    else {
    elmnt.onmousedown = startDragging;}
    function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    var newLeft = elmnt.offsetLeft - currentX;
    var newTop = elmnt.offsetTop - currentY;
    var maxX = window.innerWidth - elmnt.offsetWidth;
    var maxY = window.innerHeight - elmnt.offsetHeight;
    var minY = 0.03 * window.innerHeight;
    newLeft = Math.max(0, Math.min(newLeft, maxX));
    newTop = Math.max(minY, Math.min(newTop, maxY));
    elmnt.style.left = newLeft + "px";
    elmnt.style.top = newTop + "px";
    }
    function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
    }}