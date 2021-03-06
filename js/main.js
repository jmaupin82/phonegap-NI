
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
function onDeviceReady() {
        $("#detailed-settings").hide();
    }
//address that is where we will post information
var postAddress = "0.0.0.0";
// variable used in accellerometer reads
var started = false;
//open up the settings options
function settings(){
    //this is where information will be posted to the labview server.
    $('#detailed-settings').show();
}

function watch(){
    if(!started){
        startWatch();
        started = true;
    }else{
        stopWatch();
        started = false;
    }
}
// Start watching the acceleration
function startWatch() {
    // Update acceleration every 1 seconds
    var options = { frequency: 1000 };
    //phonegap accelerometer read.
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    $('#control-button').val("Stop");
}
// Stop watching the acceleration
function stopWatch() {
    navigator.accelerometer.clearWatch(watchID);
    $('#control-button').val("Start");  
}
    
// Success
function onSuccess(acceleration) {
    var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                        'Acceleration Y: ' + acceleration.y + '<br />' +
                        'Acceleration Z: ' + acceleration.z + '<br />' +
                        'Timestamp: '      + acceleration.timestamp + '<br />';
    xmlhttp.open("POST","http://10.0.60.138:8001/MathService/retrieve_Data",false);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(element.innerHTML);}
    document.getElementById("response").innerHTML=xmlhttp.responseText;
}
 // Error
function onError() {
    alert('onError!');
}