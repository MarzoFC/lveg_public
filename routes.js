const pool = require('./database');


// Router
const router = app => {

    app.post('/autenticar', (req, res) => {
        if(req.body.usuario === "asfo" && req.body.contrasena === "holamundo") {
      const payload = {
       check:  true
      };
      const token = jwt.sign(payload, app.get('llave'), {
       expiresIn: 1440
      });
      res.json({
       mensaje: 'Autenticación correcta',
       token: token
      });
        } else {
            res.json({ mensaje: "Usuario o contraseña incorrectos"})
        }
    });


    app.get('/vocs', (request, response) => {
        pool.query('SELECT * FROM users where rol=?','voz', (error, result) => {
            if (error) throw error;
     
            response.send(result);
        });
    });

    app.get('/productorxs', (request, response) => {
        pool.query('SELECT * FROM users where rol=?','prod', (error, result) => {
            if (error) throw error;
     
            response.send(result);
        });
    });

    pool.query('SELECT * FROM users where rol=?','est', (error, result) => {
    app.get('/estudios', (request, response) => {
            if (error) throw error;
     
            response.send(result);
        });
    });

    app.get('/visuales', (request, response) => {
        pool.query('SELECT * FROM users where rol=?','vis', (error, result) => {
            if (error) throw error;
     
            response.send(result);
        });
    });

    app.get('/users/:id', (request, response) => {
        const name = request.params.id;
        pool.query('SELECT * FROM users WHERE id = ?', name, (error, result) => {
            if (error) throw error;
         
            response.send(result);
        });
    });

    app.post('/users', (request, response) => {
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
            if (error) throw error;
     
            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });


}

// Export the router
module.exports = router;
