import {createStore , combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productDetailsReducer, productListReducer } from './Reducers/productReducer';
import { cartReducer } from './Reducers/CartReducers';
import { userLoginReducer } from './Reducers/UserReducers';


const reducer  = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer
    userLogin : userLoginReducer
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []


const initialState = {
    cart : {
        cartItems : cartItemsFromLocalStorage
    }
};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store