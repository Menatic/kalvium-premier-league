//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  managerArray = [managerName, managerAge, currentTeam, trophiesWon];
  return managerArray
}



// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(arr) {

  if (arr.length === 0) {
    return null;
  }

  let formationObject = {
    defender: arr[0],
    midfield: arr[1],
    forward: arr[2]
  }
  return formationObject
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
// working
function filterByDebut(year) {
  const filteredPlayers = players.filter((player) => player.debut == year)
  return filteredPlayers
}

//Progression 4 - Filter players that play at the position _______
//working
function filterByPosition(position) {
  let filteredPlayers = []
  for (let i = 0;i <players.length;i++){
    if (position === players[i].position){
      filteredPlayers.push(players[i])
    }
  }
  return filteredPlayers;
}

//Progression 5 - Filter players that have won ______ award
//working
function filterByAward(awardName) {
  let filteredPlayers = []
  for (let i = 0;i <players.length;i++){
   const awards = players[i].awards
   for (let j = 0;j < awards.length;j++) {
    if(awards[j].name === awardName){
      filteredPlayers.push(players[i])
      break;
    }
   }
  }
  return filteredPlayers;
}

//Progression 6 - Filter players that won ______ award ____ times
// working
function filterByAwardxTimes(awardName, noOfTimes) {
  // console.log(awardName,noOfTimes)
  let filteredPlayers = []
  for (let i = 0;i <players.length;i++){
    const awards = players[i].awards
    let count = 0
    for (let j = 0;j < awards.length;j++) {
      if(awards[j].name === awardName){
        count += 1
    }
  }
    if (count == noOfTimes) {
      filteredPlayers.push(players[i])
    }
  }
  // console.log(filteredPlayers)
  return filteredPlayers;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
//working
function filterByAwardxCountry(awardName, country) {
  let filteredPlayers = []
  for (let i = 0;i <players.length;i++){
   const awards = players[i].awards
   if(players[i].country === country) {
     for (let j = 0;j < awards.length;j++) {
      if(awards[j].name === awardName ){
        filteredPlayers.push(players[i])
        break;
      }
     }
   }
  }
  return filteredPlayers;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
//working
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let filteredPlayers = []
  for (let i = 0;i <players.length;i++){
    const awards = players[i].awards.length
    if (awards >= noOfAwards && players[i].team === team && players[i].age < age) {
      filteredPlayers.push(players[i])
    }
  }
  return filteredPlayers;
}

//Progression 9 - Sort players in descending order of their age
//working
function SortByAge() {
  const ageList = players.map(player => player.age) 
  ageList.sort((a, b) => b - a)
  
  const sortedPlayers = []
  
  for (let i = 0; i < ageList.length; i++) {
    const currentAge = ageList[i]
    for (let j = 0; j < players.length; j++) {
      if (players[j].age === currentAge) {
        sortedPlayers.push(players[j])
        break;
      }
    }
  }
  return sortedPlayers;
}



//Progression 10 - Sort players beloging to _____ team in descending order of awards won


function FilterByTeamxSortByNoOfAwards(team) {
  const teamPlayers = players.filter(player => player.team === team);
  const sortedPlayers = teamPlayers.sort((a, b) => b.awards.length - a.awards.length);
  return sortedPlayers;
}



//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
// working

function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  const filteredPlayers = [];

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const awards = player.awards.filter(award => award.name === awardName);
    
    if (awards.length === noOfTimes && player.country === country) {
      filteredPlayers.push(player);
    }
  }

  filteredPlayers.sort((a, b) => a.name.localeCompare(b.name));
  console.log(filteredPlayers)
  return filteredPlayers;
}



//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
    let filteredPlayers = players.filter(player => player.age >= age)
    let sortedPlayers = filteredPlayers.sort((a,b) => a.name.localeCompare(b.name))
    sortedPlayers.forEach(player => {
      player.awards.sort((a,b) => b.year -a.year)
    })
    console.log(sortedPlayers)
    return sortedPlayers
  }
