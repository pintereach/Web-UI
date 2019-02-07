//Carousel and HTML Cards
class Carousel {
  constructor (carousel) {
    this.carousel = carousel;
    this.leftBtn = this.carousel.querySelector(".left-button");
    this.rightBtn = this.carousel.querySelector(".right-button");
    this.imgList = this.carousel.querySelectorAll(".carousel-img");
    this.index=0;
    this.imgList[this.index].style.display="block";  
    
    this.leftBtn.addEventListener("click", () => this.cycleLeft());
    this.rightBtn.addEventListener("click", () => this.cycleRight());
  
    this.cardList = Array.from(this.imgList).map(img => new Card(img))
  }
  cycleLeft () {
      this.imgList[this.index].style.display = "none";
      this.index === 0 ? this.index = this.imgList.length-1 : this.index--
      this.imgList[this.index].style.display = "block";
    
      this.cardList.forEach((card, index) => {
        index !== this.index ? card.deselect() : null
      });
    
      this.cardList[this.index].select()
  }
  cycleRight () {
      this.imgList[this.index].style.display = "none";
      this.index === this.imgList.length-1 ? this.index = 0 : this.index ++;
      this.imgList[this.index].style.display = "block";
    
      this.cardList.forEach((card, index) => {
        index !== this.index ? card.deselect() : null
      });
    
      this.cardList[this.index].select()
  }
}

class Card {
  constructor(img) {
    this.img = img;
    this.val = img.dataset.val;
    this.card = document.querySelector(`div[data-val="${this.val}"]`);
    
  }
    select() {
      this.card.style.display="block";
    }
    deselect() {
      this.card.style.display = "none";
    } 
}
let carouselList = document.querySelectorAll(".carousel");
carouselList.forEach(banana => new Carousel(banana))
//

//Content
const siteContent = {
  "main-content": {
    "features-h4":"Features",
    "features-content": "Multi-featured and diverse archieving tool and web site hosting!",
    "about-h4":"About",
    "about-content": "As a researcher, it’s difficult to keep track of articles you want to read later. Pintereach helps you research by enabling you to save and organize articles in to categories to read later.",
    "services-h4":"Services",
    "services-content": "Having problems, please submit a help form through your account settings, and we will fix them.",
    "product-h4":"Product",
    "product-content": "Our Product comes in several sized packages for memory options. We also have server hosting packages.",
    "meow-h4":"Meow",
    "meow-content": "Cats are nice and fluffy, they make great companions. Never upset a cat or they will curse you.",
  },
};

let textContentList = document.querySelectorAll(".text-content");

textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["meow-h4"];
textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["meow-content"];
//
