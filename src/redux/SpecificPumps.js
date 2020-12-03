import * as ActionTypes from './ActionTypes';

export const SpecificPumps = (state  = { isLoading: true,
                                        errMess: null,
                                        specificPumps:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SPECIFICPUMPS:
        return {...state, isLoading: false, errMess: null, specificPumps: action.payload};

        case ActionTypes.SPECIFICPUMPS_LOADING:
            return {...state, isLoading: true, errMess: null, specificPumps: []}

        case ActionTypes.SPECIFICPUMPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};