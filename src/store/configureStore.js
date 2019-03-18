import { createStore, combineReducers } from 'redux'

import places from './reducers/places'

const rootReducer = combineReducers({
    places: places
});

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore;