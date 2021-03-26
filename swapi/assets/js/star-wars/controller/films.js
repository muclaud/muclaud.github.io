import filmsState from "../model/films.js";
import { FilmsList } from "../views/render-films.js"


const createFilmsList = () => {
    return filmsState.getFilms().then((data) => {
        let res = new FilmsList(data);
        let newContext = res.element
        return newContext
    });
};


export const filmsListInner = await createFilmsList()











