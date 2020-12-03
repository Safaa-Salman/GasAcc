import * as ActionTypes from './ActionTypes';

export const TankPumps = (state  = { isLoading: true,
                                        errMess: null,
                                        tankPumps:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TANKPUMPS:
        return {...state, isLoading: false, errMess: null, tankPumps: action.payload};

        case ActionTypes.TANKPUMPS_LOADING:
            return {...state, isLoading: true, errMess: null, tankPumps: []}

        case ActionTypes.TANKPUMPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};