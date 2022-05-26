var pressed = [];
var secretCode = '[ArrowUp][ArrowUp][ArrowDown][ArrowDown][ArrowLeft][ArrowRight][ArrowLeft][ArrowRight][b][a]';
var sounds = false;
window.addEventListener('keyup', (e) => {
    pressed.push('['+e.key+']');
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
        window.pressed = [];
        page_refill();
    }
})
function page_refill(){
    if(sounds){
        var tmphello = new Audio('src/secret.wav');
        tmphello.play();
    }
    setTimeout(function(){
        window.location.replace('src/author.html');
    },1500);
    document.body.innerHTML = '<img src="http://thiscatdoesnotexist.com">';
}