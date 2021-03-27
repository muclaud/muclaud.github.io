import { Component } from "../helpers/components.js";

export class PeopleList extends Component {
  constructor(people) {
    super({ elementType: "div", className: "card" });
    let peopleContent = "";
    people.forEach((person) => {
      peopleContent += `
            <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${person.name}</h5>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample${person.mass}" aria-expanded="false" aria-controls="multiCollapseExample${person.mass}">    Detailes    </a>
                        </div>
                        <div class="collapse multi-collapse" id="multiCollapseExample${person.mass}">
                            <div class="card card-body">
                                <p class="card-text">Gender: ${person.gender}</p>
                                <p class="card-text">Height: ${person.height}</p>
                                <p class="card-text">Mass: ${person.mass}</p>
                                <p class="card-text">Skin color: ${person.skin_color}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
    this.updateContent(peopleContent);
  }
}
