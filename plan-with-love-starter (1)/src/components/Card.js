import { useState } from "react";

function Card({ id, image, info, name, price }) {
    const [readMore, setReadMore] = useState(false);
    const description = `${info.substring(0, 200)}...`;

    function readmoreHandler() {
        setReadMore(!readMore);
    }

    return (
        <div className="card">
            <img src={image} alt={name} className="image" />
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="tour-info">
                {readMore ? info : description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readMore ? 'show less' : 'read more'}
                </span>
            </div>
        </div>
    );
}

export default Card;
