var adArray = ["https://www.asus.com/tw/", "https://www.chanel.com/zh_TW/watches-jewelry/watches/c/j12/W001", "http://www.vogue.com.tw/feature/foods/content-30452.html", "https://www.allsaints.eu/#", "http://www.vogue.com.tw/feature/entertainment/content-30576.html", "http://www.vogue.com.tw/feature/travel/content-19938.html", "https://www.lamborghini.com/en-en/experience/museum"]
var adLen = adArray.length;
var flag = true;
window.onload = function () {
    times = 1;
    chgAds();
    startAds();
    for (var i = 0 ; i < 7; i++) {
        document.querySelectorAll("input.inputSty")[i].onmouseover = function () { inputChg(this.id); window.clearInterval(startTime); };
        document.querySelectorAll("input.inputSty")[i].onmouseout = function () { if (flag) { startTime = window.setInterval("chgAds()", 2000); }; };
        document.querySelectorAll("input.inputSty")[i].onclick = stopAds;
    }
    document.getElementById("buttonPlay").onclick = startAds;
    document.getElementById("buttonStop").onclick = stopAds;
    document.getElementById("button8").onclick = function () {
        if (times <= 2) {
            times += 7;
        }
        times -= 2;

        chgAds();
        stopAds();
    }
    document.getElementById("button9").onclick = function () {
        chgAds();
        stopAds();
    }
}
function chgAds() {
    document.getElementById("imgCarousel").src = "images/Ad" + ((times - 1) % adLen + 1) + ".jpg";
    document.getElementById("urlCarousel").href = adArray[((times - 1) % adLen)];
    chgColor((times - 1) % adLen + 1);
    times++;
}
function stopAds() {
    window.clearInterval(startTime);
    document.getElementById("buttonPlay").style = "display:normal";
    document.getElementById("buttonStop").style = "display:none";
    flag = false;
}
function startAds() {
    startTime = window.setInterval("chgAds()", 2000);
    document.getElementById("buttonPlay").style = "display:none";
    document.getElementById("buttonStop").style = "display:normal";
    flag = true;
}
function inputChg(x) {
    times = x.substr(6);
    chgAds();
}
function chgColor(x) {
    for (var i = 1; i <= 7; i++) {
        document.getElementById("button" + i).style = "";
    }
    document.getElementById("button" + x).style = "background-color: #00CACA;color: black;"
}
