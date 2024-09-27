let randomnumber1=(Math.floor(Math.random()*6))+1;
let randomImage1="dice"+randomnumber1+".png";
let randomImagesrc1="images/"+randomImage1;
let changeImage1=document.querySelectorAll("img")[0];

changeImage1.setAttribute("src",randomImagesrc1);

let randomnumber2=(Math.floor(Math.random()*6)) +1;
let randomImage2="dice"+randomnumber2+".png";
let randomImagesrc2="images/"+randomImage2;
let changeImage2=document.querySelectorAll("img")[1];
changeImage2.setAttribute("src",randomImagesrc2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h2").innerHTML="Player 1 is Win!";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h2").innerHTML="Player 2 is Win! ";
}
else{
    document.querySelector("h2").innerHTML="Its draw!";
}

