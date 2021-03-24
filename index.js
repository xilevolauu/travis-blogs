//back to top
let mybutton = document.getElementById("myBtn-top");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 60|| document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.documentElement.scrollTop = 0; 
  }

//slide
let index = 1;
changeImg = function() {
  let imgs = ["./assets/img/slider/slider1.jpg","./assets/img/slider/slider2.jpg","./assets/img/slider/slider3.jpg"];
  document.getElementById('img').src = imgs[index];
  index++;
  if(index==3){
    index=0; 
  }
}
setInterval(changeImg,2000);
//popup image
let modal = document.getElementById('myModal');
let images = document.getElementsByClassName('myImages');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
for (let i = 0; i < images.length; i++) {
  let img = images[i];
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
} 
//close popup image
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
//menu mobile
let header = document.getElementById('header');
let mobileMenu = document.getElementById('mobile-menu');
mobileMenu.onclick = function() {
  let isClosed = header.clientHeight === 46;
  if (isClosed) {
    header.style.height = 'auto'
  } else {
    header.style.height = '46px'
  }
}
