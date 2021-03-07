import { Component } from "../helpers/components.js";


export class FilmCard extends Component {
    constructor({film}) {
        super({className: "card"});
        this.updateContent(`
        <div class="card-body">
          <h5 class="Title: ${film.title}</h5>
          <p class="card-text">Director: ${film.director}</p>
          <p class="card-text">Release date: ${film.release_date}</p>
          <p class="card-text">Episode: ${film.episode_id}</p>
          <p class="card-text">Created: ${film.created}</p>
          <a href="${film.url}" class="btn btn-primary">Detailes</a>
        </div>
        `)
    }
}