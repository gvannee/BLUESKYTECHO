import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InStockCustom = (props) => {
    return (
        <div className="pd-tb-7">
            {
                (props.value > 10) ? 
                <div className="size-9">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#008A00"}}/>
                    <span className="color-green"> In stock <b className="color-black">{props.value}</b> </span>
                    <span>products</span>
                </div> 
                : <div className="size-9">
                    <FontAwesomeIcon icon={faCheck} style={{color: "red"}}/>
                    <span className="color-red"> Only {props.value} left in stock </span>
                </div>
            }
        </div>
    )
}

export default InStockCustom;