import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { TankPumps } from './TankPumps';
import { FuelPumps } from './FuelPumps';
import { FuelTanks } from './FuelTanks';
import { SpecificPumps } from './SpecificPumps';
import { SpecificTanks } from './SpecificTanks';
import { InitialReceipt, InitialInvoice } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
 

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            tankPumps : TankPumps,
            fuelTanks : FuelTanks ,
            fuelPumps : FuelPumps,
            specificPumps: SpecificPumps,
            specificTanks: SpecificTanks,
            ...createForms({
                receipt: InitialReceipt,
                invoice: InitialInvoice
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
