import React, { FC } from 'react'
import styles from './Sorter.module.css'

type Props = {
	active: boolean
	onClick: () => void
	text: string
}

const SorterItem: FC<Props> = ({
	onClick,
	active,
	text
}) => {
	let className = styles.item
	if(active) className += ` ${styles.itemActive}`

	return <div className={className} onClick={onClick}>{text}</div>
}

export default SorterItem