const form= document.querySelector('form'); //llamo a la etiqueta form

const inputName= document.querySelector('#productName'), //para que se guarde en el id nombre//
inputModel= document.querySelector("#model"),// Modelo de la bicicleta.
inputPrice= document.querySelector("#price"),
inputDescription= document.querySelector("#description"),// también es una constante//
inputImg= document.querySelector("#img"), 
btnSave= document.querySelector("#btnSave");
container = document.querySelector("#container-fluid");


const productos= []; //Creo un array para guardar mis productos

class Producto { //Constructor del objeto
	constructor(name, model, description, price, img) {
	this.name= name;
	this.model= model;
	this.description= description;
	this.price= price;
	this.img= img;
	}
}

//funcion para que carga los productos al array//
function cargarProducto(producto){
	return productos.push(producto);
}
console.log(productos);

//Ahora necesito crear una función para crear producto

function crearProducto(name, model, description, price, img){
	name= inputName.value; //toma el valor de lo que le paso. Por eso el value//
	model= inputModel.value;
	description= inputDescription.value;
	price= inputPrice.value;
	img= inputImg.value;

	return new Producto(name, model, description, price, img)

}



//Crear una función para crear contenido HTML// Código desde una card de materialized
function crearHTML(){
let html;
for (const producto of productos) {
	html= `
    <div class="col s4 m3">
      <div class="card">
        <div class="card-image">
        <img class="responsive=img" src=${producto.img} />
          <span class="card-title">${producto.name}</span>
        </div>
        <div class="card-content">
          <p>
          	${producto.model}
          </p>
          <p>
          	${producto.description}
          </p>
          <p>
          	$${producto.price}
          </p>
        </div>
        <div class="card-action">
          <a href="#" class="btn">Buy</a>
        </div>
      </div>
    </div>
  </div>`;
}
container.innerHTML += html //
}

btnSave.addEventListener("click", () =>{
	const product= crearProducto(name, model, description, price, img);
	cargarProducto(product)
	crearHTML(productos)
});