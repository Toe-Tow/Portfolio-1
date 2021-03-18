import React, {Component} from 'react';
import './Reps.css';

class Reps extends Component {
       constructor(props) {
           super(props);
           this.state = {
               reps: 0
           };
       };
  
     

render() {

    return(
        <div className="Reps">
            <h2>Repetitions: {this.state.reps}</h2>
            <button onClick = {() => this.setState({reps: this.state.reps + 1})} className="btn btn-success">Reps</button>
            <button onClick = {() => this.setState({reps: 0})} className="btn btn-warning">Reset Counter</button>
        </div>
    );
}
}

export default Reps;