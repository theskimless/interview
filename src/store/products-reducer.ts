import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { Category, Product } from '../types/products-types'
import { productsApi } from '../api/products-api'

type InitialState = {
	productsList: Product[] | null
	categoriesList: Category[] | null
}

const initialState: InitialState = {
	productsList: null,
	categoriesList: null
}

export const actions = {
	setProducts: createAction<Product[]>('products/setProducts'),
	setCategories: createAction<Category[]>('products/setCategories')
}

export default createReducer(initialState, builder => {
	builder
	.addCase(actions.setProducts, (state, action) => {
		const { payload } = action

		state.productsList = payload
	})
	.addCase(actions.setCategories, (state, action) => {
		const { payload } = action

		state.categoriesList = payload
	})
})

export const getProducts = createAsyncThunk('products/getProducts', async (args, { dispatch }) => {
	try {
		const res = await productsApi.fetchAllProducts()
		dispatch(actions.setProducts(res))
	}
	catch (e) {
		console.error(e)
	}
})

export const getCategories = createAsyncThunk('products/getCategories', async (args, { dispatch }) => {
	try {
		const res = await productsApi.fetchAllCategories()
		dispatch(actions.setCategories(res))
	}
	catch (e) {
		console.error(e)
	}
})