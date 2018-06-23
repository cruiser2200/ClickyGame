import React, { Component } from 'react';
// import logo from './logo.svg';
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import bird from "./bird.json";
import './App.css';

class App extends Component {

  // Initial State:

  state = {
    bird,
    clickedBird: [],
    score: 0
  };

// Click Events:
  imageClick = event => {

    // clicking card changes state, removes image from the array:
    const currentBird = event.target.alt;
    const BirdAlreadyClicked = 
    this.state.clickedBird.indexOf(currentBird) > -1;

    // start new game if image selected twice:
    if (BirdAlreadyClicked) {
      this.setState({
        bird: this.state.bird.sort(function(a, b) {
          return 0.5 - Math.random();
        
        }),
        clickedBird: [],
        score: 0
      });
        alert("You killed 1 bird with 2 stones.  Would you like to try again?");

    // continue game if unselected image clicked:   
    } else {
      this.setState(
        {
          bird: this.state.bird.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedBird: this.state.clickedBird.concat(
            currentBird
          ),
          score: this.state.score + 1
        },

      // Once the array is empty, success message and reset game:
      () => {
        if (this.state.score === 12) {
          alert("Perfect Performance!");
          this.setState({
            bird: this.state.bird.sort(function(a, b) {
              return 0.5 - Math.random();
            })
          });
        };
      });
    };
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} />

        <Jumbotron />

        <div className="wrapper">
          {this.state.bird.map(bird => (
            <FriendCard
              imageClick={this.imageClick}
              id={bird.id}
              key={bird.id}
              image={bird.image}
             />   
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
