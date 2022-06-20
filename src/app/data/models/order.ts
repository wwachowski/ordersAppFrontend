export interface Order {
    id: number,
    userId: number,
    title: string,
    desc: string,
    price: number,
    client: string,
    quantity: number,     
    date: Date,
    completed: boolean;
}
