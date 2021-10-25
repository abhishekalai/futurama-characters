import { Component } from 'react';
import './module.css'

class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <span>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </span>
      </div>
    );
  }
}

export default Loader;