import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    return (
      <div>
        {this.props}
        <button
          //  onClick={this.props.onReset}
          href="#"
          className="btn btn-primary btn- sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            key={counter.id}
            value={counter.value}
            selected={true}
            id={counter.id}
          >
            {
              //children Concept in React
            }
            <h4>Counter List:: #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
