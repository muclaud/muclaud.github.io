import { getVehicles } from "../api/api.js";


class VehiclesState {
    vehicles = null;
    getVehicles() {
        if (this.vehicles) {
            return new Promise((res,rej) => {
                res(this.vehicles);
                result = res(this.vehicles)
            });
        } else {
            return getVehicles().then((data) => {
                this.vehicles = data.results;
                return data.results;
            })
        }
    }
}

const vehiclesState = new VehiclesState()
export default vehiclesState
