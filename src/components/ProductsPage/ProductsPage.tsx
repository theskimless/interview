import React, { FC, useEffect } from 'react'
import { RootState, useAppDispatch } from '../../store/store'
import { shallowEqual, useSelector } from 'react-redux'
import { actions, getCategories, getProducts } from '../../store/products-reducer'
import Sorter from '../Sorter/Sorter'
import Table from '../Table/Table'
import styles from './ProductsPage.module.css'

type Props = {}

const ProductsPage: FC<Props> = () => {
	const dispatch = useAppDispatch()

	const {
		productsList,
		categoriesList
	} = useSelector((state: RootState) => ({
		productsList: state.products.productsList,
		categoriesList: state.products.categoriesList
	}), shallowEqual)

	useEffect(() => {
		dispatch(getCategories())
		dispatch(getProducts())
	}, [])

	const columns: {
		[key: string]: {
			title: string
		}
	} = {
		id: {
			title: 'Id'
		},
		title: {
			title: 'Name'
		},
		price: {
			title: 'Price'
		},
		category: {
			title: 'Category'
		}
	}

	const sortTable = <T extends {}, K extends keyof T>(data: T[], key: K, sequence: T[K][]): T[] => {
		const dataCopy = data.slice()

		dataCopy.sort((a, b) => {
			const aData = a[key]
			const bData = b[key]

			const aIndex = sequence.indexOf(aData)
			const bIndex = sequence.indexOf(bData)

			if (aIndex === bIndex) return 0
			else if (aIndex === -1) return 1
			else if (bIndex === -1) return -1

			return aIndex - bIndex
		})

		return dataCopy
	}

	const setCategoriesList = (list: string[]) => {
		dispatch(actions.setCategories(list))

		if (productsList) {
			dispatch(actions.setProducts(sortTable(productsList, 'category', list)))
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				{
					categoriesList &&
					<Sorter
						list={categoriesList}
						setList={setCategoriesList}
					/>
				}
			</div>
			{
				productsList &&
                <Table columns={columns} data={productsList}/>
			}
		</div>
	)
}

export default ProductsPage