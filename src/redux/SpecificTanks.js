import * as ActionTypes from './ActionTypes';

export const SpecificTanks = (state  = { isLoading: true,
                                        errMess: null,
                                        specificTanks:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SPECIFICTANKS:
        return {...state, isLoading: false, errMess: null, specificTanks: action.payload};

        case ActionTypes.SPECIFICTANKS_LOADING:
            return {...state, isLoading: true, errMess: null, specificTanks: []}

        case ActionTypes.SPECIFICTANKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};