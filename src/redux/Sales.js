import * as ActionTypes from './ActionTypes';

export const Sales = (state  = { isLoading: true,
                                        errMess: null,
                                        sales:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SALES:
        return {...state, isLoading: false, errMess: null, sales: action.payload};

        case ActionTypes.SALES_LOADING:
            return {...state, isLoading: true, errMess: null, sales: []}

        case ActionTypes.SALES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};