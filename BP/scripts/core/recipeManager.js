export class RecipeManager {

    static recipes = new Map();

    static register(id, recipe) {
        this.recipes.set(id, recipe);
    }

    static get(id) {
        return this.recipes.get(id);
    }

    static has(id) {
        return this.recipes.has(id);
    }

}
