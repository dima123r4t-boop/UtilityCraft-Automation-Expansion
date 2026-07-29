export class InventoryManager {

    constructor(maxSlots = 27) {

        this.maxSlots = maxSlots;
        this.items = [];

    }

    insert(item) {

        if (this.items.length >= this.maxSlots)
            return false;

        this.items.push(item);

        return true;

    }

    remove(typeId) {

        const index = this.items.findIndex(
            item => item.typeId === typeId
        );

        if (index === -1)
            return null;

        return this.items.splice(index, 1)[0];

    }

    has(typeId, amount = 1) {

        let total = 0;

        for (const item of this.items) {

            if (item.typeId === typeId)
                total++;

        }

        return total >= amount;

    }

    list() {
        return this.items;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

}
