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


// function for every event output
function output(collection,number){
    db.collection(collection).limit(number).get().then((snapshot)=>{
        setupGuides(snapshot.docs)
    });
}

// for the homepage
// console.log(output('programmes',1));




// for the blog page
    // eventt(15);



// upadate forestore setings
// db.settings({timeStampsInSnapshots:true});

// const signupForm = document.getElementById('signup-form');
// signupForm.addEventListener('submit', (e)=>{
//     e.preventDefault(e);

    
//     const email = signupForm['signup-email'].value;
//     const password = signupForm['signup-password'].value;
//     auth.createUserWithEmailAndPassword(email,password).then(cred=>{
//         console.log(cred);
//         signupForm.reset();
//     })
//     console.log(email);
//     console.log(password)
// }); 


// const logout =  document.getElementById('logout');
// logout.addEventListener('click', (e)=>{ 
//         e.preventDefault(e);
//         auth.signOut().then(()=>{
//             console.log('user is signe out');

//         });
// });


const loginForm  = document.getElementById('login-form');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email,password).then((cred)=>{
        
        console.log(cred.user);
        
        // console.log(user + ' you are logged in');
        loginForm.reset();
        window.location.href = 'posts.html'
    })
})
// auth.onAuthStateChanged(user => {
//     console.log(user);
    
// })