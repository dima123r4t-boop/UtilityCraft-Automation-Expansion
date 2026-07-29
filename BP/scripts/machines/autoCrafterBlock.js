import {
    world
} from "@minecraft/server";

import {
    AutoCrafter
} from "./autoCrafter.js";


const machines = new Map();



world.beforeEvents.playerInteractWithBlock.subscribe(event => {


    const block = event.block;


    if (
        block.typeId !==
        "utilitycraft:auto_crafter"
    )
        return;



    const key =
        block.location.x +
        "," +
        block.location.y +
        "," +
        block.location.z;



    if (!machines.has(key)) {


        machines.set(
            key,
            new AutoCrafter(
                block.location
            )
        );


    }



    const machine =
        machines.get(key);



    machine.request(
        import { AutoCrafterTerminal } from "../ui/autoCrafterTerminal.js";


AutoCrafterTerminal.open(
    event.player,
    machine
);
