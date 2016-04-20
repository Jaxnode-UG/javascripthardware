//example2.js

var s = require("servo").connect(B1);

var i = setInterval(function() {
  var light = analogRead(A5);
  var pos = light * 20;
  if (pos > 1) {
   pos = 1; 
  }
  s.move(light);
  console.log('Light reading = ' + pos);
}, 500);
