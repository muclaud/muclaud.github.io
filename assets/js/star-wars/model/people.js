import { getPeople } from "../api/api.js";


class PeopleState {
    people = null;
    getPeople() {
        if (this.people) {
            return new Promise((res,rej) => {
                res(this.people);
                result = res(this.people)
            });
        } else {
            return getPeople().then((data) => {
                this.people = data.results;
                return data.results;
            })
        }
    }
}

const peopleState = new PeopleState()
export default peopleState