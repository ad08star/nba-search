import React, { Component } from "react";
import "./App.css";
import HeaderNavbar from "./components/TopNavbar";

const players = [
  { nickname: "King James", name: "LeBron James", id: 2544 },
  { nickname: "Splash brother", name: "Klay Thompson", id: 202691 },
  { nickname: "Splash brother", name: "Steph Curry", id: 201939 },
  { nickname: "CP3 ", name: "Chris Paul", id: 101108 },
  { nickname: "Boogie", name: "Cousins", id: 202326 },
  { nickname: "Greek Freak", name: "Antetokounmpo", id: 203507 },
  { nickname: "Beastbrook ", name: "westbrook", id: 201566 },
  { nickname: "The Brow", name: "Davis", id: 203076 },
  { nickname: "KD", name: "Kevin Durant", id: 201142 },
  { nickname: "Fresh Prince", name: "Ben Simmons", id: 1627732 }
];

function searchPlayer(searchName) {
  return player => {
    return (
      player.nickname.toLowerCase().includes(searchName.toLowerCase()) ||
      !searchName
    );
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: players,
      name: "",
      playerDetails: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchdetails = this.fetchdetails.bind(this);
  }

  handleSearch = event => {
    event.preventDefault();
    // this if is used to remove the value of last player selected if input text doesnt match to any player
    // or search box is empty
    if (
      document.getElementById("playerList").childElementCount === 0 ||
      event.target.value.length === 0
    ) {
      this.setState({
        playerDetails: ""
      });
    }
    this.setState({
      name: event.target.value
    });
  };

  //this function can also be used to call some api to fetch player details
  fetchdetails = (event, name) => {
    event.preventDefault();
    console.log("name is :", name);
    this.setState({
      playerDetails: name
    });
  };

  render() {
    return (
      <div className="App">
        <HeaderNavbar pagetitle={"NBA PLAYER SEARCH"} />
        <form style={{ paddingTop: "15px" }}>
          SEARCH:{" "}
          <input
            type="text"
            placeholder="Enter Nickname"
            onChange={this.handleSearch}
          />
        </form>
        <div id="playerList">
          {this.state.players
            .filter(searchPlayer(this.state.name))
            .map(player => (
              <div key={player.id}>
                <h3>{player.nickname}</h3>
                {player.name} <br />
                <button onClick={e => this.fetchdetails(e, player.name)}>
                  select
                </button>
                <hr />
              </div>
            ))}
        </div>

        <div
          style={
            this.state.playerDetails === ""
              ? { display: "none" }
              : { display: "block", paddingTop: "1vw" }
          }
        >
          <h1> You selected : {this.state.playerDetails}</h1>
        </div>
      </div>
    );
  }
}

export default App;
