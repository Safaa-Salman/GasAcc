import * as ActionTypes from './ActionTypes';

export const FuelTanks = (state  = { isLoading: true,
                                        errMess: null,
                                        fuelTanks:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FUELTANKS:
        return {...state, isLoading: false, errMess: null, fuelTanks: action.payload};

        case ActionTypes.FUELTANKS_LOADING:
            return {...state, isLoading: true, errMess: null, fuelTanks: []}

        case ActionTypes.FUELTANKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};