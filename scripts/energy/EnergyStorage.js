export class EnergyStorage {

    constructor(maxEnergy = 10000) {
        this.maxEnergy = maxEnergy;
        this.energy = 0;
    }

    add(amount) {
        this.energy = Math.min(
            this.maxEnergy,
            this.energy + amount
        );
    }

    consume(amount) {

        if (this.energy < amount)
            return false;

        this.energy -= amount;
        return true;
    }

    has(amount) {
        return this.energy >= amount;
    }

    getEnergy() {
        return this.energy;
    }

    setEnergy(amount) {

        this.energy = Math.max(
            0,
            Math.min(amount, this.maxEnergy)
        );

    }

    clear() {
        this.energy = 0;
    }

}
