import { Logger } from "../core/logger.js";

export class AutoCrafter {

    constructor(location) {
        this.location = location;
        this.connected = false;
        this.energy = 0;
        this.queue = [];
    }

    connectNetwork() {
        this.connected = true;
        Logger.info("Connected to Automation Network");
    }

    update() {

        if (!this.connected)
            return;

        Logger.info("Processing Auto Crafter...");

    }

}
