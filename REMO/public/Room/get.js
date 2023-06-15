{/*var firebaseConfig = {
    apiKey: "AIzaSyDkaU5im4Hj7QsqQDFVkM3_kKyF1YGQI4Q",
    authDomain: "remo-e30b0.firebaseapp.com",
    databaseURL: "https://remo-e30b0.firebaseio.com",
    projectId: "remo-e30b0",
    storageBucket: "remo-e30b0.appspot.com",
    messagingSenderId: "318553256084",
    appId: "1:318553256084:web:955bfc1a10af2b009d4481",
};
{/*const firebaseConfig = {
    apiKey: "AIzaSyCHOY6PQ1O51FU0M-_w5Qom-y9puMF2hrw",
    authDomain: "remoteinterview-51324.firebaseapp.com",
    projectId: "remoteinterview-51324",
    storageBucket: "remoteinterview-51324.appspot.com",
    messagingSenderId: "550521690489",
    appId: "1:550521690489:web:19a8086fc51e3eeb88b7a8",
    measurementId: "G-34PFGY06PN"
  };*/}
  const firebaseConfig = {
    apiKey: "AIzaSyDe7Dlb6n8beIA33DMVqGClcIEN56XRR4Y",
    authDomain: "remoteinterview102.firebaseapp.com",
    databaseURL: "https://remoteinterview102-default-rtdb.firebaseio.com",
    projectId: "remoteinterview102",
    storageBucket: "remoteinterview102.appspot.com",
    messagingSenderId: "988564545990",
    appId: "1:988564545990:web:22ea5f00695505811e52c7"
  };
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var fire = database.ref().child("Lab_details");
var val;

function getlab(roomId) {
    val = roomId;
    fire.on("value", gotData);
    function gotData(data) {
        data = data.val();
        let keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == roomId) {
                document.getElementById("lab").setAttribute("src", keys[i].two);
            }
        }
    }
}
