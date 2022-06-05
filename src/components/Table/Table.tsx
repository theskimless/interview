import React, { FC } from 'react'

type Props = {
	data: any
	columns: any
}

const Table: FC<Props> = ({
	data,
	columns
}) => {
	return (
		<div>
			<table>
				<tr>
					<th>{'Id'}</th>
					<th>{'Name'}</th>
					<th>{'Price'}</th>
					<th>{'Category'}</th>
				</tr>

				<tr>
					<td>1</td>
					<td>iPhone</td>
					<td>800</td>
					<td>smartphones</td>
				</tr>
			</table>
		</div>
	)
}

export default Table