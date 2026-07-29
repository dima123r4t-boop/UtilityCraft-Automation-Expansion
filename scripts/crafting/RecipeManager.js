export class RecipeManager {

    constructor() {

        this.recipes = [];

    }

    register(recipe) {

        this.recipes.push(recipe);

    }

    get(id) {

        return this.recipes.find(
            recipe => recipe.id === id
        );

    }

    getAll() {
        return this.recipes;
    }

    match(pattern) {

        return this.recipes.find(recipe => {

            return JSON.stringify(recipe.pattern)
                === JSON.stringify(pattern);

        });

    }

}
