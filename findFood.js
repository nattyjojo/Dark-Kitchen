const navSection = document.querySelector(".nav");
const mobileSize = window.matchMedia("(max-width: 500px)");
const responsive = (windowSize) =>{
    if(windowSize.matches){
        Object.assign(navSection.style,{
            padding: 0,
            color: "red",
        })
    }
}
responsive(mobileSize)
mobileSize.addEventListener("change", responsive)



