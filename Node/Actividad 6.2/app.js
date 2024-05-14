const express = require('express')

const app = express()
const PORT = 80
app.use(express.urlencoded({ extended: true }));

const db = require("better-sqlite3")("db.sqlite")

let ejs = require('ejs');

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

// Usuarios
app.get('/usuarios', (req, res) => {
    const usuarios = db.prepare('SELECT * FROM usuarios').all()
    res.send(usuarios)
})

app.get('/usuario', (req, res) => {
    res.render('formularioUsuario')
})

app.post('/usuario', (req, res) => {
    const nombre = req.body.nombre
    const email = req.body.email
    
    const insertarUsuario = db.prepare('INSERT INTO usuarios (nombre, email) VALUES (?, ?)')
    insertarUsuario.run(nombre, email)
    res.redirect('/usuarios')
});

// Productos
app.get('/productos', (req, res) => {
    const productos = db.prepare('SELECT * FROM productos').all()
    res.send(productos)
})

app.get('/producto', (req, res) => {
    res.render('formularioProducto')
})

app.post('/producto', (req, res) => {
    const nombre = req.body.nombre
    const precio = req.body.precio
    
    const insertarUsuario = db.prepare('INSERT INTO productos (nombre, precio) VALUES (?, ?)')
    insertarUsuario.run(nombre, precio)
    res.redirect('/productos')
});

// Comandas
app.get('/comandas', (req, res) => {
    const comandas = db.prepare('SELECT * FROM comandas').all()
    res.send(comandas)
})

app.get('/comanda', (req, res) => {
    const comanda = db.prepare('SELECT C.id AS id_comanda, C.usuario_id, C.producto_id, U.id AS id_usuario , U.nombre AS nombre_usuario, U.email, P.id AS id_producto, P.nombre AS nombre_producto, P.precio FROM comandas C JOIN usuarios U ON C.usuario_id = U.id JOIN productos P ON C.producto_id = P.id WHERE C.id = ?').get(req.query.id)
    res.send(comanda)
})

app.set('view engine', 'ejs');