import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedUser } from "./app/redux/userActions";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import MyComponent from "./Dashboard";
function UserData() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json().then((info) => dispatch(selectedUser(info)))
        );
      } catch (e) {
      } finally {
        setIsLoading(true);
      }
    })();
  }, [isLoading, dispatch, id]);
  const singleUserApi = useSelector((state) => state.individualUser.user);
  return (
    <>
      {!isLoading ? (
        <h1>Loading... Please Wait</h1>
      ) : (
        <div>
          {singleUserApi ? (
            <div className="right-side">
              <h1>Wah!! {singleUserApi.name}</h1>
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
      )}
      <Outlet />
      <MyComponent />
    </>
  );
}

export default UserData;
