import { Component } from "react";
import "./card-list.component.css";
import Card from "../card-container/card.component";

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
