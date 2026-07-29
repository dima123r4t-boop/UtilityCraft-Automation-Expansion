export class ItemCatalog {


    static items = [

        {
            id: "minecraft:planks",
            name: "Tábuas de Madeira"
        },

        {
            id: "minecraft:chest",
            name: "Baú"
        },

        {
            id: "minecraft:stick",
            name: "Graveto"
        }

    ];



    static getAll(){

        return this.items;

    }


}
