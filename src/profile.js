import React from 'react';
import Sups from './sups.js';
import AddSup from './add-sup';


let Profile = ({ match }) => 
    <div>
        <h1>This is { match.params.userId }'s Page!</h1>
        <Sups userId={ match.params.userId }/>
    </div>;

export default Profile;