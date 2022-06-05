import React, { FC } from 'react'

type Row = {
	[key: string]: string | number
}

type Props = {
	data: Row[]
	columns: {
		[key: string]: {
			title: string
		}
	}
}

const Table: FC<Props> = ({
	data,
	columns
}) => {
	const renderRow = (handleCell: (key: string) => React.ReactNode) => {
		return Object.keys(columns).map(handleCell)
	}
	return (
		<div>
			<table>
				<tr>
					{
						renderRow(key => {
							const columnData = columns[key]

							return (
								<th key={key}>{columnData.title}</th>
							)
						})
					}
				</tr>
				{
					data.map((rowData, index) => {
						return (
							<tr key={index}>
								{
									renderRow(key => {
										const cellData = rowData[key]
										return <td key={key}>{cellData}</td>
									})
								}
							</tr>
						)
					})
				}

			</table>
		</div>
	)
}

export default Table