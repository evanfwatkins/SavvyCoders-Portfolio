import { lowerCase } from 'lodash';
function linksBuilder(linksArr){
    var linkHTML = linksArr.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        return `<li>
            <a data-navigo href="./${destination}">
                ${link}
            </a>
        </li>
        `;
    }).join(' ');


    return linkHTML;
}

export default function Navigation(links){
    return `
    <div id="navigation">
        <ul class="container">
            ${linksBuilder(links)}
        </ul>
    </div>
`;
}