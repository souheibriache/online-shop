import axios from "axios"
import { CART_ADD_ITEM , CART_REMOVE_ITEM} from "../Constants/CartConstants"


export const addToCart = (id , qty) => async (dispatch , getState) =>{
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type : CART_ADD_ITEM,
        payload : {
            product : data._id,
            name : data.name,
            image : data.image,
            price : data.price,
            countInStock : data.countInStock,
            qty,
        }
    });

    console.log(JSON.stringify(getState()))
    localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems))

}


export const removeFromCart = (id) => (dispatch , getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    });


    localStorage.setItem('cartItems' , JSON.stringify(getState().cart.cartItems))
}

// {"productList":{"products":[]},"productDetails":{"loading":false,"product":{"_id":"6213ae7980b1985d2510a0e3","name":"Velcro Ballerinas For Girls  (Pink)","image":"/images/6.png","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book","rating":4,"numReviews":4,"price":89,"countInStock":3,"reviews":[],"__v":0}},"cart":{"cartItems":[{"product":"6213ae7980b1985d2510a0e3","name":"Velcro Ballerinas For Girls  (Pink)","image":"/images/6.png","price":89,"countInStock":3,"qty":1}]}}