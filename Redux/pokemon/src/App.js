import React from "react";
import "./App.css";
import logo from "./pokeapi_256.png";
import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Details from "./Details";
function App() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [singleUserApi, setSingleApiUser] = useState();
  const [url, setUrl] = useState();
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
  useEffect(() => {
    const fetchUrl = async () => {
      await fetch(url).then((res) =>
        res.json().then((info) => setSingleApiUser(info))
      );
    };
    fetchUrl();
  }, [url]);
  // console.log(apiData);
  const handleUser = async (userUrl, name) => {
    setUrl(userUrl);
  };
  const UserData = () => {
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
  };
  const Container = () => {
    return (
      <div>
        <div className="left-side">
          <div className="images">
            <img src={logo} alt="" />
          </div>
          <ul className="user-list">
            {apiData.results?.map((userName, index) => {
              return (
                <div>
                  <li
                    key={index}
                    onClick={() => {
                      handleUser(userName.url, userName.name);
                      navigate(`${userName.name}`);

                      // navigate(`${userName.url[userName.url.length - 1]}`);
                      console.log(userName.url);
                    }}
                  >
                    {userName.name}
                  </li>
                </div>
              );
            })}
            <button onClick={() => setLimit(limit + 10)}>
              Load More Users
            </button>
          </ul>
        </div>
      </div>
    );
  };

  const elementd = useRoutes([
    { path: "/", element: <Container /> },
    {
      path: ":name",
      // element: (
      //   <>
      //     <Container />
      //     <UserData singleUserApi={singleUserApi} />
      //   </>
      // ),
      element: <Details />,
    },
  ]);

  return <div className="App">{elementd}</div>;
}

export default App;
