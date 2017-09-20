// JavaScript Document
var sdelay=0;
function returnTop(){
	window.scrollBy(0,-100);
	sdelay=setTimeout('returnTop()',8);
	var sTop=document.documentElement.scrollTop+document.body.scrollTop;
	if(sTop==0){
		clearTimeout(sdelay);
		}
	}