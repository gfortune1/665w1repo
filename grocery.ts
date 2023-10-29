class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}

// Create grocery items
const groceries: Grocery[] = [
    new Grocery("Milk", 3),
    new Grocery("Bread", 6),
    new Grocery("Eggs", 11),
];

export { Grocery, groceries };