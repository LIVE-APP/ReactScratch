import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    console.log("Started reseting");
    const reset = this.state.counters.map(res => {
      res.value = 0;
      return res;
    });
    this.setState({ counters: reset });
    console.log("Completed reseting");
  };
  handleDelete = counterId => {
    //console.log("event Handler Called : ", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn- sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete}
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
