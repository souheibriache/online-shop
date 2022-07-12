import axios from "axios"
import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS } from "../Constants/productConstants"

//LIST PRODUCTS
export const listProducts = () => async (dispatch) => {
    try{

        dispatch({type: PRODUCT_LIST_REQUEST})
        console.log('hahahha')
        const {data} = await axios.get('/api/products');
        dispatch({type: PRODUCT_LIST_SUCESS , payload: data});

    }catch(err){
        dispatch({ 
            type: PRODUCT_LIST_FAILURE,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}


//DETAILS PRODUCTS
export const productDetails = (id) => async (dispatch) => {
    try{

        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get('/api/products/'+id);
        dispatch({type: PRODUCT_DETAILS_SUCESS , payload: data});

    }catch(err){
        console.log('hahahha')
        dispatch({ 
            type: PRODUCT_DETAILS_FAILURE,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

