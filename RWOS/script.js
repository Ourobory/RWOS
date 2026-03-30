var welcomeScreen = document.querySelector("#welcome")
var maxZ = 10;
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "flex"
  maxZ++;
  element.style.zIndex = maxZ;
}
window.setInterval(function() {
                document.getElementById("datetime").innerHTML = new Date().toLocaleString();
            }, 1000);
function dragElement(elmnt) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;
    elmnt.onmousedown = startDragging;
    function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    maxZ++;
    elmnt.style.zIndex = maxZ;
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
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("secondbox"));
dragElement(document.getElementById("soundapp"));