const fs = require('fs');


function getUsers() {
  const usersData = fs.readFileSync('users.json', 'utf8');
  return JSON.parse(usersData);
}


function saveUsers(users) {
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8');
}


function getMatchHistory() {
  const matchHistoryData = fs.readFileSync('matchHistory.json', 'utf8');
  return JSON.parse(matchHistoryData);
}


function saveMatchHistory(matchHistory) {
  fs.writeFileSync('matchHistory.json', JSON.stringify(matchHistory, null, 2), 'utf8');
}

const allUsers = getUsers();
console.log(allUsers);


const newUser = {
  id: 3,
  username: 'user3',
  password: 'password3',
  matchHistory: []
};

allUsers.push(newUser);
saveUsers(allUsers);