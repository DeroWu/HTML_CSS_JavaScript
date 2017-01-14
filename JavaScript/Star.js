var flag = false
window.onload = function () {
    imgArray = document.querySelectorAll("img");
    imgLen = imgArray.length;
    for (var i = 0; i < imgLen; i++) {
        imgArray[i].onmouseover = function () { if (flag) { } else { mouseOver(this.id); }; };
        imgArray[i].onmouseout = function () { if (flag) { } else { mouseOut(this.id); }; };
        imgArray[i].onclick = function () { if (flag) { } else { click(this.id); }; };
    };
    document.getElementById("idInput").onclick = reset;
};
function mouseOver(e) {
    var theEvent = e || event;
    for (var i = 0; i < theEvent.substr(6) ; i++) {
        document.getElementById(imgArray[i].id).src = "images/chngstar.gif"
    }
    document.getElementById("showImg").src = "images/evolution" + theEvent.substr(6) + ".gif";
};
function mouseOut(e) {
    var theEvent = e || event;
    for (var i = 0; i < imgLen; i++) {
        document.getElementById(imgArray[i].id).src = "images/star.gif";
    }
};
function click(e) {
    var theEvent = e || event;
    for (var i = 0; i < imgLen ; i++) {
        if (i < theEvent.substr(6)) {
            document.getElementById(imgArray[i].id).src = "images/evolution" + (i + 1) + ".gif"
        }
        else {
            document.getElementById(imgArray[i].id).src = ""
        }
    }
    document.getElementById("idInput").style = "display:normal";
    flag = true;
};
function reset() {
    flag = false;
    for (var i = 0; i < imgLen; i++) {
        document.getElementById(imgArray[i].id).src = "images/star.gif";
    }
    document.getElementById("idInput").style = "display:none";
}
