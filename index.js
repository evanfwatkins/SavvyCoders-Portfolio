import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import * as State from './state';
import { startCase } from 'lodash';
import Navigo from 'navigo';
// import pickName from './src/Greeter';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
                    ${Navigation(state.links)}
                    ${Header(state.title)}
                    ${Content(state)}
                    ${Footer(state)}
                `;
    router.updatePageLinks();
}

function navHandler(params){
    var destination = startCase(params.page);
    
    render(State[destination]);
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))
    .resolve();