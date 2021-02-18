import React, { Component } from "react";
import gotApi from "../api/gotApi";
import Preloader from "../preloader/Preloader";
import "./randomChar.css";

class RandomChar extends Component {
  gotApi = new gotApi();
  state = {
    char: {},
    loader: true,
    error: false,
  };
  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, 2500);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  onError = () => {
    this.setState({
      loader: false,
      error: true,
    });
  };
  onCharloaded = (char) => {
    this.setState({ char, loader: false });
  };
  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    this.gotApi.getCharacter(id).then(this.onCharloaded).catch(this.onError);
  };
  render() {
    const { loader, char, error } = this.state;
    const errorMessage = error && "Some goes wrong";
    const spinner = loader && <Preloader />;
    const content = !(loader || error) && <View char={char} />;
    return (
      <div className="charBlock">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({ char: { name, gender, born, died, culture } }) => {
  return (
    <>
      <h4>
        Random Character : <span>{name}</span>
      </h4>
      <ul>
        <li>
          <span>
            <b>Gender:</b>
          </span>
          <span>{gender}</span>
        </li>
        <li>
          <span>
            <b>Born:</b>
          </span>
          <span>{born}</span>
        </li>
        <li>
          <span>
            <b>Died:</b>
          </span>
          <span>{died}</span>
        </li>
        <li>
          <span>
            <b>Culture:</b>
          </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};

export default RandomChar;
