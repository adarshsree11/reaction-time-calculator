var last = new Date().getTime();
function makeshape() {
    document.getElementById("shape").style.display = "block";
    last = new Date().getTime();
}

document.getElementById("shape").onclick = function () {

    var xcord = Math.random() * 600;
    var ycord = Math.random() * 500;
    var br = Math.floor(Math.random() * 2) * 50 + "%";
    var width = Math.random() * 300 + 10;

    var code = '0123456789ABCDEF'
    var colour = '#'
    for (var i = 0; i < 6; i++) {
        colour += code[Math.floor(Math.random() * 16)];
    }

    document.getElementById("shape").style.left = xcord + "px";
    document.getElementById("shape").style.top = ycord + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.borderRadius = br;
    document.getElementById("shape").style.backgroundColor = colour;
    document.getElementById("shape").style.display = "none";


    var now = new Date().getTime();
    var t = (now - last) / 1000;
    document.getElementById("timer").innerHTML = t + " sec";
    last = now;
    setTimeout(makeshape, 1000);
}
