import React, {useState} from 'react';
import Time from '../Time/Time';
import  './Jumbo.css';

function Jumbo(){
    

     return(
        <div className="jumbotron">
            <h1 className="display-4">Exercise Tracker</h1>
            <p className="lead">Use the "Laps" and "Reps" buttons to increase the counter.</p>
            <Time />
            <hr className="my-4"/>           
        </div>
     )

}

export default Jumbo; 