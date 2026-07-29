import { NetworkManager } from "./networkManager.js";

export class NetworkBridge {

    static connect(machine) {
        return NetworkManager.connect(machine);
    }

    static isConnected(machine) {
        return NetworkManager.isConnected(machine);
    }

}
