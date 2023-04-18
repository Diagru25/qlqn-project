export const useStatistic = (data) => {
    const newData = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].detail) {
            newData.push(data[i]);
        }
    }

    return { newData };
}