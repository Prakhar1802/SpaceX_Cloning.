const btn = document.getElementById("menu_btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile_menu");
const shop = document.getElementById("shop_att");
const counter = document.querySelectorAll(".counter");
const header = document.querySelector("#header");
let scrollStarted = false;

btn.addEventListener("click", navtoggle);
document.addEventListener("scroll", scrollPage)
window.addEventListener("scroll", navhide);

function navtoggle() {
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay_show");
    document.body.classList.toggle("stop_scrolling");
    menu.classList.toggle("show_menu");
    shop.classList.toggle("show_shop");
}

function countup() {
    counter.forEach((counter) => {
        counter.innerText = "0";
        const updateCounter = () => {
            // Get Count Target
            const target = +counter.getAttribute("data-target");
            // Get Current Value
            const c = +counter.innerText

            // Create an increment
            const increment = target / 100;

            // if counter is less the target, add increment
            if (c < target) {
                // Round up and set the counter value
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 30)
            }
            else {
                counter.innerText = target;
            }
        }
        updateCounter();
    })

}
function scrollPage() {
    const scrollpos = window.scrollY;
    if (scrollpos > 100 && !scrollStarted) {
        countup();
        scrollStarted = true;
    }
    else if (scrollpos < 100 && scrollStarted) {
        reset_counters();
    }
}

function reset_counters() {
    counter.forEach((counter) => {
        counter.innerText = "0";
        scrollStarted = false;
    })
}
let lastScrolly = window.scrollY;
function navhide() {
    if (lastScrolly < window.scrollY) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
    lastScrolly = window.scrollY;
}


