import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      employees: [],
      favorites: []
    };
  }

  componentDidMount() {}

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Favorite Employees</h1>

        <form handleSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default HomePage;
