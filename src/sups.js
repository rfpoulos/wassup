import React from 'react';
import ReactDOM from 'react-dom';
import * as moment from 'moment';
import { connect, Provider } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './reduxSetUp';

let getTimeStamp = (date) =>
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

let filteredSups = (list, userId) =>
    list.filter(element => element.userId === userId);

let SupsComponent = ({ listOfSups, inputText, dispatch, userId }) => 
    <div>
        { filteredSups(listOfSups, userId).map(({ body, timeStamp }) =>
            <div>{ body } { timeStamp.startOf().fromNow() }</div>) }
    <input value={ inputText } onChange={(event) => dispatch({
        type: 'SUP_INPUT',
        body: event.target.value
    })
    } />
    <button onClick={ () => dispatch({
        type: 'CREATE_SUP',
        userId: userId,
        timeStamp: new moment()
    })
    }> Add a sup
    </button>
    </div>;

let Sups = connect(
    mapStateToProps,
    mapDispatchToProps
)(SupsComponent);


export default Sups;