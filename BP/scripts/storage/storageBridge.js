import { DigitalStorage } from "./digitalStorage.js";


export class StorageBridge {


    static request(itemId, amount) {


        if (
            DigitalStorage.has(
                itemId,
                amount
            )
        ) {


            DigitalStorage.remove(
                itemId,
                amount
            );


            return true;

        }



        return false;


    }


}
