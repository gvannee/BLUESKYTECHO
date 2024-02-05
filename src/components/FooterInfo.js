import '../variable.css';
const FooterInfo = (props) => {
    const informations = props.info
    return (
        <div className="flex-col gap-10 w-20 size-11">
            <h4>{props.title}</h4>
            {
                informations.map((item, index) => (
                    <span key={index} className='size-11'>{item}</span>
                ))
            }
        </div>
    )
}

export default FooterInfo;