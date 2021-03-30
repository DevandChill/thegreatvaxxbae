import "./styles.css";
import "./Hope.css";

import Godson from "./godson.js";
import Gils from "./Gils.js";

export default function App() {
  return (
    <div className="App">
      <h1>The Great VaxxBae</h1>
      <h2>Find your Vaccinated Bae</h2>
      <div className="Card">
        <div className="Valerie">
          <h1>First, a/s/l</h1>
        </div>
        <Gils />
        <div className="Andre">
          <h3>Please answer ONE personal health question: is you vaxxed?</h3>
          <button style={{ backgroundColor: "lightblue" }} type="button">
            I is
          </button>
          <button type="button">I ain't</button>
          <div className="CameronGodsondiv">
            <Godson />
          </div>
        </div>
      </div>
    </div>
  );
}
