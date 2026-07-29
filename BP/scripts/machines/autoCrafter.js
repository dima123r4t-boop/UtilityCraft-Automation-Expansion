import { Logger } from "../core/logger.js";
import { CraftingJob } from "../core/craftingJob.js";
import { RecursiveCrafter } from "../core/recursiveCrafter.js";
import { CraftingQueue } from "../core/craftingQueue.js";
import { StorageBridge } from "../storage/storageBridge.js";

export class AutoCrafter {


    constructor(location) {

        this.location = location;

        this.jobs = [];

        this.queue = new CraftingQueue();

    }



    request(itemId, amount) {

        if(
 !StorageBridge.request(
    itemId,
    amount
 )
){

 Logger.info(
   "Item não encontrado no Storage"
 );

 return;

}

        const plan =
            RecursiveCrafter.plan(
                itemId,
                amount
            );


        this.queue.add(plan);


        Logger.info(
            "Plano criado: "
            + itemId
        );

    }



    update() {


        if (!this.queue.empty()) {


            const task =
                this.queue.next();



            this.jobs.push(

                new CraftingJob(
                    task.item,
                    task.amount
                )

            );


        }



        for (const job of this.jobs) {

            job.tick();

        }



        this.jobs =
            this.jobs.filter(
                job => !job.finished
            );


    }


}
