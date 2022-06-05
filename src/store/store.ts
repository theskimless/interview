import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './products-reducer'
import { useDispatch } from 'react-redux'

const store = configureStore({
	reducer: combineReducers({
		products: productsReducer
	})
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store