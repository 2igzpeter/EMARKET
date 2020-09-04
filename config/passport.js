


var LocalStrategy = require("passport-local").Strategy;

var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);






module.exports = function(passport) {
  //PASSPORT SERIALIZE USER ID 
 passport.serializeUser(function(user, done){
  done(null, user.id);
  console.log("user.id: " + user.id)
 });

 passport.deserializeUser(function(id, done){
  connection.query("SELECT * FROM inscrits WHERE id = ? ", [id],
   function(err, rows){
    done(err, rows[0]);
   });
 });





 passport.use(
  'local-signup',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },




  function(req, username, password, done){
   connection.query("SELECT * FROM inscrits WHERE username = ? ", 
   [username], function(err, rows){
    if(err)
     return done(err);
    if(rows.length){
     return done(null, false, req.flash('signupMessage', 'That is already taken'));
    }else{
     var newUserMysql = {
      username: username,
      password: bcrypt.hashSync(password, null, null)

     };
      console.log("New username account: " + username)
     //COMMANDE MYSQL
     var insertQuery = "INSERT INTO inscrits (username, password) values (?, ?)";
  






     //CONNEXION DATABASE INSERT INTO USERS TABLE
     connection.query(insertQuery, [newUserMysql.username, newUserMysql.password],

      function(err, rows){
        
       newUserMysql.id = rows.insertId;


       return done(null, newUserMysql);

      }
      );



      //console.log(newUserMysql.id)
      console.log(rows.username)
      console.log("New username account INSERT INTO DATABASE: " + "Id: "+newUserMysql.id )
      console.log(newUserMysql)
      console.log(rows)
      console.log(req.id)
    }
   });
  })
 ); //FIN STRATEGY SIGN UP






 passport.use(
  'local-login',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){
   connection.query("SELECT * FROM inscrits WHERE username = ? ", [username],
   function(err, rows){
    if(err)
     return done(err);
    if(!rows.length){
     return done(null, false, req.flash('loginMessage', 'No User Found, Please Register'));
    }
    if(!bcrypt.compareSync(password, rows[0].password))
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));

    return done(null, rows[0]);
   });
  })
 );//FIN STRATEGY LOGIN







  passport.use( 'local', 
  new LocalStrategy( {
     idField: 'id' 
    },

  function(viewsposts, done) {
    // ...
    connection.query("SELECT * FROM inscrits WHERE id = ? ", [viewsposts], 
    function(err, rows){
      if(err)
      return done(err);
      else{
        return done(null, rows);
      }
    })
      console.log(viewsposts)

  }
));




};//FIN EXPORT MODULE











//exporter cette fonction dans route.js
adduser = function (insertId){
  var values = [insertId];
      
  var sql = "INSERT INTO `inscrits` (`id_user`) VALUES (?)";
  connection.query(sql, [values], function (err, result) {
      console.log(err);
      if (err) throw err;
      console.log("insert_id inserted");
  });
}




//EXPORT FUNCTION TO ROAD VIEWSPOSTS SELECT DATA 
getuser = function (){
  connection.query("SELECT * FROM inscrits", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
}










//FUNCTION EXPORT TO ROAD VIEWSPOSTS 
views = function(viewsposts){

var values = [viewsposts];
  
  var sql = mysql.format("SELECT * FROM inscrit WHERE id=?", [values]);

  connection.query(sql, function(error, rows, fields){
  if(error){
  console.log('error');
  }else{
  console.log('successful\n');
  console.log(rows);
  console.log("BIENVENUE SUR LA ROUTE: VILLE")
  console.log("VOICI LA COMMANDE SQL: " + sql);
  console.log("value: " +values);
  
  res.send(rows);
  }
  })
  }
