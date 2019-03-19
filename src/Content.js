import * as Pages from './pages';

export default function Content(state){
    return `
    <div id="content">
        ${Pages[state.body]()}
    </div>

`;
}