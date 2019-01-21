import React, { Component } from 'react';
//import { Input } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchName: "",
      results: [],
      favorites: [],
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleOnChange() {

  }

  handleSearch() {

  }

  handleFavorite() {

  }

  render() {
    return (
      <div className="App">
        <div className="searchBar">
        <TextField
          id="outlined-bare"
          margin="normal"
          variant="outlined"
        />
        </div>
      </div>
    );
  }
}

export default App;
