import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import pickName from './src/Greeter';

var root = document.querySelector('#root');

root.innerHTML = `
${Navigation()}
${Header('Welcome to Ny Saavy Coders website!')}
${Content()}
${Footer()}
`;

pickName();