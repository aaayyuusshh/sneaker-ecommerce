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
        const productPrice = document.querySelector(".productPrice");
        const productDescription = document.querySelector(".productDescription");
        const historyVideo = document.querySelector(".historyVideo");

        if (index == 0){
            productTitle.textContent = "AIR JORDANS";
            productImg.src = "img/jordan.png"; 
            productImg.classList.remove("yeezyImg");
            productImg.classList.remove("af1Img");
            productPrice.textContent = "$298";
            productDescription.textContent = "Designed by Peter Moore, the Air Jordan 1 is the most influential shoe in sneaker history. Michael Jordan laced up a pair for the first time in 1984, changing the conversation around footwear permanently.";
            historyVideo.src = "https://en.wikipedia.org/wiki/Air_Jordan";
        } else if (index == 1){
            productTitle.textContent = "YEEZYS";
            productTitle.classList.add= ('extraMargin');
            productImg.src = "img/yeezy2.png"; 
            //productImg.style.marginTop("50px");
            productImg.classList.add("extraMargin");
            productImg.classList.add("yeezyImg");
            productImg.classList.remove("af1Img");
            productPrice.textContent = "$789";
            productDescription.textContent = "Adidas Yeezy is a fashion collaboration between German sportswear company Adidas and American designer, rapper, entrepreneur and personality Kanye West."
            historyVideo.src = "https://en.wikipedia.org/wiki/Adidas_Yeezy";
        } else if (index == 2){
            productTitle.textContent = "AIR FORCES";
            productImg.src = "img/af1.png";
            productImg.classList.add("af1Img");
            productImg.classList.remove("yeezyImg"); 
            productPrice.textContent = "$120"; 
            productDescription.textContent = "Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was the first ever basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture forever.";
            historyVideo.src = "https://en.wikipedia.org/wiki/Air_Force_(shoe)";
        } else if (index == 3){
            productTitle.textContent = "BLAZERS";
            productImg.src = "img/blazer.png";
            productImg.classList.remove("yeezyImg");
            productImg.classList.remove("af1Img");
            productPrice.textContent = "$140";
            productDescription.textContent = "The Nike Blazer Mid '77 channels the old-school look of Nike Basketball with a vintage midsole finish.Throwback style with modern materials means you can run, skip and jump in comfort.";
            historyVideo.src = "https://en.wikipedia.org/wiki/Nike_Blazers";
        } else{
            productTitle.textContent = "CUSTOM DROPZ";
            productImg.src= "img/hippie.png";
            productImg.classList.remove("yeezyImg");
            productImg.classList.remove("af1Img");
            productPrice.textContent = "$180";
            productDescription.textContent = "sneak-a-peak has the best Canadian shoe designer freelancers creating custom pieces for you."
        }
    });
});