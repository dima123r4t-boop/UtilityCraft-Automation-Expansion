import { system } from "@minecraft/server";
import { Logger } from "./core/logger.js";
import { Automation } from "./core/automation.js";
import { RecipeManager } from "./core/recipeManager.js";

system.run(() => {

    Logger.info("--------------------------------");
    Logger.info("UtilityCraft Automation");
    Logger.info("Version " + Automation.VERSION);
    Logger.info("--------------------------------");

    RecipeManager.register("minecraft:planks", {
        output: 4,
        ingredients: [
            {
                item: "minecraft:log",
                count: 1
            }
        ]
    });

});
