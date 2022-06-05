/**
 * should sort data by key
 * @param data array of objects with same type
 * @param sequence contains sorting order
 * @param key object key
 *
 * data = [{ someKey: 'value3' }, { someKey: 'value1' }, { someKey: 'value2' }]
 * key = 'someKey'
 * sequence = ['value2', 'value1']
 *
 * should sort by 'someKey'
 * first comes objects with 'value2' then 'value1' then other values
 */
export const sortWithSequence = (data: any, key: any, sequence: any) => {}