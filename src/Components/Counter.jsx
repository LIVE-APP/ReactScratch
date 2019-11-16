import React, { Component } from "react";

class Counter extends Component {
  // Inorder to use Constructor method we can use Arrow functions like
  //below function handleIncrement();

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  state = {
    count: this.props.value,
    imageURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = () => {
    console.log();
    console.log("Increment Clicked", this.state.count);
    // React cant identify the button click as the state is predefined
    // so we need to upate te state in order to identify the button changes.
    this.setState({ count: this.state.count + 1 });
  };
  // dohandleIncrement = () =>  {
  //   this.handleIncrement({ id: 1 });
  // };     ..........................METHOD CAN BE WRITTEN AS BELOW ONCLICK
  render() {
    //console.log("props", this.props);

    return (
      <div>
        {/* <img src={this.state.imageURL} alt="" /> */}
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn- sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className={"btn btn-danger btn- sm m-2"}
        >
          Delete
        </button>
        <div>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTags()}
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
