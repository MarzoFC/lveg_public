// Require packages and set the port
const express = require('express');

const port = process.env.PORT || 3000;
const path = __dirname + '/views/';

const bodyParser = require('body-parser');
const routes = require('./routes')

const app = express();
app.use(express.static(path));

const  jwt = require('jsonwebtoken'),
config = require('./config/config');

app.set('llave', config.llave);

const rutasProtegidas = express.Router(); 

rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });

 app.post('/',rutasProtegidas, (req, res) => {
  pool.query(
    'INSERT INTO users (name,rol,website,info,contact) VALUES (?,?,?,?,?)',
    [req.body.name, req.body.rol, req.body.website, req.body.info, req.body.contact],
    (error) => {
      if (error) {
        console.error(error);
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json({status: 'ok'});
      }
    }
  );
});


const cors = require("cors");

var corsOptions = {
  origin: "http://la-vida-es-gratis.herokuapp.com"
};

app.use(cors(corsOptions));

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
