import React from "react";

function UserData({ singleUserApi }) {
  return (
    <div>
      <h1>Hello</h1>
      {singleUserApi ? (
        <div className="right-side">
          <h1>{singleUserApi.name}</h1>
          <div className="image-js">
            <img src={singleUserApi.sprites.back_default} alt="" />
            <b>Height:</b>
            {singleUserApi.height}
            <br />
            <b>weight:</b>
            {singleUserApi.weight}
            <br />
            <b>ability:</b>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UserData;
