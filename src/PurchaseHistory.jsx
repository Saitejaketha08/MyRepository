// function PurchaseHistory()
// {
//     return(
//         <>
//         <h1 style={{color:'blue'}}>this is PurchaseHistory page</h1>

//         </>
//     )
// }
// export default PurchaseHistory



import React from 'react';
import { useSelector } from 'react-redux';

function PurchaseHistory() {
    const purchaseHistory = useSelector(state => state.purchaseHistory);

    return (
        <>
            <h2>Purchase History</h2>
            {purchaseHistory.length === 0 ? (
                <p>No purchases made yet.</p>
            ) : (
                <ul>
                    {purchaseHistory.map((purchase, index) => (
                        <li key={index}>
                            <strong>Purchase {index + 1}:</strong>
                            <ul>
                                {purchase.items.map((item, i) => (
                                    <li key={i}>
                                        {item.name} - Quantity: {item.quantity} - Total: ${item.price.toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                            <strong>Total Price: ${purchase.totalPrice.toFixed(2)}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default PurchaseHistory;
