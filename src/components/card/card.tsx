import "./card.css";

interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card({ price, image, title } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}