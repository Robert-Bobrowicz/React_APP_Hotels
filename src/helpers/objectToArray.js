export function objectToArrayConvereter(object) {
    const arr = [];

    for (const key in object) {
        arr.push({
            ...object[key],
            id: key
        })
    };
    return arr;
}