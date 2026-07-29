export class CraftingManager {

    constructor(inventory) {
        this.inventory = inventory;
    }

    craft(recipe) {

        for (const ingredient of recipe.ingredients) {

            if (!this.inventory.has(ingredient))
                return false;

        }

        for (const ingredient of recipe.ingredients) {

            this.inventory.remove(ingredient);

        }

        this.inventory.insert({
            typeId: recipe.output,
            amount: 1
        });

        return true;

    }

}
