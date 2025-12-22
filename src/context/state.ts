type reducerType = { type: string, data: any }

const data = {
    full: false,
    percentage: 0
}
const reducer = function (prevState: typeof data, { type, data: data_ }: reducerType) {
    // console.log(prevState);
    switch (type) {
        case 'incremented_full':
            data.full = data_['full'];
            break;
        case 'percentage':
            data.percentage = data_['percentage']
    }
    return JSON.parse(JSON.stringify(data));
}
export type { reducerType }
export { data, reducer }