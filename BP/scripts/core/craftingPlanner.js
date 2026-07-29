import { InventoryManager } from "./inventoryManager.js";
import { RecipeManager } from "./recipeManager.js";

export class CraftingPlanner {

    static canCraft(itemId) {

        if (!RecipeManager.has(itemId))
            return false;

        const recipe = RecipeManager.get(itemId);

        for (const ingredient of recipe.ingredients) {

            if (InventoryManager.get(ingredient.item) < ingredient.count)
                return false;

        }

        return true;

    }

}
