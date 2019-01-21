import React, { Component } from 'react';
//import { Input } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      results: [],
      favorites: [],
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSearch() {
    let valueToSearch = this.state.searchValue;
    console.log(valueToSearch)
    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
    .then(res => res.json())
    .then(json => {
        let searchResult = json.filter(
        function(json) {
          let result = false;
          let arrWord = json.keywords.split(', ')
          for (let i = 0; i < arrWord.length; i++) {
            if (arrWord[i].toLowerCase().includes(valueToSearch.toLowerCase())) {
              result = true;
              break;
            }
          };
          return result;
        }
      );
        this.setState({
          results: searchResult
        })
    })
  }

  handleFavorite() {
   
  }

  render() {
    return (
      <div className="App">
        <div className="searchBar">
          <TextField
            id="search"
            margin="normal"
            variant="outlined"
            onChange={this.handleOnChange}
          /> <button onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default App;
