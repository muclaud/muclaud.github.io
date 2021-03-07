import { getStarships } from "../api/api.js";


class StarshipsState {
    starships = null;
    getStarships() {
        if (this.starships) {
            return new Promise((res,rej) => {
                res(this.starships);
                result = res(this.starships)
            });
        } else {
            return getStarships().then((data) => {
                this.starships = data.results;
                return data.results;
            })
        }
    }
}

const starshipsState = new StarshipsState()
export default starshipsState
