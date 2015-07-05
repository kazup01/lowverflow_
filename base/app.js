//module setting
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var mysql = require('mysql');
var path = require('path');
var app = express();



//=========================================
//settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//=========================================


//route
// app.get('/', function(req, res){
// 	res.sendFile(path.join(__dirname + '/views/index.jade'));
// });
app.get('/', function(req, res){
	res.render('index', {});
});
//mysqlのusersテーブルからデータを読んでいる
app.get('/users', function (req, res) {
  connection.query('select * from users', function (err, rows) {
    res.render('users', { title: 'connect to mysql', users: rows });
  });
});

//=========================================


//connect to mysql
var connection = mysql.createConnection({
	host		: 	'localhost',
	user		: 	'test_user',
	password	: 	'test_password',
	database	: 	'test_db'
});
/**mysql接続例始め
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
mysql接続例終わり */


//=========================================


//port番号指定
app.listen(3000);
console.log('starting now');