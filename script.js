const wrapper = document.querySelector(".sliderWrapper")
const listItem = document.querySelectorAll(".listItem");

listItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    });
});