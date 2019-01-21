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
      favoritedList: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleUnfavorite = this.handleUnfavorite.bind(this);
  }

  handleOnChange(e) {
    // Resets search result when search box is empty
    if (this.state.searchValue === '') {
      this.setState({
        listOfResults: []
      })
    }
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSearch() {
    let valueToSearch = this.state.searchValue;
    fetch('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
      .then(res => res.json())
      .then(json => {
        // Filter search result by keywords
        let searchResult = json.filter(
          function (json) {
            let result = false;
            let arrWord = json.keywords.split(', ')

            // Loops through array of words and check if they include searched value
            for (let i = 0; i < arrWord.length; i++) {
              if (arrWord[i].toLowerCase().includes(valueToSearch.toLowerCase())) {
                result = true;
                break;
              }
            };
            return result;
          }
        );
        
        let favorites = this.state.favorites;

        // Set state for result and create list to display
        let results = searchResult;
        const listOfResults = results.map((result, index) => {

          // Check if it is currently in the favorite list
          // If so, it will set property 'favorite' to true
          let favorited = favorites.filter(favorite => {
            return favorite.title === result.title
          })
          if (favorited.length !== 0) {
            results[index].favorite = true;
          } else {
            results[index].favorite = false;
          }
          return (
            <Result key={index} favorite={() => this.handleFavorite(index)} description={result.body} title={result.title} favorited={result.favorite}/>
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
    
    // Check if there are any favorites
    if (this.state.favorites.length !== 0) {

      // Check if something has already been favorite using title to filter
      let favoriteExist = tempFavorite.filter(favorite => {
        return favorite.title === this.state.results[index].title
      })

      // add to favorite it hasn't been favorited before
      if (favoriteExist.length === 0) {
        tempFavorite.push(this.state.results[index]);
        this.setState({
          favorites: tempFavorite
        })
      }
    } else {
      tempFavorite.push(this.state.results[index]);
      this.setState({
        favorites: tempFavorite
      })
    }
    }


  handleUnfavorite(index) {
    let tempFavorite = this.state.favorites;
    let removeFavorite = this.state.favorites[index];
    tempFavorite = tempFavorite.filter(favorite => favorite !== removeFavorite);
    this.setState({
      favorites: tempFavorite
    })
  }

  render() {
    let favorites = this.state.favorites;
    const listOfFavorites = favorites.map((favorite, index) => {
      return (
        <Favorite key={index} unfavorite={() => this.handleUnfavorite(index)} description={favorite.body} title={favorite.title} />
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
            <Icon color="green" name="search" size="huge"/>
          </Button>
        </div>
        {this.state.searchValue === "" ? <ul></ul> : <ul style={{"listStyleType":"none"}}>{this.state.listOfResults}</ul>}

        {this.state.favorites.length === 0 ? '' : <div id="favorite" style={{ "margin": "auto", "backgroundColor": "#e7ffef", "fontStyle": "volkart" }}>
          <span style={{ "color": "green", "fontStyle": "volkart", "fontWeight" : "bold", "fontSize" : "30px" }}>Favorites</span>
          <ul style={{"listStyleType":"none"}}>{listOfFavorites}</ul></div>}
      </div>
    );
  }
}

export default App;
