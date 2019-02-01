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


let arrayTotal = [];
export function sum (arrayTotal) {
    let resultTotal = 0;
    for (let i=0; i < arrayTotal.length; i++){
        resultTotal = resultTotal + arrayTotal[i];
    }
    return resultTotal;
}
