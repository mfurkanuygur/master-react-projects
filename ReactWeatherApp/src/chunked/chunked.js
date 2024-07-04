
function* chunked(arr, size) {
    for (let i = 0; i < arr?.length; i += size) {
        yield arr.slice(i, i + size);
    }
}

export const dailyWeathers = (cityDetails) => {
    return [...chunked(cityDetails?.list, 8)];
}

export const remainingDays = (cityDetails) => {
    const dateNow = new Date().toJSON().slice(0, 10);
    const remainingDayData = cityDetails?.list.filter((item) => item.dt_txt.slice(0, 10) !== dateNow);
    return [...chunked(remainingDayData, 8)];
}