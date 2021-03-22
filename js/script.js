const items = document.querySelectorAll(".product-box__item");
const priceSelect = document.getElementById("priceSelect");
const mealSelect = document.getElementById("mealSelect");
const form = document.getElementById("form");
const cart = [];

// Add products to the cart, calculate quantity and total amount
function addToCart() {
  const parentBox = this.parentNode,
    itemPrice = parentBox.querySelector(".item__price").innerHTML;
  let price = +itemPrice.replace(/грн./g, "");
  cart.push(price);

  let total = cart.reduce(function (a, b) {
    return a + b;
  }, 0);

  document.querySelector(".top-cart-info__item span:first-child").innerHTML =
    cart.length;
  document.querySelector(
    ".top-cart-info__item span:last-child"
  ).innerHTML = total;
}

// Add eventlistener to the add buttons
for (let i = 0; i < items.length; i++) {
  function addEvent(elem, type, handler) {
    elem.addEventListener(type, handler, false);
  }
  addEvent(items[i].querySelector(".product-box__btn"), "click", addToCart);
}

//Show modal form on button click
let modal = document.getElementById("formModal");
let formBtn = document.querySelector(".btn-check");
formBtn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Validate the form
form.addEventListener("submit", (event) => {
  let name = document.forms["requestForm"]["name"].value;
  let email = document.forms["requestForm"]["email"].value;
  if (name == "" || name == " ") {
    event.preventDefault();
    alert("Name must be filled out");
  } else if (email == "" || email == " ") {
    event.preventDefault();
    alert("E-mail must be filled out");
  } else {
    alert("Thank you for your order!");
  }
});

// Filder by first select
mealSelect.addEventListener("change", (e) => {
  let val = e.target.value;
  for (let i = 0; i < items.length; i++) {
    if (val !== items[i].id && val !== "0") {
      items[i].classList.add("hide");
    } else {
      items[i].classList.remove("hide");
    }
  }
});

// let price = document.getElementById("priceSelect").value;
// if (price == 0 && price <= items[i].dataset.price) {
//   items[i].classList.add("hide");
// } else {
//   items[i].classList.remove("hide");
// }

// //Iterate the selection elements and add the function to the 'change' event
// const sels = document.getElementsByTagName("select");
// for (i = 0; i < sels.length; i++) {
//   sels[i].addEventListener("change", (e) => {
//     let val = e.target.value;
//     for (let i = 0; i < items.length; i++) {
//       if (val !== items[i].dataset.type && val !== "0") {
//         items[i].classList.add("hide");
//       } else {
//         items[i].classList.remove("hide");
//       }
//     }
//     let price = document.getElementById("priceSelect").value;
//     if (price == 0 && price <= items[i].dataset.price) {
//       items[i].classList.add("hide");
//     } else {
//       items[i].classList.remove("hide");
//     }
//   });
// }

// // Filter by price inline

// priceSelect.addEventListener("change", (e) => {
//   let val = e.target.value;
//   for (let i = 0; i < items.length; i++) {
//     if (val == 0) {
//       items[i].style.display = "block";
//     } else if (val == 30 && items[i].dataset.price <= 30) {
//       items[i].style.display = "block";
//     } else if (val == 50 && items[i].dataset.price <= 50) {
//       items[i].style.display = "block";
//     } else if (val == 100 && items[i].dataset.price <= 100) {
//       items[i].style.display = "block";
//     } else if (val == 150 && items[i].dataset.price <= 150) {
//       items[i].style.display = "block";
//     } else {
//       items[i].style.display = "none";
//     }
//   }
// });

//Add class

// priceSelect.addEventListener("change", (e) => {
//   let val = e.target.value;
//   for (let i = 0; i < items.length; i++) {
//     if (val == 0) {
//       items[i].classList.remove("hide");
//     } else if (val == 30 && items[i].dataset.price <= 30) {
//       items[i].classList.remove("hide");
//     } else if (val == 50 && items[i].dataset.price <= 50) {
//       items[i].classList.remove("hide");
//     } else if (val == 100 && items[i].dataset.price <= 100) {
//       items[i].classList.remove("hide");
//     } else if (val == 150 && items[i].dataset.price <= 150) {
//       items[i].classList.remove("hide");
//     } else {
//       items[i].classList.add("hide");
//     }
//   }
// });

// for (let i = 0; i < items.length; i++) {
//   //   console.log(items[i].dataset.price);
//   // }

//Filter by category

// mealSelect.addEventListener("change", (e) => {
//   let val = e.target.value;
//   for (let i = 0; i < items.length; i++) {
//     if (val !== items[i].dataset.type && val !== "0") {
//       items[i].classList.add("hide");
//     } else {
//       items[i].classList.remove("hide");
//     }
//   }
// });
