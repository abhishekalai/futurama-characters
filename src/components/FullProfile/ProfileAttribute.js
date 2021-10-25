import { Component } from "react";
import "./ProfileAttribute.css";

class ProfileAttribute extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }

  render() {
    return (
      <div className="profile-attrib">
        <div className="attrib-value">{this.state.value}</div>
        <div className="attrib-name">
          {this.state.name}
        </div>
      </div>
    );
  }
}

export default ProfileAttribute;
