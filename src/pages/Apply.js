export default function Apply(){
    return `
    <h2>Enter Your information below</h2>
    <form action="https://formspree.io/evanfwatkins@gmail.com" method="POST">

        <label for="fname">First Name</label>
        <input type="text" name="first-name" id="" value="" required>
        <br>
        <br>

        <label for="lname">Last Name</label>
        <input type="text" name="last-name" value="" required>
        <br>
        <br>

        <label for="email">Email</label>
        <input type="email" name="email" id="email" value="" required>
        <br>
        <br>

        <textarea rows="4" cols="50">Enter Message:</textarea>
        <br>
        <br>

        <input type="submit" value="Send">
        <input type="reset" value="Restart">
    </form> `;
}
