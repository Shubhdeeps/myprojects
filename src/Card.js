

const Card = ({object, index}) => {

    return(
        <div className="card_container">
            <div className="index">{index}</div>
            <div className="title">{object.title}</div>
            <img src={object.image} alt={object.title} />
            <div className="description">
                <p> {object.description}</p>
            </div>
            <div className="button_group">
                <div className="visit_button"> Visit </div>
                <div className="code_button"> Code </div>
            </div>
        </div>
    )
}

export default Card