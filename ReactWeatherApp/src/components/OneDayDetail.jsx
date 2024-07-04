import PropTypes from "prop-types";
import clock from '../assets/clock.png'
const TodayDetails = ({ weather }) => {
    return (
        <div className="today-main" key={weather.id}>
            <div className="today-card">
                <div className="sub-card-title">
                    <img src={clock} alt="clock" width={20} />
                    {weather.dt_txt.slice(11).slice(0, 5)}
                </div>
                <div className="today-card-header">
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                        alt={weather.weather[0].description}
                    />
                </div>
                <div className="today-card-body">
                    <div className="card-title">{Math.floor(weather.main.temp)}°C</div>
                </div>
            </div>
        </div>
    );
};

TodayDetails.propTypes = {
    weather: PropTypes.object,
};
export default TodayDetails