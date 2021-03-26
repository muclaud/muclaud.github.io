export const getPlanets = () => {
    return fetch("https://swapi.dev/api/planets/").then((response) => {
        return response.json();
    });
};

export const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}`).then((response) => {
        return response.json();
    });
};

export const getPeople = () => {
    return fetch("https://swapi.dev/api/people/").then((response) => {
        return response.json();
    });
};

export const getPerson = (id) => {
    return fetch(`https://swapi.dev/api/people/${id}`).then((response) => {
        return response.json();
    });
};

export const getFilms = () => {
    return fetch("https://swapi.dev/api/films/").then((response) => {
        return response.json();
    });
};

export const getFilm = (id) => {
    return fetch(`https://swapi.dev/api/films/${id}`).then((response) => {
        return response.json();
    });
};

export const getSpecies = () => {
    return fetch("https://swapi.dev/api/species/").then((response) => {
        return response.json();
    });
};

export const getSpecie = (id) => {
    return fetch(`https://swapi.dev/api/species/${id}`).then((response) => {
        return response.json();
    });
};

export const getStarships = () => {
    return fetch("https://swapi.dev/api/starships/").then((response) => {
        return response.json();
    });
};

export const getStarship = (id) => {
    return fetch(`https://swapi.dev/api/starships/${id}`).then((response) => {
        return response.json();
    });
};
export const getVehicles = () => {
    return fetch("https://swapi.dev/api/vehicles/").then((response) => {
        return response.json();
    });
};

export const getVehicle = (id) => {
    return fetch(`https://swapi.dev/api/vehicles/${id}`).then((response) => {
        return response.json();
    });
};
