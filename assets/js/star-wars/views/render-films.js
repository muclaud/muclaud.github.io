import { Component } from "../helpers/components.js";


export class FilmsList extends Component {
    constructor(films) {
        super ({elementType: "div", className: "row row-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4"})
        let filmsContent = "";
        films.forEach((film) => {
            filmsContent += `
            <div class="">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${film.title}</h5>
                            <p class="card-text">Director: ${film.director}</p>
                            <p class="card-text">Release date: ${film.release_date}</p>
                            <p class="card-text">Episode: ${film.episode_id}</p>
                        </div>
                        <div class="card-footer">
                            <a href="${film.url}" class="btn btn-primary">    Detailes    </a>
                        </div>
                    </div>
                </div>
            </div>
        `});
        this.updateContent(filmsContent)
    }
}