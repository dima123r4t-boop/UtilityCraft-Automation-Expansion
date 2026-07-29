export class DigitalStorage {


    static items = new Map();



    static add(itemId, amount) {

        const current =
            this.get(itemId);

        this.items.set(
            itemId,
            current + amount
        );

    }



    static remove(itemId, amount) {


        const current =
            this.get(itemId);



        if (current < amount)
            return false;



        this.items.set(
            itemId,
            current - amount
        );


        return true;

    }



    static get(itemId) {

        return this.items.get(itemId) ?? 0;

    }



    static has(itemId, amount) {


        return this.get(itemId) >= amount;


    }


}
