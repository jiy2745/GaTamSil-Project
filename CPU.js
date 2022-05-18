function appear(obj)
{
    document.getElementById(obj).classList.add('reveal');
}

function disappear(obj)
{
    document.getElementById(obj).classList.remove('reveal');
}

function vars()
{
var ck1 = document.getElementById('ck1').checked;
var ck2 = document.getElementById('ck2').checked;
var ck3 = document.getElementById('ck3').checked;
var ck4 = document.getElementById('ck4').checked;
console.log(document.getElementById('and').classList.length);

if (ck1 == true && ck2 == true)
{
document.getElementById('and').classList.add('play');
}
else
{
document.getElementById('and').classList.remove('play');
}

if (ck3 == true || ck4 == true)
{
document.getElementById('or').classList.add('play');
}
else
{
document.getElementById('or').classList.remove('play');
}

if (document.getElementById('and').classList.length == 2 && document.getElementById('or').classList.length == 2)
{
document.getElementById('final').classList.add('play');
}
else
{
document.getElementById('final').classList.remove('play');
}

}
document.addEventListener('scroll', function()
{
    
    var currentScrollValue = document.documentElement.scrollTop;
    var isCircuitClosed = false;
    var scrollNumber = parseInt(currentScrollValue / 1000);
    console.log(scrollNumber);
    
    if(1<scrollNumber && parseInt(currentScrollValue / 500) < 39)
    {
        disappear("ani"+ (scrollNumber - 1));
        appear("ani" + (scrollNumber));
        disappear("ani" + (scrollNumber + 1)); 
    }
    else if(scrollNumber == 1)
    {
        appear("ani" + (scrollNumber));
        disappear("ani" + (scrollNumber+1));
    }
    else if(parseInt(currentScrollValue / 500) >= 39)
    {
        appear("ani20");
        disappear("ani19");
    }
    else if (scrollNumber == 0)
    {
        disappear("ani1");
    }
    
    if (scrollNumber == 1) appear("tran");
    else disappear("tran");

    if (scrollNumber == 2) appear("Si");
    else disappear("Si");

    if (scrollNumber == 3) appear("sishare");
    else disappear("sishare");

    if (scrollNumber == 5) appear("merge1");
    else disappear("merge1");

    if (scrollNumber == 6) appear("merge2");
    else disappear("merge2");

    if (scrollNumber == 7) appear("merge3");
    else disappear("merge3");

    if (scrollNumber == 8 || scrollNumber == 9) appear("merge4");
    else disappear("merge4");

    if (parseInt(currentScrollValue / 500) == 8) appear("typeP");
    else disappear("typeP");

    if (parseInt(currentScrollValue / 500) == 9) appear("typeN");
    else disappear("typeN");

    if (scrollNumber == 10) appear("pnp");
    else disappear("pnp");



    if (scrollNumber >= 11 && scrollNumber <= 15) appear("circuit");
    else disappear("circuit");

    if (scrollNumber == 12) document.getElementById("circuit").classList.add("close");   
    else document.getElementById("circuit").classList.remove("close");

    if (scrollNumber >= 13 && scrollNumber <= 15) document.getElementById("circuit").classList.add("moveE"); 
    else document.getElementById("circuit").classList.remove("moveE");

    
    if (scrollNumber == 17 || scrollNumber == 18) appear("gate");
    else disappear("gate");

    if (scrollNumber == 16) appear("andor");
    else disappear("andor");


})