import "../styles/style.css";
import "../styles/menu.css";
import "../styles/about.css";

// change all imges with css url
import { showMenu } from "./menu";
import { showAbout } from "./about";
const content = document.getElementById("content");
const showHome = (() => {
    const clear = () => {
        content.innerHTML = "";
    }
    const createNav = () => {
        const nav = document.createElement("nav");
        content.appendChild(nav);
        const homeNav = document.createElement("a");
        homeNav.textContent = "Home";
        homeNav.setAttribute("href", "");
        homeNav.classList.add("nav-btn", "current-page");
        nav.appendChild(homeNav);
        const menuNav = document.createElement("a");
        menuNav.textContent = "Menu";
        menuNav.setAttribute("href", "");
        menuNav.classList.add("nav-btn");
        nav.appendChild(menuNav);
        const aboutNav = document.createElement("a");
        aboutNav.classList.add("nav-btn");
        aboutNav.setAttribute("href", "");
        aboutNav.textContent = "About";
        nav.appendChild(aboutNav);
    };
    const createHeader = () => {
        const header = document.createElement("header");
        content.appendChild(header);
        const headerTxt = document.createElement("p");
        headerTxt.textContent = "Italiano Food";
        header.appendChild(headerTxt);
    }
    const createSection = () => {
        const homeSection = document.createElement("section");
        homeSection.classList.add("home-section");
        content.appendChild(homeSection);
        const sectionTxt = document.createElement("div");
        sectionTxt.textContent = "breakfast, lunch and dinner with italian chefs!";
        sectionTxt.classList.add("under-header-txt");
        homeSection.appendChild(sectionTxt);
        const imgFlex = document.createElement("div");
        imgFlex.classList.add("img-flex");
        homeSection.appendChild(imgFlex);
        const imgHtml = `<div class = "img-item"></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>`
        imgFlex.insertAdjacentHTML("afterbegin", imgHtml);
    }
    const createFooter = () => {
        const footer = document.createElement("footer");
        content.appendChild(footer);
        const contact = document.createElement("a");
        contact.setAttribute("href", "#");
        contact.textContent = "Contant Us";
        footer.appendChild(contact);
        const gmail = document.createElement("a");
        gmail.setAttribute("href", "#");
        gmail.textContent = "Gmail: Italiano55@gmail.com";
        footer.appendChild(gmail);
        const phone = document.createElement("a");
        phone.setAttribute("href", "#");
        phone.textContent = "Phone: 0111895522";
        footer.appendChild(phone);
        
    }
    return {
        createNav,
        createHeader,
        createSection,
        createFooter,
        clear
    }
})();
showHome.clear();
showHome.createNav();
showHome.createHeader();
showHome.createSection();
showHome.createFooter();
const navBtns = Array.from(document.querySelectorAll(".nav-btn"));

navBtns.forEach(nav => nav.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === navBtns[0]) {
        showHome.clear();
        showHome.createNav();
        showHome.createHeader();
        showHome.createSection();
        showHome.createFooter();
    } else if (e.target === navBtns[1]) {
        showMenu.clear();
        showMenu.createNav();
        showMenu.createHeader();
        showMenu.createSection();
        showMenu.createFooter();
    } else if (e.target === navBtns[2]) {
        showAbout.clear();
        showAbout.createNav();
        showAbout.createHeader();
        showAbout.createSection();
        showAbout.createFooter();
    }
}))