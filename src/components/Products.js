import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InStockCustom from "./InStockCustom";
import CountdownTimer from "./CountDownLock/CountDown";

const Products = (props) => {
    const sale = props.sale;
    const salePrice = ((props.price) * (sale / 100));
    const specialProduct = props.specialProduct;
    const getStars = (rating) => {
        return <div >
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFB800" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFB800" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFB800" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFB800" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFB800" }} />
            <span className="size-10 ml-3">({rating})</span>
        </div>
    }
    return (
        <>
            {specialProduct ?
                <div className="bg-white flex-col pd-8-8 bai-jamjuree-semibold relative grid-item">
                    <h4 className="text-align-center size-11 border-bottom">TODAY'S OFFER</h4>
                    <span className="bg-red w-fit pd-5-7 color-white absolute t-10 l-10">- {sale}%</span>
                    <img src={props.src} alt={props.alt} className="w-50 align-self-center" />
                    <span className="pb-5">{props.name}</span>
                    {getStars(30)}
                    <div>
                        <span >${props.price}</span>
                        {
                            sale ? <span className="ml-24 overline">${salePrice}</span> : null
                        }
                    </div>
                    <CountdownTimer targetHours={24}/>
                    <span>Sold: {props.value}/{props.specialProduct} products</span>
                </div>
                :
                <div className="bg-white flex-col pd-8-8 bai-jamjuree-semibold relative">
                    {
                        sale ? <span className="bg-red w-fit pd-5-7 color-white absolute">- {sale}%</span> : null
                    }
                    <img src={props.src} alt={props.alt} className="w-50 align-self-center" />
                    <span className="pb-5">{props.name}</span>
                    {getStars(30)}
                    <div>
                        <span >${props.price}</span>
                        {
                            sale ? <span className="ml-24 overline">${salePrice}</span> : null
                        }

                    </div>
                    <InStockCustom value={props.value} />

                </div>}
        </>
    )
}

export default Products;