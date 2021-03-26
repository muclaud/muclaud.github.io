import peopleState from "../model/people.js";
import { PeopleList } from "../views/render-people.js";


const createPeopleList = () => {
    return peopleState.getPeople().then((data) => {
        let res = new PeopleList(data);
        let newContext = res.element
        return newContext
    })
};

export const peopleListInner = await createPeopleList()