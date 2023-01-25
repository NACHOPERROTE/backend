// class ProductManager  { 
//     constructor( title, description, price, thumbnail, code, stock){
//     this.title = title
//     this.description = description
//     this.price = price
//     this.thumbnail= thumbnail
//     this.code = code
//     this.stock = stock
// }

// }

//     class lavandinas extends ProductManager{
//         constructor(title, description, price, thumbnail, code, stock, lavandina){
//         super( title, description, price, thumbnail, code, stock)
//         this.tipo = lavandina
//         }
//     }


//     class detergentes extends ProductManager{
//         constructor(title, description, price, thumbnail, code, stock, detergente){
//         super( title, description, price, thumbnail, code, stock)
//         this.tipo = detergente
//         }
//     }


// const lavandina1 = new lavandinas(1, "ayudin", 2500, "lavandina")
// const detergente1 = new detergentes(1, "ayudin", 2500, "detergente")

// console.log(lavandina1)
// console.log(detergente1)



// const consultaDolar = async () => {  
// const promise = await fetch('https://criptoya.com/api/dolar')
// const dolar = await promise.json()
// return dolar
// }    

// consultaDolar().then(dolar => console.log(dolar))





//ENTREGA1

// class ProductManager  { 

//     constructor( products, title, description, price, thumbnail, code, stock){
//     this.products = products
//     this.title = title
//     this.description = description
//     this.price = price
//     this.thumbnail= thumbnail
//     this.code = code
//     this.stock = stock
//     this.id = ProductManager.creacionId()
// }       


//     static creacionId(){
//         if(this.creacioncreationId){
//             this.creacioncreationId++
//         }else{
//             this.creacioncreationId = 1
//         }
//         return this.creacioncreationId
//     }

//     addProduct(title, description, price, thumbnail, code, stock) {
//         this.products.push({ title, description, price, thumbnail, code, stock});
//       }

//     mostrarProductos(){
//         return this.products;
//     }

// }

// let getProducts = []


// const producto1 = new ProductManager ("hola", "hola", 2000, "no img", 123, 10)
// const producto2 = new ProductManager ("hola", "hola", 2000, "no img", 123, 10)
// const producto3 = new ProductManager ("hola", "hola", 2000, "no img", 123, 10)
// const producto4 = new ProductManager ("hola", "hola", 2000, "no img", 123, 10)

// console.log('productos agregados' , producto1.mostrarProductos())


// console.log(producto1)
// console.log(producto2)
// console.log(producto3)
// console.log(producto4)





//ENTREGA 1 PRUEBA


class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }
    // static crearId() {
    //     if(this.creacionId) { 
    //         this.creacionId++
    //     } else {
    //         this.creacionId = 1
    //     }
    //     return this.creacionId
    // }



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

    // addId(){
    //     this.products.push({id, idN});
    // }


    getProductById(id) {

        return this.products.find(product => product.id === id);
    
      }

}



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





// for (let i = 0; i < productos.length; i++) {
//     productos[i].id = 0;
// }

// for(let i = 0; i <= productos.length; i++) {
//     productos.addId(`id ${i}`, 1);
//   }

console.log(getProductos)

let validacion = getProductos.getProductById()

console.log(validacion)








