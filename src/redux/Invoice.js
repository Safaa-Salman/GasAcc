import * as ActionTypes from './ActionTypes';

export const Invoice = (state  = { isLoading: true,
                                        errMess: null,
                                        invoice:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INVOICE:
        return {...state, isLoading: false, errMess: null, invoice: action.payload};

        case ActionTypes.INVOICE_LOADING:
            return {...state, isLoading: true, errMess: null, invoice: []}

        case ActionTypes.INVOICE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_ONEINVOICE:
            var oneinvoice = action.payload;
            return { ...state, invoice: state.invoice.concat(oneinvoice)};

        default:
          return state;
      }
};

