import React from "react";
import axios from "axios";
import EmployeeFocus from "../components/EmployeeFocus";
import Favorites from "../components/Favorites";
import styles from "./HomePage.module.css";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      employees: [],
      favorites: [],
      focusedEmployee: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.setFocus = this.setFocus.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/employees")
      .then(employees => {
        this.setState({ employees: employees.data });
      })
      .catch(err => {
        console.log(err, "there was an error fetching employees");
      });

    axios
      .get("http://localhost:8080/favorites")
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

  setFocus(employee) {
    this.setState({ focusedEmployee: employee });
    this.setState({ searchValue: "" });
  }

  addFavorite(employee) {
    let newFavorites = this.state.favorites.slice(0);
    newFavorites.push(employee);
    axios
      .post("http://localhost:8080/favorites", { data: employee })
      .then(res => {
        console.log(res.status);
      })
      .catch(err => console.log(err, "there was an error adding a favorite"));
    this.setState({ favorites: newFavorites });
  }

  removeFavorite(id) {
    let newFavorites = this.state.favorites.filter(employee => {
      return employee._id !== id;
    });
    axios
      .put("http://favorites/remove", { _id: _id })
      .then(res => {
        console.log(res.status);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ favorites: newFavorites });

    // axios.put('http://localhost:8080) to remove from favorites db
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
                  <li
                    key={employee._id}
                    onClick={() => {
                      this.setFocus(employee);
                    }}
                  >
                    {employee.first_name} {employee.last_name}
                  </li>
                );
              }
            })}
          </ul>
        )}

        {this.state.focusedEmployee && (
          <EmployeeFocus
            employee={this.state.focusedEmployee}
            addFavorite={this.addFavorite}
          />
        )}

        <Favorites
          id={styles.favorites}
          handleRemove={this.removeFavorite}
          favorites={this.state.favorites}
        />
      </div>
    );
  }
}

export default HomePage;
