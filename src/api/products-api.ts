import { Category, Product } from '../types/products-types'

export const productsApi = {
	fetchAllProducts: () => {
		return fetch('https://dummyjson.com/products?limit=15&select=title,price,category')
		.then(res => res.json())
		.then(res => res.products) as Promise<Product[]>
	},
	fetchAllCategories: () => {
		return fetch('https://dummyjson.com/products/categories')
		.then(res => res.json()) as Promise<Category[]>
	}
}