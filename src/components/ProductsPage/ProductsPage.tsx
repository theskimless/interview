import React, { FC } from 'react'
import Sorter from '../Sorter/Sorter'
import styles from './ProductsPage.module.css'
import Table from '../Table/Table'
import { productsColumns } from '../../config/products-config'

type Props = {}

const ProductsPage: FC<Props> = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				<Sorter
					list={['1', '2']}
					setList={() => {}}
				/>
			</div>
			<Table columns={productsColumns} data={[]} />
		</div>
	)
}

export default ProductsPage