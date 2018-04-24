import React from 'react';

let AddSup = ( {userId} ) =>
    <div>
        <input type="text" name="newSup" value={userId}/>
        <button>Save Sup</button>
    </div>;

export default AddSup;