import React, {useState} from 'react';
import  './Laps.css';

function Laps(){
    const [lap, setLap] = useState(0);

     return(
         <div className="Laps">
             <h2>Laps: {lap}</h2>
             <button onClick = {() => setLap(lap + 1)} className="btn btn-success">Lap</button>
             <button onClick = {() => setLap(0)} className="btn btn-warning">Reset Laps</button>
         </div>
     )

}

export default Laps;