import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Counters from "./Components/Counters";
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    console.log(counters);
    const index = counters.indexOf(counters);
    console.log(index);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log("Increment Completed");
  };
  handleReset = () => {
    console.log("Started reseting");
    const reset = this.state.counters.map(res => {
      res.value = 0;
      return res;
    });
    this.setState({ counters: reset });
    console.log(this.state.counters);
  };
  handleDelete = counterId => {
    //console.log("event Handler Called : ", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        <NavBar />
        <Counters
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
