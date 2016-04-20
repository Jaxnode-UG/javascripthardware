// Example 1 Pico
var on = false;

function toggle() {
    on = !on;
    digitalWrite(LED1, on);
    digitalWrite(LED2, !on);
}

var i = setInterval(function() {
    toggle();
}, 1000);
