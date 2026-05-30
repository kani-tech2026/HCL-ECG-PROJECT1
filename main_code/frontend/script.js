function predictECG() {

    let file = document.getElementById("ecgFile").files[0];

    if(!file){
        alert("Please select ECG file");
        return;
    }

    document.getElementById("result").innerHTML =
    "Prediction Result : Normal Heartbeat";
}