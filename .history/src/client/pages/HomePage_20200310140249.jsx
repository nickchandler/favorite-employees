import React from "react";
import axios from "axios";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      employees: [],
      favorites: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/employees")
      .then(employees => {
        this.setState({ employees: employees.data });
      })
      .catch(err => {
        console.log(err, "there was an error fetching employees");
      });

    axios
      .get("/favorites")
      .then(favorites => {
        this.setState({ favorites: favorites.data });
      })
      .catch(err => {
        console.log(err, "there was an error fetching favorite employees");
      });

    //need to implement favorites
  }

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

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>

        {this.state.searchValue && (
          <ul>
            {this.state.employees.map(employee => {
              let name = employee.first_name + employee.last_name;
              if (name.includes(this.state.searchValue)) {
                return (
                  <li>
                    {employee.first_name} {employee.last_name}
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default HomePage;
