const express = require('express')

const app = express()
app.set('view engine', 'ejs');
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
    res.render('usuarios', { usuarios: usuarios })
})

app.get('/usuario', (req, res) => {
    if (req.query.id) {
        const usuario = db.prepare('SELECT * FROM usuarios WHERE id = ?').get(req.query.id)
        res.render('detallesUsuario', { usuario: usuario })
    } else {
        res.render('formularioUsuario')
    }
})

app.get('/usuario/editar', (req, res) => {
    const usuario = db.prepare('SELECT * FROM usuarios WHERE id = ?').get(req.query.id)
    res.render('formularioEditarUsuario', { usuario: usuario })
})

app.post('/usuario', (req, res) => {
    const nombre = req.body.nombre
    const email = req.body.email
    
    const insertarUsuario = db.prepare('INSERT INTO usuarios (nombre, email) VALUES (?, ?)')
    insertarUsuario.run(nombre, email)
    res.redirect('/usuarios')
})

app.post('/usuario/editar', (req, res) => {
    const id = req.body.id
    const nombre = req.body.nombre
    const email = req.body.email
    
    const insertarUsuario = db.prepare('UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?')
    insertarUsuario.run(nombre, email, id)
    res.redirect('/usuario?id=' + id)
})

// Productos
app.get('/productos', (req, res) => {
    const productos = db.prepare('SELECT * FROM productos').all()
    res.render('productos', { productos: productos })
})

app.get('/producto', (req, res) => {
    if (req.query.id) {
        const producto = db.prepare('SELECT * FROM productos WHERE id = ?').get(req.query.id)
        res.render('detallesProducto', { producto: producto });
    } else {
        res.render('formularioProducto')
    }
})

app.get('/producto/editar', (req, res) => {
    const producto = db.prepare('SELECT * FROM productos WHERE id = ?').get(req.query.id)
    res.render('formularioEditarProducto', { producto: producto })
})

app.post('/producto', (req, res) => {
    const nombre = req.body.nombre
    const precio = req.body.precio
    
    const insertarUsuario = db.prepare('INSERT INTO productos (nombre, precio) VALUES (?, ?)')
    insertarUsuario.run(nombre, precio)
    res.redirect('/productos')
})

app.post('/producto/editar', (req, res) => {
    const id = req.body.id
    const nombre = req.body.nombre
    const precio = req.body.precio
    
    const insertarUsuario = db.prepare('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?')
    insertarUsuario.run(nombre, precio, id)
    res.redirect('/producto?id=' + id)
})

// Comandas
app.get('/comandas', (req, res) => {
    const comandas = db.prepare('SELECT C.id AS id_comanda, C.usuario_id, C.producto_id, U.id AS id_usuario , U.nombre AS nombre_usuario, U.email, P.id AS id_producto, P.nombre AS nombre_producto, P.precio FROM comandas C JOIN usuarios U ON C.usuario_id = U.id JOIN productos P ON C.producto_id = P.id').all()
    res.render('comandas', { comandas: comandas });
})

app.get('/comanda', (req, res) => {
    if (req.query.id) {
        const comanda = db.prepare('SELECT C.id AS id_comanda, C.usuario_id, C.producto_id, U.id AS id_usuario , U.nombre AS nombre_usuario, U.email, P.id AS id_producto, P.nombre AS nombre_producto, P.precio FROM comandas C JOIN usuarios U ON C.usuario_id = U.id JOIN productos P ON C.producto_id = P.id WHERE C.id = ?').get(req.query.id)
        res.render('detallesComanda', { comanda: comanda });
    } else {
        const usuarios = db.prepare('SELECT * FROM usuarios').all()
        const productos = db.prepare('SELECT * FROM productos').all()
        res.render('formularioComanda', { usuarios: usuarios, productos: productos });
    }
})

app.get('/comanda/editar', (req, res) => {
    const comanda = db.prepare('SELECT C.id AS id_comanda, C.usuario_id, C.producto_id, U.id AS id_usuario , U.nombre AS nombre_usuario, U.email, P.id AS id_producto, P.nombre AS nombre_producto, P.precio FROM comandas C JOIN usuarios U ON C.usuario_id = U.id JOIN productos P ON C.producto_id = P.id WHERE C.id = ?').get(req.query.id)
    const usuarios = db.prepare('SELECT * FROM usuarios').all()
    const productos = db.prepare('SELECT * FROM productos').all()
    res.render('formularioEditarComanda', { comanda: comanda, usuarios: usuarios, productos: productos });
})

app.post('/comanda', (req, res) => {
    const usuario_id = req.body.idUsuario
    const producto_id = req.body.idProducto
    
    const insertarComanda = db.prepare('INSERT INTO comandas (usuario_id, producto_id) VALUES (?, ?)')
    insertarComanda.run(usuario_id, producto_id)
    res.redirect('/comandas')
})

app.post('/comanda/editar', (req, res) => {
    const id = req.body.id
    const usuario_id = req.body.idUsuario
    const producto_id = req.body.idProducto
    
    const insertarComanda = db.prepare('UPDATE comandas SET usuario_id = ?, producto_id = ? WHERE id = ?')
    insertarComanda.run(usuario_id, producto_id, id)
    res.redirect('/comanda?id=' + id)
})