const sliderWrapper = document.querySelector(".sliderWrapper");
const listItems = document.querySelectorAll(".listItem");

console.log(sliderWrapper);
//sliderWrapper.style.transform = "translateX(00vw)"; //initial point starts from px value

listItems.forEach((item, index) => {
     item.addEventListener("click", ()=> {
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
     });
});
