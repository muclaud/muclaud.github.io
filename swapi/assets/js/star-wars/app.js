import { filmsListInner } from "./controller/films.js"
import { planetListInner } from "./controller/planet.js"
import { peopleListInner } from "./controller/people.js"
import { speciesListInner } from "./controller/species.js"
import { starshipsListInner } from "./controller/starships.js"
import { vehiclesListInner } from "./controller/vehicles.js"

function renderContent(datalist) {
    let changeContainer = document.getElementById("activeContent");
    let newContent = datalist;
    return changeContainer.innerHTML = newContent.innerHTML
}


const menuContainer = document.getElementById("submenu-components");
const menuItems = menuContainer.querySelectorAll("a.nav-link");

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
        let targ = e.target;
            if (e.target.className == "sidebar-text") {
                targ = e.target.parentElement}
        let btnComponent = targ.parentElement.dataset.component
        if (btnComponent === "people") {
            renderContent(peopleListInner)

        } else if (btnComponent === "planets") {
            renderContent(planetListInner)

        } else if (btnComponent === "films") {
            renderContent(filmsListInner)
            
        } else if (btnComponent === "vehicles") {
            renderContent(vehiclesListInner)

        } else if (btnComponent === "starships") {
            renderContent(starshipsListInner)

        } else if (btnComponent === "species") {
            renderContent(speciesListInner)
        }
    })
})
