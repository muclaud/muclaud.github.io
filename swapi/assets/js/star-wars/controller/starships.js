import { StarshipsList } from "../views/render-starships.js";
import starshipsState from "../model/starships.js";


const createStarshipsList = () => {
    return starshipsState.getStarships().then((data) => {
        let res = new StarshipsList(data);
        let newContext = res.element
        return newContext
    })
};

export const starshipsListInner = await createStarshipsList()