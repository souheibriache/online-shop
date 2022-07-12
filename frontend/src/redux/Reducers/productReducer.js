import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS } from "../Constants/productConstants"


//PRODUCT LIST
export const productListReducer = (state  = {products : []} , action) => {
    switch (action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading : true, products : []}
        case PRODUCT_LIST_SUCESS :
            return {loading : false, products : action.payload}

        case PRODUCT_LIST_FAILURE : 
            return {loading : false, error : action.payload}
        default: return state 
    }
}


//PRODUCT DETAILS

export const productDetailsReducer = (state  = {product : {reviews : []}} , action) => {
    switch (action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {...state , loading : true}
        case PRODUCT_DETAILS_SUCESS :
            return {loading : false, product : action.payload}

        case PRODUCT_DETAILS_FAILURE : 
            return {loading : false, error : action.payload}
        default: return state 
    }
}