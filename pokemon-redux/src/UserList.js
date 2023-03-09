import React from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./app/redux/userActions";
import { useState, useEffect } from "react";
import logo from "./pokeapi_256.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function UserList() {
  const users = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`)
        .then((res) => {
          res.json().then((info) => {
            dispatch(setUsers(info));
          });
        })
        .catch((error) => {
          console.log("Something went wrong " + error);
        });
    };
    fetchData();
  }, [limit, dispatch]);

  return (
    <>
      <div>
        <div className="left-side">
          <div className="images">
            <img src={logo} alt="" />
          </div>
          <ul className="user-list">
            {users?.results?.map((user, index) => {
              return (
                // <div>
                <li key={index}>
                  <Link to={`/pokemon/${user.name}`} key={user.id}>
                    {user.name}
                  </Link>
                </li>
                // </div>
              );
            })}
            <button onClick={() => setLimit(limit + 10)}>
              Load More Users
            </button>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default UserList;
