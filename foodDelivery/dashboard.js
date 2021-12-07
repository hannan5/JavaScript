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


let logoutbtn = document.getElementById('logoutbtn');

let logout = () =>{
    // alert('logout')
    auth.signOut();
}
auth.onAuthStateChanged((user)=> {
    if(!user){
      location.replace('./index.html')
    }
  })
// logoutbtn.addEventListener('submit',logout)