import * as ActionTypes from './ActionTypes';

export const Promotions = (state = { isLoading: true,
                                     errMes: null,
                                     promotions: [] }, action) => {
    switch(action.type) {
        case ActionTypes:
            return{...state, isLoading: false, errMess: null, promotions: action.payload};
        case ActionTypes.PROMOTIONS_LOADING:
            return{...state, isLoading: true, errMess: null, promotions: [] };
        case ActionTypes.PROMOTIONS_FAILED: 
            return{...state, isLoading: false, errMes: action.payload};   
        default:
            return state;
    }
}