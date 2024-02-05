import '../../variable.css';
import style from './select.module.css';

const SelectCustom = (props) => {
    const options = props.options;
    const defaultValue = props.defaultValue;
    return (
        <select className={props.size}>
            {
                defaultValue ? <option defaultValue={props.defaultValue}>{props.defaultValue}</option> 
                : null
            }
            
            {
                options.map((option, index) => (
                    <option key={index} className={props.class}>{option}</option>
                ))
            }

        </select>
    )

}

export default SelectCustom;