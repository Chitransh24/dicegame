var rNo1 =Math.random() *6;
rNo1 = rNo1+1;
rNo1= Math.floor(rNo1);

var rNo2 =Math.random() *6;
rNo2 = rNo2+1;
rNo2= Math.floor(rNo2);

var x="",y="" ,a=0,b=0;

if(rNo1 ==1)
{x="images/dice1.png";
    a=1;
}
else if(rNo1==2)
{x="images/dice2.png";
    a=2;
}
else if(rNo1==3)
{x="images/dice3.png";
    a=3;
}
else if(rNo1==4)
{x="images/dice4.png";
    a=4;
}
else if(rNo1==5)
{x="images/dice5.png";
    a=5;
} 
else if(rNo1==6)
{x="images/dice6.png";
    a=6
}

if(rNo2==1)
{y="images/dice1.png";
    b=1;
}
else if(rNo2==2)
{y="images/dice2.png";
    b=2;
}
else if(rNo2==3)
{y="images/dice3.png";
    b=3;
}
else if(rNo2==4)
{y="images/dice4.png";
    b=4;
}   
else if(rNo2==5)
{y="images/dice5.png";
    b=5;
}
else if(rNo2==6)
{y="images/dice6.png";
    b=6;
}

document.querySelector(".img1").setAttribute("src", x);
document.querySelector(".img2").setAttribute("src", y);
if(a>b)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(b>a)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML="It's a DRAW!";
}