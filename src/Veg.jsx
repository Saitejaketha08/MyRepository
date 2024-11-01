// import { useDispatch, useSelector } from "react-redux";
//  // Make sure to specify the correct path
// import {addToCart} from './store'
// function Veg() {
//     const dispatch = useDispatch();
//     const vegProducts = useSelector(state => state.products.Veg);
    
//     const items = vegProducts.map((product, index) => (
//         <li key={index}>
//             {product.name} - ${product.price.toFixed(2)}
//             <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
//         </li>
//     ));
    
//     return (
//         <>
//             <h1 style={{ color: 'green' }}>This is the Veg page</h1>
//             <ul>
//                 {items}
//             </ul>
//         </>
//     );
// }

// export default Veg;

import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./store"


function Veg()
{
  const vegProducts=useSelector(state=>state.products.Veg)
  const dispatch=useDispatch()

  const items=vegProducts.map((product,index)=>
                                   <li key={index}>{product.name}-${product.price.toFixed(2)}
                                   <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                                   </li>
                  )
    return(
        <>
          <h1>This is Veg items page</h1>
          <ul>{items}</ul>
        </>
      )
}
export default Veg
