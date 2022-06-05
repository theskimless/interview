/**
 * should sort data by key
 * @param data array of objects with same type
 * @param sequence contains sorting order
 * @param key object key
 *
 * data = [{ company: 'samsung' }, { company: 'huawei' }, { company: 'apple' }]
 * key = 'company'
 * sequence = ['apple', 'huawei']
 *
 * Result:
 * data = [{ company: 'apple' }, { company: 'huawei' }, { company: 'samsung' }]
 *
 * should sort by 'someKey'
 * first comes objects with 'value2' then 'value1' then other values
 */
export const sortWithSequence = (data: any, key: any, sequence: any) => {}