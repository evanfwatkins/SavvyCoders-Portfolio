export default function Navigation(){
    return `
    <div id="navigation">
    <ul>
        <li class="navfont"><a href="index.html">Home</a></li>
        <li class="navfont"><a href="blog/index.html">Blog</a></li>
        <li class="navfont"><a href="apply/index.html">Apply</a></li>
        <li class="navfont"><a href="projects/index.html">Projects</a>
            <ul>
                <li><a href="">First</a></li>
                <li><a href="">Second</a></li>
                <li><a href="">Third</a></li>
            </ul>
        </li>

    </ul>
    </div>
`;
}