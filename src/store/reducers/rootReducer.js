import authReducer from './authReducer'
import projectReducer from './projectReducer'
import todoReducer from './todoReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    todo: todoReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer
