export default function Content(posts){
    console.log('content says', posts);

    return `
    <div id="content">
    <h1 class="blueback">
        Evan Watkins
    </h1>
    <h2 class="blueback">| Junior Level Developer | Savvy Coder Student |</h2>
    
    <div id="imgdiv">
        <img src="https://scontent-ort2-2.cdninstagram.com/vp/1fe3199a285889d6578a20f17732cb26/5CEE88EE/t51.2885-15/e35/29094692_1849539155340041_8624714867795820544_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com"
            alt="Evan under a rock">
    </div class="homeimg">

    <div class="greeting">
        <h2 class="fizzBuzz"></h2>
    </div>

    <hr>
    
    <!-- TASK: Make a "drop calandar"  -->

    <h2>Here are some of my interests:</h2>
    <p>I Snowboard, I like to build computers, I play games when I have the time, I like writting code and learning new material about code. I am currently seeking an intern or a starting job at a tech company</p>

`;
}