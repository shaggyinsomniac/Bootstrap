document.write(("5"==5), "<br/>");
document.write(("5"===5), "<br/>");

var info = ['Afi', 19, 'SE'];
info.push("COMPS");
for(i in info){
	document.write(info[i], "<br>");
}

info.sort();
document.write(info, "<br>");

var num = [1, 2, 3];
var combined = num.concat(info);
document.write(combined, "<br>");