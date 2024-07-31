import { AddToCartIcon } from './Icons'
import './Products.css'

export const Products = ({ products }) => {

    /*const img = () => {
        return 
            <img 
                src={x.thumbnail} 
                alt={x.title} 
                width={250} 
                height={250}
            />
    }*/
        
    return (
        <section className="products">
            <ul>
                {products?.map(x => (
                    <li key={x.id}>
                        <h3>
                            {x.description}
                        </h3>
                        <div>
                            <strong> {x.title} </strong> - ${x.price}
                        </div>
                        <div>
                            <button onClick={() => console.log('Agregar al carro')}>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}