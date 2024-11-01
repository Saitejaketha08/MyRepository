// import React from 'react'
// import Veg from './Veg'
 
// import Nonveg from './Nonveg'
// import { configureStore, createSlice } from '@reduxjs/toolkit'
// import { Action } from '@remix-run/router'

//     const productsSlice=createSlice({
//     name:'products',
//     initialState:{
//         Veg:[
//         {name:'tomato',price:200.45},
//         {name:'potato',price:300.05},
//         {name:'Drumstick',price:150.15},
//         {name:'leadyfinger',price:180.65},
//         {name:'Brinzal',price:140.15},
//         {name:'Bell peppers',price:200.35},
//         {name:'onions',price:500.50}
//     ],
//     Nonveg:[
//         {name:'chicken',price:300.00},
//         {name:'mutton',price:400.00},
//         {name:'Fish',price:500.00},
//         {name:'Crab',price:100.00},
//         {name:'Prawns',price:350.00},
//         {name:'chicken-liverfry',price:250.00},
//         {name:'chicken-thanduri',price:700.00}
//     ]
//     } ,
//     reducers:{}
//     })
//  const cartSlice= createSlice({
//     name:'cart',
//     initialState:[],
//     reducer:{
//         addToCart:(state,action)=>{
//             const status=state.find(item=>item.name===action.payload.name)
//             if(status)
//             {
//                 status.quantity +=1;
//             }
//             else{
//                 state.push({...action.payload,quantity:1})
//             }
//         }
//     }
//  })

//  const store=configureStore({ 
//     reducer:{
//      products:productsSlice.reducer,
//      cart:cartSlice.reducer,
//     }
//  })

// export default store
// export const {addToCart}=cartSlice.actions

// import React from 'react'
// import Veg from './Veg'

// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import Nonveg from './Nonveg';

//     const productSlice=createSlice({
//         name:'products',
//         initialState:{
//             Veg:[
//                   {name:'tomato',price:200.45},
//                   {name:'potato',price:300.05},
//                   {name:'Drumstick',price:150.15},
//                   {name:'leadyfinger',price:180.65},
//                   {name:'Brinzal',price:140.15},
//                   {name:'Bell peppers',price:200.35},
//                   {name:'onions',price:500.50}
//                     ],
//                     Nonveg:[
//                         {name:'chicken',price:300.00},
//                         {name:'mutton',price:400.00},
//                         {name:'Fish',price:500.00},
//                         {name:'Crab',price:100.00},
//                         {name:'Prawns',price:350.00},
//                         {name:'chicken-liverfry',price:250.00},
//                       {name:'chicken-thanduri',price:700.00}
//                   ]    
//         },
//         reducers:{}
//     });

    



// //Cart to slice
// const cartSlice=createSlice({
//     name:'cart',
//     initialState:[],
//     reducers:{
//         addToCart:(state,action)=>{
//             const status=state.find(item=>item.name===action.payload.name)

//             if(status)
//             {
//                 status.quantity+=1;
//             }
//             else{
//                 state.push({...action.payload,quantity:1});
//             }

//         }
        
//     }


// })

// const store=configureStore({
//     reducer:{ 
//      products:productSlice.reducer,
//      cart:cartSlice.reducer,
//     }
//  })


// export default store
// export const {addToCart}=cartSlice.actions



import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import Veg from './Veg';
import Nonveg from './Nonveg';

// Products Slice
const productSlice = createSlice({
    name: 'products',
    initialState: {
        Veg: [
            { name: 'Tomato', price: 200.45 },
            { name: 'Potato', price: 300.05 },
            { name: 'Drumstick', price: 150.15 },
            { name: 'Ladyfinger', price: 180.65 },
            { name: 'Brinjal', price: 140.15 },
            { name: 'Bell Peppers', price: 200.35 },
            { name: 'Onions', price: 500.50 },
        ],
        Nonveg: [
            { name: 'Chicken', price: 300.00 },
            { name: 'Mutton', price: 400.00 },
            { name: 'Fish', price: 500.00 },
            { name: 'Crab', price: 100.00 },
            { name: 'Prawns', price: 350.00 },
            { name: 'Chicken Liver Fry', price: 250.00 },
            { name: 'Chicken Tandoori', price: 700.00 },
        ],
    },
    reducers: {},
});

// Cart Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.name === action.payload.name);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },

        incrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        
        removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clearCart: (state) => {
            return [];
        },
    },
});

// Configure Store
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
    },
});

// Exporting Store and Actions
export default store;
export const { addToCart,incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
