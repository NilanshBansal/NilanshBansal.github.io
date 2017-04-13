

	var striker1=document.getElementById("striker1");
	var striker2=document.getElementById("striker2");
	var ballel=document.getElementById("ball");
	var tableel=document.getElementById("table");
	var amatuer=document.getElementById("amatuer");
	var pro=document.getElementById("pro");
	var ninja=document.getElementById("ninja");
	var slow=document.getElementById("slow");
	var medium=document.getElementById("medium");
	var fast=document.getElementById("fast");
	var begin=document.getElementById("begin");
	var reset=document.getElementById("reset");
	var scoreplayer1=0;
	var scoreplayer2=0;
	var score1el=document.getElementById("scoreValue1");
	var score2el=document.getElementById("scoreValue2");

	striker2.style.top=310;
	striker1.style.top=310;
	ballel.style.left=610;
	ballel.style.top=332;
	striker1.style.left=180;
	striker2.style.left=1080;
	score1el.innerHTML=scoreplayer1;
	score2el.innerHTML=scoreplayer2;
	var lengthstrikers=90;
	var margtop1=striker1.style.top;
	var margtop2=striker2.style.top;
	var margleft1=striker1.style.left;
	var margleft2=striker2.style.left;
	var ballleft=ballel.style.left;
	var balltop=ballel.style.top;
    var ballright=ballleft+50;
	var	right1=margleft1+30 
	var bottom2=margtop2+lengthstrikers;
	var bottom1=margtop1+lengthstrikers;
	var ballbottom=balltop+40;

	var topline=152;
	var bottomline=553;
	
	var x;
	var y;
	var id;
	var time=30;
	var flag=0;
	
	document.addEventListener('keydown',func);

	amatuer.addEventListener("click",amatuerfunc);
	pro.addEventListener("click",profunc);
	ninja.addEventListener("click",ninjafunc);
	slow.addEventListener("click",slowfunc);
	medium.addEventListener("click",mediumfunc);
	fast.addEventListener("click",fastfunc);
	begin.addEventListener("click",beginfunc);
	reset.addEventListener("click",resetfunc);


function getallvalues()
{
	margtop2=striker2.style.top;
	margtop2 = margtop2.replace("px", " ");           //remove px
    margtop2 = parseInt(margtop2);
    margtop1=striker1.style.top;
    margtop1 = margtop1.replace("px", " ");           //remove px
    margtop1 = parseInt(margtop1);

    margleft1=striker1.style.left;
    margleft1=margleft1.replace("px", " ");
    margleft1 = parseInt(margleft1);

    margleft2=striker2.style.left;
    margleft2=margleft2.replace("px", " ");
    margleft2 = parseInt(margleft2);
		
	ballleft=ballel.style.left;
	ballleft = ballleft.replace("px", " ");           //remove px
    ballleft = parseInt(ballleft);
	
	balltop=ballel.style.top;
    balltop = balltop.replace("px", " ");           //remove px
    balltop = parseInt(balltop);

    ballright=ballleft+50;

	ballbottom=balltop+40;

	right1=margleft1+30 ;
	
	bottom2=margtop2+lengthstrikers;

	bottom1=margtop1+lengthstrikers;


}
				
function positionagain()
{
	ballel.style.left=610;
	ballel.style.top=332;
	striker2.style.top=332;
	striker1.style.top=332;
	striker1.style.left=180;
	striker2.style.left=1080;

	getallvalues();
	flag=0;
}

function amatuerfunc()
{
	amatuer.style.backgroundColor="yellow";
	ninja.style.backgroundColor="transparent";
	pro.style.backgroundColor="transparent";
	positionagain();
	lengthstrikers=90;
	striker1.style.height=90;
	striker2.style.height=90;
	getallvalues();
	clearInterval(id);
}	

function profunc()
{	
	pro.style.backgroundColor="yellow";
	amatuer.style.backgroundColor="transparent";
	ninja.style.backgroundColor="transparent";
	positionagain();
	lengthstrikers=70;
	striker1.style.height=70;
	striker2.style.height=70;
	getallvalues();
	clearInterval(id);
}	

function ninjafunc()
{
	ninja.style.backgroundColor="yellow";
	pro.style.backgroundColor="transparent";
	amatuer.style.backgroundColor="transparent";
	positionagain();
	lengthstrikers=50;
	striker1.style.height=50;
	striker2.style.height=50;
	getallvalues();
	clearInterval(id);
}

function slowfunc()
{
	medium.style.backgroundColor="transparent";
	fast.style.backgroundColor="transparent";
	slow.style.backgroundColor="yellow";
	time=80;
	positionagain();
	getallvalues();
	clearInterval(id);
}

