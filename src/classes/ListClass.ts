import { v4 } from "uuid";

export default class TodoListClass {
    title: string;
    isNew: boolean;
    id: string;
    constructor(title: string) {
        this.title = title;
        this.id = v4();
        this.isNew = true;
    }

    stale() {
        this.isNew = false;
    }
}
