// slider
var slideindex = 1;
var i = 0;
var slidesSelected = document.getElementsByClassName("Slides");
var autoPlay = document.getElementById("autoplay");

function showSlides(n) {
  if (n > slidesSelected.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = slidesSelected.length;
  }
  for (i = 0; i < slidesSelected.length; i++) {
    slidesSelected[i].style.display = "none";
  }
  slidesSelected[slideindex - 1].style.display = "block";
}

// hide all and display only first pic
showSlides(slideindex);

// works for next or prev
function plusSlides(n) {
  showSlides((slideindex += n));
}

// auto play

function AutoSliding() {
  for (i = 0; i < slidesSelected.length; i++) {
    slidesSelected[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slidesSelected.length) {
    slideindex = 1;
  }
  slidesSelected[slideindex - 1].style.display = "block";
}

// autoPlay.addEventListener("click", AutoSliding);

// making it dynamic every 1 sec( 1000 ms)

function slideShow() {
  autoPlay.removeEventListener("click", slideShow);
  autoStart = setInterval(AutoSliding, 1000);
}

autoPlay.addEventListener("click", slideShow);

function stopSlideShow() {
  clearInterval(autoStart);
  autoPlay.addEventListener("click", slideShow);
}

// photos added to cart

var itemsCount = 0;
var randomArrary = [0, 0, 0, 0, 0, 0];

function getcartLength() {
  itemsCount = 0;
  for (var i = 0; i < randomArrary.length; i++) {
    itemsCount += randomArrary[i];
  }
}
document.getElementById("items-calc").innerHTML = itemsCount;
//add to cart
function add(index) {
  randomArrary[index]++;
  console.log(randomArrary);
  getcartLength();
  document.getElementById("items-calc").innerText = itemsCount;
}
//remove from cart
function remove(index) {
  randomArrary[index]--;
  if (randomArrary[index] < 0) randomArrary[index] = 0;
  console.log(randomArrary);
  getcartLength();
  document.getElementById("items-calc").innerText = itemsCount;
}
// var addToCartButtons = document.getElementsByClassName("addup");
// var removeButton2 = document.getElementById("remove2");
// function handleAddToCart() {
//   for (const e of addToCartButtons) {
//     console.log(e);
//     e.addEventListener("click", (event) => {
//       randomArrary[i]++;
//       getcartLength();
//       console.log(randomArrary);
//       document.getElementById("items-calc").innerText = itemsCount;
//     });
//   }
// addToCartButtons.forEach((e, i) => {
// e.addEventListener("click", (event) => {
//   randomArrary[i]++;
//   getcartLength();
//   console.log(randomArrary);
//   document.getElementById("items-calc").innerText = itemsCount;
// });
// });
// }
// handleAddToCart();

// for (var i = 0; i < addToCartButtons.length; i++) {
//   console.log(randomArrary);
//   addToCartButtons[i].onclick = function () {
//     randomArrary[i]++;
//     console.log(i);
//     getcartLength();
//     document.getElementById("items-calc").innerText = itemsCount;
//   };

// var removeFromCartButtons = document.getElementsByClassName(
//   "fas fa-trash-restore"
// );
// for (var i = 0; i < removeFromCartButtons.length; i++) {
//   removeFromCartButtons[i].onclick = function () {
//     itemsCount--;
//     if (itemsCount < 0) itemsCount = 0;

//     document.getElementById("items-calc").innerHTML = itemsCount;
//   };
// }

// making buttons appear on mouseover and stuff
var sora1 = document.getElementById("sora1");
function onFocus() {
  document.getElementById("buttons1").style.display = "block";
}
sora1.addEventListener("mouseover", onFocus);
sora1.addEventListener("mouseout", () => {
  document.getElementById("buttons1").style.display = "none";
});
//
var sora2 = document.getElementById("sora2");
function onFocus2() {
  document.getElementById("buttons2").style.display = "block";
}
sora2.addEventListener("mouseover", onFocus2);
sora2.addEventListener("mouseout", () => {
  document.getElementById("buttons2").style.display = "none";
});
//
var sora3 = document.getElementById("sora3");
function onFocus3() {
  document.getElementById("buttons3").style.display = "block";
}
sora3.addEventListener("mouseover", onFocus3);
sora3.addEventListener("mouseout", () => {
  document.getElementById("buttons3").style.display = "none";
});
//
var sora4 = document.getElementById("sora4");
function onFocus4() {
  document.getElementById("buttons4").style.display = "block";
}
sora4.addEventListener("mouseover", onFocus4);
sora4.addEventListener("mouseout", () => {
  document.getElementById("buttons4").style.display = "none";
});
//
var sora5 = document.getElementById("sora5");
function onFocus5() {
  document.getElementById("buttons5").style.display = "block";
}
sora5.addEventListener("mouseover", onFocus5);
sora5.addEventListener("mouseout", () => {
  document.getElementById("buttons5").style.display = "none";
});
//
var sora6 = document.getElementById("sora6");
function onFocus6() {
  document.getElementById("buttons6").style.display = "block";
}
sora6.addEventListener("mouseover", onFocus6);
sora6.addEventListener("mouseout", () => {
  document.getElementById("buttons6").style.display = "none";
});

// change to phone pics

function changetoPhones() {
  var imagesCollection = document.getElementsByClassName("products-inchange");
  for (i = 0; i < imagesCollection.length; i++) {
    imagesCollection[i].setAttribute("src", `./Phone products/${i + 1}.jpg`);
  }
}
var phonesProducts = document.getElementById("phone-product-show");
phonesProducts.addEventListener("click", changetoPhones);
// change to makeup pics
function changetoMakeup() {
  var imagesCollection = document.getElementsByClassName("products-inchange");
  for (i = 0; i < imagesCollection.length; i++) {
    imagesCollection[i].setAttribute("src", `./Makeup products/${i + 1}.jpg`);
  }
}
var makeupProducts = document.getElementById("makeup-products-show");
makeupProducts.addEventListener("click", changetoMakeup);
// change to clothes pics
function changetoClothes() {
  var imagesCollection = document.getElementsByClassName("products-inchange");
  for (i = 0; i < imagesCollection.length; i++) {
    imagesCollection[i].setAttribute("src", `./Clothes products/${i + 1}.jpg`);
  }
}
var clothesProducts = document.getElementById("clothes-products-show");
clothesProducts.addEventListener("click", changetoClothes);
// change to cars pics
function changetoCars() {
  var imagesCollection = document.getElementsByClassName("products-inchange");
  for (i = 0; i < imagesCollection.length; i++) {
    imagesCollection[i].setAttribute("src", `./Cars Products/${i + 1}.jpg`);
  }
}
var carsProducts = document.getElementById("cars-products-show");
carsProducts.addEventListener("click", changetoCars);

// change to default pics
function changetoDefault() {
  var imagesCollection = document.getElementsByClassName("products-inchange");
  for (i = 0; i < imagesCollection.length; i++) {
    imagesCollection[i].setAttribute(
      "src",
      `./first products images/${i + 1}.jpg`
    );
  }
}
var defaultPics = document.getElementById("defualtpics");
defaultPics.addEventListener("click", changetoDefault);

//footer button

var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
