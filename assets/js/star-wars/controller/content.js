import filmsState from "../model/films.js";
import peopleState from "../model/people.js";
import planetsState from "../model/planets.js";
import speciesState from "../model/species.js";
import starshipsState from "../model/starships.js";
import vehiclesState from "../model/vehicles.js";
import { FilmsList } from "../views/render-films.js"
import { PeopleList } from "../views/render-people.js";
import { PlanetsList } from "../views/render-planets.js";
import { SpeciesList } from "../views/render-species.js";
import { StarshipsList } from "../views/render-starships.js";
import { VehiclesList } from "../views/render-vehicles.js";


export const createFilmsList = () => {
    filmsState.getFilms().then((data) => {
        let res = new FilmsList(data);
        let newContext = res.element
        console.log(newContext)
        return newContext
    }) 
};


export const createPeopleList = () => {
    peopleState.getPeople().then((data) => {
        let res = new PeopleList(data);
        let newContext = res.element
        console.log(newContext)
        return newContext
    });
};


export const createSpeciesList = () => {
    speciesState.getSpecies().then((data) => {
        let res = new SpeciesList(data);
        let newContext = res.element
        console.log(newContext)
        return newContext
    });
};


export const createPlanetsList = () => {
    planetsState.getPlanets().then((data) => {
        let res = new PlanetsList(data);
        let newContext = res.element
        console.log(newContext)
        return newContext
    });
};


export const createStarshipsList = () => {
    starshipsState.getStarships().then((data) => {
        let res = new StarshipsList(data);
        let newContext = res.element
        console.log(newContext)
        return newContext
    });
};




export const createVehiclesList = () => {
    vehiclesState.getVehicles().then((data) => {
        let res = new VehiclesList(data);
        let newContext = res.element
        console.log(newContext)
        return newContext
    });
};

export const mainContentEl = document.getElementById("activeContent")
