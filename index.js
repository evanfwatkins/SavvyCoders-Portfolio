import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

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
    document.querySelector('#header').textContent = `Hello ${name}! Welcome to my web app`;
}

document.body.innerHTML = `
${Navigation}
${Header}
${Content}
${Footer}
${originalContent}
`;
pickName();