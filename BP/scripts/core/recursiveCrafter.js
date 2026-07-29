import { RecipeManager } from "./recipeManager.js";
import { InventoryManager } from "./inventoryManager.js";

export class RecursiveCrafter {


    static plan(itemId, amount = 1) {

        const recipe = RecipeManager.get(itemId);


        if (!recipe) {

            return [
                {
                    item: itemId,
                    amount: amount
                }
            ];

        }


        let plan = [];


        for (const ingredient of recipe.ingredients) {


            const available =
                InventoryManager.get(ingredient.item);


            const missing =
                (ingredient.count * amount) - available;



            if (missing > 0) {

                plan.push(
                    ...this.plan(
                        ingredient.item,
                        missing
                    )
                );

            }

        }


        plan.push({

            item: itemId,
            amount: amount

        });


        return plan;

    }


}
