import { getFilms } from "../api/api.js";


class FilmsState {
    films = null;
    getFilms() {
        if (this.films) {
            return new Promise((res,rej) => {
                res(this.films);
                result = res(this.films)
            });
        } else {
            return getFilms().then((data) => {
                this.films = data.results;
                return data.results;
            })
        }
    }
}

const filmsState = new FilmsState()
export default filmsState

