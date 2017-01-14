document.write("<div id='all'><table id='tb'><caption><h3>Multiplication Table</h3></caption><tbody><tr>");
for (i = 1; i <= 9; i++) {
    if (i < 9) {
        document.write("<td style='border-right:1px dashed #F0F0F0'>");
    } else {
        document.write("<td>");
    } for (j = 1; j <= 9; j++) {
        document.write("&nbsp;" + i + "&nbsp;x&nbsp;" + j + "&nbsp;=&nbsp;" + i * j + "&nbsp;<br>");
    }
    document.write("</td>");
}
document.write("</tr></tbody></table></div>");