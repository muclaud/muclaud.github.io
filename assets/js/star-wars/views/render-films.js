import { Component } from "../helpers/components.js";


export class FilmsList extends Component {
    constructor(films) {
        super ({elementType: "div", className: "card"})
        let filmsContent = "";
        films.forEach((film) => {
            filmsContent += `
            <div class="card-body">
              <h5 class="Title: ${film.title}</h5>
              <p class="card-text">Director: ${film.director}</p>
              <p class="card-text">Release date: ${film.release_date}</p>
              <p class="card-text">Episode: ${film.episode_id}</p>
              <a href="${film.url}" class="btn btn-primary">Detailes</a>
            </div>`
        });
        this.updateContent(filmsContent)
    }
}