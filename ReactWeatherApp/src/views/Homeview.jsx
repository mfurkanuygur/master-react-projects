import { useState } from "react"
import EnterForm from "../components/EnterForm"
import Loading from "../components/Loading"
import DisplayLocationData from "../components/DisplayLocationData"

const Homeview = () => {
  const [locationData, setLocationData] = useState()
  const [cityName, setCityName] = useState("Kayseri")

  return (
    <>
      <h1 className="main-title">Weather App with React</h1>
      <EnterForm cityName={cityName} setCityName={setCityName} setLocationData={setLocationData} />
      {
        locationData == null ? <Loading /> : <DisplayLocationData locationData={locationData} />
      }
    </>
  )
}

export default Homeview