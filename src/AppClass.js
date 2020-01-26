import React from "react";
import fitty from "fitty";
import html2canvas from "html2canvas";
import "./styles.css";

export default class AppWithClass extends React.Component {
  constructor() {
    super();
    this.elRef = React.createRef();
  }

  state = {
    inputVal: "",
    inputVal2: ""
  };

  onChangeVal = e => {
    this.setState({ inputVal: e.target.value });
  };

  onChangeVal2 = e => {
    this.setState({ inputVal2: e.target.value });
  };

  printImage = async () => {
    const domElement = document.getElementById("sig");
    const abc = await html2canvas(domElement);
    console.log(abc.toDataURL("image/png"), "$$$");
  };

  render() {
    const { inputVal, inputVal2 } = this.state;

    fitty(".signature", {
      multiLine: false,
      minSize: 10,
      maxSize: 52
    });

    return (
      <div className="App">
        <h2>Signature</h2>
        <input
          type="text"
          value={inputVal}
          onChange={e => this.onChangeVal(e)}
          placeholder="First name"
        />

        <input
          type="text"
          value={inputVal2}
          onChange={e => this.onChangeVal2(e)}
          placeholder="Last name"
        />

        <button onClick={this.printImage}>Print Signature</button>
        <div style={{ height: "50px" }} />
        <div className="main">
          <div className="contain">
            <div className="h2">Signature</div>
            <div className="block">
              <div className="space">
                <div className="signature" id="sig">
                  {inputVal} {inputVal2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
