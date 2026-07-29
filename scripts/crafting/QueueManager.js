export class QueueManager {

    constructor() {
        this.queue = [];
    }

    add(recipe) {
        this.queue.push(recipe);
    }

    next() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    clear() {
        this.queue = [];
    }

}
