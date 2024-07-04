import PropTypes from 'prop-types'
import DetailPage from '../views/DetailPage'
import humidity from '../assets/humidity.png'
import maxtemp from '../assets/maxtemp.png'
import mintemp from '../assets/mintemp.png'
import feelslike from '../assets/feelslike.png'
const DisplayLocationData = ({ locationData }) => {
    const [summary, detail] = locationData
    return (
        <div className='container' key={summary?.id}>
            <div className='main-summary'>
                <div className='city-summary'>
                    <div className='card-title'>
                        <img className='' src={`https://openweathermap.org/img/wn/${summary?.weather[0]?.icon}@2x.png`} alt="" />
                        <p className=''>{summary?.weather[0].description}</p>
                    </div>
                    <h1>{summary?.name}</h1>
                    <p>chance of rain: {summary?.main?.humidity}%</p>
                    <h1>{Math.floor(summary?.main?.temp)}°C</h1>
                </div>
                <div className='city-summary-data'>
                    <div className='card'>
                        <div className='sub-card'>
                            <div className='sub-card-title'>
                                <img src={feelslike} alt="feelslike" width={25} />
                                <p>feels like</p>
                            </div>
                            <p className=''> {Math.floor(summary?.main.feels_like)}°C</p>
                        </div>
                        <div className='sub-card'>
                            <div className='sub-card-title'>
                                <img src={humidity} alt="humidity" width={20} />
                                <p>Humidity </p>
                            </div>
                            <p className=''>{(summary?.main.humidity)}%</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='sub-card'>
                            <div className='sub-card-title'>
                                <img src={mintemp} alt="mintemp" width={20} />
                                <p>Min Temp </p>
                            </div>
                            <p className=''>{Math.floor(summary?.main.temp_min)}°C</p>
                        </div>
                        <div className='sub-card'>
                            <div className='sub-card-title'>
                                <img src={maxtemp} alt="maxtemp" width={20} />
                                <p>Max Temp </p>
                            </div>
                            <p className=''>{Math.ceil(summary?.main.temp_max)}°C</p>
                        </div>
                    </div>
                </div>
            </div>
            <DetailPage detailData={detail} />
        </div>
    )
}
DisplayLocationData.propTypes = {
    locationData: PropTypes.array
}
export default DisplayLocationData
