
const content = document.getElementById("content");
const showAbout = (() => {
    
    const clear = () => {
        content.innerHTML = "";
    }
    const createNav = () => {
        const nav = document.createElement("nav");
        content.appendChild(nav);
        const homeNav = document.createElement("a");
        homeNav.textContent = "Home";
        homeNav.setAttribute("href", "");
        homeNav.classList.add("nav-btn");
        nav.appendChild(homeNav);
        const menuNav = document.createElement("a");
        menuNav.textContent = "Menu";
        menuNav.setAttribute("href", "");
        menuNav.classList.add("nav-btn");
        nav.appendChild(menuNav);
        const aboutNav = document.createElement("a");
        aboutNav.classList.add("nav-btn", "current-page");
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
        const aboutSection = document.createElement("section");
        aboutSection.classList.add("about-section")
        content.appendChild(aboutSection);
        const sectionTxt = document.createElement("div");
        sectionTxt.classList.add("section-txt");
        sectionTxt.textContent = `since 1926, we serve our customers with
        delicious food and coffee from italia with the best italian chefs
        and baristas.`
        aboutSection.appendChild(sectionTxt);
        const imgFlex = document.createElement("div");
        imgFlex.classList.add("img-flex");
        aboutSection.appendChild(imgFlex);
        const imgHtml =  `<div class = "img-item"></div>
        <div class = "img-item" ></div>
        <div class = "img-item" ></div>
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
export  {showAbout};