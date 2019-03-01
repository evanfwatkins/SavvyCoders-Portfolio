import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
// import pickName from './src/Greeter';

// State holds info that the render function needs to do its job
var State = {
    'Home': {
        // this is a nested object
        'links': [ 'Blog','Apply','Projects' ],
        'title': 'My SavvyCoders Portfolio'
    },
    'Blog': {
        'links': [ 'Home','Apply','Projects' ],
        'title': 'Check out the Blogs'
    },
    
    'Apply': {
        'links': [ 'Home','Blog','Projects' ],
        'title': 'Please apply for something'
    },
    
    'Projects': {
        'links': [ 'Home','Blog','Apply' ],
        'title': 'These projects boii!'
    }
};

var root = document.querySelector('#root');
var render;

// Function Decleration
function navHandler(event){
    event.preventDefault();

    render(State[event.target.textContent]);
}
    
render = function ender(state){
    var links;
    var i = 0;

    // grab each component and update #roots HTML with the generated HTML that works with State
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state.title)}
        ${Content(state)}
        ${Footer(state)}
    `;

    links = document.querySelectorAll('#navigation > ul > li > a');

    //  Run a while loop for as long as the Length of links is.
    while(i < links.length){
        // change the index
        links[i].addEventListener('click', navHandler);
        
        i++;
    }
};

render(State.Home);
// pickName();
