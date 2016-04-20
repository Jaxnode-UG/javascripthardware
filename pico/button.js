// button.js
function flash() {
  digitalWrite(LED1,1);
  setTimeout(function() { 
    digitalWrite(LED1,0);
  }, 200);
}

setInterval(function() {
  if (digitalRead(BTN)) flash();
}, 500);
