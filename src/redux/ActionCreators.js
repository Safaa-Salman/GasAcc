import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//---------------------------------------Receipt and Invoice----------------------------------------
export const addReceipt = (receipt) => ({
  type: ActionTypes.ADD_RECEIPT,
  payload: receipt
});

export const addInvoice = (invoice) => ({
  type: ActionTypes.ADD_INVOICE,
  payload: invoice
});

export const postReceipt = (company, value, serialnbr) => (dispatch) => {

  const newReceipt = {
      company: company,
      value: value,
      serialnbr: serialnbr
  };
  newReceipt.date = new Date().toISOString();
  
  return fetch(baseUrl + 'receipt', {
      method: "POST",
      body: JSON.stringify(newReceipt),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addReceipt(response)))
  .catch(error =>  { console.log('post receipt', error.message); alert('Your receipt could not be posted\nError: '+error.message); });
};

export const postInvoice = (company, tank, litre, value, serialnbr) => (dispatch) => {

  const newInvoice = {
      company: company,
      tank: tank,
      litre: litre,
      value: value,
      serialnbr: serialnbr
  };
  newInvoice.date = new Date().toISOString();
  
  return fetch(baseUrl + 'Invoice', {
      method: "POST",
      body: JSON.stringify(newInvoice),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addInvoice(response)))
  .catch(error =>  { console.log('post Invoice', error.message); alert('Your Invoice could not be posted\nError: '+error.message); });
};
//------------------------------------------ Fuel Tanks; Specific Tanks; Tank Detail --------------------------------


//--------- Fuel Tanks

export const fetchFuelTanks = () => (dispatch) => {  
  
  dispatch(FuelTanksLoading(true));
  return fetch(baseUrl + 'fuel')
  .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(fuelTanks => dispatch(addFuelTanks(fuelTanks)))
  .catch(error => dispatch(FuelTanksFailed(error.message)));
};

export const FuelTanksLoading = () => ({
  type: ActionTypes.FUELTANKS_LOADING
});

export const FuelTanksFailed = (errmess) => ({
  type: ActionTypes.FUELTANKS_FAILED,
  payload: errmess
});

export const addFuelTanks = (fuelTanks) => ({
  type: ActionTypes.ADD_FUELTANKS,
  payload: fuelTanks
});

//------------------Specific Tanks-----------------

export const fetchSpecificTanks = () => (dispatch) => {

  dispatch(SpecificTanksLoading(true));

  return fetch(baseUrl + 'tank')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(specificTanks => dispatch(addSpecificTanks(specificTanks)))
  .catch(error => dispatch(SpecificTanksFailed(error.message)));
}

export const SpecificTanksLoading = () => ({
  type: ActionTypes.SPECIFICTANKS_LOADING
});
export const SpecificTanksFailed = (errmess) => ({
  type: ActionTypes.SPECIFICTANKS_FAILED,
  payload: errmess
});

export const addSpecificTanks = (specificTanks) => ({
  type: ActionTypes.ADD_SPECIFICTANKS,
  payload: specificTanks
});

//------------------------------ tankPumps  


export const fetchTankPumps = () => (dispatch) => {
  
    dispatch(TankPumpsLoading(true));

    return fetch(baseUrl + 'pump')
    .then(response => {
        if (response.ok) {
          return response;
        }
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(tankPumps => dispatch(addTankPumps(tankPumps)))
    .catch(error => dispatch(TankPumpsFailed(error.message)));
};

export const TankPumpsLoading = () => ({
  type: ActionTypes.TANKPUMPS_LOADING
});

export const TankPumpsFailed = (errmess) => ({
    type: ActionTypes.TANKPUMPS_FAILED,
    payload: errmess
});

export const addTankPumps = (tankPumps) => ({
    type: ActionTypes.ADD_TANKPUMPS,
    payload: tankPumps
});

//------------------------------- Fuel Pumps; Specific pumps 
export const fetchFuelPumps = () => (dispatch) => {  
  
  dispatch(FuelPumpsLoading(true));
  return fetch(baseUrl + 'fuel')
  .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(fuelpumps => dispatch(addFuelPumps(fuelpumps)))
  .catch(error => dispatch(FuelPumpsFailed(error.message)));
};

export const FuelPumpsLoading = () => ({
  type: ActionTypes.FUELPUMPS_LOADING
});

export const FuelPumpsFailed = (errmess) => ({
  type: ActionTypes.FUELPUMPS_FAILED,
  payload: errmess
});

export const addFuelPumps = (fuelPumps) => ({
  type: ActionTypes.ADD_FUELPUMPS,
  payload: fuelPumps
});


export const fetchSpecificPumps = () => (dispatch) => {

  dispatch(SpecificPumpsLoading(true));

  return fetch(baseUrl + 'pump')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(specificPumps => dispatch(addSpecificPumps(specificPumps)))
  .catch(error => dispatch(SpecificPumpsFailed(error.message)));
}

export const SpecificPumpsLoading = () => ({
  type: ActionTypes.SPECIFICPUMPS_LOADING
});

export const SpecificPumpsFailed = (errmess) => ({
  type: ActionTypes.SPECIFICPUMPS_FAILED,
  payload: errmess
});

export const addSpecificPumps = (specificPumps) => ({
  type: ActionTypes.ADD_SPECIFICPUMPS,
  payload: specificPumps
});
