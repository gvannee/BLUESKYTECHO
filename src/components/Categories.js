import '../variable.css'

const Categories = (props) => {
    const more = props.more;
    const value = props.value
    return (
        <>
            {(value !== 'Top Featured Products') ? <div className="flex space-between border-bottom pb-5 bai-jamjuree-medium pointer hover-text">
                <span>{props.value}</span>
                {
                    more ? <span>{props.more}</span> : null
                }
            </div> : <div className="flex space-between bai-jamjuree-medium pointer hover-text">
                <span>{props.value}</span>
                {
                    more ? <span>{props.more}</span> : null
                }
            </div>}
        </>


    )
}

export default Categories;