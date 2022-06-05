import React, { FC, useState } from 'react'
import styles from './Sorter.module.css'

type Props = {
	list: string[]
	setList: (data: string[]) => void
}

const Sorter: FC<Props> = ({
	list,
	setList
}) => {
	const [selectedIndex, setSelectedIndex] = useState(-1)

	const handleUpClick = () => {
		const listCopy = list.slice()
		const items = listCopy.splice(selectedIndex, 1)
		listCopy.splice(selectedIndex - 1, 0, ...items)
		setList(listCopy)
		setSelectedIndex(-1)
	}

	const handleDownClick = () => {
		const listCopy = list.slice()
		const items = listCopy.splice(selectedIndex, 1)
		listCopy.splice(selectedIndex + 1, 0, ...items)
		setList(listCopy)
		setSelectedIndex(-1)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.headerButtonWrapper}>
					<button className={styles.button} onClick={handleUpClick}>UP &uarr;</button>
				</div>
				<div className={styles.headerButtonWrapper}>
					<button className={styles.button} onClick={handleDownClick}>DOWN &darr;</button>
				</div>
			</div>
			<div>
				{
					list.map((item, index) => {
						const active = index === selectedIndex

						let className = styles.item
						if(active) className += ` ${styles.itemActive}`

						return <div key={item} className={className} onClick={() => setSelectedIndex(index)}>{item}</div>
					})
				}
			</div>
		</div>
	)
}

export default Sorter