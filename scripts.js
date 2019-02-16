function pickName(){
    var name = prompt('Please enter your name');
    var blank = '';
    
    document.querySelector('.greeting').textContent = `Hello ${name}! Enjoy my website`;
    if(name ===  blank){
        prompt('Dont leave this blank, Please enter your name');
        // document.querySelector('.greeting').textContent = `Hello ${name}! Enjoy my website`
    }
}
pickName();