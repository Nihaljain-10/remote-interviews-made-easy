
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
var firebaseOrdersCollection = database.ref().child('Interview_details');

const KEY_SIZE = 15;

var rand = random(KEY_SIZE);

document.getElementById("schedule-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("schedule-submit-btn").innerHTML = `sending...`;
    sendmail();
});


function sendmail() {

    rand = random(KEY_SIZE);
    submitdetails();
}

function random(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return (result);
}

function submitdetails() {
    var details = {
        Interviewer_name: $('#P1name').val(),
        Interviewee_name: $('#P2name').val(),
        Interviewee_email: $("#P2email").val(),
        Interviewer_email: $("#P1email").val(),
        Date_: $("#date-time").val(),
        Key: rand,
    };

    firebaseOrdersCollection.child(rand).set(details);

    sendtointerviewee();
    sendtointerviewer();
    sendtoremovirtual();
};


function sendtointerviewee() {
    Email.send({

        Host: "smtp.elasticemail.com",
        Username: "remoteinterview100@gmail.com",
        Password: "E193BF7ED3A0257BDAB45D98200D227CF35C",
        To: $("#P2email").val(),
        From: "remoteinterview100@gmail.com",
        Subject: "Interview Confirmation",
        Body: "Hey " + $("#P2name").val() + " ,\r\r" + "Your interview has been scheduled on " + $("#date-time").val().split("T")[0] + " at " + $("#date-time").val().split("T")[1] + ". Join the room with the key - " + rand + "E" + "\n\n. Wish you the best.",
    })
}

function sendtointerviewer() {
    Email.send({

        Host: "smtp.elasticemail.com",
        Username: "remoteinterview100@gmail.com",
        Password: "E193BF7ED3A0257BDAB45D98200D227CF35C",
        To: $("#P1email").val(),
        From: "remoteinterview100@gmail.com",
        Subject: "Interview Confirmation",
        Body: "You interview with " + $("#P2name").val() + " has been scheduled on " + $("#date-time").val().split("T")[0] + " at " + $("#date-time").val().split("T")[1] + ". Join the room with the key - " + rand + "R",
    })
}


function sendtoremovirtual() {
    Email.send({

        Host: "smtp.elasticemail.com",
        Username: "remoteinterview100@gmail.com",
        Password: "E193BF7ED3A0257BDAB45D98200D227CF35C",
        To: "remoteinterview100@gmail.com",
        From: "remoteinterview100@gmail.com",
        Subject: "Launch the lab",
        Body: $("#date-time").val().split(" ")[0] + " at " + $("#date-time").val().split(" ")[1] + " " + $("#date-time").val().split(" ")[2] + ". Please launch the lab and ensure it is functional .",
    }).then(
        e => {
            document.getElementById("schedule-submit-btn").innerHTML = `
            <audio autoplay>
                <source src="./assets/insight.mp3#t=00:00:01" type="audio/ogg">
            </audio>
            SENT
            <svg class="tick-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>`;
            setTimeout(function() { document.getElementById("schedule-submit-btn").innerHTML = `SEND`;
                document.getElementById("schedule-form").reset(); }, 3000);
        }
    );
}


//---- contact us -------

document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    event.preventDefault();

    document.getElementById("contact-submit-btn").innerHTML = `sending...`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "remoteinterview100@gmail.com",
        Password: "E193BF7ED3A0257BDAB45D98200D227CF35C",
        To: "remoteinterview100@gmail.com",
        From: $("#email").val(),
        Subject: $("#name").val() + "'s query",
        Body: $("#message").val(),
    }).then(
        e => {
            document.getElementById("contact-submit-btn").innerHTML = `
            <audio autoplay>
                <source src="./assets/insight.mp3#t=00:00:01" type="audio/ogg">
            </audio>
            SENT
            <svg class="tick-svg" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>`;
            setTimeout(function() { document.getElementById("contact-submit-btn").innerHTML = `SEND`;
                document.getElementById("contact-form").reset(); }, 3000);
        }
    );

});
