const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Sample data
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ['Rahul', 'Sita', 'Amit', 'Vikram', 'Priya'];
let employees = [
  { employeeId: 1, name: 'Rahul' },
  { employeeId: 2, name: 'Sita' },
  { employeeId: 3, name: 'Amit' },
];

let users = [
  { username: 'amit223', name: 'Amit', score: 89 },
  { username: 'sita456', name: 'Sita', score: 90 },
  { username: 'rahul123', name: 'Rahul', score: 99 },
];

let contacts = [
  { phoneNumber: '1234567890', name: 'Rahul', address: '123 Street, City' },
  { phoneNumber: '0987654321', name: 'Sita', address: '456 Avenue, City' },
  { phoneNumber: '1112223334', name: 'Amit', address: '789 Boulevard, City' },
];

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

function findNumber(ele, number) {
  return ele === number;
}

app.get('/numbers/find/:number', (req, res) => {
  let number = parseInt(req.params.number);
  let result = numbers.find((ele) => findNumber(ele, number));
  res.json(result);
});

function findName(ele, name) {
  return ele === name;
}

app.get('/names/find/:name', (req, res) => {
  let name = req.params.name;
  let result = names.find((ele) => findName(ele, name));
  res.json(result);
});

function findEmployee(ele, employeeId) {
  return ele.employeeId === employeeId;
}

app.get('/employees/find/:employeeId', (req, res) => {
  let employeeId = parseInt(req.params.employeeId);
  let result = employees.find((ele) => findEmployee(ele, employeeId));
  res.json(result);
});

function findUser(ele, username) {
  return ele.username === username;
}

app.get('/users/find/:username', (req, res) => {
  let username = req.params.username;
  let result = users.find((ele) => findUser(ele, username));
  res.json(result);
});

function findContact(ele, phoneNumber) {
  return ele.phoneNumber === phoneNumber;
}

app.get('/contacts/find/:phoneNumber', (req, res) => {
  let phoneNumber = req.params.phoneNumber;
  let result = contacts.find((ele) => findContact(ele, phoneNumber));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
