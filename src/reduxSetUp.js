import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

const initialState = {
    listOfSups: [],
    inputText: ''
}

let createSupReducer = (state, action) => {
    let newSup = {
        userId: action.userId,
        id: 1,
        title: 'Dummy title',
        body: state.inputText,
        timeStamp: action.timeStamp
    }
    let listOfSups = state.listOfSups.concat([newSup]);
    return {...state, listOfSups, inputText: '' };
}

let supInput = (state, action) => 
    ({...state, inputText: action.body});    

let reducerHandlers = {
    'CREATE_SUP': createSupReducer,
    'SUP_INPUT': supInput
}

let fallback = (state, action) => state;

export let reducer = (oldState = initialState, action) => {
    let babyReducer = reducerHandlers[action.type] || fallback;
    return babyReducer(oldState, action);
};

export let store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION()
);

export let mapStateToProps = (state) => {
    return { listOfSups: state.listOfSups,
                inputText: state.inputText };
}

export let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

