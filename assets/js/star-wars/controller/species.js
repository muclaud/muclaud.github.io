import { SpeciesList } from "../views/render-species.js";
import speciesState from "../model/species.js";


const createSpeciesList = () => {
    return speciesState.getSpecies().then((data) => {
        let res = new SpeciesList(data);
        let newContext = res.element
        return newContext
    })
};

export const speciesListInner = await createSpeciesList()