const menuIcon = document.querySelector(".toggle");
    const mobileMenu = document.querySelector(".navMenu");
    
    menuIcon.onclick = function(){
        if(mobileMenu.style.display != "block"){
            mobileMenu.style.display = "block";
            menuIcon.classList.replace("uil-bars", "uil-multiply")
        }
        else{
            mobileMenu.style.display = "none";
            menuIcon.classList.replace("uil-multiply", "uil-bars")
        }
    }



// morque 
const sections = document.querySelectorAll("section");

[...sections].forEach((section) => {
  const checkbox = section.querySelector("input");

  checkbox.addEventListener("change", () => {
    section.classList.toggle("enable-animation");
  });
});






//slider 

let scrollCointer = document.querySelector(".gallery")
let backBtn = document.getElementById("backbtn")
let nextBtn = document.getElementById("nextbtn")

scrollCointer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollCointer.scrollLeft += evt.deltaY;
    scrollCointer.style.scrollBehavior = "auto";

})

// nextBtn.addEventListener("click", () =>{
//     scrollCointer.style.scrollBehavior = "smooth";
//     scrollCointer.scrollLeft += 900;

// })

// backBtn.addEventListener("click", () =>{
//     scrollCointer.style.scrollBehavior = "smooth";
//     scrollCointer.scrollLeft -=900;
// })

// cant use as it overwriting the video part



function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener('click', function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

page3VideoAnimation()


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});