let todaydeal=[
  {
    img: 'serve/today/4105IiC5tDL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/411iWoJEJjL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/51o13K4h3-L._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/41tSQSq1xJL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/41-8D36eA5L._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/41dEcQR7UnL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/41lois+jAAL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/41snmTn9mrL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/41TssgTTkwL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/41uGjvXbeBL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/51o13K4h3-L._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/61I6Dgh3btL._SY695__AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/81v+JxkCi8L._SX679__AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
  {
    img: 'serve/today/4105IiC5tDL._AC_SY200_.jpg',
    offer: '23%off',
    discountmount: '11,499',
    Amount: '14,999.00',
    itemName: 'Realme Narzo 60x 5G',
  },
   
]

function data(arr){
  let newData=arr.map((item)=>{
    return` <div class="item">
    <img src="${item.img}" alt="#"></img>
    <div class="offers">
       <span class="offer"><button>${item.offer}</button>Limited time deal</span>
       <span class="mrp"> &#x20b9;<span>${item.discountmount}</span><span class="rate">M.R.P.:</span><p>&#x20b9;${item.Amount}</p></span>
       <p>${item.itemName}</p>
    </div>
    </div>  `
  })

let items=document.querySelector('.items')
let join=newData.join("")
// items.innerHTML=""
items.innerHTML=join
}
data(todaydeal)

// for sliding effects
const leftBtn= document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");


rightBtn.addEventListener("click",
    function(event){
        const conent=document.querySelector(".items");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn.addEventListener("click",
    function(event){
        const conent=document.querySelector(".items");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
// ----------------------------------------------------------------------------------

let KitchenSets=[
  {
    img: 'serve/kitchen/31pBi+w0T-L._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/41segPlPLJL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/41smlkGBKNL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/51AnZzTdggL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/51ASu0nw8IL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/51Cq1exILLS._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/51IdFaKP1eL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/51Jyw5nuIDL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/61dU3iubSVL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/61KLLzjPZZL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/61kmAfCCJjL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/61lY3dPfZxL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/61Mn8AcOsUL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/61xXn6KEQLL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/61Zq94wig4L._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/71J7jrDJwlL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/71Mig6ty0TL._AC_SY200_.jpg',
  },
  {
    img: 'serve/kitchen/515yXaO6+UL._AC_SY200_.jpg',
  },
]

function data2(arr){
  let newData=arr.map((item)=>{
    return` <div class="kitchen">
    <img src="${item.img}" alt="#"></img>
 
    </div>  `
  })

let items=document.querySelector('.kitchens')
let join=newData.join("")
// items.innerHTML=""
items.innerHTML=join
}
data2(KitchenSets)

const leftBtn1= document.querySelector(".l-btna");
const rightBtn1 = document.querySelector(".l-btnb");
rightBtn1.addEventListener("click",
    function(event){
        const conent1=document.querySelector(".kitchens");
        conent1.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn1.addEventListener("click",
    function(event){
        const conent2=document.querySelector(".kitchens");
        conent2.scrollLeft -=1100;
        event.preventDefault();

})
// --------------------------------------------------------------------------------

let scooters=[
  {
    img: 'serve/moter bike/71ZylCJbG4L._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51Zsk80ytcL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51Zsk80ytcL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/511sS2vAj6L._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/61Lg7B0x5NL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/71QHotlsT8L._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/41tXGqoTsmL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/61AM3f2Lu4L._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/516oKuGsePL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/410tpnv2PPL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51tuA+NpL-L._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51OZs8i3CzL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51Y-fw9a7DL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51BaFSr-PLL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51CpQWTUn8L._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51N4Rot3QwL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51xU2ZP9UvL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51Y-fw9a7DL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51OZs8i3CzL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51BT8hgnqFL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51FPJP5L1YL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51PLDJqOkrL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51yoW0ne7vL._AC_SY200_ (1).jpg',
  },
  {
    img: 'serve/moter bike/516O0WxnFHL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/51FPJP5L1YL._AC_SY200_.jpg',
  },
  {
    img: 'serve/moter bike/516O0WxnFHL._AC_SY200_.jpg',
  },
]

function data3(arr){
  let newData=arr.map((item)=>{
    return` <div class="kitchen">
    <img src="${item.img}" alt="#"></img>
 
    </div>  `
  })

let items=document.querySelector('.scooters')
let join=newData.join("")
// items.innerHTML=""
items.innerHTML=join
}
data3(scooters)
const leftBtn2= document.querySelector(".l-btnc");
const rightBtn2 = document.querySelector(".l-btnd");
rightBtn2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".scooters");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".scooters");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
// ----------------------------------------------------------------------------


let newArrivals=[
  {
    img: 'serve/new arrivals/31N27Oq6uOL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/51ZtbI7hPKL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/61fB9ZnXHuL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/61QHbJch75L._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/71+K5QXQaqL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/71WJd3yDX8L._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/81Am1j952oL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/81qv43XpBCL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/81ZgIAr8C6L._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/517wmQ+oi4L._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/518y1zTuTxL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/615jDPv01BL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/718nycdMDLL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/816atz++wqL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/81Am1j952oL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/31N27Oq6uOL._AC_SY200_.jpg',
  },
  {
    img: 'serve/furniture/61rjjbufLXL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/61fB9ZnXHuL._AC_SY200_.jpg',
  },
  {
    img: 'serve/furniture/513WC6czKZL._AC_SY200_.jpg',
  },
  {
    img: 'serve/furniture/717GPiLTPyL._AC_SY200_.jpg',
  },
  {
    img: 'serve/new arrivals/518y1zTuTxL._AC_SY200_.jpg',
  },
  {
    img: 'serve/furniture/81QiNyrMYEL._AC_SY200_.jpg',
  },
]

function data4(arr){
  let newData=arr.map((item)=>{
    return` <div class="kitchen">
    <img src="${item.img}" alt="#"></img>
 
    </div>  `
  })

let items=document.querySelector('.arrivals')
let join=newData.join("")
// items.innerHTML=""
items.innerHTML=join
}
data4(newArrivals)

const leftBtn3= document.querySelector(".l-btne");
const rightBtn3 = document.querySelector(".l-btnf");
rightBtn3.addEventListener("click",
    function(event){
        const conent=document.querySelector(".arrivals");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn3.addEventListener("click",
    function(event){
        const conent=document.querySelector(".arrivals");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
// ------------------------------------------------------------------------------

let carpets=[
  {
    img: 'serve/carpet/81sOYks3oOL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/61dvdyXlglL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81gt-fM1lUL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81HgHwc+ohL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81x8WczgQTL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81lblRwhUBL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81sOYks3oOL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81x8WczgQTL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81jukB8qziL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81sOYks3oOL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/81x8WczgQTL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/51JtNkKEZXL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/91JVuyYEcfL._AC_SY200_.jpg',
  },
  {
    img: 'serve/carpet/91vgi4gf+QL._AC_SY200_ (1).jpg',
  },
  {
    img: 'serve/carpet/91vgi4gf+QL._AC_SY200_ (2).jpg',
  },
 
]

function data5(arr){
  let newData=arr.map((item)=>{
    return` <div class="kitchen">
    <img src="${item.img}" alt="#"></img>
 
    </div>  `
  })

let items=document.querySelector('.carpets')
let join=newData.join("")
// items.innerHTML=""
items.innerHTML=join
}
data5(carpets)

const leftBtn4= document.querySelector(".l-btng");
const rightBtn4 = document.querySelector(".l-btnh");
rightBtn4.addEventListener("click",
    function(event){
        const conent=document.querySelector(".carpets");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn4.addEventListener("click",
    function(event){
        const conent=document.querySelector(".carpets");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
// ----------------------------------------------------------------------------


// For Hero Section 

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

let intervalId = setInterval(function() {
  plusDivs(1); 
}, 3000); 


// for menu button

let navbar=document.querySelector("header")
let panel=document.querySelector(".panel")
var sidebar = document.querySelector('.sidebar');
var close = document.querySelector('.xmark');
let shop_section = document.querySelector('.shop-section');
let hero_section = document.querySelector('.hero-section');
let footer= document.querySelector('Footer');
let body= document.querySelector('body');
function toggleSidebar() {
sidebar.classList.add('sidebarClose')
  // sidebar.style.transform = (sidebar.style.transform === 'translateX(0px)' || sidebar.style.transform === '') ? 'translateX(-350px)' : 'translateX(0px)';
  navbar.classList.add("hide")
  panel.classList.add("hide")
  shop_section.classList.add("hide")
  hero_section.classList.add("hide")
  footer.classList.add("hide")
  body.style.backgroundColor=`#222831`
}

close.addEventListener('click',()=>{
  sidebar.classList.remove('sidebarClose')
  // sidebar.style.transform = (sidebar.style.transform === 'translateX(0px)' || sidebar.style.transform === '') ? 'translateX(-350px)' : 'translateX(0px)';
  navbar.classList.remove("hide")
  panel.classList.remove("hide")
  shop_section.classList.remove("hide")
  hero_section.classList.remove("hide")
  footer.classList.remove("hide")
})


// For Account and List 
let tringle=document.querySelector(".triangle")
let singin=document.querySelector(".nav-singin")
let sign=document.querySelector(".hdn-sign")
singin.addEventListener('click',()=>{
   sign.classList.toggle("show")
   tringle.classList.toggle("show")
})


// for language list
let lang=document.querySelector(".lang")
let triangl=document.querySelector(".triangl")
let language=document.querySelector(".language")
lang.addEventListener('mouseover',()=>{
  triangl.classList.toggle("show")
  language.classList.toggle("show")
  // console.log("hello")
})


document.getElementById('dynamic-select').addEventListener('change', function() {
  var select = this;
  var selectedOption = select.options[select.selectedIndex];
  var width = getTextWidth(selectedOption.textContent, getComputedStyle(select).font);
  // Add some extra width for padding and borders
  select.style.width = (width + 20) + 'px';
});

function getTextWidth(text, font) {
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
  var context = canvas.getContext('2d');
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}