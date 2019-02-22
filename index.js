import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
// import pickName from './src/Greeter';

// Create a STATE object
var home = {
    'title': 'Welcome to My Saavy Coders website!'
};

var blog = {
    'title': 'Check out the Blogs'
};

var apply = {
    'title': 'Please apply for something'
};

var projects = {
    'title': 'These projects boii!'
};

var root = document.querySelector('#root');

// Create a rendering function //
function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;
}

render(home);

document.querySelector('#navigation li:first-child').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(home);
});

document.querySelector('#navigation li:nth-child(2)').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(blog);
});

document.querySelector('#navigation li:nth-child(3)').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(apply);
});

document.querySelector('#navigation li:nth-child(4)').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.href);
    render(projects);
});

// Username input function
// pickName();
