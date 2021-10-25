import { Component, Fragment } from "react";
import Loader from "./components/Loader";
import CharacterCard from "./components/CharacterCard";
import "./App.css";
import data from "./characters.json";
import ReactModal from "react-modal";
import { CustomEventEmitter, CustomEventTypes } from "./events";
import FullProfile from "./components/FullProfile";

ReactModal.setAppElement("#root");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      showModal: false,
      selectedCharacter: undefined,
    };
  }

  handleCloseModal() {
    this.setState({ ...this.state, showModal: false });
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      characters: data,
    });

    // Subscribing to Click event on a Character Card
    CustomEventEmitter.subscribe(
      CustomEventTypes.CharacterCardClicked,
      (event) => {
        this.setState({
          ...this.state,
          showModal: true,
          selectedCharacter: event,
        });
      }
    );

    // Subscribing to the Close Button Click event on a Character Card
    CustomEventEmitter.subscribe(CustomEventTypes.CharacterCardClosed, () => {
      this.setState({
        ...this.state,
        showModal: false,
      });
    });
  }

  render() {
    if (this.state.characters.length <= 0) {
      return <Loader />;
    } else if (this.state.selectedCharacter) {
      return (
        <Fragment>
          <div className="app-title">
            <h1>Futurama Characters</h1>
          </div>
          <div className="character-card-container">
            {this.state.characters.map((char, i) => (
              <Fragment key={char.id}>
                <CharacterCard character={char} />
              </Fragment>
            ))}
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="{Object.values(this.state.selectedCharacter.name).join(' ')} - Full Profile"
              style={{
                content: {
                  backgroundColor: "#454545",
                  borderRadius: "2rem",
                  height: "80%",
                  paddingTop: "0",
                  paddingRight: "0",
                  paddingLeft: "0",
                },
              }}
            >
              <FullProfile character={this.state.selectedCharacter} />
            </ReactModal>
          </div>
        </Fragment>
      );
    } else
      return (
        <Fragment>
          <div className="app-title">
            <h1>Futurama Characters</h1>
          </div>
          <div className="character-card-container">
            {this.state.characters.map((char, i) => (
              <Fragment key={char.id}>
                <CharacterCard character={char} />
              </Fragment>
            ))}
          </div>
        </Fragment>
      );
  }
}

export default App;
