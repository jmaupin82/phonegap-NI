
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
//this is all code taken from TuxTutor.com

//wait for PhoneGap to load
document.addEventListener("deviceready", loaded, false);

// PhoneGap is ready
function loaded() {
    startWatch();
}
// Start watching the acceleration
function startWatch() {
    // Update acceleration every 3 seconds
    var options = { frequency: 3000 };
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