export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

export class Total {
    constructor(storage) {
        this.storage = storage;
    }
    get items() {
        return this.storage.items;
    }
    add(item) {
        this.storage.add(item);
    }
    remove(item) {
        this.storage.remove(item);
    }
    up(item) {
        this.storage.up(item);
    }
    down(item) {
        this.storage.down(item);
    }
    deleteAll(item) {
        this.storage.deleteAll(item);
    }
}

// export const calculator = {
//     items: [],
//     sum() {
//         let result = 0;
//         for (const item of this.items) {
//             result = result + item.price;
//         }
//         return result;},

// findMax() {
//     let maxResult = 0;
//     let name = "";
//     for (const item of this.items) {
//         if (item > maxResult) {
//             maxResult = item.price;
//             name = item.title;
//         }
//     }
//     return name + " " + maxResult;
// }
// };