import { cardComponent } from "../components/cardComponent.js";
import { product } from "../data/product.js";

let readerArea = document.querySelector("#card");

product.map((product) => {
  readerArea.innerHTML += cardComponent(product);
});
console.log(product);
