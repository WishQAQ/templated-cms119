$(function(){
	/*scrolling("iroom-con","r1p","r2p");*/
	/*scrolling("icase-con","c1p","c2p");*/
})
function DY_scroll(wraper,prev,next,img,speed,or)
{
var wraper = $(wraper);
var prev = $(prev);
var next = $(next);
var img = $(img);
var w = 744;
var s = speed;
next.click(function()
{
img.stop(true,true).animate({'marginLeft':-w},function()
{
img.find('dl').eq(0).appendTo(img);
img.css({'margin-left':0});
});
});
prev.click(function()
{
img.find('dl:last').prependTo(img);

img.css({'margin-left':-w});
img.stop(true,true).animate({"marginLeft":0});
});
if (or == true)
{
ad = setInterval(function() { next.click();},s*1000);
wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
}
}
$(function(){
	DY_scroll('.ipro-a','.ipro-right','.ipro-left','.ipro-con-b',3,true);
})