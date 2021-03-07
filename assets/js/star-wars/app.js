import { createFilmsList, createPeopleList, createSpeciesList, createStarshipsList, createVehiclesList, createPlanetsList } from "./controller/content.js"


const menuContainer = document.getElementById("submenu-components");
const menuItems = menuContainer.querySelectorAll("a.nav-link");

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
        let targ = e.target;
            if (e.target.className == "sidebar-text") {
                targ = e.target.parentElement}
        let btnComponent = targ.parentElement.dataset.component
        if (btnComponent === "people") {
            createPeopleList()

        } else if (btnComponent === "planets") {
            createPlanetsList()

        } else if (btnComponent === "films") {
            createFilmsList()
            
        } else if (btnComponent === "vehicles") {
            createVehiclesList()

        } else if (btnComponent === "starships") {
            createStarshipsList()

        } else if (btnComponent === "species") {
            createSpeciesList()
        }
    })
})
