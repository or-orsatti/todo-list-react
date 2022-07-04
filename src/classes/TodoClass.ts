import { v4 } from "uuid";

export default class TodoClass {
    title: string;
    id: string;

    constructor(title: string) {
        this.title = title;
        this.id = v4();
    }
}
