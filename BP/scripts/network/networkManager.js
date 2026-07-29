export class NetworkManager {

    static connect(machine) {
        machine.connected = true;
        return true;
    }

    static disconnect(machine) {
        machine.connected = false;
    }

    static isConnected(machine) {
        return machine.connected;
    }

}
