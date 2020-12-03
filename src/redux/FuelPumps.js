import * as ActionTypes from './ActionTypes';

export const FuelPumps = (state  = { isLoading: true,
                                        errMess: null,
                                        fuelPumps:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FUELPUMPS:
        return {...state, isLoading: false, errMess: null, fuelPumps: action.payload};

        case ActionTypes.FUELPUMPS_LOADING:
            return {...state, isLoading: true, errMess: null, fuelPumps: []}

        case ActionTypes.FUELPUMPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};