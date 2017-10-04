// import update from 'immutability-helper';
import {FILTER_PRODUCTS} from "./actions";
import products from './data/products';
import _ from 'lodash';

const initialState = {
    products: products,
    currentFilter: "all"
}

const reducer = function(state = initialState, action) {
    switch(action.type){
        case FILTER_PRODUCTS:
            let newState = _.cloneDeep(state);
            newState.currentFilter = action.payload;
            return newState
        default:
            return state;
    }
}

export default reducer;
