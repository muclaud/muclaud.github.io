import { Component } from "../helpers/components.js";

export class FilmsList extends Component {
  constructor(films) {
    super({ elementType: "div", className: "card" });
    let filmsContent = "";
    films.forEach((film) => {
      filmsContent += `
            <div class="">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${film.title}</h5>
                            
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample${film.episode_id}" aria-expanded="false" aria-controls="multiCollapseExample${film.episode_id}">    Detailes    </a>
                        </div>
                        <div class="collapse multi-collapse" id="multiCollapseExample${film.episode_id}">
                            <div class="card card-body">
                                <p class="card-text">Director: ${film.director}</p>
                                <p class="card-text">Release date: ${film.release_date}</p>
                                <p class="card-text">Episode: ${film.episode_id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    this.updateContent(filmsContent);
  }
}
