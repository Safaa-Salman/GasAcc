import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { TankPumps } from './TankPumps';
import { FuelPumps } from './FuelPumps';
import { FuelTanks } from './FuelTanks';
import { SpecificPumps } from './SpecificPumps';
import { SpecificTanks } from './SpecificTanks';
import { InitialReceipt, InitialInvoice, InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Invoice } from './Invoice';
import { Receipt } from './Receipt';
import {Sales} from './Sales';
 

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            tankPumps : TankPumps,
            fuelTanks : FuelTanks ,
            fuelPumps : FuelPumps,
            specificPumps: SpecificPumps,
            specificTanks: SpecificTanks,
            invoice: Invoice,
            receipt: Receipt,
            sales: Sales,
            ...createForms({
                feedback: InitialFeedback
                // receipt: InitialReceipt,
                // invoice: InitialInvoice
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
