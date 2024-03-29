import { useState } from 'react';

const ItemCounter = ({stock,initial,onAdd}) => {

    const [numero , setNumero] = useState(initial)
    const addToCart = () => {
        onAdd(numero)
    }
    
    
    const sumar = () => {
        if(numero < stock){
            setNumero(numero + 1)
        }

    }
    const restar = () => {
        if(numero > initial){
            setNumero(numero - 1)
        }

    }

    return (
        <div>
            <div className="contenedor2">
                <div className='carrito'>

                    <div className='textos'>
                        <h3> Stock: {stock} </h3>
                        
                    </div>
                    
                    <div className='canti'>                        
                        <h2> Cantidad: </h2>
                        <h3 className='numero'>{numero}</h3>
                    </div>    
                        <div className='content'> 
                            <button onClick={sumar} >+</button>
                            <button onClick={restar}>-</button>
                        </div>
                    
                    <div className='addCart'>
                        <button onClick={addToCart} >
                            Agregar al carrito!
                        </button>    
                    </div>
                </div>    
                
            </div>
        </div>
    )
}

export default ItemCounter