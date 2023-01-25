import {promises as fs} from 'fs'


//PRODUCTOS

class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }


    addProduct(title, description, price, thumbnail, code, stock) {


        this.products.push({
            id: this.id,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
        });
        this.id++;
    }

    getProductById(id) {

        return this.products.find(product => product.id === id);
    
      }

}


//CREACION DE PRODUCTOS

let getProductos = new ProductManager();

getProductos.addProduct("lavandina" , "Anti Splash x1L", 1200 , "img", 1, 10) , 
getProductos.addProduct("lavandina" , "Anti Splash x2L" , 1400, "img", 2, 10), 
getProductos.addProduct("lavandina" , "Ayudin Clasica x1L" , 1600, "img", 3, 10),
getProductos.addProduct("lavandina" , "Ayudin Clasica x2L" , 1600, "img", 4, 10),
getProductos.addProduct("lavandina" , "Ayudin Clasica x4L" , 1600, "img", 5, 10),
getProductos.addProduct("lavandina" , "Ayudin Clasica x5L" , 1600, "img", 6, 11),
getProductos.addProduct("lavandina" , "Cloro 5L" , 1600, "img", 7, 10),
getProductos.addProduct("lavandina" , "Ayudin Gel 700ml" , 1600, "img", 8, 10),
getProductos.addProduct("lavandina" , "Vim Gel 700ml" , 1600, "img", 9, 10)


//VALIDACION

console.log(getProductos)

let validacion = getProductos.getProductById()

console.log(validacion)



//ENTREGA 2


const productos = async () => {

    await fs.writeFile('./productManager.js', "")
    let traduccion = await fs.readFile('./productManager.js', 'utf-8')
    console.log(traduccion)
    await fs.appendFile('./productManager.js', JSON.stringify(getProductos))
    traduccion = await fs.readFile('./productManager.js', 'utf-8')
    console.log(traduccion)

}

productos()