type reducerType = { type: string, data: any }

const data = {
    full: false
}
const reducer = function (prevState: typeof data, { type, data: data_ }: reducerType) {
    console.log(prevState);
    switch (type) {
        case 'incremented_full':
            return {
                full: data_['full']
            }
    }
    return data;
}
export type { reducerType }
export { data, reducer }