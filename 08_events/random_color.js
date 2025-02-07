const random_color = function(){
    let hex = '0123456789ABCDEF';

    let color = '#';
    for(let i=0 ; i<6 ; i++){
        color+=hex[Math.floor(Math.random() * 16)];

    }

    return color;
}

console.log(random_color());

let intervalId

const changeColor = function(){
    intervalId = setInterval(function(){
        document.body.style.backgroundColor = random_color();

    },1000)
    
}

const removeColor = function(){
    clearInterval(intervalId)
    
}





document.querySelector('#start').addEventListener('click' , changeColor);

document.querySelector('#stop').addEventListener('click' , removeColor);