// import ('./fire');
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


let mainHeading = document.getElementById('mainHeading');
let signResturantBtn = document.getElementById('signResturantBtn');
let signUserBtn = document.getElementById('signUserBtn')

let signUpResturant = document.getElementById('signUpResturant');
let signUpUser = document.getElementById('signUpUser');

let resturantName = document.getElementById('resturantName').value;
let resturantEmail = document.getElementById('resturantEmail').value;
let country = document.getElementById('country').value;
let city = document.getElementById('city').value;
let resturantPassword = document.getElementById('resturantPassword').value;


function showResturant(){
    signUpResturant.style.display = 'block';
    mainHeading.style.display = 'none';
    auth.sig

}
signResturantBtn.addEventListener('click', showResturant)


function showUser(){
    signUpUser.style.display = 'block';
    mainHeading.style.display = 'none';
    // let id = null;
    // const elem = document.getElementById("animate");   
    // let pos = 0;
    // clearInterval(id);
    // id = setInterval(frame, 5);
    // function frame() {
    //   if (pos == 300) {
    //     clearInterval(id);
    //   } else {
    //     pos++; 
    //     signUpUser.style.top = pos + "px"; 
    //     signUpUser.style.left = pos + "px"; 
    //   }
    // }
  
}
signUserBtn.addEventListener('click', showUser)

// Resturants data push on firestore

let signInResturantBtn = document.getElementById('signInResturantBtn');
let signUpResturantFunc = () =>{
    let resturantName = document.getElementById('resturantName').value;
    let resturantEmail = document.getElementById('resturantEmail').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let resturantPassword = document.getElementById('resturantPassword').value;

    auth.createUserWithEmailAndPassword(resturantEmail, resturantPassword)
    .then((user) => {
    firestore.collection('resturants').doc(user.user.uid).set({
        ResturantCity: city,
        ResturantCountry: country,
        ResturantEmail: resturantEmail,
        ResturantName: resturantName,
        uid:user.user.uid,
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
    });

    // firebase 
    // firestore.collection
})
}
signInResturantBtn.addEventListener('click',signUpResturantFunc)


document.getElementById('form').addEventListener('submit',(event)=>{
    event.preventDefault()
})


// User data push on firestore

let signInUserBtn = document.getElementById('signInUserBtn');
let signUpUserFunc = () =>{
    let userName = document.getElementById('userName').value;
    let userEmail = document.getElementById('userEmail').value;
    let userPhone = document.getElementById('userPhone').value;
    let usercountry = document.getElementById('usercountry').value;
    let usercity = document.getElementById('usercity').value;
    let userPassword = document.getElementById('userPassword').value;

    auth.createUserWithEmailAndPassword(userEmail, userPassword)
    .then((user) => {
    firestore.collection('customers').doc(user.user.uid).set({
        CustomerName: userName,
        CustomerEmail: userEmail,
        CustomerPhone:userPhone,
        CustomerCountry: usercountry,
        CustomerCity: usercity,
        uid:user.user.uid,
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
    });

    // firebase 
    // firestore.collection
})
}
signInUserBtn.addEventListener('click',signUpUserFunc)

document.getElementById('formUser').addEventListener('submit',(event)=>{
    event.preventDefault()
})