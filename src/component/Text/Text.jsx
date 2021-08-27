import React, { useState } from "react";
const Text = (props) => {
  const [text, setText] = useState("");
  const [space, setSpace] = useState("");

  const ChangeHandler = (event) => {
    setText(event.target.value);
  };

  const CapsHandler = () => {
    let capText = text.toUpperCase();
    setText(capText);
    props.showalt("Coverted to UpperCase", "success");
  };

  const LowerHandler = () => {
    let lowTxt = text.toLowerCase();
    setText(lowTxt);
    props.showalt("Coverted to LowerCase", "success");
  };
  const spaceHandler = () => {
    let spa = text.split(" ").length - 1;
    setSpace(spa);
    props.showalt("Space Counted", "success");
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          placeholder="Enter here"
          onChange={ChangeHandler}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary mx-1 my-1"
        onClick={CapsHandler}
      >
        Convert to UpperCase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1 my-1"
        onClick={LowerHandler}
      >
        Convert to LowerCase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1 my-1"
        onClick={spaceHandler}
      >
        Check no of Spaces
      </button>
      <div className="container my-2">
        <h2>Text Summary</h2>
        <p>
          {text.length} no of character
          {
            text.split(" ").filter((el) => {
              return el.length !== 0;
            }).length
          }
          no of words, no of sentense: {text.split(".").length - 1}
        </p>
        <h2>Preview</h2>
        <p>no of Spaces are: {space}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Text;
