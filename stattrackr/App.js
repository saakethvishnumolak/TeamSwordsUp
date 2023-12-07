
import React,{Component} from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerName: null,
      playerStats: {}
    }
  }

  handleEnter = (e) => {
    e.preventDefault();
    this.getPlayerID()
    console.log(this.state.playerName)
  }

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if(replace.length > 0) {
      this.setState({playerName: replace})
    } else {
      alert("Please type a proper player name!")
    }
  }

  getPlayerID = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      //console.log(res.data.data[0])

      if(res.data.data[0] === undefined) {
        alert("This player is injured or hasn't played yet or is not a player")
      } else if(res.data.data.length > 1) {
        alert("Please specify the name more")
      } else {
        await this.getPlayerStats(res.data.data[0].id)
      }

    }).catch(err => {
      console.log(err)
    })
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      this.setState({playerStats: res.data.data[0]})
    }).catch(err => {
      console.log(err)
    })
  }


  render() {
  return (
    <div className="App">
      <form onSubmit= {this.handleEnter}>
        <label>
          Enter a Player Name
          <input type="text" value={this.state.value} onChange= {this.handleChange} placeholder= "Enter player name"/>
        </label>
        <input type= "submit" value= "Enter"/>
      </form>

      <div id='content'>
        <div>
          <br />
          Games Played: {this.state.playerStats["games_played"]}
          <br />
          Points Scored: {this.state.playerStats["pts"]}
          <br />
          Assists: {this.state.playerStats["ast"]}
          <br />
          Rebounds: {this.state.playerStats["reb"]}
          <br />
          Blocks: {this.state.playerStats["blk"]}
          <br />
          Turnovers: {this.state.playerStats["turnover"]}
        </div>
        

      </div>
    </div>
  );
}
}

//module.exports = handleEnter; //manually added by Balaji
export default App;
