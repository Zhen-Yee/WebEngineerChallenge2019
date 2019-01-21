import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
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
          /> 
          <Button icon onClick={this.handleSearch}>
            <Icon color="green" name="search"/>
          </Button>
        </div>
        <ul>
          <li>check</li>
          <li>check</li>
          <li>check</li>
          <li>check</li>
          <li>cked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;Grid Table 5 Dark&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot; Name=&quot;Grid Table 6 Colorful&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot; Name=&</li>
        </ul>
        {/* <table>
          <tr>
            <td>CHECK</td>
            <td>cked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;Grid Table 5 Dark&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot; Name=&quot;Grid Table 6 Colorful&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot; Name=&quot;Grid Table 7 Colorful&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;46&quot;\n   Name=&quot;Grid Table 1 Light Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;47&quot; Name=&quot;Grid Table 2 Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;48&quot; Name=&quot;Grid Table 3 Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;49&quot; Name=&quot;Grid Table 4 Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;Grid Table 5 Dark Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot;\n   Name=&quot;Grid Table 6 Colorful Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot;\n   Name=&quot;Grid Table 7 Colorful Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;46&quot;\n   Name=&quot;Grid Table 1 Light Accent 2&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;47&quot; Name=&quot;Grid Table 2 Accent 2&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;48&quot; Name=&quot;Grid Table 3 Accent 2&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;49&quot; Name=&quot;Grid Table 4 Accent 2&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;Grid Table 5 Dark Accent 2&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot;\n   Name=&quot;Grid Table 6 Colorful Accent 2&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot;\n   Name=&quot;Grid Table 7 Colorful Accent 2&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;46&quot;\n   Name=&quot;Grid Table 1 Light Accent 3&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;47&quot; Name=&quot;Grid Table 2 Accent 3&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;48&quot; Name=&quot;Grid Table 3 Accent 3&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;49&quot; Name=&quot;Grid Table 4 Accent 3&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;Grid Table 5 Dark Accent 3&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot;\n   Name=&quot;Grid Table 6 Colorful Accent 3&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot;\n   Name=&quot;Grid Table 7 Colorful Accent 3&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;46&quot;\n   Name=&quot;Grid Table 1 Light Accent 4&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;47&quot; Name=&quot;Grid Table 2 Accent 4&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;48&quot; Name=&quot;Grid Table 3 Accent 4&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;49&quot; Name=&quot;Grid Table 4 Accent 4&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;Grid Table 5 Dark Accent 4&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot;\n   Name=&quot;Grid Table 6 Colorful Accent 4&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot;\n   Name=&quot;Grid Table 7 Colorful Accent 4&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;46&quot;\n   Name=&quot;Grid Table 1 Light Accent 5&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;47&quot; Name=&quot;Grid Table 2 Accent 5&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;48&quot; Name=&quot;Grid Table 3 Accent 5&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;49&quot; Name=&quot;Grid Table 4 Accent 5&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;Grid Table 5 Dark Accent 5&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot;\n   Name=&quot;Grid Table 6 Colorful Accent 5&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot;\n   Name=&quot;Grid Table 7 Colorful Accent 5&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;46&quot;\n   Name=&quot;Grid Table 1 Light Accent 6&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;47&quot; Name=&quot;Grid Table 2 Accent 6&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;48&quot; Name=&quot;Grid Table 3 Accent 6&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;49&quot; Name=&quot;Grid Table 4 Accent 6&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;Grid Table 5 Dark Accent 6&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot;\n   Name=&quot;Grid Table 6 Colorful Accent 6&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot;\n   Name=&quot;Grid Table 7 Colorful Accent 6&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;46&quot; Name=&quot;List Table 1 Light&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;47&quot; Name=&quot;List Table 2&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;48&quot; Name=&quot;List Table 3&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;49&quot; Name=&quot;List Table 4&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;List Table 5 Dark&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;51&quot; Name=&quot;List Table 6 Colorful&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;52&quot; Name=&quot;List Table 7 Colorful&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;46&quot;\n   Name=&quot;List Table 1 Light Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;47&quot; Name=&quot;List Table 2 Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;48&quot; Name=&quot;List Table 3 Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;49&quot; Name=&quot;List Table 4 Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; Priority=&quot;50&quot; Name=&quot;List Table 5 Dark Accent 1&quot;/&gt;\n  &lt;w:LsdException Locked=&quot;false&quot; P</td>
          </tr>
          <tr>
            <td>check</td>
            <td>check</td>
          </tr>
        </table> */}
      </div>
    );
  }
}

export default App;
