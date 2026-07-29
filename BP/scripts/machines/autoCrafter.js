import { Logger } from "../core/logger.js";

export class AutoCrafter {

    constructor() {
        this.energy = 0;
        this.connected = false;
        this.queue = [];
    }

    connect() {
        this.connected = true;
        Logger.info("Auto Crafter connected.");
    }

    tick() {

        if (!this.connected)
            return;

        Logger.info("Running Auto Crafter Tick");

    }

}
