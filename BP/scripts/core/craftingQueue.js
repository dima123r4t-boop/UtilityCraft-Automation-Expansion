export class CraftingQueue {


    constructor() {

        this.queue = [];

    }



    add(plan) {

        this.queue.push(...plan);

    }



    next() {

        return this.queue.shift();

    }



    empty() {

        return this.queue.length === 0;

    }


}
