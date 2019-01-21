import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import TextField from '@material-ui/core/TextField';
import './App.css';
import { Result } from './Result'
import { Favorite } from './Favorite'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
      listOfResults: [],
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
      let results = searchResult;
      const listOfResults = results.map((result, index) => {
      return (
        <Result key={index} favorite={() => this.handleFavorite(index)} description={result.body} title={result.title}/>
      )
      })
      this.setState({
        results: searchResult,
        listOfResults: listOfResults
      })
    })
  }

  handleFavorite(index) {
    let tempFavorite = this.state.favorites;
    tempFavorite.push(this.state.results[index]);
    this.setState({
      favorite: tempFavorite
    })
  }

  handleUnfavorite(index) {

  }

  render() {
    let favorites = this.state.favorites;
    const listOfFavorites = favorites.map((favorite, index) => {
      return (
        <Favorite key={index} unfavorite={() => this.handleUnfavorite(index)} description={favorite.body} title={favorite.title}/>
      )
    })

    return (
      <div className="App">
        <div className="searchBar">
          <TextField
            id="search"
            margin="normal"
            variant="outlined"
            onChange={this.handleOnChange}
          /> 
          <Button icon onClick={this.handleSearch}>
            <Icon color="green" name="search"/>
          </Button>
        </div>
        <ul>
         {this.state.listOfResults}
        </ul>

        {this.state.favorites.length === 0 ? '' : <div id="favorite" style={{"margin":"auto","color":"green","fontStyle":"volkart"}}>
        <ul>{listOfFavorites}</ul></div>}
      </div>
    );
  }
}

export default App;
