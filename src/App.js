import React, {Component} from "react";
import GuildCard from "./components/GuildCard/index";
import guilds from "./guilds.json";
import Nav from "./components/Nav/Nav"

class App extends Component {
  // Setting the initial state of things
  state = {
    guilds,
    clicked: [],
    score: 0,
    highscore: 0
  };

  // sort the guilds function
  sortGuilds = () => {
    this.state.guilds.sort( (a,b) => {return 0.5 - Math.random()});
  };

  // set the high score
  setHighScore = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({
        highscore: this.state.score
      });
    }
  };

  // reset function to reset things when the game is lost
  resetStuff = () => {
    this.setHighScore();
    this.setState({
      clicked: [],
      score: 0
    })
  };

  // guild click event
  guildClick = event => {
    // grab the id of the clicked guild
    const currentChar = event.target.id;
    // check to see if that guild has been clicked or not, are they in the state array or not?
    const isClicked = this.state.clicked.indexOf(currentChar) > -1;

    // if that guild is clicked, end the game, reset the score
    if (isClicked) {
      this.sortGuilds();
      this.resetStuff();
    } else {
      // we have to update the score, sort the cards
      this.sortGuilds();
      this.setState({
        // Lance showed me this trick with the concat
        clicked: this.state.clicked.concat(currentChar),
        // increase the score
        score: this.state.score + 1
      },
      // if user gets to all 12, shuffle the cards and reset the game
      () => {
        if (this.state.score === 12) {
          this.sortGuilds();
          this.resetStuff();
        }
      });
    }
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <div className='App'>
          <Nav 
          highscore={this.state.highscore}
          score={this.state.score}
          />
         
            <div className='container'>
              <div className='row'>
                {this.state.guilds.map(guild => (
                  <GuildCard
                    guildClick={this.guildClick}
                    id={guild.id}
                    key={guild.id}
                    name={guild.name}
                    image={guild.image}
                  />
                ))}
              </div>
            </div>
        </div>
    );
  }
}

export default App;
