export const isDeepEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    console.log("1")
    let comparedArr = [];

    if (keys1.length === keys2.length) {
        console.log("2")
        for (const key of keys1) {
            const val1 = obj1[key];
            const val2 = obj2[key];

            if (val1 !== val2) {
                comparedArr.push(key);
            }
        }
    }
    console.log(comparedArr);

    return comparedArr;
}