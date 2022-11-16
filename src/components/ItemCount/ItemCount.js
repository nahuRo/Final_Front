import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({initial = 1, stock = 0, onAdd}) => {

    const [count, setCount] = useState(initial);
    
    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    if(stock === 0) {
        return <button disabled>No hay stock</button>
    }

    return (
        <div className="countBox">
            <div style={{textAlign:'center'}}>
                <button className="btnAddProd" onClick={() => onAdd(count)}>agregar al carrito</button>
            </div>
            <div className="countItems">
                <button className="btnCount" onClick={increment}> + </button>
                <span>{count}</span>
                <button className="btnCount" onClick={decrement}> - </button>
            </div>
        </div>
    );
};

export default ItemCount