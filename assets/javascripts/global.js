AOS.init({ once: true });
function toggleSidebar() {
    if (window.innerWidth < 1240) {
        const body = document.querySelector("body");
        const sideBar = document.querySelector(".sideBar");
        const menu = document.querySelector(".menu");
        body.classList.toggle("active");
        sideBar.classList.toggle("active");
        menu.classList.toggle("active");

    }
}