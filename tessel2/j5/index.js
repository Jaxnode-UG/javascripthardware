// Import the interface to Tessel hardware
var Tessel = require('tessel-io');

var board = new Tessel();

board.on("ready", function() {
  console.log("Ready");

  var leds = ["L0", "L1", "L2", "L3"];

  leds.forEach(led => this.digitalWrite(led, this.HIGH));

  setTimeout(() => {
    leds.forEach(led => this.digitalWrite(led, this.LOW));
  }, 1000);
});

console.log("I'm blinking! (Press CTRL + C to stop)");
