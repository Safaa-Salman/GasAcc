import * as ActionTypes from './ActionTypes';

export const Receipt = (state  = { isLoading: true,
                                        errMess: null,
                                        receipt:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_RECEIPT:
        return {...state, isLoading: false, errMess: null, receipt: action.payload};

        case ActionTypes.RECEIPT_LOADING:
            return {...state, isLoading: true, errMess: null, receipt: []}

        case ActionTypes.RECEIPT_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_ONERECEIPT:
            var onereceipt = action.payload;
            return { ...state, receipt: state.receipt.concat(onereceipt)};

        default:
          return state;
      }
};

