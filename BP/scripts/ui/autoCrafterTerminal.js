import {
    ActionFormData
} from "@minecraft/server-ui";


export class AutoCrafterTerminal {


    static open(player, crafter) {


        const form =
            new ActionFormData();



        form.title(
            "Auto Crafter"
        );


        form.body(
            "Sistema de fabricação automática"
        );


        form.button(
            "Fabricar item"
        );


        form.button(
            "Ver fila"
        );


        form.button(
            "Cancelar tarefas"
        );



        form.show(player)
        .then(response => {


            if(response.canceled)
                return;



            switch(response.selection){


                case 0:

                    player.sendMessage(
                        "Sistema de fabricação aberto."
                    );

                break;



                case 1:

                    player.sendMessage(
                        "Fila de fabricação:"
                    );

                break;



                case 2:

                    player.sendMessage(
                        "Tarefas canceladas."
                    );

                break;


            }


        });


    }


}
