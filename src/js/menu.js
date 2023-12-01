const content = document.getElementById("content");
const showMenu = (() => {
    
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
        menuNav.classList.add("nav-btn", "current-page");
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
       
        console.log("menu")
       
        const menuWrapper = document.createElement("div");
        menuWrapper.classList.add("menu-wrapper");
        content.appendChild(menuWrapper);
        const menuSection = document.createElement("section");
        menuSection.classList.add("menu-section")
        menuWrapper.appendChild(menuSection);
       
        const coffeeMenu = document.createElement("div");
        coffeeMenu.classList.add("coffee");
        menuSection.appendChild(coffeeMenu);
        // add coffee menu items
        const coffee = document.createElement("p");
        coffee.textContent = "coffee: ";
        coffeeMenu.appendChild(coffee);
        const espresso = document.createElement("p");
        espresso.textContent = "espresso: 1$ ";
        coffeeMenu.appendChild(espresso);
        const french = document.createElement("p");
        french.textContent = "french: 2$";
        coffeeMenu.appendChild(french);
        const latte = document.createElement("p");
        latte.textContent = "latte: 2.5$";
        coffeeMenu.appendChild(latte);
        // breakfast
        const breakfastMenu = document.createElement("div");
        breakfastMenu.classList.add("breakfast");
        menuSection.appendChild(breakfastMenu);
        // add breakfast menu items
        const breakfast = document.createElement("p");
        breakfast.textContent = "breakfast: ";
        breakfastMenu.appendChild(breakfast);
        const pancakes = document.createElement("p");
        pancakes.textContent = "pancakes(4): 2$ ";
        breakfastMenu.appendChild(pancakes);
        const pancakes2 = document.createElement("p");
        pancakes2.textContent = "pancakes(8): 3.5$";
        breakfastMenu.appendChild(pancakes2);
        const waffles = document.createElement("p");
        waffles.textContent = "waffles: 3$";
        breakfastMenu.appendChild(waffles);

        
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
export  {showMenu};