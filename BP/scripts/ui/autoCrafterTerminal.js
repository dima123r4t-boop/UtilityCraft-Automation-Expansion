import {
    ActionFormData
} from "@minecraft/server-ui";

import {
    ItemCatalog
} from "../core/itemCatalog.js";


export class AutoCrafterTerminal {


    static open(player, crafter) {


        const form =
            new ActionFormData();


        form.title(
            "Auto Crafter"
        );


        form.body(
            "Escolha um item para fabricar"
        );


        const items =
            ItemCatalog.getAll();



        for(const item of items){

            form.button(
                item.name
            );

        }



        form.show(player)
        .then(response => {


            if(response.canceled)
                return;



            const selected =
                items[
                    response.selection
                ];



            crafter.request(
                selected.id,
                1
            );



            player.sendMessage(
                "Pedido criado: "
                + selected.name
            );


        });


    }


}
