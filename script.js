const palmView = document.querySelector(".palm-view");
const palmSections = document.querySelectorAll(".palm-section");

window.addEventListener("wheel", (event) => {
    let direction = 1;
    
    if (event.deltaY < 0) {
        direction = -1
    }

    palmView.scrollBy({
        left: ((palmView.scrollWidth / palmView.children.length)) * direction,
        behavior: "smooth",
    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("in view")
            entry.target.children[0].style.opacity = 0.75;

            if (entry.target.classList.contains("sky-blue")) {
                document.body.style.backgroundColor = "skyblue";
            }
            
            if (entry.target.classList.contains("sky-grey")) {
                document.body.style.backgroundColor = "dimgray";
            }
            
            if (entry.target.classList.contains("sky-orange")) {
                document.body.style.backgroundColor = "peru";
            }

            if (entry.target.classList.contains("clouds")) {
                document.querySelector("#clouds").style.top = "-43%";
            }

            else {
                document.querySelector("#clouds").style.top = "-92%";
            }

            if (entry.target.classList.contains("trash")) {
                document.querySelector("#trash1").style.top = "70%";
                document.querySelector("#trash2").style.top = "70%";
            }

            else {
                document.querySelector("#trash1").style.top = "100%";
                document.querySelector("#trash2").style.top = "100%";
            }

            if (entry.target.classList.contains("bushes")) {
                document.querySelector("#bushes").style.top = "43%";
            }

            else {
                document.querySelector("#bushes").style.top = "100%";
            }

            if (entry.target.classList.contains("foreground")) {
                document.querySelector("#foreground").style.top = "-49%";
            }

            else {
                document.querySelector("#foreground").style.top = "0%";
            }

            if (entry.target.classList.contains("animals")) {
                document.querySelector("#snail").style.top = "60%";
                document.querySelector("#turtle").style.top = "84%";
            }

            else {
                document.querySelector("#snail").style.top = "100%";
                document.querySelector("#turtle").style.top = "100%";
            }

            if (entry.target.classList.contains("logo")) {
                document.querySelector("#logo").style.opacity = 1;
            }

            else {
                document.querySelector("#logo").style.opacity = 0;
            }
        }
        else {
            entry.target.children[0].style.opacity = 0;
        }
    });
});

document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
})