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

export const actions = {}

export default createReducer(initialState, builder => {
})