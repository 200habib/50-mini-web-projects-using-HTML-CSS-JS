const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("article");


const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;
console.log ("currentImg"+ currentImg);
function updatePrevButtonVisibility() {
  if (currentImg==1) {
    prevEl.style.display= "none";
  } else { 
    prevEl.style.display= "block";
  }
}

updatePrevButtonVisibility()

nextEl.addEventListener("click", () => {
  currentImg++;
  updateImg();
  updatePrevButtonVisibility()
});

prevEl.addEventListener("click", () => {
  currentImg--;
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  
  imageContainerEl.style.transform = `translateX(-${(currentImg -1) * 1000}px)`;
}







