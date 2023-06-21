
const navElement = document.querySelector(".nav");
const slideContent = [... document.querySelectorAll(".slide__content")]
const screenSize = window.matchMedia("(max-width: 630px)");

responsive = (windowSize) =>{
    if(windowSize.matches){
        Object.assign(navElement.style,{
            flexDirection: "column",
            padding: "10px 10px 0px 20px",
            lineHeight: "50px",
        });
        const removeSlide = slideContent.slice(4)
            removeSlide.forEach(slide =>{
                slide.style.display= "none";
            })      
    }else{
        navElement.style.removeProperty("flex-direction");
        navElement.style.removeProperty("padding");

    }
}

responsive(screenSize);
screenSize.addEventListener("change", responsive);

/*
const screenSize = window.matchMedia("(max-width: 768px)");
const navElement = document.querySelector('nav');

const responsive = (windowSize) => {
    if (windowSize.matches) {
        Object.assign(navElement.style, {
            flexDirection: "column",
            padding: "10px 20px 0px 20px",
        });
    } else {
        // Handle the case when the window size doesn't match the media query
    }
};

responsive(screenSize);
screenSize.addEventListener("change", responsive);
*/