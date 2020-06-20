var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {


        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var w1 = new Audio("sounds/tom-1.mp3");
                w1.play();

                break;
            case "a":
                var w2 = new Audio("sounds/tom-2.mp3");
                w2.play();
                break;
            case 's':
                var w3 = new Audio("sounds/tom-3.mp3");
                w3.play();
                break;
            case 'd':
                var w4 = new Audio("sounds/tom-4.mp3");
                w4.play();
                break;
            case 'j':
                var w5 = new Audio("sounds/kick-bass.mp3");
                w5.play();
                break;
            case 'k':
                var w6 = new Audio("sounds/snare.mp3");
                w6.play();
                break;
            case 'l':
                var w7 = new Audio("sounds/crash.mp3");
                w7.play();
                break;
            default:
        }


    });
}
document.addEventListener("keypress", function(event) {
    
    switch (event.key) {
            case "w":
                var w1 = new Audio("sounds/tom-1.mp3");
                w1.play();

                break;
            case "a":
                var w2 = new Audio("sounds/tom-2.mp3");
                w2.play();
                break;
            case 's':
                var w3 = new Audio("sounds/tom-3.mp3");
                w3.play();
                break;
            case 'd':
                var w4 = new Audio("sounds/tom-4.mp3");
                w4.play();
                break;
            case 'j':
                var w5 = new Audio("sounds/kick-bass.mp3");
                w5.play();
                break;
            case 'k':
                var w6 = new Audio("sounds/snare.mp3");
                w6.play();
                break;
            case 'l':
                var w7 = new Audio("sounds/crash.mp3");
                w7.play();
                break;
            default:
        }
});