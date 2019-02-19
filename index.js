import Navigation from './src/Navigation';

var originalContent = document.body.innerHTML;
var name;

function blankChecker(){
    if(name === ''){
        name = prompt('Dont leave this blank, Please enter your name');
        blankChecker();
    }
}

function pickName(){
    name = prompt('Please enter your name');
    blankChecker();
    document.querySelector('.greeting').textContent = `Hello ${name}! Welcome to my web app`;
}

pickName();

document.body.innerHTML = `
${Navigation}
${originalContent}
`;