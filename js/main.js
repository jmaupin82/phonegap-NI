
//navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
/*
$(document).ready(function(){   
    $.ajax({
      type: "POST",
      url: 'http://10.0.60.138:8001/MathService/retrieve_Data',
      data: '{somekey: somevalue, fooKey: foovalue}',
      success: function(){
        console.log("this worked!");
      },
      dataType: ""
    });
});
*/

//address that is where we will post information
var postAddress = "0.0.0.0";
// variable used in accellerometer reads
var watchID;
//open up the settings options
function settings(){
    //this is where information will be posted to the labview server.
    alert("Settings was pressed");
}
// Start watching the acceleration
function startWatch() {
    // Update acceleration every 1 seconds
    var options = { frequency: 1000 };
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    $('#control-button').val("Stop");
}
// Stop watching the acceleration
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
    $('#control-button').val("Start");
}
// Success
function onSuccess(acceleration) {
    var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                        'Acceleration Y: ' + acceleration.y + '<br />' +
                        'Acceleration Z: ' + acceleration.z + '<br />' +
                        'Timestamp: '      + acceleration.timestamp + '<br />';
}
 // Error
function onError() {
    alert('onError!');
}