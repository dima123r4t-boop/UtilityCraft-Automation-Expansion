import { Logger } from "../core/logger.js";
import { CraftingJob } from "../core/craftingJob.js";

export class AutoCrafter {

    constructor(location) {
        this.location = location;
        this.jobs = [];
    }

    addJob(itemId, amount) {
        this.jobs.push(new CraftingJob(itemId, amount));
        Logger.info("Novo trabalho: " + itemId);
    }

    update() {

        for (const job of this.jobs) {
            job.tick();
        }

        this.jobs = this.jobs.filter(job => !job.finished);
    }

}
