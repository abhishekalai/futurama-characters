import { Component } from "react";
import "./module.css";
import { BiUserCircle } from "react-icons/bi";
import { CustomEventEmitter, CustomEventTypes } from "../../events";

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.character };
  }
  render() {
    return (
      <div className="character-card">
        <div
          className="character-picture-area"
          style={{
            backgroundImage: `url(${this.state.images.main})`,
          }}
        ></div>
        <div className="character-content" onClick={() => CustomEventEmitter.dispatch(CustomEventTypes.CharacterCardClicked, this.state)}>
          <h3 className="character-name">
            {Object.values(this.state.name).join(" ")}
          </h3>
          <div className="character-age-gender">
            <BiUserCircle className="character-icon" size="24" />
            <span>
              Age: {this.state.age},{" "}
              {this.state.gender || "Gender Not Available"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
