import { sortWithSequence } from '../sorting-helper'

describe('sorting-helper', () => {
	describe('sortWithSequence', () => {
		const CATEGORIES = {
			smartphones: 'smartphones',
			laptops: 'laptops',
			fragrances: 'fragrances',
			groceries: 'groceries',
			furniture: 'furniture',
		}

		it('should sort', () => {
			const data = [
				{
					name: 'iPhone X',
					category: CATEGORIES.smartphones
				},
				{
					name: 'Huawei P30',
					category: CATEGORIES.smartphones
				},
				{
					name: 'MacBook Pro',
					category: CATEGORIES.laptops
				},
				{
					name: 'Microsoft Surface Laptop 4',
					category: CATEGORIES.laptops
				},
				{
					name: 'Milk',
					category: CATEGORIES.groceries
				},
			]

			const res = sortWithSequence(data, 'category', [CATEGORIES.laptops, CATEGORIES.groceries, CATEGORIES.furniture])

			expect(res[0].name).toBe('MacBook Pro')
			expect(res[1].name).toBe('Microsoft Surface Laptop 4')
			expect(res[2].name).toBe('Milk')
			expect(res[3].name).toBe('iPhone X')
			expect(res[4].name).toBe('Huawei P30')
		})
	})
})