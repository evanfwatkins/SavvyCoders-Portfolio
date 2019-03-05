import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import { startCase } from 'lodash';
// import pickName from './src/Greeter';

//    State holds information that the render function needs to do its job. ex: render = function ender(state){
//    var links;
//    var i = 0;
//    }
//    VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
var State = {
    'Home': {
        // this is a nested object
        'links': [ 'Home', 'Blog', 'Apply', 'Projects' ],
        'title': 'My SavvyCoders Portfolio'
    },
    'Blog': {
        'links': [ 'Home', 'Blog', 'Apply', 'Projects' ],
        'title': 'Read or Post Blogs'
    },

    'Apply': {
        'links': [ 'Home', 'Blog', 'Apply', 'Projects' ],
        'title': 'Apply To Recieve Updates On My Projects'
    },

    'Projects': {
        'links': [ 'Home', 'Blog', 'Apply', 'Projects' ],
        'title': 'Projects I\'ve Completed'
    }
};
// Selects the HTML element with - id="root"
var root = document.querySelector('#root');
// Sets render to unefined
var render;

// Function Decleration prevents the browser from being able to utalize a href link tag
function navHandler(event){
    var destination = startCase(event.target.textContent);
    //  preventDefault is a default setting to block a browser function

    event.preventDefault();

    render(State[destination]);
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
