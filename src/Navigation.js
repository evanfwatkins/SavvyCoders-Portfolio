import { lowerCase } from 'lodash';
function linksBuilder(linksArr){
    var linksHtml = '';
    var destination = '';


    linksArr.forEach((link) => {
        if(link !== 'Home'){
            destination = lowerCase(link);
        }
    
        linksHtml +=
        `<li>
            <a data-navigo href="./${destination}">
                ${link}
            </a>
        </li>`;
    });

    return linksHtml;
}

export default function Navigation(state){
    return `
    <div id="navigation">
        <ul class="container">
            ${linksBuilder(state.links)}
        </ul>
    </div>
`;
}