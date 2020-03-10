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

  render() {
    return (
      <div>
        <h1>Favorite Employees</h1>;
      </div>
    );
  }
}

export default HomePage;
