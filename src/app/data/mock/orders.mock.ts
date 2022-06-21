import { Order } from "../models/order";

export const ORDERS: Order[] = [
    {
        id: 1,
        userId: 1,
        title: 'koło zapasowe',
        desc: 'koło zapasowe (tylna oś lewe dziura)',
        price: 23,
        client: 'Grzybek',
        quantity: 1,
        date: new Date(),
        completed: false
    },
    {
        id: 2,
        userId: 1,
        title: 'zabawka',
        desc: 'toy story 3',
        price: 15.25,
        client: 'Grzybek',
        quantity: 2,
        date: new Date(),
        completed: false
    },
    {
        id: 3,
        userId: 1,
        title: 'pistol',
        desc: 'pistolet KL34-a AK',
        price: 65.45,
        client: 'Arbuziak Piotr',
        quantity: 1,
        date: new Date('2025/05/07'),
        completed: false
    },
    {
        id: 4,
        userId: 1,
        title: 'korzeń cxz23',
        desc: '',
        price: 30.909,
        client: 'Koraz',
        quantity: 30,
        date: new Date('2021/11/09'),
        completed: false
    },
    {
        id: 5,
        userId: 1,
        title: 'telefon huwaei p30',
        desc: 'super stan kupa',
        price: 1905.00,
        client: 'Arbuziak Piotr',
        quantity: 1,
        date: new Date(),
        completed: true
    },
];