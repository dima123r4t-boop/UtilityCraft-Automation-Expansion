export class CraftingJob {

    constructor(itemId, amount) {
        this.itemId = itemId;
        this.amount = amount;
        this.progress = 0;
        this.finished = false;
    }

    tick() {
        if (this.finished) return;

        this.progress++;

        if (this.progress >= this.amount) {
            this.finished = true;
        }
    }

}
