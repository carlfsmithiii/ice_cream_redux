import store from './store';
import { addProductToFreezer, updateTemperature } from './actions/freezer';
import { VANILLA } from './constants/flavors';

store.subscribe(() => console.log(store.getState()));

store.dispatch(updateTemperature(-8));

store.dispatch(addProductToFreezer(VANILLA, 15));