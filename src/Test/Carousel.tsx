import React from "react";
import { Link } from "react-router-dom";
import '../style.css';
import './carousel.css';
/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; */

function Carousel() {
    return (
        
<div className="container">
<div className="row ">
    <div className="col-md-12">
        <h3 className="text-center carousel-title"id="message">See all our best selling products!</h3>
        <div className="col-md-12">
        {/* <!-- Arrow on desktop --> */}
            <div className="button-placement d-none d-sm-none d-md-block ">
                <a className="btn btn-sm btn-arrow" href="#carouselExample" role="button" data-slide="prev"> <i className="fas fa-chevron-circle-left"></i> </a>
                <a className="btn btn-sm btn-arrow" href="#carouselExample" role="button" data-slide="next"> <i className="fas fa-chevron-circle-right"></i> </a>
            </div>{loadCarouselPC()}

          {/* <!-- Arrows on smartphones --> */}
            <div className="button-placement d-md-none d-lg-none d-xl-none">
                <a className="btn btn-sm btn-arrow" href="#carouselExampleMobile" role="button" data-slide="prev"> <i className="fas fa-chevron-circle-left"></i> </a>
                <a className="btn btn-sm btn-arrow" href="#carouselExampleMobile" role="button" data-slide="next"> <i className="fas fa-chevron-circle-right"></i> </a>
            </div>
        </div>
    </div>
    
    {/* <!-- Carousel on desktop --> */}
    <div id="carouselExample" className="carousel slide d-none d-sm-none d-md-block" data-ride="carousel" >
        <div className="carousel-inner" >
            <div className="carousel-item active">
                <div className="row" id="products">
                </div>
            </div>
            <div className="carousel-item">
                <div className="row" id="products2">
                </div>
            </div>
        </div>
    </div>
    
      {/* <!-- Carousel on smartphones --> */}
    <div id="carouselExampleMobile" className="carousel slide d-md-none d-lg-none d-xl-none" data-ride="carousel">
        <div className="carousel-inner" id="here">    
        </div>
    </div>
    </div>
</div>
    );
  }

  /* Array of all coffees */
let coffees: any[] = []
function allCoffees(){
    coffees = products.filter(it => new RegExp('coffee').test(it.type))
    console.log(coffees)
}
/* Array of all teas */
let teas: any[] = []
function allTeas(){
    teas = products.filter(it => new RegExp('tea').test(it.type))
    console.log(teas)
}


/* Array of the products with popularity 1 */
let carouselPcFirst: any[] =[]
function pcFirst(){
  carouselPcFirst = products.filter(it => new RegExp("1").test(it.popularity))
  console.log(coffees)
}

/* Array of the products with popularity 2 */
let carouselPcSecond: any[] = [];
function pcSecond(){
  carouselPcSecond = products.filter(it => new RegExp('2').test(it.popularity))
  console.log(coffees)
}

  /* Load carousel on desktop */
function loadCarouselPC(){
    pcFirst();
    pcSecond()
    carouselPcFirst.map((product, i)=> {
      let item = document.createElement('div');
      item.id = 'content';
      item.className = 'col-md-3';
      item.innerHTML = 
      `<div class="product-block">
      <a class="links" href="productDescription.html">
      <img class="d-block w-100" src="${product.img_path}" alt="Product"></a>
      <h4>${product.name}</h4>
      <p class="des">${product.description}</p>
      <p>Price: ${product.price} DKK</p>
      <div class="row">
          <div class="col-md-6">
              <a class="btn btn-sm">ADD TO CART</a>
          </div>
      </div>
  </div>`
      const products = document.getElementById('products');
      item.getElementsByClassName('btn btn-sm')[0].addEventListener('click', ()=>{
          addToCart(product)
      });
      item.getElementsByClassName('links')[0].addEventListener('click', ()=>{
          itemDescription(product)
      });
      if (products != null){
      products.append(item)}
  });
  carouselPcSecond.map((product, i)=> {
    let item = document.createElement('div');
    item.id = 'content';
    item.className = 'col-md-3';
    item.innerHTML = 
    `<div class="product-block">
    <a class="links" href="productDescription.html">
    <img class="d-block w-100" src="${product.img_path}" alt="Product">
    </a>
    <h4>${product.name}</h4>
    <p class="des">${product.description}</p>
    <p>Price: ${product.price} DKK</p>
    <div class="row">
        <div class="col-md-6">
            <a class="btn btn-sm">ADD TO CART</a>
        </div>
    </div>
    </div>`
    const products = document.getElementById('products2');
    item.getElementsByClassName('btn btn-sm')[0].addEventListener('click', ()=>{
        addToCart(product)
    });
    item.getElementsByClassName('links')[0].addEventListener('click', ()=>{
        itemDescription(product)
    });
    if (products != null){
    products.append(item)}

  });
  }

  /* All products in the shop */
let products = [
    {
    id: 12,
    name: "Green tea",
    price: 40,
    img_path: "./src/Images/Coffees/3.png",
    description: "Tasting notes: Cool mint, Ginger, Spices",
    "popularity": "3",
    type: "tea",
    longDescription: "A true classic in herbal tea. Cool Mint is without a doubt our best selling herbal tea. Cool Mint tea is a wonderful herbal tea of various herbs, including peppermint, spiced with lemongrass and ginger. Refreshing and delicious. Cool Mint herbal tea can also be enjoyed as iced tea on a warm summer day. ",
   },
   {
    id: 3,
    name: "Starbucks House Blend",
    price:45,
    img_path: "./src/Images/Coffees/3.png",
    description: "Tasting notes: Toffee, Cinnamon, Lemon",
    popularity: "1",
    type: "coffee",
    longDescription: "This variant is called House Blend and is the first coffee that Starbucks created and it has been with them ever since. The coffee comes from South and Central America and is medium roasted 100% Arabica. The frugal roasting gives a mild caramelized taste with notes of nuts and mild sweetness. This Starbucks for Nespresso is recommended as a lungo.",
}]

  export default Carousel;



function addToCart(product: any) {
    throw new Error("Function not implemented.");
}

function itemDescription(product: any) {
    throw new Error("Function not implemented.");
}
  