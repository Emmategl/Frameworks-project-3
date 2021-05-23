import { BasketItemType } from "./BasketItemType";

export const getProducts = async (): Promise<BasketItemType[]> =>
await (await fetch('http://localhost:3001/products/info')).json();

export const getCoffees = async (): Promise<BasketItemType[]> =>
await (await fetch('http://localhost:3001/product/categories/Coffee')).json();

export const getTeas = async (): Promise<BasketItemType[]> =>
await (await fetch('http://localhost:3001/product/categories/Tea')).json();