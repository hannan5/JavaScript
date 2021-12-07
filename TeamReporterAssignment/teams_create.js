// // another try 

let add_team = document.getElementById("add-team");
let createBtn = document.getElementById("createBtn");
let selection = document.getElementById("selection");
let team_name = document.getElementById("team_name");
let parentDiv = document.getElementById("parentDiv");
let deleteTeam = document.getElementById("deleteTeam");
let addMoreBtn = document.getElementById("addMoreBtn");
let memberUl = document.getElementById("memberUl");
let memberLi = document.getElementById('memberLi');
// let membersModal = document.getElementsByClassName("membersModal");
let memberShow = document.getElementById('memberShow');
let team;
let index;
let teamsObj;
let membersArr = "";
let arrForMember = []
// let membersUl = "";
let addMemberIndex;
let userIndex = ""
let arr2 = []
let teamIndex
let arr3 = [];

// gettig users data from localStorage
let loginData = localStorage.getItem("login");
loginData = JSON.parse(loginData);

// getting logged in user object from local storage
let currentUseObj = localStorage.getItem("currentUser");
currentUseObj = JSON.parse(currentUseObj);
// console.log(currentUseObj)

// getting current logged in users object from main object
for (let i = 0; i < loginData.length; i++) {
    if (currentUseObj.email == loginData[i].email) {
        console.log(currentUseObj.email, loginData[i].email)
        userIndex = i;
    }
}



// console.log(currentUseObj.createdTeam)


let teamInfo = () => {

    console.log(loginData[userIndex])
    let selectedCategory = selection.options[selection.selectedIndex].value;
    let team = {
        admin: loginData[userIndex].email,
        adminName: loginData[userIndex].name,
        team_name: team_name.value,
        category: selectedCategory,
        members: arrForMember,
        reports: [],
        teamKey: new Date().getTime()
    }

// console.log(team);
// console.log(team{team_name});

    arr2 = loginData[userIndex].createdTeam;

    if (arr2 === undefined) {
        var arr = []
        
    } else {
        var arr = arr2;
    }
    arr.push(team)
    //  setting team object to user's main object and setting  to local storage

    loginData.createdTeam = arr;
    localStorage.setItem("login", JSON.stringify(loginData));
    displayTeamBox()
}

// displayFunc()



// getting users object from localstorage
// let teams = localStorage.getItem("teamInput");
// teams = JSON.parse(teams);
// // teams = JSON.parse(teams);
// console.log(teams)
// // loop for finding current user and index
// for (let i = 0; i < teams.length; i++) {
//     if (teams[i].name === loginData.name) {
//         index = i;
//         teamsObj = teams[i].createdTeam;
//     }
// }




let addMember = (e, eId, d) => {
    let addedMembers = document.getElementById("addedMembers");
    addedMembers.innerHTML = ""
    arrForMember.push(loginData[eId].name);
    for (let i = 0; i < arrForMember.length; i++) {

        addedMembers.innerHTML += `<li class="bg-success" id="${i}">${arrForMember[i]}</li>`
    }

    e.remove()
    console.log(arrForMember);



//     let loginData = localStorage.getItem('login');
//     loginData = JSON.parse(loginData);
//     let memberUl = document.getElementById("memberUl");
//     memberUl.innerHTML = ""
//     for(j=0; j<loginData.length; j++){
//     arrForMember.push(loginData[j].name);
//     }
//     for (let i = 0; i < arrForMember.length; i++) {

//         memberUl.innerHTML += `<li class="memberLi" id="${i}">${arrForMember[i]}</li>`
    }
console.log(arrForMember)
//     // e.remove()
//     console.log(arrForMember);

// }
// addMember();
// console.log(arrForMember);

let teamsMatch = (i, e) => {
    localStorage.setItem("userIndex", JSON.stringify(userIndex));
    // for(b=0; b < currentUseObj;){
    localStorage.setItem("teamIndex", JSON.stringify(i));
    // }
    window.location = "./setting.html"

}
// teamsMatch()
console.log(teamIndex)


// console.log(q)
createBtn.addEventListener('click', teamInfo)
parentDiv.innerHTML = ""
let displayTeamBox = () => {


    // for(a = 0; a<loginData.length; a++){
    //     memberShow.innerHTML +=`
    //     <li class = 'teamsMember' onclick='addMember()'>${loginData[a].name}</li> `
    // }
    memberUl.innerHTML =''
    for(j=0; j<loginData.length; j++){
        memberUl.innerHTML += `<li class="memberLi" onclick='addMember(this, this.id,${j})' id = '${j}'>${loginData[j].name}</li>`
        
    }
    console.log(memberUl)
    
    // goSetting=()=>{
    //     window.location('./setting.html')
    // }
    
    for (let i = 0; i < loginData[userIndex].createdTeam.length; i++) {
        parentDiv.innerHTML += `<div class="card" id="teambox">
                                <h5 id="card_name" class="card_name">${loginData[userIndex].createdTeam[i].team_name}</h5>
                                <h6> Members : <span class='card_span'> ${loginData[userIndex].createdTeam[i].members} </span></h6>         
                                <button id="details" onclick='teamsMatch(${i})'> Details </button>
                            </div>`

     }




}
displayTeamBox()

