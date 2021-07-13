document.getElementById('grayButton').onclick=()=>{Cswitch('gray','white')};
document.getElementById('yelloButton').onclick=()=>{Cswitch('yellow','black')};
document.getElementById('whiteButton').onclick=switchWhite;
document.getElementById('blueButton').onclick=switchBlue;


function Cswitch(color,fcolor){
    console.log('here');
    document.getElementsByTagName('body')[0].style.backgroundColor=color;
    document.getElementsByTagName('body')[0].style.color = fcolor;
}

function switchWhite(){
    document.getElementsByTagName('body')[0].style.backgroundColor="white";
    document.getElementsByTagName('body')[0].style.color = 'black';
}

function switchBlue(){
    document.getElementsByTagName('body')[0].style.backgroundColor='blue';
    document.getElementsByTagName('body')[0].style.color = 'white';
}