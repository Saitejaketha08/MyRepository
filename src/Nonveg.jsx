import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./store"


function Nonveg()
{   
    const nonvegProducts=useSelector(state=>state.products.Nonveg)
    const dispatch=useDispatch()

    const items=nonvegProducts.map((product,index)=>
    <li key={index}>{product.name}-${product.price.toFixed(2)}
    <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </li>
)

    return(
        <>
        <h1 style={{color:'red'}}>this is Nonveg page</h1>
        <ol>
            {items}
        </ol>
        </>
    )
}
export default Nonveg