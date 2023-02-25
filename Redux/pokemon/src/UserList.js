import React from "react";
import logo from "./pokeapi_256.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState(10);
  const [apiData, setApiData] = useState([]);

  const handleUser = async (url, name) => {
    console.log(url);
    await fetch(url).then((res) =>
      res
        .json()
        .then((info) => setUser(info))
        .catch((error) => error)
    );
    console.log(user);
  };
  const UserData = () => {};
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`)
        .then((res) => {
          res.json().then((info) => {
            setApiData(info);
          });
        })
        .catch((error) => {
          console.log("Something went wrong " + error);
        });
    };
    console.log(limit);
    fetchData();
  }, [limit]);
  return (
    <div className="left-side">
      <div className="images">
        <img src={logo} alt="" />
      </div>
      <ul className="user-list">
        {apiData.results?.map((userName, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleUser(userName.url, userName.name);
                navigate(`${userName.name}`);
              }}
            >
              {userName.name}
            </li>
          );
        })}
      </ul>
      <button onClick={() => setLimit(limit + 10)}>Load More Users</button>
    </div>
  );
}

export const handleUser = (url, name) => {};

export default UserList;