function mediumfunc()
{
	slow.style.backgroundColor="transparent";
	fast.style.backgroundColor="transparent";
	medium.style.backgroundColor="yellow";
	time=30;
	positionagain();
	getallvalues();
	clearInterval(id);
	
}

function fastfunc()
{
	slow.style.backgroundColor="transparent";
	medium.style.backgroundColor="transparent";
	fast.style.backgroundColor="yellow";
	time=20;
	positionagain();
	getallvalues();
	clearInterval(id);
	
}

function beginfunc()
{	
	if(flag==0)
	{
		getallvalues();
		var random = Math.floor(Math.random() * 4);
			flag=1;
			if(random == 0)
				{ y = 10;
		 		  x = 10;
				}
			else if(random == 1)
				{ y = -10;
				  x = 10;
				}
			else if(random == 2)
				{ y =10;
				  x = -10;
				}
			else if(random == 3)
				{ y = -10;
				  x = -10;
				}
			
		id=setInterval(move, time);
	}	
}

function func(event)
{
	event.preventDefault();
	getallvalues();
		
	if(event.key == "ArrowDown")
	{
		if(lengthstrikers==50 || lengthstrikers==70)
	    {	
	     	if (bottom2<bottomline)
	     	{
				striker2.style.top=(margtop2 + 20 )+ "px";
			}	
		}	
		else if(lengthstrikers==90)
		{
			if (bottom2<bottomline-1)
	     	{
				striker2.style.top=(margtop2 + 20 )+ "px";
			}	
		}
	}

	else if(event.key == "ArrowUp")
	{
	    
     	if (margtop2>topline)
     	{	
			striker2.style.top=(margtop2 - 20 )+ "px";
		}	


	}	
		
	else if(event.key == "W" || event.key == "w")
	{
		
     	if (margtop1> topline)
     	{
			striker1.style.top=(margtop1 - 20 )+ "px";
		}	
	}

	else if(event.key == "S" || event.key == "s")
	{
		if(lengthstrikers==50 || lengthstrikers==70)   
	    {
	     	if (bottom1<bottomline)
	     	{
				striker1.style.top=(margtop1 + 20 )+ "px";
			}
		}
			
		else if(lengthstrikers==90)
		{
			if (bottom1<bottomline-1)
	     	{
				striker1.style.top=(margtop1 + 20 )+ "px";
			}	
		}	
	}

	else if((event.key=="Enter")&&(flag===0))
	{
		beginfunc();
		
	}

	else if(event.key=="r"|| event.key=="R")
	{
		resetfunc();
	}

}


function move()
	{	
		getallvalues();
		
		
		if(ballbottom>(bottomline) || balltop<(topline+10))
		{
			y=-y;

		}	

		if (ballright > margleft2 +12 )
		{
			if(collisionRight()==true)
			{	
				clearInterval(id);
				id=null;
				positionagain();
				if (scoreplayer1<50)
					scoreplayer1+=10;

				score1el.innerHTML=scoreplayer1;
				score2el.innerHTML=scoreplayer2;
				if(scoreplayer1==50)
					{ alert("PLAYER1 WINS!");
					   resetfunc();	
					}

			}
			else if (collisionRight()==false)
				x=-x;		
		}

		if(ballleft < right1 -12)
		{
			if(collisionLeft()==true)
			{	
				clearInterval(id);
				id=null;
				positionagain();
				if (scoreplayer2<50)
					scoreplayer2+=10;
				score1el.innerHTML=scoreplayer1;
				score2el.innerHTML=scoreplayer2;
				if(scoreplayer2==50)
					{ alert("PLAYER2 WINS!");
					  resetfunc();	
					}
			}	
			else if (collisionLeft()==false)
				x=-x;
		}
		
		ballel.style.top=(balltop + y )+ "px";

		ballel.style.left=(ballleft + x )+ "px";


	}


function collisionLeft()
{	
	getallvalues();
	
    if(margtop1 > ballbottom || balltop>bottom1)
	{
		return true;
	}	
	else
	{
		return false;
	}

}

function collisionRight()
{	

	getallvalues();
	
	if(margtop2 > ballbottom || balltop>bottom2)
    	return true;

	else
		return false;
	
}	

function resetfunc()
{
	positionagain();
	clearInterval(id);
	scoreplayer1=0;
	scoreplayer2=0;
	score1el.innerHTML=scoreplayer1;
	score2el.innerHTML=scoreplayer2;
	mediumfunc();
	amatuerfunc();

}

