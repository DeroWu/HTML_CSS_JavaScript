
window.onload = function () {
    document.getElementById("idPwd").onblur = chkPwd;
    document.getElementById("idName").onblur = chkName;
    document.getElementById("idDate").onblur = chkDate;
    document.getElementById("idSubmit").onclick = function () { chkDate(); chkName(); chkPwd(); if (chkDate() && chkName() && chkPwd()) { printSubmit(); } };
    document.getElementById("idReset").onclick = printReset;
}
function chkName() {
    var nameObj = document.getElementById("idName").value;
    var nameLen = nameObj.length;
    var regSpace = /\s/;
    var regLen = /^.{2,}$/;
    var regCh = /^[\u4E00-\u9FBB]+$/;
    if (regSpace.test(nameObj)) {
        document.getElementById("chgName").innerHTML = "<img src='images/error.png'/> Name can't have space";
    } else if (nameLen == 0) {
        document.getElementById("chgName").innerHTML = "<img src='images/error.png'/> Name can't empty";
    } else if (!(regLen.test(nameObj))) {
        document.getElementById("chgName").innerHTML = "<img src='images/error.png'/> Name length must been greater than 2";
    } else if (regCh.test(nameObj)) {
        document.getElementById("chgName").innerHTML = "<img src='images/correct.png'/> Correct!";
        return true;
    } else {
        document.getElementById("chgName").innerHTML = "<img src='images/error.png'/> Name must Chinese characters only";
    }
}
function chkPwd() {
    var regSpace = /\s/;
    var regLen = /^.{6,}$/;
    var regEn = /[a-zA-Z]+/;
    var regNum = /[0-9]+/;
    var regSpc = /[!@#\$\^&\*]+/;
    var pwdObj = document.getElementById("idPwd").value;

    if (regSpace.test(pwdObj)) {
        document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password can't have space";
    }
    else if (!(regLen.test(pwdObj))) {

        document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password length must been greater than 6";
    }
    else if (regEn.test(pwdObj) && regNum.test(pwdObj) && regSpc.test(pwdObj)) {
        document.getElementById("chgPwd").innerHTML = "<img src='images/correct.png'/> Password set succeed";
        return true;
    }
    else {
        var intFlag1 = 0, intFlag2 = 0, intFlag3 = 0;
        if (regEn.test(pwdObj)) {
            intFlag1 = 4;
        }
        if (regNum.test(pwdObj)) {
            intFlag2 = 2;
        }
        if (regSpc.test(pwdObj)) {
            intFlag3 = 1;
        }
        switch (intFlag1 + intFlag2 + intFlag3) {
            case 6: {
                document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password must have special characters";
                break;
            }
            case 5: {
                document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password must have number characters";
                break;
            }
            case 3: {
                document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password must have English characters";
                break;
            }
            case 4: {
                document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password must have number and special characters";
                break;
            }
            case 2: {
                document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password must have English and special characters";
                break;
            }
            case 1: {
                document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password must have  English characters and number characters";
                break;
            }
            case 0: {
                document.getElementById("chgPwd").innerHTML = "<img src='images/error.png'/> Password must have English , number and special characters";
                break;
            }
        }
    }
}
function chkDate() {
    var dateObj = document.getElementById("idDate").value;
    //var inputDate = new Date(dateObj);
    var arrayObj = dateObj.split("/");
    var myDate = new Date(arrayObj[0], arrayObj[1] - 1, arrayObj[2]);
    var regSpace = /\s/

    if (regSpace.test(dateObj)) {
        document.getElementById("chgDate").innerHTML = "<img src='images/error.png'/> Date can't have space";
    }
    else if (arrayObj.length != 3) {
        document.getElementById("chgDate").innerHTML = "<img src='images/error.png'/> Your date format is wrong";
    } else {
        if (arrayObj[2] == myDate.getDate() && arrayObj[1] - 1 == myDate.getMonth() && arrayObj[0] > 0) {
            document.getElementById("chgDate").innerHTML = "<img src='images/correct.png'/> Correct!";
            return true;
        } else {
            document.getElementById("chgDate").innerHTML = "<img src='images/error.png'/> Your date format is wrong";
        }
    }

}
function printSubmit() {
    document.getElementById("idName").outerHTML = "<span class='chgSty1' name=\"name\" id='idName'>&nbsp;" + document.getElementById("idName").value + "</span>";
    document.getElementById("idPwd").outerHTML = "<span class='chgSty2' name=\"pwd\" id='idPwd'>&nbsp;&nbsp;" + document.getElementById("idPwd").value + "</span>";
    document.getElementById("idDate").outerHTML = "<span class='chgSty2' name=\"date\" id='idDate'>&nbsp;&nbsp;" + document.getElementById("idDate").value + "</span>";
    document.getElementById("chgName").outerHTML = "<span id='chgName'></span>";
    document.getElementById("chgPwd").outerHTML = "<span id='chgPwd'></span>";
    document.getElementById("chgDate").outerHTML = "<span id='chgDate'></span>";
}
function printReset() {
    document.getElementById("idName").outerHTML = "<input class='sty1' type='text' name='name' id='idName' placeholder='請輸入名字' />";
    document.getElementById("idPwd").outerHTML = "<input class='sty1' type='password' name='pwd' id='idPwd' placeholder='請輸入密碼' />";
    document.getElementById("idDate").outerHTML = "<input class='sty1' type='text' name='date' id='idDate' placeholder='ex:2000/2/29' />";
    document.getElementById("chgName").outerHTML = "<span id='chgName'></span>";
    document.getElementById("chgPwd").outerHTML = "<span id='chgPwd'></span>";
    document.getElementById("chgDate").outerHTML = "<span id='chgDate'></span>";
    document.getElementById("idPwd").onblur = chkPwd;
    document.getElementById("idName").onblur = chkName;
    document.getElementById("idDate").onblur = chkDate;
}
document.write("<div><form id='formSty' action='#' method='post'><fieldset id='filedSty'><legend id='legndSty'>Form Check</legend>");
document.write("<div><label class='labelSty' for='name'>Name:</label><input class='sty1' type='text' name='name' id='idName' placeholder='請輸入名字' /><span id='chgName'></span><p class='pSty'>(1.不可空白，2.至少兩個字以上，3.必須全部為中文字)</p><hr /></div>");
document.write("<div><label class='labelSty' for='pwd'>Password:</label><input class='sty1' type='password' name='pwd' id='idPwd' placeholder='請輸入密碼' /><span id='chgPwd'></span><p class='pSty'>(1.不可空白，2.至少6個字且必須包含英文字母、數字、特殊字元[!@#$%^&*])</p><hr /></div>");
document.write("<div><label class='labelSty' for='date'>Date:</label><input class='sty1' type='text' name='date' id='idDate' placeholder='ex:2000/2/29' /><span id='chgDate'></span><p class='pSty'>格式:西元年/月/日 yyyy/MM/dd</p><hr /></div>");
document.write("<div id='subset'><input class='sty2' id='idSubmit' type='button' value='submit' /><input class='sty2' id='idReset' type='button' value='reset' /></div></fieldset></form></div>)");