let deleteTeamFunc = (e) => {
    teamsObj.splice(e, 1)
    teams[index].createdTeam = teamsObj;
    localStorage.setItem("teamInput", JSON.stringify(teams));

    displayFunc()
    refresh()

}

let addMoreFunc = (e) => {
    addMemberIndex = e;

}


// Teams You are Part of

let membersMatch = (i, e) => {
    localStorage.setItem("userIndex", JSON.stringify(userIndex));
    // for(b=0; b < currentUseObj;){
    localStorage.setItem("teamIndex", JSON.stringify(i));
    // }
    window.location = "./setting.html"

}

let partteambox = document.getElementById('partteambox');

let teamsPrt = loginData[userIndex].partTeam;
// console.log(teamsPrt)
if (teamsPrt.length == 0) {
    partteambox.innerHTML = `<p class="emptyTeams">You are not part of any team.</p>`

} else {
    let currentUser = loginData[userIndex];
    let partTeamMember = "";
    let partTeamDisplay = () => {

        for (let i = 0; i < teamsPrt.length; i++) {
            partTeamMember = ""
            for (let w = 0; w < teamsPrt[i].members.length; w++) {
                partTeamMember += `<p>${teamsPrt[i].members[w]}</p>`
                // membersArr += `<p>${teamsObj[i].members[w]}</p>`
                if (w > 0) {
                    break;
                }
            }
            if (teamsPrt[i].members.length > 2) {

                partTeamMember += `<p>& ${teamsPrt[i].members.length - 2} OTHERS</p>`
            }
            // setting data to dom by loop
            partteambox.innerHTML += `
            <div id="${i}" class="card-body">
                <h6>admin : ${teamsPrt[i].adminName}</h6/>
                <h5>Team Name : <span id="teamSpan">${teamsPrt[i].team_name}</span></h5>
                <div class="membersDiv container">members : <span>${partTeamMember}</span></div>
                <button type="button" onclick="membersMatch(${i})" class="btn btn-dark">
                    See more details
                </button>
                
            </div>`
        }
    }

    // teamsPrt.p
    partTeamDisplay()
}

// another try  end















// Monday Night code starting from there
// let teambox = document.getElementById('teambox');
// let cardName = document.getElementById('card_name');


// // let user 

function popform() {
    let popup = document.getElementById('form-call').style.display = 'block';
    //     // popup.classList.toggle('show')
    //     // alert('hello')
}

// // it is user login info on local storage 
// let userinfo = localStorage.getItem('login')
// console.log(userinfo);



// function TeamInput(team_name,selection,owner_email){
//     this.team_name = team_name;
//     this.email = email;
//     this.selection = selection;
//     this.owner_email = owner_email;
// }
// let owner_email = localStorage.getItem('user_email')

// function createteam(){

//     let create_team = [];
//     const team_name1 = document.getElementById('team_name');
//     const selection1 = document.getElementById('selection');
//      // let selectedCategory = selection1.options[selec]


// let getdata = localStorage.getItem('team');

// team = (getdata) ? JSON.parse(getdata) : [];
// team.map((created_team)=> {
//     create_team.push(created_team);
// if(owner_email == getdata.owner_email){
// alert('Hello')
// }
// })

//     let createNewTeam = new TeamInput(team_name1.value, selection1.value, owner_email);
//     console.log(createNewTeam)
//     create_team.push(createNewTeam);
//     localStorage.setItem('team', JSON.stringify(create_team));
// console.log(create_team)

// }

// const getTeam =()=>{

//     let getTeam= localStorage.getItem('team');
//     let user_email = localStorage.getItem('user_email');

// teams = (getTeam) ? JSON.parse(getTeam) : [];

// teams.map((team)=> {

//     // create_team.push(created_team);
// if(user_email == team.owner_email){
//     console.log('Hello', team);
//     teamList = document.getElementById('teamList');
//     teams = teambox.innerHTML;
//     card_name = teams.innerHTML ;
//     // console.log(teamList)
//     teamList.insertAdjacentHTML('beforeend','<div class="card">'+teams+ '</div>');
//    let cards = document.getElementsByClassName('card_name')

// //    for (const key in cards) {
//     for(i=0; i<cards.length; i++){
//      cards[i].innerText = JSON.stringify(team.team_name)
//     }
// //    }
//     // document.getElementById('card_name').innerHTML = team.team_name;
// }
// })



// }

// {
//     getTeam();
// }
// b = localStorage.getItem('team');
// console.log(userinfo);
// let a = b.push(userinfo);
// console.log(a);

// AHAd Bhai ADDED Saturday Night
// for(){
// let getdata = localStorage.getItem('team');
// team = (getdata) ? JSON.parse(getdata) : [];
// team.map((created_team)=> {
//     create_team.push(created_team);
// if(owner_email == createdNewTeam.owner_email){
//     // cardName.innerText += created_team.team_name
//     cardName.innerText += `
//     <h5 id="card_name"> ${created_team.team_name}</h5>
//     `
// // alert('Hello')
// }
// }
// console.log(memberUl);

