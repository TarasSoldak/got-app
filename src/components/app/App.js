import React from "react";
import "./app.css";
import { Route } from "react-router-dom";
import Characters from "../pages/Characters";
import Books from "../pages/Books";
import Houses from "../pages/Houses";
import Header from "../header/Header";
import RandomChar from "../randomChar/RandomChar";
import BookItem from "../pages/BookItem";

class App extends React.Component {
  state = {
    toggleRandomChar: true,
  };
  onToggle = () => {
    this.setState((state) => ({
      toggleRandomChar: !state.toggleRandomChar,
    }));
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          {this.state.toggleRandomChar ? <RandomChar /> : null}
          <button onClick={this.onToggle}> Toggle random char</button>
          <div className="app-content-item">
            <Route path="/characters" component={Characters} />
            <Route path="/books" exact component={Books} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BookItem bookId={id} />;
              }}
            />
            <Route path="/houses" component={Houses} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
