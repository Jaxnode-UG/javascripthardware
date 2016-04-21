
var tessel = require('tessel');
var ambientlib = require('ambient-attx4'); 

var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function () {
 // Get points of light and sound data.
  setInterval( function () {
    ambient.getLightLevel( function(err, ldata) {
      if (err) throw err;
      ambient.getSoundLevel( function(err, sdata) {
        if (err) throw err;
        console.log("Light level:", ldata.toFixed(8), " ", "Sound Level:", sdata.toFixed(8));
    });
  })}, 500); // The readings will happen every .5 seconds unless the trigger is hit
});

ambient.on('error', function (err) {
  console.log(err)
});

console.log("I'm blinking! (Press CTRL + C to stop)");
