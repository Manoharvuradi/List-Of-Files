import Head from "next/head";
import Image from "next/image";
import logo from "../public/pokeapi_256.png";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "@/redux/pokemonActions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const list = useSelector((state) => state.allUsers.pokeMonsList);
  const loader = useSelector((state) => state.allUsers.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // console.log(isLoading);
  console.log(list);
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <main className={styles.main}>
        {loader ? (
          <h1>Loading..</h1>
        ) : (
          <div className="left-side">
            <div className="image">
              <img src={logo} alt="" />
            </div>
            <ul className="user-list">
              {list?.data.results?.map((user, index) => {
                return <li key={index}>{user.name}</li>;
              })}
            </ul>
          </div>
        )}
      </main>
    </>
  );
}
