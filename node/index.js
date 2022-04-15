const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const random_name = require('node-random-name');
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);
const createTable = 'CREATE TABLE IF NOT EXISTS people(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255) DEFAULT NULL)';
connection.query(createTable);

const sql = `INSERT INTO people(name) VALUES ('${random_name()}')`;
connection.query(sql);

const selectPeople = `SELECT name FROM people`;
let dataReturned = '';

connection.query(selectPeople, function (err, people) {
  for (i = 0; i < people.length; i++) {
    dataReturned += `<p>Pessoa criada: ${people[i].name}</p>`;
  }
});
connection.end();

app.get('/', (req, res) => {
  res.send(`<h1> Full Cycle Rocks!!!</h1> ${dataReturned}`);
})

app.listen(port, () => {
  console.log(`server rodando na porta ${port}`)
})