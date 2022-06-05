import React, { FC } from 'react'
import styles from './Sorter.module.css'
import SorterItem from './SorterItem'

type Props = {
	list: string[]
	setList: (data: string[]) => void
}

const Sorter: FC<Props> = ({
	list,
	setList
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.headerButtonWrapper}>
					<button className={styles.button}>UP &uarr;</button>
				</div>
				<div className={styles.headerButtonWrapper}>
					<button className={styles.button}>DOWN &darr;</button>
				</div>
			</div>
			<div>
				{
					list.map((item, index) => {
						return (
							<SorterItem
								active={false}
								text={item}
								onClick={() => {}}
							/>
						)
					})
				}
			</div>
		</div>
	)
}

export default Sorter