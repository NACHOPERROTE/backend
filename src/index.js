import express from "express";
import { ProductManager } from "../src/models/productsManager.js";
const app = express()
const PORT = 4000

const productManager = new ProductManager('src/models/productos.txt')

app.use(express.json())
app.use(express.urlencoded({extended: true}))



//RUTAS


app.get('/product', async (req, res) => { 
    const { category } = req.query; 
    console.log(category)
    const productos = await productManager.getProducts()
    console.log(productos)
    res.send(JSON.stringify(productos))
})

app.get('/product/:id', async (req, res) => { 
    const producto = await productManager.getProductById(req.params.id)
    console.log(producto)
    res.send(JSON.stringify(producto))
})

app.post('/product', async (req, res) => { 
    let mensaje = await productManager.addProduct(req.body)
    res.send(mensaje)
})

app.delete('/product/:id', async (req, res) => {
    let mensaje = await productManager.deleteProduct(req.params.id) 
    res.send(mensaje)
})

app.put('/product/:id', async (req, res) => { 
    let mensaje = await productManager.loadProduct(req.params.id, req.body)
    res.send(mensaje)
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})
