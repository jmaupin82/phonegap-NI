
navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

var watchID = navigator.accelerometer.watchAcceleration(Success, Error, [Options]);


$(document).ready(function(){
    //this is all code taken from TuxTutor.com

    //first we want to wait for PhoneGap to load
    document.addEventListener("deviceready", loaded, false)
    //PhoneGap is loaded
    function loaded(){
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    }
    //Get the current Acceleration data if Successful
    function onSuccess(acceleration){
        alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
    }
    // alert if there is an error
    function onError(){
        alert("Error");
    }

});
