export default function Blog(){
    return `
    <h2> Create Blog Below </h2>
<form action="/action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Enter First Name">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Enter Last Name">
  <br><br>
  <input type="submit" value="Submit">
</form> 
    `;
}