  
 const randomcolor= function(){
  const hex='0123456789ABDEF';
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random() * 16 )];
    }
    return color;
  };
   //console.log(randomcolor());
let inervalid;
const startchangingcolor=function(){
   
    intervalid=setInterval(changebgcolor,1000)
    function changebgcolor(){
        document.body.style.backgroundColor=randomcolor();
    }

    }
 const stopchangingcolor=function(){
    clearInterval(intervalid)

 }



document.querySelector('#start').addEventListener('click',startchangingcolor)

document.querySelector('#stop').addEventListener('click',stopchangingcolor)