
const apikey = import.meta.env.VITE_API_KEY
export const getApiData = async (locationName) => {
    try {
        const [summaryRes, detailRes] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${apikey}&lang=en&units=metric`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=${apikey}&lang=en&units=metric`)
        ]);

        if (!summaryRes.ok) {
            throw new Error('HTTP Hatası: ' + summaryRes.status);
        }
        if (!detailRes.ok) {
            throw new Error('HTTP Hatası: ' + detailRes.status);
        }

        const [summary_data, detail_data] = await Promise.all([
            summaryRes.json(),
            detailRes.json()
        ]);

        return [summary_data, detail_data];
    } catch (error) {
        throw new Error('Hata: ' + error.message);
    }
};
export const getCityDetailData = async (locationName) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=${apikey}&lang=en&units=metric`);
        if (!response.ok) {
            throw new Error('HTTP Hatası: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error('Hata: ' + error.message);
    }
}