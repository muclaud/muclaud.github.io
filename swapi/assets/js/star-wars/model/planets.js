import { getPlanets } from "../api/api.js";


class PlanetsState {
    planets = null;
    getPlanets() {
        if (this.planets) {
            return new Promise((res,rej) => {
                res(this.planets);
                result = res(this.planets)
            });
        } else {
            return getPlanets().then((data) => {
                this.planets = data.results;
                return data.results;
            })
        }
    }
}

const planetsState = new PlanetsState()
export default planetsState