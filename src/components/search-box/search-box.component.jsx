import { Component } from "react";
import "./search-box-styles.css"; //this still applies on the entire website

class SearchBox extends Component {
  constructor() {
    super();
  }

  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
