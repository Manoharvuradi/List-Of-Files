import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function UserComponent({ limit, setLimit }) {
  // http://localhost:3000/
  // https://pokeapi.co/api/v2/pokemon/${id}
  const dispatch = useDispatch();
  const user = useSelector((state) => state.individualUser.user);
  // const handleUser = (url) => {
  // console.log(url);
  //   const fetchData = async () => {
  //     await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur
  // `).then((res) =>
  //       res
  //         .json()
  //         .then((info) => {
  //           dispatch(selectedUser(info));
  //         })
  //         .catch((error) => {
  //           throw error;
  //         })
  //     );
  //   };
  // fetchData();
  // };
  console.log(user);
  return (
    <div>
      {/* <div className="left-side">
        <div className="images">
          <img src={logo} alt="" />
        </div>
        <ul className="user-list">
          {users?.results?.map((user, index) => {
            return (
              <div>
                <li>
                  <Link to={`/pokemon/${user.name}`} key={user.id}>
                    {user.name}
                  </Link>
                </li>
              </div>
            );
          })}
          <button onClick={() => setLimit(limit + 10)}>Load More Users</button>
        </ul>
      </div> */}
    </div>
  );
}

export default UserComponent;
