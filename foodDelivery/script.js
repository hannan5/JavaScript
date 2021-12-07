const firebaseConfig = {
    apiKey: "AIzaSyDgvvB-ftgYkpdTqZooGTsgAlKX_q2sZ2g",
    authDomain: "balloonpopup-1325a.firebaseapp.com",
    projectId: "balloonpopup-1325a",
    storageBucket: "balloonpopup-1325a.appspot.com",
    messagingSenderId: "854852096147",
    appId: "1:854852096147:web:65409711dad72b54ba3d66",
    measurementId: "G-Z916Z430QD"
  };

  firebase.initializeApp(firebaseConfig);
  // console.log(app);
  // const analytics = getAnalytics(app);
  let auth = firebase.auth();
  console.log(auth);
  let firestore = firebase.firestore()
  console.log(firestore);

let LoginUserBtn = document.getElementById('LoginUserBtn');

let login = () =>{
let EmailLogin = document.getElementById('EmailLogin').value;
let passwordLogin = document.getElementById('passwordLogin').value;
// alert('hellpo')
auth.signInWithEmailAndPassword(EmailLogin,passwordLogin)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

// LoginUserBtn.addEventListener('submit', login)
auth.onAuthStateChanged((user) => {
      if (user) { 
    // User is signed in. 
    // alert('You are Login now')
    location.replace('dashboard.html')
    } 
      else {   
        // No user is signed in.
      }});



document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
})