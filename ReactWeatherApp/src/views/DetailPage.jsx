import OneDayDetail from "../components/OneDayDetail";
import DailyDetail from "../components/DailyDetail";
import { dailyWeathers, remainingDays } from "../chunked/chunked";
import Loading from "../components/Loading"
import PropTypes from "prop-types";

const DetailPage = ({ detailData }) => {
  return (
    <div className="detail-section">
      <h1 className="detail-title">today weather</h1>
      {detailData &&
        <div className="detail-container">
          <div className="today-container">
            {dailyWeathers(detailData)[0]?.map((weather, i) => (
              <OneDayDetail weather={weather} key={i} />
            ))}
          </div>
          <div className="remain-container">
            {remainingDays(detailData).map((weather, i) => (
              <DailyDetail key={i} weather={weather} />
            ))}
          </div>
        </div> ||
        <Loading />
      }
    </div>
  )
}
DetailPage.propTypes = {
  detailData: PropTypes.object,
};
export default DetailPage
{/* <div  className='button-link'>
  <Link to={`/`}>
    <button >Go home</button>
  </Link>
</div> */}
{/* <div className="today-container">
  {dailyWeathers(cityDetail)[0]?.map((weather, i) => (
    <OneDayDetail weather={weather} key={i} />
  ))}
</div>
<div className="remain-container">
  {remainingDays(cityDetail).map((weather, i) => (
    <DailyDetail key={i} weather={weather} />
  ))} */}