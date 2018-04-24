import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './reduxSetUp';

let reduxAllSups = ({ listOfSups, dispatch, userId }) => 
    <div>
        {
            listOfSups.map(({ userId, body }) =>
            <div>
                <div>{userId}</div>
                <div>{body}</div>
                {/* <div>{timeStamp.startOf().fromNow()}</div> */}
            </div>)
        }
    </div>
;

let AllSups = connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxAllSups);

export default AllSups;