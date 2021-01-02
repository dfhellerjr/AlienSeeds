
/* Adapted from https://www.codeseek.co/KyleShaver/css-twinkling-stars-jARzzZ */
var divWidth = home.clientWidth-200;
var divHeight = home.clientHeight *.6;
var count = 0;

if(divWidth < 600)
{
    count = 25;
}
else if(divHeight < 900)
{
    count = 75;
}
else 
{
    count = 150;
}
for (var i = 0; i < count; i++) 
{  
    if( i % 2 === 0)
    {
        var star = 
        '<div class="star" style="animation: twinkleYellow ' + ((Math.random()*5) + 5)+'s ease-in-out '+((Math.random()*2) + 1)+'s infinite; top: '+Math.random()*divHeight+'px; left: '+Math.random()*divWidth+'px;"></div>';$('#home').append(star); 
    }
    else if( i % 5 === 0)
    {
        var star = 
        '<div class="star" style="animation: twinkleRed ' + ((Math.random()*5) + 5)+'s ease-in-out '+((Math.random()*2) + 1)+'s infinite; top: '+Math.random()*divHeight+'px; left: '+Math.random()*divWidth+'px;"></div>';$('#home').append(star); 
    }   
    else 
    {
        var star = 
        '<div class="star" style="animation: twinkle ' + ((Math.random()*5) + 5)+'s linear '+((Math.random()*2) + 1)+'s infinite; top: '+Math.random()*divHeight+'px; left: '+Math.random()*divWidth+'px;"></div>';$('#home').append(star);
    }   
}