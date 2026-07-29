import { Logger } from "../core/logger.js";
import { CraftingJob } from "../core/craftingJob.js";
import { CraftingPlanner } from "../core/craftingPlanner.js";

export class AutoCrafter {

    constructor(location) {

        this.location = location;
        this.jobs = [];

    }

    addJob(itemId, amount) {

        if (!CraftingPlanner.canCraft(itemId)) {

            Logger.info("Materiais insuficientes.");

            return false;

        }

        this.jobs.push(new CraftingJob(itemId, amount));

        Logger.info("Novo trabalho criado.");

        return true;

    }

    update() {

        for (const job of this.jobs)
            job.tick();

        this.jobs = this.jobs.filter(job => !job.finished);

    }

}
