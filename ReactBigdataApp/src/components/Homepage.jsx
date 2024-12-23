import { useEffect, useState } from "react"
import getApiData, { getAllProducts } from "../request/request"
import { Link } from "react-router-dom"
import Loading from "./Loading"
import RenderProduct from "./RenderProduct"

const Homepage = () => {
    const [products, setProducts] = useState([])
    const [skip, setSkip] = useState(0)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getAllProducts(skip).then(data => {
            setProducts([...products, ...data])
            setLoading(false)
        })
    }, [skip])

    const handleClick = () => {
        setSkip(skip + 8)
    }

    return (
        <div className="homepage">
            {
                products?.length > 0 &&
                <div>
                    <div className="container">
                        {products?.map(product => (
                            <RenderProduct key={product?.id} product={product} />
                        ))}
                    </div>
                    <div className="see-more-container">
                        {loading ? <Loading /> : <button className="see-more-button" onClick={handleClick}>See more</button>}
                    </div>
                </div>
                || <Loading />
            }
        </div>
    )
}

export default Homepage