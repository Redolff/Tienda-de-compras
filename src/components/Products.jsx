import './Products.css'

export const Products = ({ productos }) => {

    const img = () => {
        return 
            <img 
                src={x.thumbnail} 
                alt={x.title} 
                width={250} 
                height={250}
            />
    }
        
    return (
        <section className="products">
            <ul>
                {productos?.map(x => (
                    <li key={x.id}>
                        <h3>
                            {x.description}
                        </h3>
                        <div>
                            <strong> {x.title} </strong> - ${x.price}
                        </div>
                        <div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}