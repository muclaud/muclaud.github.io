import { getSpecies } from "../api/api.js";


class SpeciesState {
    species = null;
    getSpecies() {
        if (this.species) {
            return new Promise((res,rej) => {
                res(this.species);
                result = res(this.species)
            });
        } else {
            return getSpecies().then((data) => {
                this.species = data.results;
                return data.results;
            })
        }
    }
}

const speciesState = new SpeciesState()
export default speciesState