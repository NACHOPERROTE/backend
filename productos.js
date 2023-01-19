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







class ProductManager  { 

    constructor( products, title, description, price, thumbnail, code, stock){
    this.products = products
    this.title = title
    this.description = description
    this.price = price
    this.thumbnail= thumbnail
    this.code = code
    this.stock = stock
    this.id = ProductManager.creacionId()
}       

    
    static creacionId(){
        if(this.creacioncreationId){
            this.creacioncreationId++
        }else{
            this.creacioncreationId = 1
        }
        return this.creacioncreationId
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        this.products.push({ title, description, price, thumbnail, code, stock});
      }

    mostrarProductos(){
        return this.products;
    }

}

let getProducts = []

console.log(getProducts)

getProducts.addProduct("g","g", 200, "sin img", 250, 10);

console.log('Producto agregado', ProductManager.mostrarProductos());