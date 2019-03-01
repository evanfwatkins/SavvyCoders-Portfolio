function linksBuilder(linksArr){
    var i = 0;
    var linksHTML = '';
    
    while(i < linksArr.length){
        linksHTML += `<li><a href="./${linksArr[i]}">${linksArr[i]}</a></li>`;
        i++;
    }

    return linksHTML;
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