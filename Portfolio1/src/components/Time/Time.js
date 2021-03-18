import React, {useState, useEffect} from 'react';
import moment from 'moment';

function Time(){

    const [currentTime, setTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
    var timer = () => setTime(moment().format('MMMM Do YYYY, h:mm:ss a'));

    useEffect(
       () => {

            const id = setInterval(timer, 1000);
            return () => clearInterval(id);
       }, 
       [currentTime]
    );

    return <div>{currentTime}</div>;
};

export default Time; 