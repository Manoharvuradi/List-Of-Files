import React from "react";

function Screen(props) {
  const style = {
    // backgroundColor: "red",
    textAlign: "center",
    padding: "20px",
    height: "20px",
    fontSize: "24px",
    fontWeight: "bold ",
  };
  return (
    <div className="screen">
      <div className="display" style={style}>
        {props.data}
      </div>
    </div>
  );
}

export default Screen;
