teamName = document.getElementById('teamName');
inputNewQuestion = document.getElementById('inputNewQuestion');
addQuestionbtn = document.getElementById('addQuestionbtn');
questionUl = document.getElementById('questionUl');
addedMembers   = document.getElementById('addedMembers');
memberUl = document.getElementById('memberUl')
let showMembers = document.getElementById('showMembers')
let arrForMember = [];
let showingMembers = [];
let memberLi = document.getElementsByClassName('memberLi');
let membersLi = document.getElementsByClassName('membersLi');
let delTeamFlag = false;
let loginData = localStorage.getItem('login');
loginData = JSON.parse(loginData);

let currentUser = localStorage.getItem('currentUser');
currentUser = JSON.parse(currentUser);
console.log(currentUser);
let teamIndex = localStorage.getItem('teamIndex');
teamIndex = JSON.parse(teamIndex);
let userIndex = localStorage.getItem('userIndex');
userIndex = JSON.parse(userIndex);


// console.log(teamIndex)
let currentTeam = loginData[userIndex].createdTeam[teamIndex];
// console.log(curruntTeam)
// showing team name
let display=()=>{
    teamName.innerHTML = `TEAM NAME: ${currentTeam.team_name}`
    for (let i = 0; i < currentTeam.members.length; i++) {
        showMembers.innerHTML += `
        <li class="membersLi" id="${i}">${currentTeam.members[i]}<i id="${i}" onclick="deleteMember(this,this.id)" class="bi bi-x-circle-fill "></i></li>`
        showingMembers.push(currentTeam.members[i])
    }

}
    
display();

// Adding Question 

let addQuesion = () => {
    // getting questions from users input
    if (currentTeam.questions === undefined) {
        var questArr = []
    } else {

        questArr = currentTeam.questions;
    }
    questArr.push({ q: inputNewQuestion.value, ans: "" })
    // setting question in  users object 
    currentTeam.questions = questArr;
    currentTeam.reports = []

    localStorage.setItem("login", JSON.stringify(loginData))

    inputNewQuestion.value = ""
    displayQuestion()

}
addQuestionbtn.addEventListener('click', addQuesion);
let deleteQuestion = (id, e) => {
    // deleting question from dom
    e.parentNode.parentNode.remove()

    // deleting question from users object
    currentTeam.questions.splice(id, 1);
    currentTeam.reports = []

    localStorage.setItem("login", JSON.stringify(loginData))

}

let displayQuestion = () => {
    if (currentTeam.questions) {
        questionUl.innerHTML = ""
        // loop for displaying question
        for (let i = 0; i < currentTeam.questions.length; i++) {
            questionUl.innerHTML += `
                    <li id="${i}" class="questionItem"><div>${currentTeam.questions[i].q}</div>
                    <div class>
                    <i id="${i}" onclick="deleteQuestion(this.id,this)" class="bi bi-trash"></i>
                    </div>
                    </li>`
        }

    }

}

// adding members 

let addMember = (e, eId, d) => {
    let addedMembers = document.getElementById("addedMembers");
    addedMembers.innerHTML = ""
    arrForMember.push(loginData[eId].name);
    for (let i = 0; i < arrForMember.length; i++) {

        addedMembers.innerHTML += `<li class="bg-success" id="${i}">${arrForMember[i]}</li>`
    }

    e.remove()
    console.log(arrForMember);

    currentTeam.members.push(loginData[eId].name);
    localStorage.setItem('login', JSON.stringify(loginData))

}
let addedMember = () =>{
memberUl.innerHTML =''
for(j=0; j<loginData.length; j++){
    memberUl.innerHTML += `<li class="memberLi" onclick='addMember(this, this.id,${j})' id = '${j}'>${loginData[j].name}</li>`
    // memberUl.innerHTML += `<li class="memberLi">${arrForMember}</li>`

    if (loginData[j].name == loginData[userIndex].name) {
        memberLi[j].style.display = "none"
    }
    for (let s = 0; s < membersLi.length; s++) {

        if (memberLi[j].innerText === membersLi[s].innerText) {
            memberLi[j].style.display = "none"
        }
    }
//     for(let w = 0;w < membersLi.length;w++){
//         for(let q=0; q<memberLi.length; q++){
//     if(membersLi[w].innerText == memberLi[q].innerText){
//         memberLi[j].style.display = 'none'
//     }
// }
// }
}

console.log(memberUl)
}
addedMember()


let deleteMember = (e, eId) => {
    // deletePartTeam(eId)
    // deleting member from dom
    e.parentNode.remove();

    currentTeam.members.splice(eId, 1)
    deleteMemId = eId;
    deleteMemFlag = true;
    // setting data to local storage after deleting member
    localStorage.setItem("login", JSON.stringify(loginData))
    // refresh()
}

// let deleteTeamFunc = () => {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//             )
//             delTeamFlag = true
//             deletePartTeam()
//             window.location = "main.html"
//         }
//     })


// }


// var deletePartTeam = () => {

//     let teamFound = true;
//     let curruntpartIndex;
//     let teamMemberArr = currentTeam.members;
//     for (let i = 0; i < loginData.length; i++) {
//         for (let j = 0; j < teamMemberArr.length; j++) {
//             // console.log(usersObj[i], teamMemberArr[j])
//             if (loginData[i].name == teamMemberArr[j]) {
//                 // console.log(usersObj[i].partTeam)
//                 for (let k = 0; k < loginData[i].partTeam.length; k++) {
//                     if (loginData[i].partTeam[k].teamKey == currentTeam.teamKey) {
//                         loginData[i].partTeam.splice(k, 1)
//                         curruntpartIndex = k;
//                         // teamFound = false;
//                     }
//                 }
//                 if (teamFound) {
//                     loginData[i].partTeam.push(currentTeam);
//                 }
//                 if (delTeamFlag) {
//                     loginData[i].partTeam.splice(curruntpartIndex, 1)
//                     // console.log(usersObj[i].name);
//                 }
//             }
//         }
//     }

//     if (delTeamFlag) {
//         loginData[userIndex].createdTeam.splice(teamIndex, 1)
//     }
//     localStorage.setItem("login", JSON.stringify(loginData));
// }

// deletePartTeam()
