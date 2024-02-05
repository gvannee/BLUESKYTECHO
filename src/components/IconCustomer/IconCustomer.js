import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../variable.css';
const IconCustomer = (props) => {
    const title = props.title;
    return (
        <div className="flex align-item-center gap-5 pointer">
            <FontAwesomeIcon icon={props.icon} style={props.color} />
            {
                title ? <div className="flex-col  ">
                    <span className="size-7 text-align-left bai-jamjuree-regular">{props.title}</span> 
                    <span className="size-9 bai-jamjuree-semibold">{props.value}</span>
                    </div>
                    : null
            }
        </div>
    )
}

export default IconCustomer;