import { VehiclesList } from "../views/render-vehicles.js";
import vehiclesState from "../model/vehicles.js";


const createVehiclesList = () => {
    return vehiclesState.getVehicles().then((data) => {
        let res = new VehiclesList(data);
        let newContext = res.element
        return newContext
    })
};

export const vehiclesListInner = await createVehiclesList()