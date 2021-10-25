import { Component, Fragment } from "react";
import { CustomEventEmitter, CustomEventTypes } from "../../events";
import "./module.css";
import ProfileAttribute from "./ProfileAttribute";

class FullProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.character };
  }

  render() {
    let homePlanet = undefined;
    if (this.state.homePlanet) {
      homePlanet = (
        <ProfileAttribute
          name={"Home Planet"}
          value={this.state.homePlanet}
        ></ProfileAttribute>
      );
    }

    const sayings = this.state.sayings.map((str, i) => <li key={i}>{str}</li>);
    return (
      <Fragment>
        <button
          className="btn-full-profile-close"
          onClick={() =>
            CustomEventEmitter.dispatch(
              CustomEventTypes.CharacterCardClosed,
              {}
            )
          }
        >
          &times;
        </button>
        <div className="full-profile-content">
          <div
            className="profile-picture"
            style={{
              backgroundImage: `url(${this.state.images.main})`,
            }}
          ></div>
          <div className="profile-content">
            <h1 className="mb-0">{Object.values(this.state.name).join(" ")}</h1>
            <h3 className="age-gender">
              {this.state.age}, {this.state.gender}
            </h3>
            <div className="profile-attributes-container">
              <ProfileAttribute
                name={"Species"}
                value={this.state.species}
              ></ProfileAttribute>
              {homePlanet}
              <ProfileAttribute
                name={"Occupation"}
                value={this.state.occupation}
              ></ProfileAttribute>
            </div>
            <div className="sayings-container">
              <h3>Popular Sayings</h3>
              <ul className="sayings-list">{sayings}</ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FullProfile;
