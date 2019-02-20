function blankChecker(){
    if(name === ''){
        name = prompt('Dont leave this blank, Please enter your name');
        blankChecker();
    }
}

export default function pickName(){
    var name = prompt('Please enter your name');
        
    if(name === ''){
        blankChecker();
    }
    else{
        document.querySelector('#header').textContent = `Hello ${name}! Welcome to my web app`;
    }
}