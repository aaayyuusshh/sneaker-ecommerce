//sliding fucntionality for the slider section
const wrapper = document.querySelector(".sliderWrapper")
const listItem = document.querySelectorAll(".listItem");

listItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    });
});

//dynamic update of product setion based on selected product
const product = document.querySelector(".product");
listItem.forEach((item,index) => {
    item.addEventListener("click",() => {
        
        const productTitle = document.querySelector(".productTitle");
        const productImg = document.querySelector(".productImg");

        if (index == 0){
            productTitle.textContent = "AIR JORDANS";
            productImg.src = "img/jordan.png"; 
            productImg.classList.remove("yeezyImg");
            productImg.classList.remove("af1Img");
        } else if (index == 1){
            productTitle.textContent = "YEEZYS";
            productImg.src = "img/yeezy2.png"; 
            productImg.classList.add("yeezyImg");
            productImg.classList.remove("af1Img");
        } else if (index == 2){
            productTitle.textContent = "AIR FORCES";
            productImg.src = "img/af1.png";
            productImg.classList.add("af1Img");
            productImg.classList.remove("yeezyImg"); 
            productPrice.textContent = "120";    
        } else if (index == 3){
            productTitle.textContent = "BLAZERS";
            productImg.src = "img/blazer.png";
            productImg.classList.remove("yeezyImg");
            productImg.classList.remove("af1Img");
            productPrice.textContent = "$140";
        } else{
            productTitle.textContent = "CUSTOM DROPZ";
            productImg.src= "img/hippie.png";
            productImg.classList.remove("yeezyImg");
            productImg.classList.remove("af1Img");
            productPrice.textContent = "$180";
        }
    });
});