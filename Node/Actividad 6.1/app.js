const express = require('express')

const app = express()
const PORT = 80

const db = require("better-sqlite3")("db.sqlite")

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

// Usuarios
app.get('/usuarios', (req, res) => {
    const usuarios = db.prepare('SELECT * FROM usuarios').all()
    res.send(usuarios)
})

app.get('/usuario', (req, res) => {
    const usuario = db.prepare('SELECT * FROM usuarios WHERE id = ?').get(req.query.id)
    res.send(usuario)
})

// Productos
app.get('/productos', (req, res) => {
    const productos = db.prepare('SELECT * FROM productos').all()
    res.send(productos)
})

app.get('/producto', (req, res) => {
    const producto = db.prepare('SELECT * FROM productos WHERE id = ?').get(req.query.id)
    res.send(producto)
})

// Comandas
app.get('/comandas', (req, res) => {
    const comandas = db.prepare('SELECT * FROM comandas').all()
    res.send(comandas)
})

app.get('/comanda', (req, res) => {
    const comanda = db.prepare('SELECT C.id AS id_comanda, C.usuario_id, C.producto_id, U.id AS id_usuario , U.nombre AS nombre_usuario, U.email, P.id AS id_producto, P.nombre AS nombre_producto, P.precio FROM comandas C JOIN usuarios U ON C.usuario_id = U.id JOIN productos P ON C.producto_id = P.id WHERE C.id = ?').get(req.query.id)
    res.send(comanda)
})