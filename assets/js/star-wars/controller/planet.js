import { PlanetsList } from "../views/render-planets.js";
import planetsState from "../model/planets.js";


const createPlanetsList = () => {
    return planetsState.getPlanets().then((data) => {
        let res = new PlanetsList(data);
        let newContext = res.element
        return newContext
    })
};

export const planetListInner = await createPlanetsList()