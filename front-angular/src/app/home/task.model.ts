import { User } from './../shared';

export class Task {
    constructor(
        public id?: number,
        public title?: string,
        public completed?: boolean,
        public user?: User,
    ) {
        this.completed = false;
    }
}
