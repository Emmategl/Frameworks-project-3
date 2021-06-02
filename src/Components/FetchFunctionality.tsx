import { BasketItemType } from "./BasketItemType";

export const getAllProducts = async (): Promise<BasketItemType[]> =>
await (await fetch('http://localhost:3001/products/info')).json();

export const getCoffees = async (): Promise<BasketItemType[]> =>
await (await fetch('http://localhost:3001/product/category/1')).json();

export const getTeas = async (): Promise<BasketItemType[]> =>
await (await fetch('http://localhost:3001/product/category/2')).json();

export const getPopularProducts = async (): Promise<BasketItemType[]> =>
await (await fetch('http://localhost:3001/product/popularity/1')).json();









