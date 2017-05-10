$(document).ready(function(){var striker1=document.getElementById("striker1");var striker2=document.getElementById("striker2");var ballel=document.getElementById("ball");var tableel=document.getElementById("table");var amatuer=document.getElementById("amatuer");var pro=document.getElementById("pro");var ninja=document.getElementById("ninja");var slow=document.getElementById("slow");var medium=document.getElementById("medium");var fast=document.getElementById("fast");var begin=document.getElementById("begin");var reset=document.getElementById("reset");var scoreplayer1=0;var scoreplayer2=0;var score1el=document.getElementById("scoreValue1");var score2el=document.getElementById("scoreValue2");var lengthstrikers=90;var margtop1;var margtop2;var margleft1;var margleft2;var ballleft;var balltop;var screensize;var margtop1reset;var margtop2reset;var margleft1reset;var margleft2reset;var ballleftreset;var balltopreset;var strikerwidth;var topline;var bottomline;score1el.innerHTML=scoreplayer1;score2el.innerHTML=scoreplayer2;if($(window).height()<=320)
{margtop1reset=126;margleft1reset=28;margleft2reset=436;margtop2reset=126;ballleftreset=210;balltopreset=132;strikerwidth=15
topline=40;bottomline=290;margtop1=126;margleft1=28;margleft2=436;margtop2=126;ballleft=210;balltop=132;screensize=0}
else if($(window).width()>1100)
{margtop2reset=310;margtop1reset=310;ballleftreset=610;balltopreset=332;margleft1reset=180;margleft2reset=1080;strikerwidth=30;margtop2=310;margtop1=310;ballleft=610;balltop=332;margleft1=180;margleft2=1080;topline=152;bottomline=553;screensize=2}
striker2.style.top=margtop2;striker1.style.top=margtop1;ballel.style.left=ballleft;ballel.style.top=balltop;striker1.style.left=margleft1;striker2.style.left=margleft2;var ballright=ballleft+50;var right1=margleft1+strikerwidth
var bottom2=margtop2+lengthstrikers;var bottom1=margtop1+lengthstrikers;var ballbottom=balltop+40;var leftupid;var leftdownid;var rightupid;var rightdownid;var x;var y;var id;var time=30;var flag=0;var map={87:!1,83:!1,38:!1,40:!1,13:!1,82:!1};var leftArrowUp=document.getElementById("leftArrowUp");var leftArrowDown=document.getElementById("leftArrowDown");var rightArrowUp=document.getElementById("rightArrowUp");var rightArrowDown=document.getElementById("rightArrowDown");$(leftArrowUp).bind("mousedown touchstart",leftStrikerUpGenerator);$(leftArrowUp).bind("mouseup touchend",leftStrikerUpDestroyer);$(leftArrowDown).bind("mousedown touchstart",leftStrikerDownGenerator);$(leftArrowDown).bind("mouseup touchend",leftStrikerDownDestroyer);$(rightArrowUp).bind("mousedown touchstart",rightStrikerUpGenerator);$(rightArrowUp).bind("mouseup touchend",rightStrikerUpDestroyer);$(rightArrowDown).bind("mousedown touchstart",rightStrikerDownGenerator);$(rightArrowDown).bind("mouseup touchend",rightStrikerDownDestroyer);document.addEventListener('keydown',func);document.addEventListener('keyup',func2);amatuer.addEventListener("click",amatuerfunc);pro.addEventListener("click",profunc);ninja.addEventListener("click",ninjafunc);slow.addEventListener("click",slowfunc);medium.addEventListener("click",mediumfunc);fast.addEventListener("click",fastfunc);begin.addEventListener("click",beginfunc);reset.addEventListener("click",resetfunc);function getallvalues()
{margtop2=striker2.style.top;margtop2=margtop2.replace("px"," ");margtop2=parseInt(margtop2);margtop1=striker1.style.top;margtop1=margtop1.replace("px"," ");margtop1=parseInt(margtop1);margleft1=striker1.style.left;margleft1=margleft1.replace("px"," ");margleft1=parseInt(margleft1);margleft2=striker2.style.left;margleft2=margleft2.replace("px"," ");margleft2=parseInt(margleft2);ballleft=ballel.style.left;ballleft=ballleft.replace("px"," ");ballleft=parseInt(ballleft);balltop=ballel.style.top;balltop=balltop.replace("px"," ");balltop=parseInt(balltop);ballright=ballleft+50;ballbottom=balltop+40;right1=margleft1+strikerwidth;bottom2=margtop2+lengthstrikers;bottom1=margtop1+lengthstrikers}
function leftStrikerUpGenerator(){leftupid=setInterval(leftStrikerUpFunc,50)}
function leftStrikerUpDestroyer(){if(leftupid)
clearInterval(leftupid)}
function leftStrikerUpFunc()
{console.log("leftupfunc")
getallvalues();if(screensize==2)
{if(margtop1>topline)
{striker1.style.top=(margtop1-20)+"px"}
else{if(leftupid)
clearInterval(leftupid)}}
else if(screensize==0)
{if(margtop1>topline+6)
{striker1.style.top=(margtop1-20)+"px"}
else{if(leftupid)
clearInterval(leftupid)}}}
function leftStrikerDownGenerator(){leftdownid=setInterval(leftStrikerDownFunc,50)}
function leftStrikerDownDestroyer(){if(leftdownid)
clearInterval(leftdownid)}
function leftStrikerDownFunc()
{getallvalues();if(screensize==2)
{if(lengthstrikers==50||lengthstrikers==70)
{if(bottom1<bottomline)
{striker1.style.top=(margtop1+20)+"px"}
else{if(leftdownid)
clearInterval(leftdownid)}}
else if(lengthstrikers==90)
{if(bottom1<bottomline-1)
{striker1.style.top=(margtop1+20)+"px"}
else{if(leftdownid)
clearInterval(leftdownid)}}}
else if(screensize==0)
{if(lengthstrikers==50||lengthstrikers==70)
{if(bottom1<bottomline-14)
{striker1.style.top=(margtop1+20)+"px"}
else{if(leftdownid)
clearInterval(leftdownid)}}
else if(lengthstrikers==90)
{if(bottom1<bottomline-14)
{striker1.style.top=(margtop1+20)+"px"}
else{if(leftdownid)
clearInterval(leftdownid)}}}}
function rightStrikerUpGenerator()
{rightupid=setInterval(rightStrikerUpFunc,50)}
function rightStrikerUpDestroyer()
{if(rightupid)
clearInterval(rightupid)}
function rightStrikerUpFunc()
{getallvalues();if(screensize==2)
{if(margtop2>topline)
{striker2.style.top=(margtop2-20)+"px"}
else{if(rightupid)
clearInterval(rightupid)}}
else if(screensize==0)
{if(margtop2>topline+6)
{striker2.style.top=(margtop2-20)+"px"}
else{if(rightupid)
clearInterval(rightupid)}}}
function rightStrikerDownGenerator()
{rightdownid=setInterval(rightStrikerDownFunc,50)}
function rightStrikerDownDestroyer()
{if(rightdownid)
clearInterval(rightdownid)}
function rightStrikerDownFunc()
{getallvalues();if(screensize==2)
{if(lengthstrikers==50||lengthstrikers==70)
{if(bottom2<bottomline)
{striker2.style.top=(margtop2+20)+"px"}
else{if(rightdownid)
clearInterval(rightdownid)}}
else if(lengthstrikers==90)
{if(bottom2<bottomline-1)
{striker2.style.top=(margtop2+20)+"px"}
else{if(rightdownid)
clearInterval(rightdownid)}}}
else if(screensize==0)
{if(lengthstrikers==50||lengthstrikers==70)
{if(bottom2<bottomline-14)
{striker2.style.top=(margtop2+20)+"px"}
else{if(rightdownid)
clearInterval(rightdownid)}}
else if(lengthstrikers==90)
{if(bottom2<bottomline-14)
{striker2.style.top=(margtop2+20)+"px"}
else{if(rightdownid)
clearInterval(rightdownid)}}}}
function positionagain()
{ballel.style.left=ballleftreset;ballel.style.top=balltopreset;striker2.style.top=margtop2reset;striker1.style.top=margtop1reset;striker1.style.left=margleft1reset;striker2.style.left=margleft2reset;getallvalues();flag=0}
function amatuerfunc()
{amatuer.style.backgroundColor="yellow";ninja.style.backgroundColor="transparent";pro.style.backgroundColor="transparent";positionagain();lengthstrikers=90;striker1.style.height=lengthstrikers;striker2.style.height=lengthstrikers;getallvalues();clearInterval(id)}
function profunc()
{pro.style.backgroundColor="yellow";amatuer.style.backgroundColor="transparent";ninja.style.backgroundColor="transparent";positionagain();lengthstrikers=70;striker1.style.height=lengthstrikers;striker2.style.height=lengthstrikers;getallvalues();clearInterval(id)}
function ninjafunc()
{ninja.style.backgroundColor="yellow";pro.style.backgroundColor="transparent";amatuer.style.backgroundColor="transparent";positionagain();lengthstrikers=50;striker1.style.height=lengthstrikers;striker2.style.height=lengthstrikers;getallvalues();clearInterval(id)}
function slowfunc()
{medium.style.backgroundColor="transparent";fast.style.backgroundColor="transparent";slow.style.backgroundColor="yellow";time=80;positionagain();getallvalues();clearInterval(id)}
function mediumfunc()
{slow.style.backgroundColor="transparent";fast.style.backgroundColor="transparent";medium.style.backgroundColor="yellow";time=30;positionagain();getallvalues();clearInterval(id)}
function fastfunc()
{slow.style.backgroundColor="transparent";medium.style.backgroundColor="transparent";fast.style.backgroundColor="yellow";time=20;positionagain();getallvalues();clearInterval(id)}
function beginfunc()
{if(flag==0)
{getallvalues();var random=Math.floor(Math.random()*4);flag=1;if(random==0)
{y=10;x=10}
else if(random==1)
{y=-10;x=10}
else if(random==2)
{y=10;x=-10}
else if(random==3)
{y=-10;x=-10}
id=setInterval(move,time)}}
function func(event)
{event.preventDefault();getallvalues();if(event.keyCode in map){map[event.keyCode]=!0}
if(map[40]==!0&&map[38]==!1)
{rightStrikerDownFunc();if(map[87]==!0&&map[83]==!1)
{leftStrikerUpFunc()}
else if(map[83]==!0&&map[87]==!1)
{leftStrikerDownFunc()}}
if(map[38]==!0&&map[40]==!1)
{rightStrikerUpFunc();if(map[87]==!0&&map[83]==!1)
{leftStrikerUpFunc()}
else if(map[83]==!0&&map[87]==!1)
{leftStrikerDownFunc()}}
if(map[87]==!0&&map[83]==!1)
{leftStrikerUpFunc();if(map[38]==!0&&map[40]==!1)
{rightStrikerUpFunc()}
else if(map[40]==!0&&map[38]==!1)
{rightStrikerDownFunc()}}
if(map[83]==!0&&map[87]==!1)
{leftStrikerDownFunc();if(map[38]==!0&&map[40]==!1)
{rightStrikerUpFunc()}
else if(map[40]==!0&&map[38]==!1)
{rightStrikerDownFunc()}}
else if(map[13]==!0&&flag===0)
{beginfunc()}
else if(map[82]==!0)
{resetfunc()}}
function func2(event)
{if(event.keyCode in map){map[event.keyCode]=!1}}
function move()
{getallvalues();if(ballbottom>(bottomline)||balltop<(topline+10))
{y=-y}
if(ballright>margleft2+15)
{if(collisionRight()==!0)
{clearInterval(id);id=null;positionagain();if(scoreplayer1<50)
scoreplayer1+=10;score1el.innerHTML=scoreplayer1;score2el.innerHTML=scoreplayer2;if(scoreplayer1==50)
{alert("PLAYER1 WINS!");resetfunc()}}
else if(collisionRight()==!1)
x=-x}
if(ballleft<right1-15)
{if(collisionLeft()==!0)
{clearInterval(id);id=null;positionagain();if(scoreplayer2<50)
scoreplayer2+=10;score1el.innerHTML=scoreplayer1;score2el.innerHTML=scoreplayer2;if(scoreplayer2==50)
{alert("PLAYER2 WINS!");resetfunc()}}
else if(collisionLeft()==!1)
x=-x}
ballel.style.top=(balltop+y)+"px";ballel.style.left=(ballleft+x)+"px"}
function collisionLeft()
{getallvalues();if(margtop1>ballbottom||balltop>bottom1)
{return!0}
else{return!1}}
function collisionRight()
{getallvalues();if(margtop2>ballbottom||balltop>bottom2)
return!0;else return!1}
function resetfunc()
{positionagain();clearInterval(id);scoreplayer1=0;scoreplayer2=0;score1el.innerHTML=scoreplayer1;score2el.innerHTML=scoreplayer2;mediumfunc();amatuerfunc()}})