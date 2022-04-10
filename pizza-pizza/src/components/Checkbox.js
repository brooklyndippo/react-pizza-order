import {useState} from 'react';
import react from 'react';

function Checkbox(props) {

    const { ingredient, checkIt } = props



    return  (
        <div>
            <label>
                <input 
                type="checkbox"
                checked={ingredient}
                onChange={e => checkIt(e.target.value)}
                />
            {ingredient}
            </label>
        </div>
    )

}

export default Checkbox;