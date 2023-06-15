const firebaseConfig = {
    apiKey: "AIzaSyDe7Dlb6n8beIA33DMVqGClcIEN56XRR4Y",
    authDomain: "remoteinterview102.firebaseapp.com",
    databaseURL: "https://remoteinterview102-default-rtdb.firebaseio.com",
    projectId: "remoteinterview102",
    storageBucket: "remoteinterview102.appspot.com",
    messagingSenderId: "988564545990",
    appId: "1:988564545990:web:22ea5f00695505811e52c7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var firebaseOrdersCollection = database.ref().child('Lab_details');

async function launchlab(roomId) {
    var content;
    console.log("here, in the room");
    await $.get(
        "https://f1c394c44e6a.ngrok.io",
        function(data) {
            content = data;
            console.log(content.one);
            console.log(content.two);
            var details = {
                one: content.one,
                two: content.two
            };
            firebaseOrdersCollection.child(roomId).set(details);
        }
    );
    document.getElementById("lab").setAttribute("src", content.one);
}

/*function getlab(roomId) {
    const val = roomId;
    console.log("getting the lab");
    firebaseOrdersCollection.on("value", (data) => {
        var scores = data.val();
        console.log(scores);
        var keys = Object.keys(scores);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (keys[i] == roomId) {
                console.log("found");
                var two = scores[k].two;
                document.getElementById("lab").setAttribute("src", two);
                break;
            }
        }
    });
}
*/


function getlab(roomId) {
    var val = roomId;
    firebaseOrdersCollection.on("value", gotData);

    function gotData(data) {
        var scores = data.val();
        console.log(scores);
        console.log("inside");
        console.log(roomId);
        var keys = Object.keys(scores);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (keys[i] == roomId) {
                console.log("found");
                var two = scores[k].two;
                document.getElementById("lab").setAttribute("src", two);
                console.log(two);
            }
        }
    }
}