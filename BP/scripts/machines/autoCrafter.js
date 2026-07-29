import { Logger } from "../core/logger.js";
import { NetworkBridge } from "../network/networkBridge.js";

export class AutoCrafter {

    constructor(location) {
        this.location = location;
        this.connected = false;
        this.energy = 0;
        this.queue = [];
    }

    initialize() {

        NetworkBridge.connect(this);

        Logger.info("Auto Crafter initialized.");

    }

    update() {

        if (!NetworkBridge.isConnected(this)) {
            return;
        }

        Logger.info("Waiting for crafting jobs...");

    }

}
