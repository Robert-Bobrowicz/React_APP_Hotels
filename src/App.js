import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [
        {
          id: 1,
          name: "Robert's Apartments Piwna 12",
          city: "Old Town, Warsaw",
          rating: 9.2,
          description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          image: ""
        },
        {
          id: 2,
          name: "Robert's Apartments Old Town",
          city: "Old Town, Warsaw",
          rating: 9.8,
          description: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          image: ""
        },
        {
          id: 3,
          name: "Robert's Apartments National Stadium",
          city: "Praga, Warsaw",
          rating: 9.4,
          description: "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
          image: ""
        }
      ]
    }
  }

  searchHandler() {
    console.log('szukam z poziomu App');
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={() => this.searchHandler()} />
        <Menu />
        <Hotels hotels={this.state.hotels} />
      </div>
    );
  }
}

export default App;
