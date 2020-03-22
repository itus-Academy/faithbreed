// var firebaseConfig = {
//     apiKey: "AIzaSyDjdPeYGaqyMKEKgaMW1E8gmSoBk-6S-Po",
//     authDomain: "pneuma-life.firebaseapp.com",
//     databaseURL: "https://pneuma-life.firebaseio.com",
//     projectId: "pneuma-life",
//     storageBucket: "pneuma-life.appspot.com",
//     messagingSenderId: "839072413337",
//     appId: "1:839072413337:web:bc7e07331f25a014"
// };


var firebaseConfig = {
    apiKey: "AIzaSyDjdPeYGaqyMKEKgaMW1E8gmSoBk-6S-Po",
    authDomain: "pneuma-life.firebaseapp.com",
    databaseURL: "https://pneuma-life.firebaseio.com",
    projectId: "pneuma-life",
    storageBucket: "pneuma-life.appspot.com",
    messagingSenderId: "839072413337",
    appId: "1:839072413337:web:bc7e07331f25a014"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

//function for every event output
function output(collection,number){
    db.collection(collection).limit(number).get().then((snapshot)=>{
        setupGuides(snapshot.docs)
    });
}
// for the homepage
// output('events',1);
