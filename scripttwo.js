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

    document.querySelectorAll(':is(vimeo-embed, youtube-embed) button').forEach(button => button.addEventListener('click', () => {
      const video = button.previousElementSibling;
      video.src = video.dataset.src;
    }))


    // document.querySelectorAll('.accordion').forEach(button => {
    //     button.addEventListener('click', () => {
    //         const panel = button.nextElementSibling;
    //         panel.classList.toggle('show');
    //     });
    // });