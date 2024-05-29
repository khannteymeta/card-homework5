import { cardComponent } from "../components/cardComponent.js";
import { products } from "../data/products.js";

console.log(products);
let readerArea = document.querySelector("#card");

products.map((product) => {
  readerArea.innerHTML += cardComponent(product);
});
